# AWS 50-question paged exams

## Objective and scope

Apply the requested one-question-per-page exam flow to AWS SAA, CLF, AIF, AIP and MLA. Reuse the existing random-exam sampler and grading controller. Ordinary practice and TOEIC papers retain their current behavior. Keep the current light/dark palettes and Chinese/English/Japanese UI.

## Acceptance criteria

- Each of the five certification pages links to its own random 50-question exam; no repeated question stems within one paper.
- SAA exams draw from A (`real`) and C (`original`) only, excluding B (`compliance`). A response-type guard permits four-option single choice or multiple response with at least five options; ordinary B-line practice and its progress remain intact. This follows the [AWS SAA-C03 response types](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html#exam-content).
- Since this changes seeded question numbering, SAA exam drafts now use `quiz:random-exam:aws-saa-ac:<size>:<seed>`. Previous mixed-pool records are retained and are not applied to the new paper. Other exams retain their existing keys.
- Exactly one question is visible. Previous/next buttons retain drafts; first/last boundaries are disabled appropriately. Skipping a question is allowed.
- A visible answer sheet above the question shows all 50 numbers, answered/unanswered and current-question states. Clicking a number opens that question.
- Refreshing the same seeded URL restores drafts and the current question. New seeds keep independent exam state.
- Before submission, no answers, correctness, explanations or AI assistance are displayed. Submission asks for confirmation and reports any unanswered questions.
- After submission, score uses all 50 questions; multi-select requires the full correct set. Choices are locked. Answer-sheet navigation, explanations and mistake review remain usable.
- MLA keeps all 65 ordinary practice questions. Its old timed-exam entry/controller is replaced with the shared random 50-question exam entry; source exam labels and regression assertions are updated to reflect that replacement.

## Implementation and order

1. Add regression tests for restored current-question metadata and the MLA entrance (RED).
2. Add validated currentIndex metadata and AWS-only pagination to the shared controller.
3. Register the MLA pool; add its generated entrance; remove only cloned MLA practice controls/scripts.
4. Style the top answer sheet, current state and bottom navigation in both existing themes.
5. Run state/entry tests, all tests and type checks, then isolated browser coverage of all five pools plus TOEIC/ordinary-practice regressions.

## Commands and conventions

Build: `pnpm build`. Type checks: `pnpm typecheck`. Full suite: `pnpm test`. Focused: `node --test tests/random-exam.test.mjs`. Browser: `node quiz_kit/random_exam_audit.cjs`.

Browser source belongs in src/typescript and src/javascript; CSS in src/css. Generated assets and subject HTML are rebuilt, never edited directly. Preserve the existing exam storage-key format and account-sync contract; currentIndex is additive metadata. No dependencies, database migrations or backend/API changes. This document supplements docs/design/random-exam.md.

## Final verification and release

Reviewed the requested feature diff against the existing main revision: frontend-only changes, no new dependencies or backend/schema changes. MLA's timed-exam assertions were replaced with assertions for the requested new 50-question entry; its complete 65-question practice bank and all exhibit/content checks remain. No floor-guard exemptions; floor guard clean.

245 automated tests and strict type checks pass. Isolated browser verification covers all five AWS pools and the four TOEIC pool/size cases, first/last boundaries, saved selections/current page, answer-card jumps, cancelled/confirmed submission, locking, score denominator, multi-select, a complete 50/50 paper, empty mistake review, AI suppression/unlock, three languages and 320/768/1024/1440px in both themes. Ordinary practice still grades instantly. No real AI requests or account writes in browser tests.

Rollback: restore the previous Cloudflare Worker version `5687e430-18dd-47f4-aed8-816e87cc6f98`, or revert this feature commit and rebuild/deploy. Existing account data and practice progress are retained.

## SAA sampling correction — 2026-11-13

Reviewed `629e04d..working-tree` for this requested correction (0 new commits, 8 changed files). B-line files are excluded from the exam pool and ordinary practice is preserved. Pure response-type tests cover valid single/multiple choice, true/false, invalid counts, fill questions and malformed keys. The browser audit verifies no B-line requests, all 50 response shapes, a fresh A/C namespace, retention of the legacy draft and normal navigation/submission. All 247 tests and type checks pass; floor guard clean with no exemptions. Roll back this correction via Worker version `e8ddd320-8e9c-4d2c-8a8e-f04adb861ac3` if needed.
