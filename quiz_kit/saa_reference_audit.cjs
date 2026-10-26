const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(require.resolve('playwright', {paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname, '../site');

async function main() {
  const server = http.createServer((request, response) => {
    const target = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
    if (!target.startsWith(site + path.sep) || !fs.existsSync(target)) { response.writeHead(404).end(); return; }
    const file = fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : target;
    response.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.mjs':'text/javascript','.js':'text/javascript','.css':'text/css','.json':'application/json'})[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({channel:'msedge',headless:true});
  try {
    const context = await browser.newContext({viewport:{width:1440,height:1000},locale:'zh-CN'});
    await context.route('**/api/**', route => route.fulfill({json:{configured:false,available:true,authenticated:false}}));
    await context.addInitScript(() => {
      const original = Storage.prototype.setItem;
      window.__quizWrites = [];
      Storage.prototype.setItem = function(key, value) {
        if (key.startsWith('quiz:')) window.__quizWrites.push(key);
        return original.call(this, key, value);
      };
    });
    const base = `http://127.0.0.1:${server.address().port}`;
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '/aws-saa/index.html');
    await page.locator('a[href="reference.html"]').click();
    await page.locator('#reference-filter:visible').waitFor();
    await page.locator('#qb-color-mode').selectOption('light');
    assert.equal(await page.locator('.ref-entry:visible').count(), 215);
    assert.equal(await page.locator('.qb-question-chat:visible').count(), 0);
    assert.equal(await page.locator('.ref-entry[data-kind="service"]').count(), 118);
    const search = page.locator('#reference-search');
    await search.fill('ＲＴＯ');
    assert.equal(await page.locator('#rto:visible').count(), 1);
    await page.locator('#reference-kind').selectOption('term');
    assert.equal(await page.locator('.ref-entry[data-kind="service"]:visible').count(), 0);
    await page.locator('[data-category="network"]').click();
    assert.equal(await page.locator('.ref-entry:visible').count(), 0);
    assert.equal(await page.locator('#reference-empty:visible').count(), 1);
    await page.locator('.ref-clear').click();
    assert.equal(await page.locator('.ref-entry:visible').count(), 215);
    await page.locator('[data-category="security"]').click();
    assert.equal(await page.locator('.ref-group:visible').count(), 1);
    await search.fill('权限');
    assert.ok(await page.locator('.ref-entry:visible').count() > 0);
    assert.equal(await page.locator('#group-network:visible').count(), 0);
    await page.screenshot({path:path.join(process.env.TEMP,'saa-reference-desktop.png')});
    await page.locator('#qb-color-mode').selectOption('dark');
    assert.equal(await page.locator('[data-category="security"]').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(210, 180, 140)');
    await page.setViewportSize({width:390,height:844});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({path:path.join(process.env.TEMP,'saa-reference-mobile-dark.png'),fullPage:true});
    await page.emulateMedia({media:'print'});
    assert.equal(await page.locator('.ref-entry:visible').count(), 215);
    await page.emulateMedia({media:'screen'});
    assert.deepEqual(await page.evaluate(() => window.__quizWrites), []);
    assert.deepEqual(errors, []);
    const staticContext = await browser.newContext({javaScriptEnabled:false});
    const staticPage = await staticContext.newPage();
    await staticPage.goto(base + '/aws-saa/reference.html');
    assert.equal(await staticPage.locator('.ref-entry:visible').count(), 215);
    assert.equal(await staticPage.locator('#reference-filter:visible').count(), 0);
    await staticContext.close();
    await context.close();
    console.log('PASS: directory entry, full static coverage, search/type/category intersections, empty/reset, dark/mobile/print, no quiz writes, no script errors.');
  } finally { await browser.close(); server.close(); }
}
main().catch(error => {console.error(error);process.exit(1);});
