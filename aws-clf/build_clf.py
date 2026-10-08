# -*- coding: utf-8 -*-
"""Build four bilingual, answerable AWS CLF-C02 practice sets.

Usage:
  python build_clf.py             # offline: render the bundled 200 questions
  python build_clf.py --prepare   # fetch the pinned MIT source, sample and translate
"""
from __future__ import annotations

import concurrent.futures
import html
import json
import re
import shutil
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

REPO = Path(__file__).resolve().parents[1]
HERE = Path(__file__).resolve().parent
DATA_FILE = HERE / "data" / "questions.json"
OUTPUT = HERE / "output"
SITE = REPO / "site" / "aws-clf"
SOURCE_COMMIT = "9367b00d9f5b39676f4ec3413304d91a7dccbbfb"
SOURCE_ROOT = (
    "https://raw.githubusercontent.com/nastaso/cloudcertprep/"
    + SOURCE_COMMIT
    + "/src/data/clf-c02"
)
QUOTAS = {1: 12, 2: 15, 3: 17, 4: 6}
SETS = 4
PER_SET = 50

sys.path.insert(0, str(REPO / "quiz_kit"))
import quizkit as Q  # noqa: E402
import i18n_inject as I18N  # noqa: E402


TERMS = sorted(
    {
        "Amazon API Gateway", "Amazon Aurora", "Amazon CloudFront", "Amazon CloudWatch",
        "Amazon Cognito", "Amazon DynamoDB", "Amazon EC2", "Amazon EFS", "Amazon EKS",
        "Amazon ECS", "Amazon ElastiCache", "Amazon EventBridge", "Amazon FSx",
        "Amazon Inspector", "Amazon Kinesis", "Amazon Lightsail", "Amazon Macie",
        "Amazon OpenSearch Service", "Amazon RDS", "Amazon Redshift", "Amazon Route 53",
        "Amazon S3", "Amazon SES", "Amazon SNS", "Amazon SQS", "Amazon VPC",
        "AWS Artifact", "AWS Auto Scaling", "AWS Backup", "AWS Budgets", "AWS CloudFormation",
        "AWS CloudTrail", "AWS Config", "AWS Cost Explorer", "AWS Direct Connect",
        "AWS Glue", "AWS IAM Identity Center", "AWS IAM", "AWS KMS", "AWS Lambda",
        "AWS Organizations", "AWS Pricing Calculator", "AWS Shield", "AWS Snowball",
        "AWS Step Functions", "AWS Support", "AWS Trusted Advisor", "AWS WAF",
        "CloudTrail", "CloudWatch", "EC2", "IAM", "S3", "VPC", "DynamoDB", "Lambda",
    },
    key=len,
    reverse=True,
)
ZERO_WIDTH = re.compile(r"[\u200b-\u200f\u2060\ufeff]")
PLACEHOLDER = re.compile(r"Z\s*Q\s*P\s*H\s*(\d+)\s*Z\s*Q\s*P\s*H", re.I)


def protect_terms(text: str) -> str:
    for index, term in enumerate(TERMS):
        text = re.sub(re.escape(term), f"ZQPH{index}ZQPH", text, flags=re.I)
    return text


def translate(text: str, retries: int = 5) -> str:
    text = (text or "").strip()
    if not text:
        return ""
    protected = protect_terms(text)
    url = (
        "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=zh-CN&q="
        + urllib.parse.quote(protected)
    )
    last_error = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"},
            )
            with urllib.request.urlopen(req, timeout=30) as response:
                payload = json.loads(response.read().decode("utf-8"))
            if isinstance(payload, list):
                result = "".join(
                    item if isinstance(item, str) else (item[0] if item else "")
                    for item in payload
                )
            else:
                result = str(payload)
            if not result:
                raise RuntimeError("empty translation")
            result = ZERO_WIDTH.sub("", result)
            result = PLACEHOLDER.sub(lambda m: TERMS[int(m.group(1))], result)
            result = re.sub(r"Z\s*Q\s*P\s*H\s*\d*\s*Z?\s*Q?\s*P?\s*H?", "", result, flags=re.I)
            result = re.sub(r"\s+([，。！？；：、）】])", r"\1", result)
            result = re.sub(r"([（【])\s+", r"\1", result)
            result = re.sub(r"([\u4e00-\u9fff])([A-Za-z0-9])", r"\1 \2", result)
            result = re.sub(r"([A-Za-z0-9])([\u4e00-\u9fff])", r"\1 \2", result)
            return result.strip()
        except Exception as exc:  # retry transient translation endpoint failures
            last_error = exc
            time.sleep(0.4 * (attempt + 1))
    raise RuntimeError(f"translation failed: {last_error}")


