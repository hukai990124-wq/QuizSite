# -*- coding: utf-8 -*-
"""生成 TOEIC 听力 4 套的可作答 HTML + 文本 md + 总目录。

产出（放在本目录）：
  TOEIC_Listening_Test_01..04.html
  TOEIC_Listening_Test_01..04.md
  index.html
音频引用 audio/mN/*.mp3，图片引用 img/*.jpg（同目录相对路径）。
"""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "toeic-listening"]))

import html
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
BASE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(BASE)), "quiz_kit"))
import quizkit as Q  # noqa: E402


DIRS = {
    'p1': 'For each question, you will listen to four short statements about a photograph. '
          'Select the statement that best describes what is happening in the picture.',
    'p2': 'You will hear a question or statement followed by three responses. '
          'Select the best response to the question or statement.',
    'p3': 'You will hear several conversations between two or more people. '
          'You will be asked to answer three questions about what the speakers say. Select the best response.',
    'p4': 'You will hear several talks given by a single speaker. '
          'You will be asked to answer three questions about what the speaker says. Select the best response.',
}
PNAME = {'p1': 'Photographs', 'p2': 'Question-Response',
         'p3': 'Conversations', 'p4': 'Talks'}
PRANGE = {'p1': '1–6', 'p2': '7–31', 'p3': '32–70', 'p4': '71–100'}

CSS = """
:root{--ink:#1b1b1b;--muted:#5b6570;--line:#e2e6ea;--green:#0b6b3a;--paper:#f6f8f9}
*{box-sizing:border-box}
html,body{margin:0}
body{font:16px/1.55 -apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Microsoft YaHei",sans-serif;color:var(--ink);background:#eceff1}
.wrap{max-width:880px;margin:0 auto;background:#fff;padding:30px 42px 90px;box-shadow:0 1px 8px rgba(0,0,0,.08)}
h1{font-size:26px;margin:0 0 8px}
.meta{color:var(--muted);font-size:14px;margin:2px 0}
.toolbar{position:sticky;top:0;background:#fff;padding:10px 0 12px;border-bottom:1px solid var(--line);margin-bottom:14px;z-index:5}
.toolbar .btns{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:9px}
.toolbar button,.toolbar a.navback{font:inherit;font-size:13px;padding:6px 13px;border-radius:7px;border:1px solid var(--line);background:#fff;color:#334155;cursor:pointer;text-decoration:none;display:inline-block}
.toolbar button:hover,.toolbar a.navback:hover{background:#f3f6f8}
.toolbar a.navback{font-weight:600;color:#1d4e79;border-color:#c7d6e2;background:#f4f8fb}
h2{margin:38px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--green);font-size:20px}
.dirs{background:#eef5f0;border-left:4px solid var(--green);padding:9px 13px;font-size:13.5px;color:#33413a;border-radius:0 5px 5px 0;margin:8px 0 16px}
.set{border:1px solid #e8ecef;border-radius:10px;padding:14px 16px;margin:14px 0;background:#fff}
.set>.shd{font-size:13px;color:var(--muted);font-weight:600;margin-bottom:9px}
.media{display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap}
.photo{width:100%;max-width:340px;border-radius:8px;border:1px solid var(--line);display:block}
.player{flex:1 1 240px;min-width:210px}
.player audio{width:100%;max-width:440px}
.player .tag{font-size:12.5px;color:var(--muted);display:block;margin-top:6px;line-height:1.45}
.graphic{background:#f7f9fa;border:1px solid #e6eaed;border-radius:8px;padding:10px 14px;margin:10px 0;font-size:14px;overflow:auto}
.graphic table{border-collapse:collapse;font-size:13.5px}
.graphic th,.graphic td{border:1px solid #dbe2e7;padding:4px 10px;text-align:left}
.graphic .gl{font-weight:700;font-size:13px;display:block;margin-bottom:6px;color:#33413a}
.q{margin:14px 0 0;padding-bottom:14px;border-bottom:1px solid #f0f3f5;scroll-margin-top:96px}
.q:last-child{border-bottom:none;padding-bottom:0}
.q .stem{margin-bottom:2px}
.q .n{font-weight:700;margin-right:5px}
.opts{list-style:none;display:grid;grid-template-columns:1fr;gap:6px;margin:9px 0 0;padding:0}
.opts li{display:flex;align-items:flex-start;gap:9px;padding:8px 12px;border:1px solid var(--line);border-radius:8px;background:#fcfcfd;font-size:15px}
.letter{flex:0 0 22px;height:22px;line-height:22px;text-align:center;font-weight:700;font-size:12px;background:#fff;border:1px solid #d1d5db;border-radius:999px;margin-top:1px}
.otext{flex:1 1 auto}
/* Part 1 / Part 2 默认隐藏选项文本（对齐真考试：只听到，不印出来） */
.opts.hide-text .otext{display:none}
.opts.hide-text li.opt{max-width:120px}
.q.done .opts.hide-text li.opt{max-width:none}
.q.done .opts.hide-text .otext{display:inline}
body.all-text .opts.hide-text .otext{display:inline}
body.all-text .opts.hide-text li.opt{max-width:none}
details.ans{margin-top:10px;border:1px solid #dfe8e2;background:#f7faf8;border-radius:9px}
details.ans summary{cursor:pointer;padding:8px 13px;font-weight:600;font-size:13px;color:#0b6b3a}
details.ans .expl{padding:0 14px 12px;font-size:14px;color:#3d4650;line-height:1.65}
details.ans .expl .k{font-weight:700;color:var(--green)}
details.ans .expl .tr{white-space:pre-wrap}
details.ans .expl .sp{font-weight:700;color:#0b6b3a;margin-right:6px}
.hint{font-size:12.5px;color:#a06b00;background:#fff8e6;border:1px solid #f0dca8;border-radius:6px;padding:3px 9px;display:inline-block}
a.card{display:block;border:1px solid var(--line);border-radius:10px;padding:14px 18px;margin:12px 0;text-decoration:none;color:inherit}
a.card:hover{border-color:#9db3c4;background:#fafcfd}
a.card .t{font-weight:600}
a.card .s{color:var(--muted);font-size:13px}
@media (max-width:560px){.wrap{padding:22px 16px 80px}.photo{max-width:100%}}
@media print{
  body{background:#fff}.wrap{box-shadow:none;max-width:none;padding:0 6mm}
  .toolbar,audio{display:none}
  h2{page-break-after:avoid}.q,.set{page-break-inside:avoid}
  details.ans{display:block}details.ans .expl{display:block}
  .opts.hide-text .otext{display:inline}
}
"""

