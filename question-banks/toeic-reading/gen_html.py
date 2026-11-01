# -*- coding: utf-8 -*-
"""Generate interactive (answerable) HTML per test + index."""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "toeic-reading"]))

import json, os, sys, html
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "quiz_kit")))
import quizkit as Q

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(BASE, "output")
LETTERS = ['A', 'B', 'C', 'D']
PLAN = json.load(open(os.path.join(OUT, "_plan.json"), encoding='utf-8'))

CSS = """
:root{--ink:#1b1b1b;--muted:#5b6570;--line:#e2e6ea;--green:#0b6b3a;--paper:#f6f8f9}
*{box-sizing:border-box}
html,body{margin:0}
body{font:16px/1.55 -apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Microsoft YaHei",sans-serif;color:var(--ink);background:#eceff1}
.wrap{max-width:880px;margin:0 auto;background:#fff;padding:30px 42px 90px;box-shadow:0 1px 8px rgba(0,0,0,.08)}
h1{font-size:26px;margin:0 0 8px}
.meta{color:var(--muted);font-size:14px;margin:2px 0}
.toolbar{position:sticky;top:0;background:#fff;padding:10px 0 12px;border-bottom:1px solid var(--line);margin-bottom:14px;z-index:5}
.toolbar .btns{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:9px}
.toolbar button,.toolbar a.navback{font:inherit;font-size:13px;padding:6px 13px;border-radius:7px;border:1px solid var(--line);background:#fff;color:#334155;cursor:pointer;text-decoration:none;display:inline-block}
.toolbar button:hover,.toolbar a.navback:hover{background:#f3f6f8}
.toolbar a.navback{font-weight:600;color:#0a5d33;border-color:#c7e0d2;background:#f3faf6}
.toolbar button.primary{background:var(--green);border-color:var(--green);color:#fff}
.toolbar button.primary:hover{background:#0a5d33}
h2{margin:38px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--green);font-size:20px}
h3{font-size:15px;color:var(--green);margin:18px 0 8px}
.dirs{background:#eef5f0;border-left:4px solid var(--green);padding:9px 13px;font-size:13.5px;color:#33413a;border-radius:0 5px 5px 0;margin:8px 0 16px}
.ref{font-weight:600;margin:20px 0 8px;color:#222}
.q{margin:16px 0 0;padding-bottom:14px;border-bottom:1px solid #f0f3f5;scroll-margin-top:96px}
.q:last-child{border-bottom:none}
.q .stem{margin-bottom:2px}
.q .n{font-weight:700;margin-right:5px}
.opts{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 0;padding:0}
@media (max-width:680px){.opts{grid-template-columns:1fr}}
.opts li{display:flex;align-items:flex-start;gap:9px;padding:8px 12px;border:1px solid var(--line);border-radius:8px;background:#fcfcfd;font-size:15px}
.letter{flex:0 0 22px;height:22px;line-height:22px;text-align:center;font-weight:700;font-size:12px;background:#fff;border:1px solid #d1d5db;border-radius:999px;margin-top:1px}
.otext{flex:1 1 auto}
.passage{white-space:pre-wrap;background:var(--paper);border:1px solid #e6eaed;border-left:4px solid #c6cdd3;padding:13px 16px;border-radius:5px;font-size:14.5px;line-height:1.5;margin:6px 0 12px;color:#20303a}
.passage .ttl{font-weight:700;display:block;margin-bottom:6px;color:#111}
details.ans{margin-top:10px;border:1px solid #dfe8e2;background:#f7faf8;border-radius:9px}
details.ans summary{cursor:pointer;padding:8px 13px;font-weight:600;font-size:13px;color:#0b6b3a}
details.ans .expl{padding:0 14px 12px;font-size:14px;color:#3d4650;line-height:1.6}
details.ans .expl .k{font-weight:700;color:var(--green)}
.card{border:1px solid var(--line);border-radius:10px;padding:14px 18px;margin:12px 0;display:block;text-decoration:none;color:inherit}
.card:hover{border-color:#9db3c4;background:#fafcfd}
.card .t{font-weight:600}
.card .s{color:var(--muted);font-size:13px}
@media print{
  body{background:#fff}
  .wrap{box-shadow:none;max-width:none;padding:0 6mm}
  .toolbar{display:none}
  h2{page-break-after:avoid}
  .q,.opts,.passage{page-break-inside:avoid}
  details.ans{display:block}
  details.ans .expl{display:block}
}
"""


def esc(t):
    return html.escape(t or '')


def render_q(q):
    ans = (q.get('answer') or '').strip()
    opts = "".join(
        f'<li class="opt" data-letter="{k}"><span class="letter">{k}</span>'
        f'<span class="otext">{esc(q["options"][k])}</span></li>'
        for k in LETTERS if k in q['options'])
    exp = esc(q.get('explanation') or '')
    explain = (f'<details class="ans"><summary>解析 / Explanation</summary>'
               f'<div class="expl"><span class="k">{esc(ans)}.</span> {exp}</div></details>') if exp else ''
    return (f'<div class="q" id="q{q["num"]}" data-n="{q["num"]}" data-ans="{esc(ans)}">\n'
            f'<div class="stem"><span class="n">{q["num"]}.</span>{esc(q["stem"].strip())}</div>\n'
            f'<ol class="opts">{opts}</ol>\n'
            f'{Q.act_html()}\n'
            f'<div class="verdict"></div>\n'
            f'{explain}\n'
            f'</div>\n')


