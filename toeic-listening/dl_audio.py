# -*- coding: utf-8 -*-
"""按 audio_jobs.json 合成听力音频（并发下载 + 串行合并）。

每个 item（P1 一道图、P2 一题、P3 一段对话、P4 一篇独白）产出一个 mp3。
做法：先把所有 run 的文本并发调 /api/tts 下载到缓存（按 voice+text 去重），
再用 ffmpeg concat 滤镜按 run 之间插静音拼成一个文件。可重复运行，已完成的会跳过。

用法：
  python dl_audio.py                # 全部
  python dl_audio.py --mock 1       # 只做第 1 套
  python dl_audio.py --workers 6    # 并发数
"""
import argparse
import hashlib
import json
import os
import subprocess
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests

ROOT = os.path.dirname(os.path.abspath(__file__))
PARSED = os.path.join(ROOT, 'parsed')
SEG = os.path.join(ROOT, 'audio', '_seg')
OUTDIR = os.path.join(ROOT, 'audio')
API = 'https://toeicmocktests.com/api/tts'
try:
    import imageio_ffmpeg
    FF = imageio_ffmpeg.get_ffmpeg_exe()
except Exception:
    FF = 'ffmpeg'

RATE = 24000
HEADERS = {'User-Agent': 'Mozilla/5.0 (compatible; personal-study)'}
_tl = threading.local()
_lock = threading.Lock()
_done = [0]


def sess():
    s = getattr(_tl, 's', None)
    if s is None:
        s = requests.Session()
        s.headers.update(HEADERS)
        _tl.s = s
    return s


def seg_path(voice, text):
    h = hashlib.sha1((voice + '\x00' + text).encode('utf-8')).hexdigest()[:20]
    return os.path.join(SEG, h + '.mp3')


def valid(p):
    return os.path.exists(p) and os.path.getsize(p) > 800


def fetch(voice, text, tries=5):
    p = seg_path(voice, text)
    if valid(p):
        return p
    last = None
    for k in range(tries):
        try:
            r = sess().get(API, params={'t': text, 'v': voice}, timeout=60)
            if r.status_code == 200 and len(r.content) > 800 and r.content[:2] in (
                    b'\xff\xf3', b'\xff\xfb', b'\xff\xfa', b'\xff\xf2'):
                tmp = p + '.part'
                with open(tmp, 'wb') as f:
                    f.write(r.content)
                os.replace(tmp, p)
                return p
            last = 'http=%s size=%s' % (r.status_code, len(r.content))
        except Exception as e:
            last = repr(e)
        time.sleep(1.0 * (k + 1))
    raise RuntimeError('TTS 失败 %s | %s -> %s' % (voice, text[:50], last))


def merge(runs, out_path, gap):
    segs = [fetch(r['voice'], r['text']) for r in runs]
    if len(segs) == 1:
        subprocess.run([FF, '-y', '-hide_banner', '-loglevel', 'error', '-i', segs[0],
                        '-ar', str(RATE), '-ac', '1', '-b:a', '48k', out_path], check=True)
        return
    cmd = [FF, '-y', '-hide_banner', '-loglevel', 'error']
    for s in segs:
        cmd += ['-i', s]
    nsil = len(segs) - 1
    for _ in range(nsil):
        cmd += ['-f', 'lavfi', '-t', str(gap), '-i', 'anullsrc=r=%d:cl=mono' % RATE]
    order = []
    si = len(segs)
    for i in range(len(segs)):
        order.append('[%d:a]' % i)
        if i < nsil:
            order.append('[%d:a]' % si)
            si += 1
    filt = ''.join(order) + 'concat=n=%d:v=0:a=1[o]' % len(order)
    cmd += ['-filter_complex', filt, '-map', '[o]', '-ar', str(RATE), '-ac', '1', '-b:a', '48k', out_path]
    subprocess.run(cmd, check=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--mock', type=int, default=0)
    ap.add_argument('--workers', type=int, default=6)
    a = ap.parse_args()

    os.makedirs(SEG, exist_ok=True)
    data = json.load(open(os.path.join(PARSED, 'audio_jobs.json'), encoding='utf-8'))
    gap = data['gap']
    jobs = data['jobs']
    if a.mock:
        jobs = [j for j in jobs if j['out'].startswith('m%d/' % a.mock)]

    # 1) 收集所有唯一 run
    uniq = {}
    for j in jobs:
        for r in j['runs']:
            uniq[(r['voice'], r['text'])] = True
    todo_seg = [k for k in uniq if not valid(seg_path(k[0], k[1]))]
    print('items=%d  唯一音频段=%d  待下载=%d  workers=%d' % (
        len(jobs), len(uniq), len(todo_seg), a.workers), flush=True)

    t0 = time.time()

    def work(key):
        fetch(key[0], key[1])
        with _lock:
            _done[0] += 1
            n = _done[0]
        if n % 25 == 0 or n == len(todo_seg):
            print('  下载 %d/%d  %.0fs' % (n, len(todo_seg), time.time() - t0), flush=True)

    if todo_seg:
        with ThreadPoolExecutor(max_workers=a.workers) as ex:
            futs = {ex.submit(work, k): k for k in todo_seg}
            errs = 0
            for f in as_completed(futs):
                try:
                    f.result()
                except Exception as e:
                    errs += 1
                    print('  SEG FAIL:', str(e)[:120], flush=True)
            print('段下载完成，失败 %d，用时 %.0fs' % (errs, time.time() - t0), flush=True)

    # 2) 串行合并
    todo = [j for j in jobs if not valid(os.path.join(OUTDIR, j['out']))]
    print('待合并 item=%d' % len(todo), flush=True)
    ok, fail = 0, []
    for idx, j in enumerate(todo, 1):
        out = os.path.join(OUTDIR, j['out'])
        os.makedirs(os.path.dirname(out), exist_ok=True)
        try:
            merge(j['runs'], out, gap)
            ok += 1
            if idx % 20 == 0 or idx == len(todo):
                print('  合并 %d/%d  %s  %.0fs' % (idx, len(todo), j['out'], time.time() - t0), flush=True)
        except Exception as e:
            fail.append(j['out'])
            print('  MERGE FAIL %s : %s' % (j['out'], str(e)[:120]), flush=True)
    print('完成 items ok=%d fail=%d  总用时 %.0fs' % (ok, len(fail), time.time() - t0))
    if fail:
        print('失败：', fail[:20])
        sys.exit(1)


if __name__ == '__main__':
    main()
