const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const site = path.resolve(__dirname, '../site');
const server = http.createServer((request, response) => {
  const file = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
  if (!file.startsWith(site + path.sep) || !fs.existsSync(file)) { response.writeHead(404); response.end(); return; }
  const target = fs.statSync(file).isDirectory() ? path.join(file, 'index.html') : file;
  response.setHeader('Content-Type', ({ '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' })[path.extname(target)] || 'application/octet-stream');
  fs.createReadStream(target).pipe(response);
});

async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  try {
    const context = await browser.newContext();
    // The audit exercises local UI only; analytics must not delay navigation.
    await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await context.route('**/api/**', route => route.fulfill({ json: { user: null, configured: false } }));
    await context.routeWebSocket('**/api/presence**', socket => socket.close());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '/fe/index.html', { waitUntil: 'domcontentloaded' });
    await page.locator('a[href="vocabulary.html"]').click();
    await page.locator('#v-workspace').waitFor({ state: 'visible' });
    assert.match(await page.locator('#v-counts').textContent(), /已掌握 0 \/ 120/);
    assert.equal(await page.locator('#v-category option').count(), 9);
    assert.equal(await page.locator('#v-review').isDisabled(), true);
    assert.equal(await page.locator('#v-answer').isVisible(), false);
    await page.locator('#v-flip').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#v-answer').isVisible(), true);
    assert.equal(await page.locator('#v-flip').getAttribute('aria-expanded'), 'true');
    await page.locator('#v-review').click();
    assert.equal(await page.locator('#v-answer').isVisible(), false);
    assert.match(await page.locator('#v-position').textContent(), /^2 \/ 120/);
    await page.locator('#v-flip').click();
    await page.locator('#v-mastered').click();
    assert.match(await page.locator('#v-counts').textContent(), /已掌握 1 \/ 120 · 待复习 1/);
    await page.reload();
    await page.locator('#v-workspace').waitFor({ state: 'visible' });
    assert.match(await page.locator('#v-counts').textContent(), /已掌握 1 \/ 120 · 待复习 1/);
    await page.locator('#v-status').selectOption('unseen');
    assert.match(await page.locator('#v-results').textContent(), /118 \/ 120/);
    await page.locator('#v-status').selectOption('review');
    assert.match(await page.locator('#v-results').textContent(), /1 \/ 120/);
    await page.locator('#v-flip').click();
    await page.locator('#v-mastered').click();
    assert.equal(await page.locator('#v-empty').isVisible(), true);
    assert.match(await page.locator('#v-feedback').textContent(), /本组已完成/);
    await page.locator('#v-empty-reset').click();
    await page.locator('#v-category').selectOption('计算机系统');
    assert.match(await page.locator('#v-results').textContent(), /15 \/ 120/);
    await page.locator('#v-search').fill('ｃｐｕ');
    assert.match(await page.locator('#v-prompt').textContent(), /中央処理装置/);
    await page.locator('#v-direction').selectOption('reverse');
    assert.match(await page.locator('#v-prompt').textContent(), /中央处理器/);
    assert.equal(await page.locator('#v-answer').isVisible(), false);
    await page.locator('#v-flip').click();
    assert.equal(await page.locator('#v-answer-title').textContent(), '中央処理装置');
    await page.locator('#v-search').fill('不存在的词');
    assert.equal(await page.locator('#v-empty').isVisible(), true);
    await page.locator('#v-empty-reset').click();
    await page.locator('#v-list-view').click();
    assert.equal(await page.locator('.v-entry').count(), 120);
    await page.locator('.v-entry').first().locator('summary').click();
    assert.match(await page.locator('.v-entry').first().textContent(), /进位制/);
    await page.locator('.v-entry').first().getByRole('button', { name: '背这个词' }).click();
    assert.equal(await page.locator('#v-card-view').getAttribute('aria-pressed'), 'true');
    await page.locator('#v-direction').selectOption('forward');
    await page.locator('#v-shuffle').click();
    assert.match(await page.locator('#v-feedback').textContent(), /已打乱顺序/);
    assert.match(await page.locator('#v-position').textContent(), /^1 \/ 120/);
    await page.locator('#v-next').click();
    assert.match(await page.locator('#v-position').textContent(), /^2 \/ 120/);
    await page.locator('#v-prev').click();
    assert.match(await page.locator('#v-position').textContent(), /^1 \/ 120/);
    // Inspect the longest prompt and its revealed answer at mobile and desktop widths.
    await page.locator('#v-search').fill('クロスサイトスクリプティング');
    await page.locator('#v-flip').click();
    for (const mode of ['light', 'dark']) {
      await page.locator('#qb-color-mode').selectOption(mode);
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${mode}/${width}`);
        await page.screenshot({ path: path.resolve(__dirname, `../question-banks/fe/shots/vocabulary-${mode}-${width}.png`), fullPage: true, animations: 'disabled' });
      }
      for (const selector of ['#v-flip', '#v-card-view', '#v-review', '#v-mastered']) {
        const contrast = await page.locator(selector).evaluate(button => {
          const style = getComputedStyle(button);
          const luminance = color => {
            const rgb = color.match(/[\d.]+/g).slice(0, 3).map(Number).map(channel => {
              const value = channel / 255;
              return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
            });
            return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
          };
          const a = luminance(style.color), b = luminance(style.backgroundColor);
          return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
        });
        assert.ok(contrast >= 4.5, `button contrast ${mode}/${selector}: ${contrast}`);
      }
    }
    await page.locator('#v-list-view').click();
    await page.locator('summary').click();
    await page.setViewportSize({ width: 320, height: 1000 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'list overflow at 320');
    // Bad storage remains recoverable without changing the source data.
    await page.evaluate(() => localStorage.setItem('fe:vocabulary:v1', '{broken'));
    await page.reload();
    await page.locator('#v-workspace').waitFor({ state: 'visible' });
    assert.match(await page.locator('#v-counts').textContent(), /已掌握 0 \/ 120/);
    // A failed fetch offers a working retry with no duplicate handlers or options.
    let fail = true;
    await page.route('**/fe/vocabulary.json', route => fail ? route.fulfill({ status: 503, body: '' }) : route.continue());
    await page.reload();
    await page.locator('#v-retry').waitFor({ state: 'visible' });
    assert.match(await page.locator('#v-loading').textContent(), /加载失败/);
    fail = false;
    await page.locator('#v-retry').click();
    await page.locator('#v-workspace').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#v-category option').count(), 9);
    const blocked = await context.newPage();
    blocked.on('pageerror', error => errors.push(error.message));
    await blocked.addInitScript(() => {
      const original = Storage.prototype.setItem;
      Storage.prototype.setItem = function (key, value) {
        if (key === 'fe:vocabulary:v1') throw new DOMException('Blocked', 'QuotaExceededError');
        original.call(this, key, value);
      };
    });
    await blocked.goto(base + '/fe/vocabulary.html');
    await blocked.locator('#v-flip').click();
    await blocked.locator('#v-review').click();
    assert.equal(await blocked.locator('#v-storage').isVisible(), true);
    assert.match(await blocked.locator('#v-counts').textContent(), /待复习 1/);
    assert.deepEqual(errors, []);
    console.log('FE vocabulary browser audit passed: entry, flip, keyboard, reverse, filters, review completion, persistence, shuffle, list, error recovery, blocked storage, 320/768/1440 layouts.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