def fetch_domain(domain: int) -> list[dict]:
    url = f"{SOURCE_ROOT}/domain{domain}.json"
    req = urllib.request.Request(url, headers={"User-Agent": "QuizBank-CLF-C02-builder/1.0"})
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.loads(response.read().decode("utf-8"))


def to_question(item: dict, domain: int) -> dict:
    raw_options = item.get("options") or {}
    if isinstance(raw_options, dict):
        options = [{"letter": key, "en": value} for key, value in raw_options.items()]
    else:
        options = [
            {"letter": option.get("letter") or chr(65 + index), "en": option.get("text", "")}
            for index, option in enumerate(raw_options)
        ]
    options.sort(key=lambda option: option["letter"])
    raw_answer = item.get("answer") or []
    answers = [raw_answer] if isinstance(raw_answer, str) else list(raw_answer)
    answers = sorted(str(answer).upper().strip() for answer in answers if str(answer).strip())
    if not item.get("id") or not item.get("question") or not options or not answers:
        raise ValueError(f"incomplete upstream question: {item.get('id')}")
    if not item.get("explanation"):
        raise ValueError(f"missing explanation: {item.get('id')}")
    letters = {option["letter"] for option in options}
    if any(answer not in letters for answer in answers):
        raise ValueError(f"invalid answer key: {item.get('id')}")
    return {
        "source_id": item["id"],
        "domain": domain,
        "taskStatement": item.get("taskStatement", ""),
        "question": {"en": item["question"], "zh": ""},
        "options": [{**option, "zh": ""} for option in options],
        "answer": answers,
        "explanation": {"en": item["explanation"], "zh": ""},
        "lastVerified": item.get("lastVerified", ""),
    }


def prepare_data() -> None:
    print("从已固定版本的 CloudCertPrep 下载 CLF-C02 练习题…")
    sources = {domain: fetch_domain(domain) for domain in range(1, 5)}
    per_domain = {
        domain: [to_question(item, domain) for item in items]
        for domain, items in sources.items()
    }
    needed = {domain: SETS * count for domain, count in QUOTAS.items()}
    selected: dict[int, list[dict]] = {}
    for domain, total in needed.items():
        bank = per_domain[domain]
        if len(bank) < total:
            raise ValueError(f"domain {domain} only has {len(bank)} questions; need {total}")
        # Spread the sample across the entire domain bank, instead of taking only its first rows.
        indexes = [(i * len(bank)) // total for i in range(total)]
        selected[domain] = [bank[index] for index in indexes]

    questions = []
    for set_no in range(SETS):
        chunk = []
        for domain, count in QUOTAS.items():
            lo = set_no * count
            chunk.extend(selected[domain][lo : lo + count])
        # Deterministic mixing keeps each practice set from becoming four domain blocks.
        import random

        random.Random(20261009 + set_no).shuffle(chunk)
        for local_no, question in enumerate(chunk, 1):
            question["id"] = f"clf-{set_no + 1:02d}-{local_no:02d}"
            questions.append(question)

    translations: list[tuple[dict, str, str | int, str]] = []
    for question in questions:
        translations.append((question, "question", "zh", question["question"]["en"]))
        translations.append((question, "explanation", "zh", question["explanation"]["en"]))
        for index, option in enumerate(question["options"]):
            translations.append((question, "options", index, option["en"]))

    print(f"已抽取 {len(questions)} 题；开始翻译 {len(translations)} 个文本字段…")
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        jobs = {pool.submit(translate, text): (q, field, sub, text) for q, field, sub, text in translations}
        done = 0
        for future in concurrent.futures.as_completed(jobs):
            q, field, sub, source_text = jobs[future]
            try:
                translated = future.result()
                if field == "options":
                    q[field][sub]["zh"] = translated
                else:
                    q[field][sub] = translated
            except Exception as exc:
                failures.append((q["source_id"], field, sub, str(exc)))
            done += 1
            if done % 100 == 0 or done == len(translations):
                print(f"  翻译进度 {done}/{len(translations)}")
    if failures:
        raise RuntimeError(f"{len(failures)} translations failed; first: {failures[0]}")

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    DATA_FILE.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"题库已写入 {DATA_FILE.relative_to(REPO)}")


