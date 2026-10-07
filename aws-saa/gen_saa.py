# -*- coding: utf-8 -*-
"""AWS SAA-C03 练习册组装器（可作答版）。
用法: python gen_saa.py <source> <total>
  source = hydranode(真题线) | ditectrev(合规线)
读取结构化题库 + 中文翻译，生成中英对照、可作答判分的 HTML/MD，两条线分开输出。"""
import sys, os, json, html, glob
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/quiz_kit")
import quizkit as Q

ROOT = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/aws-saa"
RAW  = os.path.join(ROOT, "raw")

SOURCE = sys.argv[1] if len(sys.argv) > 1 else "hydranode"
TOTAL  = int(sys.argv[2]) if len(sys.argv) > 2 else 500

CFG = {
    "hydranode":  {"line": "real",       "file": "hydranode_parsed.json", "name": "真题演练卷", "src": "HydraNode 免费题库（考生回忆真题，仅供参考）",
                   "tr": ("tr_part*.json", "auto_*.json")},
    "ditectrev":  {"line": "compliance", "file": "ditectrev_parsed.json", "name": "原创练习卷", "src": "Ditectrev 原创题库（非真题 dump）",
                   "tr": ("comp_*.json",)},
}
cfg = CFG[SOURCE]
OUT = os.path.join(ROOT, "output", cfg["line"])
os.makedirs(OUT, exist_ok=True)
PER_PART = 50

def esc(t):
    return html.escape(t or "").replace("\n", "<br>")

def load_master():
    data = json.load(open(os.path.join(RAW, cfg["file"]), encoding="utf-8"))
    return sorted(data, key=lambda q: q.get("num") or 0)

def load_tr():
    tr = {}
    for pat in cfg["tr"]:
        for f in sorted(glob.glob(os.path.join(ROOT, "trans", pat))):
            try:
                for k, v in json.load(open(f, encoding="utf-8")).items():
                    if str(k) not in tr or (v or {}).get("stem"):
                        tr[str(k)] = v
            except Exception as e:
                print("  ! 翻译文件读取失败", f, e)
    return tr

def render_q_html(idx, q, tr):
    n = q["num"]; zh = tr.get(str(n), {}); has_zh = bool(zh.get("stem")); h = []
    ans = (q.get("answer") or "").strip()
    h.append(f'<div class="q" id="q{idx}" data-n="{idx}" data-ans="{esc(ans)}">')
    h.append(f'  <div class="qhead"><span class="qno">Question {idx}</span>'
             + (f'<span class="badge">{esc(q["type"])}</span>' if q.get("type") else '') + '</div>')
    h.append('  <div class="stem">')
    h.append(f'    <p class="en">{esc(q["stem"])}</p>')
    if has_zh:
        h.append(f'    <p class="zh">{esc(zh.get("stem"))}</p>')
    h.append('  </div>')
    zopts = zh.get("options") or {}
    h.append('  <ol class="opts">')
    for o in q["options"]:
        L = o["letter"]; zt = zopts.get(L, "")
        h.append(f'    <li class="opt" data-letter="{esc(L)}">')
        h.append(f'      <span class="letter">{esc(L)}</span><div class="otext">')
        h.append(f'        <p class="en">{esc(o["text"])}</p>')
        if zt:
            h.append(f'        <p class="zh">{esc(zt)}</p>')
        h.append('      </div>')
        h.append('    </li>')
    h.append('  </ol>')
    need = len([x for x in ans.split(",") if x.strip()])
    h.append(Q.act_html(need))
    h.append('  <div class="verdict"></div>')
    has_expl = bool(q.get("explanation") or zh.get("explanation"))
    label = "解析 / Explanation" if has_expl else "答案 / Answer"
    h.append(f'  <details class="ans"><summary>{label}</summary>')
    h.append(f'    <p class="correct">正确答案 <b>{esc(ans)}</b></p>')
    if has_expl:
        h.append('    <div class="expl">')
        if q.get("explanation"):
            h.append(f'      <p class="en">{esc(q["explanation"])}</p>')
        if zh.get("explanation"):
            h.append(f'      <p class="zh">{esc(zh.get("explanation"))}</p>')
        h.append('    </div>')
    h.append('  </details>')
    h.append('</div>')
    return "\n".join(h)

