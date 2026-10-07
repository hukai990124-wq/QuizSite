# -*- coding: utf-8 -*-
"""DELE A1 练习册生成器
- 复用 ../quiz_kit/quizkit.py 的判分引擎（选择题 / 匹配题 / 手写填空题）
- 产出：out/index.html + 每套一份 out/<slug>.html + out/img/*
"""
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), "quiz_kit"))
sys.path.insert(0, HERE)

import quizkit as QK          # noqa: E402
from data import SETS         # noqa: E402

OUT = os.path.join(HERE, "out")
esc = QK.esc

BASE_CSS = r"""
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#f5f7f9;color:#0f172a;font-size:15px;line-height:1.7;
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif}
a{color:#1d4e79}
img{max-width:100%}

/* ---------- 顶部 ---------- */
.hero{background:linear-gradient(135deg,#123c5e,#1d4e79 55%,#2a6ca0);color:#fff;padding:24px 0 22px}
.hero .in{max-width:860px;margin:0 auto;padding:0 16px}
.hero .top{font-size:13px}
.hero .top a{color:#cfe4f5;text-decoration:none}
.hero .top a:hover{text-decoration:underline}
.hero .badge{display:inline-block;margin:12px 0 8px;font-size:12px;letter-spacing:.6px;
 background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.38);border-radius:99px;padding:2px 11px}
.hero h1{margin:0 0 6px;font-size:23px;line-height:1.35}
.hero .sub{margin:0;color:#c9dcee;font-size:13.5px}
.hero .meta{margin:13px 0 0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:8px}
.hero .meta li{font-size:12.5px;background:rgba(255,255,255,.13);border-radius:7px;padding:4px 10px}

/* ---------- 工具栏（sticky） ---------- */
.toolbar{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.96);
 -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border-bottom:1px solid #e3e9ee;padding:10px 0 11px}
.tbin{max-width:860px;margin:0 auto;padding:0 16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.btns{display:flex;gap:8px;flex-wrap:wrap}
button{font:inherit;font-size:13px;padding:6px 13px;border-radius:8px;border:1px solid #cbd5e1;
 background:#fff;color:#334155;cursor:pointer}
button:hover{background:#f1f5f9}

/* ---------- 主体 ---------- */
main{padding:22px 0 92px}
.wrap{max-width:860px;margin:0 auto;padding:0 16px}
.block{margin:0 0 34px}
.block>h2{font-size:17px;margin:0 0 6px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.pill{font-size:11.5px;font-weight:700;color:#0b6b3a;background:#eaf7ef;border:1px solid #bfe3ce;
 border-radius:99px;padding:2px 9px}
.pill.grey{color:#5b6570;background:#eef2f5;border-color:#dfe5ea}
.lead{color:#5b6570;font-size:13.4px;margin:0 0 16px}

.tarea{background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:18px 18px 6px;margin:0 0 18px;
 box-shadow:0 1px 2px rgba(16,24,40,.03)}
.thd{display:flex;align-items:baseline;gap:10px;border-bottom:1px dashed #e3e9ee;padding-bottom:9px;
 margin-bottom:13px;flex-wrap:wrap}
.tno{font-weight:800;font-size:15px;color:#1d4e79}
.tq{font-size:12.5px;color:#5b6570;background:#f1f5f9;border-radius:6px;padding:2px 8px}
.tkind{font-size:12.5px;color:#8a6d1a;background:#fff8e6;border:1px solid #f0e2b8;border-radius:6px;padding:2px 8px}
.inst{font-size:13.8px;color:#334155;margin:0 0 13px}

.source{margin:0 0 14px}
.src-h{font-size:12.5px;font-weight:700;color:#5b6570;letter-spacing:.3px;text-transform:uppercase;margin:0 0 7px}
.passage{background:#fbfcfd;border:1px solid #e3e9ee;border-left:4px solid #9dc3e6;border-radius:8px;
 padding:14px 16px;white-space:pre-line;font-size:14.5px;line-height:1.78}
table.src-table{width:100%;border-collapse:collapse;font-size:13.6px;table-layout:fixed}
table.src-table th,table.src-table td{border:1px solid #e3e9ee;padding:9px 11px;text-align:left;
 vertical-align:top;overflow-wrap:anywhere}
table.src-table th{background:#f1f5f9;font-size:12.8px;color:#334155}
table.src-table td:first-child{font-weight:700;color:#1d4e79;width:26%}
table.src-table td{white-space:pre-line}
.gridwrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid #e3e9ee;border-radius:9px}
table.src-grid{width:100%;min-width:640px;border-collapse:collapse;font-size:12.8px}
table.src-grid th,table.src-grid td{border:1px solid #e3e9ee;padding:7px 9px;vertical-align:top;text-align:left}
table.src-grid th{background:#1d4e79;color:#fff;font-size:12px;text-align:center}
table.src-grid td:first-child{background:#f1f5f9;font-weight:700;text-align:center;width:44px;color:#334155}

.notice{font-size:13px;background:#fff8e6;border:1px solid #f0e2b8;border-radius:9px;
 padding:10px 13px;margin:0 0 14px;color:#6b5310;display:flex;gap:8px}
.notice b{flex:0 0 auto}

.ex{font-size:13.4px;background:#fffdf5;border:1px solid #f0e2b8;border-radius:8px;padding:10px 13px;
 margin:0 0 14px;display:flex;gap:9px;flex-wrap:wrap;align-items:baseline;color:#4a3b0c}
.ex b{color:#8a6d1a;flex:0 0 auto}
.ex code{font-family:inherit;font-weight:700;background:#fff;border:1px solid #eadfae;border-radius:5px;padding:0 6px}

.pool{list-style:none;margin:0 0 16px;padding:0;display:grid;
 grid-template-columns:repeat(auto-fill,minmax(248px,1fr));gap:10px}
.pool li{display:flex;gap:10px;border:1px solid #e3e9ee;border-radius:9px;padding:10px 12px;
 background:#fbfcfd;font-size:13.3px;white-space:pre-line;line-height:1.6}
.pool .pl{flex:0 0 auto;width:22px;height:22px;border-radius:6px;background:#1d4e79;color:#fff;
 font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;margin-top:2px}

.qlist{list-style:none;margin:0;padding:0}
.q{background:#fbfcfd;border:1px solid #e3e9ee;border-radius:12px;padding:15px 16px 6px;margin:0 0 13px}
.stem{font-size:14.8px;font-weight:600;margin:0 0 11px;display:flex;gap:9px}
.qn{flex:0 0 auto;min-width:22px;height:22px;padding:0 6px;border-radius:6px;background:#1d4e79;
 color:#fff;font-size:12px;font-weight:700;display:inline-flex;align-items:center;
 justify-content:center;margin-top:2px;font-variant-numeric:tabular-nums}
ul.opts{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
ul.opts.letteropts{flex-direction:row;flex-wrap:wrap;gap:7px}
ul.opts.letteropts li.opt{width:44px;justify-content:center;padding:9px 0}
ul.opts .opthint{font-size:12px;color:#8b95a1;border:none!important;background:none!important;
 padding:6px 2px 0;flex:1 1 100%;align-self:center}
ul.opts.imgopts{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px}
ul.opts.imgopts li.opt{flex-direction:column;align-items:stretch;text-align:center;padding:10px}
ul.opts.imgopts img{width:100%;height:132px;object-fit:contain;background:#fff;border-radius:6px}
ul.opts.imgopts .cap{font-size:12.4px;color:#5b6570;margin-top:6px}
li.opt{display:flex;align-items:center;gap:11px;padding:11px 13px;border:1px solid #e3e9ee;
 border-radius:10px;background:#fff;font-size:14.6px;color:#1f2933}
.letter{flex:0 0 auto;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;
 border:1px solid #cbd5e1;border-radius:50%;font-size:12.5px;font-weight:700;color:#475569}
li.opt .otxt{flex:1 1 auto}

details.ans{margin:10px 0 0;font-size:13.2px;color:#475569}
details.ans summary{cursor:pointer;color:#5b6570;font-size:12.5px}
details.ans .anbody{margin:8px 0 0;padding:9px 12px;background:#fff;border:1px dashed #d8e0e8;
 border-radius:8px;white-space:pre-line;color:#334155}
details.ans .anbody b{color:#0b6b3a}

/* ---------- 写作 ---------- */
.wq{background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:18px;margin:0 0 16px;
 box-shadow:0 1px 2px rgba(16,24,40,.03)}
.wq h3{margin:0 0 8px;font-size:15px;color:#1d4e79;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
.wq .task{font-size:14.3px;margin:0 0 12px}
.req{font-size:13.4px;margin:0 0 12px;padding-left:0;list-style:none}
.req li{padding-left:16px;position:relative}
.req li::before{content:"·";position:absolute;left:4px;font-weight:800;color:#1d4e79}
.fields{background:#fbfcfd;border:1px dashed #c8d5e0;border-radius:9px;padding:12px 14px;font-size:13.3px;
 white-space:pre-line;color:#334155;margin:0 0 12px}
details.sample{border:1px solid #bfe3ce;background:#f4fbf7;border-radius:9px;padding:10px 14px}
details.sample summary{cursor:pointer;font-size:13.2px;font-weight:700;color:#0b6b3a}
details.sample .sbody{margin:9px 0 0;font-size:13.6px;white-space:pre-line;color:#2f3b46}

footer{border-top:1px solid #e3e9ee;background:#fff;padding:18px 0 26px;color:#5b6570;font-size:12.6px}
footer .wrap{line-height:1.85}
footer b{color:#334155}

/* ---------- 首页 ---------- */
.idx-hd{background:linear-gradient(135deg,#123c5e,#1d4e79 55%,#2a6ca0);color:#fff;padding:34px 0 30px}
.idx-hd h1{margin:0 0 8px;font-size:25px}
.idx-hd p{margin:0;color:#c9dcee;font-size:14px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(272px,1fr));gap:16px}
a.card{display:block;background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:16px 17px;
 text-decoration:none;color:inherit;box-shadow:0 1px 2px rgba(16,24,40,.03);transition:box-shadow .15s,transform .15s}
a.card:hover{box-shadow:0 8px 22px rgba(16,24,40,.09);transform:translateY(-1px)}
a.card .no{font-size:12px;color:#8b95a1;font-weight:700;letter-spacing:.5px}
a.card h3{margin:6px 0 4px;font-size:16px;color:#0f172a;line-height:1.4}
a.card .sd{margin:0;font-size:13px;color:#5b6570}
a.card .tags{margin-top:10px;display:flex;gap:6px;flex-wrap:wrap}
.tg{font-size:11.5px;border-radius:99px;padding:2px 9px;background:#eef2f5;color:#5b6570;border:1px solid #dfe5ea}
.tg.b{background:#eaf7ef;color:#0b6b3a;border-color:#bfe3ce}
.howto{background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:18px;margin:0 0 22px}
.howto h2{margin:0 0 10px;font-size:16px}
.howto ol{margin:0;padding-left:20px;font-size:13.8px;color:#334155}
.howto li{margin:5px 0}
"""


