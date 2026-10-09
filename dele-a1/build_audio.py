# -*- coding: utf-8 -*-
"""按官方听力原文合成音频（2020 样卷有官方真人音，本脚本只处理 2008 / 2011）。

· 逐句合成：不同说话人用不同音色，拼成一段完整听力
· Tarea 1 按对话分段、Tarea 2 按消息分段、Tarea 3 按句分段、Tarea 4 整段
· 语速放慢 10%（A1 级别）
· **复现真题节奏**：官方流程是「同一段读 N 遍 + 留出作答/书写停顿」，
  Tarea 1/2/3 读 2 遍各留 6 秒，Tarea 4（手写填空）读 3 遍各留 30 秒，
  否则「听三遍再填空」的题根本没法做。
· 句级片段缓存复用（文本没变就不重新请求 TTS），重复朗读靠 ffmpeg 拼接，
  不额外消耗合成次数。
"""
import asyncio
import os
import re
import subprocess
import sys

import edge_tts
import imageio_ffmpeg

import parse_trans

FF = imageio_ffmpeg.get_ffmpeg_exe()
OUT = "audio"
TMP = "_tts_tmp"
RATE = "-10%"

# Tarea → (朗读遍数, 每遍之后的停顿毫秒)
REPEAT = {
    1: (2, 6000),
    2: (2, 6000),
    3: (2, 6000),
    4: (3, 30000),
}

SOUNDS = {
    "HOMBRE": "es-ES-AlvaroNeural",
    "CHICO": "es-ES-AlvaroNeural",
    "PACO": "es-ES-AlvaroNeural",
    "MUJER": "es-ES-ElviraNeural",
    "CHICA": "es-ES-ElviraNeural",
    "LUCÍA": "es-ES-ElviraNeural",
    "LUCIA": "es-ES-ElviraNeural",
    "VOZ FEMENINA": "es-ES-XimenaNeural",
    "VOZ DEL NARRADOR": "es-ES-XimenaNeural",
    "NARRADOR": "es-ES-XimenaNeural",
}
DEFAULT_VOICE = "es-ES-XimenaNeural"


def voice_of(who):
    return SOUNDS.get(who.upper(), DEFAULT_VOICE)


def clean_text(t):
    """TTS 前的文本清洗：去掉舞台指示、连字符、多余空白。"""
    t = re.sub(r"\[[^\]]*\]", " ", t.split("]:")[-1] if "]:" in t else t)
    t = re.sub(r"\([^)]*\)", " ", t)
    t = re.sub(r"^\s*[-–—]\s*", "", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def cut_segments(segs, tarea):
    """按 Tarea 的题型决定分段粒度，返回 [(tag, lines), …]。

    Tarea 1 → 每个对话一个音频；Tarea 2 → 每条消息一个；
    Tarea 3 → 逐句（原文把「示例」和「Todos los días」写在同一块里，
    拆开才能让每题对上自己的音频）；Tarea 4 → 整段一个。
    """
    out = []
    for s in segs:
        if s["tarea"] != tarea:
            continue
        if tarea == 3:
            for j, (w, b) in enumerate(s["lines"]):
                tag = s["tag"] if j == 0 else "%s_%d" % (s["tag"], j)
                out.append((tag, [(w, b)]))
        else:
            out.append((s["tag"], s["lines"]))
    return out


async def synth_one(text, voice, path):
    # 片段缓存：文本没变就直接复用，重复朗读不必再请求一次 TTS
    if os.path.exists(path) and os.path.getsize(path) > 800:
        return True
    for attempt in range(3):
        try:
            c = edge_tts.Communicate(text, voice, rate=RATE)
            await c.save(path)
            if os.path.getsize(path) > 800:
                return True
        except Exception as e:
            if attempt == 2:
                print("    合成失败:", str(e)[:70])
        await asyncio.sleep(1)
    return False


def silence(ms, path):
    """生成一段等长静音（mp3），用于复现真题的作答停顿。"""
    if not (os.path.exists(path) and os.path.getsize(path) > 200):
        subprocess.run([FF, "-y", "-loglevel", "error", "-f", "lavfi",
                        "-i", "anullsrc=r=24000:cl=mono", "-t", "%.3f" % (ms / 1000.0),
                        "-c:a", "libmp3lame", "-b:a", "48k", path], check=True)
    return path


async def synth_segment(lines, parts_dir, repeat=1, gap_ms=0):
    """一段 → 逐句合成 → 按真题节奏（读 N 遍 + 停顿）用 ffmpeg 拼接。"""
    files = []
    for i, (who, txt) in enumerate(lines):
        t = clean_text(txt)
        if not t:
            continue
        p = os.path.join(parts_dir, "%02d.mp3" % i)
        if await synth_one(t, voice_of(who), p):
            files.append(p)
    if not files:
        return None
    seq = list(files)
    if gap_ms:
        seq.append(silence(gap_ms, os.path.join(parts_dir, "_gap.mp3")))
    seq = seq * max(1, repeat)
    lst = os.path.join(parts_dir, "list.txt")
    with open(lst, "w", encoding="utf-8") as f:
        for p in seq:
            f.write("file '%s'\n" % os.path.abspath(p).replace("\\", "/"))
    out = os.path.join(parts_dir, "_seg.mp3")
    # 重编码拼接：静音片段与语音片段的 mp3 帧参数不一致，-c copy 会产生
    # 「non monotonically increasing dts」并可能出现播放卡顿，这里统一转一次。
    subprocess.run([FF, "-y", "-loglevel", "error", "-f", "concat", "-safe", "0",
                    "-i", lst, "-ac", "1", "-ar", "24000", "-b:a", "48k",
                    "-c:a", "libmp3lame", out], check=True)
    return out


async def main():
    sys.stdout.reconfigure(encoding="utf-8")
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(TMP, exist_ok=True)
    targets = [
        ("m0-2008", "parse/audio_text/m0_2008_trans.txt"),
        ("a1-2011", "parse/audio_text/a1_2011_trans.txt"),
    ]
    for slug, txt_path in targets:
        segs = parse_trans.parse(open(txt_path, encoding="utf-8").read())
        print("=" * 60)
        print(slug)
        total = 0
        for tarea in (1, 2, 3, 4):
            chunks = cut_segments(segs, tarea)
            repeat, gap = REPEAT[tarea]
            names = []
            for i, (tag, lines) in enumerate(chunks):
                pd = os.path.join(TMP, "%s_t%d_%s" % (slug, tarea, tag))
                os.makedirs(pd, exist_ok=True)
                seg = await synth_segment(lines, pd, repeat=repeat, gap_ms=gap)
                if not seg:
                    continue
                final = os.path.join(OUT, "%s_t%d_%s.mp3" % (slug, tarea, tag))
                subprocess.run([FF, "-y", "-loglevel", "error", "-i", seg,
                                "-ac", "1", "-ar", "24000", "-b:a", "48k", final],
                               check=True)
                names.append("%s(%.0fKB)" % (tag, os.path.getsize(final) / 1024))
                total += os.path.getsize(final)
            print("   T%d ×%d读+%.0fs  %s" % (tarea, repeat, gap / 1000.0, "  ".join(names)))
        print("   → 合计 %.2f MB" % (total / 1048576))


if __name__ == "__main__":
    asyncio.run(main())
