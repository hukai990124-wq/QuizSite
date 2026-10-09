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
  await page.screenshot({ path: 'fe/shots/browser-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.getByRole('heading', { name: '第 1 题 · 2026 年度 科目 B' }).waitFor();
  if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2)) throw Error('Mobile horizontal overflow');
  await page.screenshot({ path: 'fe/shots/browser-mobile.png', fullPage: true });
  await page.goto('http://localhost:8765/');
  await page.getByRole('link', { name: /基本情報技術者 · 科目 A/ }).waitFor();
  if (!(await page.locator('#ov-txt').textContent()).includes('3795')) throw Error('Homepage total wrong');
  if (failures.length) throw Error(failures.join('\n'));
  console.log('Browser smoke test passed: A/B answers, reload persistence, multi-page, mobile, homepage');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
