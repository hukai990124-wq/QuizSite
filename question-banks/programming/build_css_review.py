"""Generate the CSS code-review practice page without executing its examples.

Mirrors programming/build_html_review.py so both practices share one look:
same quizkit engine, same red review theme, same three-language layout
(English shown by default, Chinese/Japanese revealed by programming-review.css
via html[data-lang]).

Questions where the reviewer only has to choose an implementation carry an
empty "code" field; those skip the code block and show the four snippets as
choices instead.

An option is either a plain string (a code snippet — identical in every
language) or an {en, zh, ja} object (prose describing a cause or a fix —
translated, and switched by programming-review.css via html[data-lang]).
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q
import i18n_inject
import theme_inject


def trilang(values):
    return "".join(f'<p lang="{lang}">{Q.esc(values[lang])}</p>' for lang in ("en", "zh", "ja"))


def opt_text(opt):
    """Code snippets are language-neutral; prose options fall back to English."""
    return opt["en"] if isinstance(opt, dict) else opt


def opt_html(opt):
    if not isinstance(opt, dict):
        return f"<code>{Q.esc(opt)}</code>"
    return "".join(f'<span class="opt-lang" lang="{lang}">{Q.esc(opt[lang])}</span>'
                   for lang in ("en", "zh", "ja"))


def render(data, *, name="CSS", prefix="css", description=None, source_name="MDN Web Docs"):
    """The prose/code review renderer shared by CSS and TypeScript practice."""
    title = f"{name} 入门 · 代码审查训练"
    description = description or "CSS 是样式语言。本组练盒模型、定位与布局；示例只展示，不会执行。"
    template = (ROOT / "site/aws-aif/bank/part01.html").read_text(encoding="utf-8")
    css = re.search(r"<style>([\s\S]*?)</style>", template).group(1)
    out = ['<!doctype html><html lang="zh"><head><meta charset="utf-8">'
           '<meta name="viewport" content="width=device-width,initial-scale=1">',
           '<title>' + title + '</title><style>' + css + '</style></head>'
           '<body><main class="wrap">',
           '<p class="sub"><a href="/">← 返回题库总览</a></p>',
           '<p class="sub">编程入门实操</p><h1>' + title + '</h1>',
           f'<p class="sub">{len(data)} 道四选一 · 阅读代码，辨认问题，选择修复 · 原创练习</p>',
           '<p class="sub">' + Q.esc(description) + '</p>',
           '<div class="toolbar"><div class="btns">'
           '<button class="primary" id="btn-sheet" type="button">答题卡</button>'
           '<button id="btn-wrong" type="button">只看错题</button>'
           '<button id="btn-expand" type="button">展开全部解析</button>'
           '<button id="btn-report" type="button">交卷</button>'
           '<button id="btn-reset" type="button">重置</button>'
           '</div>' + Q.bar_html(len(data)) + '</div>']

    for n, q in enumerate(data, 1):
        if q["id"] != f"{prefix}-{n:02d}" or len(q["options"]) != 4 or q["answer"] not in "ABCD":
            raise ValueError("stable IDs and exactly four choices are required")
        # The shared context reader removes buttons; retain the code choices explicitly.
        context = "\n".join([name + " code review", *q["prompt"].values(), q.get("code") or "",
                             *(f"{letter}. {opt_text(o)}" for letter, o in zip("ABCD", q["options"])),
                             "Reference answer: " + q["answer"],
                             *q["explanation"].values(), q["source"]])
        codeblock = ('<pre class="review-code i18n-noloc"><code>' + Q.esc(q["code"]) + '</code></pre>'
                     if (q.get("code") or "").strip() else "")
        out += [f'<div class="q" id="q{n}" data-n="{n}" data-ans="{q["answer"]}" '
                f'data-review-id="{q["id"]}" data-chat-context="{Q.esc(context)}">',
                f'<div class="qhead"><span class="qno">Question {n}</span>'
                f'<span class="badge">单选</span><span class="src">{name} · Code review</span></div>',
                '<div class="stem">' + trilang(q["prompt"]) + codeblock + '</div><ol class="opts">']
        for letter, opt in zip("ABCD", q["options"]):
            out.append(f'<li class="opt" data-letter="{letter}"><span class="letter">{letter}</span>'
                       f'<button type="button" class="otext vocab-pick i18n-noloc" aria-pressed="false">'
                       f'{opt_html(opt)}</button></li>')
        out += ['</ol>' + Q.act_html(1) + '<div class="verdict" role="status"></div>',
                '<details class="ans"><summary>解析 / Explanation</summary>'
                '<p class="correct">正确答案 <b>' + q["answer"] + '</b></p>'
                '<div class="expl">' + trilang(q["explanation"]) +
                '<p><a href="' + Q.esc(q["source"]) + '" target="_blank" rel="noopener noreferrer">'
                + Q.esc(source_name) + '</a></p></div></details></div>']

    out += ['</main>' + Q.sheet_html(len(data)) + Q.js(f"programming:{prefix}:01", len(data)),
            '<script type="module" src="/assets/aif-vocabulary.mjs"></script>'
            '<script src="/assets/presence.js"></script></body></html>']
    page = theme_inject.inject_html("\n".join(out))[0]
    return page.replace('</head>',
                        '<link rel="stylesheet" href="/assets/programming-review.css"></head>')


if __name__ == "__main__":
    data = json.loads((ROOT / "question-banks/programming/css-review.json").read_text(encoding="utf-8"))
    target = ROOT / "site/programming/css.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print(f"Generated {len(data)} CSS code review questions")
