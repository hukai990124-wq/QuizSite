# -*- coding: utf-8 -*-
"""合成 2009 年 A1 真题的原创补充听力音频（非官方原声）。"""
import asyncio
import os
import subprocess

import build_audio as BA
import parse_trans

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "audio_text", "a1-2009_synthetic.txt")
SLUG = "a1-2009-0516"
TMP = os.path.join("_tts_tmp", SLUG + "-synthetic-v3")


async def main():
    os.chdir(HERE)
    os.makedirs(BA.OUT, exist_ok=True)
    os.makedirs(TMP, exist_ok=True)
    with open(SOURCE, encoding="utf-8") as f:
        segments = parse_trans.parse(f.read())

    total = 0
    for tarea in (1, 2, 3, 4):
        repeat, gap = BA.REPEAT[tarea]
        names = []
        for tag, lines in BA.cut_segments(segments, tarea):
            parts_dir = os.path.join(TMP, "%s_t%d_%s" % (SLUG, tarea, tag))
            os.makedirs(parts_dir, exist_ok=True)
            segment = await BA.synth_segment(lines, parts_dir, repeat=repeat, gap_ms=gap)
            if not segment:
                continue
            target = os.path.join(BA.OUT, "%s_t%d_%s.mp3" % (SLUG, tarea, tag))
            subprocess.run([BA.FF, "-y", "-loglevel", "error", "-i", segment,
                            "-ac", "1", "-ar", "24000", "-b:a", "48k", target], check=True)
            size = os.path.getsize(target)
            total += size
            names.append("%s (%.0f KB)" % (tag, size / 1024))
        print("Tarea %d ×%d  %s" % (tarea, repeat, "  ".join(names)))
    print("Total: %.2f MB" % (total / 1048576))


if __name__ == "__main__":
    asyncio.run(main())
