# All-bank TypeScript publishing migration

## Scope

Move the published question pages for all 13 banks to a shared, strictly checked TypeScript build. Keep editable question content separate from reusable page/question layouts. Preserve every published URL, question identifier, answer, rich-text passage, image/audio reference, progress key and interaction. HTML becomes reproducible deployment output. Existing browser interaction code is retained during this publishing migration.

## Ordered work

1. Inventory every page, question and special bank; establish migration fingerprints and a typed content/layout contract.
2. Implement a lossless one-time importer and TypeScript renderer. Question/choice content, root metadata and surrounding reading/audio material are separate from layouts.
3. Import all banks, including FE's structured JSON and image questions; compile bank manifests and reproduce all subject pages through one command.
4. Replace old publishing commands with the unified build, document editing paths, and exclude generated subject HTML from source control and the editor's normal source view.
5. Verify original page fingerprints, question/answer inventories and links, a clean rebuild, strict types, the existing full suite and representative browser behavior.

## Acceptance

- Every subject HTML URL is declared by a typed bank manifest and rebuilt without reading a deployed HTML page as input.
- Editable data and layouts are separate. Build never overwrites data. An edited question affects its corresponding output.
- All source-page SHA-256 hashes match after initial migration; rich content, answer/progress contracts and FE data remain intact.
- Generated pages can be removed and rebuilt entirely from checked-in sources. Existing tests remain active and pass.

Design: `docs/design/question-bank-typescript.md`. No UI/API behavior change or deployment.
