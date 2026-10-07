# -*- coding: utf-8 -*-
"""批量机器翻译：把剩余题目翻译成简体中文，写入 trans/auto_partNN.json。
使用 Google 免费端点 clients5.google.com（dict-chrome-ex）。"""
import sys, os, json, re, time, urllib.parse
sys.stdout.reconfigure(encoding='utf-8')
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/aws-saa"
RAW  = os.path.join(ROOT, "raw")
TR   = os.path.join(ROOT, "trans")
os.makedirs(TR, exist_ok=True)

H = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"}

# 术语保护：翻译前替换为占位符，翻译后还原（避免被译成中文）
TERMS = [
    "Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon CloudFront",
    "Amazon Route 53", "Amazon SQS", "Amazon SNS", "Amazon ECS", "Amazon EKS", "Amazon EMR",
    "Amazon Redshift", "Amazon Athena", "Amazon ElastiCache", "Amazon Aurora", "Amazon Kinesis",
    "Amazon Cognito", "Amazon Inspector", "Amazon GuardDuty", "Amazon Macie", "Amazon FSx",
    "Amazon EFS", "Amazon EBS", "Amazon WorkSpaces", "Amazon Lightsail", "Amazon MQ",
    "Amazon QuickSight", "Amazon OpenSearch", "Amazon API Gateway", "Amazon EventBridge",
    "Amazon CloudWatch", "Amazon Glacier", "S3 Glacier", "AWS Lambda", "AWS IAM", "AWS KMS",
    "AWS Organizations", "AWS CloudTrail", "AWS Config", "AWS Shield", "AWS WAF",
    "AWS Global Accelerator", "AWS Direct Connect", "AWS Transit Gateway", "AWS Trusted Advisor",
    "AWS Certificate Manager", "AWS Secrets Manager", "AWS Systems Manager", "AWS Snowball",
    "AWS Storage Gateway", "AWS Database Migration Service", "AWS Migration Hub",
    "AWS Resource Access Manager", "AWS Single Sign-On", "AWS IAM Identity Center",
    "AWS Directory Service", "AWS Elastic Beanstalk", "AWS Batch", "AWS Glue", "AWS Fargate",
    "AWS CodeDeploy", "AWS CodePipeline", "AWS CloudFormation", "AWS SAM", "AWS Step Functions",
    "AWS PrivateLink", "AWS Support", "AWS Artifact", "AWS Service Catalog", "AWS Control Tower",
    "AWS Marketplace", "AWS Snowmobile", "AWS Outposts", "Amazon WorkSpaces", "Amazon Connect",
    "Amazon AppStream", "Amazon Chime", "Amazon SES", "Amazon Forecast", "Amazon Textract",
    "Elastic Load Balancer", "Application Load Balancer", "Network Load Balancer",
    "Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon VPC", "Amazon Route 53", "Amazon EFS",
]
def protect(t):
    for i, term in enumerate(TERMS):
        t = re.sub(re.escape(term), f"ZQPH{i}ZQPH", t, flags=re.I)
    return t

# Google 会在占位符里插零宽字符（U+200B 等），还原前必须剥掉，否则正则失配
_ZW = re.compile(r"[\u200b-\u200f\u2060\ufeff]")
def restore(t):
    t = _ZW.sub("", t)
    def f(m):
        i = int(m.group(1))
        return TERMS[i] if 0 <= i < len(TERMS) else ""
    t = re.sub(r"Z\s*Q\s*P\s*H\s*(\d+)\s*Z\s*Q\s*P\s*H", f, t, flags=re.I)
    # 安全网：仍残留的占位符标记一律清掉，不留可见垃圾
    t = re.sub(r"Z\s*Q\s*P\s*H\s*\d*\s*Z?\s*Q?\s*P?\s*H?", "", t, flags=re.I)
    t = _ZW.sub("", t)
    return t

def split_seg(text, limit=1100):
    parts, cur = [], ""
    for sent in re.split(r'(?<=[.?!;])\s+', text):
        if len(cur) + len(sent) + 1 > limit and cur:
            parts.append(cur); cur = sent
        else:
            cur = (cur + " " + sent).strip()
    if cur: parts.append(cur)
    return parts

def gt(text, retry=6):
    text = (text or "").strip()
    if not text: return ""
    out = []
    for seg in split_seg(protect(text)):
        url = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=zh-CN&q=" + urllib.parse.quote(seg)
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
                    if got: break
            except Exception:
                pass
            time.sleep(0.6 * (a + 1))
        out.append(got if got is not None else "")
        time.sleep(0.12)
    s = "".join(out)
    s = restore(s)
    s = re.sub(r'\s+([，。！？；：、）】])', r'\1', s)
    s = re.sub(r'([（【])\s+', r'\1', s)
    # 术语规范化：存储类名等保持英文
    s = re.sub(r'\s*冰川', ' Glacier', s)
    s = s.replace('深层档案', '深度归档').replace('深度档案', '深度归档')
    # 中英混排加空格（提升可读性）
    s = re.sub(r'([\u4e00-\u9fff])([A-Za-z0-9])', r'\1 \2', s)
    s = re.sub(r'([A-Za-z0-9])([\u4e00-\u9fff])', r'\1 \2', s)
    return s.strip()

def translate_question(q):
    return {
        "stem": gt(q["stem"]),
        "options": {o["letter"]: gt(o["text"]) for o in q["options"]},
        "explanation": gt(q["explanation"]),
    }

def main():
    src = sys.argv[1] if len(sys.argv) > 3 else "hydranode"
    lo, hi = int(sys.argv[-2]), int(sys.argv[-1])   # 题目序号区间 [lo, hi]
    rawfile = os.path.join(RAW, f"{src}_parsed.json")
    prefix = "auto" if src == "hydranode" else "comp"
    qs = sorted(json.load(open(rawfile, encoding="utf-8")), key=lambda q: q["num"])
    todo = [q for q in qs if lo <= q["num"] <= hi]
    print(f"[{src}] 待翻译 {len(todo)} 题 (#{lo}-#{hi})")
    result = {}
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(translate_question, q): q["num"] for q in todo}
        done = 0
        for f in as_completed(futs):
            n = futs[f]
            try:
                result[str(n)] = f.result()
            except Exception as e:
                result[str(n)] = {"stem": "", "options": {}, "explanation": ""}
                print(f"  ! #{n} 失败 {e}")
            done += 1
            if done % 25 == 0:
                print(f"  ...{done}/{len(todo)}  ({time.time()-t0:.0f}s)")
    out = os.path.join(TR, f"{prefix}_part{lo:03d}_{hi:03d}.json")
    json.dump(result, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"完成 -> {out}  耗时 {time.time()-t0:.0f}s")

if __name__ == "__main__":
    main()
