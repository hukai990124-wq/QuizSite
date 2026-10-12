/* Isolated FE chat regression; API replies are mocked and consume no quota. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright', {paths:[process.env.QUIZBANK_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname, '../site');
const quota = {remaining:9,dailyLimit:10,authenticated:false,available:true,configured:true};
async function main() {
  const server = http.createServer((req,res) => {
    const file = path.resolve(site, '.' + new URL(req.url,'http://localhost').pathname);
    if (!file.startsWith(site + path.sep) || !fs.existsSync(file)) {res.writeHead(404);res.end();return;}
    res.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.css':'text/css'})[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  const browser = await chromium.launch({headless:true,channel:'msedge'});
  try {
    const context = await browser.newContext();
    const requests = [], errors = [];
    await context.route('**/api/**', route => {
      const name = new URL(route.request().url()).pathname;
      if (name === '/api/chat') requests.push(route.request().postDataJSON());
      return route.fulfill({json:name === '/api/auth/me' ? {user:null} : name === '/api/chat' ? {...quota,answer:'测试讲解',truncated:false} : quota});
    });
    await context.routeWebSocket('**/api/presence**', socket => socket.close());
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.setDefaultTimeout(5000);
    for (const [subject,query,count] of [['a','year=2022',60],['b','year=2026',6],['a','paper=2',60],['b','paper=3',20]]) {
      await page.goto(`http://127.0.0.1:${server.address().port}/fe/${subject}.html?${query}`);
      await page.locator('[data-set-lang="zh"]').click();
      await page.locator('#app .qb-question-chat').waitFor();
      assert.equal(await page.locator('#app .qb-question-chat').count(),1);
      await page.locator('#app .qb-question-chat').click();
      assert.equal(await page.locator('#qb-chat-question option').count(),count+1);
      assert.equal(await page.locator('#qb-chat-question').inputValue(),'fe-question-1');
      await page.locator('#qb-chat-input').press('Enter');
      await page.waitForFunction(() => document.querySelector('.qb-chat-message--assistant'));
      const payload = requests.at(-1);
      assert.match(payload.context,/题库参考答案/);
      assert.match(payload.context,/問[\s０-９\d]*1|問１/);
      assert.ok(payload.context.length>200, 'actual PDF text, not only answer labels');
      assert.doesNotMatch(payload.context,/下一题|确认作答/);
      await page.locator('#qb-chat-question').selectOption(`fe-question-${count}`);
      await page.locator('#qb-chat-input').fill('解释最后一题');
      await page.locator('#qb-chat-input').press('Enter');
      await page.waitForFunction(() => document.querySelector('.qb-chat-message--assistant'));
      assert.match(requests.at(-1).context,new RegExp(`题号：${count}(?:\\n|$)`));
      await page.locator('#qb-chat-close').click();
      await page.locator('.question-nav button').nth(1).click();
      await page.locator('#app .qb-question-chat').click();
      assert.equal(await page.locator('#qb-chat-question').inputValue(),'fe-question-2');
      await page.locator('#qb-chat-close').click();
      await page.locator('.question-nav button').nth(0).click();
      await page.locator('#app .qb-question-chat').waitFor();
      assert.equal(await page.locator('#app .qb-question-chat').count(),1);
      assert.equal(await page.locator('#qb-chat-question option').count(),count+1);
      for (const width of [320,768,1440]) {
        await page.setViewportSize({width,height:900});
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth+2),false);
      }
    }
    await page.screenshot({path:path.resolve(__dirname,'shots/chat-fixed.png'),fullPage:true});
    assert.deepEqual(errors,[]);
    console.log('FE chat passed: A/B, annual/extra papers, all-question selection, PDF text, navigation, mobile, no real AI calls.');
  } finally {await browser.close(); await new Promise(resolve => server.close(resolve));}
}
main().catch(error => {console.error(error);process.exitCode=1;});
