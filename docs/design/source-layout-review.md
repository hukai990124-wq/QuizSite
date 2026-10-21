# Source layout review

Range: `3436394..31eb53e` plus uncommitted VS Code/docs/tests changes; two commits and 1,457 tracked changed paths before staging new guide files. Selected by the feature-branch merge-base rule against `origin/main`.

Verdict: ready to ship. Mechanical subject moves preserve question content and ignored local source material. Frontend sources now have one editable location, while build output URLs remain unchanged. No dependencies, account schema, auth behavior, runtime secrets or resource bindings changed.

Verification: 151 Node tests; 5 theme-injector and 5 TOEIC tests; strict TypeScript check; Python syntax compilation. Source/output equality and workspace/task path checks are automated. The `site/` diff contains only removal of tracked CSS/JS build products, not HTML, question data or media changes; builds recreate those assets before deployment.

Floor guard against `3436394`: clean. Findings: none. Existing generated-page exemptions retain their scope; only generation commands changed to grouped paths. Exempt paths: TOEIC listening tests 05/06, AIF vocabulary, programming index/TypeScript, AIP pages/open practice and SAA original part01. No handwritten changes inside these exemptions. Two obsolete exemptions for moved source copies were removed; no exemptions were added or broadened.

Review correction: do not watch `question-banks/` in Wrangler's custom build watcher, because the SAA build writes its own source dataset there. This avoids a rebuild loop. Materials can be rebuilt explicitly; Git-triggered production builds still include them.

Limit: this organization does not extract every historical inline script/style from generated HTML. Those remain owned by the subject generators, as explained in the editing guide. Static preview does not emulate Worker APIs.
