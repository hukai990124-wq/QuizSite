import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir, stat } from 'node:fs/promises';

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

test('all subject materials have one grouped location without old root directories', async () => {
  const subjects = ['aws-aif', 'aws-aip', 'aws-clf', 'aws-mla', 'aws-saa', 'dele-a1', 'dele-a2',
    'fe', 'java-bronze', 'programming', 'toeic-listening', 'toeic-reading', 'workbuddy-opc'];
  for (const subject of subjects) {
    assert.ok((await stat(new URL('question-banks/' + subject + '/', root))).isDirectory(), subject);
    await assert.rejects(access(new URL(subject + '/', root)), { code: 'ENOENT' });
  }
});

test('VS Code workspace categories and tasks resolve to real project locations and commands', async () => {
  const workspace = JSON.parse(await readFile(new URL('QuizSite.code-workspace', root), 'utf8'));
  for (const folder of workspace.folders) {
    assert.ok((await stat(new URL(folder.path + '/', root))).isDirectory(), folder.path);
  }
  for (const source of ['src/css', 'src/javascript', 'src/typescript', 'site', 'question-banks', 'worker']) {
    assert.ok(workspace.folders.some(folder => folder.path === source), source);
  }
  assert.ok(workspace.folders.some(folder => folder.path === '.'));
  const tasks = JSON.parse(await readFile(new URL('.vscode/tasks.json', root), 'utf8')).tasks;
  const pkg = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
  for (const task of tasks) {
    assert.equal(task.options.cwd, '${workspaceFolder}');
    if (task.command === 'pnpm') assert.ok(pkg.scripts[task.args.at(-1)], task.label);
    if (task.dependsOn) assert.ok(tasks.some(dependency => dependency.label === task.dependsOn));
  }
  assert.deepEqual(tasks.find(task => task.command === 'python').args,
    ['-m', 'http.server', '8000', '--directory', 'site']);
});
