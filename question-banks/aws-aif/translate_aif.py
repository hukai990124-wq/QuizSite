# -*- coding: utf-8 -*-
"""把 HydraNode 的 AIF-C01 230 题机翻成中文，供中英对照。

输出： raw/hydranode_aif_zh.json
格式： {"115": {"stem": "...", "options": {"A": "..."}, "explanation": "..."}}

术语保护：AWS 服务名 / AI 缩写先替换成占位符，翻完还原，避免被意译。
"""
import sys
import os
import json
import re
import time
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding="utf-8")
import requests

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, "raw")

H = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                   "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"}

# 只保护“专有名词 / 行业缩写 / 指标名”，通用学术词交给翻译（对齐 aws-saa 的做法）。
# 通用词（machine learning、supervised learning、classification…）翻成中文更自然。
TERMS = [
    # —— AWS 服务 / 产品（专有名词，必须原样保留）——
    "Amazon Bedrock", "Bedrock", "Amazon SageMaker", "SageMaker AI", "SageMaker JumpStart",
    "Amazon Q Business", "Amazon Q Developer", "Amazon Q",
    "Amazon Comprehend", "Amazon Lex", "Amazon Polly", "Amazon Transcribe", "Amazon Translate",
    "Amazon Rekognition", "Amazon Textract", "Amazon Kendra", "Amazon Personalize",
    "Amazon Forecast", "Amazon Fraud Detector", "Amazon Augmented AI",
    "Amazon OpenSearch", "Amazon CloudWatch", "Amazon Macie", "Amazon Inspector",
    "Amazon GuardDuty", "Amazon S3", "Amazon EC2", "Amazon Aurora", "Amazon Neptune",
    "AWS Lambda", "AWS IAM", "AWS KMS", "AWS Glue", "AWS CloudTrail", "AWS Config",
    "AWS Shield", "AWS WAF", "AWS Step Functions", "AWS DeepRacer", "AWS DeepLens",
    "AWS HealthLake", "AWS Lake Formation", "AWS Data Exchange", "AWS Marketplace",
    "AWS Cloud Adoption Framework", "AWS CAF", "AWS Pricing Calculator",
    "AWS Cost Explorer", "AWS Well-Architected Framework", "Responsible AI Lens",
    "AWS Trusted Advisor", "AWS Artifact", "AWS Service Catalog", "AWS Control Tower",
    "AWS Secrets Manager", "AWS Systems Manager", "AWS Organizations", "AWS Budgets",
    "AWS CloudFormation", "Amazon EventBridge", "Amazon API Gateway", "Amazon CloudFront",
    "Amazon QuickSight", "AWS Supply Chain", "AWS Chatbot", "AWS X-Ray",
    # —— Bedrock 内的功能名（保留，因为是界面里的专名）——
    "Bedrock Guardrails", "Amazon Bedrock Guardrails",
    "Bedrock Agents", "Agents for Amazon Bedrock", "Knowledge Bases", "Knowledge Base",
    "Prompt Management", "Model Evaluation", "Provisioned Throughput",
    # —— 模型 / 厂商名 ——
    "Amazon Titan", "Titan", "Nova", "Claude", "Stable Diffusion", "Jurassic",
    "SageMaker Ground Truth", "SageMaker Clarify", "SageMaker Model Monitor",
    "SageMaker Feature Store", "SageMaker Pipelines", "SageMaker Autopilot",
    "SageMaker Data Wrangler", "SageMaker Canvas", "Ground Truth",
    # —— 行业缩写 / 标准 / 指标 ——
    "LLM", "LLMs", "RAG", "RLHF", "GenAI", "MLOps", "FMs",
    "PHI", "PII", "GDPR", "HIPAA", "NIST", "EU AI Act", "ISO/IEC 42001",
    "F1 score", "AUC-ROC", "ROUGE", "BLEU", "BERTScore", "WER",
    "SHAP", "LIME", "PDP", "PDC", "KNN", "JSON", "API", "SDK", "CLI", "ARN",
]

