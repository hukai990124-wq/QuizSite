# -*- coding: utf-8 -*-
"""裁出 A2 试卷里的图片。

两处用图：
  · 听力 Prueba 2 · Tarea 1 —— 每题 3 张图（A/B/C），共示例 + 6 题 = 7 组
  · 阅读 Prueba 1 · Tarea 3 —— 三个人物头像（A. ALICIA / B. EVA / C. SILVIA）

做法与 A1 相同：get_image_info() 取 bbox → 按行聚类 → 组内按 x 排序即 A/B/C，
逐张裁出（不整页截图），统一转 JPEG（长边 ≤ 420）。
"""
import os
import sys
import io
import pymupdf
from PIL import Image

OUT = "img/audio"
OUT_RD = "img"
DPI = 240
PAD = 3
MIN_W, MIN_H = 40, 40
ROW_GAP = 60
MAX_SIDE = 420
QUALITY = 85


def groups(page):
    infos = [i for i in page.get_image_info()
             if (i['bbox'][2] - i['bbox'][0]) > MIN_W
             and (i['bbox'][3] - i['bbox'][1]) > MIN_H]
    infos.sort(key=lambda i: ((i['bbox'][1] + i['bbox'][3]) / 2, i['bbox'][0]))
    out, cur, last = [], [], None
    for i in infos:
        cy = (i['bbox'][1] + i['bbox'][3]) / 2
        if last is None or abs(cy - last) <= ROW_GAP:
            cur.append(i)
        else:
            out.append(cur)
            cur = [i]
        last = cy
    if cur:
        out.append(cur)
    for g in out:
        g.sort(key=lambda i: i['bbox'][0])
    return out


# slug -> (pdf, [(页0基, 组序号, 字母, 名字, 输出目录), …])
SPECS = {
    "m0-2020": ("raw/DELE_A2_v2020_Modelo0.pdf", [
        (10, 0, "ABC", "ex0", OUT),
        (10, 1, "ABC", "q1", OUT),
        (10, 2, "ABC", "q2", OUT),
        (11, 0, "ABC", "q3", OUT),
        (11, 1, "ABC", "q4", OUT),
        (11, 2, "ABC", "q5", OUT),
        (11, 3, "ABC", "q6", OUT),
    ], [
        # 阅读 Tarea 3 人物照（A/B/C 竖排，各自成组）
        (8, 0, "A", "modelo0_v2020_t3a", OUT_RD),
        (8, 1, "B", "modelo0_v2020_t3b", OUT_RD),
        (8, 2, "C", "modelo0_v2020_t3c", OUT_RD),
    ]),
    # 旧版样卷：只有听力 Tarea 5 用图（A–H 共 8 张，排成两行四列）
    "m0-v2": ("raw/a2_modelo_0_v2.pdf", [
        (24, 0, "ABCD", "pool", OUT),
        (24, 1, "EFGH", "pool", OUT),
    ], []),
}


def run(slug):
    pdf, aud_spec, read_spec = SPECS[slug]
    doc = pymupdf.open(pdf)
    made, warn = 0, []
    for spec in (aud_spec, read_spec):
        for pno, gi, letters, name, outdir in spec:
            gs = groups(doc[pno])
            if gi >= len(gs):
                warn.append("%s p%d 组%d 不存在（该页只有 %d 组）" % (slug, pno + 1, gi, len(gs)))
                continue
            g = gs[gi]
            if len(g) != len(letters):
                warn.append("%s p%d 组%d 图数 %d ≠ 字母数 %d" % (slug, pno + 1, gi, len(g), len(letters)))
            for L, inf in zip(letters, g):
                b = inf['bbox']
                clip = pymupdf.Rect(b[0] - PAD, b[1] - PAD, b[2] + PAD, b[3] + PAD)
                pix = doc[pno].get_pixmap(clip=clip, dpi=DPI)
                im = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
                if max(im.size) > MAX_SIDE:
                    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
                os.makedirs(outdir, exist_ok=True)
                if outdir == OUT:
                    out = os.path.join(outdir, "%s_%s_%s.jpg" % (slug, name, L))
                else:
                    out = os.path.join(outdir, "%s.jpg" % name)
                im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
                made += 1
    doc.close()
    return made, warn


def main():
    os.makedirs(OUT, exist_ok=True)
    want = sys.argv[1:] or list(SPECS)
    total = 0
    allwarn = []
    for slug in want:
        n, w = run(slug)
        total += n
        allwarn += w
        print("%-10s 裁出 %3d 张" % (slug, n))
    print("合计 %d 张" % total)
    for w in allwarn:
        print("  ⚠", w)


if __name__ == "__main__":
    main()