# ---------------------------------------------------------------- 响应式（双端 UI）
# 注意：本段必须拼在「引擎 CSS」之后。引擎里 .qbar/.sheet 等同名规则以及
# max-width:560px 下的 !important 收紧规则会覆盖 BASE_CSS，只有放在最后才能赢。
RESP_CSS = r"""
/* ---------- 表格「可左右滑动」提示（默认隐藏，窄屏才显示） ---------- */
.scroll-hint{display:none}

/* ================= 手机端专属 UI（≤640px） ================= */
@media (max-width:640px){
  .hero{padding:19px 0 17px}
  .hero .in,.tbin,.wrap{padding-left:14px;padding-right:14px}
  .hero h1{font-size:20px}
  .hero .sub{font-size:13px}
  .hero .badge{margin:9px 0 7px}
  main{padding:17px 0 84px}
  .block{margin-bottom:28px}
  .tarea{padding:15px 13px 4px;border-radius:12px}
  .wq{padding:15px 14px}
  /* 引擎在 ≤560px 用 !important 写了 .q padding，这里必须同样 !important 且在后才压得住 */
  .q{padding:14px 13px 4px!important}
  .stem{font-size:14.4px}
  li.opt{padding:12px 13px;font-size:14.4px}
  /* 触摸目标抬到 iOS 建议的 44px */
  button{min-height:44px}
  .qact button{min-height:44px;padding:9px 16px}
  /* 顶部操作区改为单行横向滑动，比换行省下约 2/3 竖向空间 */
  .tbin .btns{flex:1 1 100%;flex-wrap:nowrap;overflow-x:auto;gap:7px;padding-bottom:3px;
   -webkit-overflow-scrolling:touch;scrollbar-width:none;touch-action:pan-x}
  .tbin .btns::-webkit-scrollbar{display:none}
  .tbin .btns button{flex:0 0 auto;white-space:nowrap}
  .tbin{gap:9px}
  /* 选项区更贴合窄屏 */
  .pool{grid-template-columns:1fr}
  ul.opts.imgopts{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
  ul.opts.imgopts img{height:112px}
  table.src-table{font-size:13px}
  table.src-table td:first-child{width:30%}
  .scroll-hint{display:block;font-size:12px;color:#8b95a1;text-align:center;margin:7px 0 0}
}

/* ================= 桌面端专属 UI（≥1080px）：左侧固定侧栏 + 右侧题目 ================= */
@media (min-width:1080px){
  .layout{display:grid;grid-template-columns:300px minmax(0,1fr);gap:30px;align-items:start;
   max-width:1360px;margin:0 auto;padding:0 24px}
  .hero .in{max-width:1360px;padding:0 24px}
  .hero{padding:26px 0 24px}
  .hero h1{font-size:26px}

  /* 原顶部工具栏 → 左侧常驻侧栏 */
  .toolbar{position:sticky;top:16px;align-self:start;z-index:20;
   background:#fff;border:1px solid #e3e9ee;border-radius:14px;padding:16px;
   box-shadow:0 1px 2px rgba(16,24,40,.04);
   -webkit-backdrop-filter:none;backdrop-filter:none;
   max-height:calc(100vh - 32px);overflow:auto}
  .tbin{display:block;max-width:none;margin:0;padding:0}
  .btns{flex-direction:column;gap:8px;margin-bottom:14px}
  .btns button{width:100%;text-align:left;min-height:40px;font-size:13.5px;padding:9px 14px}
  /* 统计条由横排改为竖排（引擎的 .qbar{display:flex} 在后，须提升特异性） */
  body .qbar{display:block;font-size:13.5px;width:auto}
  body .qbar>span{display:block;margin:6px 0}
  body .qbar .pbar{flex:none;display:block;width:100%;height:7px;margin:11px 0 2px}

  .layout main{padding:0 0 40px}
  .layout main .wrap{max-width:none;padding:0}
  /* 侧栏不是顶部条了，跳题锚点不该再按 --tb 偏移 */
  .q{scroll-margin-top:18px!important}

  .layout~footer .wrap{max-width:1360px;padding:0 24px}

  /* 首页在桌面放宽，卡片摊开成多列 */
  .idx-hd .wrap,.idx-main>.wrap{max-width:1180px}
  .idx-main~footer .wrap{max-width:1180px;padding:0 24px}
  .cards{grid-template-columns:repeat(auto-fill,minmax(266px,1fr))}

  /* 答题卡在桌面改为右下角浮动面板，而非底部通栏 */
  body .sheet{left:auto;right:24px;bottom:24px;width:352px;
   border:1px solid #dfe5ea;border-radius:14px;padding:14px 16px 16px;
   box-shadow:0 14px 44px rgba(16,24,40,.18);transform:translateY(150%)}
  body .sheet.open{transform:translateY(0)}
  body .sheet .grid{max-height:46vh}
}
"""