LETTERS = 'ABCD'

EXTRA_JS = r"""
<script>
(function(){
"use strict";
// The shared grader runs first; only expand details for the finalized question.
function openQuestion(q){
  if(q&&q.classList.contains("done")){
    Array.prototype.forEach.call(q.querySelectorAll("details.ans"),function(d){d.open=true});
  }
}
document.addEventListener("click",function(ev){
  var t=ev.target;if(!t||!t.closest)return;
  if(t.closest(".js-submit")||t.closest(".js-reveal")){openQuestion(t.closest(".q"));}
});
var bt=document.getElementById("btn-text");
if(bt)bt.addEventListener("click",function(){
  document.body.classList.toggle("all-text");
  var on=document.body.classList.contains("all-text");
  this.textContent=on?"隐藏选项文本":"显示选项文本";
  this.classList.toggle("on",on);
});
})();
</script>
"""


def esc(t):
    return html.escape(t or '')


def strip_tags(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s or '')).strip()


def graphic_html(g, cls='graphic'):
    if not g:
        return ''
    lab = f'<span class="gl">{esc(g.get("label", ""))}</span>' if g.get('label') else ''
    return f'<aside class="{cls}">{lab}{g.get("html", "")}</aside>'


def transcript_block(lines, label='录音原文 / Transcript'):
    """lines:[(speaker,text)] -> <details>"""
    body = []
    for sp, tx in lines:
        prefix = f'<span class="sp">{esc(sp)}:</span>' if sp else ''
        body.append(f'<div class="tr">{prefix}{esc(tx)}</div>')
    return (f'<details class="ans"><summary>{esc(label)}</summary>'
            f'<div class="expl">{"".join(body)}</div></details>')


