import pages from './pages.json' with { type: 'json' };
import { defineBank } from '../../quiz_kit/typescript/define-bank.mjs';
import type { QuestionBank } from '../../quiz_kit/typescript/model.mjs';

export default defineBank({
  id: "aws-aip",
  title: "AWS AIP-C01",
  pages,
  dataFiles: [],
}) satisfies QuestionBank;