BASE_CSS = r"""
:root{--line:#e3e6ea;--muted:#6b7280;--en:#111827;--zh:#0f4c81;--badge:#eff6ff;--badge-line:#bfdbfe}
*{box-sizing:border-box}
body{margin:0;background:#f5f6f8;color:var(--en);font:15px/1.65 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:32px 22px 90px}
h1{font-size:24px;margin:0 0 6px}
.sub{color:var(--muted);margin:0 0 22px;font-size:13px}
.toolbar{position:sticky;top:0;z-index:9;background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .btns{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:9px}
.toolbar button{font:inherit;font-size:13px;padding:6px 12px;border:1px solid var(--line);background:#fff;border-radius:8px;cursor:pointer}
.toolbar button:hover{background:#f3f4f6}
.toolbar button.primary{background:#0b6b3a;border-color:#0b6b3a;color:#fff}
.q{background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin:0 0 18px;scroll-margin-top:118px}
.qhead{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.qno{font-weight:700;font-size:15px}
.badge{font-size:11px;color:#1d4ed8;background:var(--badge);border:1px solid var(--badge-line);border-radius:999px;padding:2px 9px}
.stem p{margin:0 0 6px}.en{color:var(--en)}.zh{color:var(--zh);font-size:14px}.zh:before{content:"中译 ";font-size:10px;color:#9ca3af;letter-spacing:.5px}
.opts{list-style:none;margin:12px 0 0;padding:0}.opts li{display:flex;gap:10px;padding:9px 12px;border:1px solid var(--line);border-radius:10px;margin-bottom:7px;background:#fcfcfd}
.letter{flex:0 0 22px;height:22px;line-height:22px;text-align:center;font-weight:700;font-size:12px;background:#fff;border:1px solid #d1d5db;border-radius:999px}
.otext{flex:1 1 auto;min-width:0}.opts p{margin:0 0 4px}
details.ans{margin-top:12px;border:1px solid #cdebd6;background:#f4fdf7;border-radius:10px}
details.ans summary{cursor:pointer;padding:10px 14px;font-weight:600;font-size:13px;color:#065f46}
details.ans .correct,details.ans .expl{padding:0 14px}details.ans .correct{font-size:14px;margin:4px 0 8px}details.ans .correct b{color:#047857;font-size:16px}details.ans .expl{padding-bottom:12px}
a.card{display:block;background:#fff;border:1px solid #e3e6ea;border-radius:12px;padding:15px 18px;margin-bottom:10px;text-decoration:none;color:#111827}
a.card:hover{border-color:#93c5fd;background:#f8fbff}a.card .n{font-weight:700}.r{color:#6b7280;font-size:13px;margin-top:3px}
.pg{position:relative;margin-top:9px}.pg::before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:#e9eef2;border-radius:99px}
.pg i{position:relative;display:block;height:5px;width:0;background:#0b6b3a;border-radius:99px;transition:width .3s}.pg span{display:block;font-size:12px;color:#8b95a1;margin-top:6px}.pg.on span{color:#0b6b3a;font-weight:600}
@media print{body{background:#fff}.toolbar{display:none}.wrap{max-width:none;padding:0}.q{border:none;border-bottom:1px solid #ddd;border-radius:0;padding:14px 0;page-break-inside:avoid;margin:0}details.ans{border:1px solid #ccc;background:#fff;display:block}details.ans .expl{display:block}}
"""


def esc(value: str) -> str:
    return html.escape(str(value or ""), quote=True).replace("\n", "<br>")


def render_question(number: int, question: dict) -> str:
    answer = ",".join(question["answer"])
    badges = [f"Content Domain {question['domain']}"]
    if question.get("taskStatement"):
        badges.append(f"Task {question['taskStatement']}")
    if len(question["answer"]) > 1:
        badges.append(f"Select {len(question['answer'])}")
    out = [f'<div class="q" id="q{number}" data-n="{number}" data-ans="{esc(answer)}">']
    out.append(
        '<div class="qhead"><span class="qno">Question %d</span><span class="badge">%s</span></div>'
        % (number, esc(" · ".join(badges)))
    )
    out.append('<div class="stem"><p class="en">%s</p><p class="zh">%s</p></div>' % (
        esc(question["question"]["en"]), esc(question["question"]["zh"])
    ))
    out.append('<ol class="opts">')
    for option in question["options"]:
        letter = esc(option["letter"])
        out.append('<li class="opt" data-letter="%s"><span class="letter">%s</span><div class="otext">' % (letter, letter))
        out.append('<p class="en">%s</p><p class="zh">%s</p></div></li>' % (esc(option["en"]), esc(option["zh"])))
    out.append('</ol>')
    out.append(Q.act_html(len(question["answer"])))
    out.append('<div class="verdict"></div>')
    out.append('<details class="ans"><summary>解析 / Explanation</summary>')
    out.append('<p class="correct">正确答案 / Answer: <b>%s</b></p>' % esc(answer))
    out.append('<div class="expl"><p class="en">%s</p><p class="zh">%s</p></div>' % (
        esc(question["explanation"]["en"]), esc(question["explanation"]["zh"])
    ))
    out.append('</details></div>')
    return "\n".join(out)