def q_html(no, stem, options, answer_idx, exp, group_transcript_html='', graphic=None, hide_text=False):
    ans = LETTERS[answer_idx] if isinstance(answer_idx, int) else str(answer_idx)
    opts = "".join(
        f'<li class="opt" data-letter="{L}"><span class="letter">{L}</span>'
        f'<span class="otext">{esc(o)}</span></li>'
        for L, o in zip(LETTERS, options))
    cls = 'opts hide-text' if hide_text else 'opts'
    g = graphic_html(graphic) if graphic else ''
    explain = (f'<details class="ans"><summary>解析 / Explanation</summary>'
               f'<div class="expl"><span class="k">{ans}.</span> {esc(exp)}</div></details>') if exp else ''
    return (f'<div class="q" id="q{no}" data-n="{no}" data-ans="{ans}">\n'
            f'<div class="stem"><span class="n">{no}.</span>{esc(stem)}</div>\n'
            f'{g}\n<ol class="{cls}">{opts}</ol>\n'
            f'{Q.act_html()}\n<div class="verdict"></div>\n'
            f'{group_transcript_html}{explain}\n</div>\n')


def render(t):
    m = t['mock']
    total = 100
    store = f"toeic-l:t{m:02d}"
    P = t['parts']
    body = []
    body.append('<div class="toolbar"><div class="btns">'
                '<a class="navback" href="index.html">← 套题列表</a>'
                '<button class="primary" id="btn-sheet" type="button">答题卡</button>'
                '<button id="btn-wrong" type="button">只看错题</button>'
                '<button id="btn-text" type="button">显示选项文本</button>'
                '<button id="btn-expand" type="button">展开全部原文/解析</button>'
                '<button id="btn-report" type="button">交卷</button>'
                '<button id="btn-reset" type="button">重置</button>'
                '<button onclick="window.print()" type="button">打印 / 存 PDF</button>'
                '</div>' + Q.bar_html(total) + '</div>')
    body.append(f'<h1>TOEIC® Listening Practice Test {m:02d}</h1>')
    body.append('<p class="meta">100 题 · Part 1（6）+ Part 2（25）+ Part 3（39）+ Part 4（30）· '
                '约 45 分钟 · 音频为电脑合成（非真人录音）</p>')
    body.append('<p class="meta">点「▶」听录音 → 选答案 →「确认作答」判对错；'
                'Part 1/2 的选项文本默认隐藏（跟真考试一样只靠听），答题后可看到。进度自动存本机。</p>')

    # ---- Part 1 ----
    body.append(f'<h2>PART 1 — {PNAME["p1"]}（{PRANGE["p1"]}）</h2>')
    body.append(f'<div class="dirs"><b>Directions:</b> {esc(DIRS["p1"])}</div>')
    for it in P['p1']:
        stmts = ''.join(f'<div class="tr"><span class="sp">{L}:</span>{esc(s)}</div>'
                        for L, s in zip(LETTERS, it['statements']))
        tr = (f'<details class="ans"><summary>录音原文 / 参考描述</summary><div class="expl">'
              f'<div class="tr"><b>照片内容：</b>{esc(it["scene"])}</div>{stmts}</div></details>')
        body.append(
            f'<div class="set"><div class="shd">Question {it["no"]}</div>'
            f'<div class="media"><img class="photo" src="{it["img"]}" alt="Part 1 photograph {it["no"]}" loading="lazy">'
            f'<div class="player"><audio controls preload="none" src="{it["audio"]}"></audio>'
            f'<span class="tag">听 4 句陈述，选出最符合照片的一句（只读一遍）</span></div></div>'
            + q_html(it['no'], 'Choose the statement that best describes the photograph.',
                     it['statements'], it['answer'], it['exp'], group_transcript_html=tr, hide_text=True)
            + '</div>')

    # ---- Part 2 ----
    body.append(f'<h2>PART 2 — {PNAME["p2"]}（{PRANGE["p2"]}）</h2>')
    body.append(f'<div class="dirs"><b>Directions:</b> {esc(DIRS["p2"])}</div>')
    for it in P['p2']:
        tr = transcript_block([('', it['prompt'])] + [('', o) for o in it['options']],
                              label='录音原文 / Transcript（问句 + 三个回应）')
        body.append(
            f'<div class="set"><div class="shd">Question {it["no"]}</div>'
            f'<div class="player"><audio controls preload="none" src="{it["audio"]}"></audio>'
            f'<span class="tag">听一句问话/陈述 + 三个回应，选出最恰当的回答</span></div>'
            + q_html(it['no'], 'Select the best response.', it['options'], it['answer'],
                     it['exp'], group_transcript_html=tr, hide_text=True)
            + '</div>')

    # ---- Part 3 ----
    body.append(f'<h2>PART 3 — {PNAME["p3"]}（{PRANGE["p3"]}）</h2>')
    body.append(f'<div class="dirs"><b>Directions:</b> {esc(DIRS["p3"])}</div>')
    for it in P['p3']:
        qs = it['questions']
        tr = transcript_block([(s['speaker'], s['text']) for s in it['script']])
        body.append(f'<div class="set"><div class="shd">Questions {it["no"]}–{it["no"] + len(qs) - 1}</div>')
        body.append(f'<div class="player"><audio controls preload="none" src="{it["audio"]}"></audio>'
                    f'<span class="tag">听一段对话，回答下面 {len(qs)} 题</span></div>')
        body.append(graphic_html(it['graphic']))
        for qi, q in enumerate(qs):
            body.append(q_html(it['no'] + qi, q['text'], q['options'], q['answer'], q['exp'],
                               group_transcript_html=(tr if qi == 0 else ''),
                               graphic=q.get('graphic')))
        body.append('</div>')

    # ---- Part 4 ----
    body.append(f'<h2>PART 4 — {PNAME["p4"]}（{PRANGE["p4"]}）</h2>')
    body.append(f'<div class="dirs"><b>Directions:</b> {esc(DIRS["p4"])}</div>')
    for it in P['p4']:
        qs = it['questions']
        tr = transcript_block([('', it['script'][0])])
        body.append(f'<div class="set"><div class="shd">Questions {it["no"]}–{it["no"] + len(qs) - 1}'
                    + (f' · {esc(it.get("talkType", ""))}' if it.get('talkType') else '') + '</div>')
        body.append(f'<div class="player"><audio controls preload="none" src="{it["audio"]}"></audio>'
                    f'<span class="tag">听一段独白，回答下面 {len(qs)} 题</span></div>')
        body.append(graphic_html(it['graphic']))
        for qi, q in enumerate(qs):
            body.append(q_html(it['no'] + qi, q['text'], q['options'], q['answer'], q['exp'],
                               group_transcript_html=(tr if qi == 0 else ''),
                               graphic=q.get('graphic')))
        body.append('</div>')

    return (f'<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8">'
            f'<meta name="viewport" content="width=device-width,initial-scale=1">'
            f'<title>TOEIC Listening Practice Test {m:02d}</title>'
            f'<style>{CSS}{Q.CSS}</style></head><body><div class="wrap">'
            + "\n".join(body) + '</div>' + Q.sheet_html(total) + Q.js(store, total) + EXTRA_JS
            + '</body></html>')


