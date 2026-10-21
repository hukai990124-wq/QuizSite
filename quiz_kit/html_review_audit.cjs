/* Isolated browser; API calls are mocked and consume no real AI quota. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright', {paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname, '../site');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../programming/html-review.json')));
async function main() {
  const server = http.createServer((request, response) => {
    const file = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
    if (!file.startsWith(site + path.sep) && file !== site || !fs.existsSync(file)) { response.writeHead(404); response.end(); return; }
    const target = fs.statSync(file).isDirectory() ? path.join(file, 'index.html') : file;
    response.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json'})[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(response);
  });
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({headless:true,channel:'msedge'});
  try {
    const context = await browser.newContext();
    let chatPayload;
    const chatStatus = {configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10};
    await context.route('**/api/**', route => {
      const url = new URL(route.request().url());
      if (url.pathname === '/api/chat') {
        chatPayload = route.request().postDataJSON();
        return route.fulfill({json:{...chatStatus,answer:'Use img, src and alt.',truncated:false}});
      }
      return route.fulfill({json:url.pathname === '/api/auth/me' ? {user:null} : chatStatus});
    });
    await context.routeWebSocket('**/api/presence**',socket => socket.close());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror',error => errors.push(error.message));
    await page.goto(base + '/');
    await page.locator('[data-set-lang="zh"]').click();
    await page.locator('[data-site="programming"]').click();
    await page.waitForSelector('#q20 .qb-question-chat');
    assert.equal(await page.locator('.q').count(),20);
    assert.equal(await page.locator('.opt').count(),80);
    assert.equal(await page.locator('.q img,.q input,.q iframe').count(),0);
    assert.equal(await page.locator('.qb-sitebar').evaluate(el => getComputedStyle(el).backgroundColor),'rgb(117, 21, 42)');
    assert.equal(await page.locator('.lang-switch [aria-pressed="true"]').evaluate(el => getComputedStyle(el).backgroundColor),'rgb(165, 29, 50)');
    for (const [i,q] of data.entries()) {
      const item = page.locator(`#q${i + 1}`);
      assert.equal(await item.locator('.review-code code').textContent(),q.code);
      for (let j=0;j<4;j++) assert.equal(await item.locator('.vocab-pick code').nth(j).textContent(),q.options[j]);
    }
    const first = page.locator('#q1');
    await first.locator('[data-letter="B"] button').focus();
    await page.keyboard.press('Enter');
    assert.equal(await first.locator('.opt.sel').getAttribute('data-letter'),'B');
    assert.equal(await first.evaluate(el => el.classList.contains('done')),false);
    await first.locator('.js-submit').click();
    assert.equal(await first.evaluate(el => el.classList.contains('wrong')),true);
    await first.locator('.js-redo').click();
    await first.locator('[data-letter="A"] button').click();
    await first.locator('.js-submit').click();
    await page.reload();
    await page.waitForSelector('#q20 .qb-question-chat');
    assert.equal(await first.locator('.opt.ok').getAttribute('data-letter'),'A');
    await page.locator('#q2 .js-reveal').click();
    assert.equal(await page.locator('#s-ok').textContent(),'1');
    await page.locator('#q2 .js-redo').click();
    for (let n=2;n<=20;n++) {
      const q = page.locator('#q'+n);
      await q.locator(`[data-letter="${data[n-1].answer}"] button`).click();
      await q.locator('.js-submit').click();
    }
    assert.equal(await page.locator('#s-ok').textContent(),'20');
    await page.locator('#btn-report').click();
    assert.equal(await page.locator('#rp-pct').textContent(),'100%');
    assert.equal(await page.locator('.qb-report-home').getAttribute('href'),'/');
    await page.locator('#rp-close').click();
    for (const [language,title] of [['en','HTML basics · Code review practice'],['ja','HTML入門・コードレビュー演習'],['zh','HTML 入门 · 代码审查训练']]) {
      await page.locator(`[data-set-lang="${language}"]`).click();
      assert.equal(await page.locator('h1').textContent(),title);
      for (const region of ['.stem','.expl']) for (const lang of ['en','zh','ja']) {
        assert.equal(await first.locator(`${region} [lang="${lang}"]`).isVisible(),lang === 'en' || lang === language);
      }
      assert.equal(await first.locator('.review-code code').textContent(),data[0].code);
    }
    await first.locator('.qb-question-chat').click();
    assert.equal(await page.locator('#qb-chat-question option').count(),21);
    assert.equal(await page.locator('#qb-chat-question').inputValue(),'q1');
    await page.locator('#qb-chat-send').click();
    await page.waitForSelector('.qb-chat-message--assistant');
    for (const option of data[0].options) assert.ok(chatPayload.context.includes(option));
    await page.locator('#qb-chat-close').click();
    for (const width of [320,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      await page.locator('h1').scrollIntoViewIfNeeded();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),true);
      if ([320,1440].includes(width)) await page.screenshot({path:path.resolve(__dirname,`../fe/shots/html-review-${width}.png`)});
    }
    await page.goto(base + '/');
    assert.match(await page.locator('[data-site="programming"] .pg span').textContent(),/20\/20/);
    assert.match(await page.locator('#ov-txt').textContent(),/4881/);
    for (const [lang,title] of [['en','Hands-on programming basics'],['ja','プログラミング入門演習'],['zh','编程入门实操']]) {
      await page.locator(`[data-set-lang="${lang}"]`).click();
      assert.equal(await page.locator('#programming-title').textContent(),title);
      assert.ok((await page.locator('.hero .sub').textContent()).includes(lang === 'en' ? '4,881' : lang === 'ja' ? '4,881' : '4881'));
    }
    await page.locator('#programming-practice').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.resolve(__dirname,'../fe/shots/html-review-home.png')});
    assert.deepEqual(errors,[]);
    console.log('HTML review passed: 20/80; safe code; red theme; score/redo/reveal/reload/report; keyboard; 3 languages; AI options; mobile; homepage progress.');
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(error => {console.error(error);process.exitCode=1;});
