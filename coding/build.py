# -*- coding: utf-8 -*-
"""编程入门实操 · CSS 代码审查训练 生成器

产出：out/css.html（CSS 审查 20 题）+ out/index.html（区块目录）
判分引擎复用 ../quiz_kit/quizkit.py。

与别的题库不同的地方：题干和选项里要放**代码块**，
所以这里额外做了极简的 CSS 语法着色（注释 / 选择器 / 属性名）。
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), "quiz_kit"))
sys.path.insert(0, HERE)

import quizkit as QK                    # noqa: E402
from data_css import ITEMS              # noqa: E402

OUT = os.path.join(HERE, "out")
esc = QK.esc

KIND_LABEL = {"impl": "实现选择", "review": "缺陷审查"}
KIND_HINT = {"impl": "给出要实现的效果，选出正确的那一段",
             "review": "给出一段有问题的代码，找出原因或改法"}


# ---------------------------------------------------------------- 代码着色
def hl(code):
    """极简 CSS 着色：先转义，再按行判定行类型（注释 / 选择器 / 声明）。"""
    out = []
    for ln in esc(code).split("\n"):
        s = ln.strip()
        if s.startswith("/*") or s.startswith("*") or s.endswith("*/"):
            out.append('<span class="c-cmt">%s</span>' % ln)
        elif "{" in ln or s == "}" or s.endswith("}"):
            out.append('<span class="c-sel">%s</span>' % ln)
        elif ":" in ln:
            out.append(re.sub(r"^(\s*)(-?[a-zA-Z][a-zA-Z0-9-]*)(\s*:)",
                              r'\1<span class="c-prop">\2</span>\3', ln))
        else:
            out.append(ln)
    return "\n".join(out)


def codeblock(code, cap=""):
    if not code:
        return ""
    head = ('<div class="ccap">%s</div>' % esc(cap)) if cap else ""
    return '%s<pre class="code"><code>%s</code></pre>' % (head, hl(code))


def md(text):
    """解析里允许 **粗体** 和 ``` 代码块；先整体转义再还原，避免注入。"""
    t = esc(text)
    blocks = []

    def stash(m):
        blocks.append(hl(m.group(1) or ""))
        return "\x00%d\x00" % (len(blocks) - 1)

    t = re.sub(r"```[a-zA-Z]*\n?([\s\S]*?)```", stash, t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"`([^`\n]+)`", r'<code class="inl">\1</code>', t)
    t = re.sub("\x00(\\d+)\x00",
               lambda m: '</div><pre class="code"><code>%s</code></pre><div>'
                         % blocks[int(m.group(1))], t)
    return t


# ---------------------------------------------------------------- 页面样式
SET_CSS = r"""
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#f5f7f9;color:#0f172a;font-size:15px;line-height:1.7;
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif}
a{color:#1d4e79}
.wrap{max-width:880px;margin:0 auto;padding:0 18px}

header.hero{padding:26px 0 18px}
header.hero h1{margin:0 0 6px;font-size:25px;letter-spacing:-.2px}
header.hero .sub{margin:0;color:#64748b;font-size:14px}
.crumb{font-size:13px;margin-bottom:12px}
.crumb a{text-decoration:none;color:#5b6570}
.crumb a:hover{color:#1d4e79;text-decoration:underline}
.meta{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px}
.chip{font-size:12px;padding:3px 10px;border-radius:99px;background:#eef5fc;
 border:1px solid #d3e3f2;color:#28567f}
.chip.grey{background:#f1f5f9;border-color:#e2e8f0;color:#64748b}
.chip.warn{background:#fff8e6;border-color:#f0dca8;color:#8a5f00}

/* ---- 代码块 ---- */
pre.code{margin:11px 0;padding:13px 15px;background:#0f172a;border-radius:10px;
 overflow-x:auto;font-size:13.2px;line-height:1.62;
 font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace;
 color:#e2e8f0;tab-size:2}
pre.code code{white-space:pre}
.ccap{font-size:12px;color:#64748b;margin:12px 0 5px;font-weight:600}
.c-cmt{color:#7d8da3;font-style:italic}
.c-sel{color:#7dd3fc}
.c-prop{color:#c4b5fd}
code.inl{background:#eef2f7;border:1px solid #dde5ed;border-radius:4px;
 padding:1px 5px;font-size:12.8px;
 font-family:"SFMono-Regular",Consolas,Menlo,monospace;color:#334155}

.qlist{list-style:none;margin:0;padding:0}
li.q{background:#fff;border:1px solid #e3e9ee;border-radius:13px;padding:18px 20px;
 margin:0 0 14px}
.qhd{display:flex;align-items:center;gap:9px;margin-bottom:9px;flex-wrap:wrap}
.qn{font-weight:800;color:#0b6b3a;font-variant-numeric:tabular-nums;font-size:15px}
.kindtag{font-size:11.5px;padding:2px 8px;border-radius:5px;white-space:nowrap;
 background:#eef5fc;border:1px solid #d3e3f2;color:#28567f;font-weight:600}
.kindtag.review{background:#fff8e6;border-color:#f0dca8;color:#8a5f00}
.stem{font-size:15.4px;font-weight:600;line-height:1.72;margin:0 0 4px;color:#111}
.opts{list-style:none;margin:0;padding:0}
li.opt{display:flex;gap:11px;align-items:flex-start;padding:10px 13px;border:1px solid #dfe5ea;
 border-radius:9px;background:#fff;margin:7px 0;font-size:14.6px;line-height:1.62}
li.opt.hascode{display:block;padding:9px 12px}
li.opt.hascode .letter{float:left;margin:2px 9px 0 0}
.letter{flex:0 0 auto;width:23px;height:23px;border:1px solid #cbd5e1;border-radius:50%;
 display:flex;align-items:center;justify-content:center;font-size:12.5px;font-weight:700;
 color:#475569;background:#f8fafc;margin-top:1px}
.otxt{flex:1 1 auto;min-width:0}
li.opt.hascode .otxt pre.code{margin:0;background:#f8fafc;color:#1e293b;
 border:1px solid transparent}
li.opt.hascode .otxt .c-cmt{color:#94a3b8}
li.opt.hascode .otxt .c-sel{color:#0369a1}
li.opt.hascode .otxt .c-prop{color:#7c3aed}
li.opt.ok.hascode .otxt pre.code,li.opt.bad.hascode .otxt pre.code{background:#fff}

details.ans{margin-top:12px;border-top:1px dashed #e3e9ee;padding-top:10px}
details.ans summary{cursor:pointer;font-size:13px;color:#0b6b3a;font-weight:600;
 list-style:none;user-select:none}
details.ans summary::-webkit-details-marker{display:none}
details.ans summary::before{content:"\25B8 "}
details.ans[open] summary::before{content:"\25BE "}
.anbody{margin-top:8px;font-size:13.8px;color:#475569;line-height:1.82;white-space:pre-line}
.anbody b{color:#111}
.anbody .ref{display:block;margin-top:9px;font-size:12px;color:#94a3b8;white-space:normal}

.pcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(258px,1fr));gap:13px}
.pcard{display:block;background:#fff;border:1px solid #e3e9ee;border-radius:13px;padding:16px 17px;
 text-decoration:none;color:inherit;transition:transform .14s ease,box-shadow .14s ease}
.pcard:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(15,23,42,.09)}
.pcard .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.pcard .tag{font-size:11.5px;padding:3px 9px;border-radius:99px;background:#eef5fc;
 border:1px solid #d3e3f2;color:#28567f;font-weight:600}
.pcard .cnt{font-size:12px;color:#94a3b8}
.pcard h3{margin:0 0 6px;font-size:16px}
.pcard p{margin:0;font-size:13px;color:#64748b;line-height:1.66}
.note{background:#fff;border:1px solid #e3e9ee;border-radius:12px;padding:15px 18px;
 font-size:13.3px;color:#475569;line-height:1.78;margin:0 0 22px}
.note b{color:#111}
.note ul{margin:8px 0 0;padding-left:20px}
.note li{margin:4px 0}
footer{padding:24px 0 40px;color:#94a3b8;font-size:12.5px;line-height:1.8}
footer b{color:#64748b}

@media (max-width:560px){
  li.q{padding:15px 14px}
  header.hero h1{font-size:21px}
  pre.code{font-size:12.4px;padding:11px 12px}
}
"""


def render_item(it):
    n = it["n"]
    k = it["kind"]
    opts = []
    for L, txt in it["opts"]:
        has = "\n" in txt or ("{" in txt and ":" in txt)
        cls = "opt hascode" if has else "opt"
        body = ('<pre class="code"><code>%s</code></pre>' % hl(txt)) if has else md(txt)
        opts.append('<li class="%s" data-letter="%s"><span class="letter">%s</span>'
                    '<span class="otxt">%s</span></li>' % (cls, esc(L), esc(L), body))
    expl = '正确答案：<b>%s</b>\n%s' % (esc(it["ans"]), md(it["expl"]))
    if it.get("ref"):
        expl += '\n<span class="ref">延伸阅读：<b>%s</b></span>' % esc(it["ref"])
    return (
        '<li class="q" id="q%(n)d" data-n="%(n)d" data-ans="%(ans)s" data-multi="0">'
        '<div class="qhd"><span class="qn">%(n)d.</span>'
        '<span class="kindtag %(k)s">%(label)s</span></div>'
        '<div class="stem">%(stem)s</div>'
        '%(code)s'
        '<ul class="opts">%(opts)s</ul>'
        '<details class="ans"><summary>看解析</summary><div class="anbody">%(expl)s</div></details>'
        '%(verdict)s%(act)s</li>'
    ) % {
        "n": n, "ans": esc(it["ans"]), "k": k, "label": KIND_LABEL[k],
        "stem": md(it["stem"]), "code": codeblock(it.get("code"), it.get("codecap")),
        "opts": "".join(opts), "expl": expl,
        "verdict": QK.verdict_html(), "act": QK.act_html(0),
    }


def page_set(title, subtitle, items, slug, crumb, chips, note, total=None):
    total = total or len(items)
    body = "".join(render_item(it) for it in items)
    return """<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>%(title)s · 编程入门实操</title>
<style>%(engine)s%(set)s</style>
</head>
<body>
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

<header class="hero i18n-noloc">
  <div class="wrap">
    <div class="crumb"><a href="index.html">← 返回编程入门实操</a></div>
    <h1>%(title)s</h1>
    <p class="sub">%(subtitle)s</p>
    <div class="meta">%(chips)s</div>
  </div>
</header>

<main class="i18n-noloc">
  <div class="wrap">
    %(note)s
    <ol class="qlist i18n-noloc">%(body)s</ol>
  </div>
</main>

<footer class="i18n-noloc">
  <div class="wrap">
    <div><b>训练定位</b>：现实里代码多由 AI 产出，资深工程师的核心产出是<b>审查</b> ——
      看出这段会不会跑偏、为什么、该怎么改。本套题全部取自真实 review 现场的高频坑。</div>
    <div style="margin-top:6px">每题解析不只给答案，会说明浏览器<b>实际会怎么渲染</b>。
      发现与规范不符的欢迎指出。</div>
  </div>
</footer>

%(sheet)s
%(js)s
</body>
</html>
""" % {
        "title": esc(title), "subtitle": esc(subtitle), "chips": chips,
        "engine": QK.CSS, "set": SET_CSS, "note": note, "body": body,
        "bar": QK.bar_html(total), "sheet": QK.sheet_html(total),
        "js": QK.js("coding-" + slug, total), "crumb": crumb,
    }


def page_index():
    n_impl = sum(1 for i in ITEMS if i["kind"] == "impl")
    n_rev = sum(1 for i in ITEMS if i["kind"] == "review")
    cards = (
        '<a class="pcard" href="css.html"><div class="top">'
        '<span class="tag">CSS</span><span class="cnt">%d 题</span></div>'
        '<h3>CSS 代码审查</h3>'
        '<p>给效果选实现（%d 题）+ 给缺陷代码找原因（%d 题）。'
        '覆盖盒模型、定位、层叠上下文、flex/grid 陷阱、优先级、性能与无障碍。</p></a>'
        % (len(ITEMS), n_impl, n_rev)
    )
    return """<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>编程入门实操 · 代码审查训练</title>
<style>%(engine)s%(set)s</style>
</head>
<body>
<header class="hero i18n-noloc">
  <div class="wrap">
    <div class="crumb"><a href="../index.html">← 返回题库总览</a></div>
    <h1>编程入门实操</h1>
    <p class="sub">代码审查训练 · 给 AI 写的代码挑毛病</p>
    <div class="meta">
      <span class="chip">%(n)s 题</span>
      <span class="chip grey">即时判分 · 进度存在本机</span>
      <span class="chip warn">持续扩充中</span>
    </div>
  </div>
</header>
<main class="i18n-noloc">
  <div class="wrap">
    <div class="note">
      <b>为什么练代码审查</b>
      <ul>
        <li>现实工作中代码越来越多由 AI 产出，人的价值从<b>写代码</b>转向<b>判断代码对不对</b>。</li>
        <li>AI 生成的代码往往<b>看起来能跑</b>，但埋着隐性缺陷 —— 布局随内容漂移、
            断点失效、层级错乱。这些靠肉眼扫一遍很难发现。</li>
        <li>本区块每种题型都分两类：<b>实现选择</b>（给效果选正确实现）与
            <b>缺陷审查</b>（给问题代码找原因 / 选改法）。</li>
      </ul>
    </div>
    <div class="pcards">%(cards)s</div>
  </div>
</main>
<footer class="i18n-noloc">
  <div class="wrap">
    <div>题目依据 MDN Web Docs 与各 CSS 规范，解析说明浏览器实际渲染行为。
      · <a href="../index.html">返回题库总览</a></div>
  </div>
</footer>
</body>
</html>
""" % {"engine": QK.CSS, "set": SET_CSS, "cards": cards, "n": len(ITEMS)}


def main():
    os.makedirs(OUT, exist_ok=True)
    chips = ('<span class="chip">%d 题 · 实现选择 %d + 缺陷审查 %d</span>'
             '<span class="chip grey">即时判分 · 进度存在本机</span>'
             % (len(ITEMS),
                sum(1 for i in ITEMS if i["kind"] == "impl"),
                sum(1 for i in ITEMS if i["kind"] == "review")))
    note = """<div class="note">
      <b>两种题型</b>
      <ul>
        <li><b>实现选择</b>（蓝标）：给出要实现的效果，四段实现里挑正确的一段。
            干扰项都是真实会犯的错，不是凑数选项。</li>
        <li><b>缺陷审查</b>（黄标）：给出一段有问题的 CSS，找出原因或正确改法。
            这类更接近实际 review 场景。</li>
        <li>点选项 →「确认作答」立刻判定，每题都能展开「看解析」读到浏览器实际行为。</li>
      </ul>
    </div>"""
    html = page_set("CSS 代码审查", "20 题 · 覆盖真实 review 现场的高频坑",
                    ITEMS, "css", "", chips, note)
    with open(os.path.join(OUT, "css.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("built css.html  %d 题" % len(ITEMS))
    with open(os.path.join(OUT, "index.html"), "w", encoding="utf-8") as f:
        f.write(page_index())
    print("built index.html（编程入门实操 · 共 %d 题）" % len(ITEMS))


if __name__ == "__main__":
    main()
