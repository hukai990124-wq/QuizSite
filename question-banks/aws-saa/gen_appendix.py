# -*- coding: utf-8 -*-
"""生成 AWS 官方样题附录（中英对照，可作答）。官方样题是唯一权威、干净的来源。"""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "aws-saa"]))

import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "quiz_kit")))
sys.stdout.reconfigure(encoding='utf-8')

import quizkit as Q
import translate as T
import gen_saa as G   # 复用 CSS / 渲染函数

ROOT = G.ROOT
OUT  = os.path.join(ROOT, "output")
CACHE = os.path.join(T.TR, "official_zh.json")

qs = json.load(open(os.path.join(G.RAW, "official_parsed.json"), encoding="utf-8"))

if os.path.exists(CACHE):
    tr = json.load(open(CACHE, encoding="utf-8"))
else:
    tr = {str(q["num"]): T.translate_question(q) for q in qs}
    json.dump(tr, open(CACHE, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("已翻译并缓存 ->", CACHE)

N = len(qs)
b = []
b.append('<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">')
b.append('<meta name="viewport" content="width=device-width,initial-scale=1">')
b.append(f'<title>AWS SAA-C03 官方样题（中英对照）</title><style>{G.CSS}{Q.CSS}</style></head><body>')
b.append('<div class="wrap">')
b.append('<h1>AWS SAA-C03 官方样题 · 中英对照</h1>')
b.append(f'<p class="sub">共 {N} 题 · 来源：AWS 官方 Sample Questions（SAA-C03）· 官方答案与解析 · '
         f'点选项后按「确认作答」即刻判对错</p>')
b.append('<div class="toolbar"><div class="btns">')
b.append('<button class="primary" id="btn-sheet" type="button">答题卡</button>')
b.append('<button id="btn-wrong" type="button">只看错题</button>')
b.append('<button id="btn-expand" type="button">展开全部解析</button>')
b.append('<button id="btn-report" type="button">交卷</button>')
b.append('<button id="btn-reset" type="button">重置</button>')
b.append('<button onclick="window.print()" type="button">打印 / 存 PDF</button>')
b.append('</div>' + Q.bar_html(N) + '</div>')
for i, q in enumerate(qs, start=1):
    b.append(G.render_q_html(i, q, tr))
b.append('</div>' + Q.sheet_html(N) + Q.js("aws:official", N) + '</body></html>')

path = os.path.join(OUT, "appendix_official.html")
open(path, "w", encoding="utf-8").write("\n".join(b))
print(f"生成 -> {path}")