def render_md(t):
    m = t['mock']
    P = t['parts']
    L = [f'# TOEIC® Listening Practice Test {m:02d}', '',
         '> 100 题 · Part 1（6）+ Part 2（25）+ Part 3（39）+ Part 4（30）· 约 45 分钟',
         '> 音频为电脑合成（TTS），非真人录音。音频文件见 `audio/m%d/`。' % m, '']
    L += [f'## PART 1 — {PNAME["p1"]}（{PRANGE["p1"]}）', '', DIRS['p1'], '']
    for it in P['p1']:
        L += [f'### Q{it["no"]}', '', f'![photo]({it["img"]})', '',
              f'*照片内容*：{it["scene"]}', '',
              f'音频：`{it["audio"]}`', '']
        for L2, s in zip(LETTERS, it['statements']):
            L.append(f'- ({L2}) {s}')
        L += ['', f'**答案：{LETTERS[it["answer"]]}**', '', f'解析：{it["exp"]}', '']
    L += [f'## PART 2 — {PNAME["p2"]}（{PRANGE["p2"]}）', '', DIRS['p2'], '']
    for it in P['p2']:
        L += [f'### Q{it["no"]}', '', f'问句/陈述：{it["prompt"]}', '', f'音频：`{it["audio"]}`', '']
        for L2, o in zip(LETTERS, it['options']):
            L.append(f'- ({L2}) {o}')
        L += ['', f'**答案：{LETTERS[it["answer"]]}**', '', f'解析：{it["exp"]}', '']
    for pt in ('p3', 'p4'):
        L += [f'## PART {pt[-1]} — {PNAME[pt]}（{PRANGE[pt]}）', '', DIRS[pt], '']
        for it in P[pt]:
            qs = it['questions']
            L += [f'### Questions {it["no"]}–{it["no"] + len(qs) - 1}'
                  + (f' · {it.get("talkType","")}' if pt == 'p4' and it.get('talkType') else ''), '',
                  f'音频：`{it["audio"]}`', '']
            if it.get('graphic'):
                L += [f'**{it["graphic"].get("label","")}**：{strip_tags(it["graphic"]["html"])}', '']
            L += ['**录音原文：**', '']
            for s in it['script']:
                if isinstance(s, str):
                    L.append('> ' + s)
                else:
                    sp = (s['speaker'] + ': ') if s.get('speaker') else ''
                    L.append('> ' + sp + s['text'])
            L.append('')
            for qi, q in enumerate(qs):
                L.append(f'**Q{it["no"] + qi}.** {q["text"]}')
                for L2, o in zip(LETTERS, q['options']):
                    L.append(f'- ({L2}) {o}')
                if q.get('graphic'):
                    L += ['', f'  参考图表：{strip_text(q["graphic"])}']
                L += ['', f'答案：**{LETTERS[q["answer"]]}**　解析：{q["exp"]}', '']
    L += ['---', '',
          '题目来源：toeicmocktests.com（公开免费练习材料）。TOEIC® / ETS® 为 ETS 注册商标，'
          '本项目与 ETS 无关联。仅供个人学习使用。', '']
    return '\n'.join(L)


