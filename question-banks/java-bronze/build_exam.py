"""Render the 60-question Java Bronze mock exam page.

Layout mirrors workbuddy-opc's paper: a 65-minute timed mode during which
answers and explanations are hidden, weighted scoring on submission, and a
pass mark expressed as a percentage.

Answer choices for most questions are shuffled with a fixed seed. They are
left alone when a choice refers to another one by letter or when it is an
"all/none of the above" option, since reordering those would break the
question. The wording itself is never touched.
"""

# Legacy publishing entry point: all published pages now come from TypeScript.
if __name__ == "__main__":
    import subprocess as _publisher
    import sys as _publisher_sys
    from pathlib import Path as _PublisherPath
    if len(_publisher_sys.argv) != 1:
        raise SystemExit("Legacy acquisition flags are not publishing commands. See question-banks/README.md.")
    raise SystemExit(_publisher.call(["node", str(_PublisherPath(__file__).resolve().parents[2] / "scripts/build-banks.mjs"), "--bank", "java-bronze"]))

import json
import random
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q  # noqa: E402
import i18n_inject  # noqa: E402
import theme_inject  # noqa: E402

MINUTES = 65
PASS_PCT = 60
POSITION_SENSITIVE = re.compile(
    r"none of the above|all of the above|a and b|a, b, and c|a & b only|"
    r"以上都|以上全部|仅 a 和 b", re.I)

EXTRA_CSS = """
.q [lang="zh"], .q [lang="ja"] { display: none; }
html[data-lang="zh"] .q [lang="zh"], html[data-lang="ja"] .q [lang="ja"] { display: block; }
html[data-lang="zh"] .q [lang="en"], html[data-lang="ja"] .q [lang="en"] { display: none; }
.q .opt-lang[lang="zh"], .q .opt-lang[lang="ja"] { display: none; }
html[data-lang="zh"] .q .opt-lang[lang="zh"],
html[data-lang="ja"] .q .opt-lang[lang="ja"] { display: inline; }
html[data-lang="zh"] .q .opt-lang[lang="en"],
html[data-lang="ja"] .q .opt-lang[lang="en"] { display: none; }
.jb-code {
  padding: 14px 16px; margin: 12px 0; background: #f6f8fa;
  border: 1px solid #d8dee4; border-left: 4px solid #2f6fdb;
  border-radius: 8px; white-space: pre-wrap; overflow-wrap: anywhere;
  font: 14px/1.65 Consolas, "SFMono-Regular", monospace;
}
.jb-topic { font-size: 12px; color: #57606a; border: 1px solid #d8dee4;
  border-radius: 999px; padding: 2px 10px; }
.exam-bar { display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
  margin: 12px 0 20px; padding: 12px 16px; border: 1px solid #d8dee4;
  border-radius: 10px; background: #f8fafc; }
#timer { font: 600 16px/1 Consolas, monospace; color: #1f2933; }
#timer.low { color: #c0392b; }
.btn-exam { border: 1px solid #2f6fdb; background: #2f6fdb; color: #fff;
  border-radius: 8px; padding: 7px 16px; font-size: 14px; cursor: pointer; }
.btn-exam.on { background: #c0392b; border-color: #c0392b; }
.exam-note { font-size: 13px; color: #57606a; }
body.exam details.ans, body.exam .verdict, body.exam .js-reveal { display: none !important; }
body.exam li.opt.ok, body.exam li.opt.bad, body.exam li.opt.miss {
  background: #fff; border-color: #dfe5ea; }
body.exam li.opt.ok .letter, body.exam li.opt.bad .letter, body.exam li.opt.miss .letter {
  background: inherit; color: inherit; }
body.exam li.opt.ok::after, body.exam li.opt.bad::after, body.exam li.opt.miss::after {
  content: none; }
"""


def trilang(values):
    return "".join(f'<p lang="{lang}">{Q.esc(values[lang])}</p>' for lang in ("en", "zh", "ja"))


def opt_html(opt):
    return "".join(f'<span class="opt-lang" lang="{lang}">{Q.esc(opt[lang])}</span>'
                   for lang in ("en", "zh", "ja"))


def shuffle_options(q, rnd):
    """Shuffle unless a choice points at another by letter or is all/none-of-above."""
    opts = list(q["options"])
    texts = [o["en"] for o in opts] + [q["prompt"]["en"]]
    if any(POSITION_SENSITIVE.search(t) for t in texts):
        return opts, q["answer"], False
    idx = list(range(len(opts)))
    rnd.shuffle(idx)
    new = [opts[i] for i in idx]
    letters = "ABCDE"
    picked = sorted(letters[idx.index(i)] for i in range(len(opts))
                    if letters[i] in q["answer"].split(","))
    return new, ",".join(picked), True


