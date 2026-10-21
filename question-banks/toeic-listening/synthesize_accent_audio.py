"""Offline US/UK audio generation. Models and runtime stay outside the website."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import wave

from piper import PiperVoice, SynthesisConfig

BASE = Path(__file__).resolve().parent


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--british-model', required=True)
    parser.add_argument('--american-model', required=True)
    parser.add_argument('--ffmpeg', required=True)
    args = parser.parse_args()
    voices = {'en-GB':PiperVoice.load(args.british_model),
              'en-US':PiperVoice.load(args.american_model)}
    configs = {'en-GB':SynthesisConfig(speaker_id=107, length_scale=0.95),
               'en-US':SynthesisConfig(length_scale=1.0)}
    all_jobs = json.loads((BASE / 'data/extra-audio-jobs.json').read_text(encoding='utf-8'))
    jobs = [job for job in all_jobs if job['audio'].startswith('audio/m5/')]
    manifest_path = BASE / 'data/audio-manifest.json'
    existing_manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    existing_by_audio = {entry['audio']:entry for entry in existing_manifest}
    untouched_jobs = [job for job in all_jobs if not job['audio'].startswith('audio/m5/')]
    if not jobs or any(job['audio'] not in existing_by_audio for job in untouched_jobs):
        raise ValueError('Existing Test 06 manifest is required; Piper generation now targets Test 05 only.')
    model_hashes = {accent:hashlib.sha256(Path(model).read_bytes()).hexdigest()
                    for accent, model in [('en-GB',args.british_model), ('en-US',args.american_model)]}
    manifest = []
    for ordinal, job in enumerate(jobs, 1):
        destination = BASE / job['audio']
        destination.parent.mkdir(parents=True, exist_ok=True)
        segment_dir = BASE / '_seg' / destination.parent.name
        segment_dir.mkdir(parents=True, exist_ok=True)
        joined = segment_dir / (destination.stem + '-joined.wav')
        with wave.open(str(joined), 'wb') as output:
            output.setparams((1, 2, 22050, 0, 'NONE', 'not compressed'))
            for index, segment in enumerate(job['segments']):
                segment_path = segment_dir / f'{destination.stem}-{index}.wav'
                with wave.open(str(segment_path), 'wb') as synthesized:
                    voices[segment['accent']].synthesize_wav(
                        segment['text'], synthesized, syn_config=configs[segment['accent']])
                with wave.open(str(segment_path), 'rb') as audio:
                    if (audio.getnchannels(), audio.getsampwidth(), audio.getframerate()) != (1, 2, 22050):
                        raise ValueError('Unexpected audio format: ' + str(segment_path))
                    output.writeframes(audio.readframes(audio.getnframes()))
                output.writeframes(b'\x00\x00' * 8820)
        subprocess.run([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', str(joined),
                        '-codec:a', 'libmp3lame', '-b:a', '64k', str(destination)], check=True)
        manifest.append({'audio':job['audio'], 'sha256':hashlib.sha256(destination.read_bytes()).hexdigest(),
                         'accents':[s['accent'] for s in job['segments']],
                         'voiceSettings':{'en-GB':{'engine':'Piper en_GB-vctk-medium p225',
                                                    'speakerId':107, 'lengthScale':0.95},
                                          'en-US':{'engine':'Piper en_US-ryan-medium', 'lengthScale':1.0}},
                         'modelSha256':model_hashes})
        if ordinal % 12 == 0:
            print(f'Generated {ordinal}/{len(jobs)} mixed-accent recordings', flush=True)
    generated_by_audio = {entry['audio']:entry for entry in manifest}
    merged_manifest = [generated_by_audio.get(job['audio'], existing_by_audio.get(job['audio']))
                       for job in all_jobs]
    if any(entry is None for entry in merged_manifest):
        raise ValueError('Generated audio manifest is incomplete.')
    manifest_path.write_text(json.dumps(merged_manifest, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
