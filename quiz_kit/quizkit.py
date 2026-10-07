# -*- coding: utf-8 -*-
"""共用答题引擎：交互 CSS / JS / 面板片段。
TOEIC 与 AWS 两个生成器复用同一份，保证做题体验一致。

交互流程（对齐日式题库）：
  点选项 → 「确认作答」→ 立即判定 + 显示正解与解析 → 「下一题 ↓」
  另有「直接看答案」（不计入正确率）、「重做本题」、答题卡、只看错题、交卷成绩单。
"""
import html as _html


def esc(t):
    return _html.escape(t or "")


CSS = r"""
/* ===================== 答题引擎（共用） ===================== */
li.opt{position:relative;cursor:pointer;-webkit-tap-highlight-color:transparent;
 transition:background .12s ease,border-color .12s ease}
@media (hover:hover){.q:not(.done) li.opt:hover{border-color:#98b0c6;background:#f7fbfd}}
.q.done li.opt{cursor:default}
li.opt.sel{border-color:#4a7fb5;background:#eef5fc}
li.opt.ok{border-color:#0b7a44;background:#eaf7ef}
li.opt.ok .letter{background:#0b7a44;color:#fff;border-color:#0b7a44}
li.opt.bad{border-color:#c0392b;background:#fdeeed}
li.opt.bad .letter{background:#c0392b;color:#fff;border-color:#c0392b}
li.opt.miss{border-color:#c98a00;background:#fff8e6}
li.opt.miss .letter{border-color:#c98a00;color:#a06b00}
li.opt::after{margin-left:auto;font-weight:700;font-size:15px;align-self:center;flex:0 0 auto}
li.opt.ok::after{content:"✓";color:#0b7a44}
li.opt.bad::after{content:"✗";color:#c0392b}
li.opt.miss::after{content:"正解";font-size:11px;color:#a06b00}

/* 锚点定位避开 sticky 工具栏（高度由 JS 实测写入 --tb） */
.q{scroll-margin-top:calc(var(--tb,110px) + 16px)}

/* 窄屏收紧 */
@media (max-width:560px){
  .toolbar{padding:8px 0 9px!important}
  .toolbar .btns{gap:6px!important}
  .toolbar button{font-size:12px!important;padding:5px 10px!important}
  .qbar{font-size:12px;gap:4px 12px}
  .pbar{flex:1 1 100%;height:5px}
  .q{padding:16px 15px!important}
}

/* 题目操作区 */
.qact{display:flex;gap:8px;flex-wrap:wrap;margin-top:11px;align-items:center}
.qact button{font:inherit;font-size:13px;padding:7px 15px;border-radius:8px;
 border:1px solid #cbd5e1;background:#fff;color:#334155;cursor:pointer}
.qact button:hover{background:#f1f5f9}
.qact button.primary{background:#0b6b3a;border-color:#0b6b3a;color:#fff}
.qact button.primary:hover{background:#0a5d33}
.qact button.primary:disabled{background:#ccd5db;border-color:#ccd5db;cursor:not-allowed}
.qact .js-redo,.qact .js-next{display:none}
.q.done .js-redo,.q.done .js-next{display:inline-block}
.q.done .js-submit,.q.done .js-reveal,.q.done .need{display:none}
.qact .need{font-size:12px;color:#a06b00;background:#fff8e6;border:1px solid #f0dca8;border-radius:6px;padding:3px 9px}

/* 判定提示 */
.verdict{display:none;margin:10px 0 0;font-size:13.5px}
.verdict.show{display:block}
.verdict .line{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.v-ok{color:#0b7a44;font-weight:700}
.v-bad{color:#c0392b;font-weight:700}
.v-key{color:#5b6570}
.v-key b{color:#111;font-size:15px}

/* 顶部统计条 */
.qbar{display:flex;flex-wrap:wrap;align-items:center;gap:5px 16px;font-size:13px;color:#5b6570;width:100%}
.qbar b{color:#111;font-variant-numeric:tabular-nums}
.qbar b.ok{color:#0b7a44}
.qbar b.bad{color:#c0392b}
.pbar{flex:1 1 110px;height:6px;background:#e6ebef;border-radius:99px;overflow:hidden;min-width:80px}
.pbar i{display:block;height:100%;width:0;background:#0b7a44;transition:width .25s ease}
body.only-wrong .q:not(.wrong){display:none}
button.on{background:#0b6b3a!important;color:#fff!important;border-color:#0b6b3a!important}

/* 答题卡浮层 */
.sheet{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #dfe5ea;
 box-shadow:0 -4px 18px rgba(0,0,0,.10);padding:12px 16px 16px;z-index:40;
 transform:translateY(115%);transition:transform .22s ease}
.sheet.open{transform:translateY(0)}
.sheet .hd{display:flex;align-items:center;gap:14px;font-size:13px;color:#5b6570;margin-bottom:9px;flex-wrap:wrap}
.sheet .hd b{color:#111}
.sheet .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(38px,1fr));gap:6px;max-height:38vh;overflow:auto}
.sheet .grid a{display:block;text-align:center;padding:6px 0;border:1px solid #dfe5ea;border-radius:7px;
 font-size:12px;text-decoration:none;color:#334155;background:#fff;font-variant-numeric:tabular-nums}
.sheet .grid a.ok{background:#eaf7ef;border-color:#0b7a44;color:#0b7a44;font-weight:700}
.sheet .grid a.bad{background:#fdeeed;border-color:#c0392b;color:#c0392b;font-weight:700}

/* ===================== 手写填空（fill） ===================== */
.q[data-kind="fill"] .fillrow{display:flex;align-items:center;gap:10px;margin-top:11px;flex-wrap:wrap}
.q[data-kind="fill"] input.fill{font:inherit;font-size:15px;padding:8px 13px;border:1px solid #cbd5e1;
 border-radius:8px;min-width:230px;max-width:100%;background:#fff;color:#0f172a}
.q[data-kind="fill"] input.fill:focus{outline:none;border-color:#4a7fb5;box-shadow:0 0 0 3px rgba(74,127,181,.15)}
.q[data-kind="fill"].done input.fill{background:#f1f5f9;color:#334155}
.q[data-kind="fill"] input.fill.ok{border-color:#0b7a44;background:#eaf7ef;color:#0b5130;font-weight:600}
.q[data-kind="fill"] input.fill.bad{border-color:#c0392b;background:#fdeeed;color:#8f2c20}
.q[data-kind="fill"] .flabel{font-size:12px;color:#8b95a1}
@media (max-width:560px){.q[data-kind="fill"] input.fill{min-width:0;width:100%}}

/* 交卷成绩单 */
.mask{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(15,23,42,.45);display:none;
 align-items:center;justify-content:center;z-index:60;padding:18px}
.mask.open{display:flex}
.report{background:#fff;border-radius:14px;max-width:390px;width:100%;padding:22px 24px;
 box-shadow:0 12px 40px rgba(0,0,0,.25);max-height:88vh;overflow:auto}
.report h3{margin:0;font-size:17px;color:#0f172a}
.report .big{font-size:42px;font-weight:800;color:#0b6b3a;line-height:1.15;margin:4px 0 2px;font-variant-numeric:tabular-nums}
.report table{width:100%;border-collapse:collapse;font-size:13.5px;margin:12px 0 18px}
.report td{padding:6px 0;border-bottom:1px solid #eef2f5;color:#475569}
.report td:last-child{text-align:right;font-weight:700;color:#111;font-variant-numeric:tabular-nums}
.report .row{display:flex;gap:9px;justify-content:flex-end;flex-wrap:wrap}
.report button{font:inherit;font-size:13.5px;padding:8px 16px;border-radius:8px;border:1px solid #0b6b3a;background:#0b6b3a;color:#fff;cursor:pointer}
.report button.ghost{background:#fff;color:#0b6b3a}

@media print{
 .qbar,.sheet,.mask,.verdict,.qact,button.redo{display:none!important}
 li.opt{border:1px solid #ccc!important;background:#fff!important}
 li.opt.ok,li.opt.bad,li.opt.miss{background:#fff!important}
 body.only-wrong .q:not(.wrong){display:block}
}
"""