# ---------------------------------------------------------------- 片段渲染
def kind_hint(kind):
    return {"mc": "选择题", "match": "匹配题", "fill": "手写填空"}.get(kind, "")


def kind_cn(kind, nitems, nopts=None):
    if kind == "mc":
        letters = "A / B / C" if nopts == 3 else "A / B / C / D"
        return "选择题 · 从 %s 中选出一个正确答案" % letters
    if kind == "match":
        return "匹配题 · 把 A–J 十个卡片与 %d 个题目一一配对（有多余干扰项）" % nitems
    if kind == "fill":
        return "手写填空 · 从原文中找到词，自己输入答案（大小写、重音容错）"
    return ""


def render_source(src):
    if not src:
        return ""
    kind = src.get("kind")
    lab = esc(src.get("label", ""))
    head = '<div class="src-h">%s</div>' % lab if lab else ""
    if kind == "passage":
        return '<div class="source">%s<div class="passage" lang="es">%s</div></div>' % (head, esc(src["text"]))
    if kind == "table":
        rows = "".join(
            '<tr><td>%s</td><td lang="es">%s</td></tr>' % (esc(t), esc(x)) for t, x in src["rows"]
        )
        return ('<div class="source">%s<table class="src-table"><tbody>%s</tbody></table></div>'
                % (head, rows))
    if kind == "grid":
        ths = "".join('<th>%s</th>' % esc(h) for h in src["head"])
        trs = ""
        for r in src["rows"]:
            tds = "".join('<td lang="es">%s</td>' % esc(c) for c in r)
            trs += "<tr>%s</tr>" % tds
        return ('<div class="source">%s<div class="gridwrap"><table class="src-grid">'
                '<thead><tr><th>Hora</th>%s</tr></thead><tbody>%s</tbody></table></div>'
                '<div class="scroll-hint">← 左右滑动查看完整表格 →</div></div>'
                % (head, ths, trs))
    return ""


