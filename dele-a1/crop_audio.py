# -*- coding: utf-8 -*-
"""裁出听力题的图片选项。

听力 Prueba 2 的 Tarea 1（每题 3-4 张图）和 Tarea 2（图片池 A-I）
在 PDF 里都是嵌入位图。这里用 get_image_info() 取 bbox 后按行聚类分组，
组内按 x 排序即对应 A/B/C/D…，逐张裁出，避免整页截图。

注意：
· 2008 旧版样卷每页有 2500+ 个装饰碎片，必须用尺寸过滤掉。
· 产出统一存 **JPEG**（q=85）并把长边压到 MAX_SIDE：原 300dpi PNG 平均 91KB，
  126 张就 11MB；照片类内容转 JPEG 后每张约 12KB，整站轻 9MB 左右。
"""
import os
import sys
import io
import pymupdf
from PIL import Image

OUT = "img/audio"
DPI = 240
PAD = 3
MIN_W, MIN_H = 40, 40   # 小于此尺寸的视为装饰碎片
ROW_GAP = 60            # 行间 y 距超过此值即认为换行
MAX_SIDE = 420          # 长边上限（显示最大也就 ~200px，留 2 倍余量）
QUALITY = 85


def groups(page):
    """把一页里的图片按「行」聚类，组内按 x 排序。"""
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


# slug -> (pdf, [(页, 组序号, 字母, 名字), …])
SPECS = {
    "m0-2020": ("raw/modelo0_v2020.pdf", [
        (10, 0, "ABC", "ex0"),
        (10, 1, "ABC", "q1"),
        (11, 0, "ABC", "q2"),
        (11, 1, "ABC", "q3"),
        (11, 2, "ABC", "q4"),
        (11, 3, "ABC", "q5"),
        (12, 0, "ABCDE", "pool"),
        (12, 1, "FGHI", "pool"),
    ]),
    "m0-2008": ("raw/modelo0_2008.pdf", [
        (13, 0, "ABCD", "ex0"),
        (13, 1, "ABCD", "q1"),
        (13, 2, "ABCD", "q2"),
        (14, 0, "ABCD", "q3"),
        (14, 1, "ABCD", "q4"),
        (14, 2, "ABCD", "q5"),
        (15, 0, "ABCDE", "pool"),
        (15, 1, "FGHI", "pool"),
    ]),
    "a1-2009": ("raw/modelo_examen_nivel_a1_16mayo_pruebas1y2.pdf", [
        (14, 0, "ABCD", "ex0"),
        (14, 1, "ABCD", "q1"),
        (15, 0, "ABCD", "q2"),
        (15, 1, "ABCD", "q3"),
        (15, 2, "ABCD", "q4"),
        (15, 3, "ABCD", "q5"),
        (16, 0, "ABCDE", "pool"),
        (16, 1, "FGHI", "pool"),
    ]),
    "a1-2011": ("raw/2011/a1_2011_cl_ca.pdf", [
        (13, 0, "ABCD", "ex0"),
        (13, 1, "ABCD", "q1"),
        (14, 0, "ABCD", "q2"),
        (14, 1, "ABCD", "q3"),
        (14, 2, "ABCD", "q4"),
        (14, 3, "ABCD", "q5"),
        (15, 0, "ABCDE", "pool"),
        (15, 1, "FGHI", "pool"),
    ]),
}


def run(slug):
    pdf, spec = SPECS[slug]
    doc = pymupdf.open(pdf)
    made, warn = 0, []
    for pno, gi, letters, name in spec:
        gs = groups(doc[pno])
        if gi >= len(gs):
            warn.append("%s p%d 组%d 不存在（该页只有 %d 组）" % (slug, pno, gi, len(gs)))
            continue
        g = gs[gi]
        if len(g) != len(letters):
            warn.append("%s p%d 组%d 图数 %d ≠ 字母数 %d"
                        % (slug, pno, gi, len(g), len(letters)))
        for L, inf in zip(letters, g):
            b = inf['bbox']
            clip = pymupdf.Rect(b[0] - PAD, b[1] - PAD, b[2] + PAD, b[3] + PAD)
            pix = doc[pno].get_pixmap(clip=clip, dpi=DPI)
            im = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
            if max(im.size) > MAX_SIDE:
                im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
            out = os.path.join(OUT, "%s_%s_%s.jpg" % (slug, name, L))
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
    print("合计 %d 张 -> %s" % (total, OUT))
    for w in allwarn:
        print("  ⚠", w)


if __name__ == "__main__":
    main()
