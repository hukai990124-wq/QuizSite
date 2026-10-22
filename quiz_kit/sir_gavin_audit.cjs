const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(require.resolve('playwright', { paths: [process.env.QUIZSITE_BROWSER_MODULES || process.cwd()] }));
const site = path.resolve(__dirname, '../site');

async function main() {
  const document = JSON.parse(fs.readFileSync(path.join(site, 'knight/media/sir-gavin.gltf')));
  const buffers = document.buffers.map(buffer => {
    const bytes = fs.readFileSync(path.join(site, 'knight/media', buffer.uri));
    assert.equal(bytes.length, buffer.byteLength);
    assert.ok(bytes.length <= 20 * 1024 * 1024);
    return bytes;
  });
  for (const view of document.bufferViews) {
    assert.equal(view.byteOffset % 4, 0);
    assert.ok(view.byteOffset + view.byteLength <= buffers[view.buffer].length);
  }
  if (process.argv[2]) {
    const original = fs.readFileSync(path.join(process.argv[2], 'sir_gavin.glb'));
    const jsonLength = original.readUInt32LE(12);
    const originalDocument = JSON.parse(original.subarray(20, 20 + jsonLength).toString());
    const binary = original.subarray(28 + jsonLength);
    for (const [index, view] of document.bufferViews.entries()) {
      const oldView = originalDocument.bufferViews[index];
      assert.deepEqual(buffers[view.buffer].subarray(view.byteOffset, view.byteOffset + view.byteLength),
        binary.subarray(oldView.byteOffset || 0, (oldView.byteOffset || 0) + oldView.byteLength));
    }
    assert.deepEqual(document.animations, originalDocument.animations);
  }
  const server = http.createServer((request, response) => {
    const target = path.resolve(site, '.' + new URL(request.url, 'http://localhost').pathname);
    if (!target.startsWith(site + path.sep) || !fs.existsSync(target)) { response.writeHead(404).end(); return; }
    const file = fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : target;
    response.setHeader('Content-Type', ({ '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.gltf': 'model/gltf+json' })[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    await page.addInitScript(() => { if (!localStorage.getItem('ui:lang')) localStorage.setItem('ui:lang', 'zh'); });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const requested = [];
    page.on('request', request => requested.push(request.url()));
    await page.route('**/api/**', route => route.fulfill({ json: { configured: false, authenticated: false, available: true, remaining: 5, dailyLimit: 5 } }));
    await page.goto(`http://127.0.0.1:${server.address().port}/knight/`);
    await page.locator('#contact-author').click();
    assert.equal(await page.locator('#contact-author-dialog').evaluate(element => element.open), true);
    assert.equal(await page.locator('#contact-author-dialog a').getAttribute('href'), 'https://github.com/hukai990124-wq');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#contact-author-dialog').evaluate(element => element.open), false);
    await page.locator('#contact-author').click();
    await page.locator('#contact-author-close').click();
    assert.equal(await page.locator('#contact-author-dialog').evaluate(element => element.open), false);
    assert.doesNotMatch(await page.locator('#chat-title').evaluate(element => getComputedStyle(element.firstElementChild).fontFamily), /UnifrakturCook/);
    await page.waitForFunction(() => !document.getElementById('shake-hands').disabled, { timeout: 90000 });
    await page.locator('#shake-hands').click();
    await page.waitForFunction(() => document.getElementById('pet-message').textContent.includes('握'));
    await page.waitForTimeout(3500);
    await page.locator('#reset-view').click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.equal(await page.locator('.chat-composer input:disabled').count(), 1);
    await page.route('**/api/gavin/status?*', route => route.fulfill({ json: { configured: new URL(route.request().url()).searchParams.get('provider') === 'cloudflare', authenticated: false, available: true, remaining: 5, dailyLimit: 5 } }));
    let chatPayload;
    await page.route('**/api/gavin', route => {
      chatPayload = route.request().postDataJSON();
      return route.fulfill({ contentType: 'application/x-ndjson', body: JSON.stringify({type:'delta',text:'<img src=x onerror=alert(1)> A historical answer.'}) + '\n' + JSON.stringify({type:'done',truncated:false,configured:true,authenticated:false,available:true,remaining:4,dailyLimit:5}) + '\n' });
    });
    await page.locator('#gavin-retry').click();
    await page.locator('#gavin-input:enabled').waitFor();
    await page.locator('#gavin-input').fill('Explain the Hundred Years War.');
    await page.locator('#gavin-send').click();
    await page.waitForFunction(() => document.getElementById('gavin-log').textContent.includes('A historical answer.'));
    assert.equal(chatPayload.question, 'Explain the Hundred Years War.');
    assert.equal(chatPayload.provider, 'cloudflare');
    assert.equal(await page.locator('#gavin-log img').count(), 0);
    await page.locator('#gavin-input:enabled').waitFor();
    await page.locator('#gavin-model').selectOption('nvidia');
    await page.waitForFunction(() => document.getElementById('gavin-status').textContent.includes('所选模型尚未配置'));
    assert.equal(await page.locator('#gavin-input').isDisabled(), true);
    assert.equal(await page.locator('#gavin-log .i18n-noloc').count(), 0);
    await page.locator('#gavin-model').selectOption('cloudflare');
    await page.locator('#gavin-input:enabled').waitFor();
    await page.locator('#gavin-input').fill('Explain the Norman Conquest.');
    await page.locator('#gavin-send').click();
    await page.waitForFunction(() => document.getElementById('gavin-log').textContent.includes('A historical answer.'));
    assert.deepEqual(chatPayload.history, []);
    const originalConversation = await page.locator('#gavin-log .i18n-noloc').allTextContents();
    for (const [language, resetLabel, placeholder] of [
      ['en', 'Reset view', 'Ask your knight mentor…'],
      ['ja', '視点をリセット', '騎士の先生に質問…'],
      ['zh', '重置视角', '向骑士导师提问…'],
    ]) {
      await page.locator(`[data-set-lang="${language}"]`).click();
      await page.waitForFunction(expected => document.getElementById('reset-view').textContent === expected, resetLabel);
      assert.equal(await page.locator('#gavin-input').getAttribute('placeholder'), placeholder);
      assert.equal(await page.locator(`[data-set-lang="${language}"]`).getAttribute('aria-pressed'), 'true');
      assert.deepEqual(await page.locator('#gavin-log .i18n-noloc').allTextContents(), originalConversation);
      assert.match(await page.locator('#gavin-status').textContent(), language === 'en' ? /GavinAI ready/ : language === 'ja' ? /GavinAI 準備完了/ : /GavinAI 已就绪/);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    await page.locator('[data-set-lang="ja"]').click();
    await page.reload();
    await page.waitForFunction(() => document.documentElement.getAttribute('data-lang') === 'ja');
    assert.equal(await page.locator('#reset-view').textContent(), '視点をリセット');
    assert.equal(await page.locator('#gavin-model').inputValue(), 'cloudflare');
    assert.match(await page.locator('#pet-title').evaluate(element => getComputedStyle(element).fontFamily), /UnifrakturCook/);
    await page.waitForFunction(() => !document.getElementById('shake-hands').disabled, { timeout: 90000 });
    await page.locator('#shake-hands').click();
    await page.waitForFunction(() => /握手しました|音声を再生できません/.test(document.getElementById('pet-message').textContent));
    await page.locator('[data-set-lang="zh"]').click();
    await page.setViewportSize({ width: 1440, height: 1100 });
    await page.locator('#reset-view').click();
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(process.env.TEMP || '.', 'quizsite-sir-gavin-desktop.png'), fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    assert.equal(requested.some(url => /draco|blakcdragon|dragon-roar/i.test(url)), false);
    assert.deepEqual(errors, []);
    await page.screenshot({ path: path.join(process.env.TEMP || '.', 'quizsite-sir-gavin-mobile.png'), fullPage: true });
    console.log('PASS: lossless model, asset limits, rendering, handshake, mobile layout, GavinAI streaming, safe text rendering, no Draco requests.');
  } finally {
    await browser.close();
    server.close();
  }
}
main().catch(error => { console.error(error); process.exit(1); });
