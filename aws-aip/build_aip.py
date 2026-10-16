"""Render the supplied AIP-C01 PDFs with the existing CLF/AIF quiz engine."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "quiz_kit"))
sys.path.insert(0, str(ROOT / "aws-clf"))
import build_clf as CLF
import i18n_inject as I18N
import quizkit as Q
import theme_inject as Theme

SITE = ROOT / "site/aws-aip"
CSS = CLF.BASE_CSS + Q.CSS + """
html[data-lang="en"] .zh,html[data-lang="en"] .ja{display:none}
.q{overflow-wrap:anywhere}
.source-discussion{white-space:pre-wrap;overflow-wrap:anywhere;font-size:13px;color:var(--muted)}
.reference-note{font-size:13px;color:var(--muted)}
.opt:focus-visible{outline:3px solid #2563eb;outline-offset:2px}
"""
NOTICE = "136 题，按 50／50／36 分卷，含单选与多选。英文原题配中文、日文机器翻译。"
DISCLAIMER = "题目与参考答案来自用户提供的 PDF，非 AWS 官方内容。讨论为考生观点，可能有争议；按资料参考答案判分。"


def question_html(local, question):
    record = {**question, "domain": question["number"]}
    block = CLF.render_question(local, record).replace(f"Content Domain {question['number']}", f"Source #{question['number']:03d}")
    role = "checkbox" if len(question["answer"]) > 1 else "radio"
    block = block.replace('class="opt"', f'class="opt" tabindex="0" role="{role}" aria-checked="false"')
    group = "group" if role == "checkbox" else "radiogroup"
    block = block.replace('<ol class="opts">', f'<ol class="opts" role="{group}" aria-label="Source #{question["number"]:03d}">')
    # Keep the full original discussion inside the answer area, so random exam
    # mode hides it together with the answer until the paper is submitted.
    if question["discussion"]:
        discussion = '<details><summary>原始讨论（英文，仅供参考）</summary><div class="source-discussion i18n-noloc" lang="en">' + CLF.esc(question["discussion"]) + '</div></details>'
        block = block.replace('</details></div>', discussion + '</details></div>')
    else:
        block = block.replace('</details></div>', '<p class="reference-note sub">原资料未附讨论；以上为参考答案对应选项。</p></details></div>')
    return block


def shell(title, body):
    return ('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            f'<title>{title}</title><style>{CSS}</style></head><body>{body}'
            '<script src="../assets/presence.js"></script></body></html>')


def part_html(number, chunk):
    title = f"AWS AIP-C01 练习卷 · 第 {number:02d} 套"
    body = f'<main class="wrap"><h1>{title}</h1><p class="sub">{NOTICE}</p>'
    body += '<p class="sub">' + DISCLAIMER + '</p><a href="index.html">← 题库目录</a>'
    body += '<div class="toolbar"><div class="btns">'
    for id_, label in (("sheet", "答题卡"), ("wrong", "只看错题"), ("expand", "展开全部解析"), ("report", "交卷"), ("reset", "重置")):
        body += f'<button id="btn-{id_}" type="button">{label}</button>'
    body += '</div>' + Q.bar_html(len(chunk)) + '</div>'
    body += '\n'.join(question_html(local, q) for local, q in enumerate(chunk, 1))
    body += '</main>' + Q.sheet_html(len(chunk)) + Q.js(f"aws:aip:{number:02d}", len(chunk))
    body += '<script type="module" src="../assets/aip-options.mjs"></script>'
    return shell(title, body)


def index_html():
    title = "AWS AIP-C01 · Generative AI Developer – Professional"
    body = f'<main class="wrap"><h1>{title}</h1><p class="sub">{NOTICE}</p>'
    body += '<p class="sub">' + DISCLAIMER + '</p>'
    body += '<div class="toolbar"><a href="../random.html?pool=aws-aip&amp;size=50">随机 50 题</a></div>'
    for part, count in ((1, 50), (2, 50), (3, 36)):
        body += (f'<a class="card" href="part{part:02d}.html" data-quiz-key="aws:aip:{part:02d}" data-quiz-total="{count}">'
                 f'<div class="n">第 {part:02d} 套</div><div class="r">{count} 题 · #{(part-1)*50+1:03d}–#{min(part*50,136):03d}</div>'
                 '<div class="pg"><i></i><span>未开始</span></div></a>')
    return shell(title, body + '</main>' + Q.index_script())


def build():
    bank = json.loads(ROOT.joinpath("aws-aip/data/questions.json").read_text(encoding="utf-8"))
    if [q["number"] for q in bank] != list(range(1, 137)):
        raise ValueError("Expected exactly Q001–Q136")
    for q in bank:
        for field in [q["question"], *q["options"], q["explanation"]]:
            if any(not field.get(lang, "").strip() for lang in ("en", "zh", "ja")):
                raise ValueError(f"Missing translation in {q['id']}")
    SITE.mkdir(exist_ok=True)
    for part in range(1, 4):
        SITE.joinpath(f"part{part:02d}.html").write_text(part_html(part, bank[(part-1)*50:part*50]), encoding="utf-8")
    SITE.joinpath("index.html").write_text(index_html(), encoding="utf-8")
    I18N.build_dict_js()
    for page in SITE.glob("*.html"):
        I18N.inject(str(page))
        Theme.inject_file(page)
    print("Built AIP-C01: 50 / 50 / 36 questions")


if __name__ == "__main__":
    build()
