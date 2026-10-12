const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright',{paths:[process.env.QUIZBANK_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname,'../site');
let activeResponse, requests = [], releaseRequest;
const quota = {remaining:9,dailyLimit:10,authenticated:false,available:true,configured:true,truncated:false};
async function main() {
  const server = http.createServer((request,response)=>{
    const pathname = new URL(request.url,'http://localhost').pathname;
    if (pathname === '/api/chat') {
      let text = '';
      request.on('data',chunk=>{text+=chunk;});
      request.on('end',()=>{
        assert.match(request.headers.accept,/application\/x-ndjson/);
        requests.push(JSON.parse(text));
        activeResponse = response;
        response.writeHead(200,{'Content-Type':'application/x-ndjson; charset=utf-8','Cache-Control':'no-store'});
        response.flushHeaders(); releaseRequest();
      });
      return;
    }
    const file = path.resolve(site,'.'+pathname);
    if ((file !== site && !file.startsWith(site+path.sep)) || !fs.existsSync(file)) {response.writeHead(404);response.end();return;}
    const target = fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
    response.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css','.json':'application/json'})[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(response);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser = await chromium.launch({headless:true,channel:'msedge'});
  try {
    const context = await browser.newContext();
    await context.route('**/api/**',route=> new URL(route.request().url()).pathname === '/api/chat' ? route.continue() : route.fulfill({json: new URL(route.request().url()).pathname === '/api/auth/me'?{user:null}:quota}));
    await context.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page = await context.newPage(), errors = [];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.locator('[data-set-lang="zh"]').click();
    await page.locator('.qb-chat-trigger').click();
    await page.emulateMedia({reducedMotion:'no-preference'});
    async function submit(question) {
      const pending = new Promise(resolve=>{releaseRequest=resolve;});
      await page.locator('#qb-chat-input').fill(question);
      await page.locator('#qb-chat-input').press('Enter');
      await pending;
    }
    function write(frame) {activeResponse.write(JSON.stringify(frame)+'\n');}
    await submit('解释 AWS S3。');
    assert.equal(await page.locator('.qb-chat-message--user').last().locator('div').textContent(),'解释 AWS S3。');
    assert.equal(await page.locator('.qb-chat-dialog').evaluate(q=>q.classList.contains('is-thinking')),true);
    write({type:'delta',text:'S3 '.repeat(30)});
    await page.waitForFunction(()=>document.querySelector('.qb-chat-message--assistant .i18n-noloc')?.textContent.length > 0);
    assert.equal(await page.locator('#qb-chat-send').isDisabled(),true);
    assert.equal(await page.locator('.qb-chat-dialog').evaluate(q=>q.classList.contains('is-thinking')),false);
    assert.equal(await page.locator('#qb-chat-log').getAttribute('aria-busy'),'true');
    for (const width of [320,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      const box = await page.locator('.qb-chat-dialog').boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width);
    }
    if (process.argv[2]) await page.locator('.qb-chat-dialog').screenshot({path:process.argv[2]});
    write({type:'delta',text:'<script>window.injected=true</script>保存对象。'});
    write({type:'done',...quota}); activeResponse.end();
    await page.waitForFunction(()=>!document.getElementById('qb-chat-send').disabled);
    const content = page.locator('.qb-chat-message--assistant').last().locator('div');
    assert.match(await content.textContent(),/保存对象。$/);
    assert.equal(await page.evaluate(()=>window.injected),undefined);
    assert.equal(await page.locator('#qb-chat-log').getAttribute('aria-busy'),'false');
    await submit('继续讲解权限。');
    write({type:'delta',text:'这是还没完成的片段。'});
    await page.waitForFunction(()=>document.querySelectorAll('.qb-chat-message--assistant').length === 2);
    write({type:'error',error:'回答未完成，请稍后再试。'}); activeResponse.end();
    await page.waitForFunction(()=>!document.getElementById('qb-chat-send').disabled);
    assert.equal(await page.locator('.is-incomplete').count(),1);
    assert.match(await page.locator('#qb-chat-error').textContent(),/回答未完成/);
    await page.emulateMedia({reducedMotion:'reduce'});
    await submit('换个技术问题。');
    assert.equal(requests[2].history.length,2,'partial answer is excluded from follow-up history');
    write({type:'delta',text:'新的回答全文。'});
    await page.waitForFunction(()=>[...document.querySelectorAll('.qb-chat-message--assistant .i18n-noloc')].at(-1)?.textContent === '新的回答全文。');
    assert.equal(await page.locator('.qb-chat-message.is-streaming div').evaluate(node=>getComputedStyle(node,'::after').animationName),'none');
    write({type:'done',...quota}); activeResponse.end();
    await page.waitForFunction(()=>!document.getElementById('qb-chat-send').disabled);
    assert.equal(await page.locator('.is-streaming').count(),0);
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({progressiveBeforeCompletion:true,spinner:true,partialFailure:true,retryHistory:true,reducedMotion:true,htmlSafe:true,errors}));
  } finally {activeResponse?.end(); await browser.close(); await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
