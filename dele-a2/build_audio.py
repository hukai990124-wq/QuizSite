# -*- coding: utf-8 -*-
"""按官方听力原文合成音频（2020 版样卷有官方真人音，本脚本只处理旧版样卷）。

· 逐句合成：不同说话人用不同音色，拼成一段完整听力
· 旧版样卷听力共 5 个 Tarea：T1 一条广播一段、T2 整段新闻、T3 一则留言一段、
  T4 / T5 各一整段对话
· 语速放慢 5%（A2 级别）
· **复现真题节奏**：官方流程是「同一段读 2 遍 + 留出作答停顿」，
  按原卷标注每遍之后接 6 秒静音。
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
RATE = "-5%"

# Tarea → (朗读遍数, 每遍之后的停顿毫秒)
# 旧版样卷听力共 5 个 Tarea，原卷标注每段读 2 遍；保留 6 秒作答停顿复现真题节奏。
REPEAT = {
    1: (2, 6000),
    2: (2, 6000),
    3: (2, 6000),
    4: (2, 6000),
    5: (2, 6000),
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
    """返回 [(tag, lines), …]。

    旧版样卷的原文已经按「Anuncio N / MENSAJE N」分好段（见 parse_trans.py 的
    anuncio / mensaje 两种模式），所以这里不再二次切分 —— 一段对应一个音频：
      · T1 → ex0 + q1…q7（每条广播广告一段）
      · T2 → 整段新闻（一段）
      · T3 → ex0 + q1…q6（每则留言一段）
      · T4 / T5 → 整段对话（各一段）
    """
    return [(s["tag"], s["lines"]) for s in segs if s["tarea"] == tarea]


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
        ("m0-v2", "parse/audio_text/m0_v2_trans.txt"),
    ]
    for slug, txt_path in targets:
        segs = parse_trans.parse(open(txt_path, encoding="utf-8").read())
        print("=" * 60)
        print(slug)
        total = 0
        for tarea in (1, 2, 3, 4, 5):
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