def render_part(part_no: int, questions: list[dict]) -> str:
    out = [
        '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width,initial-scale=1">',
        f'<title>AWS CLF-C02 练习卷 · 第 {part_no:02d} 套</title>',
        f'<style>{BASE_CSS}{Q.CSS}</style></head><body>',
        '<a href="index.html" title="返回 CLF-C02 目录" style="position:fixed;right:14px;top:14px;z-index:99;background:rgba(255,255,255,.95);border:1px solid #d8dee5;border-radius:99px;padding:6px 14px;font:12.5px/1.4 -apple-system,Segoe UI,Microsoft YaHei,sans-serif;color:#334155;text-decoration:none;box-shadow:0 1px 4px rgba(0,0,0,.10)">← 题库目录</a>',
        '<div class="wrap">',
        f'<h1>AWS CLF-C02 练习卷 · 第 {part_no:02d} 套</h1>',
        '<p class="sub">50 题 · 中英对照 · 点选项后按「确认作答」判分 · 官方考试 65 题（含 15 道不计分题），本卷为 50 题练习 · 非官方题目 · 中文为机器翻译</p>',
        '<div class="toolbar"><div class="btns">',
        '<button class="primary" id="btn-sheet" type="button">答题卡</button>',
        '<button id="btn-wrong" type="button">只看错题</button>',
        '<button id="btn-expand" type="button">展开全部解析</button>',
        '<button id="btn-report" type="button">交卷</button>',
        '<button id="btn-reset" type="button">重置</button>',
        '<button onclick="window.print()" type="button">打印 / 存 PDF</button>',
        '</div>',
        Q.bar_html(len(questions)),
        '</div>',
    ]
    out.extend(render_question(index, question) for index, question in enumerate(questions, 1))
    out.extend([
        '<footer class="sub">题目来源：<a href="https://github.com/nastaso/cloudcertprep/tree/%s/src/data/clf-c02">CloudCertPrep CLF-C02</a>（MIT License）。<a href="LICENSE-CloudCertPrep.txt">查看许可证</a>。不代表 AWS 官方内容。</footer>' % SOURCE_COMMIT,
        '</div>',
        Q.sheet_html(len(questions)),
        Q.js(f"aws:clf:{part_no:02d}", len(questions)),
        '<script src="../assets/presence.js"></script>',
        '</body></html>',
    ])
    return "\n".join(out)


def render_markdown(part_no: int, questions: list[dict]) -> str:
    lines = [
        f"# AWS CLF-C02 练习卷 · 第 {part_no:02d} 套",
        "",
        "> 50 题 · 中英对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文为机器翻译。",
        "",
    ]
    for number, question in enumerate(questions, 1):
        labels = [f"Domain {question['domain']}"]
        if question.get("taskStatement"):
            labels.append(f"Task {question['taskStatement']}")
        if len(question["answer"]) > 1:
            labels.append(f"Select {len(question['answer'])}")
        lines.extend([f"## Question {number} · {' · '.join(labels)}", "", f"**EN** {question['question']['en']}", "", f"**中** {question['question']['zh']}", ""])
        for option in question["options"]:
            lines.append(f"- **{option['letter']}.** {option['en']}")
            lines.append(f"  - {option['zh']}")
        lines.extend(["", f"**答案 / Answer: `{','.join(question['answer'])}`**", "", question["explanation"]["en"], "", question["explanation"]["zh"], "", "---", ""])
    return "\n".join(lines)