_ZW = re.compile(r"[\u200b-\u200f\u2060\ufeff]")
# 长词优先，避免 "Amazon Bedrock Guardrails" 被 "Amazon Bedrock" 先吃掉
_ORDER = sorted(range(len(TERMS)), key=lambda i: -len(TERMS[i]))
# 词边界：避免 WER 命中 answer、RAG 命中 storage、Nova 命中 innovation
_LB, _RB = r"(?<![A-Za-z0-9])", r"(?![A-Za-z0-9])"


def protect(t):
    for i in _ORDER:
        t = re.sub(_LB + re.escape(TERMS[i]) + _RB, "ZQPH%dZQPH" % i, t, flags=re.I)
    return t


def restore(t):
    t = _ZW.sub("", t)

    def f(m):
        i = int(m.group(1))
        return TERMS[i] if 0 <= i < len(TERMS) else ""

    t = re.sub(r"Z\s*Q\s*P\s*H\s*(\d+)\s*Z\s*Q\s*P\s*H", f, t, flags=re.I)
    t = re.sub(r"Z\s*Q\s*P\s*H\s*\d*\s*Z?\s*Q?\s*P?\s*H?", "", t, flags=re.I)
    return _ZW.sub("", t)


def split_seg(text, limit=1000):
    parts, cur = [], ""
    for sent in re.split(r"(?<=[.?!;])\s+", text):
        if len(cur) + len(sent) + 1 > limit and cur:
            parts.append(cur)
            cur = sent
        else:
            cur = (cur + " " + sent).strip()
    if cur:
        parts.append(cur)
    return parts


def gt(text, retry=6):
    text = (text or "").strip()
    if not text:
        return ""
    out = []
    for seg in split_seg(protect(text)):
        url = ("https://clients5.google.com/translate_a/t?client=dict-chrome-ex"
               "&sl=en&tl=zh-CN&q=" + urllib.parse.quote(seg))
        got = None
        for a in range(retry):
            try:
                r = requests.get(url, headers=H, timeout=30)
                if r.status_code == 200:
                    d = r.json()
                    if isinstance(d, list):
                        got = "".join(x if isinstance(x, str) else (x[0] if x else "") for x in d)
                    else:
                        got = str(d)
                    if got:
                        break
            except Exception:
                pass
            time.sleep(0.6 * (a + 1))
        out.append(got if got is not None else "")
        time.sleep(0.1)
    s = restore("".join(out))
    s = re.sub(r"\s+([，。！？；：、）】])", r"\1", s)
    s = re.sub(r"([（【])\s+", r"\1", s)
    # 中英混排加空格
    s = re.sub(r"([\u4e00-\u9fff])([A-Za-z0-9])", r"\1 \2", s)
    s = re.sub(r"([A-Za-z0-9])([\u4e00-\u9fff])", r"\1 \2", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


def one(q):
    return {
        "stem": gt(q["stem"]),
        "options": {o["letter"]: gt(o["text"]) for o in q["options"]},
        "explanation": gt(q["explanation"]),
    }


def main():
    src = os.path.join(RAW, "hydranode_aif_parsed.json")
    qs = sorted(json.load(open(src, encoding="utf-8")), key=lambda q: q["num"])
    print("待翻译 %d 题" % len(qs))
    result, t0 = {}, time.time()
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(one, q): q["num"] for q in qs}
        done = 0
        for f in as_completed(futs):
            n = futs[f]
            try:
                result[str(n)] = f.result()
            except Exception as e:
                result[str(n)] = {"stem": "", "options": {}, "explanation": ""}
                print("  ! #%d 失败 %s" % (n, e))
            done += 1
            if done % 25 == 0:
                print("  ...%d/%d  (%.0fs)" % (done, len(qs), time.time() - t0), flush=True)
    out = os.path.join(RAW, "hydranode_aif_zh.json")
    json.dump(result, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    cov = sum(1 for v in result.values() if v["stem"])
    print("完成 %d 题（有 stem 的中译 %d）-> %s  耗时 %.0fs"
          % (len(result), cov, out, time.time() - t0))


if __name__ == "__main__":
    main()
