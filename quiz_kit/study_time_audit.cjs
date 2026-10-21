const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright', {paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname,'../site');
const key = 'quizsite:study-time:v1';
async function main() {
 const server=http.createServer((request,response)=>{
  const file=path.resolve(site,'.'+new URL(request.url,'http://localhost').pathname);
  if ((file!==site && !file.startsWith(site+path.sep)) || !fs.existsSync(file)) {response.writeHead(404);response.end();return;}
  const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
  response.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css','.json':'application/json'})[path.extname(target)]||'application/octet-stream');
  fs.createReadStream(target).pipe(response);
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 server.unref();
 const base=process.env.QUIZSITE_TEST_BASE || `http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try {
  const context=await browser.newContext({timezoneId:'Asia/Tokyo'});
  await context.route('**/api/**',route=>route.fulfill({json:new URL(route.request().url()).pathname==='/api/auth/me'?{user:null}:{configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10}}));
  await context.routeWebSocket('**/api/presence**',socket=>socket.close());
  const page=await context.newPage();
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base+'/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  await page.evaluate(()=>window.__I18N__.setLang('zh'));
  assert.equal(await page.locator('#qb-study-time').count(),1);
  assert.match(await page.locator('#qb-study-time').textContent(),/^今日已学习 \d{2}:\d{2}:\d{2}$/);
  const read=()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key))?.totalMs||0,key);
  await page.waitForFunction(key=>JSON.parse(localStorage.getItem(key))?.totalMs>=1000,key);
  const first=await read();
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  assert.ok(await read()>=first);
  await page.goto(base+'/aws-clf/part01.html',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  assert.equal(await page.locator('#qb-study-time').count(),0);
  const beforeQuiz=await read();
  await page.waitForFunction(({key,before})=>JSON.parse(localStorage.getItem(key))?.totalMs>=before+1000,{key,before:beforeQuiz});
  await page.goto(base+'/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  assert.ok(await read()>=beforeQuiz+1000);
  // Deterministically exercise the browser visibility event without relying on headless tab focus.
  await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,get:()=>window.testVisibility||'visible'});window.testVisibility='hidden';document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForTimeout(100);
  const paused=await read();await page.waitForTimeout(1500);assert.equal(await read(),paused);
  await page.evaluate(()=>{window.testVisibility='visible';document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForFunction(({key,before})=>JSON.parse(localStorage.getItem(key))?.totalMs>before,{key,before:paused});
  const second=await context.newPage();
  second.on('pageerror',error=>errors.push(error.message));
  await second.goto(base+'/toeic-reading/TOEIC_Reading_Test_01.html',{waitUntil:'domcontentloaded'});
  await second.waitForFunction(()=>document.documentElement.dataset.studyTimeReady==='true');
  const beforeOverlap=await read(), start=Date.now();
  await page.waitForTimeout(2500);
  const gain=await read()-beforeOverlap;
  assert.ok(gain>1000 && gain<=Date.now()-start+1100,`multiple tabs inflated elapsed time: ${gain}`);
  await second.close();
  for(const language of ['en','ja','zh']) {
   await page.evaluate(language=>window.__I18N__.setLang(language),language);
   assert.ok((await page.locator('#qb-study-time').textContent()).startsWith({en:'Studied today',ja:'今日の学習時間',zh:'今日已学习'}[language]));
  }
  assert.equal(await page.locator('#qb-study-time').evaluate(node=>getComputedStyle(node).fontSize),'14px');
  for(const width of [320,768,1024,1440]) {
   await page.setViewportSize({width,height:900});
   const box=await page.locator('#qb-study-time').boundingBox();
   assert.ok(box.x>=0 && box.x+box.width<=width);
  }
  if(process.argv[2]) await page.locator('.hero').screenshot({path:process.argv[2]});
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({mainPageOnly:true,quizPagesCount:true,reloadPersists:true,hiddenPauses:true,multipleTabsCountOnce:true,languages:3,widths:4,errors}));
 } finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