def balance(qs, rnd, tries=24):
    """Spread correct answers across the letters instead of trusting one shuffle.

    With fifteen true/false questions in the set, A and B are bound to carry
    more answers than D — but letting every other question land on A as well
    would make the paper guessable. Each question is therefore re-shuffled a
    few times and the arrangement that lands on the least-used letters wins.
    """
    used = {L: 0 for L in "ABCDE"}
    out = []
    for q in qs:
        opts, ans, ok = shuffle_options(q, rnd)
        if ok:
            best = None
            for _ in range(tries):
                cand_o, cand_a, _ = shuffle_options(q, rnd)
                cost = sum(used[L] for L in cand_a.split(","))
                if best is None or cost < best[0]:
                    best = (cost, cand_o, cand_a)
                    if cost == min(used.values()):
                        break
            opts, ans = best[1], best[2]
        for L in ans.split(","):
            used[L] += 1
        out.append((q, opts, ans))
    return out


EXAM_JS = r"""
(function(){
"use strict";
var STORE="quiz:jb:exam:60";
var LIMIT=%(limit)d*60, PASS=%(pass)d;
var STARTK=STORE+":exam-start";
var body=document.body, btn=document.getElementById("btn-exam");
var chip=document.getElementById("timer");
if(!btn)return;
var tick=null, autoFlag=false;
function leftSec(){
  var t=parseInt(localStorage.getItem(STARTK)||"0",10);
  return t?Math.max(0,LIMIT-Math.floor((Date.now()-t)/1000)):LIMIT;
}
function fmt(s){var m=Math.floor(s/60),x=s%%60;return (m<10?"0":"")+m+":"+(x<10?"0":"")+x;}
function score(){
  var S={};try{S=JSON.parse(localStorage.getItem(STORE)||"{}")||{};}catch(e){}
  var got=0,full=0,right=0,wrong=0,blank=0;
  Array.prototype.forEach.call(document.querySelectorAll(".q"),function(q){
    full++;
    var rec=S[q.getAttribute("data-n")];
    if(!rec||rec.ok===null||rec.ok===undefined){blank++;return;}
    if(rec.ok){got++;right++;}else{wrong++;}
  });
  return {got:got,full:full,right:right,wrong:wrong,blank:blank};
}
function injectScoreRow(){
  var tbl=document.querySelector("#mask .report table");
  if(!tbl||document.getElementById("rp-score"))return;
  var r=score(),pct=r.full?Math.round(r.got*100/r.full):0,ok=pct>=PASS;
  var tr=document.createElement("tr");
  tr.innerHTML='<td><b>\u5f97\u5206</b>\uff08\u6bcf\u9898\u7b49\u5206\uff09</td>'
    +'<td id="rp-score" style="color:'+(ok?"#0b6b3a":"#c0392b")+'">'
    +r.got+" / "+r.full+"\uff08"+pct+"%%\uff09"
    +" "+(ok?"\u5df2\u8fbe\u53ca\u683c\u7ebf":"\u672a\u8fbe\u53ca\u683c\u7ebf")+"</td>";
  tbl.appendChild(tr);
  if(autoFlag){
    var tr2=document.createElement("tr");
    tr2.innerHTML='<td>\u8003\u8bd5\u65f6\u95f4\u5230</td>'
      +'<td style="color:#c0392b"><b>\u5df2\u81ea\u52a8\u4ea4\u5377</b></td>';
    tbl.appendChild(tr2);
  }
}
function finish(auto){
  autoFlag=!!auto;
  if(tick){clearInterval(tick);tick=null;}
  body.classList.remove("exam");
  btn.classList.remove("on");
  btn.textContent="\u5f00\u59cb\u6a21\u8003";
  if(chip){chip.textContent="";chip.classList.remove("low");}
  injectScoreRow();
  var rb=document.getElementById("btn-report");
  if(rb)rb.click();
}
function paint(){
  if(!chip)return;
  var s=leftSec();
  chip.textContent="\u23f1 "+fmt(s);
  chip.classList.toggle("low",s<=300);
  if(s<=0)finish(true);
}
function start(){
  localStorage.setItem(STARTK,String(Date.now()));
  body.classList.add("exam");
  btn.classList.add("on");
  btn.textContent="\u4ea4\u5377";
  document.querySelectorAll("details.ans").forEach(function(d){d.open=false;});
  paint();
  tick=setInterval(paint,1000);
}
btn.addEventListener("click",function(){
  if(body.classList.contains("exam")){
    var r=score();
    if(confirm("\u786e\u5b9a\u4ea4\u5377\uff1f\u5df2\u4f5c\u7b54 "+r.right+" \u9898\uff0c\u672a\u4f5c\u7b54 "+r.blank+" \u9898\u3002"))finish(false);
    return;
  }
  if(confirm("\u5f00\u59cb\u6a21\u8003\uff1f\u5171 %(limit)d \u5206\u949f\uff0c\u671f\u95f4\u4e0d\u663e\u793a\u5bf9\u9519\u4e0e\u89e3\u6790\u3002"))start();
});
paint();
})();
"""


