import {findSession,validateMutationRequest} from './account.mjs';

interface Statement {
  bind(...values: Array<string|number>): Statement;
  first<T>(): Promise<T|null>;
  run(): Promise<unknown>;
}
interface StudyEnvironment {DB?: {prepare(sql: string): Statement}}
interface Row {week_start: number; total_ms: number; last_end: number}
const WEEK_MS=604800000, OFFSET_MS=8*3600000;

export function studyWeek(now: number): number {
  const local=new Date(now-OFFSET_MS);
  const day=Date.UTC(local.getUTCFullYear(),local.getUTCMonth(),local.getUTCDate());
  return day-((local.getUTCDay()+6)%7)*86400000+OFFSET_MS;
}

function json(data: unknown,status=200): Response {
  return new Response(JSON.stringify(data),{status,headers:{
    'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',
    'Strict-Transport-Security':'max-age=31536000','X-Content-Type-Options':'nosniff',
    'X-Frame-Options':'DENY','Referrer-Policy':'strict-origin-when-cross-origin',
    'Permissions-Policy':'camera=(), microphone=()',
  }});
}

async function readInterval(request: Request,now: number): Promise<{username:string;start:number;end:number}> {
  const reader=request.body?.getReader();
  if(!reader)throw new Error('body');
  let size=0,text='';const decoder=new TextDecoder();
  try {
    while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>512)throw new Error('size');text+=decoder.decode(value,{stream:true});}
    text+=decoder.decode();
  } finally {await reader.cancel();reader.releaseLock();}
  const body:unknown=JSON.parse(text);
  if(!body || typeof body!=='object' || Array.isArray(body))throw new Error('shape');
  const value=body as Record<string,unknown>;
  const {username,start,end}=value;
  if(Object.keys(value).sort().join(',')!=='end,start,username' || typeof username!=='string' || Array.from(username).length>15 ||
    typeof start!=='number' || typeof end!=='number' || !Number.isSafeInteger(start) || !Number.isSafeInteger(end) ||
    start<0 || start>end || end-start>30000 || start<now-60000 || start>now || end>now+2000)throw new Error('interval');
  return {username,start,end:Math.min(end,now)};
}

function snapshot(row: Row|null,now: number) {
  const weekStart=studyWeek(now);
  return {totalMs:row?.week_start===weekStart?row.total_ms:0,weekStart,resetsAt:weekStart+WEEK_MS,serverNow:now};
}

export async function handleStudyTimeRequest(request: Request,env: StudyEnvironment,now=Date.now()): Promise<Response> {
  if(!['GET','POST'].includes(request.method))return json({error:'Method not allowed'},405);
  if(request.method==='POST' && !validateMutationRequest(request))return json({error:'请使用同源 JSON 请求'},403);
  if(!env.DB)return json({error:'学习时间服务暂不可用'},503);
  try {
    const session=await findSession(request,env.DB);
    if(!session)return json({error:'请先登录或重新登录'},401);
    let row:Row|null;
    if(request.method==='POST') {
      let interval;
      try {interval=await readInterval(request,now);}catch{return json({error:'学习时间区间无效'},400);}
      if(interval.username!==session.username)return json({error:'账号已切换，请刷新后重试'},401);
      const week=studyWeek(now),end=Math.max(week,interval.end),start=Math.max(week,interval.start);
      row=await env.DB.prepare(`INSERT INTO account_weekly_study(user_id,week_start,total_ms,last_end) VALUES(?,?,?,?)
        ON CONFLICT(user_id) DO UPDATE SET
          total_ms=MIN(604800000,(CASE WHEN account_weekly_study.week_start=excluded.week_start THEN account_weekly_study.total_ms ELSE 0 END)
            + MAX(0,excluded.last_end-MAX(excluded.last_end-excluded.total_ms,account_weekly_study.last_end,excluded.week_start))),
          week_start=excluded.week_start,last_end=MAX(account_weekly_study.last_end,excluded.last_end)
        WHERE excluded.week_start>=account_weekly_study.week_start RETURNING week_start,total_ms,last_end`)
        .bind(session.user_id,week,Math.max(0,end-start),end).first<Row>();
    } else {
      row=await env.DB.prepare('SELECT week_start,total_ms,last_end FROM account_weekly_study WHERE user_id=?').bind(session.user_id).first<Row>();
    }
    return json(snapshot(row,now));
  }catch{return json({error:'学习时间服务暂不可用'},503);}
}

export async function clearExpiredStudyTime(env: StudyEnvironment,now=Date.now()): Promise<void> {
  if(!env.DB)throw new Error('Study database unavailable');
  await env.DB.prepare('DELETE FROM account_weekly_study WHERE week_start < ?').bind(studyWeek(now)).run();
}
