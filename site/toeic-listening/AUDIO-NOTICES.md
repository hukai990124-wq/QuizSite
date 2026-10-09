# Additional listening audio provenance

Sets 05 and 06 are original/adapted TOEIC-style practice, not ETS test recordings.
All speech is synthetic. Voice assignment is recorded per segment in
`data/extra-audio-jobs.json`; file hashes and generation engines are recorded in
`data/audio-manifest.json`.

## American English

Microsoft Zira Desktop, installed Windows speech synthesis voice.
New speech is synthesized from the licensed practice text; no third-party
recorded audio is downloaded or copied.

## British English

Piper `en_GB-vctk-medium`, speaker `p226` (English male voice), speaker ID 95.
Model/configuration: https://huggingface.co/rhasspy/piper-voices/tree/main/en/en_GB/vctk/medium

The published model repository is MIT licensed. The model card identifies the
VCTK corpus under CC BY 4.0 and states that it was fine-tuned from Lessac medium.
We do not distribute the model, training recordings, or runtime in this website.
The model file's hash is retained in the audio manifest for reproducibility.

VCTK attribution: Yamagishi, Junichi; Veaux, Christophe; MacDonald, Kirsten (2019).
CSTR VCTK Corpus: English Multi-speaker Corpus for CSTR Voice Cloning Toolkit
(version 0.92). University of Edinburgh, Centre for Speech Technology Research.
https://doi.org/10.7488/ds/2645
License: https://creativecommons.org/licenses/by/4.0/

Piper runtime: https://github.com/OHF-Voice/piper1-gpl (GPL-3.0, generation tool only).
The browser does not run or download Piper. WAV segments are concatenated with
0.4-second gaps and encoded as 64-kbps MP3. These modifications produce new
practice audio, not a copy of VCTK recordings. No speaker or institution is
represented as endorsing the website.
