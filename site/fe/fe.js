(function(){
"use strict";
var subject=document.body.getAttribute("data-subject");
var params=new URLSearchParams(location.search);
var requested=Number(params.get("year"));
var year=[2022,2023,2024,2025,2026].indexOf(requested)>=0?requested:2026;
var key="quiz:fe:"+subject+":"+year;
var app=document.getElementById("app");
var nav=document.getElementById("years");
var current=0,chosen=null,exam=null,state={},storageError=false;

function node(tag,className,content){
  var el=document.createElement(tag);
  if(className)el.className=className;
  if(content!==undefined)el.textContent=content;
  return el;
}
function link(label,url){
  var a=node("a","",label);a.href=url;a.target="_blank";a.rel="noopener noreferrer";return a;
}
function readState(){
  try{var saved=JSON.parse(localStorage.getItem(key)||"{}");return saved&&typeof saved==="object"?saved:{}}catch(e){return {}}
}
function saveState(){try{localStorage.setItem(key,JSON.stringify(state))}catch(e){storageError=true}}
function yearNav(){
  [2026,2025,2024,2023,2022].forEach(function(y){
    var count=y===2022?(subject==="a"?60:20):(subject==="a"?20:6);
    var a=node("a","",y+(y===2022?" 官方样题":" 年度公开题")+" · "+count+" 题");
    a.href=subject+".html?year="+y;
    if(y===year)a.setAttribute("aria-current","page");
    nav.appendChild(a);
  });
}
function score(){
  var done=0,correct=0;
  exam.questions.forEach(function(q){var r=state[q.number];if(r&&typeof r.ok==="boolean"){done++;if(r.ok)correct++}});
  return {done:done,correct:correct};
}
function render(){
  var q=exam.questions[current],record=state[q.number];
  chosen=record&&record.selected?record.selected:null;
  app.replaceChildren();
  var article=node("article","panel");
  var heading=node("div","question-head");
  var titleBox=node("div");
  titleBox.appendChild(node("h2","","第 "+q.number+" 题 · "+year+(exam.kind==="sample"?" 年官方样题":" 年度")+" 科目 "+subject.toUpperCase()));
  titleBox.appendChild(node("p","","请阅读原题页中的「問"+q.number+"」，再选择答案。"));
  heading.appendChild(titleBox);article.appendChild(heading);
  var sources=node("div","source-links");
  sources.appendChild(link("IPA 官方来源页 ↗",exam.sourcePage));
  sources.appendChild(link("题目原 PDF ↗",exam.questionPdf+"#page="+q.pages[0]));
  sources.appendChild(link("官方答案 PDF ↗",exam.answerPdf));
  article.appendChild(sources);
  article.appendChild(node("p","source-credit",exam.sourceAttribution));
  q.images.forEach(function(src,i){
    var fig=node("figure","sheet");fig.style.margin="0 0 12px";
    var enlarged=link("",src);enlarged.setAttribute("aria-label","在新标签放大第 "+q.pages[i]+" 页题面");
    var img=node("img");img.src=src;img.alt=year+" 年度科目 "+subject.toUpperCase()+" 第 "+q.number+" 题，官方 PDF 第 "+q.pages[i]+" 页";
    img.loading="lazy";enlarged.appendChild(img);fig.appendChild(enlarged);
    fig.appendChild(node("figcaption","","点击题页可放大 · IPA 原题第 "+q.pages[i]+" 页 · © "+year+" IPA"));
    article.appendChild(fig);
  });
  var answer=node("div","answer");
  answer.appendChild(node("h3","","选择答案"));
  var options=node("div","options");options.setAttribute("role","group");options.setAttribute("aria-label","第 "+q.number+" 题选项");
  q.options.forEach(function(label){
    var button=node("button","option",label);button.type="button";
    button.setAttribute("aria-pressed",String(chosen===label));
    if(record){
      button.disabled=true;
      if(label===q.answer)button.classList.add("correct");
      else if(label===record.selected)button.classList.add("wrong");
    }else{
      button.addEventListener("click",function(){chosen=label;Array.prototype.forEach.call(options.children,function(other){other.setAttribute("aria-pressed",String(other===button))});submit.disabled=false});
    }
    options.appendChild(button);
  });
  answer.appendChild(options);
  var actions=node("div","actions");
  var submit=node("button","primary","确认作答");submit.type="button";submit.disabled=!!record;
  submit.addEventListener("click",function(){
    if(!chosen||state[q.number])return;
    state[q.number]={selected:chosen,ok:chosen===q.answer};
    saveState();render();
  });
  actions.appendChild(submit);
  if(current>0){var prev=node("button","secondary","← 上一题");prev.type="button";prev.addEventListener("click",function(){current--;render();window.scrollTo(0,0)});actions.appendChild(prev)}
  if(current<exam.questions.length-1){var next=node("button","secondary","下一题 →");next.type="button";next.addEventListener("click",function(){current++;render();window.scrollTo(0,0)});actions.appendChild(next)}
  answer.appendChild(actions);
  var result=node("p","result"," ");result.setAttribute("role","status");
  if(record){result.textContent=(record.ok?"回答正确":"回答错误")+" · 官方答案："+q.answer;result.classList.add(record.ok?"ok":"bad")}
  answer.appendChild(result);article.appendChild(answer);app.appendChild(article);
  var side=node("aside","panel sidebar");var s=score();
  side.appendChild(node("h2","","本卷进度"));
  side.appendChild(node("p","",s.done+" / "+exam.questions.length+" 题已作答 · "+s.correct+" 题正确"));
  var grid=node("div","question-nav");grid.setAttribute("aria-label","题目导航");
  exam.questions.forEach(function(item,index){
    var b=node("button","",String(item.number));b.type="button";
    if(index===current){b.classList.add("current");b.setAttribute("aria-current","true")}
    if(state[item.number])b.classList.add(state[item.number].ok?"done":"missed");
    b.setAttribute("aria-label","第 "+item.number+" 题"+(state[item.number]?state[item.number].ok?"，正确":"，错误":"，未作答"));
    b.addEventListener("click",function(){current=index;render();window.scrollTo(0,0)});grid.appendChild(b);
  });
  side.appendChild(grid);
  side.appendChild(node("p","fine","绿色 = 正确，红色 = 错误。进度只保存在本机浏览器；不同年度及科目互不混合。"));
  if(storageError)side.appendChild(node("p","error","浏览器拒绝保存进度，本次作答在关闭页面后可能丢失。"));
  app.appendChild(side);
}
yearNav();
fetch("data.json").then(function(response){if(!response.ok)throw Error("HTTP "+response.status);return response.json()}).then(function(data){
  exam=data.sets[year+"-"+subject];if(!exam)throw Error("找不到该卷");
  state=readState();
  var intro=document.getElementById("exam-intro");
  var subtitle=document.getElementById("exam-sub");
  if(exam.kind==="sample"){
    intro.textContent="这是 IPA 于 2022 年发布的新制科目 "+subject.toUpperCase()+" 官方样题（"+exam.questions.length+" 题），并非 2022 年旧制考试的实考卷。题目为日文原文，按原题号作答。";
    subtitle.textContent="2022 年官方样题 · "+exam.questions.length+" 题";
  }else{
    intro.textContent="这是 IPA "+year+" 年度公开的 "+exam.questions.length+" 道科目 "+subject.toUpperCase()+" 实考题，仅为部分试题；实际考试为 "+(subject==="a"?60:20)+" 题。本卷不是完整考试卷。";
    subtitle.textContent=year+" 年度公开题 · "+exam.questions.length+" 题";
  }
  var notation=document.getElementById("notation-link");if(notation)notation.href=exam.questionPdf+"#page=2";
  render();
}).catch(function(error){
  app.replaceChildren(node("div","panel error","题库加载失败："+error.message+"。请刷新页面重试。"));
});
})();
