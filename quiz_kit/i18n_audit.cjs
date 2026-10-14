/* Run with the bundled Playwright module: QUIZBANK_BROWSER_MODULES=<module directory>. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(require.resolve('playwright', { paths: [process.env.QUIZBANK_BROWSER_MODULES || process.cwd()] }));
const site = path.resolve(__dirname, '../site');
let activeBrowser;
function pages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? pages(full) : entry.name.endsWith('.html') ? [path.relative(site, full).replaceAll('\\', '/')] : [];
  });
}
async function main() {
  const server = http.createServer((request, response) => {
    const file = path.resolve(site, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if ((file !== site && !file.startsWith(site + path.sep)) || !fs.existsSync(file)) { response.writeHead(404); response.end(); return; }
    const target = fs.statSync(file).isDirectory() ? path.join(file, 'index.html') : file;
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
    response.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(response);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  server.unref();
  const base = process.env.QUIZBANK_TEST_BASE || `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true, channel: process.env.QUIZBANK_BROWSER_CHANNEL || 'msedge' });
  activeBrowser = browser;
  const context = await browser.newContext();
  await context.route('**/api/**', route => {
    const pathname = new URL(route.request().url()).pathname;
    const payload = pathname === '/api/auth/me' ? { user: null } : pathname === '/api/chat/status' ? { configured: true, available: true, authenticated: false, dailyLimit: 20, remaining: 20 } : pathname === '/api/auth/login' ? { error: '账号或密码错误' } : {};
    if (pathname === '/api/auth/login') return route.fulfill({ status: 401, json: payload });
    return route.fulfill({ json: payload });
  });
  if (context.routeWebSocket) await context.routeWebSocket('**/api/presence**', socket => socket.close());
  await context.addInitScript(() => localStorage.setItem('ui:lang', 'en'));
  const page = await context.newPage();
  const missing = new Map(), errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const all = pages(site).sort();
  for (const subject of ['a', 'b']) {
    for (const year of [2023, 2024, 2025, 2026]) all.push(`fe/${subject}.html?year=${year}`);
    for (const paper of [2, 3]) all.push(`fe/${subject}.html?paper=${paper}`);
  }
  for (const pool of ['aws-clf', 'aws-aif', 'aws-saa', 'toeic-listening', 'toeic-reading']) {
    for (const size of pool.startsWith('aws') ? [50] : [50, 100]) all.push(`random.html?pool=${pool}&size=${size}&seed=12345678`);
  }
  const scanPages = process.argv.includes('--regressions-only') ? [] : all;
  for (const file of scanPages) {
    await page.goto(base + '/' + file, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.__I18N__ && document.querySelector('[data-set-lang]'));
    await page.waitForTimeout(100);
    if (file.startsWith('random.html?')) {
      await page.waitForFunction(() => document.querySelector('.random-again') || document.querySelector('#message')?.textContent.startsWith('出题失败'), null, { timeout: 20000 });
      await page.waitForTimeout(100);
    }
    const option = page.locator('.q .opt, .options .option').first();
    if (await option.count() && await option.isVisible() && await option.isEnabled()) {
      await option.click();
      const check = page.locator('.q .js-submit, .answer button.primary').first();
      if (await check.count() && await check.isEnabled()) await check.click();
      await page.waitForTimeout(50);
    }
    const items = await page.evaluate(() => {
      const result = [], normalize = text => (text || '').replace(/\s+/g, ' ').trim();
      const runtime = window.__I18N__;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode, element = node.parentElement;
        if (!element || element.closest('script,style,noscript,textarea,svg,canvas,iframe,.lang-switch')) continue;
        if (runtime.region(element) === 'black') continue;
        const text = normalize(node.nodeValue);
        if (/[\u4e00-\u9fff]/.test(text)) result.push({ text, kind: 'text', selector: element.tagName.toLowerCase() + (element.id ? '#' + element.id : '.' + element.className) });
      }
      for (const element of document.querySelectorAll('[title],[aria-label],[placeholder],[alt]')) {
        if (runtime.region(element) === 'black') continue;
        for (const attribute of ['title', 'aria-label', 'placeholder', 'alt']) {
          const text = normalize(element.getAttribute(attribute));
          if (/[\u4e00-\u9fff]/.test(text)) result.push({ text, kind: attribute, selector: element.tagName.toLowerCase() + '#' + element.id });
        }
      }
      if (/[\u4e00-\u9fff]/.test(document.title)) result.push({ text: document.title, kind: 'title', selector: 'title' });
      return result;
    });
    for (const item of items) {
      const record = missing.get(item.text) || { ...item, pages: [] };
      if (!record.pages.includes(file)) record.pages.push(file);
      missing.set(item.text, record);
    }
    if ((scanPages.indexOf(file) + 1) % 20 === 0) console.log(`Scanned ${scanPages.indexOf(file) + 1} / ${scanPages.length} pages`);
  }
  const regressions = [];
  await page.goto(base + '/aws-aif/bank/part03.html', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#q114 .hotspot-form');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForSelector('#quizbank-back-to-top', {state:'attached'});
  assert.equal(await page.locator('#quizbank-back-to-top').count(),1);
  assert.equal(await page.locator('#quizbank-back-to-top').isVisible(),false);
  await page.evaluate(() => window.scrollTo(0,600));
  await page.waitForFunction(() => !document.getElementById('quizbank-back-to-top').hidden);
  await page.locator('#quizbank-back-to-top').click();
  await page.waitForFunction(() => window.scrollY === 0);
  assert.equal(await page.locator('#quizbank-back-to-top').isVisible(),false);
  regressions.push('TypeScript back-to-top mounts once, toggles with scrolling and respects reduced motion');
  await page.locator('#btn-report').click();
  const reportHome = page.locator('#mask .qb-report-home');
  await reportHome.waitFor({ state: 'visible' });
  assert.equal(await reportHome.count(), 1);
  assert.equal(await reportHome.getAttribute('href'), '/');
  for (const language of ['zh', 'en', 'ja']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    assert.equal(await reportHome.textContent(), ({ zh: '回到主页', en: 'Back to home', ja: 'ホームに戻る' })[language]);
  }
  await page.locator('#rp-close').click();
  regressions.push('submission report offers one home link in all three languages');
  const originalStem = await page.locator('#q114 .stem').textContent();
  for (const language of ['ja', 'zh', 'en']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    await page.waitForTimeout(50);
    const home = await page.locator('.qb-sitebar__home').textContent();
    assert.equal(home, '← ' + ({ en: 'Question bank', ja: '問題一覧', zh: '题库总览' })[language]);
    assert.equal(await page.locator('#q114 .stem').textContent(), originalStem);
  }
  regressions.push('home links follow all three languages; original question text stays unchanged');
  const resetMessage = '清空本份全部作答记录？此操作不可撤销。';
  for (const language of ['zh', 'en', 'ja']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    const confirmation = new Promise(resolve => page.once('dialog', async dialog => { resolve(dialog.message()); await dialog.dismiss(); }));
    await page.evaluate(message => window.confirm(message), resetMessage);
    const message = await confirmation;
    assert.equal(message, language === 'zh' ? resetMessage : await page.evaluate(({ language, resetMessage }) => window.__I18N__.dict[resetMessage][language === 'en' ? 0 : 1], { language, resetMessage }));
  }
  regressions.push('native confirmation messages use the selected language, including Chinese');
  await page.evaluate(() => {
    const fixture = document.createElement('p'); fixture.className = 'notice'; fixture.id = 'i18n-fixture';
    fixture.textContent = '正在检查登录状态……'; document.body.append(fixture);
  });
  await page.waitForTimeout(50);
  await page.evaluate(() => {
    document.getElementById('i18n-fixture').textContent = '今日剩余 12 / 50 次（UTC-8 标准时间每日 0:00 刷新）。';
  });
  await page.waitForTimeout(50);
  await page.evaluate(() => window.__I18N__.setLang('zh'));
  assert.equal(await page.locator('#i18n-fixture').textContent(), '今日剩余 12 / 50 次（UTC-8 标准时间每日 0:00 刷新）。');
  await page.evaluate(() => window.__I18N__.setLang('en'));
  assert.equal(await page.locator('#i18n-fixture').textContent(), '12 / 50 left today (resets daily at 00:00 UTC-8).');
  await page.evaluate(() => document.getElementById('i18n-fixture').setAttribute('title', '第 7 题，未作答'));
  await page.waitForTimeout(50);
  assert.equal(await page.locator('#i18n-fixture').getAttribute('title'), 'Q7 · unanswered');
  await page.evaluate(() => {
    document.getElementById('i18n-fixture').textContent = '今日剩余 11 / 50 次（UTC-8 标准时间每日 0:00 刷新）。';
    window.__I18N__.setLang('zh');
  });
  assert.equal(await page.locator('#i18n-fixture').textContent(), '今日剩余 11 / 50 次（UTC-8 标准时间每日 0:00 刷新）。');
  await page.evaluate(() => window.__I18N__.setLang('en'));
  regressions.push('changing quotas and accessible attributes are translated without restoring stale values');
  await page.locator('#q114 .qb-question-chat').click();
  for (const language of ['en', 'ja', 'zh']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    assert.equal(await page.locator('#qb-chat-input').inputValue(), ({ en: 'Briefly give the correct answer and the main reason for this question.', ja: 'この問題の正解と主な理由を簡潔に説明してください。', zh: '请简要说明这道题的正确答案和主要理由。' })[language]);
  }
  await page.locator('#qb-chat-close').click();
  await page.evaluate(() => window.__I18N__.setLang('en'));
  regressions.push('AI explanation buttons and untouched auto-drafts follow the selected language');
  const selects = page.locator('#q114 .hotspot-form select');
  assert.equal(await selects.count(), 4);
  for (let index = 0; index < 4; index++) await selects.nth(index).selectOption(['A','B','C','D'][index]);
  await page.locator('#q114 .js-submit').click();
  assert.equal(await page.locator('#q114').evaluate(q => q.classList.contains('wrong')), true);
  await page.locator('#q114 .js-redo').click();
  for (let index = 0; index < 4; index++) await selects.nth(index).selectOption(['D','B','A','C'][index]);
  await page.locator('#q114 .js-submit').click();
  assert.equal(await page.locator('#q114').evaluate(q => q.classList.contains('done') && !q.classList.contains('wrong')), true);
  await page.reload();
  await page.waitForSelector('#q114 .hotspot-form');
  assert.deepEqual(await page.locator('#q114 select').evaluateAll(selects => selects.map(select => select.value)), ['D','B','A','C']);
  assert.equal(await page.locator('#q114 select').first().isDisabled(), true);
  if (process.argv[2]) {
    const output = path.dirname(path.resolve(process.argv[2]));
    await page.locator('#q114 .hotspot-form').screenshot({ path: path.join(output, 'aif-hotspot-desktop.png') });
    await page.setViewportSize({ width: 390, height: 844 });
    const bounds = await page.locator('#q114 .hotspot-form').boundingBox();
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 390);
    await page.locator('#q114 .hotspot-form').screenshot({ path: path.join(output, 'aif-hotspot-mobile.png') });
    await page.setViewportSize({ width: 1280, height: 720 });
  }
  regressions.push('Q114 wrong order fails; correct order passes and survives reload');
  const mappings = JSON.parse(fs.readFileSync(path.join(site, 'assets/aif-hotspots.json')));
  for (const part of [3, 4, 5, 6, 7, 8, 9]) {
    await page.goto(base + `/aws-aif/bank/part0${part}.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => [...document.querySelectorAll('.badge.hot')].every(badge => badge.closest('.q').querySelector('.hotspot-form')));
    for (const [number, data] of Object.entries(mappings).filter(([number]) => Math.ceil(Number(number) / 50) === part)) {
      assert.equal(await page.locator(`#q${number} select`).count(), data.rows.length);
      assert.equal(await page.locator(`#q${number} select`).first().locator('option').count(), data.options.length + 1);
      assert.ok(data.answer, 'all current matching questions have a scoring key');
      if (data.review) {
        const q = page.locator(`#q${number}`);
        assert.equal(await q.locator('.hotspot-reference').isVisible(), false, 'reasoning stays folded before answering');
        await q.locator('details.ans summary').click();
        for (const language of ['en','ja','zh']) {
          await page.evaluate(language => window.__I18N__.setLang(language), language);
          assert.equal(await q.locator('.hotspot-reference p').textContent(), data.review[language]);
        }
        assert.deepEqual(await q.locator('.hotspot-reference a').evaluateAll(links => links.map(link => link.href)), data.review.sources);
        if (data.answer) {
          const selects = q.locator('select');
          if (['188', '245'].includes(number)) {
            for (let index = 0; index < data.answer.length; index++) await selects.nth(index).selectOption(index === 0 ? 'A' : String.fromCharCode(65 + data.answer[index]));
            await q.locator('.js-submit').click();
            assert.equal(await q.evaluate(node => node.classList.contains('wrong')), true);
            await q.locator('.js-redo').click();
          }
          for (let index = 0; index < data.answer.length; index++) await selects.nth(index).selectOption(String.fromCharCode(65 + data.answer[index]));
          await q.locator('.js-submit').click();
          assert.equal(await q.evaluate(node => node.classList.contains('done') && !node.classList.contains('wrong')), true);
          if (['188', '245'].includes(number)) {
            await page.reload();
            await page.waitForSelector(`#q${number} .hotspot-form`);
            assert.deepEqual(await selects.evaluateAll(nodes => nodes.map(node => node.value)), data.answer.map(index => String.fromCharCode(65 + index)));
            assert.equal(await selects.first().isDisabled(), true);
          }
        }
      }
    }
  }
  regressions.push('all 32 matching questions have scoring keys; all seven editorial keys pass including Q188 and repaired Q245');
  await page.goto(base + '/index.html', { waitUntil: 'domcontentloaded' });
  await page.locator('.qb-auth-trigger').click();
  await page.locator('#qb-username').fill('TestUser1');
  await page.locator('#qb-password').fill('testpass1');
  await page.locator('#qb-auth-submit').click();
  await page.waitForFunction(() => document.getElementById('qb-auth-error').textContent !== '');
  for (const language of ['en', 'ja', 'zh']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    await page.waitForTimeout(50);
    assert.equal(await page.locator('#qb-auth-error').textContent(), ({ en: 'Account or password is incorrect.', ja: 'アカウントまたはパスワードが正しくありません。', zh: '账号或密码错误。' })[language]);
    assert.equal(await page.locator('#qb-username').inputValue(), 'TestUser1');
  }
  await page.locator('#qb-account-close').click();
  await page.locator('.qb-chat-trigger').click();
  await page.locator('#qb-chat-input').fill('Keep my draft unchanged / 保留我的问题');
  for (const language of ['ja', 'en', 'zh']) {
    await page.evaluate(language => window.__I18N__.setLang(language), language);
    await page.waitForTimeout(50);
    assert.equal(await page.locator('#qb-chat-input').inputValue(), 'Keep my draft unchanged / 保留我的问题');
    assert.equal(await page.locator('#qb-chat-title').textContent(), ({ zh: '题库学习助手', en: 'QuizBank study assistant', ja: 'QuizBank 学習アシスタント' })[language]);
  }
  regressions.push('account errors and chat dialog follow language switching without overwriting user input');
  let nextReply;
  await page.route('**/api/chat', route => nextReply(route));
  await page.emulateMedia({reducedMotion:'no-preference'});
  for (const success of [true,false,true]) {
    const pending = new Promise(resolve => {nextReply = resolve;});
    await page.locator('#qb-chat-input').fill('Explain AWS S3 storage.');
    await page.locator('#qb-chat-input').press('Enter');
    const request = await pending;
    assert.equal(await page.locator('.qb-chat-dialog').evaluate(node=>node.classList.contains('is-thinking')),true);
    assert.equal(await page.locator('#qb-chat-form').getAttribute('aria-busy'),'true');
    assert.notEqual(await page.locator('#qb-chat-status').evaluate(node=>getComputedStyle(node,'::before').animationName),'none');
    for (const width of [320,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      const box = await page.locator('.qb-chat-dialog').boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width);
    }
    if (process.argv[2]) await page.locator('.qb-chat-dialog').screenshot({path:path.join(path.dirname(path.resolve(process.argv[2])), 'ai-spinner-dialog.png')});
    await page.emulateMedia({reducedMotion:'reduce'});
    assert.equal(await page.locator('#qb-chat-status').evaluate(node=>getComputedStyle(node,'::before').animationName),'none');
    await page.emulateMedia({reducedMotion:'no-preference'});
    await request.fulfill(success ? {json:{answer:'S3 stores objects.',remaining:19,dailyLimit:20,authenticated:false,available:true,configured:true,truncated:false}} : {status:503,json:{error:'服务暂不可用。'}});
    await page.waitForFunction(()=>!document.querySelector('.qb-chat-dialog').classList.contains('is-thinking'));
    await page.waitForFunction(()=>!document.getElementById('qb-chat-send').disabled);
    assert.equal(await page.locator('#qb-chat-status').evaluate(node=>getComputedStyle(node,'::before').animationName),'none');
    if (!success) assert.equal(await page.locator('#qb-chat-error').textContent(),'服务暂不可用。');
    else {
      assert.equal(await page.locator('#qb-chat-error').textContent(),'');
      assert.equal(await page.locator('.qb-chat-message--assistant').last().locator('div').textContent(),'S3 stores objects.');
    }
  }
  regressions.push('AI spinner animates only during requests, respects reduced motion, and stops on success/error/retry');
  for (const paper of ['aws-clf/part01.html', 'aws-saa/real/part01.html', 'aws-aif/practice/part01.html', 'toeic-listening/TOEIC_Listening_Test_06.html', 'toeic-reading/TOEIC_Reading_Test_01.html', 'dele-a1/a1-2009-0516.html', 'dele-a2/a2-modelo0-2020.html', 'random.html?pool=toeic-listening&size=50&seed=12345678']) {
    await page.goto(base + '/' + paper, {waitUntil:'domcontentloaded'});
    await page.locator('#btn-report').click();
    const link = page.locator('#mask .qb-report-home');
    await link.waitFor({state:'visible'});
    assert.equal(await link.count(),1);
    for (const width of [320,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      const box = await link.boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width);
    }
    await link.focus();
    assert.equal(await link.evaluate(node => node === document.activeElement),true);
    if (paper.startsWith('dele-a2') && process.argv[2]) await page.locator('#mask .report').screenshot({path:path.join(path.dirname(path.resolve(process.argv[2])), 'report-home.png')});
    await link.press('Enter');
    await page.waitForURL(base + '/', {waitUntil:'domcontentloaded'});
  }
  regressions.push('all subject reports and a generated random paper navigate home with keyboard activation and responsive layout');
  await browser.close();
  await new Promise(resolve => server.close(resolve));
  const report = { pageCount: scanPages.length, regressions, errors: [...new Set(errors)], missing: [...missing.values()] };
  if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (report.errors.length || report.missing.length) process.exitCode = 1;
}
main().catch(async error => { console.error(error); await activeBrowser?.close(); process.exitCode = 1; });