CSS = """
:root{--line:#e3e6ea;--muted:#6b7280;--en:#111827;--zh:#0f4c81;--badge:#eff6ff;--badge-line:#bfdbfe}
*{box-sizing:border-box}
body{margin:0;background:#f5f6f8;color:var(--en);font:15px/1.65 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:32px 22px 90px}
h1{font-size:24px;margin:0 0 6px}
.sub{color:var(--muted);margin:0 0 22px;font-size:13px}
.toolbar{position:sticky;top:0;z-index:9;background:#fff;border:1px solid var(--line);border-radius:12px;
 padding:10px 14px;margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .btns{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:9px}
.toolbar button{font:inherit;font-size:13px;padding:6px 12px;border:1px solid var(--line);background:#fff;border-radius:8px;cursor:pointer}
.toolbar button:hover{background:#f3f4f6}
.toolbar button.primary{background:#0b6b3a;border-color:#0b6b3a;color:#fff}
.toolbar button.primary:hover{background:#0a5d33}
.q{background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin:0 0 18px;scroll-margin-top:118px}
.qhead{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.qno{font-weight:700;font-size:15px}
.badge{font-size:11px;color:#1d4ed8;background:var(--badge);border:1px solid var(--badge-line);border-radius:999px;padding:2px 9px}
.stem p{margin:0 0 6px}
.en{color:var(--en)}
.zh{color:var(--zh);font-size:14px}
.zh:before{content:"中译 ";font-size:10px;color:#9ca3af;letter-spacing:.5px}
.opts{list-style:none;margin:12px 0 0;padding:0}
.opts li{display:flex;gap:10px;padding:9px 12px;border:1px solid var(--line);border-radius:10px;margin-bottom:7px;background:#fcfcfd}
.letter{flex:0 0 22px;height:22px;line-height:22px;text-align:center;font-weight:700;font-size:12px;background:#fff;border:1px solid #d1d5db;border-radius:999px}
.otext{flex:1 1 auto;min-width:0}
.opts p{margin:0 0 4px}
details.ans{margin-top:12px;border:1px solid #cdebd6;background:#f4fdf7;border-radius:10px}
details.ans summary{cursor:pointer;padding:10px 14px;font-weight:600;font-size:13px;color:#065f46}
details.ans .correct,details.ans .expl{padding:0 14px}
details.ans .correct{font-size:14px;margin:4px 0 8px}
details.ans .correct b{color:#047857;font-size:16px}
details.ans .expl{padding-bottom:12px}
a.card{display:block;background:#fff;border:1px solid #e3e6ea;border-radius:12px;padding:15px 18px;
 margin-bottom:10px;text-decoration:none;color:#111827}
a.card:hover{border-color:#93c5fd;background:#f8fbff}
a.card .n{font-weight:700}
a.card .r{color:#6b7280;font-size:13px;margin-top:3px}
@media print{
 body{background:#fff}
 .toolbar{display:none}
 .wrap{max-width:none;padding:0}
 .q{border:none;border-bottom:1px solid #ddd;border-radius:0;padding:14px 0;page-break-inside:avoid;margin:0}
 details.ans{border:1px solid #ccc;background:#fff;display:block}
 details.ans .expl{display:block}
}
"""

def render_part_html(part_idx, qs_all, tr):
    start = (part_idx - 1) * PER_PART
    chunk = qs_all[start:start + PER_PART]
    store = f"aws:{cfg['line']}:{part_idx:02d}"
    b = []
    b.append('<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">')
    b.append('<meta name="viewport" content="width=device-width,initial-scale=1">')
    b.append(f'<title>AWS SAA-C03 {cfg["name"]} 第{part_idx:02d}份</title><style>{CSS}{Q.CSS}</style></head><body>')
    b.append('<div class="wrap">')
    b.append(f'<h1>AWS SAA-C03 {cfg["name"]} · 第 {part_idx:02d} 份</h1>')
    b.append(f'<p class="sub">题目 {start+1}–{start+len(chunk)} · 每份 {PER_PART} 题 · 中英对照 · '
             f'点选项后按「确认作答」即刻判对错 · 来源：{cfg["src"]}</p>')
    b.append('<div class="toolbar"><div class="btns">')
    b.append('<button class="primary" id="btn-sheet" type="button">答题卡</button>')
    b.append('<button id="btn-wrong" type="button">只看错题</button>')
    b.append('<button id="btn-expand" type="button">展开全部解析</button>')
    b.append('<button id="btn-report" type="button">交卷</button>')
    b.append('<button id="btn-reset" type="button">重置</button>')
    b.append('<button onclick="window.print()" type="button">打印 / 存 PDF</button>')
    b.append('</div>' + Q.bar_html(len(chunk)) + '</div>')
    for i, q in enumerate(chunk, start=start + 1):
        b.append(render_q_html(i, q, tr))
    b.append('</div>' + Q.sheet_html(len(chunk)) + Q.js(store, len(chunk)) + '</body></html>')
    return "\n".join(b)