def render_pool(pool):
    if not pool:
        return ""
    lis = "".join('<li><span class="pl">%s</span><span lang="es">%s</span></li>' % (esc(l), esc(t))
                  for l, t in pool)
    return '<ul class="pool">%s</ul>' % lis


def render_example(ex):
    if not ex:
        return ""
    why = ('<span style="color:#8a6d1a">%s</span>' % esc(ex["why"])) if ex.get("why") else ""
    return ('<div class="ex"><b>Ejemplo</b><span lang="es">%s</span>'
            '<span>→</span><code>%s</code>%s</div>'
            % (esc(ex["stem"]), esc(ex["ans"]), why))


def render_item(item, tarea):
    n = item["n"]
    stem = '<div class="stem"><span class="qn">%d</span><span lang="es">%s</span></div>' % (n, esc(item["stem"]))
    kind = tarea["kind"]
    body = ""

    if kind == "fill":
        body = ('<div class="fillrow"><input class="fill" type="text" inputmode="text" autocomplete="off" '
                'autocorrect="off" spellcheck="false" aria-label="Respuesta %d" placeholder="Escriba la palabra">'
                '<span class="flabel">输入后按回车，或点「确认作答」</span></div>' % n)
    else:
        opts = item.get("opts") or []
        imgs = item.get("imgs") or {}
        caps = item.get("captions") or {}
        pool = tarea.get("pool") or []
        letteronly = (kind == "match" and not opts)
        if letteronly:
            opts = [[l, ""] for l, _ in pool]
        cls = "opts"
        if imgs:
            cls = "opts imgopts"
        elif letteronly:
            cls = "opts letteropts"
        parts = []
        for L, txt in opts:
            letter = '<span class="letter">%s</span>' % esc(L)
            tip = ""
            if letteronly:
                ptext = dict(pool).get(L, "").replace('"', "")
                tip = ' title="%s: %s"' % (esc(L), esc(ptext[:120]))
                parts.append('<li class="opt" data-letter="%s"%s>%s</li>' % (esc(L), tip, letter))
            elif imgs:
                img = imgs.get(L, "")
                cap = caps.get(L, "")
                inner = ('<img src="%s" alt="%s" loading="lazy"><span class="cap">%s %s</span>'
                         % (esc(img), esc(cap or ("Opción " + L)), esc(L), esc(cap)))
                parts.append('<li class="opt" data-letter="%s">%s</li>' % (esc(L), inner))
            else:
                parts.append('<li class="opt" data-letter="%s">%s<span class="otxt" lang="es">%s</span></li>'
                             % (esc(L), letter, esc(txt)))
        if letteronly:
            parts.append('<li class="opthint" aria-hidden="true">在上方 A–J 卡片里选一项</li>')
        body = '<ul class="%s">%s</ul>' % (cls, "".join(parts))

    # 解析 / 说明
    an = ""
    if kind == "mc":
        ans = item["ans"]
        right = ""
        for L, txt in (item.get("opts") or []):
            if L == ans and txt:
                right = txt
        caps = item.get("captions") or {}
        if not right and caps.get(ans):
            right = caps[ans]
        an = "正确答案：<b>%s</b>%s" % (esc(ans), (" · " + esc(right)) if right else "")
    elif kind == "match":
        ans = item["ans"]
        pmap = {l: t for l, t in (tarea.get("pool") or [])}
        an = "正确答案：<b>%s</b>%s" % (esc(ans), ("\n" + pmap.get(ans, "")) if pmap.get(ans) else "")
    elif kind == "fill":
        an = "可接受答案：<b>%s</b>" % " / ".join(esc(a) for a in item["ans"].split("|"))
    if item.get("why"):
        an += "\n" + esc(item["why"])
    ansblock = '<details class="ans"><summary>看解析</summary><div class="anbody">%s</div></details>' % an

    return ('<li class="q" id="q%d" data-n="%d"%s data-ans="%s">%s%s%s%s</li>'
            % (n, n,
               ' data-kind="fill"' if kind == "fill" else "",
               esc(item["ans"]), stem, body, ansblock, QK.verdict_html() + QK.act_html(1)))


