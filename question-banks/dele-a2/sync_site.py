# -*- coding: utf-8 -*-
"""把 dele-a2/out/ 同步进 site/dele-a2/，并补齐站点侧的两处注入。

site/ 里的页面比 out/ 多三样东西（都不是 build.py 产出的）：
  1) 首页右上的「← 题库总览」固定链接（只加在 dele-a2/index.html）
  2) i18n 三语切换（由 quiz_kit/i18n_inject.py 注入，幂等）
  3) 左下角在线人数控件 <!--pc:js-->（站点层追加）

用法：
    python sync_site.py          # 同步 + 注入
（改完题库先跑 build.py，再跑这个；最后 git push 才会到线上。）
"""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "dele-a2"]))

import os
import shutil
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
SRC = os.path.join(HERE, "out")
DST = os.path.join(ROOT, "site", "dele-a2")
PY = sys.executable

TOP_LINK = ('<body><a href="../index.html" title="返回题库总览" style="position:fixed;'
            "right:14px;top:14px;z-index:99;background:rgba(255,255,255,.95);"
            "border:1px solid #d8dee5;border-radius:99px;padding:6px 14px;"
            "font:12.5px/1.4 -apple-system,'Segoe UI','Microsoft YaHei',sans-serif;"
            "color:#334155;text-decoration:none;box-shadow:0 1px 4px rgba(0,0,0,.10)\">"
            "← 题库总览</a>")
PC_BLOCK = ('<!--pc:js-->\n<script src="__REL__assets/presence.js"></script>\n<!--/pc:js-->\n')


def main():
    if not os.path.isdir(SRC):
        print("！找不到 out/，先跑 build.py")
        return 1

    # 1) 整体替换 site/dele-a2
    if os.path.isdir(DST):
        shutil.rmtree(DST)
    shutil.copytree(SRC, DST)
    print("复制 out/ → site/dele-a2/ （%d 个文件）" % sum(len(f) for _, _, f in os.walk(DST)))

    # 2) 首页加上「← 题库总览」
    idx = os.path.join(DST, "index.html")
    with open(idx, "r", encoding="utf-8", newline="") as f:
        t = f.read()
    if "题库总览" not in t:
        t = t.replace("<body>", TOP_LINK, 1)
        with open(idx, "w", encoding="utf-8", newline="") as f:
            f.write(t)
        print("已加「← 题库总览」")
    else:
        print("「题库总览」已存在，跳过")

    # 3) i18n 注入（幂等，会遍历整个 site/）
    r = subprocess.run([PY, os.path.join(ROOT, "quiz_kit", "i18n_inject.py")])
    if r.returncode != 0:
        print("！i18n 注入失败")
        return r.returncode

    # 4) 在线人数控件
    #    前缀必须相对【站点根 site/】算，不能相对本套目录：
    #    assets/ 位于站点根，页面在下一层，相对 DST 算会得出空前缀（线上 404）。
    n = 0
    SITE = os.path.join(ROOT, "site")
    for dp, dn, fn in os.walk(DST):
        rel = os.path.relpath(dp, SITE).replace("\\", "/")
        depth = 0 if rel == "." else len(rel.split("/"))
        prefix = "../" * depth
        for f in sorted(fn):
            if not f.lower().endswith(".html"):
                continue
            p = os.path.join(dp, f)
            with open(p, "r", encoding="utf-8", newline="") as fh:
                t = fh.read()
            if "presence.js" in t:
                continue
            eol = "\r\n" if t.count("\r\n") * 2 > t.count("\n") else "\n"
            block = PC_BLOCK.replace("\n", eol).replace("__REL__", prefix)
            t = t.replace("</body>", block + "</body>", 1)
            with open(p, "w", encoding="utf-8", newline="") as fh:
                fh.write(t)
            n += 1
    print("已注入在线人数控件 %d 页" % n)
    print("完成。接着：cd %s && git add -A && git commit && git push" % ROOT)
    return 0


if __name__ == "__main__":
    sys.exit(main())
