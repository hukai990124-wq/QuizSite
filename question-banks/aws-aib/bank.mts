import pages from './pages.json' with { type: 'json' };
import { defineBank } from '../../quiz_kit/typescript/define-bank.mjs';

export default defineBank({
  id: 'aws-aib',
  title: 'AWS AIB-C01 · AI Business Strategist',
  pages,
  dataFiles: [{ source: 'question-banks/aws-aib/vocabulary.json', path: 'aws-aib/vocabulary.json' }],
});
