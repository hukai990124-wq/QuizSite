/** Isolated localhost checks. Account and AI APIs are simulated; no real writes. */
import assert from 'node:assert/strict';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import type { BrowserContext } from 'playwright';
import { banks } from './banks.mjs';

const root = fileURLToPath(new URL('../../../..', import.meta.url));
const site = join(root, 'site');
const mime: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp3': 'audio/mpeg' };
const server = createServer(async (request, response) => {
  try {
    let path = resolve(site, '.' + new URL(request.url ?? '/', 'http://localhost').pathname);
    if (!path.startsWith(site + sep)) { response.writeHead(404).end(); return; }
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    response.setHeader('Content-Type', mime[extname(path)] ?? 'application/octet-stream');
    createReadStream(path).on('error', () => response.destroy()).pipe(response);
  } catch { response.writeHead(404).end(); }
});
await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
if (!address || typeof address === 'string') throw new Error('Missing local test server');
const base = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ headless: true, ...(process.platform === 'win32' ? { channel: 'msedge' } : {}) });

async function context(): Promise<BrowserContext> {
  const value = await browser.newContext({ serviceWorkers: 'block' });
  await value.addInitScript(() => localStorage.setItem('ui:lang', 'zh'));
  await value.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== base) { await route.abort(); return; }
    if (url.pathname.startsWith('/api/')) {
      await route.fulfill({ json: { user: null, configured: false, available: false, records: [], initialized: true } });
    } else await route.continue();
  });
  await value.routeWebSocket('**/api/presence**', socket => socket.close());
  return value;
}

try {
  for (const bank of banks.filter(bank => bank.id !== 'fe')) {
    const specimen = bank.pages.flatMap(page => page.questions.map(question => ({ page, question })))
      .find(({ question }) => question.id && question.answer && question.choices.length && question.kind !== 'fill');
    assert.ok(specimen, `No choice question for ${bank.id}`);
    const isolated = await context();
    try {
      const page = await isolated.newPage();
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(`${base}/${specimen.page.path}`, { waitUntil: 'domcontentloaded' });
      const question = page.locator(`[id="${specimen.question.id}"]`);
      const answer = await question.getAttribute('data-ans');
      assert.ok(answer);
      for (const letter of answer.split(',').map(value => value.trim())) {
        await question.locator(`.opt[data-letter="${letter}"]`).click();
      }
      await question.locator('.js-submit').click();
      await page.locator(`[id="${specimen.question.id}"].done`).waitFor();
      assert.ok(await question.locator('.opt.ok').count(), `${bank.id}: correct choice was not graded`);
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.locator(`[id="${specimen.question.id}"].done`).waitFor();
      assert.deepEqual(errors, [], bank.id);
      console.log(`${bank.id}: correct answer and restored progress passed`);
    } finally { await isolated.close(); }
  }

  const isolated = await context();
  try {
    const page = await isolated.newPage();
    await page.goto(`${base}/fe/a.html?year=2024`);
    await page.getByRole('heading', { name: '第 1 题 · 2024 年度 科目 A' }).waitFor();
    assert.equal(await page.locator('.sheet img').count(), 1);
    await page.getByRole('button', { name: 'ウ', exact: true }).click();
    await page.getByRole('button', { name: '确认作答', exact: true }).click();
    await page.getByRole('status').getByText('回答正确 · 官方答案：ウ').waitFor();
    await page.reload();
    await page.getByRole('status').getByText('回答正确 · 官方答案：ウ').waitFor();
    console.log('fe: image question, correct answer and restored progress passed');

    const fillPage = banks.find(bank => bank.id === 'dele-a1')!.pages.find(page => page.questions.some(question => question.kind === 'fill'))!;
    await page.goto(`${base}/${fillPage.path}`);
    const fill = page.locator('.q[data-kind="fill"]').first();
    const accepted = (await fill.getAttribute('data-ans'))!.split('|')[0]!;
    await fill.locator('input.fill').fill(accepted);
    await fill.locator('.js-submit').click();
    assert.ok((await fill.getAttribute('class'))?.includes('done'));
    console.log('dele-a1: fill-in question passed');

    const hotspotPage = banks.find(bank => bank.id === 'aws-aif')!.pages.find(page => page.questions.some(question => question.content.qhead?.includes('badge hot')))!;
    await page.goto(`${base}/${hotspotPage.path}`);
    const hot = page.locator('.q[data-kind="fill"][data-ans]:not([data-ans=""])').first();
    await hot.locator('.hotspot-form').waitFor();
    const values = (await hot.getAttribute('data-ans'))!.split('>');
    for (const [index, value] of values.entries()) await hot.locator('select').nth(index).selectOption(value);
    await hot.locator('.js-submit').click();
    assert.ok((await hot.getAttribute('class'))?.includes('done'));
    console.log('aws-aif: hotspot matching question passed');

    await page.goto(`${base}/toeic-listening/TOEIC_Listening_Test_01.html`);
    assert.ok(await page.locator('audio').count());
    const audio = page.locator('audio').first();
    const src = await audio.getAttribute('src') ?? await audio.locator('source').first().getAttribute('src');
    assert.ok(src);
    assert.ok((await isolated.request.head(new URL(src, page.url()).href)).ok(), 'Listening audio file missing');
    console.log('toeic-listening: audio source resolves');

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}/programming/css.html`);
    assert.equal(await page.locator('.q').count(), 20);
    assert.ok(await page.locator('.q').first().isVisible());
    await page.screenshot({ path: join(root, '.build/banks/mobile-smoke.png') });
    console.log('programming: mobile rendering passed');
  } finally { await isolated.close(); }
} finally {
  await browser.close();
  server.closeAllConnections();
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
}
