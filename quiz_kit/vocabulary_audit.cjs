const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright', {paths:[process.env.QUIZBANK_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname, '../site');
async function main() {
  const server = http.createServer((request, response) => {
    const file = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
    if ((file !== site && !file.startsWith(site + path.sep)) || !fs.existsSync(file)) { response.writeHead(404); response.end(); return; }
    const target = fs.statSync(file).isDirectory() ? path.join(file, 'index.html') : file;
    response.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css','.json':'application/json'})[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(response);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.env.QUIZBANK_TEST_BASE || `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({headless:true, channel:'msedge'});
  try {
    const context = await browser.newContext();
    await context.route('**/api/**', route => route.fulfill({json: new URL(route.request().url()).pathname === '/api/auth/me' ? {user:null} : {configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10}}));
    await context.routeWebSocket('**/api/presence**', socket => socket.close());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '/aws-aif/index.html');
    await page.locator('[data-set-lang="zh"]').click();
    await page.locator('a[href="vocabulary.html"]').click();
    await page.waitForSelector('.qb-sitebar');
    assert.equal(await page.locator('.q').count(), 100);
    assert.equal(await page.locator('.opt').count(), 200);
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../aws-aif/vocabulary.json')));
    for (const q of data) {
      const node = page.locator(`[data-term-id="${q.id}"]`);
      const key = await node.getAttribute('data-ans');
      assert.equal(await node.locator(`[data-letter="${key}"] [lang="zh"]`).textContent(), q.meaning.zh);
    }
    const first = page.locator('#q1');
    const answer = await first.getAttribute('data-ans');
    const wrong = answer === 'A' ? 'B' : 'A';
    await first.locator(`[data-letter="${wrong}"] button`).focus();
    await page.keyboard.press('Enter');
    assert.equal(await first.locator('.opt.sel').getAttribute('data-letter'), wrong);
    assert.equal(await first.evaluate(q => q.classList.contains('done')), false);
    await first.locator('.js-submit').click();
    assert.equal(await first.evaluate(q => q.classList.contains('wrong')), true);
    await first.locator('.js-redo').click();
    await first.locator(`[data-letter="${answer}"] button`).click();
    await first.locator('.js-submit').click();
    assert.equal(await first.locator('.vocab-pick').first().isDisabled(), true);
    await page.reload();
    await page.waitForSelector('.qb-sitebar');
    assert.equal(await first.evaluate(q => q.classList.contains('done') && !q.classList.contains('wrong')), true);
    assert.equal(await first.locator('.opt.ok').getAttribute('data-letter'), answer);
    assert.equal(await first.locator('.opt.ok button').getAttribute('aria-pressed'), 'true');
    await page.locator('#q2 .js-reveal').click();
    assert.equal(await page.locator('#s-ok').textContent(), '1');
    await page.locator('#q2 .js-redo').click();
    for (let n = 2; n <= 100; n++) {
      const q = page.locator('#q' + n);
      await q.locator(`[data-letter="${await q.getAttribute('data-ans')}"] button`).click();
      await q.locator('.js-submit').click();
    }
    assert.equal(await page.locator('#s-ok').textContent(), '100');
    await page.locator('#btn-report').click();
    assert.equal(await page.locator('#rp-pct').textContent(), '100%');
    assert.equal(await page.locator('.qb-report-home').getAttribute('href'), '/');
    await page.locator('#rp-close').click();
    for (const [language, heading] of [['en','AWS AIF · Technical vocabulary'],['ja','AWS AIF · 専門用語集'],['zh','AWS AIF · 专业术语单词库']]) {
      await page.locator(`[data-set-lang="${language}"]`).click();
      assert.equal(await page.locator('h1').textContent(), heading);
      assert.equal(await first.locator('.opt.ok [lang="zh"]').textContent(), data[0].meaning.zh);
      for (const region of ['.stem', '.opt.ok', '.expl']) {
        assert.equal(await first.locator(`${region} [lang="en"]`).isVisible(), true, 'English original stays visible');
        assert.equal(await first.locator(`${region} [lang="zh"]`).isVisible(), language === 'zh');
        assert.equal(await first.locator(`${region} [lang="ja"]`).isVisible(), language === 'ja');
      }
    }
    for (const width of [320,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      await page.locator('h1').scrollIntoViewIfNeeded();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      if (process.argv[2] && [320,1440].includes(width)) await page.screenshot({path:path.join(path.dirname(path.resolve(process.argv[2])), `vocabulary-${width}.png`)});
    }
    await page.goto(base + '/');
    const aif = page.locator('[data-site="aws-aif"]');
    assert.match(await aif.locator('.pg span').textContent(), /100\/782/);
    assert.match(await page.locator('#ov-txt').textContent(), /4861/);
    assert.deepEqual(errors, []);
    const result = {questions:100,choices:200,correctWrongRedoReload:true,keyboard:true,threeLanguages:true,responsive:true,homepageProgress:true,errors};
    if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(error => {console.error(error); process.exitCode = 1;});
