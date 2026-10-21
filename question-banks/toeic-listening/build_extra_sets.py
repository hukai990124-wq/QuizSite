"""Render sets 05/06 using the existing quiz engine, leaving 01–04 unchanged."""
import json
from pathlib import Path
import re
import shutil
import sys

import gen_html

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
sys.path.insert(0, str(ROOT / 'quiz_kit'))
import i18n_inject


def main():
    tests = json.loads((BASE / 'data/extra-tests.json').read_text(encoding='utf-8'))
    site = ROOT / 'site/toeic-listening'
    for test in tests:
        mock = test['mock']
        source = ('<p class="meta">来源：<a href="https://github.com/kdeppaei/toeic-question-ocean">'
                  'TOEIC Question Ocean</a> · 原创模拟题 · '
                  '<a href="LICENSE-OCEAN.txt">MIT 许可</a> · 非 ETS 官方试题。'
                  '短题逐题英美交替；长对话男声美式、女声英式；独白按段交替。合成音，非真人录音。</p>')
        markup = gen_html.render(test).replace('</h1>', '</h1>' + source, 1)
        markup = markup.replace('约 45 分钟 · 音频为电脑合成（非真人录音）',
                                '中高难度强化练习 · 英美口音混用 · 音频为电脑合成（非真人录音）')
        markup = re.sub(r'<li class="opt" data-letter="([A-D])">',
                        r'<li class="opt" role="button" tabindex="0" aria-label="Option \1" data-letter="\1">', markup)
        keyboard = '''<script>
document.addEventListener('keydown', function(event) {
  var option = event.target.closest('li.opt');
  if (!option || (event.key !== 'Enter' && event.key !== ' ')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  option.click();
}, true);
</script><script src="../assets/presence.js"></script>'''
        markup = markup.replace('</body>', keyboard + '</body>')
        for directory in (BASE, site):
            html_path = directory / f'TOEIC_Listening_Test_{mock:02}.html'
            html_path.write_text(markup, encoding='utf-8')
            markdown = gen_html.render_md(test)
            markdown = markdown.replace('题目来源：toeicmocktests.com（公开免费练习材料）。',
                                        '题目来源：TOEIC Question Ocean（MIT 许可原创模拟题）。')
            (directory / f'TOEIC_Listening_Test_{mock:02}.md').write_text(markdown, encoding='utf-8')
        i18n_inject.inject(str(site / f'TOEIC_Listening_Test_{mock:02}.html'))
        for part in test['parts'].values():
            for item in part:
                for field in ('audio', 'img'):
                    if field not in item:
                        continue
                    destination = site / item[field]
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(BASE / item[field], destination)
    shutil.copy2(BASE / 'LICENSE-OCEAN.txt', site / 'LICENSE-OCEAN.txt')
    shutil.copy2(BASE / 'AUDIO-NOTICES.md', site / 'AUDIO-NOTICES.md')
    print('Built and copied sets 05/06 with 108 local MP3 files; sets 01–04 untouched.')


if __name__ == '__main__':
    main()
