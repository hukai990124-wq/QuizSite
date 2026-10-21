# -*- coding: utf-8 -*-
"""翻译质检 + 补翻。
用法: python fix_tr.py <source> [--dry]
  source = hydranode | ditectrev
检测四类缺陷并重翻命中题：
  1) 整题缺失 / 题干为空
  2) 字段为空（英文侧有内容）
  3) 残留占位符或零宽字符
  4) 英文出现的服务名在中文里丢失（还原失败）
"""
import sys, os, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding='utf-8')
import translate as T

SRC = sys.argv[1] if len(sys.argv) > 1 else "hydranode"
DRY = "--dry" in sys.argv

JOBS = {
    # source: (raw解析文件, 主翻译文件, 题号区间)
    "hydranode": ("hydranode_parsed.json", "auto_part051_500.json", (51, 500)),
    "ditectrev": ("ditectrev_parsed.json", "comp_part001_500.json", (1, 500)),
}
rawfile, trfile, (LO, HI) = JOBS[SRC]
RAW = os.path.join(T.RAW, rawfile)
TRF = os.path.join(T.TR, trfile)

TERMS = sorted(set(T.TERMS), key=len, reverse=True)
_ZW = re.compile(r"[\u200b-\u200f\u2060\ufeff]")

def terms_in(t):
    t = t or ""; out = []
    for term in TERMS:
        if re.search(re.escape(term), t, re.I):
            out.append(term); t = re.sub(re.escape(term), " ", t, flags=re.I)
    return out

def defects(en_q, zh):
    """返回该题缺陷标签列表。"""
    if not zh or not (zh.get("stem") or "").strip():
        return ["整题缺失"]
    bad = []
    pairs = [("题干", en_q["stem"], zh.get("stem", "")),
             ("解析", en_q.get("explanation", ""), zh.get("explanation", ""))]
    for o in en_q["options"]:
        pairs.append((f"选项{o['letter']}", o["text"], (zh.get("options") or {}).get(o["letter"], "")))
    for tag, e, z in pairs:
        z = z or ""
        if e and len(e.strip()) > 12 and not z.strip():
            bad.append(f"{tag}空")
            continue
        if "ZQPH" in z.upper() or _ZW.search(z):
            bad.append(f"{tag}残留")
        for term in terms_in(e):
            if not re.search(re.escape(term), z, re.I):
                bad.append(f"{tag}丢:{term}")
    return bad

en = {q["num"]: q for q in json.load(open(RAW, encoding="utf-8"))}
tr = json.load(open(TRF, encoding="utf-8"))

flagged = {}
for n in range(LO, HI + 1):
    bad = defects(en[n], tr.get(str(n)))
    if bad:
        flagged[n] = bad

print(f"[{SRC}] 区间 {LO}-{HI}，共 {HI-LO+1} 题；命中缺陷 {len(flagged)} 题")
for n, b in list(flagged.items())[:15]:
    print(f"  #{n}: {b[:3]}")
if len(flagged) > 15:
    print(f"  ... 其余 {len(flagged)-15} 题略")

if DRY or not flagged:
    sys.exit(0)

print("\n开始补翻…")
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
t0 = time.time()
with ThreadPoolExecutor(max_workers=6) as ex:
    futs = {ex.submit(T.translate_question, en[n]): n for n in flagged}
    for i, f in enumerate(as_completed(futs), 1):
        n = futs[f]
        try:
            tr[str(n)] = f.result()
        except Exception as e:
            print(f"  ! #{n} 失败 {e}")
        if i % 25 == 0:
            print(f"  ...{i}/{len(flagged)} ({time.time()-t0:.0f}s)")

# 二次复检
still = {n: defects(en[n], tr.get(str(n))) for n in flagged}
still = {n: b for n, b in still.items() if b}
json.dump(tr, open(TRF, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"已写回 {TRF}；补翻后仍有缺陷 {len(still)} 题")
for n, b in list(still.items())[:15]:
    print(f"  #{n}: {b[:3]}")
