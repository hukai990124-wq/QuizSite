export interface FeImageQuestion {
  number: number;
  pages: readonly number[];
  images: readonly string[];
  answer: string;
  options: readonly string[];
  originNumber?: number;
  questionPdf?: string;
  answerPdf?: string;
  sourcePage?: string;
  sourceAttribution?: string;
}

export interface FeExam {
  subject: string;
  questions: readonly FeImageQuestion[];
  year?: number;
  kind?: string;
  label?: string;
  questionPdf?: string;
  answerPdf?: string;
}

export interface FeImageData { sets: Readonly<Record<string, FeExam>> }
export type FeChatMaterials = Readonly<Record<string, Readonly<Record<string, string>>>>;

/** FE uses image questions rather than the static rich-text question renderer. */
export function validateFeData(data: FeImageData, materials: FeChatMaterials): void {
  for (const [id, exam] of Object.entries(data.sets)) {
    const numbers = new Set<number>();
    for (const question of exam.questions) {
      if (!Number.isSafeInteger(question.number) || question.number < 1 || numbers.has(question.number)) {
        throw new Error(`Invalid FE question number: ${id}/${question.number}`);
      }
      numbers.add(question.number);
      if (!question.options.length || new Set(question.options).size !== question.options.length
          || !question.options.includes(question.answer)) throw new Error(`Invalid FE answer: ${id}/${question.number}`);
      if (!question.images.length || question.images.length !== question.pages.length
          || question.images.some(path => !/^images\/[\w-]+\.(jpg|png|webp)$/.test(path))
          || question.pages.some(page => !Number.isSafeInteger(page) || page < 1)) {
        throw new Error(`Invalid FE question images: ${id}/${question.number}`);
      }
      const text = materials[id]?.[String(question.number)];
      if (typeof text !== 'string' || !text.trim()) throw new Error(`Missing FE chat material: ${id}/${question.number}`);
    }
  }
}
