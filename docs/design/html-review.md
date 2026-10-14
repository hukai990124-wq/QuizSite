# Programming fundamentals: HTML code review

## Scope
Add a separate homepage section, 编程入门实操, linking directly to 20 original beginner HTML review questions. Four code choices per question; one correct answer. Red theme applies only to the new practice page and its homepage section, not existing banks. HTML is a markup language, not a scripting language.

## Content and integration
Stable IDs html-01..html-20 and storage key `quiz:programming:html:01`; never reorder published questions. Review tags, closing/nesting, img/src/alt/title, links, document metadata, lists, forms, labels, boolean attributes, comments, escaping, tables, and CSS class syntax. Each question has an English original with only the active Chinese/Japanese translation alongside it, plus explanations and MDN references. Code examples are escaped inert text, never executed.

Reuse quizkit scoring, redo, answer sheet, wrong-only filter, report/home link, account progress sync, AI question context, study timers and back-to-top. No auth, database, AI quota or existing-paper changes. Reuse the native-choice accessibility adapter already used by vocabulary practice.

## Verification
`pnpm test`, `pnpm typecheck`, focused browser audit: 20 questions / 80 choices; correct/wrong/redo/reveal/reload, report and homepage aggregate, keyboard, three languages, AI selection without real API use, red computed styles, 320/768/1024/1440 layouts, no executed examples or console errors. The homepage aggregate increases from 4841 to 4861; existing progress keys stay unchanged.

## Verification and review record — 2026-10-15

Review range: `6dfb1b3..working-tree`, 0 new commits, 12 changed/new files (current feature's uncommitted changes; merge base with origin/main is HEAD). Reviewed tests, original question keys and distractors, renderer escaping, scoped CSS, storage integration and generated output. Reordered correct choices to avoid a repeating answer-letter cycle; five answers per letter.

97 tests pass; TypeScript build and typecheck pass. `quiz_kit/html_review_audit.cjs` passes all 20 questions, AI payload preservation, homepage translations/progress and four responsive widths. Existing vocabulary audit passes all 100 questions, and shared i18n audit passes all 11 regression groups. No real AI calls or account writes used.

Floor guard exemption reviewed: only generated `site/programming/index.html`, produced by `python programming/build_html_review.py` using the existing quizkit and i18n injector. The six flagged empty catches are inherited generated storage/i18n fallbacks, not new handwritten stubs. No handwritten source or test is exempted. Guard and whitespace checks pass. No dependencies, auth/API/database changes, or deployment included.
