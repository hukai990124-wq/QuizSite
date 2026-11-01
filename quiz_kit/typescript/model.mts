/** Rich HTML comes only from checked-in bank content, never from visitor input. */
export type LayoutPart = string | { slot: string } | { layout: string; bindings?: Readonly<Record<string, string>> };
export type Layout = readonly LayoutPart[];
export type Layouts = Readonly<Record<string, Layout>>;

export interface Choice {
  letter: string;
  layout: string;
  content: Record<string, string>;
}

export interface Question {
  /** Original attribute spellings are retained for lossless publishing. */
  id: string;
  number: string;
  answer: string;
  kind: string;
  layout: string;
  content: Record<string, string>;
  choices: Choice[];
  answerLabels: Record<string, { separator: string; suffix: string }>;
}

export interface QuizPage {
  path: string;
  layout: string;
  content: Record<string, string>;
  questions: Question[];
}

export interface DataFile {
  source: string;
  path: string;
}

export interface QuestionBank {
  id: string;
  title: string;
  pages: readonly QuizPage[];
  /** Existing structured data, such as FE image questions and chat material. */
  dataFiles: readonly DataFile[];
}

export interface MigrationPage {
  path: string;
  sha256: string;
  questions: { id: string; number: string; answer: string; kind: string }[];
}

export interface MigrationInventory {
  version: 1;
  banks: { id: string; pages: MigrationPage[]; dataFiles: { path: string; sha256: string }[] }[];
}
