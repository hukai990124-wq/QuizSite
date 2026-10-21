# -*- coding: utf-8 -*-
"""把 toeicmocktests 的听力 JS 数据规范化成 tests.json + audio_jobs.json。

输出：
  parsed/tests.json     每套的结构化题目（含音频/图片相对路径）
  parsed/audio_jobs.json 音频合成任务（每个 item 一个合并后的 mp3）
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, 'raw')
PARSED = os.path.join(ROOT, 'parsed')
os.makedirs(PARSED, exist_ok=True)

dump = json.load(open(os.path.join(RAW, '_dump.json'), encoding='utf-8'))

# TOEIC 官方题号起点
OFFSET = {'p1': 1, 'p2': 7, 'p3': 32, 'p4': 71}

# 音频插入的静音时长（秒），由下载脚本使用
GAP = 0.45


def norm_text(s):
    return re.sub(r'\s+', ' ', (s or '')).strip()


def runs_from_segments(segs):
    """把 [{voice,text}] 合并同 voice 的连续段，减少 TTS 请求数。"""
    runs = []
    for s in segs:
        t = norm_text(s.get('text'))
        if not t:
            continue
        v = s.get('voice') or 'aura-orion-en'
        if runs and runs[-1]['voice'] == v:
            runs[-1]['text'] += ' ' + t
        else:
            runs.append({'voice': v, 'text': t})
    return runs


tests = []
jobs = []

for m in [1, 2, 3, 4]:
    l12 = dump['m%d.l12' % m]
    l3 = dump['m%d.l3' % m]
    l4 = dump['m%d.l4' % m]

    p1_src = l12['lr.p1' if m == 1 else 'lr.p1.m%d' % m]
    p2_src = l12['lr.p2' if m == 1 else 'lr.p2.m%d' % m]
    p3_src = l3['lr.p3' if m == 1 else 'lr.p3.m%d' % m]
    p4_src = l4['lr.p4' if m == 1 else 'lr.p4.m%d' % m]

    test = {'mock': m, 'parts': {'p1': [], 'p2': [], 'p3': [], 'p4': []}}

    # ---------- Part 1 ----------
    for i, it in enumerate(p1_src, 1):
        akey = 'p1-%d' % i
        img = 'img/lrp1-m%d-%d.jpg' % (m, i)
        segs = [{'voice': it['voice'], 'text': s} for s in it['statements']]
        test['parts']['p1'].append({
            'n': i,
            'no': OFFSET['p1'] + i - 1,
            'img': img,
            'scene': it.get('scene', ''),
            'statements': it['statements'],
            'answer': int(it['answer']),
            'exp': it.get('exp', ''),
            'audio': 'audio/m%d/%s.mp3' % (m, akey),
        })
        jobs.append({'out': 'm%d/%s.mp3' % (m, akey), 'runs': runs_from_segments(segs)})

    # ---------- Part 2 ----------
    for i, it in enumerate(p2_src, 1):
        akey = 'p2-%d' % i
        segs = [{'voice': it['promptVoice'], 'text': it['prompt']}]
        for o in it['options']:
            segs.append({'voice': it['optVoice'], 'text': o})
        test['parts']['p2'].append({
            'n': i,
            'no': OFFSET['p2'] + i - 1,
            'prompt': it['prompt'],
            'options': it['options'],
            'answer': int(it['answer']),
            'exp': it.get('exp', ''),
            'audio': 'audio/m%d/%s.mp3' % (m, akey),
        })
        jobs.append({'out': 'm%d/%s.mp3' % (m, akey), 'runs': runs_from_segments(segs)})

    # ---------- Part 3 ----------
    for i, it in enumerate(p3_src, 1):
        akey = 'p3-%d' % i
        script = [{'speaker': s.get('speaker', ''), 'voice': s.get('voice', ''), 'text': norm_text(s.get('text'))}
                  for s in it['script']]
        qs = []
        for q in it['questions']:
            qs.append({
                'text': q['text'],
                'options': q['options'],
                'answer': int(q['answer']),
                'exp': q.get('exp', ''),
                'graphic': q.get('graphic') or None,
            })
        test['parts']['p3'].append({
            'n': i,
            'no': OFFSET['p3'] + (i - 1) * 3,
            'graphic': it.get('graphic') or None,
            'script': script,
            'questions': qs,
            'audio': 'audio/m%d/%s.mp3' % (m, akey),
        })
        segs = [{'voice': s['voice'], 'text': s['text']} for s in script]
        jobs.append({'out': 'm%d/%s.mp3' % (m, akey), 'runs': runs_from_segments(segs)})

    # ---------- Part 4 ----------
    for i, it in enumerate(p4_src, 1):
        akey = 'p4-%d' % i
        qs = []
        for q in it['questions']:
            qs.append({
                'text': q['text'],
                'options': q['options'],
                'answer': int(q['answer']),
                'exp': q.get('exp', ''),
                'graphic': q.get('graphic') or None,
            })
        test['parts']['p4'].append({
            'n': i,
            'no': OFFSET['p4'] + (i - 1) * 3,
            'talkType': it.get('talkType', ''),
            'graphic': it.get('graphic') or None,
            'script': [norm_text(it['script'])],
            'questions': qs,
            'audio': 'audio/m%d/%s.mp3' % (m, akey),
        })
        jobs.append({'out': 'm%d/%s.mp3' % (m, akey),
                     'runs': runs_from_segments([{'voice': it.get('voice'), 'text': it['script']}])})

    tests.append(test)

json.dump(tests, open(os.path.join(PARSED, 'tests.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
json.dump({'gap': GAP, 'jobs': jobs}, open(os.path.join(PARSED, 'audio_jobs.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)

nseg = sum(len(j['runs']) for j in jobs)
print('tests=%d  items=%d  audio runs(请求数)=%d' % (len(tests), len(jobs), nseg))
for t in tests:
    print('mock %d -> p1=%d p2=%d p3=%d(seg %d) p4=%d(seg %d)' % (
        t['mock'], len(t['parts']['p1']), len(t['parts']['p2']),
        len(t['parts']['p3']), sum(len(x['script']) for x in t['parts']['p3']),
        len(t['parts']['p4']), len(t['parts']['p4'])))
