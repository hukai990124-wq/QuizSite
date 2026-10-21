"""Render the AWS MLA-C01 practice page.

Layout and language handling follow aws-clf/build_clf.py: English and Chinese
sit side by side on every question (the Chinese carries a 中译 label), Japanese
replaces the Chinese when the page is switched to Japanese. A 130-minute timed
mode is layered on top, mirroring the shape of the real exam: 65 questions,
130 minutes, scaled score out of 1000 with 720 to pass.
"""
from __future__ import annotations

import html
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "quiz_kit"))
import quizkit as Q            # noqa: E402
import i18n_inject             # noqa: E402
import theme_inject            # noqa: E402

MINUTES = 130
PASS_SCORE = 720               # AWS associate exams pass at 720 on a 100-1000 scale
SCALE_MIN, SCALE_MAX = 100, 1000
STORE = "aws:mla:c01"

TOPIC_LABEL = {
    "Data Preparation for Machine Learning (ML)": "领域一 · 数据准备",
    "ML Model Development": "领域二 · 模型开发",
    "Deployment and Orchestration of ML Workflows": "领域三 · 部署与编排",
    "ML Solution Monitoring, Maintenance, and Security": "领域四 · 监控、维护与安全",
}

BASE_CSS = r"""
:root{--line:#e3e6ea;--muted:#6b7280;--en:#111827;--zh:#0f4c81;--badge:#eff6ff;--badge-line:#bfdbfe}
*{box-sizing:border-box}
body{margin:0;background:#f5f6f8;color:var(--en);font:15px/1.65 -apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:32px 22px 90px}
h1{font-size:24px;margin:0 0 6px}
.sub{color:var(--muted);margin:0 0 22px;font-size:13px}
.toolbar{position:sticky;top:0;z-index:9;background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .btns{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:9px}
.toolbar button{font:inherit;font-size:13px;padding:6px 12px;border:1px solid var(--line);background:#fff;border-radius:8px;cursor:pointer}
.toolbar button:hover{background:#f3f4f6}
.toolbar button.primary{background:#0b6b3a;border-color:#0b6b3a;color:#fff}
.q{background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin:0 0 18px;scroll-margin-top:118px}
.qhead{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.qno{font-weight:700;font-size:15px}
.badge{font-size:11px;color:#1d4ed8;background:var(--badge);border:1px solid var(--badge-line);border-radius:999px;padding:2px 9px}
.stem p{margin:0 0 6px}.en{color:var(--en)}.zh,.ja{font-size:14px}.zh{color:var(--zh)}.ja{color:#6b3fa0;display:none}.zh:before{content:"中译 ";font-size:10px;color:#9ca3af;letter-spacing:.5px}.ja:before{content:"日訳 ";font-size:10px;color:#9ca3af;letter-spacing:.5px}html[data-lang="ja"] .zh{display:none}html[data-lang="ja"] .ja{display:block}
.opts{list-style:none;margin:12px 0 0;padding:0}.opts li{display:flex;gap:10px;padding:9px 12px;border:1px solid var(--line);border-radius:10px;margin-bottom:7px;background:#fcfcfd}
.letter{flex:0 0 22px;height:22px;line-height:22px;text-align:center;font-weight:700;font-size:12px;background:#fff;border:1px solid #d1d5db;border-radius:999px}
.otext{flex:1 1 auto;min-width:0}.opts p{margin:0 0 4px}
details.ans{margin-top:12px;border:1px solid #cdebd6;background:#f4fdf7;border-radius:10px}
details.ans summary{cursor:pointer;padding:10px 14px;font-weight:600;font-size:13px;color:#065f46}
details.ans .correct,details.ans .expl{padding:0 14px}details.ans .correct{font-size:14px;margin:4px 0 8px}details.ans .correct b{color:#047857;font-size:16px}details.ans .expl{padding-bottom:12px}
a.card{display:block;background:#fff;border:1px solid #e3e6ea;border-radius:12px;padding:15px 18px;margin-bottom:10px;text-decoration:none;color:#111827}
a.card:hover{border-color:#93c5fd;background:#f8fbff}a.card .n{font-weight:700}.r{color:#6b7280;font-size:13px;margin-top:3px}
.pg{position:relative;margin-top:9px}.pg::before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:#e9eef2;border-radius:99px}
.pg i{position:relative;display:block;height:5px;width:0;background:#0b6b3a;border-radius:99px;transition:width .3s}.pg span{display:block;font-size:12px;color:#8b95a1;margin-top:6px}.pg.on span{color:#0b6b3a;font-weight:600}
@media print{body{background:#fff}.toolbar{display:none}.wrap{max-width:none;padding:0}.q{border:none;border-bottom:1px solid #ddd;border-radius:0;padding:14px 0;page-break-inside:avoid;margin:0}details.ans{border:1px solid #ccc;background:#fff;display:block}details.ans .expl{display:block}}
"""

