/* Run with QUIZSITE_BROWSER_MODULES pointing to a directory containing Playwright. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const {chromium} = require(require.resolve('playwright', {
  paths: [process.env.QUIZSITE_BROWSER_MODULES || process.cwd()],
}));
const site = path.resolve(__dirname, '../site');

async function main() {
  const server = http.createServer((req, res) => {
    const file = path.resolve(site, '.' + new URL(req.url, 'http://localhost').pathname);
    if (!file.startsWith(site + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404); res.end(); return;
    }
    res.setHeader('Content-Type', ({'.html': 'text/html; charset=utf-8', '.js': 'text/javascript',
      '.mjs': 'text/javascript', '.css': 'text/css'})[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({headless: true, channel: 'msedge'});
    const base = `http://127.0.0.1:${server.address().port}`;
    for (let paper = 1; paper <= 10; paper++) {
      const context = await browser.newContext();
      await context.route('**/api/**', route => route.fulfill({json: {user: null, configured: false}}));
      await context.routeWebSocket('**/api/presence**', socket => socket.close());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(`${base}/toeic-listening/TOEIC_Listening_Test_${String(paper).padStart(2, '0')}.html`);
      for (const first of [32, 71]) {
        for (const [index, action] of ['correct', 'wrong', 'reveal'].entries()) {
          const question = page.locator(`#q${first + index}`);
          if (action === 'reveal') {
            await question.locator('.js-reveal').click();
          } else {
            const answer = await question.getAttribute('data-ans');
            const choice = action === 'correct' ? answer : (answer === 'A' ? 'B' : 'A');
            await question.locator(`li.opt[data-letter="${choice}"]`).click();
            await question.locator('.js-submit').click();
            assert.equal(await question.locator('.verdict').innerText().then(t => t.includes(action === 'correct' ? '答对了' : '答错了')), true);
          }
          assert.equal(await question.locator('details.ans:not([open])').count(), 0);
          for (let sibling = index + 1; sibling < 3; sibling++) {
            assert.equal(await page.locator(`#q${first + sibling} details.ans[open]`).count(), 0,
              `Paper ${paper}: ${action} on Q${first + index} exposed Q${first + sibling}`);
            assert.equal(await page.locator(`#q${first + sibling}`).evaluate(q => q.classList.contains('done')), false);
          }
        }
      }
      await page.reload();
      assert.equal(await page.locator('#q35 details.ans[open], #q74 details.ans[open]').count(), 0);
      assert.deepEqual(errors, []);
      console.log(`Paper ${paper}: Part 3/4 correct, wrong, reveal and reload passed`);
      await context.close();
    }
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => {
      server.close(resolve);
      server.closeAllConnections();
    });
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
