# English/Chinese AIP open practice extension

## Scope

Prioritize the owner's personal study workflow, without marketing features. Add English originals and Chinese machine translations only. Do not add Japanese question translations; retain the existing three-language UI and the original 136-question PDF bank, including its already completed translations.

Add 442 reference-answer questions in 10 difficulty-preserving papers: easy 196 (50/50/50/46), hard 115 (50/50/15), very hard 131 (50/50/31). Existing PDF papers remain 50/50/36 with identical progress keys. AIP now contains 578 questions; the homepage aggregate is 5,641. The existing AIP random-50 exam draws from all 13 papers, with answers, discussion and AI hidden until submission.

## Provenance and exclusions

Source: [JeremyEngineer/aws-aip-c01-practice-exam](https://github.com/JeremyEngineer/aws-aip-c01-practice-exam), pinned commit `509c7e42a0da2ad7af4a2ac4ca4df6a0f17ea615`. The repository has an MIT license, copied alongside the dataset and into the published category. Author attribution and license links appear on every new paper.

The source contains 462 questions, but 20 hard questions explicitly identify a separate BenchPrep source. **Exclude those 20**, rather than treating a repository's license as permission for separately attributed exam material. Only the remaining 442 are imported. Source file counts and hashes, exclusions, commit and deduplication report live in `question-banks/aws-aip/data/open-source.json`. No BytePatterns material, paid content or login-restricted API is collected.

Normalize English stems to lowercase alphanumerics and check against the PDF bank and prior imports: no exact duplicates. A separate token-set comparison against the PDF bank finds no Jaccard matches at or above 0.70; this is a screening aid, not a guarantee of semantic uniqueness. Preserve source option order and correct-answer flags; support single and multiple answers. These are the author's reference answers, **not individually certified or independently validated by AWS**. Keep per-option explanations and the source's official AWS documentation links, and grade all questions normally.

## Reproduction and integration

1. `python question-banks/aws-aip/import_open_bank.py` downloads only the pinned JSON banks and license, checks source shape/answer cardinality and official-reference hostnames, excludes separately attributed items, and creates the normalized English data. Rerunning import replaces translations; do not use it merely to rebuild pages.
2. `python question-banks/aws-aip/translate_open_bank.py` fills Chinese question, option and per-option explanation fields using the existing translation service, with bounded parallelism, retries and cached partial progress. No site AI quota, account data, API keys or Japanese translations are used.
3. `python question-banks/aws-aip/build_open_aip.py` validates complete English/Chinese fields and renders only the new papers, updated AIP index, license and shared translation dictionary. `python question-banks/aws-aip/build_aip.py` also invokes this extension when the dataset exists, so rebuilding the PDF bank does not discard the new directory entries.

Reuse the CLF renderer, AIP shell, quizkit engine, existing AIP keyboard/ARIA adapter, account sync and AI. New progress keys are `quiz:aws:aip:open:<tier>:<part>`. English always remains visible; Chinese is visible only in Chinese UI. Japanese UI shows English originals and a clear untranslated-content notice. No empty Japanese content placeholders are rendered. AI material explicitly retains the reference answer, original/Chinese stem and all options within its existing 10,000-character limit. Text and attributes are escaped; examples are inert; imported references use HTTPS AWS documentation hosts and external links have safe rel attributes. No backend, quota, authentication, migration or dependencies change.

## Verification and review

`pnpm test`: 131 tests pass, including complete bilingual data, 20 exclusions, source counts/IDs, answer validity, no Japanese fields, all 10 rendered answer keys, isolated progress keys and full random pool/home integration. `pnpm typecheck` and `pnpm audit` pass. The original AIP and TypeScript browser audits retain their assertions, updating only aggregate totals and limiting the original-paper selector to its original three keys.

`node quiz_kit/aip_open_audit.cjs`: isolated Edge with API/WebSocket boundaries mocked; all 442 questions graded and restored across 10 papers, single/multiple answers, translated interface and explicit Japanese fallback, official links/license, AI context with all options, four responsive widths, total progress and random examination pre/post submission. No real AI requests, registrations or cloud progress writes. Source answers are tested for consistent grading, not asserted to be factually perfect.

Browser testing exposed an existing directory-link bug: whole-sentence translation flattened the random toolbar's sole anchor into text in English/Japanese. Give that anchor a stable ID, using the translator's existing descendant-ID preservation rule. The regression audit asserts the link remains clickable in each language; no shared translator behavior changes.

Review scope: `df83de7..working-tree`, 0 new commits, 33 changed/new files (the current feature, from the merge base with origin/main). Review importer trust boundary and attribution exclusions, cached translation handling, escaped rendering, original-bank compatibility, answer keys/progress mapping, fallback languages and random mode. A new generated-only floor exemption covers `site/aws-aip/open-*/*.html` (10 files), naming the builder. Each file has six inherited generated quizkit/i18n localStorage catches; these are accepted, not handwritten unfinished work. No source or test is exempted and no assertions are removed.

## Release

The owner requested deployment on 2026-10-17 (Asia/Tokyo). Publish this additive change through the existing GitHub-to-Cloudflare workflow; no migrations, credentials or runtime configuration changes are needed. Set `AIP_BASE_URL=https://quizsite.hukai990124.workers.dev` to repeat the browser audit against deployed assets with API/WebSocket writes still mocked. Confirm the deployment check and live content before reporting success. Rollback is a targeted revert of this additive extension, preserving all original 136 questions and their stored progress.