EXTRA_CSS = r"""
.exhibit{margin:12px 0;border:1px solid #d8dee4;border-radius:10px;overflow:hidden;background:#fbfcfd}
.exhibit-head{padding:8px 13px;background:#f1f5f9;border-bottom:1px solid #d8dee4;font-size:13px;font-weight:600;color:#334155}
.exhibit-head p{margin:0}.exhibit-head .zh,.exhibit-head .ja{font-weight:600}
.exhibit-code{margin:0;padding:12px 14px;background:#f8fafc;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:13px/1.6 Consolas,"SFMono-Regular","Courier New",monospace;color:#1f2933}
.exam-bar{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin:0 0 20px;padding:12px 16px;border:1px solid var(--line);border-radius:12px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.btn-exam{border:1px solid #2f6fdb;background:#2f6fdb;color:#fff;border-radius:8px;padding:7px 16px;font:inherit;font-size:13.5px;cursor:pointer}
.btn-exam.on{background:#c0392b;border-color:#c0392b}
#timer{font:600 15px/1 Consolas,monospace;color:#1f2933}
#timer.low{color:#c0392b}
.exam-note{font-size:12.5px;color:var(--muted)}
body.exam details.ans,body.exam .verdict,body.exam .js-reveal{display:none!important}
body.exam li.opt.ok,body.exam li.opt.bad,body.exam li.opt.miss{background:#fcfcfd;border-color:var(--line)}
body.exam li.opt.ok .letter,body.exam li.opt.bad .letter,body.exam li.opt.miss .letter{background:#fff;color:inherit}
body.exam li.opt.ok::after,body.exam li.opt.bad::after,body.exam li.opt.miss::after{content:none}
"""

EXAM_JS = r"""
(function(){
"use strict";
var STORE="quiz:aws:mla:c01";
var LIMIT=%(minutes)d*60, PASS=%(pass)d, MIN=%(smin)d, MAX=%(smax)d;
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
function scaled(got,full){ return Math.round(MIN+(MAX-MIN)*got/Math.max(1,full)); }
function injectScoreRow(){
  var tbl=document.querySelector("#mask .report table");
  if(!tbl||document.getElementById("rp-score"))return;
  var r=score(), sc=scaled(r.got,r.full), ok=sc>=PASS;
  var tr=document.createElement("tr");
  tr.innerHTML='<td><b>\u6362\u7b97\u5f97\u5206</b></td>'
    +'<td id="rp-score" style="color:'+(ok?"#0b6b3a":"#c0392b")+'">'
    +'<b>'+sc+'</b> / '+MAX+'\u3000'+r.got+' / '+r.full+' \u9898'
    +'\u3000'+(ok?"\u5df2\u8fbe\u53ca\u683c\u7ebf":"\u672a\u8fbe\u53ca\u683c\u7ebf")+'</td>';
  tbl.appendChild(tr);
  var tr3=document.createElement("tr");
  tr3.innerHTML='<td>\u4f5c\u7b54\u60c5\u51b5</td><td>\u6b63\u786e '+r.right
    +'\u3000\u9519\u8bef '+r.wrong+'\u3000\u672a\u4f5c\u7b54 '+r.blank+'</td>';
  tbl.appendChild(tr3);
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
  Array.prototype.forEach.call(document.querySelectorAll("details.ans"),function(d){d.open=false;});
  paint();
  tick=setInterval(paint,1000);
}
btn.addEventListener("click",function(){
  if(body.classList.contains("exam")){
    var r=score();
    if(confirm("\u786e\u5b9a\u4ea4\u5377\uff1f\u5df2\u4f5c\u7b54 "+r.right+" \u9898\uff0c\u672a\u4f5c\u7b54 "+r.blank+" \u9898\u3002"))finish(false);
    return;
  }
  if(confirm("\u5f00\u59cb\u6a21\u8003\uff1f\u5171 %(minutes)d \u5206\u949f\uff0c\u671f\u95f4\u4e0d\u663e\u793a\u5bf9\u9519\u4e0e\u89e3\u6790\u3002"))start();
});
paint();
})();
"""


def trilang(values) -> str:
    return "".join(
        '<p class="%s" lang="%s">%s</p>' % (cls, lang, Q.esc(values.get(lang, "")))
        for lang, cls in (("en", "en"), ("zh", "zh"), ("ja", "ja"))
    )


def exhibit_html(exhibit) -> str:
    if not exhibit:
        return ""
    head = "".join(
        '<p class="%s" lang="%s">Exhibit: %s</p>' % (cls, lang, Q.esc(exhibit["title"].get(lang, "")))
        for lang, cls in (("en", "en"), ("zh", "zh"), ("ja", "ja"))
    )
    # Log excerpts keep their original wording: that is what the exam shows.
    return (
        '<div class="exhibit"><div class="exhibit-head">%s</div>'
        '<pre class="exhibit-code">%s</pre></div>'
        % (head, html.escape(exhibit["code"]))
    )


