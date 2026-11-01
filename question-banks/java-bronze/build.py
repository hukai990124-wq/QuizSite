"""Generate the Java Bronze (1Z0-818) practice page.

Question text comes from publicly published Sun/Oracle certification-style
questions. Answers are determined case by case and every question carries a
worked explanation in English, Chinese and Japanese.

Unlike programming/css-review, this set mixes single-answer and multi-answer
questions, and it is an exam bank rather than a code review drill, so it uses
the neutral theme rather than the red review one.
"""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "java-bronze"]))

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q  # noqa: E402
import i18n_inject  # noqa: E402
import theme_inject  # noqa: E402

TITLE = {"en": "Java Bronze Practice", "zh": "Java Bronze 备考练习", "ja": "Java Bronze 対策演習"}

EXTRA_CSS = """
/* Same three-language switch as the programming section: one language at a time. */
.q [lang="zh"], .q [lang="ja"] { display: none; }
html[data-lang="zh"] .q [lang="zh"], html[data-lang="ja"] .q [lang="ja"] { display: block; }
html[data-lang="zh"] .q [lang="en"], html[data-lang="ja"] .q [lang="en"] { display: none; }
.q .opt-lang[lang="zh"], .q .opt-lang[lang="ja"] { display: none; }
html[data-lang="zh"] .q .opt-lang[lang="zh"],
html[data-lang="ja"] .q .opt-lang[lang="ja"] { display: inline; }
html[data-lang="zh"] .q .opt-lang[lang="en"],
html[data-lang="ja"] .q .opt-lang[lang="en"] { display: none; }
.jb-code {
  padding: 14px 16px; margin: 12px 0; background: #f6f8fa;
  border: 1px solid #d8dee4; border-left: 4px solid #2f6fdb;
  border-radius: 8px; white-space: pre-wrap; overflow-wrap: anywhere;
  font: 14px/1.65 Consolas, "SFMono-Regular", monospace;
}
.jb-topic { font-size: 12px; color: #57606a; border: 1px solid #d8dee4;
  border-radius: 999px; padding: 2px 10px; }
"""


def trilang(values):
    return "".join(f'<p lang="{lang}">{Q.esc(values[lang])}</p>' for lang in ("en", "zh", "ja"))


def opt_html(opt):
    return "".join(f'<span class="opt-lang" lang="{lang}">{Q.esc(opt[lang])}</span>'
                   for lang in ("en", "zh", "ja"))


def render(data):
    questions = data["questions"]
    template = (ROOT / "site/aws-aif/bank/part01.html").read_text(encoding="utf-8")
    css = re.search(r"<style>([\s\S]*?)</style>", template).group(1)
    single = sum(1 for q in questions if q["kind"] == "single")

    out = ['<!doctype html><html lang="zh"><head><meta charset="utf-8">'
           '<meta name="viewport" content="width=device-width,initial-scale=1">',
           '<title>Java Bronze 备考练习</title><style>' + css + EXTRA_CSS + '</style></head>'
           '<body><main class="wrap">',
           '<p class="sub"><a href="/">← 返回题库总览</a></p>',
           '<h1>Java Bronze 备考练习</h1>',
           '<p class="sub">20 题 · 单选 %d 题 + 多选 %d 题 · '
           '面向 Oracle Certified Java Programmer Bronze SE（1Z0-818）</p>' % (
               single, len(questions) - single),
           '<p class="sub">考点：变量与初始化、修饰符、运算符、控制流程、字符串、'
           '接口与多态、继承、异常。</p>',
           '<p class="sub">练完这 20 题，可进入 '
           '<a href="/java-bronze/exam.html"><b>Java Bronze 全真模拟卷</b></a>'
           '（60 题 · 65 分钟 · 60 分及格）。</p>',
           '<div class="toolbar"><div class="btns">'
           '<button class="primary" id="btn-sheet" type="button">答题卡</button>'
           '<button id="btn-wrong" type="button">只看错题</button>'
           '<button id="btn-expand" type="button">展开全部解析</button>'
           '<button id="btn-report" type="button">交卷</button>'
           '<button id="btn-reset" type="button">重置</button>'
           '</div>' + Q.bar_html(len(questions)) + '</div>']

    for n, q in enumerate(questions, 1):
        if q["id"] != "jb-%02d" % n or len(q["options"]) != 4 or q["answer"] not in (
                "A", "B", "C", "D", "A,B", "A,C", "A,D", "B,C", "B,D", "C,D",
                "A,B,C", "A,B,D", "A,C,D", "B,C,D", "A,B,C,D"):
            raise ValueError("stable ids, four choices and a valid answer are required")
        label = "多选" if q["kind"] == "multi" else "单选"
        # Reading answers off the page would defeat the point, so keep them out of tooltips.
        context = "\n".join(["Java Bronze practice question", q["topic"],
                             *q["prompt"].values(), q.get("code") or "",
                             *(f"{letter}. {o['en']}" for letter, o in zip("ABCD", q["options"])),
                             *q["explanation"].values()])
        codeblock = ('<pre class="jb-code i18n-noloc"><code>' + Q.esc(q["code"]) + '</code></pre>'
                     if (q.get("code") or "").strip() else "")
        out += [f'<div class="q" id="q{n}" data-n="{n}" data-ans="{q["answer"]}" '
                f'data-review-id="{q["id"]}" data-chat-context="{Q.esc(context)}">',
                f'<div class="qhead"><span class="qno">Question {n}</span>'
                f'<span class="badge">{label}</span>'
                f'<span class="jb-topic">{Q.esc(q["topic"])}</span></div>',
                '<div class="stem">' + trilang(q["prompt"]) + codeblock + '</div><ol class="opts">']
        for letter, opt in zip("ABCD", q["options"]):
            out.append(f'<li class="opt" data-letter="{letter}"><span class="letter">{letter}</span>'
                       f'<button type="button" class="otext vocab-pick i18n-noloc" '
                       f'aria-pressed="false">{opt_html(opt)}</button></li>')
        out += ['</ol>' + Q.act_html(1) + '<div class="verdict" role="status"></div>',
                '<details class="ans"><summary>解析 / Explanation</summary>'
                '<p class="correct">正确答案 <b>' + q["answer"] + '</b></p>'
                '<div class="expl">' + trilang(q["explanation"]) +
                '</div></details></div>']

    out += ['</main>' + Q.sheet_html(len(questions)) + Q.js("jb:practice:01", len(questions)),
            '<script type="module" src="/assets/aif-vocabulary.mjs"></script>'
            '<script src="/assets/presence.js"></script></body></html>']
    return theme_inject.inject_html("\n".join(out))[0]


if __name__ == "__main__":
    data = json.loads((ROOT / "question-banks/java-bronze/java-bronze.json").read_text(encoding="utf-8"))
    target = ROOT / "site/java-bronze/index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print("Generated %d Java Bronze practice questions" % len(data["questions"]))
