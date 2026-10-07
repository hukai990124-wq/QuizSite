# -*- coding: utf-8 -*-
"""Parse 7ESL TOEIC Reading test pages into structured JSON (v3: section-based grouping)."""
import re, json, sys, os
from bs4 import BeautifulSoup
sys.stdout.reconfigure(encoding='utf-8')

RAW = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/toeic-reading/raw"
OUT = r"C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/toeic-reading/parsed"
os.makedirs(OUT, exist_ok=True)

DIRS = {
 5: "A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.",
 6: "Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each question are given below the text. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your answer sheet.",
 7: "In this part you will read a selection of texts, such as magazine and newspaper articles, e-mails, and instant messages. Each text or set of texts is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.",
}

def clean(t):
    t = t.replace('\xa0', ' ')
    t = re.sub(r'[ \t]+', ' ', t)
    t = re.sub(r' *\n *', '\n', t)
    t = re.sub(r'\n{3,}', '\n\n', t)
    return t.strip()

def stem_html_to_text(el):
    frag = BeautifulSoup(str(el), 'lxml')
    for g in frag.select('.tc-gap'):
        n = g.get_text(strip=True)
        g.replace_with(f" _____[{n}]_____ " if n else " _____ ")
    return clean(frag.get_text(' '))

def doc_to_obj(d):
    kind = ''
    for c in (d.get('class') or []):
        if c.startswith('tc-doc-') and c not in ('tc-doc-body','tc-doc-head','tc-doc-title','tc-doc-foot','tc-doc-kind','tc-doc-tablewrap'):
            kind = c.replace('tc-doc-','')
    title_el = d.select_one('.tc-doc-title')
    title = clean(title_el.get_text(' ')) if title_el else ''
    base = d.select_one('.tc-doc-body') or d
    lines = []
    for m in base.select('.tc-msg'):
        who = m.select_one('.tc-msg-who'); txt = m.select_one('.tc-msg-txt')
        lines.append(f"{clean(who.get_text(' ')) if who else ''}: {clean(txt.get_text(' ')) if txt else ''}")
    if lines:
        body = '\n'.join(lines)
    else:
        body = clean(base.get_text('\n', strip=True))
        if title and body.startswith(title):
            body = body[len(title):].strip()
    return {'kind': kind, 'title': title, 'text': body}

def build_q(el):
    opts = {}
    for b in el.select('div.tc-opts .ex-chip'):
        l = b.select_one('.tc-let'); o = b.select_one('.tc-opt')
        if l and o:
            opts[l.get_text(strip=True).strip('() ')] = clean(o.get_text(' '))
    at = (el.get('data-answer') or '').strip()
    ans = ''
    for k, v in opts.items():
        if v.strip().lower() == at.strip().lower():
            ans = k; break
    st = el.select_one('.tc-stem'); ex = el.select_one('.tc-expl')
    return {'num': 0, 'stem': stem_html_to_text(st) if st else '', 'options': opts,
            'answer': ans, 'answer_text': at, 'explanation': clean(ex.get_text(' ')) if ex else ''}

def parse(path, setname, source):
    soup = BeautifulSoup(open(path, encoding='utf-8', errors='ignore').read(), 'lxml')
    out_parts = []
    qnum = {5: 101, 6: 131, 7: 147}
    def sel(t):
        cl = t.get('class') or []
        return 'tc-doc' in cl or 'tc-q' in cl
    for p in (5, 6, 7):
        groups = []
        for sec in soup.select(f'.tc-part-{p}'):
            docs = []; qs = []
            for node in sec.find_all(sel):
                if 'tc-doc' in (node.get('class') or []):
                    docs.append(doc_to_obj(node))
                else:
                    q = build_q(node); q['num'] = qnum[p]; qnum[p] += 1; qs.append(q)
            groups.append({'docs': docs, 'questions': qs})
        out_parts.append({'part': p, 'directions': DIRS[p], 'groups': groups})
    return {'set': setname, 'source': source, 'parts': out_parts}

for n in (1, 2, 3):
    p = os.path.join(RAW, f"7esl_t{n}.html")
    if not os.path.exists(p):
        print("missing", p); continue
    d = parse(p, f"7ESL TOEIC Reading Practice Test {n}", f"https://7esl.com/exams/toeic/reading/?test={n}")
    json.dump(d, open(os.path.join(OUT, f"7esl_test{n}.json"), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    for pt in d['parts']:
        nq = sum(len(g['questions']) for g in pt['groups'])
        nd = sum(len(g['docs']) for g in pt['groups'])
        na = sum(1 for g in pt['groups'] for q in g['questions'] if q['answer'])
        print(f"test{n} Part{pt['part']}: groups={len(pt['groups'])} docs={nd} Q={nq} answered={na}")
