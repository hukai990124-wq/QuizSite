"""Generate beginner review practice without executing its HTML examples."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q
import i18n_inject
import theme_inject


def trilang(values):
    return "".join(f'<p lang="{lang}">{Q.esc(values[lang])}</p>' for lang in ("en", "zh", "ja"))


def render(data):
    template = (ROOT / "site/aws-aif/bank/part01.html").read_text(encoding="utf-8")
    css = re.search(r"<style>([\s\S]*?)</style>", template).group(1)
    out = ['<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
           '<title>HTML 入门 · 代码审查训练</title><style>' + css + '</style></head><body><main class="wrap">',
           '<p class="sub"><a href="/">← 返回题库总览</a></p>',
           '<p class="sub">编程入门实操</p><h1>HTML 入门 · 代码审查训练</h1>',
           '<p class="sub">20 道四选一 · 阅读代码，辨认问题，选择修复 · 原创练习</p>',
           '<p class="sub">HTML 是标记语言。本组先练标签、属性与结构；示例只展示，不会执行。</p>',
           '<div class="toolbar"><div class="btns"><button class="primary" id="btn-sheet" type="button">答题卡</button><button id="btn-wrong" type="button">只看错题</button><button id="btn-expand" type="button">展开全部解析</button><button id="btn-report" type="button">交卷</button><button id="btn-reset" type="button">重置</button></div>' + Q.bar_html(len(data)) + '</div>']
    for n, q in enumerate(data, 1):
        if q["id"] != f"html-{n:02d}" or len(q["options"]) != 4 or q["answer"] not in "ABCD":
            raise ValueError("stable IDs and exactly four choices are required")
        # The shared context reader removes buttons; retain the code choices explicitly.
        context = "\n".join(["HTML code review", *q["prompt"].values(), q["code"],
                             *(f"{letter}. {code}" for letter, code in zip("ABCD", q["options"])),
                             "Reference answer: " + q["answer"], *q["explanation"].values(), q["source"]])
        out += [f'<div class="q" id="q{n}" data-n="{n}" data-ans="{q["answer"]}" data-review-id="{q["id"]}" data-chat-context="{Q.esc(context)}">',
                f'<div class="qhead"><span class="qno">Question {n}</span><span class="badge">单选</span><span class="src">HTML · Code review</span></div>',
                '<div class="stem">' + trilang(q["prompt"]) + '<pre class="review-code i18n-noloc"><code>' + Q.esc(q["code"]) + '</code></pre></div><ol class="opts">']
        for letter, code in zip("ABCD", q["options"]):
            out.append(f'<li class="opt" data-letter="{letter}"><span class="letter">{letter}</span><button type="button" class="otext vocab-pick i18n-noloc" aria-pressed="false"><code>{Q.esc(code)}</code></button></li>')
        out += ['</ol>' + Q.act_html(1) + '<div class="verdict" role="status"></div>',
                '<details class="ans"><summary>解析 / Explanation</summary><p class="correct">正确答案 <b>' + q["answer"] + '</b></p><div class="expl">' + trilang(q["explanation"]) + '<p><a href="' + Q.esc(q["source"]) + '" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></p></div></details></div>']
    out += ['</main>' + Q.sheet_html(len(data)) + Q.js("programming:html:01", len(data)),
            '<script type="module" src="/assets/aif-vocabulary.mjs"></script><script src="/assets/presence.js"></script></body></html>']
    page = theme_inject.inject_html("\n".join(out))[0]
    return page.replace('</head>', '<link rel="stylesheet" href="/assets/programming-review.css"></head>')


if __name__ == "__main__":
    data = json.loads((ROOT / "programming/html-review.json").read_text(encoding="utf-8"))
    target = ROOT / "site/programming/index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print(f"Generated {len(data)} HTML code review questions")
