# -*- coding: utf-8 -*-
"""把 toeicmocktests 的 mock 05–08 接入站内第 07–10 套。

与第 01–04 套**同源**（toeicmocktests.com）、**同工艺**（/api/tts 合成 + ffmpeg 合并），
独立成脚本，不改动 Codex 的 build.py / dump.js / gen_html.py 原逻辑，
也完全不碰 Ocean（05/06）链路。

流程：
  node dump_extra.js 5 6 7 8                       # 汇总 raw content JS
  python add_tmt_sets.py build                     # 生成题目 + 音频任务
  python dl_audio.py --jobs parsed/tmt-extra-audio-jobs.json
  python add_tmt_sets.py render                    # 渲染 HTML/md 并同步到 site/
"""
import json
import os
import re
import shutil
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent
ROOT = BASE.parent
sys.path.insert(0, str(BASE))
sys.path.insert(0, str(ROOT / 'quiz_kit'))

import gen_html  # noqa: E402
import i18n_inject  # noqa: E402

# tmt 源 mock 号 -> 站内套号（站内 01–06 已被占用：01–04 为 tmt，05–06 为 Ocean）
SRC_TO_OUT = {5: 7, 6: 8, 7: 9, 8: 10}

OFFSET = {'p1': 1, 'p2': 7, 'p3': 32, 'p4': 71}
GAP = 0.45

SOURCE_LINE = ('来源：toeicmocktests.com · 公开免费练习材料（官方 2026 格式模拟题）· 非 ETS 官方试题。'
               '音频由该站公开的 TTS 接口合成，非真人录音。')


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


def build():
    dump = json.loads((BASE / 'raw/_dump_extra.json').read_text(encoding='utf-8'))
    tests, jobs = [], []
    for src, out in sorted(SRC_TO_OUT.items()):
        l12 = dump['m%d.l12' % src]
        l3 = dump['m%d.l3' % src]
        l4 = dump['m%d.l4' % src]
        p1_src = l12['lr.p1.m%d' % src]
        p2_src = l12['lr.p2.m%d' % src]
        p3_src = l3['lr.p3.m%d' % src]
        p4_src = l4['lr.p4.m%d' % src]

        test = {'mock': out, 'parts': {'p1': [], 'p2': [], 'p3': [], 'p4': []}}

        # ---------- Part 1 ----------
        for i, it in enumerate(p1_src, 1):
            akey = 'p1-%d' % i
            segs = [{'voice': it['voice'], 'text': s} for s in it['statements']]
            test['parts']['p1'].append({
                'n': i,
                'no': OFFSET['p1'] + i - 1,
                'img': 'img/lrp1-m%d-%d.jpg' % (out, i),
                'scene': it.get('scene', ''),
                'statements': it['statements'],
                'answer': int(it['answer']),
                'exp': it.get('exp', ''),
                'audio': 'audio/m%d/%s.mp3' % (out, akey),
            })
            jobs.append({'out': 'm%d/%s.mp3' % (out, akey), 'runs': runs_from_segments(segs)})

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
                'audio': 'audio/m%d/%s.mp3' % (out, akey),
            })
            jobs.append({'out': 'm%d/%s.mp3' % (out, akey), 'runs': runs_from_segments(segs)})

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
                'audio': 'audio/m%d/%s.mp3' % (out, akey),
            })
            jobs.append({'out': 'm%d/%s.mp3' % (out, akey),
                         'runs': runs_from_segments([{'voice': s['voice'], 'text': s['text']} for s in script])})

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
                'audio': 'audio/m%d/%s.mp3' % (out, akey),
            })
            jobs.append({'out': 'm%d/%s.mp3' % (out, akey),
                         'runs': runs_from_segments([{'voice': it.get('voice'), 'text': it['script']}])})

        tests.append(test)

    (BASE / 'parsed/tmt-extra-tests.json').write_text(
        json.dumps(tests, ensure_ascii=False, indent=1), encoding='utf-8')
    (BASE / 'parsed/tmt-extra-audio-jobs.json').write_text(
        json.dumps({'gap': GAP, 'jobs': jobs}, ensure_ascii=False, indent=1), encoding='utf-8')

    print('tests=%d  items=%d  audio runs=%d' % (len(tests), len(jobs),
                                                 sum(len(j['runs']) for j in jobs)))
    for t in tests:
        P = t['parts']
        print('套 %02d (源 mock %s) -> p1=%d p2=%d p3=%d(段 %d) p4=%d(段 %d)' % (
            t['mock'],
            next(k for k, v in SRC_TO_OUT.items() if v == t['mock']),
            len(P['p1']), len(P['p2']), len(P['p3']), sum(len(x['script']) for x in P['p3']),
            len(P['p4']), len(P['p4'])))


PC_JS_BLOCK = ('<!--pc:js-->\n'
               '<script src="../assets/presence.js"></script>\n'
               '<!--/pc:js-->\n')


def inject_presence(path):
    """与第 01–04 套保持一致：在 i18n 注入块之前插入在线人数脚本。幂等。"""
    s = path.read_text(encoding='utf-8')
    if 'presence.js' in s:
        return
    if '<!--i18n:sw-->' in s:
        s = s.replace('<!--i18n:sw-->', PC_JS_BLOCK + '<!--i18n:sw-->', 1)
    elif '</body>' in s:
        s = s.replace('</body>', PC_JS_BLOCK + '</body>', 1)
    else:
        return
    path.write_text(s, encoding='utf-8')


def render():
    tests = json.loads((BASE / 'parsed/tmt-extra-tests.json').read_text(encoding='utf-8'))
    site = ROOT / 'site/toeic-listening'
    site.mkdir(parents=True, exist_ok=True)
    for t in tests:
        out = t['mock']
        markup = gen_html.render(t).replace('</h1>', '</h1><p class="meta">%s</p>' % SOURCE_LINE, 1)
        html_name = 'TOEIC_Listening_Test_%02d.html' % out
        md_name = 'TOEIC_Listening_Test_%02d.md' % out

        (BASE / html_name).write_text(markup, encoding='utf-8')
        (BASE / md_name).write_text(gen_html.render_md(t), encoding='utf-8')

        (site / html_name).write_text(markup, encoding='utf-8')
        (site / md_name).write_text(gen_html.render_md(t), encoding='utf-8')
        i18n_inject.inject(str(site / html_name))
        inject_presence(site / html_name)

        copied = 0
        for part in t['parts'].values():
            for item in part:
                for field in ('audio', 'img'):
                    if field not in item:
                        continue
                    src_path = BASE / item[field]
                    if not src_path.exists():
                        print('  !! 缺资源 %s' % src_path)
                        continue
                    dst = site / item[field]
                    dst.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(src_path, dst)
                    copied += 1
        print('套 %02d -> %s + %s（同步 %d 个资源）' % (out, html_name, md_name, copied))


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else ''
    if cmd == 'build':
        build()
    elif cmd == 'render':
        render()
    else:
        print(__doc__)
        sys.exit(2)


if __name__ == '__main__':
    main()
