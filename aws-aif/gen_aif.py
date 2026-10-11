# -*- coding: utf-8 -*-
"""AWS AIF-C01 练习册组装器（可作答版）。

两条线：
  bank     —— 452 题题库（扫描件 OCR，中英对照，带答案与解析）
  practice —— HydraNode 230 题（带逐项解析，中文翻译可选）

用法: python gen_aif.py [bank|practice|all] [每份题数]
输出: site/aws-aif/{bank,practice}/partNN.html + .md 、 site/aws-aif/index.html
"""
import sys, os, json, html, glob

sys.stdout.reconfigure(encoding="utf-8")
sys.path.insert(0, r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/quiz_kit")
import quizkit as Q

ROOT = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/aws-aif"
RAW = os.path.join(ROOT, "raw")
SITE = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/site/aws-aif"

LINES = {
    "bank": {
        "dir": "bank",
        "title": "AI 真题库（%d 题）",
        "short": "真题库",
        "src": "扫描版 AWS AI 题库（%d 题，中英对照）",
        "qfile": "bank452_en.json",
        "zhfile": "bank452_zh.json",
        "store": "aifbank",
        "per": 50,
    },
    "practice": {
        "dir": "practice",
        "title": "AI 练习卷（%d 题）",
        "short": "练习卷",
        "src": "HydraNode 免费题库（考生回忆题，逐项解析）",
        "qfile": "hydranode_aif_parsed.json",
        "zhfile": "hydranode_aif_zh.json",
        "store": "aifprac",
        "per": 50,
    },
}


def esc(t):
    return html.escape(t or "").replace("\n", "<br>")


def load_json(path, default):
    if not os.path.exists(path):
        return default
    return json.load(open(path, encoding="utf-8"))


def load_line(key):
    cfg = LINES[key]
    qs = load_json(os.path.join(RAW, cfg["qfile"]), [])
    qs = sorted(qs, key=lambda q: q.get("num") or 0)
    zh = load_json(os.path.join(RAW, cfg["zhfile"]), {})
    if key == "bank":
        # Keep future exports consistent with the repaired browser dropdowns.
        mapping = load_json(os.path.join(os.path.dirname(__file__), "../site/assets/aif-hotspots.json"), {})
        for q in qs:
            hotspot = mapping.get(str(q.get("num")))
            if hotspot:
                q["hotspot"] = hotspot
                q["answer"] = ">".join(chr(65 + index) for index in hotspot["answer"]) if hotspot["answer"] is not None else ""
    return cfg, qs, {str(k): v for k, v in zh.items()}


# ---------------- 单题 ----------------

def render_q_html(idx, q, zh):
    """逐题渲染。zh 为该题的中文对照（可能为空）。

    无选项的题（HOTSPOT 拖拽匹配题）只展示题干 + 答案/解析，不提供作答交互——
    这类题在真实考试里是从下拉列表为每项匹配，网页端无法等价还原。
    """
    n = q["num"]
    z = zh.get(str(n), {})
    zopts = z.get("options") or {}
    ans = (q.get("answer") or "").strip()
    opts = q.get("options") or []
    is_hot = (not opts) and ("HOTSPOT" in (q.get("stem") or "").upper())
    h = []
    h.append(f'<div class="q" id="q{idx}" data-n="{idx}" data-ans="{esc(ans)}">')
    badge = "HOTSPOT 拖拽题" if is_hot else ("多选" if "," in ans else "单选")
    cls = ' class="badge hot"' if is_hot else ' class="badge"'
    h.append(f'  <div class="qhead"><span class="qno">Question {idx}</span>'
             f'<span{cls}>{badge}</span><span class="src">#{n}</span></div>')
    h.append('  <div class="stem">')
    h.append(f'    <p class="en">{esc(q["stem"])}</p>')
    if z.get("stem"):
        h.append(f'    <p class="zh">{esc(z["stem"])}</p>')
    h.append('  </div>')
    if opts:
        h.append('  <ol class="opts">')
        for o in opts:
            L = o["letter"]
            h.append(f'    <li class="opt" data-letter="{esc(L)}">')
            h.append(f'      <span class="letter">{esc(L)}</span><div class="otext">')
            h.append(f'        <p class="en">{esc(o["text"])}</p>')
            if zopts.get(L):
                h.append(f'        <p class="zh">{esc(zopts[L])}</p>')
            h.append('      </div>')
            h.append('    </li>')
        h.append('  </ol>')
        need = len([x for x in ans.split(",") if x.strip()])
        h.append(Q.act_html(max(1, need)))
        h.append('  <div class="verdict"></div>')
    else:
        h.append('  <p class="hothint">拖拽匹配题（HOTSPOT）：考试中需从下拉列表为每一项匹配答案，'
                 '此处仅作题目与答案解析的展示复习。</p>')
    has_expl = bool(q.get("explanation") or z.get("explanation"))
    label = "解析 / Explanation" if has_expl else "答案 / Answer"
    h.append(f'  <details class="ans"{" open" if not opts else ""}>')
    h.append(f'    <summary>{label}</summary>')
    if ans:
        h.append(f'    <p class="correct">正确答案 <b>{esc(ans)}</b></p>')
    else:
        h.append('    <p class="correct">此题答案见下方解析</p>')
    if has_expl:
        h.append('    <div class="expl">')
        if q.get("explanation"):
            h.append(f'      <p class="en">{esc(q["explanation"])}</p>')
        if z.get("explanation"):
            h.append(f'      <p class="zh">{esc(z["explanation"])}</p>')
        h.append('    </div>')
    h.append('  </details>')
    h.append('</div>')
    return "\n".join(h)


# ---------------- 样式 ----------------

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
.badge.hot{color:#9a3412;background:#fff7ed;border-color:#fed7aa}
.hothint{margin:11px 0 0;font-size:12.5px;color:#9a3412;background:#fff7ed;border:1px dashed #fed7aa;border-radius:8px;padding:8px 11px}
.src{font-size:11px;color:#9ca3af;margin-left:auto;font-variant-numeric:tabular-nums}
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
@media print{
 body{background:#fff}
 .toolbar{display:none}
 .wrap{max-width:none;padding:0}
 .q{border:none;border-bottom:1px solid #ddd;border-radius:0;padding:14px 0;page-break-inside:avoid;margin:0}
 details.ans{border:1px solid #ccc;background:#fff;display:block}
 details.ans .expl{display:block}
}
"""


def render_part_html(key, part_idx, qs_all, zh, total_parts):
    cfg = LINES[key]
    per = cfg["per"]
    start = (part_idx - 1) * per
    chunk = qs_all[start:start + per]
    store = f"aws:{cfg['store']}:{part_idx:02d}"
    b = []
    b.append('<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">')
    b.append('<meta name="viewport" content="width=device-width,initial-scale=1">')
    b.append(f'<title>AWS AIF-C01 {cfg["title"]} 第{part_idx:02d}份</title><style>{CSS}{Q.CSS}</style></head><body>')
    b.append('<div class="wrap">')
    b.append(f'<p class="sub" style="margin:0 0 10px"><a href="../index.html">← 返回 AIF-C01 目录</a></p>')
    b.append(f'<h1>AWS AIF-C01 · {cfg["title"]} · 第 {part_idx:02d} 份</h1>')
    b.append(f'<p class="sub">第 {part_idx}/{total_parts} 份 · 题目 {start+1}–{start+len(chunk)} · 共 {len(qs_all)} 题 · '
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
        b.append(render_q_html(i, q, zh))
    b.append('</div>' + Q.sheet_html(len(chunk)) + Q.js(store, len(chunk)) + '</body></html>')
    return "\n".join(b)


def render_part_md(key, part_idx, qs_all, zh):
    cfg = LINES[key]
    per = cfg["per"]
    start = (part_idx - 1) * per
    chunk = qs_all[start:start + per]
    L = [f'# AWS AIF-C01 {cfg["title"]} · 第 {part_idx:02d} 份', '',
         f"> 题目 {start+1}–{start+len(chunk)} · 中英对照 · 来源：{cfg['src']}", '']
    for i, q in enumerate(chunk, start=start + 1):
        z = zh.get(str(q["num"]), {})
        zopts = z.get("options") or {}
        L.append(f"## Question {i}  `#{q['num']}`")
        L.append("")
        L.append(f"**EN** {q['stem']}")
        if z.get("stem"):
            L += ["", f"**中** {z['stem']}"]
        L.append("")
        for o in q["options"]:
            L.append(f"- **{o['letter']}.** {o['text']}")
            if zopts.get(o["letter"]):
                L.append(f"  - {zopts[o['letter']]}")
        hotspot = q.get("hotspot")
        if hotspot:
            L += ["", "**匹配项目 / Items**"]
            L += [f"{index + 1}. {row}" for index, row in enumerate(hotspot["rows"])]
            L += ["", "**选项 / Options**"]
            L += [f"- **{chr(65 + index)}.** {option}" for index, option in enumerate(hotspot["options"])]
            answer = " → ".join(f"{index + 1}: {chr(65 + choice)} ({hotspot['options'][choice]})" for index, choice in enumerate(hotspot["answer"])) if hotspot["answer"] is not None else "待核对 / Not yet verified — 暂不判分 / Not graded"
            L += ["", f"**正确答案 / Answer: {answer}**", ""]
        else:
            L += ["", f"**正确答案 / Answer: `{q['answer']}`**", ""]
        if q.get("explanation"):
            L.append(q["explanation"])
        if z.get("explanation"):
            L += ["", z["explanation"]]
        L += ["", "---", ""]
    return "\n".join(L)


def render_line_index(key, qs_all, zh):
    """某条线自己的目录页。"""
    cfg = LINES[key]
    per = cfg["per"]
    parts = (len(qs_all) + per - 1) // per
    cov = sum(1 for q in qs_all if (zh.get(str(q["num"])) or {}).get("stem"))
    L = ['<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">',
         '<meta name="viewport" content="width=device-width,initial-scale=1">',
         f'<title>AWS AIF-C01 {cfg["title"]} · 目录</title>',
         '<style>body{margin:0;background:#f5f6f8;font:15px/1.7 -apple-system,"Segoe UI","PingFang SC",sans-serif;color:#111827}',
         '.wrap{max-width:720px;margin:0 auto;padding:34px 22px 70px}h1{font-size:24px;margin:0 0 6px}',
         '.sub{color:#6b7280;margin:0 0 24px;font-size:13px}',
         'a.card{display:block;background:#fff;border:1px solid #e3e6ea;',
         'border-radius:12px;padding:15px 18px;margin-bottom:10px;text-decoration:none;color:#111827}',
         'a.card:hover{border-color:#93c5fd;background:#f8fbff}',
         'a.card .n{font-weight:700}.r{color:#6b7280;font-size:13px;margin-top:3px}',
         'a.back{display:inline-block;margin-bottom:14px;font-size:13px}',
         '</style>', f'<style>{Q.IDX_CSS}</style></head><body><div class="wrap">',
         '<a class="back" href="../index.html">← 返回 AIF-C01 目录</a>',
         f'<h1>{cfg["title"]}</h1>',
         f'<p class="sub">共 {len(qs_all)} 题 · 分 {parts} 份 · 每份 {per} 题 · '
         f'中英对照覆盖 {cov} 题<br>点选项后按「确认作答」判对错，正确率自动存在本机</p>']
    for p in range(1, parts + 1):
        s = (p - 1) * per + 1
        e = min(p * per, len(qs_all))
        qkey = f"aws:{cfg['store']}:{p:02d}"
        L.append(f'<a class="card" href="part{p:02d}.html" data-quiz-key="{qkey}" data-quiz-total="{e-s+1}">'
                 f'<div class="n">第 {p:02d} 份</div><div class="r">题目 {s}–{e}</div>'
                 f'<div class="pg"><i></i><span>未开始</span></div></a>')
    L.append('</div>' + Q.index_script() + '</body></html>')
    return "\n".join(L)


def render_root_index(meta):
    """aws-aif 总目录：两条线 + 说明。"""
    L = ['<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">',
         '<meta name="viewport" content="width=device-width,initial-scale=1">',
         '<title>AWS AIF-C01 · AI Practitioner 题库</title>',
         '<style>body{margin:0;background:#f5f7f9;color:#0f172a;'
         'font:15px/1.7 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}',
         '.wrap{max-width:820px;margin:0 auto;padding:40px 22px 80px}',
         'h1{font-size:27px;margin:0 0 8px}.sub{color:#5b6570;margin:0 0 26px;font-size:13.5px}',
         'a.card{display:block;background:#fff;border:1px solid #e3e9ee;border-radius:14px;',
         'padding:18px 20px;margin-bottom:14px;text-decoration:none;color:inherit;transition:.15s}',
         'a.card:hover{box-shadow:0 8px 22px rgba(16,24,40,.09);border-color:#93c5fd}',
         'a.card h3{margin:0 0 6px;font-size:17px}',
         'a.card .sd{margin:0 0 12px;font-size:13.2px;color:#5b6570}',
         'a.card .cnt{font-size:12px;color:#8b95a1}',
         '.note{background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:16px 20px;',
         'font-size:13.4px;color:#334155;margin-top:8px}',
         '.note b{color:#0f172a}.note ul{margin:8px 0 0;padding-left:20px}',
         '</style></head><body><div class="wrap">',
         '<h1>AWS Certified AI Practitioner · AIF-C01</h1>',
         f'<p class="sub">两条线共 <b>{meta["total"]}</b> 题 · 中英对照 · 可作答判分 · 进度存在本机浏览器</p>']
    for key in ("bank", "practice"):
        m = meta[key]
        L.append(f'<a class="card" href="{m["dir"]}/index.html">'
                 f'<h3>{m["title"]}</h3><p class="sd">{m["desc"]}</p>'
                 f'<div class="cnt">{m["count"]} 题 · 分 {m["parts"]} 份 · 每份 {m["per"]} 题'
                 + (f' · 中译覆盖 {m["cov"]} 题' if m.get("cov") else '') + '</div></a>')
    L.append('<div class="note"><b>说明</b><ul>'
             '<li>考试信息：65 题 / 90 分钟 / 及格 700（100–1000 分制）；五大领域：AI 与 ML 基础 20%、'
             '生成式 AI 基础 24%、基础模型应用 28%、负责任 AI 14%、安全合规与治理 14%。</li>'
             '<li>题目版权归 Amazon Web Services 及各原始来源所有，<b>仅供个人备考自用，请勿再分发</b>。</li>'
             '<li>进度按网址隔离，换域名或换设备不会跟过来。</li>'
             '</ul></div>')
    L.append('</div></body></html>')
    return "\n".join(L)


def build_line(key):
    cfg, qs, zh = load_line(key)
    if not qs:
        print("  ! %s 无题目数据，跳过" % key)
        return None
    n = len(qs)
    if "%d" in cfg["title"]:              # 标题 / 来源里的题数按实际数据填
        cfg["title"] = cfg["title"] % n
    if "%d" in cfg["src"]:
        cfg["src"] = cfg["src"] % n
    parts = (n + cfg["per"] - 1) // cfg["per"]
    outdir = os.path.join(SITE, cfg["dir"])
    os.makedirs(outdir, exist_ok=True)
    for p in range(1, parts + 1):
        open(os.path.join(outdir, f"part{p:02d}.html"), "w", encoding="utf-8").write(
            render_part_html(key, p, qs, zh, parts))
        open(os.path.join(outdir, f"part{p:02d}.md"), "w", encoding="utf-8").write(
            render_part_md(key, p, qs, zh))
    open(os.path.join(outdir, "index.html"), "w", encoding="utf-8").write(
        render_line_index(key, qs, zh))
    cov = sum(1 for q in qs if (zh.get(str(q["num"])) or {}).get("stem"))
    print("  [%s] %d 题 -> %d 份（中译覆盖 %d）" % (key, len(qs), parts, cov))
    return {"count": len(qs), "parts": parts, "per": cfg["per"], "cov": cov,
            "dir": cfg["dir"], "title": cfg["title"]}


DESC = {
    "bank": "扫描版题库 OCR 转换，452 题全量，中英对照并带答案与解析。题量大，适合整套刷。",
    "practice": "HydraNode 考生回忆题 230 道，每道附逐项解析，适合查漏补缺。",
}


def main():
    want = sys.argv[1] if len(sys.argv) > 1 else "all"
    if len(sys.argv) > 2:
        for k in LINES:
            LINES[k]["per"] = int(sys.argv[2])
    keys = list(LINES) if want == "all" else [want]
    meta = {}
    for k in keys:
        r = build_line(k)
        if r:
            r["desc"] = DESC[k]
            meta[k] = r
    if len(meta) == len(LINES):
        meta["total"] = sum(meta[k]["count"] for k in LINES)
        os.makedirs(SITE, exist_ok=True)
        open(os.path.join(SITE, "index.html"), "w", encoding="utf-8").write(render_root_index(meta))
        print("  -> %s （合计 %d 题）" % (SITE, meta["total"]))


if __name__ == "__main__":
    main()
