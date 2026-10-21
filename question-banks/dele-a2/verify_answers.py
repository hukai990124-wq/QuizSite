# -*- coding: utf-8 -*-
"""把题库里每道题的答案与官方 Clave de respuestas 逐题比对。

这是**独立于 build.py 的第二道防线**：题目文本、选项顺序都可能手抄出错，
但只要答案对不上官方答案表，这里就会红。

用法：python verify_answers.py
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import data          # noqa: E402
import data_audio    # noqa: E402

# 官方 CLAVES（照抄 Instituto Cervantes 官方答案页，不改动）
CLA = {
    # 2020 版样卷 Modelo 0
    "a2-modelo0-2020": {
        "read": {1: 'C', 2: 'B', 3: 'A', 4: 'C', 5: 'B',
                 6: 'B', 7: 'B', 8: 'C', 9: 'A', 10: 'A', 11: 'B', 12: 'A', 13: 'B',
                 14: 'B', 15: 'A', 16: 'B', 17: 'C', 18: 'C', 19: 'A',
                 20: 'B', 21: 'A', 22: 'B', 23: 'C', 24: 'A', 25: 'C'},
        "listen": {1: 'A', 2: 'C', 3: 'B', 4: 'B', 5: 'C', 6: 'C',
                   7: 'A', 8: 'C', 9: 'C', 10: 'A', 11: 'A', 12: 'B',
                   13: 'C', 14: 'B', 15: 'B', 16: 'A', 17: 'C', 18: 'A',
                   19: 'B', 20: 'H', 21: 'G', 22: 'C', 23: 'I', 24: 'E', 25: 'J'},
    },
    # 旧版样卷 Modelo 0 (Versión 2)
    "a2-modelo0-v2": {
        "read": {1: 'J', 2: 'C', 3: 'B', 4: 'K', 5: 'E', 6: 'G', 7: 'I',
                 8: 'B', 9: 'C', 10: 'A', 11: 'A', 12: 'B',
                 13: 'A', 14: 'A', 15: 'B', 16: 'C', 17: 'C', 18: 'B',
                 19: 'J', 20: 'G', 21: 'D', 22: 'H', 23: 'B', 24: 'E',
                 25: 'A', 26: 'B', 27: 'B', 28: 'C', 29: 'A', 30: 'C'},
        "listen": {1: 'C', 2: 'B', 3: 'B', 4: 'C', 5: 'A', 6: 'A', 7: 'B',
                   8: 'B', 9: 'A', 10: 'C', 11: 'C', 12: 'A', 13: 'B',
                   14: 'D', 15: 'G', 16: 'I', 17: 'J', 18: 'B', 19: 'A',
                   20: 'A', 21: 'B', 22: 'A', 23: 'B', 24: 'C', 25: 'C',
                   26: 'C', 27: 'H', 28: 'F', 29: 'A', 30: 'E'},
    },
}


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    bad, tot = 0, 0
    for s in data.SETS:
        slug = s["slug"]
        cla = CLA[slug]["read"]
        for t in s["tareas"]:
            for it in t["items"]:
                tot += 1
                if it["ans"] != cla.get(it["n"]):
                    bad += 1
                    print("阅读不符  %s 第%2d题  题库=%s 官方=%s"
                          % (slug, it["n"], it["ans"], cla.get(it["n"])))
        L = data_audio.LISTENING.get(slug)
        if L:
            cla2 = CLA[slug]["listen"]
            for t in L["tareas"]:
                for it in t["items"]:
                    tot += 1
                    if it["ans"] != cla2.get(it["n"]):
                        bad += 1
                        print("听力不符  %s 第%2d题  题库=%s 官方=%s"
                              % (slug, it["n"], it["ans"], cla2.get(it["n"])))
    print("比对 %d 题，不符 %d 题" % (tot, bad))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
