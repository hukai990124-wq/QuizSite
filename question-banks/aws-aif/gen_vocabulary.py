"""Build original AIF terminology practice with the existing QuizSite engine.

Run from any directory: python aws-aif/gen_vocabulary.py
Only site/aws-aif/vocabulary.html is generated; question order is a progress contract.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q
import i18n_inject
import theme_inject


def trilang(values, tag="p"):
    return "".join(f'<{tag} lang="{lang}">{Q.esc(values[lang])}</{tag}>' for lang in ("en", "zh", "ja"))


def render(data):
    by_id = {q["id"]: q for q in data}
    if len(by_id) != len(data):
        raise ValueError("duplicate vocabulary IDs")
    template = (ROOT / "site/aws-aif/bank/part01.html").read_text(encoding="utf-8")
    css = re.search(r"<style>([\s\S]*?)</style>", template).group(1)
    css += ".vocab-pick{display:block;width:100%;text-align:left;border:0;background:transparent;color:inherit;font:inherit;cursor:pointer;padding:0}.vocab-pick span{display:block;margin-bottom:4px}.vocab-pick:focus-visible{outline:3px solid #0b6b3a;outline-offset:4px}.vocab-pick:disabled{color:inherit;cursor:default}.vocab-pick [lang=ja]{font-size:14px;color:#334155}.verdict:empty{display:none}"
    # English originals stay visible; only the active UI language's translation is shown.
    css += '.q [lang="zh"],.q [lang="ja"]{display:none}html[data-lang="zh"] .q [lang="zh"],html[data-lang="ja"] .q [lang="ja"]{display:block}'
    out = ['<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
           f'<title>AWS AIF · 专业术语单词库</title><style>{css}</style></head><body><div class="wrap">',
           '<p class="sub"><a href="index.html">← 返回 AIF-C01 目录</a></p>',
           '<h1>AWS AIF · 专业术语单词库</h1>',
           f'<p class="sub">{len(data)} 个专业术语 · 每题仅 A/B 两个选项 · 中英日对照 · 原创学习练习，非官方试题</p>',
           '<div class="toolbar"><div class="btns"><button class="primary" id="btn-sheet" type="button">答题卡</button><button id="btn-wrong" type="button">只看错题</button><button id="btn-expand" type="button">展开全部解析</button><button id="btn-report" type="button">交卷</button><button id="btn-reset" type="button">重置</button></div>' + Q.bar_html(len(data)) + '</div>']
    for n, q in enumerate(data, 1):
        other = by_id[q["distractor"]]
        if other["id"] == q["id"] or other["meaning"] == q["meaning"]:
            raise ValueError("distractor must differ from correct meaning")
        correct_index = hashlib.sha256(q["id"].encode()).digest()[0] % 2
        choices = [other, other]
        choices[correct_index] = q
        answer = "AB"[correct_index]
        out += [f'<div class="q" id="q{n}" data-n="{n}" data-ans="{answer}" data-term-id="{Q.esc(q["id"])}">',
                f'<div class="qhead"><span class="qno">Question {n}</span><span class="badge">单选</span><span class="src">Domain {q["domain"]}</span></div>',
                '<div class="stem">' + trilang({"zh": f'“{q["term"]}”的含义是什么？', "en": f'What does “{q["term"]}” mean?', "ja": f'「{q["term"]}」はどの意味ですか？'}) + '</div><ol class="opts">']
        for letter, option in zip("AB", choices):
            out.append(f'<li class="opt" data-letter="{letter}"><span class="letter">{letter}</span><button type="button" class="otext vocab-pick" aria-pressed="false">' + trilang(option["meaning"], "span") + '</button></li>')
        expl = {
            "zh": f'{q["term"]}：{q["meaning"]["zh"]}。另一选项描述的是 {other["term"]}：{other["meaning"]["zh"]}。',
            "en": f'{q["term"]}: {q["meaning"]["en"]}. The other choice describes {other["term"]}: {other["meaning"]["en"]}.',
            "ja": f'{q["term"]}：{q["meaning"]["ja"]}。もう一方は {other["term"]}（{other["meaning"]["ja"]}）の説明です。'
        }
        out += ['</ol>' + Q.act_html(1) + '<div class="verdict" role="status"></div>',
                f'<details class="ans"><summary>解析 / Explanation</summary><p class="correct">正确答案 <b>{answer}</b></p><div class="expl">' + trilang(expl) + f'<p><a href="{Q.esc(q["source"])}" target="_blank" rel="noopener noreferrer">AWS documentation</a></p></div></details></div>']
    out += ['</div>' + Q.sheet_html(len(data)) + Q.js("aws:aifvocab:01", len(data)),
            '<script type="module" src="/assets/aif-vocabulary.mjs"></script><script src="/assets/presence.js"></script></body></html>']
    return theme_inject.inject_html("\n".join(out))[0]


if __name__ == "__main__":
    data = json.loads((ROOT / "question-banks/aws-aif/vocabulary.json").read_text(encoding="utf-8"))
    target = ROOT / "site/aws-aif/vocabulary.html"
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print(f"Generated {len(data)} A/B terminology questions")
