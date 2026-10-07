# -*- coding: utf-8 -*-
"""补翻少数残缺题（旧版占位符残留 + 漏翻），合并回原机翻文件。"""
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding='utf-8')
import translate as T

NUMS = [int(x) for x in sys.argv[1:]] or [84, 86, 189, 278, 293, 308, 352, 415, 474, 475, 476]
SRC = "hydranode"
TARGET = os.path.join(T.TR, "auto_part051_500.json")

qs = {q["num"]: q for q in json.load(open(os.path.join(T.RAW, f"{SRC}_parsed.json"), encoding="utf-8"))}
data = json.load(open(TARGET, encoding="utf-8"))
for n in NUMS:
    data[str(n)] = T.translate_question(qs[n])
    print(f"  #{n} ok")
json.dump(data, open(TARGET, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"合并完成 -> {TARGET}（{len(data)} 题）")
