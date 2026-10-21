# -*- coding: utf-8 -*-
"""把「界面三语切换（中 / EN / 日）」注入全站。

产出两样东西
  1) site/assets/i18n.js   —— quiz_kit/i18n.json（词条）+ src/javascript/i18n_runtime.js（运行时）
  2) site/**/*.html        —— 页脚语言按钮 + 引导脚本

只动界面文案。题目 / 选项 / 解析 / 原文一律不碰（运行时靠区域规则 + 精确匹配两道锁）。

幂等：每次执行先把上次注入的 <!--i18n:*--> 区块摘掉再重放，可以反复跑。
"""
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SITE = os.path.join(ROOT, "site")
DICT_SRC = os.path.join(HERE, "i18n.json")
RUNTIME_SRC = os.path.join(ROOT, "src", "javascript", "i18n_runtime.js")
OUT_DIR = os.path.join(SITE, "assets")
OUT_JS = os.path.join(OUT_DIR, "i18n.js")

# ----------------------------------------------------------------- 注入片段
CSS = """<style id="i18n-css">
.lang-foot{margin:26px 0 0;padding:0 16px 36px;text-align:center}
footer .lang-switch{margin-top:14px}
.lang-switch{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;align-items:center}
.lang-switch button{font:inherit;font-size:12.5px;line-height:1.25;padding:5px 13px;border-radius:99px;
 border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;-webkit-tap-highlight-color:transparent;
 transition:background .12s,border-color .12s,color .12s}
.lang-switch button:hover{background:#f1f5f9}
.lang-switch button[aria-pressed="true"]{background:#0b6b3a;border-color:#0b6b3a;color:#fff;font-weight:600}
/* CSS 伪元素里的中文标签（不是 DOM 文本节点，只能靠覆盖规则跟着语言走） */
html[data-lang="en"] li.opt.miss::after{content:"KEY"}
html[data-lang="en"] .zh:before{content:"ZH "}
html[data-lang="ja"] .zh:before{content:"中訳 "}
html[data-i18n-wait] body{visibility:hidden}
@media print{.lang-foot,footer .lang-switch{display:none!important}}
</style>"""

HEAD_JS = """<script id="i18n-init">
(function(){try{
var L=["zh","en","ja"],l=null;
try{l=localStorage.getItem("ui:lang")}catch(e){}
if(L.indexOf(l)<0){var n=String(navigator.language||navigator.userLanguage||"").toLowerCase();
 l=n.indexOf("ja")===0?"ja":(n.indexOf("zh")===0?"zh":"en");}
if(l!=="zh"){document.documentElement.setAttribute("data-i18n-wait","1");
 setTimeout(function(){document.documentElement.removeAttribute("data-i18n-wait")},1500);}
document.documentElement.setAttribute("data-lang",l);
document.documentElement.setAttribute("lang",l==="zh"?"zh-CN":(l==="ja"?"ja":"en"));
}catch(e){}})();
</script>"""

SW_DIV = """<div class="lang-switch i18n-noloc" role="group" aria-label="Language">
<button type="button" data-set-lang="zh" aria-pressed="false">中文</button>
<button type="button" data-set-lang="en" aria-pressed="false">English</button>
<button type="button" data-set-lang="ja" aria-pressed="false">日本語</button>
</div>"""

BOOT_JS = """<script src="/assets/i18n.js"></script>
<script id="i18n-boot">
(function(){var REL="__REL__";
function go(){if(window.__I18N__&&window.__I18N__.boot)window.__I18N__.boot();}
if(window.__I18N__){go();return;}
var s=document.createElement("script");s.src=REL+"assets/i18n.js";
s.onload=go;
s.onerror=function(){document.documentElement.removeAttribute("data-i18n-wait")};
document.head.appendChild(s);})();
</script>"""

# ---- 三个注入块：整块（含全部换行）都包在注释标记里，strip 后一字不剩 ----
HEAD_BLOCK = "<!--i18n:head-->\n" + CSS + "\n" + HEAD_JS + "\n<!--/i18n:head-->"
SW_BLOCK = "<!--i18n:sw-->\n" + SW_DIV + "\n<!--/i18n:sw-->"
FOOT_BLOCK = ("<!--i18n:sw-->\n<footer class=\"lang-foot\">\n" + SW_DIV
              + "\n</footer>\n<!--/i18n:sw-->")
