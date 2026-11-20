# Random papers: exam mode

AWS SAA/CLF/AIF/AIP/MLA use the paged 50-question flow in [aws-paged-exam.md](aws-paged-exam.md). TOEIC 50/100 exams use a full-paper layout with complete passages and audio groups.

Each AWS directory also offers a paged 10-question practice alongside the 50-question exam. It uses the same eligible sources and de-duplication as the exam, including SAA's A/C filter and CLF's four-domain mix (2/3/4/1). Selecting an answer saves a draft. Confirming the question scores and locks it, opens its explanation, and updates the answer sheet. The score report measures accuracy over checked questions and counts ungraded drafts as unanswered. Only checked mistakes appear in mistake review. Refresh restores the question position, drafts and checked results from the size-10 key, and “Practice 10 more” starts a fresh seed. Controls are available in Chinese, English and Japanese.

**Exam mode before submission.** Editable selection/fill drafts, neutral answered count and answer sheet. No per-question submit/reveal/redo, answer panels, transcripts, score/correctness summaries, wrong filter, expand explanations, global AI chat or question AI buttons. Enter/Space on choices selects only, never grades. Pending state is present before source markup is displayed, including print view.

Submit explicitly confirms (including unanswered count); cancellation leaves drafts unchanged. Submission grades all questions once, locks selections, shows report with home link, answer explanations and AI. Score denominator is the whole paper; unanswered questions get no credit and remain distinguished from attempted wrong answers in counts. Reload restores pending/submitted state. Start another paper with the existing random-again link; no resetting a submitted exam in place.

Storage is isolated at `quiz:random-exam:<pool>:<size>:<seed>`, per-number answer records plus an `exam` metadata record; old random practice records are not imported. Existing account sync contract is reused. Browser persistence is a learning aid, not a tamper-proof exam: keys/materials are shipped in source, not protected from developer tools. No backend/auth/AI quota changes.

Implementation: replace only the cloned random page's inline practice engine with a TypeScript exam controller; do not regenerate or edit ordinary papers. Shared chat checks the explicit pending marker before opening, indexing or sending; unlocks only on submission event.

Verify: `pnpm test`, `pnpm typecheck`, isolated browser checks across all five pools and seven pool/size combinations, selection/keyboard/reload/cancel/submit/lock/review/report/home, pending AI and transcript suppression, post-submit AI options, source practice unaffected, three languages and mobile layouts. API mocked; no paid calls.

## Review and verification — 2026-10-15

Review: `5150ad3..working-tree`, 0 new commits / 12 feature files, merge-base rule plus uncommitted changes. Reviewed grading denominator, neutral pre-submit states, resume validation, print suppression, AI open/index/send guards, account-sync event integration and normal-practice isolation. No new dependencies, API/auth/schema or sampling changes. Floor guard clean, no new exemptions.

102 tests and TypeScript checks passed. All seven random pool/size browser cases passed; Part quotas preserved, draft/reload/cancel/submit/lock/AI unlock verified. Clearing progress from another tab hides previous results and AI again. Ordinary practice still grades immediately. Shared UI audit passed all 11 regression groups; mocked APIs only, no real AI quota used. Pending/submitted screenshots visually checked. Production rollback is a revert of this frontend-only feature commit; existing progress/database data remains untouched.

Integration: rebased onto WorkBuddy's `61cdb85` without conflicts; its CSS and Java Bronze changes are preserved, not edited by this feature. Re-ran the full suite (112 passing), typecheck and all seven browser cases after integration. Floor guard over `origin/main..working-tree`: clean, no added exemptions. Dependency audit: no known vulnerabilities.

Slow-load regression: production verification exposed a pre-existing document-replacement race. The temporary random loader could initialize the shared account/chat shell before its DOM was discarded; cached module initialization then left the final paper without AI controls. A 1.2-second source-fetch delay reproduced the missing trigger (test failed before the fix). Mark only the transitional loader `data-defer-shared-shell`; the shared shell honors that explicit bootstrap boundary, and the generated paper initializes normally. Sampling and ordinary pages remain unchanged.
