import {gradeExam,isExamCorrect,readExamState} from './random-exam-state.mjs';
import type {ExamQuestion} from './random-exam-state.mjs';

const root=document.documentElement;
const key=root.dataset.examKey;
if (!key || !/^quiz:random-exam:[a-z-]+:(50|100):[a-f0-9]{8}$/i.test(key)) throw new Error('Invalid exam key');
const storageKey=key;
const nodes=[...document.querySelectorAll<HTMLElement>('.q[id]')];
const questions:ExamQuestion[]=nodes.map(q=>({id:q.dataset.n || '',answers:(q.dataset.ans || '').split(/[,|]/).map(s=>s.trim().toUpperCase()).filter(Boolean),fill:q.dataset.kind === 'fill'}));
function load() {
  try { return readExamState(localStorage.getItem(storageKey),questions,Date.now()); }
  catch { return readExamState(null,questions,Date.now()); }
}
let state=load();
function save():void {
  try { localStorage.setItem(storageKey,JSON.stringify({exam:state.exam,...state.answers})); }
  catch { notice.dataset.unsaved='true'; /* Drafts still work in memory when storage is unavailable. */ }
}
function text(id:string,value:string|number):void {
  const el=document.getElementById(id);
  if (el) el.textContent=String(value);
}
const copy={
  zh:{score:'得分率',expand:'展开全部解析',collapse:'收起全部解析',title:'随机考试',pending:'考试模式：交卷前不显示答案、对错或 AI 讲解。选择会自动保存，交卷前可修改。',submitted:'已交卷：可查看成绩、答案与 AI 讲解。作答已锁定；再随机一套可开始新考试。',answered:'已答',unanswered:'未作答',right:'答对了',wrong:'答错了',answer:'正确答案',confirm:'确定交卷？交卷后不能修改答案。',left:'题未作答',review:'查看试卷',wrongOnly:'查看错题',all:'显示全部',report:'查看成绩',submit:'交卷',unsaved:'当前浏览器无法保存进度，关闭页面后作答可能丢失。'},
  en:{score:'Score',expand:'Expand explanations',collapse:'Collapse explanations',title:'Random exam',pending:'Exam mode: answers, correctness and AI explanations stay hidden until submission. Choices save automatically and can be changed before submitting.',submitted:'Submitted: review your score, answers and AI explanations. Answers are locked; generate another paper to start a new exam.',answered:'Answered',unanswered:'Unanswered',right:'Correct',wrong:'Incorrect',answer:'Correct answer',confirm:'Submit this exam? Answers cannot be changed afterwards.',left:'questions unanswered',review:'Review paper',wrongOnly:'View mistakes',all:'Show all',report:'View score',submit:'Submit exam',unsaved:'This browser cannot save progress; closing the page may lose your answers.'},
  ja:{score:'得点率',expand:'解説をすべて開く',collapse:'解説をすべて閉じる',title:'ランダム試験',pending:'試験モード：提出までは解答・正誤・AI解説を表示しない。選択は自動保存され、提出前は変更できる。',submitted:'提出済み：成績・解答・AI解説を確認できる。回答は変更不可。新しい試験は別のセットを作成する。',answered:'回答済み',unanswered:'未回答',right:'正解',wrong:'不正解',answer:'正解',confirm:'提出する？提出後は回答を変更できない。',left:'問が未回答',review:'問題を確認',wrongOnly:'誤答を確認',all:'すべて表示',report:'成績を確認',submit:'提出',unsaved:'このブラウザーでは進捗を保存できない。ページを閉じると回答が失われる場合がある。'}
};
function words() { const lang=root.dataset.lang; return copy[lang === 'en' || lang === 'ja' ? lang : 'zh']; }
const notice=document.createElement('p'); notice.className='exam-notice i18n-noloc'; notice.setAttribute('role','status');
document.querySelector('.toolbar')?.before(notice);
const heading=document.querySelector('h1'); heading?.classList.add('i18n-noloc');
document.querySelector('.wrap > p.sub,.wrap > p.meta')?.classList.add('i18n-noloc');
const sheetSummary=document.createElement('span'); sheetSummary.className='i18n-noloc';
document.querySelector('#sheet .hd')?.append(sheetSummary);
document.querySelectorAll('.js-submit,.js-reveal,.js-redo,#btn-reset').forEach(el=>el.remove());
nodes.forEach((node,index)=>{
  const q=questions[index];
  const options=[...node.querySelectorAll<HTMLElement>('li.opt')];
  const group=node.querySelector('.opts');
  group?.setAttribute('role',q.answers.length > 1 ? 'group' : 'radiogroup');
  group?.setAttribute('aria-label',`Question ${q.id}`);
  function choose(option:HTMLElement):void {
    if (state.exam.submitted) return;
    const letter=option.dataset.letter;
    if (!letter) return;
    const previous=state.answers[q.id]?.s || [];
    const s=q.answers.length > 1 ? (previous.includes(letter) ? previous.filter(value=>value !== letter) : [...previous,letter]) : [letter];
    state.answers[q.id]={s,ok:null,revealed:false}; save(); render();
  }
  options.forEach(option=>{
    option.tabIndex=0; option.setAttribute('role',q.answers.length > 1 ? 'checkbox' : 'radio');
    option.addEventListener('click',()=>choose(option));
    option.addEventListener('keydown',event=>{
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); choose(option); }
    });
  });
  const input=node.querySelector<HTMLInputElement>('input.fill');
  input?.addEventListener('input',()=>{
    if (state.exam.submitted) return;
    state.answers[q.id]={s:[input.value.slice(0,2000)],ok:null,revealed:false}; save(); render();
  });
  node.querySelector('.js-next')?.addEventListener('click',()=>{
    const next=nodes.slice(index+1).find(el=>el.offsetParent !== null);
    next?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'start'});
  });
});
function render():void {
  const submitted=state.exam.submitted, c=words();
  root.dataset.examStatus=submitted ? 'submitted' : 'pending';
  if (!submitted) { document.body.classList.remove('only-wrong'); document.getElementById('mask')?.classList.remove('open'); }
  const answered=questions.filter(q=>state.answers[q.id]?.s.some(value=>value.trim())).length;
  const result=submitted ? gradeExam(questions,state) : null;
  const title=`${root.dataset.examTitle} · ${c.title} ${questions.length}`;
  if (heading) heading.textContent=title;
  document.title=title;
  const intro=document.querySelector('.wrap > p.sub,.wrap > p.meta');
  if (intro instanceof HTMLElement) intro.hidden=true;
  notice.textContent=(submitted ? c.submitted : c.pending)+(notice.dataset.unsaved ? ' '+c.unsaved : '');
  text('s-done',answered); text('s-ok',result?.correct || 0); text('s-bad',result?.wrong || 0); text('s-pct',result ? result.percent+'%' : '—');
  const score=document.getElementById('s-pct'), metric=score?.parentElement;
  if (metric && score) { metric.classList.add('i18n-noloc'); metric.replaceChildren(document.createTextNode(c.score+' '),score); }
  const fill=document.getElementById('s-fill'); if (fill) fill.style.width=(answered/questions.length*100)+'%';
  sheetSummary.textContent=`${c.answered} ${answered}/${questions.length}`;
  sheetSummary.hidden=submitted;
  text('sh-done',answered); text('sh-ok',result?.correct || 0); text('sh-bad',result?.wrong || 0);
  const grid=document.querySelector('#sheet .grid'); grid?.replaceChildren();
  nodes.forEach((node,index)=>{
    const q=questions[index], s=state.answers[q.id]?.s || [], attempted=s.some(value=>value.trim());
    const correct=submitted && isExamCorrect(q,s);
    node.classList.toggle('done',submitted); node.classList.toggle('wrong',submitted && !correct);
    node.querySelectorAll<HTMLElement>('li.opt').forEach(option=>{
      const letter=option.dataset.letter || '', chosen=s.includes(letter), right=q.answers.includes(letter);
      option.classList.remove('sel','ok','bad','miss');
      if (submitted) { if (chosen) option.classList.add(right ? 'ok' : 'bad'); else if (right) option.classList.add('miss'); }
      else if (chosen) option.classList.add('sel');
      option.setAttribute('aria-checked',String(chosen)); option.setAttribute('aria-disabled',String(submitted));
    });
    const input=node.querySelector<HTMLInputElement>('input.fill');
    if (input) { if (input.value !== (s[0] || '')) input.value=s[0] || ''; input.disabled=submitted; input.classList.toggle('ok',correct); input.classList.toggle('bad',submitted && !correct); }
    node.querySelectorAll<HTMLDetailsElement>('details.ans').forEach(panel=>{ if (!submitted) panel.open=false; });
    let verdict=node.querySelector<HTMLElement>('.verdict');
    if (!verdict) { verdict=document.createElement('div'); verdict.className='verdict'; node.querySelector('.qact')?.after(verdict); }
    verdict.setAttribute('role','status'); verdict.classList.toggle('show',submitted);
    verdict.textContent=submitted ? `${correct ? '✓ '+c.right : attempted ? '✗ '+c.wrong : c.unanswered} · ${c.answer}: ${q.answers.join(', ')}` : '';
    const anchor=document.createElement('a'); anchor.href='#'+node.id; anchor.textContent=String(index+1);
    anchor.setAttribute('aria-label',`${index+1}: ${attempted ? c.answered : c.unanswered}`);
    if (submitted) anchor.className=correct ? 'ok' : 'bad'; else if (attempted) anchor.className='exam-answered';
    grid?.append(anchor);
  });
  const report=document.getElementById('btn-report'); if (report) { report.classList.add('i18n-noloc'); report.textContent=submitted ? c.report : c.submit; }
  for (const id of ['rp-close','rp-retry','btn-wrong']) document.getElementById(id)?.classList.add('i18n-noloc');
  text('rp-close',c.review); text('rp-retry',c.wrongOnly);
  text('btn-wrong',document.body.classList.contains('only-wrong') ? c.all : c.wrongOnly);
  updateExpandLabel();
  const toolbar=document.querySelector('.toolbar');
  if (toolbar) root.style.setProperty('--tb',Math.round(toolbar.getBoundingClientRect().height)+'px');
}
function showReport():void {
  const result=gradeExam(questions,state);
  for (const [id,value] of [['rp-pct',result.percent+'%'],['rp-done',result.answered],['rp-ok',result.correct],['rp-bad',result.wrong],['rp-left',result.unanswered]] as const) text(id,value);
  const seconds=Math.max(0,Math.floor(((state.exam.submittedAt || Date.now())-state.exam.startedAt)/1000));
  text('rp-time',[Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(value=>String(value).padStart(2,'0')).join(':'));
  document.getElementById('mask')?.classList.add('open');
}
document.getElementById('btn-report')?.addEventListener('click',()=>{
  if (!state.exam.submitted) {
    const c=words(), left=questions.filter(q=>!state.answers[q.id]?.s.some(value=>value.trim())).length;
    if (!confirm(`${left ? left+' '+c.left+'\n' : ''}${c.confirm}`)) return;
    state.exam.submitted=true; state.exam.submittedAt=Date.now();
    for (const q of questions) { const s=state.answers[q.id]?.s || []; state.answers[q.id]={s,ok:isExamCorrect(q,s),revealed:false}; }
    save(); render(); document.dispatchEvent(new Event('quizbank:exam-submitted'));
  }
  showReport();
});
document.getElementById('rp-close')?.addEventListener('click',()=>document.getElementById('mask')?.classList.remove('open'));
document.getElementById('mask')?.addEventListener('click',event=>{ if ((event.target as HTMLElement).id === 'mask') document.getElementById('mask')?.classList.remove('open'); });
function wrongOnly():void { if (!state.exam.submitted) return; document.body.classList.toggle('only-wrong'); render(); }
document.getElementById('btn-wrong')?.addEventListener('click',wrongOnly);
document.getElementById('rp-retry')?.addEventListener('click',()=>{ document.getElementById('mask')?.classList.remove('open'); document.body.classList.remove('only-wrong'); wrongOnly(); });
function updateExpandLabel():void {
  document.getElementById('btn-expand')?.classList.add('i18n-noloc');
  text('btn-expand',[...document.querySelectorAll<HTMLDetailsElement>('details.ans')].some(panel=>!panel.open) ? words().expand : words().collapse);
}
document.getElementById('btn-expand')?.addEventListener('click',()=>{
  if (!state.exam.submitted) return;
  const panels=[...document.querySelectorAll<HTMLDetailsElement>('details.ans')], open=panels.some(panel=>!panel.open);
  panels.forEach(panel=>{panel.open=open;});
  updateExpandLabel();
});
document.getElementById('btn-sheet')?.addEventListener('click',()=>document.getElementById('sheet')?.classList.toggle('open'));
document.getElementById('sh-close')?.addEventListener('click',()=>document.getElementById('sheet')?.classList.remove('open'));
document.addEventListener('quizbank:language-changed',render);
function restore():void {
  state=load(); render();
  document.dispatchEvent(new Event('quizbank:exam-state-changed'));
}
window.addEventListener('quizbank:progress-updated',restore);
window.addEventListener('storage',event=>{if (event.key === storageKey || event.key === null) restore();});
window.addEventListener('resize',()=>{const toolbar=document.querySelector('.toolbar');if (toolbar) root.style.setProperty('--tb',Math.round(toolbar.getBoundingClientRect().height)+'px');});
save(); render();