def render_question(number: int, q: dict) -> str:
    answer = ",".join(q["answer"])
    topic = TOPIC_LABEL.get(q["topic"], q["topic"])
    kind = "多选" if len(q["answer"]) > 1 else "单选"
    out = [
        '<div class="q" id="q%d" data-n="%d" data-ans="%s">' % (number, number, Q.esc(answer)),
        '<div class="qhead"><span class="qno">Question %d</span>'
        '<span class="badge">%s</span><span class="badge">%s</span></div>'
        % (number, Q.esc(topic), Q.esc(kind)),
        '<div class="stem">' + trilang(q["question"]) + exhibit_html(q.get("exhibit")) + "</div>",
        '<ol class="opts">',
    ]
    for option in q["options"]:
        letter = Q.esc(option["letter"])
        out.append(
            '<li class="opt" data-letter="%s"><span class="letter">%s</span>'
            '<div class="otext">%s</div></li>' % (letter, letter, trilang(option))
        )
    out += [
        "</ol>",
        Q.act_html(len(q["answer"])),
        '<div class="verdict" role="status"></div>',
        '<details class="ans"><summary>解析 / Explanation</summary>',
        '<p class="correct">正确答案 / Answer: <b>%s</b></p>' % Q.esc(answer),
        '<div class="expl">' + trilang(q["explanation"]) + "</div>",
        "</details></div>",
    ]
    return "\n".join(out)


def render(questions: list[dict]) -> str:
    total = len(questions)
    scoring = sum(len(q["answer"]) > 1 for q in questions)
    parts = [
        '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width,initial-scale=1">',
        "<title>AWS MLA-C01 备考练习 · 机器学习工程师</title>",
        "<style>%s%s%s</style></head><body>" % (BASE_CSS, Q.CSS, EXTRA_CSS),
        '<a href="../index.html" title="返回题库总览" style="position:fixed;right:14px;top:14px;z-index:99;'
        'background:rgba(255,255,255,.95);border:1px solid #d8dee5;border-radius:99px;padding:6px 14px;'
        'font:12.5px/1.4 -apple-system,Segoe UI,Microsoft YaHei,sans-serif;color:#334155;'
        'text-decoration:none;box-shadow:0 1px 4px rgba(0,0,0,.10)">← 题库总览</a>',
        '<div class="wrap">',
        "<h1>AWS MLA-C01 备考练习</h1>",
        '<p class="sub">65 题 · 130 分钟 · 满分 1000 分（720 分及格）· 中英对照 · 答案与解析 · '
        "非官方题目，中文为机器翻译 · 官方考试：65 题（50 道计分 + 15 道不计分）· 130 分钟</p>",
        '<div class="exam-bar">',
        '<button id="btn-exam" class="btn-exam" type="button">开始模考</button>',
        '<span id="timer"></span>',
        '<span class="exam-note">点「开始模考」进入 %d 分钟计时，期间隐藏对错与解析；'
        "交卷后按 100–1000 换算分给出得分与是否达到 %d 分及格线。</span>" % (MINUTES, PASS_SCORE),
        "</div>",
        '<div class="toolbar"><div class="btns">',
        '<button class="primary" id="btn-sheet" type="button">答题卡</button>',
        '<button id="btn-wrong" type="button">只看错题</button>',
        '<button id="btn-expand" type="button">展开全部解析</button>',
        '<button id="btn-report" type="button">交卷</button>',
        '<button id="btn-reset" type="button">重置</button>',
        '<button onclick="window.print()" type="button">打印 / 存 PDF</button>',
        "</div>",
        Q.bar_html(total),
        "</div>",
    ]
    parts.extend(render_question(n, q) for n, q in enumerate(questions, 1))
    parts += [
        '<footer class="sub">题目来自公开备考资料，非 AWS 官方内容，也不代表官方题库。'
        "中文与日文为机器翻译，仅供对照。考试领域权重：数据准备 28%、模型开发 26%、"
        "监控与安全 24%、部署与编排 22%。</footer>",
        "</div>",
        Q.sheet_html(total),
        Q.js(STORE, total),
        "<script>" + EXAM_JS % {"minutes": MINUTES, "pass": PASS_SCORE,
                                "smin": SCALE_MIN, "smax": SCALE_MAX} + "</script>",
        '<script src="../assets/presence.js"></script>',
        "</body></html>",
    ]
    page = theme_inject.inject_html("\n".join(parts))[0]
    print("渲染 %d 题（多选 %d 题）" % (total, scoring))
    return page


def main() -> None:
    data = json.loads((ROOT / "question-banks/aws-mla/data/questions.json").read_text(encoding="utf-8"))
    if len(data) != 65:
        raise SystemExit("expected 65 questions, got %d" % len(data))
    missing = [
        q["id"] for q in data
        if not q["question"]["zh"].strip()
        or not q["explanation"]["zh"].strip()
        or any(not o["zh"].strip() for o in q["options"])
    ]
    if missing:
        raise SystemExit("missing Chinese translation on: %s" % ", ".join(missing[:8]))
    target = ROOT / "site/aws-mla/index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(render(data), encoding="utf-8", newline="\n")
    i18n_inject.inject(str(target))
    print("已生成 %s" % target)


if __name__ == "__main__":
    main()
