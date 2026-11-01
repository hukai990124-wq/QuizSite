# Review: all-bank TypeScript publishing

## Outcome

All 13 banks and 117 subject HTML URLs are represented by typed manifests. 5,347 static question blocks and FE's 344 image-question records are preserved. Original page and FE data hashes match the new renderer. No auth, account, AI quota, database, published address or progress contract was changed.

## Correctness and maintainability

The JSON boundary validates strings, arrays and nested question/choice shapes. The renderer rejects missing/extra slots, unknown/circular layouts, duplicate IDs/outputs and unsafe paths. Nested script configuration is passed through explicit bindings, allowing the common scoring/i18n code to be stored once. Content is inserted in a single pass, without evaluating template expressions. Standard visible answer labels derive from the scoring answer.

Normal builds read only canonical sources. An empty destination reproduces the whole bank corpus and FE data. Tests also cover a real question edit, answer-label consistency, preserved unrelated questions, malformed input, duplicate outputs, unsafe paths and immutable source data. Historical hashes are checked only with the explicit migration verifier, so ordinary content edits remain possible.

The old page-publishing commands delegate to the TypeScript build; FE PDF/OCR preparation writes canonical data. Historical acquisition data/functions remain for provenance and are marked as such. Generated subject pages and historical HTML copies are removed from source control, retained locally and ignored. The generated TypeScript compiler cache is also ignored.

## Browser evidence

Isolated Edge checks cover correct selection and restored progress for all 13 banks, DELE fill-in, AIF hotspot matching, a resolving listening audio source and mobile rendering. The existing TOEIC browser audit passes correct/wrong/reveal/reload isolation checks for all ten listening papers. External services are intercepted; no real registrations, account writes or AI calls are performed.

## Reviewed floor-guard exemptions

- `quiz_kit/typescript/layouts.mts`: one-time imported compatibility markup includes the exact pre-existing empty storage/i18n catch blocks. The original HTML hashes prove these are retained behavior, not new handwritten stubs. The typed renderer, validation and tooling have no exemption.
- `question-banks/aws-mla/pages.json`: imported MLA Q65 explanation contains escaped historical scraped script text, including a catch block, as literal rich-text content. It matches the original page. It is not executable publisher code.

No assertions are removed or tests skipped. No checker configuration is weakened. Handwritten code remains under strict checks. These two exact imported-file exemptions are recorded in `.constraintsignore`.

## Scope limits

This is a TypeScript publishing/data migration. Historical browser scripts are retained as compatibility markup, not falsely presented as type-checked interaction code. Rich HTML is trusted authored source, not a visitor-input rendering API. Images and audio retain their existing files and paths. Adding/removing questions still requires updating total-count configuration and directory statistics, as it did before.

## Sources checked

- https://parse5.js.org/interfaces/parse5.ParserOptions.html ? original source offsets for lossless extraction.
- https://www.typescriptlang.org/tsconfig/resolveJsonModule.html ? JSON module integration.
- https://playwright.dev/docs/browsers ? isolated Edge channel.
- https://playwright.dev/docs/api/class-browsercontext ? interception and isolated contexts.
