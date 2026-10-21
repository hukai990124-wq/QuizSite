import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {studyWeek,handleStudyTimeRequest,clearExpiredStudyTime} from './weekly-study.mjs';
const tokenFor=id=>(id==='one'?'a':'b').repeat(43);

function fixture() {
  const sql = new DatabaseSync(':memory:');
  sql.exec('PRAGMA foreign_keys=ON');
  for(const name of ['0001_accounts_and_progress.sql','0004_weekly_study_time.sql']) sql.exec(readFileSync(new URL('./migrations/'+name,import.meta.url),'utf8'));
  for(const [id,name] of [['one','Learner'],['two','Second']]) {
    sql.prepare('INSERT INTO users VALUES (?,?,?,?,?,?,?)').run(id,name,'salt','hash',1,0,0);
    sql.prepare('INSERT INTO sessions VALUES (?,?,?,?)').run(createHash('sha256').update(tokenFor(id)).digest('hex'),id,0,Date.now()+86400000);
  }
  const env={DB:{prepare(query){let args=[];const stmt={bind(...values){args=values;return stmt;},async first(){return sql.prepare(query).get(...args)||null;},async run(){return {meta:{changes:sql.prepare(query).run(...args).changes}};}};return stmt;}}};
  return {sql,env};
}
function req(body,token='one',origin='https://example.com') {
  return new Request('https://example.com/api/study-time',{method:body===undefined?'GET':'POST',headers:{...(token?{Cookie:'__Host-quizsite_session='+tokenFor(token)}:{}),Origin:origin,'Content-Type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})});
}
const monday=Date.parse('2026-10-12T08:00:00Z');
const interval=(start,end,username='Learner')=>({username,start,end});

test('week is fixed UTC-8 Monday, without summer daylight saving',()=>{
  assert.equal(studyWeek(monday-1),monday-604800000);
  assert.equal(studyWeek(monday),monday);
  assert.equal(studyWeek(Date.parse('2026-07-06T07:59:59Z')),Date.parse('2026-06-29T08:00:00Z'));
  assert.equal(studyWeek(Date.parse('2027-01-01T00:00:00Z')),Date.parse('2026-12-28T08:00:00Z'));
});

test('counts interval union across devices, replays and concurrent requests, never cumulative totals',async t=>{
  const {env,sql}=fixture();t.after(()=>sql.close());
  const now=monday+60000;
  await Promise.all([handleStudyTimeRequest(req(interval(now-15000,now)),env,now),handleStudyTimeRequest(req(interval(now-15000,now)),env,now)]);
  const result=await (await handleStudyTimeRequest(req(),env,now)).json();
  assert.equal(result.totalMs,15000);
  await handleStudyTimeRequest(req(interval(now-5000,now+10000)),env,now+10000);
  assert.equal((await (await handleStudyTimeRequest(req(),env,now+10000)).json()).totalMs,25000);
  assert.equal((await handleStudyTimeRequest(req({...interval(now-1000,now),totalMs:99999999}),env,now)).status,400);
});

test('PST rollover shows zero, clips crossing intervals and cleanup never deletes current data or quiz progress',async t=>{
  const {env,sql}=fixture();t.after(()=>sql.close());
  await handleStudyTimeRequest(req(interval(monday-10000,monday-1)),env,monday-1);
  assert.equal((await (await handleStudyTimeRequest(req(),env,monday)).json()).totalMs,0);
  await handleStudyTimeRequest(req(interval(monday-5000,monday+5000)),env,monday+5000);
  assert.equal((await (await handleStudyTimeRequest(req(),env,monday+5000)).json()).totalMs,5000);
  sql.prepare('INSERT INTO account_weekly_study VALUES (?,?,?,?)').run('two',monday-604800000,500, monday-1);
  sql.prepare('INSERT INTO progress VALUES (?,?,?,?,?,?)').run('one','quiz:fe:a:2022','1','{}',1,0);
  await clearExpiredStudyTime(env,monday+60000);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM account_weekly_study').get().n,1);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM progress').get().n,1);
});

test('auth, ownership, CSRF, bounded JSON, invalid intervals and missing DB fail closed',async t=>{
  const {env,sql}=fixture();t.after(()=>sql.close());const now=monday+60000;
  assert.equal((await handleStudyTimeRequest(req(undefined,null),env,now)).status,401);
  assert.equal((await handleStudyTimeRequest(req(interval(now-1000,now),'one','https://evil.example'),env,now)).status,403);
  assert.equal((await handleStudyTimeRequest(req(interval(now-1000,now,'Second')),env,now)).status,401);
  for(const body of [interval(now-30001,now),interval(now-1000,now+3000),interval(now-70000,now-65000),interval(now,now-1),{username:'x'.repeat(2000),start:0,end:1},null]) {
    assert.equal((await handleStudyTimeRequest(req(body),env,now)).status,400);
  }
  const read=await handleStudyTimeRequest(req(undefined,'two'),env,now);
  assert.equal((await read.json()).totalMs,0);
  assert.equal(read.headers.get('cache-control'),'no-store');
  assert.equal((await handleStudyTimeRequest(req(),{},now)).status,503);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM account_weekly_study').get().n,0);
});

test('additive schema preserves old code, cascades account deletion and supports rollback/reapply',async t=>{
  const {env,sql}=fixture();t.after(()=>sql.close());
  await handleStudyTimeRequest(req(interval(monday+1,monday+1000)),env,monday+1000);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM account_weekly_study').get().n,1);
  sql.prepare('DELETE FROM users WHERE id=?').run('one');
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM account_weekly_study').get().n,0);
  sql.exec('DROP TABLE account_weekly_study');
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM users').get().n,1);
  sql.exec(readFileSync(new URL('./migrations/0004_weekly_study_time.sql',import.meta.url),'utf8'));
});