def render(data):
    qs = data["questions"]
    rnd = random.Random(20261015)          # 固定种子，保证每次生成的选项顺序一致
    template = (ROOT / "site/aws-aif/bank/part01.html").read_text(encoding="utf-8")
    css = re.search(r"<style>([\s\S]*?)</style>", template).group(1)
    prepared = balance(qs, rnd)

    out = ['<!doctype html><html lang="zh"><head><meta charset="utf-8">'
           '<meta name="viewport" content="width=device-width,initial-scale=1">',
           '<title>Java Bronze 全真模拟卷</title><style>' + css + EXTRA_CSS + '</style></head>'
           '<body><main class="wrap">',
           '<p class="sub"><a href="/java-bronze/">← Java Bronze 备考练习</a> · '
           '<a href="/">题库总览</a></p>',
           '<h1>Java Bronze 全真模拟卷</h1>',
           '<p class="sub">60 题 · 65 分钟 · 满分 100 分 · 60 分及格</p>',
           '<p class="sub">题型与真实机考一致：单选、判断与多选混编。'
           '题库为公开的 Sun/Oracle 认证真题，选项已打散顺序，'
           '每题附中英日三语解析。</p>',
           '<div class="exam-bar">'
           '<button id="btn-exam" class="btn-exam" type="button">开始模考</button>'
           '<span id="timer"></span>'
           '<span class="exam-note">点「开始模考」进入 65 分钟计时，'
           '期间隐藏对错与解析；交卷后按百分制给出得分与及格判定。</span>'
           '</div>',
           '<div class="toolbar"><div class="btns">'
           '<button class="primary" id="btn-sheet" type="button">答题卡</button>'
           '<button id="btn-wrong" type="button">只看错题</button>'
           '<button id="btn-expand" type="button">展开全部解析</button>'
           '<button id="btn-report" type="button">交卷</button>'
           '<button id="btn-reset" type="button">重置</button>'
           '</div>' + Q.bar_html(len(qs)) + '</div>']

    for n, (q, opts, ans) in enumerate(prepared, 1):
        letters = "ABCDE"[:len(opts)]
        if q["id"] != "jbe-%02d" % n or not all(a in letters for a in ans.split(",")):
            raise ValueError("bad question %s" % q["id"])
        kind = {"multi": "多选", "judge": "判断"}.get(q["kind"], "单选")
        context = "\n".join(["Java Bronze mock exam question", q["topic"],
                             *q["prompt"].values(), q.get("code") or "",
                             *(f"{L}. {o['en']}" for L, o in zip(letters, opts)),
                             *q["explanation"].values()])
        codeblock = ('<pre class="jb-code i18n-noloc"><code>' + Q.esc(q["code"]) + '</code></pre>'
                     if (q.get("code") or "").strip() else "")
        out += [f'<div class="q" id="q{n}" data-n="{n}" data-ans="{ans}" '
                f'data-review-id="{q["id"]}" data-chat-context="{Q.esc(context)}">',
                f'<div class="qhead"><span class="qno">Question {n}</span>'
                f'<span class="badge">{kind}</span>'
                f'<span class="jb-topic">{Q.esc(q["topic"])}</span></div>',
                '<div class="stem">' + trilang(q["prompt"]) + codeblock + '</div><ol class="opts">']
        for L, opt in zip(letters, opts):
            out.append(f'<li class="opt" data-letter="{L}"><span class="letter">{L}</span>'
                       f'<button type="button" class="otext vocab-pick i18n-noloc" '
                       f'aria-pressed="false">{opt_html(opt)}</button></li>')
        out += ['</ol>' + Q.act_html(1) + '<div class="verdict" role="status"></div>',
                '<details class="ans"><summary>解析 / Explanation</summary>'
                '<p class="correct">正确答案 <b>' + ans + '</b></p>'
                '<div class="expl">' + trilang(q["explanation"]) +
                '</div></details></div>']

    exam_js = EXAM_JS % {"limit": MINUTES, "pass": PASS_PCT}
    out += ['</main>' + Q.sheet_html(len(qs)) + Q.js("jb:exam:60", len(qs)),
            '<script>' + exam_js + '</script>',
            '<script type="module" src="/assets/aif-vocabulary.mjs"></script>'
            '<script src="/assets/presence.js"></script></body></html>']
    return theme_inject.inject_html("\n".join(out))[0]


if __name__ == "__main__":
    data = json.loads((ROOT / "question-banks/java-bronze/java-bronze-exam.json").read_text(encoding="utf-8"))
    target = ROOT / "site/java-bronze/exam.html"
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print("Generated the %d-question mock exam" % len(data["questions"]))
