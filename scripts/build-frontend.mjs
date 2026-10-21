import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const assets = new URL('site/assets/', root);
await mkdir(assets, { recursive: true });

for (const directory of ['src/css/', 'src/javascript/']) {
  const source = new URL(directory, root);
  for (const entry of await readdir(source, { withFileTypes: true })) {
    if (!entry.isFile() || entry.name === 'i18n_runtime.js') continue;
    if (!/\.(?:css|m?js)$/.test(entry.name)) continue;
    await copyFile(new URL(entry.name, source), new URL(entry.name, assets));
  }
}

const dictionary = JSON.parse(await readFile(new URL('quiz_kit/i18n.json', root), 'utf8'));
const pairs = Object.create(null);
for (const [original, translations] of Object.entries(dictionary)) {
  const key = original.startsWith('__DYNAMIC__') ? original.slice('__DYNAMIC__'.length) : original;
  if (original.startsWith('_') && !original.startsWith('__DYNAMIC__')) continue;
  if (typeof translations.en !== 'string' || typeof translations.ja !== 'string') {
    throw new Error(`Missing translation: ${key}`);
  }
  pairs[key] = [translations.en, translations.ja];
}
const runtime = await readFile(new URL('src/javascript/i18n_runtime.js', root), 'utf8');
await writeFile(new URL('i18n.js', assets),
  '/* 自动生成：quiz_kit/i18n.json + src/javascript/i18n_runtime.js —— 请勿手改 */\n' +
  `window.__I18N_DICT__=${JSON.stringify(pairs)};\n` + runtime, 'utf8');
console.log('Published CSS, JavaScript and translations to site/assets/.');