def render_tarea(t):
    no = t["no"]
    kind = t["kind"]
    nitems = len(t["items"])
    nopts = len((t["items"][0].get("opts") or [])) if t["items"][0].get("opts") else None
    hdr = ('<div class="thd"><span class="tno">Tarea %d</span>'
           '<span class="tq">题 %d – %d</span>'
           '<span class="tkind">%s</span></div>'
           % (no, t["qfrom"], t["qto"], esc(kind_cn(kind, nitems, nopts))))
    parts = ['<section class="tarea" id="t%d">%s' % (no, hdr)]
    parts.append('<p class="inst" lang="es">%s</p>' % esc(t["inst"]))
    if t.get("note"):
        parts.append('<div class="notice"><b>注</b><span>%s</span></div>' % esc(t["note"]))
    parts.append(render_source(t.get("source")))
    parts.append(render_example(t.get("example")))
    parts.append(render_pool(t.get("pool")))
    parts.append('<ol class="qlist">%s</ol>'
                 % "".join(render_item(it, t) for it in t["items"]))
    parts.append("</section>")
    return "".join(parts)


def render_writing(ws):
    out = []
    for w in ws:
        h = ['<div class="wq"><h3><span>Tarea %d</span>' % w["tarea"]]
        if w.get("words"):
            h.append('<span class="pill grey">%s</span>' % esc(w["words"]))
        h.append("</h3>")
        h.append('<p class="task" lang="es">%s</p>' % esc(w["inst"]))
        if w.get("fields"):
            h.append('<div class="fields" lang="es">%s</div>' % esc(w["fields"]))
        if w.get("sample"):
            h.append('<details class="sample"><summary>参考答案 / Modelo de respuesta</summary>'
                     '<div class="sbody" lang="es">%s</div></details>' % esc(w["sample"]))
        h.append("</div>")
        out.append("".join(h))
    return "".join(out)


