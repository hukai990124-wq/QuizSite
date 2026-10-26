const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(require.resolve('playwright', {paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname, '../site');

async function main() {
  const server = http.createServer((request, response) => {
    const target = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
    if ((!target.startsWith(site + path.sep) && target !== site) || !fs.existsSync(target)) { response.writeHead(404).end(); return; }
    const file = fs.statSync(target).isDirectory() ? path.join(target,'index.html') : target;
    response.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.mjs':'text/javascript','.js':'text/javascript','.css':'text/css','.json':'application/json'})[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({channel:'msedge',headless:true});
  try {
    const context = await browser.newContext({timezoneId:'Asia/Tokyo'});
    await context.route('**/api/**', route => route.fulfill({json:{configured:false,available:true,authenticated:false,remaining:5,dailyLimit:5}}));
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.clock.install({time:new Date('2026-10-25T17:59:50+09:00')});
    const base = `http://127.0.0.1:${server.address().port}`;
    await page.goto(base);
    await page.locator('#qb-color-mode').waitFor();
    assert.equal(await page.locator('html').getAttribute('data-color-mode'), 'light');
    await page.clock.fastForward(10000);
    assert.equal(await page.locator('html').getAttribute('data-color-mode'), 'dark');
    assert.equal(await page.locator('body').evaluate(element => getComputedStyle(element).backgroundColor), 'rgb(13, 20, 30)');
    await page.screenshot({path:path.join(process.env.TEMP,'quizsite-night.png'),fullPage:true});
    await page.locator('#qb-color-mode').selectOption('light');
    await page.clock.fastForward(120000);
    assert.equal(await page.locator('html').getAttribute('data-color-mode'), 'light');
    await page.goto(base + '/aws-aif/bank/part01.html');
    await page.locator('#qb-color-mode').waitFor();
    assert.equal(await page.locator('#qb-color-mode').inputValue(), 'light');
    await page.locator('#qb-color-mode').selectOption('dark');
    await page.waitForFunction(() => getComputedStyle(document.querySelector('.q')).backgroundColor === 'rgb(23, 33, 48)');
    await page.setViewportSize({width:390,height:844});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({path:path.join(process.env.TEMP,'quizsite-bank-night.png')});
    await page.locator('#qb-color-mode').selectOption('auto');
    await page.clock.setSystemTime(new Date('2026-10-26T08:00:00+09:00'));
    await page.evaluate(() => window.dispatchEvent(new Event('focus')));
    assert.equal(await page.locator('html').getAttribute('data-color-mode'), 'light');
    await page.locator('#qb-color-mode').selectOption('dark');
    const other = await context.newPage();
    await other.goto(base);
    await other.locator('#qb-color-mode').waitFor();
    await other.locator('#qb-color-mode').selectOption('light');
    await page.waitForFunction(() => document.documentElement.dataset.colorMode === 'light');
    for (const url of ['/aws-saa/original/part01.html', '/random.html?pool=aws-saa&size=50&seed=12345678']) {
      await page.goto(base + url);
      await page.locator('.q').first().waitFor();
      await page.waitForFunction(() => window.__I18N_READY__);
      for (const language of ['zh', 'ja', 'en', 'zh']) {
        await page.evaluate(language => window.__I18N__.setLang(language), language);
        const visible = await page.locator('.q').evaluateAll(questions => questions.flatMap(q =>
          [...q.querySelectorAll('.zh, .ja')].filter(p => getComputedStyle(p).display !== 'none').map(p => p.className)));
        assert.ok(visible.every(value => value === language), `${url}: unexpected translation in ${language}: ${[...new Set(visible)]}`);
        if (language === 'zh') {
          assert.ok(visible.length > 0);
          assert.equal(await page.locator('.q .ja:visible').count(), 0);
        }
      }
      await page.locator('#qb-color-mode').selectOption('dark');
      const option = page.locator('.q').first().locator('li.opt').first();
      await option.click();
      await page.waitForFunction(() => getComputedStyle(document.querySelector('li.opt.sel')).backgroundColor === 'rgb(210, 180, 140)');
      assert.equal(await option.locator('.zh').evaluate(el => getComputedStyle(el).color), 'rgb(48, 37, 27)');
      await page.screenshot({path:path.join(process.env.TEMP, url.startsWith('/random') ? 'saa-random-selected.png' : 'saa-original-selected.png')});
    }
    await page.locator('#qb-color-mode').selectOption('light');
    await page.goto(base + '/knight/');
    await page.locator('#qb-color-mode').waitFor();
    await page.waitForFunction(() => document.documentElement.dataset.themePage === 'knight');
    assert.equal(await page.locator('body').evaluate(element => getComputedStyle(element).backgroundColor), 'rgb(250, 248, 242)');
    await page.locator('#qb-color-mode').selectOption('dark');
    assert.equal(await page.locator('body').evaluate(element => getComputedStyle(element).backgroundColor), 'rgb(0, 0, 0)');
    assert.deepEqual(errors, []);
    await context.close();
    const blocked = await browser.newContext();
    await blocked.addInitScript(() => { Storage.prototype.getItem = () => { throw new Error('blocked'); }; Storage.prototype.setItem = () => { throw new Error('blocked'); }; });
    const blockedPage = await blocked.newPage();
    await blockedPage.goto(base);
    await blockedPage.locator('#qb-color-mode').selectOption('dark');
    assert.equal(await blockedPage.locator('html').getAttribute('data-color-mode'), 'dark');
    await blocked.close();
    console.log('PASS: local time boundaries, manual override, persistence, cross-tab sync, storage denial, homepage/bank/knight styles and mobile layout.');
  } finally { await browser.close(); server.close(); }
}
main().catch(error => {console.error(error);process.exit(1);});
