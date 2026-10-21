import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

test('editable CSS and JavaScript reproduce published assets at their existing URLs', async () => {
  for (const directory of ['src/css/', 'src/javascript/']) {
    const source = new URL(directory, root);
    for (const entry of await readdir(source, { withFileTypes: true })) {
      if (!entry.isFile() || entry.name === 'i18n_runtime.js' || !/\.(?:css|m?js)$/.test(entry.name)) continue;
      assert.deepEqual(await readFile(new URL(entry.name, source)),
        await readFile(new URL('site/assets/' + entry.name, root)), entry.name);
    }
  }
});

test('the published dictionary contains every source translation and the editable runtime', async () => {
  const source = JSON.parse(await readFile(new URL('quiz_kit/i18n.json', root), 'utf8'));
  const published = await readFile(new URL('site/assets/i18n.js', root), 'utf8');
  const payload = published.split('\n')[1];
  const actual = JSON.parse(payload.slice('window.__I18N_DICT__='.length, -1));
  for (const [original, translations] of Object.entries(source)) {
    if (original.startsWith('_') && !original.startsWith('__DYNAMIC__')) continue;
    const key = original.startsWith('__DYNAMIC__') ? original.slice('__DYNAMIC__'.length) : original;
    assert.equal(actual[key][0], translations.en, key);
    assert.equal(actual[key][1], translations.ja, key);
  }
  assert.ok(published.endsWith(await readFile(new URL('src/javascript/i18n_runtime.js', root), 'utf8')));
});
