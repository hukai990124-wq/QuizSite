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
    parser.add_argument('--ffmpeg', required=True)
    args = parser.parse_args()
    voice = PiperVoice.load(args.british_model)
    config = SynthesisConfig(speaker_id=95, length_scale=1.15)
    jobs = json.loads((BASE / 'data/extra-audio-jobs.json').read_text(encoding='utf-8'))
    subprocess.run(['pwsh', '-NoProfile', '-File', str(BASE / 'synthesize_us_segments.ps1')], check=True)
    model_hash = hashlib.sha256(Path(args.british_model).read_bytes()).hexdigest()
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
                if segment['accent'] == 'en-GB':
                    with wave.open(str(segment_path), 'wb') as british:
                        voice.synthesize_wav(segment['text'], british, syn_config=config)
                with wave.open(str(segment_path), 'rb') as audio:
                    if (audio.getnchannels(), audio.getsampwidth(), audio.getframerate()) != (1, 2, 22050):
                        raise ValueError('Unexpected audio format: ' + str(segment_path))
                    output.writeframes(audio.readframes(audio.getnframes()))
                output.writeframes(b'\x00\x00' * 8820)
        subprocess.run([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', str(joined),
                        '-codec:a', 'libmp3lame', '-b:a', '64k', str(destination)], check=True)
        manifest.append({'audio':job['audio'], 'sha256':hashlib.sha256(destination.read_bytes()).hexdigest(),
                         'accents':[s['accent'] for s in job['segments']],
                         'engines':{'en-US':'Microsoft Zira Desktop', 'en-GB':'Piper en_GB-vctk-medium p226'},
                         'britishModelSha256':model_hash})
        if ordinal % 12 == 0:
            print(f'Generated {ordinal}/{len(jobs)} mixed-accent recordings', flush=True)
    (BASE / 'data/audio-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
