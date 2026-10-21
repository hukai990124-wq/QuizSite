# -*- coding: utf-8 -*-
"""WorkBuddy 效率智能体 OPC 从业者认证 · 备考题库生成器

产出：out/index.html（总目录）+ out/mXX.html（11 章分模块练习）+ out/paper-N.html（模拟卷）
判分引擎复用 ../quiz_kit/quizkit.py。

两种页面
  模块练习页：按课程模块组织，10 题左右，只做「练习模式」（即时判分 + 解析）
  模拟卷页：完全按考试结构（单选 40 + 多选 20），另带「模考模式」——
            90 分钟倒计时、期间隐藏判定与解析、交卷后按官方分值算分
            （单选 1.5 分 + 多选 2 分 = 60 题满分 100，及格 70）
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(HERE)), "quiz_kit"))
sys.path.insert(0, HERE)

import quizkit as QK                    # noqa: E402
from data import MODULES                # noqa: E402
from data_papers import PAPERS          # noqa: E402

# 模块在 data.py 里按编写顺序 append，展示时按官方课程地图的编号排
MODULES = sorted(MODULES, key=lambda m: m["no"])

OUT = os.path.join(HERE, "out")
esc = QK.esc

SET_CSS = r"""
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#f5f7f9;color:#0f172a;font-size:15px;line-height:1.7;
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif}
a{color:#1d4e79}
.wrap{max-width:880px;margin:0 auto;padding:0 18px}

.toolbar{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.97);
 border-bottom:1px solid #e3e9ee;padding:9px 0 10px;box-shadow:0 1px 8px rgba(15,23,42,.04)}
.toolbar .tbin{max-width:880px;margin:0 auto;padding:0 18px;display:flex;flex-wrap:wrap;
 align-items:center;gap:7px 14px}
.btns{display:flex;flex-wrap:wrap;gap:7px}
.btns button{font:inherit;font-size:13px;padding:6px 13px;border-radius:8px;
 border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer;transition:background .12s}
.btns button:hover{background:#f1f5f9}
.btns button.on{background:#0b6b3a;border-color:#0b6b3a;color:#fff}
.btns button.warn{border-color:#c98a00;color:#8a5f00}
.btns button.warn.on{background:#c98a00;border-color:#c98a00;color:#fff}
.timer{font-variant-numeric:tabular-nums;font-weight:700;color:#0b6b3a;font-size:13px}
.timer.low{color:#c0392b}

header.hero{padding:26px 0 18px}
header.hero h1{margin:0 0 6px;font-size:25px;letter-spacing:-.2px}
header.hero .sub{margin:0;color:#64748b;font-size:14px}
.crumb{font-size:13px;margin-bottom:12px}
.crumb a{text-decoration:none;color:#5b6570}
.crumb a:hover{color:#1d4e79;text-decoration:underline}
.meta{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px}
.chip{font-size:12px;padding:3px 10px;border-radius:99px;background:#eef5fc;
 border:1px solid #d3e3f2;color:#28567f}
.chip.grey{background:#f1f5f9;border-color:#e2e8f0;color:#64748b}
.chip.warn{background:#fff8e6;border-color:#f0dca8;color:#8a5f00}

.qlist{list-style:none;margin:0;padding:0}
li.q{background:#fff;border:1px solid #e3e9ee;border-radius:13px;padding:18px 20px;
 margin:0 0 14px;position:relative}
.qhd{display:flex;align-items:center;gap:9px;margin-bottom:7px;flex-wrap:wrap}
.qn{font-weight:800;color:#0b6b3a;font-variant-numeric:tabular-nums;font-size:15px}
.modtag{font-size:11.5px;color:#64748b;background:#f1f5f9;border:1px solid #e2e8f0;
 border-radius:5px;padding:1px 7px;white-space:nowrap}
.modtag.multi{background:#fff8e6;border-color:#f0dca8;color:#8a5f00}
.stem{font-size:15.4px;font-weight:600;line-height:1.72;margin:0 0 12px;color:#111}
.opts{list-style:none;margin:0;padding:0}
li.opt{display:flex;gap:11px;align-items:flex-start;padding:10px 13px;border:1px solid #dfe5ea;
 border-radius:9px;background:#fff;margin:7px 0;font-size:14.6px;line-height:1.62}
.letter{flex:0 0 auto;width:23px;height:23px;border:1px solid #cbd5e1;border-radius:50%;
 display:flex;align-items:center;justify-content:center;font-size:12.5px;font-weight:700;
 color:#475569;background:#f8fafc;margin-top:1px}
.otxt{flex:1 1 auto}

details.ans{margin-top:12px;border-top:1px dashed #e3e9ee;padding-top:10px}
details.ans summary{cursor:pointer;font-size:13px;color:#0b6b3a;font-weight:600;
 list-style:none;user-select:none}
details.ans summary::-webkit-details-marker{display:none}
details.ans summary::before{content:"\25B8 "}
details.ans[open] summary::before{content:"\25BE "}
.anbody{margin-top:8px;font-size:13.8px;color:#475569;line-height:1.8;white-space:pre-line}
.anbody b{color:#111}
.anbody .ref{display:block;margin-top:9px;font-size:12px;color:#94a3b8;white-space:normal}
.anbody .ref b{color:#64748b;font-weight:600}

body.exam details.ans,body.exam .verdict,body.exam .js-reveal{display:none!important}
body.exam li.opt.ok,body.exam li.opt.bad,body.exam li.opt.miss{background:#fff;border-color:#dfe5ea}
body.exam li.opt.ok .letter,body.exam li.opt.bad .letter,body.exam li.opt.miss .letter{
 background:#f8fafc;color:#475569;border-color:#cbd5e1}
body.exam li.opt.ok::after,body.exam li.opt.bad::after,body.exam li.opt.miss::after{content:none}

.pgroup{margin:22px 0 10px;font-size:14px;font-weight:700;color:#334155}
.pcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(258px,1fr));gap:13px}
.pcard{display:block;background:#fff;border:1px solid #e3e9ee;border-radius:13px;padding:16px 17px;
 text-decoration:none;color:inherit;transition:transform .14s ease,box-shadow .14s ease}
.pcard:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(15,23,42,.09)}
.pcard .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.pcard .tag{font-size:11.5px;padding:3px 9px;border-radius:99px;background:#eef5fc;
 border:1px solid #d3e3f2;color:#28567f;font-weight:600;white-space:nowrap}
.pcard .tag.p{background:#fff8e6;border-color:#f0dca8;color:#8a5f00}
.pcard .cnt{font-size:12px;color:#94a3b8;white-space:nowrap}
.pcard h3{margin:0 0 6px;font-size:16px}
.pcard p{margin:0;font-size:13px;color:#64748b;line-height:1.66}
.note{background:#fff;border:1px solid #e3e9ee;border-radius:12px;padding:15px 18px;
 font-size:13.3px;color:#475569;line-height:1.78;margin:0 0 22px}
.note b{color:#111}
.note ul{margin:8px 0 0;padding-left:20px}
.note li{margin:3px 0}

footer{padding:24px 0 40px;color:#94a3b8;font-size:12.5px;line-height:1.8}
footer b{color:#64748b}
footer a{color:#64748b}

@media (max-width:560px){
 li.q{padding:15px 14px}
 header.hero h1{font-size:21px}
}
@media print{
 .toolbar,.sheet,.mask,details.ans,.verdict,.qact{display:none!important}
 li.q{break-inside:avoid;border-color:#ccc}
}
"""

EXAM_JS = r"""
(function(){
"use strict";
var STORE="quiz:%(store)s";
var LIMIT=%(limit)d*60;
var PASS=%(pass)d;
var STARTK=STORE+":exam-start";
var body=document.body;
var btn=document.getElementById("btn-exam");
var chip=document.getElementById("timer");
if(!btn)return;
var tick=null;

function leftSec(){
  var t=parseInt(localStorage.getItem(STARTK)||"0",10);
  if(!t)return LIMIT;
  return Math.max(0,LIMIT-Math.floor((Date.now()-t)/1000));
}
function fmt(s){
  var m=Math.floor(s/60),x=s%%60;
  return (m<10?"0":"")+m+":"+(x<10?"0":"")+x;
}
function weightOf(q){
  var ans=(q.getAttribute("data-ans")||"").split(",").filter(Boolean);
  return ans.length>1?2:1.5;
}
function score(){
  var S={};
  try{S=JSON.parse(localStorage.getItem(STORE)||"{}")||{}}catch(e){}
  var got=0,full=0,right=0,wrong=0,blank=0;
  Array.prototype.forEach.call(document.querySelectorAll(".q"),function(q){
    var w=weightOf(q);full+=w;
    var rec=S[q.getAttribute("data-n")];
    if(!rec||rec.ok===null||rec.ok===undefined){blank++;return;}
    if(rec.ok){got+=w;right++;}else{wrong++;}
  });
  return {got:got,full:full,right:right,wrong:wrong,blank:blank};
}
var autoFlag=false;
function injectScoreRow(){
  var tbl=document.querySelector("#mask .report table");
  if(!tbl||document.getElementById("rp-score"))return;
  var r=score(),ok=r.got>=PASS;
  var tr=document.createElement("tr");
  // 固定文案（而非拼接数字），保证 i18n 运行时能整串命中词典
  tr.innerHTML='<td><b>\u6362\u7b97\u5f97\u5206</b>\uff08\u5355\u90091.5/\u591a\u90092\uff09</td>'
    +'<td id="rp-score" style="color:'+(ok?"#0b6b3a":"#c0392b")+'">'
    +r.got.toFixed(1)+" / "+r.full.toFixed(0)
    +" "+(ok?"\u5df2\u8fbe\u53ca\u683c\u7ebf":"\u672a\u8fbe\u53ca\u683c\u7ebf")+"</td>";
  tbl.appendChild(tr);
  // 自动交卷提示写进成绩单（走 DOM），才能被 i18n 运行时翻译
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
  paint();
  if(tick)clearInterval(tick);
  tick=setInterval(paint,1000);
}
btn.addEventListener("click",function(){
  if(body.classList.contains("exam")){finish(false);return;}
  if(location.hash==="#exam"){start();return;}
  if(confirm("\u5f00\u542f\u6a21\u8003\u6a21\u5f0f\uff1f\n\n\u00b7 \u5012\u8ba1\u65f6 "+Math.round(LIMIT/60)+
             " \u5206\u949f\n\u00b7 \u671f\u95f4\u4e0d\u663e\u793a\u5bf9\u9519\u4e0e\u89e3\u6790\n"+
             "\u00b7 \u70b9\u300c\u4ea4\u5377\u300d\u540e\u7ed9\u51fa\u6362\u7b97\u5f97\u5206\n\n\u73b0\u5728\u5f00\u59cb\u8ba1\u65f6\u3002"))start();
});
if(location.hash==="#exam"){
  var s0=score();
  if(s0.right+s0.wrong+s0.blank===0)start();
}
})();
"""


def md_bold(s):
    """解析里允许写 **粗体**（先做 HTML 转义再替换，避免注入）。"""
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)


def multi_count(ans):
    return len([x for x in ans.split(",") if x.strip()])


def render_item(item):
    n = item["n"]
    ans = item["ans"]
    need = multi_count(ans)
    multi = need > 1
    opts = "".join(
        '<li class="opt" data-letter="%s"><span class="letter">%s</span>'
        '<span class="otxt">%s</span></li>' % (esc(L), esc(L), md_bold(esc(txt)))
        for L, txt in item["opts"])
    tags = []
    if item.get("mod"):
        tags.append('<span class="modtag">模块 %02d</span>' % item["mod"])
    if multi:
        tags.append('<span class="modtag multi">多选 · 需选 %d 项</span>' % need)
    expl = '正确答案：<b>%s</b>\n%s' % (esc(ans), md_bold(esc(item["expl"])))
    if item.get("ref"):
        expl += '\n<span class="ref">依据：<b>%s</b></span>' % esc(item["ref"])
    return (
        '<li class="q" id="q%(n)d" data-n="%(n)d" data-ans="%(ans)s" data-multi="%(multi)d">'
        '<div class="qhd"><span class="qn">%(n)d.</span>%(tags)s</div>'
        '<div class="stem">%(stem)s</div>'
        '<ul class="opts">%(opts)s</ul>'
        '<details class="ans"><summary>看解析与依据</summary><div class="anbody">%(expl)s</div></details>'
        '%(verdict)s%(act)s</li>'
    ) % {
        "n": n, "ans": esc(ans), "multi": 1 if multi else 0,
        "tags": "".join(tags), "stem": md_bold(esc(item["stem"])), "opts": opts,
        "expl": expl, "verdict": QK.verdict_html(), "act": QK.act_html(need),
    }


def unit_stats(u):
    items = u["items"]
    total = len(items)
    n_multi = sum(1 for it in items if multi_count(it["ans"]) > 1)
    n_single = total - n_multi
    return total, n_single, n_multi, n_single * 1.5 + n_multi * 2


def page_unit(u):
    is_paper = u.get("kind") == "paper"
    total, n_single, n_multi, full = unit_stats(u)
    items = "".join(render_item(it) for it in u["items"])
    store = "wb-opc-" + u["slug"]
    limit = u.get("limit", 90)
    passline = u.get("pass", 70)

    if is_paper:
        chips = ('<span class="chip">%d 题 · 单选 %d + 多选 %d</span>'
                 '<span class="chip">满分 %g 分 · 及格 %d</span>'
                 '<span class="chip warn">限时 %d 分钟</span>'
                 '<span class="chip grey">即时判分 · 进度存在本机</span>'
                 % (total, n_single, n_multi, full, passline, limit))
        exambtn = '<button id="btn-exam" class="warn" type="button">开始模考</button>'
        note = """<div class="note">
      <b>怎么用</b>
      <ul>
        <li><b>练习模式</b>（默认）：点选项 → 「确认作答」→ 立刻判定，可随时展开「解析与依据」。</li>
        <li><b>模考模式</b>：点工具条上的「开始模考」，倒计时 %d 分钟，期间隐藏对错与解析；
            点「交卷」后按官方分值给出换算得分（单选 1.5 分 + 多选 2 分）。</li>
        <li>多选题<b>错选、漏选都不得分</b> —— 与真实考试规则一致。</li>
      </ul>
    </div>""" % limit
    else:
        chips = ('<span class="chip">%d 题 · 单选 %d + 多选 %d</span>'
                 '<span class="chip grey">即时判分 · 进度存在本机</span>'
                 % (total, n_single, n_multi))
        exambtn = ""
        note = """<div class="note">
      按官方课程地图的模块顺序编排，用来<b>边看课程边查漏</b>。
      点选项 → 「确认作答」立刻判定，每题都能展开「解析与依据」看到官方出处。
      多选题<b>错选、漏选都不得分</b>。
    </div>"""

    html = """<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>%(title)s · WorkBuddy OPC 备考题库</title>
<style>%(engine)s%(set)s</style>
</head>
<body>
<div class="toolbar">
  <div class="tbin">
    <div class="btns">
      <button id="btn-sheet" type="button">答题卡</button>
      <button id="btn-report" type="button">交卷看成绩</button>
      <button id="btn-wrong" type="button">只看错题</button>
      <button id="btn-expand" type="button">展开全部解析</button>
      %(exambtn)s
      <button id="btn-reset" type="button">清空重做</button>
      <span class="timer" id="timer"></span>
    </div>
    %(bar)s
  </div>
</div>

<header class="hero i18n-noloc">
  <div class="wrap">
    <div class="crumb"><a href="index.html">← 返回题库目录</a></div>
    <h1>%(title)s</h1>
    <p class="sub">%(subtitle)s</p>
    <div class="meta">%(chips)s</div>
  </div>
</header>

<main class="i18n-noloc">
  <div class="wrap">
    %(note)s
    <ol class="qlist i18n-noloc">%(items)s</ol>
  </div>
</main>

<footer class="i18n-noloc">
  <div class="wrap">
    <div><b>题目来源</b>：腾讯<b>从未公开</b>该认证的考试题库 —— 官方只公布了课程地图与考试规则。
      本题库全部题目为<b>依据官方公开资料自编</b>，用于知识点覆盖与查漏补缺，<b>不代表考试原题</b>。</div>
    <div style="margin-top:6px"><b>出题依据</b>：WorkBuddy 官方文档（www.workbuddy.cn/docs）
      · 腾讯云 OPC 认证课程地图 · 产品实测。每题解析下方标注了具体出处。</div>
  </div>
</footer>

%(sheet)s
%(js)s
%(examjs)s
</body>
</html>
""" % {
        "title": esc(u["title"]), "subtitle": esc(u.get("subtitle") or u.get("goal") or ""),
        "engine": QK.CSS, "set": SET_CSS, "chips": chips, "exambtn": exambtn,
        "bar": QK.bar_html(total), "note": note, "items": items,
        "sheet": QK.sheet_html(total), "js": QK.js(store, total),
        "examjs": ("<script>" + (EXAM_JS % {"store": store, "limit": limit, "pass": passline})
                   + "</script>") if is_paper else "",
    }
    return u["slug"], html


def card(u):
    total, n_single, n_multi, full = unit_stats(u)
    is_paper = u.get("kind") == "paper"
    tag = ('<span class="tag p">模拟卷</span>' if is_paper
           else '<span class="tag">模块 %02d</span>' % u["no"])
    if is_paper:
        desc = "单选 %d + 多选 %d，满分 %g 分、及格 %d 分。带 90 分钟模考模式。" % (
            n_single, n_multi, full, u.get("pass", 70))
    else:
        desc = esc(u.get("goal", ""))[:52]
    return ('<a class="pcard" href="%s.html"><div class="top">%s'
            '<span class="cnt">%d 题</span></div><h3>%s</h3><p>%s</p></a>'
            % (u["slug"], tag, total, esc(u["title"]), desc))


def page_index():
    mods = "".join(card(u) for u in MODULES)
    papers = "".join(card(u) for u in PAPERS)
    n_all = sum(len(u["items"]) for u in MODULES) + sum(len(u["items"]) for u in PAPERS)
    paper_block = ('<div class="pgroup">全真模拟卷</div><div class="pcards">%s</div>' % papers
                   if PAPERS else
                   '<div class="pgroup">全真模拟卷</div><div class="note">正在编写中。</div>')
    return """<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>WorkBuddy OPC 从业者认证 · 备考题库</title>
<style>%(engine)s%(set)s</style>
</head>
<body>
<header class="hero i18n-noloc">
  <div class="wrap">
    <div class="crumb"><a href="../index.html">← 返回题库总览</a></div>
    <h1>WorkBuddy 效率智能体 OPC 从业者认证</h1>
    <p class="sub">腾讯云官方认证 · 线上机考 · 90 分钟 · 70 分及格 · 备考练习题库</p>
    <div class="meta">
      <span class="chip">%(nmod)d 个模块 · %(npaper)d 套模拟卷 · 共 %(nall)d 题</span>
      <span class="chip grey">练习模式 + 模考模式</span>
      <span class="chip warn">自编题 · 非官方真题</span>
    </div>
  </div>
</header>
<main class="i18n-noloc">
  <div class="wrap">
    <div class="note">
      <b>先说清楚这份题库是什么</b>
      <ul>
        <li>腾讯<b>从未公开</b>这个认证的考试题库 —— 官方只公布了「11 个模块」的课程地图和考试规则。
            网上流传的「真题／题库」都是第三方自编的。</li>
        <li>所以这里全部题目都是<b>依据官方公开资料自编</b>的，作用是<b>覆盖知识点、查漏补缺</b>，
            不能指望押中原题。</li>
        <li>每道题的解析下面都标了<b>依据出处</b>（官方文档哪一节）。发现不对的可以直接找我改。</li>
      </ul>
    </div>
    <div class="pgroup">分模块练习（按官方课程地图）</div>
    <div class="pcards">%(mods)s</div>
    %(papers)s
  </div>
</main>
<footer class="i18n-noloc">
  <div class="wrap">
    <div>题目依据：WorkBuddy 官方文档 · 腾讯云 OPC 认证课程地图（11 模块）· 产品实测。
      · <a href="../index.html">返回题库总览</a></div>
  </div>
</footer>
</body>
</html>
""" % {
        "engine": QK.CSS, "set": SET_CSS, "mods": mods, "papers": paper_block,
        "nmod": len(MODULES), "npaper": len(PAPERS), "nall": n_all,
    }


def main():
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for u in MODULES:
        slug, html = page_unit(u)
        with open(os.path.join(OUT, slug + ".html"), "w", encoding="utf-8") as f:
            f.write(html)
        print("built %-10s %2d 题  %s" % (slug, len(u["items"]), u["title"]))
        n += len(u["items"])
    for u in PAPERS:
        slug, html = page_unit(u)
        with open(os.path.join(OUT, slug + ".html"), "w", encoding="utf-8") as f:
            f.write(html)
        print("built %-10s %2d 题  %s" % (slug, len(u["items"]), u["title"]))
        n += len(u["items"])
    with open(os.path.join(OUT, "index.html"), "w", encoding="utf-8") as f:
        f.write(page_index())
    print("built index.html（模块 %d + 模拟卷 %d，共 %d 题）" % (len(MODULES), len(PAPERS), n))


if __name__ == "__main__":
    main()
