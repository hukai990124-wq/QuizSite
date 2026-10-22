import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const generator = read('question-banks/toeic-listening/gen_html.py');
const scripts = [['generator', generator.match(/EXTRA_JS = r"""\s*<script>([\s\S]*?)<\/script>/)[1]]];
for (const directory of ['question-banks', 'site']) {
  for (let paper = 1; paper <= 10; paper++) {
    const path = `${directory}/toeic-listening/TOEIC_Listening_Test_${String(paper).padStart(2, '0')}.html`;
    const script = [...read(path).matchAll(/<script>([\s\S]*?)<\/script>/g)]
      .find(match => match[1].includes('btn-text'))?.[1];
    assert.ok(script, `Listening behavior missing: ${path}`);
    scripts.push([path, script]);
  }
}

// Run the actual listening event handler against three sibling questions.
for (const [name, script] of scripts) {
  test(`${name}: answering or revealing one question leaves siblings closed`, () => {
    for (const action of ['.js-submit', '.js-reveal']) {
      for (const index of [0, 1, 2]) {
        for (const done of [true, false]) {
          const questions = Array.from({length: 3}, () => ({
            details: [{open: false}, {open: false}],
            classList: {contains: value => value === 'done' && done},
            querySelectorAll() { return this.details; },
            closest(selector) { return selector === '.set' ? set : this; },
          }));
          const set = {querySelectorAll: () => questions.flatMap(q => q.details)};
          const listeners = [];
          const document = {
            addEventListener(type, handler) { if (type === 'click') listeners.push(handler); },
            getElementById: () => null,
          };
          runInNewContext(script, {document});
          const target = {closest: selector => selector === '.q' ? questions[index] : selector === action ? target : null};
          for (const handler of listeners) handler({target});
          assert.deepEqual(questions.map(q => q.details.map(d => d.open)),
            questions.map((_, i) => [done && i === index, done && i === index]),
            `${action}, question ${index + 1}, finalized=${done}`);
        }
      }
    }
  });
}