def bar_html(total):
    """顶部统计条（放进 toolbar）。"""
    return (
        '<div class="qbar">'
        '<span>已答 <b id="s-done">0</b>/<b>' + str(total) + '</b></span>'
        '<span>正确 <b id="s-ok" class="ok">0</b></span>'
        '<span>错误 <b id="s-bad" class="bad">0</b></span>'
        '<span>正确率 <b id="s-pct">—</b></span>'
        '<span class="pbar"><i id="s-fill"></i></span>'
        '</div>'
    )


def verdict_html(expl_link=""):
    """每题判定提示占位；expl_link 为可选的解析锚点（留空则无）。"""
    return '<div class="verdict"></div>'


def act_html(need=0):
    """题目操作区按钮。need>1 时提示多选需选几项。"""
    hint = f'<span class="need">多选 · 需选 {need} 项</span>' if need > 1 else ''
    return (
        '<div class="qact">'
        '<button class="primary js-submit" type="button" disabled>确认作答</button>'
        '<button class="js-reveal" type="button">直接看答案</button>'
        '<button class="js-redo" type="button">重做本题</button>'
        '<button class="js-next" type="button">下一题 ↓</button>'
        + hint +
        '</div>'
    )


def sheet_html(total):
    """答题卡浮层 + 交卷成绩单。"""
    return '''<div class="sheet" id="sheet">
  <div class="hd"><span><b>答题卡</b></span>
    <span>已答 <b id="sh-done">0</b> · 正确 <b id="sh-ok">0</b> · 错误 <b id="sh-bad">0</b></span>
    <button class="redo" id="sh-close" type="button" style="margin-left:auto">收起</button>
  </div>
  <div class="grid"></div>
</div>
<div class="mask" id="mask" role="dialog" aria-label="成绩单">
  <div class="report">
    <h3>本份成绩</h3>
    <div class="big" id="rp-pct">0%</div>
    <table>
      <tr><td>已作答</td><td id="rp-done">0</td></tr>
      <tr><td>答对</td><td id="rp-ok">0</td></tr>
      <tr><td>答错</td><td id="rp-bad">0</td></tr>
      <tr><td>未作答</td><td id="rp-left">0</td></tr>
      <tr><td>用时</td><td id="rp-time">—</td></tr>
    </table>
    <div class="row"><button id="rp-close">继续答题</button><button class="ghost" id="rp-retry">只练错题</button></div>
  </div>
</div>'''


