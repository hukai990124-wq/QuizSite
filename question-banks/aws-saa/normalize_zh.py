# -*- coding: utf-8 -*-
"""对已有中文翻译做规范化：术语还原 + 中英混排空格。可反复执行。"""
import sys, os, json, re, glob
sys.stdout.reconfigure(encoding='utf-8')
TR = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "trans"))

def norm(s):
    if not isinstance(s, str) or not s:
        return s
    s = re.sub(r'\s*冰川', ' Glacier', s)
    s = s.replace('深层档案', '深度归档').replace('深度档案', '深度归档')
    s = re.sub(r'([\u4e00-\u9fff])([A-Za-z0-9])', r'\1 \2', s)
    s = re.sub(r'([A-Za-z0-9])([\u4e00-\u9fff])', r'\1 \2', s)
    s = re.sub(r' {2,}', ' ', s)
    return s

def walk(o):
    if isinstance(o, dict):  return {k: walk(v) for k, v in o.items()}
    if isinstance(o, list):  return [walk(x) for x in o]
    return norm(o)

total = 0
for f in sorted(glob.glob(os.path.join(TR, "*.json"))):
    if os.path.basename(f).startswith("backup_"):
        continue
    d = json.load(open(f, encoding="utf-8"))
    nd = walk(d)
    if json.dumps(d, ensure_ascii=False) != json.dumps(nd, ensure_ascii=False):
        json.dump(nd, open(f, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print("  规范化:", os.path.basename(f))
        total += 1
print(f"完成，改动 {total} 个文件")
