"""Render the licensed English/Chinese practice extension; no Japanese question translation."""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "aws-aip"]))

import json
import shutil
from pathlib import Path

import build_aip as AIP

HERE = Path(__file__).resolve().parent
TIERS = {"easy": "基础", "hard": "困难", "veryhard": "高难"}
NOTICE = "英文原题与中文机器翻译。本批暂不提供日文题文；日语界面显示英文原文。"
REFERENCE = "开源练习，非 AWS 官方试题。按作者参考答案判分，解析附官方文档链接。"


def papers(bank):
    plan = []
    for tier in TIERS:
        selected = [q for q in bank if q["tier"] == tier]
        for index in range(0, len(selected), 50):
            plan.append((tier, index // 50 + 1, selected[index:index + 50]))
    return plan


def render_question(local, question):
    text = lambda values: {**values, "ja": ""}
    explanations = {lang: "\n\n".join(o["letter"] + ". " + o["explanation"][lang] for o in question["options"]) for lang in ("en", "zh")}
    record = {**question, "question": text(question["question"]),
              "options": [text(o) for o in question["options"]], "explanation": text(explanations)}
    block = AIP.CLF.render_question(local, record).replace('<p class="ja" lang="ja"></p>', '')
    block = block.replace(f"Content Domain {question['domain']}", f"Domain {question['domain']} · Task {question['task']}")
    context = ["AWS AIP-C01 · " + question["sourceId"], "Reference answer: " + ",".join(question["answer"]),
               question["question"]["en"], question["question"]["zh"]]
    context += [f"{o['letter']}. {o['en']}\n{o['zh']}" for o in question["options"]]
    if len("\n\n".join(context)) > 10000:
        raise ValueError("Question context exceeds AI material limit")
    block = block.replace(f'class="q" id="q{local}"', f'class="q" id="q{local}" data-source-id="{AIP.CLF.esc(question["sourceId"])}" data-chat-context="{AIP.CLF.esc(chr(10).join(context))}"', 1)
    role = "checkbox" if len(question["answer"]) > 1 else "radio"
    block = block.replace('class="opt"', f'class="opt" tabindex="0" role="{role}" aria-checked="false"')
    refs = '<p>' + ' · '.join('<a href="' + AIP.CLF.esc(r["url"]) + '" target="_blank" rel="noopener noreferrer">AWS Docs</a>' for r in question["resources"]) + '</p>'
    return block.replace('</details></div>', refs + '</details></div>')


def render_part(tier, part, chunk):
    title = f"AWS AIP-C01 开源练习 · {TIERS[tier]} · 第 {part:02d} 套"
    body = f'<main class="wrap"><h1>{title}</h1><p class="sub">{NOTICE}</p><p class="sub">{REFERENCE}</p>'
    body += '<p class="sub"><a href="/aws-aip/index.html">← 题库目录</a></p><div class="toolbar"><div class="btns">'
    for id_, label in (("sheet", "答题卡"), ("wrong", "只看错题"), ("expand", "展开全部解析"), ("report", "交卷"), ("reset", "重置")):
        body += f'<button id="btn-{id_}" type="button">{label}</button>'
    body += '</div>' + AIP.Q.bar_html(len(chunk)) + '</div>'
    body += '\n'.join(render_question(i, q) for i, q in enumerate(chunk, 1))
    body += '<footer class="sub">JeremyEngineer · <a href="https://github.com/JeremyEngineer/aws-aip-c01-practice-exam">GitHub</a> · <a href="/aws-aip/LICENSE-JeremyEngineer.txt">MIT License</a></footer></main>'
    body += AIP.Q.sheet_html(len(chunk)) + AIP.Q.js(f"aws:aip:open:{tier}:{part:02d}", len(chunk))
    body += '<script type="module" src="/assets/aip-options.mjs"></script>'
    return AIP.shell(title, body).replace('src="../assets/presence.js"', 'src="/assets/presence.js"')


def render_index(bank):
    page = AIP.index_html()
    total = 136 + len(bank)
    summary = f"共 {total} 题：原有 PDF 题库 136 题，开源练习 {len(bank)} 题。"
    page = page.replace('<p class="sub">' + AIP.NOTICE, '<p class="sub">' + summary + '</p><p class="sub">' + AIP.NOTICE, 1)
    page = page.replace('<a class="card" href="part01.html"', '<h2 class="sub">原有 PDF 题库 · 136 题</h2><a class="card" href="part01.html"', 1)
    extra = '<p class="sub">' + NOTICE + '</p><p class="sub">' + REFERENCE + '</p>'
    last_tier = None
    for tier, part, chunk in papers(bank):
        if tier != last_tier:
            extra += f'<h2 class="sub">开源练习 · {TIERS[tier]}</h2>'
            last_tier = tier
        extra += (f'<a class="card" href="open-{tier}/part{part:02d}.html" data-quiz-key="aws:aip:open:{tier}:{part:02d}" data-quiz-total="{len(chunk)}">'
                  f'<div class="n">第 {part:02d} 套</div><div class="r">{len(chunk)} 题</div><div class="pg"><i></i><span>未开始</span></div></a>')
    extra += '<p class="sub">JeremyEngineer · <a href="LICENSE-JeremyEngineer.txt">MIT License</a></p>'
    return page.replace('</main>', extra + '</main>', 1)


def build():
    bank = json.loads(HERE.joinpath("data/open-questions.json").read_text(encoding="utf-8"))
    if len(bank) != 442:
        raise ValueError("Expected 442 licensed questions after attribution exclusions")
    for q in bank:
        for field in [q["question"], *q["options"], *(o["explanation"] for o in q["options"])]:
            if any(not field.get(lang, "").strip() for lang in ("en", "zh")):
                raise ValueError("Missing bilingual text: " + q["id"])
    for tier, part, chunk in papers(bank):
        directory = AIP.SITE / ("open-" + tier)
        directory.mkdir(exist_ok=True)
        (directory / f"part{part:02d}.html").write_text(render_part(tier, part, chunk), encoding="utf-8")
    AIP.SITE.joinpath("index.html").write_text(render_index(bank), encoding="utf-8")
    shutil.copyfile(HERE / "LICENSE-JeremyEngineer.txt", AIP.SITE / "LICENSE-JeremyEngineer.txt")
    AIP.I18N.build_dict_js()
    for page in [AIP.SITE / "index.html", *AIP.SITE.glob("open-*/*.html")]:
        AIP.I18N.inject(str(page))
        AIP.Theme.inject_file(page)
    print(f"Built {len(bank)} English/Chinese practice questions in {len(papers(bank))} papers")


if __name__ == "__main__":
    build()