JS_BLOCK = "<!--i18n:js-->\n" + BOOT_JS + "\n<!--/i18n:js-->"

BLOCKS = {
    "head": re.compile(r"<!--i18n:head-->.*?<!--/i18n:head-->", re.S),
    "sw": re.compile(r"<!--i18n:sw-->.*?<!--/i18n:sw-->", re.S),
    "js": re.compile(r"<!--i18n:js-->.*?<!--/i18n:js-->", re.S),
}


def strip_blocks(text):
    for rx in BLOCKS.values():
        text = rx.sub("", text)
    return text


# ------------------------------------------------------------ 1. 生成字典 JS
def build_dict_js():
    dic = json.load(open(DICT_SRC, encoding="utf-8"))
    pairs, dyn, tagged = {}, 0, []
    for k, v in dic.items():
        if k.startswith("__DYNAMIC__"):
            k = k[len("__DYNAMIC__"):]
            dyn += 1
        elif k.startswith("_"):
            continue
        for lang in ("en", "ja"):
            rest = re.sub(r"</?b>", "", v[lang])
            if "<" in rest or ">" in rest:
                tagged.append((k, lang, v[lang]))
        pairs[k] = [v["en"], v["ja"]]
    if tagged:
        print("！译文里出现 <b> 以外的标签，运行时会原样显示：")
        for k, lang, val in tagged:
            print("   [%s] %r -> %r" % (lang, k, val))
    payload = json.dumps(pairs, ensure_ascii=False, separators=(",", ":"))
    runtime = open(RUNTIME_SRC, encoding="utf-8").read()
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT_JS, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* 自动生成：quiz_kit/i18n.json + src/javascript/i18n_runtime.js —— 请勿手改 */\n")
        f.write("window.__I18N_DICT__=" + payload + ";\n")
        f.write(runtime)
    size = os.path.getsize(OUT_JS)
    print("词条 %d 条（其中 __DYNAMIC__ %d 条）→ %s (%.1f KB)"
          % (len(pairs), dyn, os.path.relpath(OUT_JS, ROOT), size / 1024.0))
    return len(pairs)


# ------------------------------------------------------------- 2. 注入 HTML
def inject(path):
    # newline="" 读写：原样保留文件既有换行符（这批页面多数是 CRLF，不能给洗成 LF）
    with open(path, "r", encoding="utf-8", newline="") as f:
        text = f.read()
    if text.count("</head>") != 1 or text.count("</body>") != 1:
        return "跳过（结构异常）"

    crlf = text.count("\r\n")
    eol = "\r\n" if crlf * 2 > text.count("\n") else "\n"

    rel = os.path.relpath(os.path.dirname(path), SITE).replace("\\", "/")
    depth = 0 if rel == "." else len(rel.split("/"))
    prefix = "../" * depth

    text = strip_blocks(text)
    had_footer = "</footer>" in text

    head = HEAD_BLOCK.replace("\n", eol)
    text = text.replace("</head>", head + "</head>", 1)

    if had_footer:
        i = text.rfind("</footer>")
        text = text[:i] + SW_BLOCK.replace("\n", eol) + text[i:]
        tail = JS_BLOCK
    else:
        tail = FOOT_BLOCK + JS_BLOCK

    tail = tail.replace("\n", eol).replace("__REL__", prefix)
    text = text.replace("</body>", tail + "</body>", 1)

    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(text)
    return "并入原页脚" if had_footer else "新建页脚"


def main():
    n = build_dict_js()
    if not n:
        print("！字典为空，中止")
        return 1

    files, stats = [], {}
    for dp, dn, fn in os.walk(SITE):
        if os.path.basename(dp) == "assets":
            continue
        for f in sorted(fn):
            if f.lower().endswith(".html"):
                files.append(os.path.join(dp, f))

    for p in sorted(files):
        r = inject(p)
        stats[r] = stats.get(r, 0) + 1

    print("注入 %d 个 HTML： %s" % (len(files),
          "，".join("%s %d" % (k, v) for k, v in sorted(stats.items()))))
    return 0


if __name__ == "__main__":
    sys.exit(main())
