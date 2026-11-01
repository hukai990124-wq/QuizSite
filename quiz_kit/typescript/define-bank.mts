import type { Choice, Question, QuestionBank, QuizPage } from './model.mjs';

function object(value: unknown, context: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Expected object: ${context}`);
  return value as Record<string, unknown>;
}

function text(value: unknown, context: string): string {
  if (typeof value !== 'string') throw new Error(`Expected string: ${context}`);
  return value;
}

function array(value: unknown, context: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`Expected array: ${context}`);
  return value;
}

function content(value: unknown, context: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [name, html] of Object.entries(object(value, context))) result[name] = text(html, `${context}.${name}`);
  return result;
}

function choice(value: unknown): Choice {
  const row = object(value, 'choice');
  return { letter: text(row.letter, 'choice.letter'), layout: text(row.layout, 'choice.layout'), content: content(row.content, 'choice.content') };
}

function question(value: unknown): Question {
  const row = object(value, 'question');
  const answerLabels: Question['answerLabels'] = {};
  for (const [name, value] of Object.entries(object(row.answerLabels, 'question.answerLabels'))) {
    const label = object(value, 'answer label');
    answerLabels[name] = { separator: text(label.separator, 'answer separator'), suffix: text(label.suffix, 'answer suffix') };
  }
  return {
    id: text(row.id, 'question.id'), number: text(row.number, 'question.number'),
    answer: text(row.answer, 'question.answer'), kind: text(row.kind, 'question.kind'),
    layout: text(row.layout, 'question.layout'), content: content(row.content, 'question.content'),
    choices: array(row.choices, 'question.choices').map(choice),
    answerLabels,
  };
}

function page(value: unknown): QuizPage {
  const row = object(value, 'page');
  return {
    path: text(row.path, 'page.path'), layout: text(row.layout, 'page.layout'),
    content: content(row.content, 'page.content'), questions: array(row.questions, 'page.questions').map(question),
  };
}

/** JSON is validated at the boundary, then consumed as a strict TypeScript model. */
export function defineBank(value: unknown): QuestionBank {
  const row = object(value, 'bank');
  return {
    id: text(row.id, 'bank.id'), title: text(row.title, 'bank.title'),
    pages: array(row.pages, 'bank.pages').map(page),
    dataFiles: array(row.dataFiles, 'bank.dataFiles').map(value => {
      const file = object(value, 'data file');
      return { source: text(file.source, 'data file.source'), path: text(file.path, 'data file.path') };
    }),
  };
}