_JS = r"""
(function(){
"use strict";
var KEY="quiz:__STORE__";
var TOTAL=__TOTAL__;
var S={};
try{S=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){S={}}
var TKEY=KEY+":t0";
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function q1(s,r){return (r||document).querySelector(s)}
function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function setTxt(id,v){var e=document.getElementById(id);if(e)e.textContent=v}
var QS=qa(".q");
function nOf(q){return q.getAttribute("data-n")}
/* 答案分隔：多选用 ","，填空的等价写法用 "|"（两种都支持） */
function ansOf(q){return (q.getAttribute("data-ans")||"").split(/[,|]/).map(function(x){return x.trim().toUpperCase()}).filter(Boolean)}
function norm(s){return String(s==null?"":s).replace(/\s+/g," ").trim().toUpperCase()}
function isFill(q){return q.getAttribute("data-kind")==="fill"}
function fillInput(q){return q1("input.fill",q)}

/* 让"下一题"滚动后不被 sticky 工具栏遮住 */
function fitTop(){
  var tb=q1(".toolbar");
  var h=tb?Math.round(tb.getBoundingClientRect().height):0;
  if(h)document.documentElement.style.setProperty("--tb",h+"px");
}

/* ---------- 渲染 ---------- */
function paint(q){
  var rec=S[nOf(q)]||null;
  var A=ansOf(q), sel=rec?rec.s:[];
  var judged=!!(rec&&rec.ok!==null), revealed=!!(rec&&rec.revealed);
  var locked=judged||revealed;

  qa("li.opt",q).forEach(function(li){
    var L=(li.getAttribute("data-letter")||"").toUpperCase();
    li.classList.remove("sel","ok","bad","miss");
    var chosen=sel.indexOf(L)>=0, right=A.indexOf(L)>=0;
    if(revealed){
      if(right)li.classList.add("miss");
      else if(chosen)li.classList.add("sel");
    }else if(judged){
      if(chosen&&right)li.classList.add("ok");
      else if(chosen)li.classList.add("bad");
      else if(right)li.classList.add("miss");
    }else if(chosen)li.classList.add("sel");
  });

  /* 填空题：复原/锁定输入框 */
  var inp=q1("input.fill",q);
  if(inp){
    if(locked){ if(inp.value!==(sel[0]||""))inp.value=sel[0]||""; }
    inp.disabled=locked;
    inp.classList.remove("ok","bad");
    if(judged)inp.classList.add(rec.ok?"ok":"bad");
  }

  q.classList.toggle("done",locked);
  q.classList.toggle("wrong",judged&&!rec.ok);

  var sub=q1(".js-submit",q);
  if(sub)sub.disabled = isFill(q) ? !norm(sel[0]||"") : sel.length === 0;

  var v=q1(".verdict",q);
  if(v){
    if(judged){
      var tip=(A.length>1&&!rec.ok&&!isFill(q))
        ?'<span class="v-key">本题需选 '+A.length+' 项，你选了 '+(rec.s||[]).length+' 项</span>':'';
      v.innerHTML='<div class="line">'+(rec.ok
        ?'<span class="v-ok">✓ 答对了</span>'
        :'<span class="v-bad">✗ 答错了</span><span class="v-key">正确答案 <b>'+A.join(", ")+'</b></span>'+tip)
        +'</div>';
      v.classList.add("show");
    }else if(revealed){
      v.innerHTML='<div class="line"><span class="v-key">已直接查看答案：<b>'+A.join(", ")+'</b></span></div>';
      v.classList.add("show");
    }else{v.classList.remove("show");v.innerHTML=""}
  }
  if(locked){var d=q1("details.ans",q);if(d)d.open=true}
}

/* ---------- 判定 ---------- */
function doJudge(q,sel){
  var A=ansOf(q),ok;
  if(isFill(q)){var v=norm(sel[0]||"");ok=(v!==""&&A.indexOf(v)>=0);}
  else{ok=sel.length===A.length&&sel.every(function(x){return A.indexOf(x)>=0});}
  S[nOf(q)]={s:sel.slice(),ok:ok,revealed:false};
  try{if(!localStorage.getItem(TKEY))localStorage.setItem(TKEY,String(Date.now()))}catch(e){}
  save();paint(q);stats();sheet();
}
function doReveal(q){
  S[nOf(q)]={s:[],ok:null,revealed:true};
  save();paint(q);stats();sheet();
}
function doRedo(q){delete S[nOf(q)];save();paint(q);stats();sheet();}
function doNext(q){
  var vis=QS.filter(function(x){return x.offsetParent!==null});
  var i=vis.indexOf(q);
  var t=vis[i+1];
  if(t)t.scrollIntoView({behavior:"smooth",block:"start"});
}

/* ---------- 选择 ---------- */
function onPick(li){
  var q=li.closest(".q");if(!q)return;
  var rec=S[nOf(q)];
  if(rec&&(rec.ok!==null||rec.revealed))return;
  var A=ansOf(q),L=(li.getAttribute("data-letter")||"").toUpperCase();
  var cur=(rec&&rec.s)?rec.s.slice():[];
  if(A.length>1){var i=cur.indexOf(L);if(i>=0)cur.splice(i,1);else cur.push(L);}
  else cur=[L];
  S[nOf(q)]={s:cur,ok:null,revealed:false};
  save();paint(q);
}

/* ---------- 统计 ---------- */
function tally(){
  var d=0,o=0;
  QS.forEach(function(q){
    var r=S[nOf(q)];
    if(r&&r.ok!==null&&!r.revealed){d++;if(r.ok)o++}
  });
  return[d,o,d-o];
}
function stats(){
  var t=tally(),d=t[0],o=t[1],b=t[2];
  setTxt("s-done",d);setTxt("s-ok",o);setTxt("s-bad",b);
  setTxt("s-pct",d?Math.round(o/d*100)+"%":"—");
  var f=q1("#s-fill");if(f)f.style.width=(TOTAL?d/TOTAL*100:0)+"%";
}
function sheet(){
  var g=q1("#sheet .grid");if(!g)return;
  var html="";
  QS.forEach(function(q,i){
    var r=S[nOf(q)];
    var cls=(r&&r.ok!==null&&!r.revealed)?(r.ok?' class="ok"':' class="bad"'):"";
    html+='<a href="#'+q.id+'"'+cls+'>'+(i+1)+'</a>';
  });
  g.innerHTML=html;
  var t=tally();setTxt("sh-done",t[0]);setTxt("sh-ok",t[1]);setTxt("sh-bad",t[2]);
}
function report(){
  var t=tally(),d=t[0],o=t[1],b=t[2];
  setTxt("rp-pct",(d?Math.round(o/d*100):0)+"%");
  setTxt("rp-done",d);setTxt("rp-ok",o);setTxt("rp-bad",b);setTxt("rp-left",TOTAL-d);
  var t0=null;try{t0=localStorage.getItem(TKEY)}catch(e){}
  var used="—";
  if(t0){var s=Math.max(0,Math.round((Date.now()-(+t0))/1000));used=Math.floor(s/60)+" 分 "+(s%60)+" 秒";}
  setTxt("rp-time",used);
  var m=q1("#mask");if(m)m.classList.add("open");
}
function reset(){
  if(!confirm("清空本份全部作答记录？此操作不可撤销。"))return;
  S={};save();
  try{localStorage.removeItem(TKEY)}catch(e){}
  QS.forEach(paint);stats();sheet();
}

/* ---------- 事件（委托） ---------- */
document.addEventListener("click",function(ev){
  var t=ev.target;if(!t||!t.closest)return;
  var li=t.closest("li.opt");
  if(li){onPick(li);return}
  var q=null;
  if(t.closest(".js-submit")){q=t.closest(".q");var rec=S[nOf(q)];if(q&&rec&&rec.ok===null&&!rec.revealed)doJudge(q,rec.s||[]);return}
  if(t.closest(".js-reveal")){q=t.closest(".q");if(q)doReveal(q);return}
  if(t.closest(".js-redo")){q=t.closest(".q");if(q)doRedo(q);return}
  if(t.closest(".js-next")){q=t.closest(".q");if(q)doNext(q);return}
  if(t.id==="mask"){t.classList.remove("open");return}
});
document.addEventListener("keydown",function(ev){
  if(ev.key!=="Enter")return;
  var q=null;
  var ae=document.activeElement;
  if(ae&&ae.closest)q=ae.closest(".q");
  if(!q)return;
  var rec=S[nOf(q)];
  if(q&&rec&&rec.ok===null&&!rec.revealed)doJudge(q,rec.s||[]);
});
/* 填空题输入：只存值、点亮"确认作答"，不重绘以免打断光标 */
document.addEventListener("input",function(ev){
  var el=ev.target;
  if(!el||!el.classList||!el.classList.contains("fill"))return;
  var q=el.closest(".q");if(!q)return;
  var rec=S[nOf(q)];
  if(rec&&(rec.ok!==null||rec.revealed))return;
  S[nOf(q)]={s:[el.value],ok:null,revealed:false};
  save();
  var sub=q1(".js-submit",q);if(sub)sub.disabled=!norm(el.value);
});
function bind(id,fn){var e=document.getElementById(id);if(e)e.addEventListener("click",fn)}
bind("btn-sheet",function(){var s=q1("#sheet");if(s)s.classList.toggle("open")});
bind("sh-close",function(){var s=q1("#sheet");if(s)s.classList.remove("open")});
bind("btn-report",report);
bind("rp-close",function(){var m=q1("#mask");if(m)m.classList.remove("open")});
bind("rp-retry",function(){
  var m=q1("#mask");if(m)m.classList.remove("open");
  document.body.classList.add("only-wrong");
  var b=document.getElementById("btn-wrong");if(b){b.classList.add("on");b.textContent="显示全部"}
  stats();
});
bind("btn-wrong",function(){
  document.body.classList.toggle("only-wrong");
  this.classList.toggle("on");
  this.textContent=document.body.classList.contains("only-wrong")?"显示全部":"只看错题";
});
bind("btn-reset",reset);
bind("btn-expand",function(){
  var ds=qa("details.ans");
  var anyClosed=ds.some(function(d){return !d.open});
  ds.forEach(function(d){d.open=anyClosed});
  this.textContent=anyClosed?"收起全部解析":"展开全部解析";
});

QS.forEach(paint);
fitTop();
window.addEventListener("resize",fitTop);
stats();sheet();
})();
"""


