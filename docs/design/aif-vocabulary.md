# AWS AIF terminology practice

Add a vocabulary entry to the AWS-AIF directory: 50 original terminology questions, each with exactly two options (A/B), one correct answer, and Chinese, English and Japanese text. Terms cover the five AIF-C01 domains and AWS service distinctions. This is a learning supplement, not an official test or an exhaustive exam glossary.

Use the existing QuizBank theme, question engine, answer card, wrong-answer filtering, redo, submission report, account controls, AI explanation button and back-to-top component. Native option buttons support keyboard input; selecting with Enter must not prematurely grade the question. Explanations compare the correct term with the distractor.

Data: `aws-aif/vocabulary.json`. Generator: `python aws-aif/gen_vocabulary.py`; outputs only `site/aws-aif/vocabulary.html`. UI dictionary is generated separately through `quiz_kit/i18n_inject.py`. Build the TypeScript accessibility adapter through `pnpm run build`.

Progress key: `quiz:aws:aifvocab:01`, isolated from bank/practice questions; accepted by the existing account sync contract. Question order and IDs must remain stable for persisted answers. Answer positions are deterministic per ID and mixed across A/B. Do not mix this supplement into the 50-question exam random pool. Include its 50 questions in homepage aggregate progress.

Acceptance: 50 unique terms, exactly two choices each, balanced answer positions; correct/wrong grading, redo, reload persistence, reveal not counted as correct, three-language UI, keyboard selection, responsive 320/768/1024/1440 layouts, no page errors. Run `pnpm test`, `pnpm typecheck`, vocabulary browser audit and existing shared regressions.

Sources: [exam domains](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html), [Bedrock terminology](https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html), [responsible AI dimensions](https://docs.aws.amazon.com/wellarchitected/latest/responsible-ai-lens/responsible-ai-lens.html), [AWS ML services](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/ml-guide.html). Each explanation includes its relevant official reference.
