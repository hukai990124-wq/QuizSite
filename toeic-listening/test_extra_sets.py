"""Acceptance checks for the two licensed, locally playable listening sets."""
import hashlib
import json
from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parent.parent
LISTENING = ROOT / 'toeic-listening'


class ExtraSetsTest(unittest.TestCase):
    def test_audio_matches_generated_mixed_accent_manifest(self):
        manifest = json.loads((LISTENING / 'data/audio-manifest.json').read_text(encoding='utf-8'))
        jobs = json.loads((LISTENING / 'data/extra-audio-jobs.json').read_text(encoding='utf-8'))
        self.assertEqual(len(manifest), 108)
        for recording, job in zip(manifest, jobs):
            self.assertEqual(recording['audio'], job['audio'])
            self.assertEqual(recording['accents'], [s['accent'] for s in job['segments']])
            self.assertEqual(recording['sha256'], hashlib.sha256((LISTENING / job['audio']).read_bytes()).hexdigest())

    def test_two_distinct_standard_sets_have_answers_and_transcripts(self):
        tests = json.loads((LISTENING / 'data/extra-tests.json').read_text(encoding='utf-8'))
        self.assertEqual([t['mock'] for t in tests], [5, 6])
        ids = []
        recordings = []
        for test in tests:
            parts = test['parts']
            self.assertEqual([len(parts[p]) for p in ('p1', 'p2', 'p3', 'p4')], [6, 25, 13, 10])
            numbers = []
            for part, items in parts.items():
                for item in items:
                    recordings.append(item['audio'])
                    questions = item.get('questions', [item])
                    if part in ('p3', 'p4'):
                        self.assertEqual(len(questions), 3)
                        self.assertTrue(item['script'])
                    for offset, q in enumerate(questions):
                        ids.append(q['sourceId'])
                        numbers.append(item['no'] + offset)
                        choices = q.get('statements', q.get('options'))
                        self.assertEqual(len(choices), 3 if part == 'p2' else 4)
                        self.assertIn(q['answer'], range(len(choices)))
                        self.assertTrue(q['exp'])
                        self.assertEqual(len(set(choices)), len(choices))
            self.assertEqual(sorted(numbers), list(range(1, 101)))
        self.assertEqual(len(ids), 200)
        self.assertEqual(len(set(ids)), 200)
        self.assertEqual(len(set(recordings)), 108)

    def test_alternating_accents_and_fixed_conversation_roles(self):
        jobs = json.loads((LISTENING / 'data/extra-audio-jobs.json').read_text(encoding='utf-8'))
        for mock in (5, 6):
            own = [j for j in jobs if j['audio'].startswith(f'audio/m{mock}/')]
            short = [j for j in own if '/p1-' in j['audio'] or '/p2-' in j['audio']]
            accents = [j['segments'][0]['accent'] for j in short]
            self.assertTrue(all(a != b for a, b in zip(accents, accents[1:])))
            for job in own:
                if '/p3-' in job['audio']:
                    roles = {}
                    for segment in job['segments']:
                        roles.setdefault(segment['speaker'], set()).add(segment['accent'])
                    self.assertEqual(roles, {'M': {'en-GB'}, 'W': {'en-US'}})
                else:
                    self.assertEqual(len({s['accent'] for s in job['segments']}), 1)
        tests = json.loads((LISTENING / 'data/extra-tests.json').read_text(encoding='utf-8'))
        for test in tests:
            questions = [q for part in test['parts'].values() for item in part
                         for q in item.get('questions', [item])]
            self.assertTrue(all(int(q['difficulty']) >= 600 for q in questions))
            self.assertGreaterEqual(sum(q['difficulty'] == '800' for q in questions), 35)

    def test_playable_assets_and_existing_engine_are_present(self):
        for mock in (5, 6):
            filename = f'TOEIC_Listening_Test_{mock:02}.html'
            source = (LISTENING / filename).read_text(encoding='utf-8')
            page = (ROOT / 'site/toeic-listening' / filename).read_text(encoding='utf-8')
            self.assertEqual(len(re.findall(r'class="q" id="q\d+"', page)), 100)
            self.assertIn(f'toeic-l:t{mock:02}', page)
            self.assertIn('id="btn-report"', page)
            self.assertIn('id="btn-wrong"', page)
            self.assertIn('i18n:head', page)
            self.assertIn('TOEIC Question Ocean', page)
            self.assertNotIn('youtube.com', page)
            for markup in (source, page):
                resources = re.findall(r'<(?:audio|img)[^>]+src="([^"]+)"', markup)
                self.assertEqual(len(resources), 60)
                for relative in resources:
                    asset = LISTENING / relative
                    deployed = ROOT / 'site/toeic-listening' / relative
                    self.assertGreater(asset.stat().st_size, 1000)
                    self.assertEqual(hashlib.sha256(asset.read_bytes()).digest(),
                                     hashlib.sha256(deployed.read_bytes()).digest())

    def test_navigation_counts_and_license(self):
        for directory in (LISTENING, ROOT / 'site/toeic-listening'):
            index = (directory / 'index.html').read_text(encoding='utf-8')
            self.assertIn('练习 · 6 套', index)
            self.assertEqual(len(re.findall('data-quiz-key="toeic-l:t', index)), 6)
            license_text = (directory / 'LICENSE-OCEAN.txt').read_text(encoding='utf-8')
            self.assertIn('Copyright (c) 2026 Chun-Hsiung Luo', license_text)
            self.assertIn('Permission is hereby granted', license_text)
        homepage = (ROOT / 'site/index.html').read_text(encoding='utf-8')
        self.assertIn('TOEIC 听力 · 6 套', homepage)
        self.assertIn('seq("toeic-l:t",1,6,100)', homepage)
        self.assertIn('共 3717 题', homepage)
        self.assertIn('600 题', homepage)
        self.assertIn('["dele-a1-a1-2011",50]', homepage)
        dictionary = json.loads((ROOT / 'quiz_kit/i18n.json').read_text(encoding='utf-8'))
        summary = dictionary['6 个题库 · 共 3717 题 · 可作答判分 · 进度自动保存在本机浏览器']
        self.assertIn('3,717', summary['en'])
        self.assertIn('3717', summary['ja'])


if __name__ == '__main__':
    unittest.main()
