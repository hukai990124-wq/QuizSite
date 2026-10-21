# AIP-C01 supplied PDF bank

The additional English/Chinese open-practice bank, licensing exclusions and current aggregate counts are described in [aip-open-practice.md](aip-open-practice.md). The original PDF questions and progress keys below remain unchanged.

## Scope and acceptance

- Add a separate AWS AIP-C01 category beside the existing AWS categories. Retain WorkBuddy's MLA and Java pages unchanged.
- Preserve Q001–Q136 in three ordered papers of 50, 50 and 36. Retain all options and supplied reference answers; support 15 multi-answer questions with exact-set grading.
- Reuse `aws-clf/build_clf.py` rendering/CSS and `quiz_kit/quizkit.py` selection, grading, report and progress engines. Attach the existing shared shell (account, AI, back-to-top).
- English question/option/explanation stays visible. Only the active Chinese or Japanese machine translation accompanies it. Original English discussion is a separate nested disclosure under the answer area.
- Discussion extracts are candidates' opinions, not independently verified AWS guidance. For records without a matching-answer discussion, the explanatory text restates the supplied answer and its selected option(s); no invented official explanation. The page identifies these limits and grades using the supplied key.
- Random 50 enters the existing exam mode: no AI, answers, discussion or correctness before submission. This remains a study tool with client-side answer keys, not a tamper-proof examination platform.
- Ordinary paper progress keys: `quiz:aws:aip:01`, `:02`, `:03`. Existing account validator/synchronizer accepts them without schema or authentication changes. Homepage includes all 136 items in its 5,162 total.

## Reproduction and source handling

1. `python aws-aip/import_pdf.py <folder>` reads the six user-supplied PDFs. Cropped page rectangles are honored; hidden neighboring questions must not leak into another record. Only horizontal text is collected. The source filenames, SHA-256 hashes and record counts are stored in `data/sources.json`; PDFs themselves are not committed.
2. `python aws-aip/translate.py` fills cached Chinese/Japanese translations through the same translation service used by the existing CLF workflow. It sends question/option/explanation text, not account data or credentials. It uses no site AI quota or API key. Rerunning it keeps existing translations; rerunning import replaces the bank with English-only data.
3. `python aws-aip/build_aip.py` validates complete translations and renders only the four new pages plus the shared generated i18n dictionary. All imported content is HTML-escaped; original discussion URLs are inert text.
4. `pnpm build` compiles `src/aip-options.mts`, a small keyboard/ARIA adapter, to `site/assets/aip-options.mjs`. Selection and grading still belong to the shared engine.

## Verification and release

- `pnpm test`: bank sequence, six source counts, answer cardinality/options, trilingual completeness, source code text, rendered answer keys, progress contract, home/random reachability, plus existing regression tests.
- `pnpm typecheck`; `pnpm audit`; `git diff --check`.
- `node quiz_kit/aip_audit.cjs` with `QUIZSITE_BROWSER_MODULES` pointing at the installed Playwright runtime: isolated Edge, account/chat API mocked, all 136 answers graded and restored, reports/home progress, keyboard and ARIA, three languages, 320/768/1024/1440 widths, AI context selection, random pre/post submission. No live AI quota, real account or cloud progress writes.
- Live rerun: set `AIP_BASE_URL` to the deployed site; API interception remains active.
- Source Q1 and generated 320/1440 screenshots visually inspected. Long URLs/service identifiers wrap within cards instead of creating horizontal scrolling.
- Review scope: `03b62d4..working-tree`, 0 additional commits and 21 changed/new files, chosen as the current feature diff on the non-default branch against `origin/main`. Reviewed tests, importer alignment/crop handling, escaped rendering, translation visibility, bounded requests, and shared-engine integration; no blocking findings. The `.constraintsignore` addition covers only four newly generated AIP HTML files; inherited engine/i18n empty storage catches are not hand-written new stubs. Guard reports index `unfinished-work x2` and each of the three papers `unfinished-work x6`, all inherited generated storage-failure catches. The exemption and generated changes are accepted; no hand-written code is exempt. No tests or assertions removed; existing homepage total expectations change from 5,026 to 5,162. All 124 tests, typecheck, dependency audit, browser audit and deployment dry-run pass.
- Release through the existing GitHub-to-Cloudflare workflow. Confirm successful build and live category/papers/random behavior. Rollback is a targeted revert of this additive feature; no database migration or secret changes are involved.