def strip_text(g):
    lab = g.get('label', '')
    return (lab + ' — ' if lab else '') + strip_tags(g.get('html', ''))



def main():
    tests = json.load(open(os.path.join(BASE, 'parsed', 'tests.json'), encoding='utf-8'))
    files = []
    for t in tests:
        m = t['mock']
        fn = f'TOEIC_Listening_Test_{m:02d}.html'
        open(os.path.join(BASE, fn), 'w', encoding='utf-8').write(render(t))
        mfn = f'TOEIC_Listening_Test_{m:02d}.md'
        open(os.path.join(BASE, mfn), 'w', encoding='utf-8').write(render_md(t))
        files.append((m, fn))
        print('written:', fn, '/', mfn)

    IDX = """
    body{margin:0;background:#eceff1;font:16px/1.55 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:#1b1b1b}
    .wrap{max-width:880px;margin:0 auto;background:#fff;padding:34px 42px 70px;box-shadow:0 1px 8px rgba(0,0,0,.08)}
    h1{font-size:26px;margin:0 0 8px}
    .meta{color:#5b6570;font-size:14px;margin:2px 0 22px}
    a.card{display:block;border:1px solid #d8dee5;border-radius:10px;padding:14px 18px;margin:12px 0;text-decoration:none;color:inherit}
    a.card:hover{border-color:#9db3c4;background:#fafcfd}
    a.card:focus-visible{outline:3px solid #0b6b3a;outline-offset:3px}
    a.card .t{font-weight:600}
    a.card .s{color:#5b6570;font-size:13px}
    @media(max-width:560px){.wrap{padding:56px 16px 40px}h1{font-size:23px}}
    """
    cards = []
    for m, fn in files:
        cards.append('<a class="card" href="%s" data-quiz-key="%s" data-quiz-total="100">'
                     '<div class="t">TOEIC Listening Practice Test %02d</div>'
                     '<div class="s">100 题 · Part 1–4 · 带音频，可作答判分</div>'
                     '<div class="pg"><i></i><span>未开始</span></div></a>'
                     % (fn, f"toeic-l:t{m:02d}", m))
    idx = (f'<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">'
           f'<meta name="viewport" content="width=device-width,initial-scale=1">'
           f'<title>TOEIC Listening 练习</title><style>{IDX}{Q.IDX_CSS}</style></head><body><div class="wrap">'
           f'<h1>TOEIC® Listening 练习 · 4 套</h1>'
           f'<p class="meta">每套 100 题：Part 1（6）+ Part 2（25）+ Part 3（39）+ Part 4（30），约 45 分钟。<br>'
           f'进卷后点「▶」听录音 → 选答案 →「确认作答」即刻判对错；正确率与进度自动保存在本机浏览器。<br>'
           f'音频为电脑合成（TTS），非真人录音。手机可用，网页加载和首次播放需要联网；完整下载 HTML 与资源目录后可离线使用。</p>'
           + "\n".join(cards) + '</div>' + Q.index_script() + '</body></html>')
    open(os.path.join(BASE, 'index.html'), 'w', encoding='utf-8').write(idx)
    print('written: index.html')


if __name__ == '__main__':
    main()
