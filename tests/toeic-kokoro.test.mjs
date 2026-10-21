import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const read = path => readFileSync(new URL(path, root));
const jobs = JSON.parse(read("question-banks/toeic-listening/data/extra-audio-jobs.json"));
const manifest = JSON.parse(read("question-banks/toeic-listening/data/audio-manifest.json"));

test("Kokoro CLI rejects unsupported papers and cross-paper selections before any synthesis", () => {
  const script = fileURLToPath(new URL("question-banks/toeic-listening/synthesize_kokoro_m6.mjs",root));
  for (const [args,message] of [
    [["--mock","7"],/--mock must be 5 or 6/],
    [["--mock","5","--only","audio/m6/p1-1.mp3"],/No Test 5 audio job found/],
    [["--only","audio/m5/p1-1.mp3"],/No Test 6 audio job found/],
  ]) {
    const result = spawnSync(process.execPath,[script,"--out-dir","not-used","--ffmpeg","not-used",...args],{encoding:"utf8"});
    assert.equal(result.status,1);
    assert.match(result.stderr,message);
  }
});

test("TOEIC 05 and 06 both use complete Kokoro recordings with unchanged accent assignments", () => {
  for (const mock of [5,6]) {
    const own = manifest.filter(row => row.audio.startsWith(`audio/m${mock}/`));
    assert.equal(own.length,54);
    for (const entry of own) {
      assert.equal(entry.generator,"Kokoro-82M via Hugging Face Spaces");
      assert.deepEqual(entry.voiceSettings,{
        "en-GB":{engine:"Kokoro-82M",voice:"bf_emma",speed:1.1},
        "en-US":{engine:"Kokoro-82M",voice:"am_michael",speed:1.1},
      });
      assert.deepEqual(entry.accents,jobs.find(job => job.audio === entry.audio).segments.map(s => s.accent));
      const source = read(`question-banks/toeic-listening/${entry.audio}`);
      assert.equal(createHash("sha256").update(source).digest("hex"),entry.sha256);
      assert.deepEqual(source,read(`site/toeic-listening/${entry.audio}`));
    }
  }
});