def js(store, total):
    """返回带 store key 与题量的 <script> 块。"""
    body = _JS.replace("__STORE__", store).replace("__TOTAL__", str(total))
    return "<script>" + body + "</script>"


# ---------------- 首页进度（跨份汇总） ----------------
IDX_JS = r"""
(function(){
"use strict";
function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
qa("[data-quiz-key]").forEach(function(el){
  var key="quiz:"+el.getAttribute("data-quiz-key");
  var total=parseInt(el.getAttribute("data-quiz-total")||"0",10);
  var S={};
  try{S=JSON.parse(localStorage.getItem(key)||"{}")||{}}catch(e){S={}}
  var d=0,o=0;
  Object.keys(S).forEach(function(k){
    var r=S[k];
    if(r&&r.ok!==null&&!r.revealed){d++;if(r.ok)o++}
  });
  var bar=el.querySelector(".pg i"),txt=el.querySelector(".pg span");
  if(bar)bar.style.width=(total?d/total*100:0)+"%";
  if(txt)txt.textContent=d?(d+"/"+total+" · 正确率 "+Math.round(o/d*100)+"%"):"未开始";
  if(d){var c=el.querySelector(".pg");if(c)c.classList.add("on")}
});
})();
"""


def index_script():
    return "<script>" + IDX_JS + "</script>"


IDX_CSS = r"""
/* 进度条与文字分层：.pg 不设固定高度，否则会裁掉下面的文字 */
a.card .pg{position:relative;margin-top:9px}
a.card .pg::before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:#e9eef2;border-radius:99px}
a.card .pg i{position:relative;display:block;height:5px;width:0;background:#0b6b3a;border-radius:99px;transition:width .3s}
a.card .pg span{display:block;font-size:12px;color:#8b95a1;margin-top:6px}
a.card .pg.on span{color:#0b6b3a;font-weight:600}
"""
