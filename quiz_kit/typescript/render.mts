import type { Choice, Layouts, Question, QuestionBank, QuizPage } from './model.mjs';

function binding(values: Record<string, string>, name: string, value: string): void {
  if (Object.hasOwn(values, name)) throw new Error(`Duplicate content slot: ${name}`);
  values[name] = value;
}

/** Values are inserted once. Content that resembles a slot is ordinary content. */
export function renderLayout(id: string, values: Record<string, string>, layouts: Layouts, parents: readonly string[] = []): string {
  if (!Object.hasOwn(layouts, id)) throw new Error(`Unknown layout: ${id}`);
  if (parents.includes(id)) throw new Error(`Circular layout: ${id}`);
  const used = new Set<string>();
  const output = layouts[id]!.map(part => {
    if (typeof part === 'string') return part;
    if ('layout' in part) {
      const nested: Record<string, string> = {};
      for (const [target, source] of Object.entries(part.bindings ?? {})) {
        if (!Object.hasOwn(values, source)) throw new Error(`Missing slot ${source} in ${id}`);
        used.add(source);
        nested[target] = values[source]!;
      }
      return renderLayout(part.layout, nested, layouts, [...parents, id]);
    }
    if (!Object.hasOwn(values, part.slot)) throw new Error(`Missing slot ${part.slot} in ${id}`);
    used.add(part.slot);
    return values[part.slot];
  }).join('');
  for (const name of Object.keys(values)) {
    if (!used.has(name)) throw new Error(`Unused slot ${name} in ${id}`);
  }
  return output;
}

export function renderChoice(choice: Choice, layouts: Layouts): string {
  const values = { ...choice.content };
  if (layouts[choice.layout]?.some(part => typeof part !== 'string' && 'slot' in part && part.slot === 'letter')) {
    binding(values, 'letter', choice.letter);
  }
  return renderLayout(choice.layout, values, layouts);
}

export function renderQuestion(question: Question, layouts: Layouts): string {
  const values = { ...question.content };
  for (const name of ['id', 'number', 'answer', 'kind'] as const) {
    // Some historical questions omit one or more of these attributes.
    if (layouts[question.layout]?.some(part => typeof part !== 'string' && 'slot' in part && part.slot === name)) {
      binding(values, name, question[name]);
    }
  }
  question.choices.forEach((choice, index) => binding(values, `choice.${index}`, renderChoice(choice, layouts)));
  for (const [name, format] of Object.entries(question.answerLabels)) {
    binding(values, name, question.answer.split(',').map(value => value.trim()).join(format.separator) + format.suffix);
  }
  return renderLayout(question.layout, values, layouts);
}

export function renderPage(page: QuizPage, layouts: Layouts): string {
  const values = { ...page.content };
  const ids = new Set<string>();
  page.questions.forEach((question, index) => {
    if (question.id && ids.has(question.id)) throw new Error(`Duplicate question ID ${question.id} in ${page.path}`);
    ids.add(question.id);
    binding(values, `question.${index}`, renderQuestion(question, layouts));
  });
  return renderLayout(page.layout, values, layouts);
}

export function outputPath(bank: QuestionBank, path: string): string {
  if (!/^[a-z0-9-]+$/.test(bank.id) || !path.startsWith(`${bank.id}/`)
      || !/^[a-zA-Z0-9_./-]+$/.test(path) || path.includes('..') || path.includes('//')) {
    throw new Error(`Unsafe bank output path: ${path}`);
  }
  return path;
}

/** Render and validate everything before any deployment output is written. */
export function renderBanks(banks: readonly QuestionBank[], layouts: Layouts): Map<string, string> {
  const outputs = new Map<string, string>();
  const ids = new Set<string>();
  for (const bank of banks) {
    if (ids.has(bank.id)) throw new Error(`Duplicate bank: ${bank.id}`);
    ids.add(bank.id);
    for (const page of bank.pages) {
      const path = outputPath(bank, page.path);
      if (!path.endsWith('.html')) throw new Error(`Expected HTML output: ${path}`);
      if (outputs.has(path)) throw new Error(`Duplicate output: ${path}`);
      outputs.set(path, renderPage(page, layouts));
    }
    for (const file of bank.dataFiles) {
      const path = outputPath(bank, file.path);
      if (outputs.has(path)) throw new Error(`Duplicate output: ${path}`);
      if (!/^[a-zA-Z0-9_./-]+$/.test(file.source) || file.source.includes('..') || file.source.startsWith('/')) {
        throw new Error(`Unsafe data source: ${file.source}`);
      }
      outputs.set(path, '');
    }
  }
  return outputs;
}