def render_test_html(idx, source, parts):
    total = sum(len(g['questions']) for pt in parts for g in pt['groups'])
    store = f"toeic:t{idx:02d}"
    body = []
    body.append('<div class="toolbar"><div class="btns">'
                '<a class="navback" href="index.html">← 套题列表</a>'
                '<button class="primary" id="btn-sheet" type="button">答题卡</button>'
                '<button id="btn-wrong" type="button">只看错题</button>'
                '<button id="btn-expand" type="button">展开全部解析</button>'
                '<button id="btn-report" type="button">交卷</button>'
                '<button id="btn-reset" type="button">重置</button>'
                '<button onclick="window.print()" type="button">打印 / 存 PDF</button>'
                '</div>' + Q.bar_html(total) + '</div>')
    body.append(f'<h1>TOEIC® Reading Practice Test {idx:02d}</h1>')
    body.append(f'<p class="meta">来源：{esc(source)}</p>')
    body.append('<p class="meta">100 题 · Part 5（30）+ Part 6（16）+ Part 7（54）· 建议用时 75 分钟 · '
                '点选项后按「确认作答」即可判对错，进度自动保存在本机</p>')
    for pt in parts:
        p = pt['part']
        name = {5: 'Incomplete Sentences', 6: 'Text Completion', 7: 'Reading Comprehension'}[p]
        qall = [q for g in pt['groups'] for q in g['questions']]
        rng = f"{qall[0]['num']}–{qall[-1]['num']}" if qall else ''
        body.append(f'<h2>PART {p} — {name}（{rng}）</h2>')
        body.append(f'<div class="dirs"><b>Directions:</b> {esc(pt["directions"])}</div>')
        for g in pt['groups']:
            if g['docs']:
                gq = g['questions']
                if gq:
                    r = f"{gq[0]['num']}–{gq[-1]['num']}" if len(gq) > 1 else str(gq[0]['num'])
                    kind = g['docs'][0]['kind'] or 'text'
                    body.append(f'<div class="ref">Questions {r} refer to the following {esc(kind)}.</div>')
                for d in g['docs']:
                    inner = (f'<span class="ttl">{esc(d["title"])}</span>'
                             if d['title'] and d['title'].lower() not in (d['kind'] or '').lower() else '')
                    body.append(f'<div class="passage">{inner}{esc(d["text"])}</div>')
            for q in g['questions']:
                body.append(render_q(q))
    return (f'<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8">'
            f'<meta name="viewport" content="width=device-width,initial-scale=1">'
            f'<title>TOEIC Reading Practice Test {idx:02d}</title>'
            f'<style>{CSS}{Q.CSS}</style></head><body><div class="wrap">'
            + "\n".join(body) + '</div>' + Q.sheet_html(total) + Q.js(store, total) + '</body></html>')


files = []
for i, item in enumerate(PLAN, 1):
    source, parts = item
    fn = f"TOEIC_Reading_Test_{i:02d}.html"
    open(os.path.join(OUT, fn), 'w', encoding='utf-8').write(render_test_html(i, source, parts))
    files.append((i, source, fn))
    print("html:", fn)

# ---------- index ----------
IDX = """
body{margin:0;background:#eceff1;font:16px/1.55 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:#1b1b1b}
.wrap{max-width:880px;margin:0 auto;background:#fff;padding:34px 42px 70px;box-shadow:0 1px 8px rgba(0,0,0,.08)}
h1{font-size:26px;margin:0 0 8px}
.meta{color:#5b6570;font-size:14px;margin:2px 0 22px}
a.card{display:block;border:1px solid #e2e6ea;border-radius:10px;padding:14px 18px;margin:12px 0;text-decoration:none;color:inherit}
a.card:hover{border-color:#9db3c4;background:#fafcfd}
a.card .t{font-weight:600}
a.card .s{color:#5b6570;font-size:13px}
"""
cards = []
for i, source, fn in files:
    store = f"toeic:t{i:02d}"
    cards.append('<a class="card" href="%s" data-quiz-key="%s" data-quiz-total="100">'
                 '<div class="t">TOEIC Reading Practice Test %02d</div>'
                 '<div class="s">%s · 100 题 · 可作答判分</div>'
                 '<div class="pg"><i></i><span>未开始</span></div></a>'
                 % (fn, store, i, esc(source)))
idx = (f'<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">'
       f'<meta name="viewport" content="width=device-width,initial-scale=1">'
       f'<title>TOEIC Reading 10 套练习</title><style>{IDX}{Q.IDX_CSS}</style></head><body><div class="wrap">'
       f'<h1>TOEIC® Reading 练习 · 10 套</h1>'
       f'<p class="meta">每套 100 题：Part 5（30）+ Part 6（16）+ Part 7（54），建议用时 75 分钟。<br>'
       f'进卷后点选项 →「确认作答」即刻判对错并给出解析；正确率与进度自动保存在本机浏览器，关掉再开继续做。</p>'
       + "\n".join(cards) + '</div>' + Q.index_script() + '</body></html>')
open(os.path.join(OUT, "index.html"), 'w', encoding='utf-8').write(idx)
print("html: index.html")