# ---------------------------------------------------------------- 页面
def page_set(s):
    slug = s["slug"]
    total = sum(len(t["items"]) for t in s["tareas"])
    tareas = "".join(render_tarea(t) for t in s["tareas"])
    writing = render_writing(s["writing"])
    title = "%s · DELE A1 练习册" % s["title"]
    html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>%(title)s</title>
<style>%(base)s%(engine)s%(resp)s</style>
</head>
<body>
<header class="hero">
  <div class="in">
    <div class="top"><a href="index.html">← 全部试卷</a></div>
    <div class="badge">%(badge)s</div>
    <h1>%(h1)s</h1>
    <p class="sub">%(sub)s</p>
    <ul class="meta">
      <li>Prueba 1 · 阅读 %(total)d 题</li>
      <li>Prueba 3 · 写作 2 题</li>
      <li>阅读限时 45 分钟</li>
      <li>可即时判分</li>
    </ul>
  </div>
</header>

<div class="layout">
<div class="toolbar">
  <div class="tbin">
    <div class="btns">
      <button id="btn-sheet" type="button">答题卡</button>
      <button id="btn-report" type="button">交卷看成绩</button>
      <button id="btn-wrong" type="button">只看错题</button>
      <button id="btn-expand" type="button">展开全部解析</button>
      <button id="btn-reset" type="button">清空重做</button>
    </div>
    %(bar)s
  </div>
</div>

<main>
<div class="wrap">
  <section class="block" id="reading">
    <h2>Prueba 1 · Comprensión de lectura <span class="pill">%(total)d 题 · 即时判分</span></h2>
    <p class="lead">点选项 → 「确认作答」→ 立即判定并显示正确答案与解析；填空题手写输入后按回车即可。
      进度自动保存在本机浏览器，随时可继续。</p>
    %(tareas)s
  </section>

  <section class="block" id="writing">
    <h2>Prueba 3 · Expresión e interacción escritas <span class="pill grey">题目 + 范文</span></h2>
    <p class="lead">写作不自动判分。建议先在纸上或输入法里写一遍，再展开参考答案对照。范文仅为一种可行写法，非唯一标准。</p>
    %(writing)s
  </section>
</div>
</main>
</div>

