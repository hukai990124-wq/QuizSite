# TypeScript question-bank publishing

All 13 banks are published by one TypeScript renderer using per-bank manifests and separate content data. Generated subject HTML is deployment output, not an editing source. Public behavior and addresses stay the same.

Layouts contain reusable markup and named slots. Questions contain stable IDs, original answer strings, options, rich-text content and a layout reference. Reading passages, audio, images, directory content and page-specific configuration are retained as content surrounding the question slots. FE retains its structured image-question data and uses the same publishing manifest for its page shells and data files.

The renderer substitutes explicit slots in a single pass. Slot values are trusted, checked-in rich HTML, never evaluated as code or interpreted as template expressions. Missing/extra slots, unknown layout IDs, duplicate outputs, unsafe output paths and mismatched metadata fail before publishing. Runtime input validation complements compile-time types.

Compatibility browser scripts and inline styling remain in the layouts in this migration. TypeScript owns publishing and rendering; converting historical browser interactions is separate. This preserves progress keys, DOM-dependent scoring, multilingual content, printing, hotspots, fill-in questions, listening audio, FE images and chat context.

Verification uses original page hashes and question/answer inventories, isolated content-edit tests, invalid-input/path tests, a source-only clean rebuild, the existing full suite and representative browser checks. Normal builds never overwrite source data or layouts.
