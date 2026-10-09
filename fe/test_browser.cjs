/* Local smoke test. Run with NODE_PATH pointing to the bundled node_modules. */
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' });
  fs.mkdirSync('fe/shots', { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('response', response => {
    if (response.url().startsWith('http://localhost:8765/') && response.status() >= 400)
      failures.push(`${response.status()} ${response.url()}`);
  });
  await page.goto('http://localhost:8765/fe/a.html?year=2024');
  await page.getByRole('heading', { name: '第 1 题 · 2024 年度 科目 A' }).waitFor();
  if (await page.locator('.sheet img').count() !== 1) throw Error('A question image missing');
  await page.getByRole('button', { name: 'ウ', exact: true }).click();
  await page.getByRole('button', { name: '确认作答' }).click();
  await page.getByRole('status').getByText('回答正确 · 官方答案：ウ').waitFor();
  await page.reload();
  await page.getByRole('status').getByText('回答正确 · 官方答案：ウ').waitFor();
  await page.goto('http://localhost:8765/fe/b.html?year=2026');
  await page.getByRole('heading', { name: '第 1 题 · 2026 年度 科目 B' }).waitFor();
  await page.getByRole('button', { name: '第 6 题，未作答' }).click();
  if (await page.locator('.sheet img').count() !== 2) throw Error('B multi-page image missing');
  await page.getByRole('button', { name: 'ケ', exact: true }).click();
  await page.getByRole('button', { name: '确认作答' }).click();
  await page.getByRole('status').getByText('回答正确 · 官方答案：ケ').waitFor();
  await page.goto('http://localhost:8765/fe/a.html?year=2022');
  await page.getByRole('heading', { name: '第 1 题 · 2022 年官方样题 科目 A' }).waitFor();
  if (!(await page.locator('.notice').textContent()).includes('样题')) throw Error('2022 A must be labeled as sample');
  if (await page.locator('.question-nav button').count() !== 60) throw Error('2022 A sample must have 60 questions');
  await page.getByRole('button', { name: 'エ', exact: true }).click();
  await page.getByRole('button', { name: '确认作答' }).click();
  await page.getByRole('status').getByText('回答正确 · 官方答案：エ').waitFor();
  await page.goto('http://localhost:8765/fe/b.html?year=2022');
  await page.getByRole('heading', { name: '第 1 题 · 2022 年官方样题 科目 B' }).waitFor();
  if (await page.locator('.question-nav button').count() !== 20) throw Error('2022 B sample must have 20 questions');
  await page.getByRole('button', { name: 'カ', exact: true }).click();
  await page.getByRole('button', { name: '确认作答' }).click();
  await page.getByRole('status').getByText('回答正确 · 官方答案：カ').waitFor();
  await page.goto('http://localhost:8765/fe/a.html?year=2023');
  await page.getByRole('heading', { name: '第 1 题 · 2023 年度 科目 A' }).waitFor();
  if (await page.locator('.question-nav button').count() !== 20) throw Error('2023 A public set must have 20 questions');
  await page.goto('http://localhost:8765/fe/b.html?year=2023');
  await page.getByRole('heading', { name: '第 1 题 · 2023 年度 科目 B' }).waitFor();
  if (await page.locator('.question-nav button').count() !== 6) throw Error('2023 B public set must have 6 questions');
  for (const paper of [2, 3]) {
    for (const subject of ['a', 'b']) {
      await page.goto(`http://localhost:8765/fe/${subject}.html?paper=${paper}`);
      await page.getByRole('heading', { name: new RegExp(`第 1 题 · 第 ${paper} 套`) }).waitFor();
      const expected = subject === 'a' ? 60 : 20;
      if (await page.locator('.question-nav button').count() !== expected) throw Error(`Paper ${paper} ${subject} must have ${expected} questions`);
      if (!(await page.locator('.source-credit').textContent()).includes('出典：')) throw Error('Source attribution missing');
      if (!(await page.getByRole('link', { name: '题目原 PDF ↗' }).getAttribute('href')).startsWith('https://www.ipa.go.jp/')) throw Error('Original IPA PDF missing');
      const correct = { '2-a': 'エ', '2-b': 'ア', '3-a': 'ウ', '3-b': 'エ' }[`${paper}-${subject}`];
      await page.getByRole('button', { name: correct, exact: true }).click();
      await page.getByRole('button', { name: '确认作答' }).click();
      await page.getByRole('status').getByText(`回答正确 · 官方答案：${correct}`).waitFor();
      await page.reload();
      await page.getByRole('status').getByText(`回答正确 · 官方答案：${correct}`).waitFor();
      if (subject === 'a') await page.screenshot({ path: `fe/shots/paper-${paper}-a.png`, fullPage: true });
    }
  }
  await page.goto('http://localhost:8765/fe/b.html?year=2023');
  await page.screenshot({ path: 'fe/shots/browser-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.getByRole('heading', { name: '第 1 题 · 2023 年度 科目 B' }).waitFor();
  if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2)) throw Error('Mobile horizontal overflow');
  await page.screenshot({ path: 'fe/shots/browser-mobile.png', fullPage: true });
  await page.goto('http://localhost:8765/');
  const feCards = page.locator('.cards a.card').filter({ hasText: '基本情報技術者' });
  if (await feCards.count() !== 1) throw Error('Homepage must show one FE category card');
  if (await feCards.first().getAttribute('href') !== 'fe/index.html') throw Error('FE card must open subject chooser');
  if (!(await feCards.first().textContent()).includes('8/344')) throw Error('FE category must combine A and B progress');
  if (!(await page.locator('#ov-txt').textContent()).includes('4061')) throw Error('Homepage total wrong');
  await feCards.first().click();
  await page.getByRole('link', { name: /科目 A 题库/ }).waitFor();
  await page.getByRole('link', { name: /科目 B 题库/ }).waitFor();
  if (failures.length) throw Error(failures.join('\n'));
  console.log('Browser smoke test passed: A/B answers, reload persistence, multi-page, mobile, homepage');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
