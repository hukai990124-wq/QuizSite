const WEEK_MS=604800000;
export interface WeeklyStudy {totalMs:number;weekStart:number;resetsAt:number;serverNow:number}
interface Interval {username:string;start:number;end:number}

export function parseWeeklyStudy(value:unknown):WeeklyStudy {
  if(!value || typeof value!=='object')throw new Error('Invalid weekly time');
  const row=value as Record<string,unknown>;
  for(const key of ['totalMs','weekStart','resetsAt','serverNow'])if(typeof row[key]!=='number'||!Number.isSafeInteger(row[key])||row[key]<0)throw new Error('Invalid weekly time');
  const result=row as unknown as WeeklyStudy;
  if(result.totalMs>WEEK_MS||result.resetsAt-result.weekStart!==WEEK_MS||result.serverNow<result.weekStart||result.serverNow>=result.resetsAt)throw new Error('Invalid weekly time');
  return result;
}
export function formatWeeklyTime(ms:number):string {
  const seconds=Math.floor(Math.max(0,Math.min(WEEK_MS,Number.isFinite(ms)?ms:0))/1000);
  return [Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(n=>String(n).padStart(2,'0')).join(':');
}

function mount():void {
  let username:string|null=null,generation=0,loginAt=0,offset=0;
  let state:WeeklyStudy|null=null,pending:{start:number;end:number}|null=null,queue:Interval[]=[];
  let failed=false,sending=false,reading=false;
  const clock=():number=>Date.now()+offset;
  function render():void {
    const block=document.getElementById('qb-weekly-study');if(!block)return;
    block.hidden=!username;if(!username)return;
    const lang=document.documentElement.dataset.lang||'zh';
    const words=lang==='en'?{caption:'Studied this week',loading:'Loading…',error:'Not synced yet. Check your connection.',note:'Saved to your account. Resets Monday 00:00 PST (fixed UTC-8). Visible pages only.'}
      :lang==='ja'?{caption:'今週の学習時間',loading:'読み込み中…',error:'未同期。接続を確認してほしい。',note:'アカウントに保存。毎週月曜 0:00（固定 UTC-8）にリセット。表示中のページのみ計測。'}
      :{caption:'本周已学习',loading:'正在读取…',error:'暂未同步，请检查网络后重试。',note:'保存到账号；每周一 00:00（固定 UTC-8）清零，仅统计前台可见页面。'};
    block.setAttribute('aria-label',words.caption);
    document.getElementById('qb-weekly-caption')!.textContent=words.caption;
    document.getElementById('qb-weekly-total')!.textContent=state?formatWeeklyTime(clock()>=state.resetsAt?0:state.totalMs):(failed?'—':words.loading);
    document.getElementById('qb-weekly-note')!.textContent=failed?words.error:words.note;
  }
  async function request(body?:Interval):Promise<WeeklyStudy> {
    const response=await fetch('/api/study-time',{method:body?'POST':'GET',credentials:'same-origin',cache:'no-store',
      ...(body?{headers:{'Content-Type':'application/json'},body:JSON.stringify(body),keepalive:true}:{}),signal:AbortSignal.timeout(10000)});
    if(!response.ok)throw new Error('Weekly time unavailable');
    return parseWeeklyStudy(await response.json());
  }
  function accept(value:WeeklyStudy):void {
    offset=value.serverNow-Date.now();
    if(!state||value.weekStart>state.weekStart||value.weekStart===state.weekStart&&value.totalMs>=state.totalMs)state=value;
    failed=false;render();
  }
  async function read():Promise<void> {
    if(!username||reading)return;
    const expected=generation;reading=true;
    try{const data=await request();if(expected===generation)accept(data);}
    catch{if(expected===generation){failed=true;render();}}
    finally{if(expected===generation)reading=false;}
  }
  function enqueue():void {
    if(!pending||!username)return;
    if(pending.end>pending.start)queue.push({username,start:Math.round(pending.start+offset),end:Math.round(pending.end+offset)});
    pending=null;
    if(queue.length>4){queue.shift();failed=true;}
  }
  async function flush():Promise<void> {
    if(!username)return;
    enqueue();if(sending)return;
    const expected=generation;sending=true;
    try{
      while(queue.length&&expected===generation){
        const body=queue[0];
        if(body.start<clock()-60000){queue.shift();failed=true;continue;}
        try{const data=await request(body);if(expected!==generation)return;queue.shift();accept(data);}
        catch{if(expected===generation){failed=true;render();}break;}
      }
    }finally{if(expected===generation)sending=false;}
  }
  function changeUser(next:string|null):void {
    if(next===username)return;
    username=next;generation++;loginAt=Date.now();offset=0;state=null;pending=null;queue=[];failed=false;sending=false;reading=false;
    render();if(username)void read();
  }
  window.addEventListener('quizsite:account-changed',event=>{
    const value:unknown=(event as CustomEvent).detail?.username;
    changeUser(typeof value==='string'?value:null);
  });
  window.addEventListener('quizsite:account-opened',()=>{render();void flush().then(read);});
  window.addEventListener('quizsite:study-interval',event=>{
    if(!username)return;
    const value=(event as CustomEvent<{start:number;end:number}>).detail;
    if(!value||!Number.isFinite(value.start)||!Number.isFinite(value.end)||value.end<=loginAt)return;
    const start=Math.max(loginAt,value.start,value.end-5000),end=value.end;
    if(pending&&start>pending.end+1000){enqueue();void flush();}
    if(!pending)pending={start,end};else pending.end=Math.max(pending.end,end);
    if(pending.end-pending.start>=15000)void flush();
  });
  window.addEventListener('quizsite:study-flush',()=>{void flush();});
  window.addEventListener('online',()=>{void flush().then(read);});
  document.addEventListener('quizsite:language-changed',render);
  window.setInterval(()=>{
    render();if(username&&state&&clock()>=state.resetsAt)void read();
  },1000);
  window.setInterval(()=>{if(username)void flush();},15000);
  const account=(window as unknown as {QuizSiteAccount?:{getUser:()=>{username:string}|null}}).QuizSiteAccount;
  changeUser(account?.getUser()?.username||null);
}
if(typeof document!=='undefined') {
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
}
