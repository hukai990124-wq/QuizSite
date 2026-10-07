# -*- coding: utf-8 -*-
"""Assemble 10 TOEIC Reading practice tests into Markdown + printable HTML."""
import json, os, sys, html
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/toeic-reading"
OUT = os.path.join(BASE, "output")
os.makedirs(OUT, exist_ok=True)
LETTERS = ['A', 'B', 'C', 'D']

DIRS = {
 5: "A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.",
 6: "Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each question are given below the text. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your answer sheet.",
 7: "In this part you will read a selection of texts, such as magazine and newspaper articles, e-mails, and instant messages. Each text or set of texts is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.",
}

def opt_dict(opts, answer):
    d = {LETTERS[i]: opts[i] for i in range(min(4, len(opts)))}
    letter = LETTERS[answer] if isinstance(answer, int) and 0 <= answer < 4 else ''
    return d, letter

# ---------- load toeicmocktests ----------
TMT = json.load(open(os.path.join(BASE, "parsed", "tmt_all.json"), encoding='utf-8'))

def tmt_key(base, n):
    return base if n == 1 else f"{base}.m{n}"

def build_tmt(n):
    p5 = TMT[tmt_key("lr.p5", n)]
    p6 = TMT[tmt_key("lr.p6", n)]
    p7 = TMT[tmt_key("lr.p7", n)]
    out = []
    # Part 5
    qs = []
    for i, it in enumerate(p5):
        opts, letter = opt_dict(it['options'], it['answer'])
        qs.append({'num': 101 + i, 'stem': it['text'], 'options': opts,
                   'answer': letter, 'explanation': it.get('exp', '')})
    out.append({'part': 5, 'directions': DIRS[5], 'groups': [{'docs': [], 'questions': qs}]})
    # Part 6
    groups = []; num = 131
    for t in p6:
        gq = []
        for q in t['questions']:
            opts, letter = opt_dict(q['options'], q['answer'])
            gq.append({'num': num, 'stem': f"Blank ({q.get('blank','?')})", 'options': opts,
                       'answer': letter, 'explanation': q.get('exp', '')})
            num += 1
        groups.append({'docs': [{'kind': 'passage', 'title': '', 'text': t['passage']}], 'questions': gq})
    out.append({'part': 6, 'directions': DIRS[6], 'groups': groups})
    # Part 7
    groups = []; num = 147
    for st in p7:
        gq = []
        for q in st['questions']:
            opts, letter = opt_dict(q['options'], q['answer'])
            gq.append({'num': num, 'stem': q['text'], 'options': opts,
                       'answer': letter, 'explanation': q.get('exp', '')})
            num += 1
        docs = [{'kind': p.get('label', ''), 'title': p.get('label', ''), 'text': p['text']} for p in st['passages']]
        groups.append({'docs': docs, 'questions': gq})
    out.append({'part': 7, 'directions': DIRS[7], 'groups': groups})
    return out

# ---------- load 7esl ----------
def build_7esl(n):
    d = json.load(open(os.path.join(BASE, "parsed", f"7esl_test{n}.json"), encoding='utf-8'))
    out = []
    for pt in d['parts']:
        groups = []
        for g in pt['groups']:
            qs = []
            for q in g['questions']:
                opts = {k: v for k, v in q['options'].items()}
                qs.append({'num': q['num'], 'stem': q['stem'], 'options': opts,
                           'answer': q['answer'], 'explanation': q['explanation']})
            docs = [{'kind': dd.get('kind', ''), 'title': dd.get('title', ''), 'text': dd.get('text', '')} for dd in g['docs']]
            groups.append({'docs': docs, 'questions': qs})
        out.append({'part': pt['part'], 'directions': pt['directions'], 'groups': groups})
    return out, d


def md_test(idx, source, parts):
    L = [f"# TOEIC® Reading Practice Test {idx:02d}\n",
         f"- **来源**：{source}",
         f"- **题量**：100 题（Part 5 共 30 · Part 6 共 16 · Part 7 共 54）｜建议用时 75 分钟",
         f"- **答案与解析**：见文末\n", "---\n"]
    for pt in parts:
        p = pt['part']
        name = {5: 'Incomplete Sentences', 6: 'Text Completion', 7: 'Reading Comprehension'}[p]
        qall = [q for g in pt['groups'] for q in g['questions']]
        rng = f"{qall[0]['num']}–{qall[-1]['num']}" if qall else ''
        L.append(f"## PART {p} — {name}（{rng}）\n")
        L.append(f"**Directions:** {pt['directions']}\n")
        for g in pt['groups']:
            if g['docs']:
                gq = g['questions']
                if gq:
                    r = f"{gq[0]['num']}–{gq[-1]['num']}" if len(gq) > 1 else str(gq[0]['num'])
                    kind = g['docs'][0]['kind'] or 'text'
                    L.append(f"**Questions {r} refer to the following {kind}.**\n")
                for d in g['docs']:
                    if d['title'] and d['title'].lower() not in (d['kind'] or '').lower():
                        L.append(f"**{d['title']}**\n")
                    body = d['text'].strip()
                    if body:
                        L.append("\n".join("> " + ln if ln.strip() else ">" for ln in body.split('\n')))
                        L.append("")
            for q in g['questions']:
                stem = q['stem'].strip() or '.'
                L.append(f"**{q['num']}.** {stem}\n")
                opts = q['options']
                L.append("　".join(f"({k}) {opts[k]}" for k in LETTERS if k in opts) + "\n")
        L.append("---\n")
    L.append("## 答案与解析\n")
    for pt in parts:
        L.append(f"### Part {pt['part']}\n")
        for g in pt['groups']:
            for q in g['questions']:
                L.append(f"**{q['num']}. {q['answer'] or '?'}** — {q['explanation'] or ''}\n")
    return "\n".join(L)

# ---------- build the 10 tests ----------
plan = []
for n in range(1, 8):
    plan.append((f"TOEIC Mock Tests — Reading Practice Test {n}（toeicmocktests.com，官方 2026 格式）", build_tmt(n)))
for n in range(1, 4):
    parts, d = build_7esl(n)
    plan.append((f"7ESL TOEIC Reading Practice Test {n}（7esl.com）", parts))

index_lines = ["# TOEIC® Reading 练习 10 套（含答案与解析）\n",
               "共 10 套完整 TOEIC Reading 练习题，每套 100 题（Part 5 · 30 / Part 6 · 16 / Part 7 · 54），全部附标准答案与逐题解析。\n",
               "| 套号 | 来源 | 文件 |", "|---|---|---|"]
for i, (src, parts) in enumerate(plan, 1):
    md = md_test(i, src, parts)
    fn = f"TOEIC_Reading_Test_{i:02d}.md"
    open(os.path.join(OUT, fn), 'w', encoding='utf-8').write(md)
    nq = sum(len(g['questions']) for pt in parts for g in pt['groups'])
    na = sum(1 for pt in parts for g in pt['groups'] for q in g['questions'] if q['answer'])
    index_lines.append(f"| {i:02d} | {src.split('（')[0]} | {fn} |")
    print(f"Test {i:02d}: Q={nq} answered={na} -> {fn}")
open(os.path.join(OUT, "INDEX.md"), 'w', encoding='utf-8').write("\n".join(index_lines) + "\n")
json.dump(plan, open(os.path.join(OUT, "_plan.json"), 'w', encoding='utf-8'), ensure_ascii=False)
print("done")