def render_index() -> str:
    out = [
        '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width,initial-scale=1">',
        '<title>AWS CLF-C02 练习题库 · 目录</title>',
        '<style>body{margin:0;background:#f5f6f8;font:15px/1.7 -apple-system,Segoe UI,PingFang SC,sans-serif;color:#111827}.wrap{max-width:760px;margin:0 auto;padding:46px 22px 70px}h1{font-size:27px;margin:0 0 8px}.sub{color:#6b7280;margin:0 0 26px;font-size:14px}.grp{margin:0 0 26px}a.card{display:block;background:#fff;border:1px solid #e3e6ea;border-radius:12px;padding:15px 18px;margin-bottom:10px;text-decoration:none;color:#111827}a.card:hover{border-color:#93c5fd;background:#f8fbff}.n{font-weight:700}.r{color:#6b7280;font-size:13px;margin-top:3px}.pg{position:relative;margin-top:9px}.pg:before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:#e9eef2;border-radius:99px}.pg i{position:relative;display:block;height:5px;background:#0b6b3a;border-radius:99px}.pg span{display:block;font-size:12px;color:#8b95a1;margin-top:6px}.note{background:#fff;border:1px solid #e3e6ea;border-radius:12px;padding:16px 18px;font-size:13px;color:#374151}code{background:#f1f5f9;border-radius:4px;padding:1px 5px}</style>',
        '</head><body><div class="wrap">',
        '<a href="../index.html" title="返回题库总览" style="position:fixed;right:14px;top:14px;z-index:99;background:#fff;border:1px solid #d8dee5;border-radius:99px;padding:6px 14px;color:#334155;text-decoration:none">← 题库总览</a>',
        '<h1>AWS CLF-C02 备考练习</h1>',
        '<p class="sub">4 套 · 每套 50 题 · 中英对照 · 答案与解析 · 官方考试 65 题（含 15 道不计分题）</p>',
        '<div class="grp">',
    ]
    for part_no in range(1, SETS + 1):
        out.append(
            f'<a class="card" href="part{part_no:02d}.html" data-quiz-key="aws:clf:{part_no:02d}" data-quiz-total="{PER_SET}">'
            f'<div class="n">第 {part_no:02d} 套</div><div class="r">50 道练习题</div>'
            '<div class="pg"><i></i><span>未开始</span></div></a>'
        )
    out.extend([
        '</div>',
        '<div class="note"><b>领域分布（每套）：</b>云概念 12 题；安全与合规 15 题；云技术与服务 17 题；账单、定价与支持 6 题。按官方 CLF-C02 领域权重安排。',
        '<br><b>来源与使用：</b>题目来源于 MIT 许可的 <a href="https://github.com/nastaso/cloudcertprep/tree/%s/src/data/clf-c02">CloudCertPrep</a>；本页附完整许可证。中文为机器翻译。练习题非 AWS 官方题目或考题预测；AWS 与本题库无关联。<a href="LICENSE-CloudCertPrep.txt">查看 MIT License</a>。</div>' % SOURCE_COMMIT,
        '</div>',
        Q.index_script(),
        '<script src="../assets/presence.js"></script>',
        '</body></html>',
    ])
    return "\n".join(out)


def build() -> None:
    if not DATA_FILE.exists():
        raise SystemExit("缺少 data/questions.json；请先运行 python build_clf.py --prepare")
    questions = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    if len(questions) != SETS * PER_SET:
        raise ValueError(f"expected 200 questions, got {len(questions)}")
    if len({question["source_id"] for question in questions}) != len(questions):
        raise ValueError("duplicate upstream question IDs found")
    for part_no in range(SETS):
        chunk = questions[part_no * PER_SET : (part_no + 1) * PER_SET]
        counts = {domain: sum(q["domain"] == domain for q in chunk) for domain in QUOTAS}
        if counts != QUOTAS:
            raise ValueError(f"set {part_no + 1} has unexpected domain balance: {counts}")
        for question in chunk:
            texts = [question["question"].get("en"), question["question"].get("zh"),
                     question["explanation"].get("en"), question["explanation"].get("zh")]
            texts.extend(value for option in question["options"] for value in (option.get("en"), option.get("zh")))
            if any(not text or not str(text).strip() for text in texts):
                raise ValueError(f"missing bilingual text: {question.get('source_id')}")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    SITE.mkdir(parents=True, exist_ok=True)
    for part_no in range(1, SETS + 1):
        chunk = questions[(part_no - 1) * PER_SET : part_no * PER_SET]
        for folder in (OUTPUT, SITE):
            (folder / f"part{part_no:02d}.html").write_text(render_part(part_no, chunk), encoding="utf-8")
        (OUTPUT / f"part{part_no:02d}.md").write_text(render_markdown(part_no, chunk), encoding="utf-8")
    for folder in (OUTPUT, SITE):
        (folder / "index.html").write_text(render_index(), encoding="utf-8")
        shutil.copyfile(HERE / "LICENSE-CloudCertPrep.txt", folder / "LICENSE-CloudCertPrep.txt")
    I18N.build_dict_js()
    for page in sorted(SITE.glob("*.html")):
        I18N.inject(str(page))
    print("生成完成：4 套 × 50 题；HTML 已同步到 site/aws-clf/，Markdown 在 aws-clf/output/。")


if __name__ == "__main__":
    if "--prepare" in sys.argv:
        prepare_data()
    build()
