# All-bank publishing tasks

- [x] Inventory pages, question types, FE data, and source/output fingerprints.
- [x] Implement typed content/layout model, one-time importer, renderer and mutation/round-trip tests.
- [x] Import and verify AWS AIF, AIP, CLF, MLA, SAA.
- [x] Import and verify DELE A1/A2, TOEIC listening/reading.
- [x] Import and verify FE, Java Bronze, programming and WorkBuddy OPC.
- [x] Integrate unified build and source editing layout; retire conflicting publishing entry points.
- [x] Verify clean regeneration, typecheck/tests, browser smoke checks, documentation and review.

Verification: 238 Node tests passed; strict root/bank typechecks passed; all 120 original page/data fingerprints matched. Isolated Edge checks passed correct scoring and restored progress for all 13 banks, DELE fill-in, AIF hotspots, listening audio and mobile rendering. Ten TOEIC papers passed the existing correct/wrong/reveal/reload isolation audit. Both representative legacy publishing entry points delegated correctly. Syntax checks passed for 24 Python compatibility/preparation files.

Reviewed imported-file exemptions:
- quiz_kit/typescript/layouts.mts: inherited compatibility markup/storage fallbacks, verified against original page hashes; no handwritten renderer code exempted.
- question-banks/aws-mla/pages.json: escaped historical source script text inside the unchanged Q65 explanation, not executable publisher code.

New Chinese maintenance instructions and manifest titles were re-read as UTF-8 after fixing the PowerShell native-pipeline encoding. Question data and generated HTML hashes remained unchanged throughout.
