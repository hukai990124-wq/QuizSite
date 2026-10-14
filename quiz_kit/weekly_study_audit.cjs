const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZBANK_BROWSER_MODULES||process.cwd()]}));
const site=path.resolve(__dirname,'../site');
async function main(){
 const {studyWeek}=await import('../worker/weekly-study.mjs');
 const server=http.createServer((req,res)=>{const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(site+path.sep)&&file!==site||!fs.existsSync(file)){res.writeHead(404);res.end();return;}const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css','.json':'application/json'})[path.extname(target)]||'application/octet-stream');fs.createReadStream(target).pipe(res);});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));server.unref();
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try{
  const context=await browser.newContext(),page=await context.newPage(),errors=[],calls=[];
  let user=null,fail=false,lastNow=Date.parse('2026-10-19T07:59:20Z');const records=new Map();
  page.on('pageerror',e=>errors.push(e.message));
  await page.clock.install({time:new Date('2026-10-19T07:59:20Z')});
  await context.routeWebSocket('**/api/presence**',s=>s.close());
  await context.route('**/api/**',async route=>{
   const pathname=new URL(route.request().url()).pathname;
   let data={records:[]};
   if(pathname==='/api/auth/login'){user=route.request().postDataJSON().username;data={user:{username:user}};}
   else if(pathname==='/api/auth/me')data={user:user?{username:user}:null};
   else if(pathname==='/api/auth/logout'){user=null;data={};}
   else if(pathname==='/api/study-time'){
    calls.push(route.request().method());
    if(fail)return route.fulfill({status:503,json:{error:'unavailable'}});
    const now=await page.evaluate(()=>Date.now()).catch(()=>lastNow),week=studyWeek(now);lastNow=now;
    let row=records.get(user);if(!row||row.week!==week)row={week,total:!row&&user==='Learner'?3600000:0,last:week};
    if(route.request().method()==='POST'){const body=route.request().postDataJSON();assert.equal(body.username,user);assert.ok(body.end-body.start<=30000);row.total+=Math.max(0,body.end-Math.max(body.start,row.last,week));row.last=Math.max(row.last,body.end);}
    records.set(user,row);data={totalMs:row.total,weekStart:week,resetsAt:week+604800000,serverNow:now};
   }
   return route.fulfill({json:data});
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.locator('.qb-auth-trigger').waitFor();
  await page.locator('[data-set-lang="zh"]').click();
  await page.clock.runFor(2000);assert.equal(calls.length,0,'guests send no weekly API requests');
  await page.locator('.qb-auth-trigger').click();
  await page.locator('#qb-username').fill('Learner');await page.locator('#qb-password').fill('secret1');await page.locator('#qb-auth-submit').click();
  await page.locator('#qb-weekly-total').getByText('01:00:00',{exact:true}).waitFor({timeout:5000});
  await page.clock.runFor(16000);
  await page.waitForFunction(()=>document.getElementById('qb-weekly-total').textContent!=='01:00:00');
  assert.ok(records.get('Learner').total>3610000);
  for(const [lang,expected] of [['en','Studied this week'],['ja','今週の学習時間'],['zh','本周已学习']]){
   await page.locator('#qb-account-close').click();await page.locator(`[data-set-lang="${lang}"]`).click();await page.locator('.qb-auth-trigger').click();assert.equal(await page.locator('#qb-weekly-caption').textContent(),expected);
  }
  assert.match(await page.locator('#qb-weekly-note').textContent(),/UTC.?8/);
  await page.clock.runFor(25000);
  await page.waitForFunction(()=>document.getElementById('qb-weekly-total').textContent.startsWith('00:00:'));
  assert.ok(records.get('Learner').total<30000,'old week never carries into next week');
  await page.locator('#qb-account-close').click();
  await page.goto(`http://127.0.0.1:${server.address().port}/fe/a.html?year=2022`);
  await page.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  await page.clock.runFor(16000);
  assert.equal(await page.locator('#qb-study-time').count(),0,'daily label stays homepage-only');
  await page.locator('.qb-auth-trigger').click();await page.locator('#qb-weekly-total').waitFor();
  await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,get:()=>window.testVisibility||'visible'});window.testVisibility='hidden';document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForTimeout(100);const paused=records.get('Learner').total;
  await page.clock.runFor(20000);assert.equal(records.get('Learner').total,paused,'hidden pages accrue no weekly time');
  await page.evaluate(()=>{window.testVisibility='visible';document.dispatchEvent(new Event('visibilitychange'));});
  await page.screenshot({path:path.resolve(__dirname,'../fe/shots/weekly-study.png')});
  for(const width of [320,768,1440]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false);}
  fail=true;await page.locator('#qb-account-close').click();await page.locator('.qb-auth-trigger').click();
  await page.locator('#qb-weekly-note').getByText(/暂未同步/).waitFor();
  fail=false;await page.locator('#qb-logout').click();const stopped=calls.length;await page.clock.runFor(16000);assert.equal(calls.length,stopped);
  assert.equal(await page.locator('#qb-weekly-study').isVisible(),false);
  await page.locator('#qb-username').fill('Second');await page.locator('#qb-password').fill('secret2');await page.locator('#qb-auth-submit').click();
  await page.locator('#qb-weekly-total').getByText('00:00:00',{exact:true}).waitFor();
  assert.equal(records.get('Second').total,0,'a switched account does not inherit another account or guest time');
  assert.deepEqual(errors,[]);
  console.log('Weekly account UI: guest isolation, login, cloud total, foreground counting, rollover, quiz pages, 3 languages, responsive, network errors and logout passed.');
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