<footer>
  <div class="wrap">
    <div><b>题目来源</b>：Instituto Cervantes 公开发布的 DELE A1 官方样卷与往届真题（<span lang="es">Modelo 0 / convocatorias oficiales</span>），
      版权归 Instituto Cervantes 所有，此处仅用于个人学习与自测。</div>
    <div><b>说明</b>：答案依据官方 <span lang="es">Clave de respuestas</span> 逐题核对；长文本页因原 PDF 文本层为图片/自定义编码，
      由逐页视觉重建，如发现个别拼写差异以官方原件为准。</div>
    <div style="margin-top:8px"><a href="index.html">← 返回全部试卷</a></div>
  </div>
</footer>

%(sheet)s
%(js)s
</body>
</html>
""" % {
        "title": esc(title), "base": BASE_CSS, "engine": QK.CSS, "resp": RESP_CSS,
        "badge": esc(s["badge"]), "h1": esc(s["title"]), "sub": esc(s["subtitle"]),
        "total": total, "bar": QK.bar_html(total), "tareas": tareas, "writing": writing,
        "sheet": QK.sheet_html(total), "js": QK.js("dele-a1-" + slug, total),
    }
    with open(os.path.join(OUT, slug + ".html"), "w", encoding="utf-8") as f:
        f.write(html)
    return total


def page_index(totals):
    cards = []
    for s in SETS:
        total = totals[s["slug"]]
        cards.append(
            '<a class="card" href="%(slug)s.html" data-quiz-key="dele-a1-%(slug)s" data-quiz-total="%(total)d">'
            '<div class="no">试卷 %(no)d</div>'
            '<h3>%(h1)s</h3>'
            '<p class="sd">%(sub)s</p>'
            '<div class="tags"><span class="tg b">%(badge)s</span><span class="tg">阅读 %(total)d 题</span>'
            '<span class="tg">写作 2 题</span></div>'
            '<div class="pg"><i></i><span>未开始</span></div>'
            '</a>' % {
                "slug": s["slug"], "no": s["no"], "total": total,
                "h1": esc(s["title"]), "sub": esc(s["subtitle"]), "badge": esc(s["badge"]),
            })
    html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>DELE A1 阅读 + 写作 · 官方真题练习册</title>
<style>%(base)s%(idx)s%(resp)s</style>
</head>
<body>
<header class="idx-hd">
  <div class="wrap">
    <h1>DELE A1 · 阅读 + 写作练习册</h1>
    <p>Instituto Cervantes 官方公开的 4 套 A1 试卷 · 阅读 25 题可即时判分 · 写作附参考答案</p>
  </div>
</header>

<main class="idx-main">
  <div class="wrap">
    <div class="howto">
      <h2>怎么用</h2>
      <ol>
        <li>每套试卷 25 道阅读题，点选项后按「确认作答」立即判定，并显示正确答案与解析。</li>
        <li>第 4 个 Tarea 是「手写填空」，直接输入单词后按回车即可。</li>
        <li>顶栏可打开<b>答题卡</b>跳题、<b>交卷看成绩</b>、<b>只看错题</b>；作答进度存在本机浏览器。</li>
        <li>写作两题不判分，建议先自己写，再展开参考答案对照。</li>
      </ol>
    </div>
    <div class="cards">%(cards)s</div>
  </div>
</main>

<footer>
  <div class="wrap">
    题目与答案均来自 Instituto Cervantes 公开发布的官方样卷与往届真题，版权归其所有，仅供个人学习自测。
  </div>
</footer>
%(js)s
</body>
</html>
""" % {"base": BASE_CSS, "idx": QK.IDX_CSS, "resp": RESP_CSS, "cards": "".join(cards), "js": QK.index_script()}
    with open(os.path.join(OUT, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)


def main():
    os.makedirs(OUT, exist_ok=True)
    src_img = os.path.join(HERE, "img")
    dst_img = os.path.join(OUT, "img")
    if os.path.isdir(dst_img):
        shutil.rmtree(dst_img)
    shutil.copytree(src_img, dst_img)
    for f in os.listdir(dst_img):
        if f.startswith("_"):
            os.remove(os.path.join(dst_img, f))
    totals = {}
    for s in SETS:
        totals[s["slug"]] = page_set(s)
        print("built", s["slug"], totals[s["slug"]])
    page_index(totals)
    print("built index.html")


if __name__ == "__main__":
    main()
