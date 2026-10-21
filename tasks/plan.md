# QuizSite source organization plan

Requested on 2026-10-21: make HTML, CSS, JavaScript, TypeScript and question-bank materials easy to find and edit in VS Code.

## Layout and boundaries

- `src/typescript/`: editable browser TypeScript; compile to the existing `site/assets/` URLs.
- `src/css/`: editable shared styles; copy to `site/assets/` during builds.
- `src/javascript/`: editable browser JavaScript; generated dictionaries remain in `site/assets/`.
- `question-banks/`: existing subject directories, including their data, scripts and local ignored materials.
- `site/`: HTML organized by subject and the complete deployment output. Keep all public URLs unchanged.
- `worker/`, `quiz_kit/`, `tests/`, `docs/`: retain their existing responsibilities.
- A VS Code workspace and a Chinese README identify the editable sources, generated files and build commands.

## Ordered slices

1. Group frontend sources and adapt compilation/copying, injectors and source-path tests.
2. Group question-bank materials and adapt generators, imports, tests and maintenance commands.
3. Add the VS Code workspace, tasks and editing guide; verify the full build and suite, commit, push and deploy.

Acceptance: all existing tests and strict type checks pass; generated resource URLs and question counts remain unchanged; source changes reproduce their published assets. No account data, credentials or quiz content is changed.

Risks: generators compute paths from their own location and some scripts use fixed historical paths. Audit these references as each subject moves. Preserve ignored local source material and avoid introducing duplicate hand-edited browser code.

Rollback: revert the organization commits and rebuild; no database migration or runtime binding changes are needed.

Design reference: `docs/design/source-layout.md`.
