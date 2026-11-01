import pages from './pages.json' with { type: 'json' };
import { defineBank } from '../../quiz_kit/typescript/define-bank.mjs';
import type { QuestionBank } from '../../quiz_kit/typescript/model.mjs';
import official from './content/data.json' with { type: 'json' };
import extra from './content/extra.json' with { type: 'json' };
import materials from './content/chat-materials.json' with { type: 'json' };
import { validateFeData } from '../../quiz_kit/typescript/fe-data.mjs';

validateFeData(official, materials);
validateFeData(extra, materials);

export default defineBank({
  id: "fe",
  title: "基本情報技術者 FE",
  pages,
  dataFiles: [
  {
    "source": "question-banks/fe/content/chat-materials.json",
    "path": "fe/chat-materials.json"
  },
  {
    "source": "question-banks/fe/content/data.json",
    "path": "fe/data.json"
  },
  {
    "source": "question-banks/fe/content/extra.json",
    "path": "fe/extra.json"
  }
],
}) satisfies QuestionBank;