def render_part_md(part_idx, qs_all, tr):
    start = (part_idx - 1) * PER_PART
    chunk = qs_all[start:start + PER_PART]
    L = [f"# AWS SAA-C03 {cfg['name']} · 第 {part_idx:02d} 份", "",
         f"> 题目 {start+1}–{start+len(chunk)} · 中英对照 · 来源：{cfg['src']}", ""]
    for i, q in enumerate(chunk, start=start + 1):
        zh = tr.get(str(q["num"]), {})
        L.append(f"## Question {i}" + (f"  `{q['type']}`" if q.get("type") else ""))
        L.append("")
        L.append(f"**EN** {q['stem']}")
        if zh.get("stem"):
            L += ["", f"**中** {zh['stem']}"]
        L.append("")
        zopts = zh.get("options") or {}
        for o in q["options"]:
            line = f"- **{o['letter']}.** {o['text']}"
            if zopts.get(o["letter"]):
                line += f"\n  - {zopts[o['letter']]}"
            L.append(line)
        L += ["", f"**正确答案 / Answer: `{q['answer']}`**", ""]
        if q.get("explanation"):
            L.append(q["explanation"])
        if zh.get("explanation"):
            L += ["", zh["explanation"]]
        L += ["", "---", ""]
    return "\n".join(L)

def render_index(qs_all):
    parts = (min(len(qs_all), TOTAL) + PER_PART - 1) // PER_PART
    L = ['<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">',
         '<meta name="viewport" content="width=device-width,initial-scale=1">',
         f'<title>AWS SAA-C03 {cfg["name"]} · 目录</title>',
         '<style>body{margin:0;background:#f5f6f8;font:15px/1.7 -apple-system,"Segoe UI","PingFang SC",sans-serif;color:#111827}',
         '.wrap{max-width:720px;margin:0 auto;padding:44px 22px 70px}h1{font-size:26px;margin:0 0 6px}',
         '.sub{color:#6b7280;margin:0 0 26px;font-size:13px}',
         'a.card{display:block;background:#fff;border:1px solid #e3e6ea;',
         'border-radius:12px;padding:15px 18px;margin-bottom:10px;text-decoration:none;color:#111827}',
         'a.card:hover{border-color:#93c5fd;background:#f8fbff}',
         'a.card .n{font-weight:700}.r{color:#6b7280;font-size:13px;margin-top:3px}',
         '</style>', f'<style>{Q.IDX_CSS}</style></head><body><div class="wrap">',
         f'<h1>AWS SAA-C03 {cfg["name"]}</h1>',
         f'<p class="sub">共 {parts} 份 · 每份 {PER_PART} 题 · 中英对照 · 点选项后按「确认作答」判对错，正确率自动保存在本机<br>来源：{cfg["src"]}</p>']
    for p in range(1, parts + 1):
        s = (p - 1) * PER_PART + 1; e = min(p * PER_PART, len(qs_all))
        key = f"aws:{cfg['line']}:{p:02d}"
        L.append(f'<a class="card" href="part{p:02d}.html" data-quiz-key="{key}" data-quiz-total="{e-s+1}">'
                 f'<div class="n">第 {p:02d} 份</div><div class="r">题目 {s}–{e}</div>'
                 f'<div class="pg"><i></i><span>未开始</span></div></a>')
    L.append('</div>' + Q.index_script() + '</body></html>')
    return "\n".join(L)

def main():
    qs_all = load_master()[:TOTAL]
    tr = load_tr()
    cov = len([k for k in tr if tr[k].get("stem")])
    parts = (len(qs_all) + PER_PART - 1) // PER_PART
    print(f"[{SOURCE}] 题库 {len(qs_all)} 题，翻译覆盖 {cov} 题，生成 {parts} 份")
    for p in range(1, parts + 1):
        open(os.path.join(OUT, f"part{p:02d}.html"), "w", encoding="utf-8").write(render_part_html(p, qs_all, tr))
        open(os.path.join(OUT, f"part{p:02d}.md"), "w", encoding="utf-8").write(render_part_md(p, qs_all, tr))
    open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(render_index(qs_all))
    print(f"  -> {OUT}")

if __name__ == "__main__":
    main()
