# -*- coding: utf-8 -*-
"""把 DELE A2 相关界面文案的三语词条合并进 quiz_kit/i18n.json（幂等）。

只加"界面文案"，题目 / 选项 / 解析一律不翻译。
加完接着跑：python dele-a2/sync_site.py（会重建 site/assets/i18n.js）。
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PATH = os.path.join(ROOT, "quiz_kit", "i18n.json")

NEW = {
    # ---------- 站点首页（新增的 A2 卡片与计数） ----------
    "西班牙语 DELE A2": ("Spanish · DELE A2", "スペイン語 DELE A2"),
    "110 题": ("110 questions", "110問"),
    "8 个题库 · 共 4571 题次 · 可作答判分 · 进度自动保存在本机浏览器": (
        "8 question banks · 4,571 attempts · answerable with instant scoring · progress saved in this browser",
        "8つの問題集・全4,571問・解答と即時採点対応・進捗はブラウザに保存"),
    "DELE A2 · 阅读 + 写作 + 听力": (
        "DELE A2 · Reading + Writing + Listening",
        "DELE A2 · 読解＋作文＋リスニング"),
    "Instituto Cervantes 官方公开的 2 套 A2 试卷。阅读 55 题、听力 55 题均可即时判分"
    "（2020 样卷为官方真人录音，旧版样卷按官方原文合成），写作附参考答案。": (
        "The two A2 papers released by Instituto Cervantes. All 55 reading and 55 listening "
        "questions are scored instantly (the 2020 sample uses the official human recording; "
        "the older sample is voiced from the official transcript), with model answers for writing.",
        "Instituto Cervantes が公開した A2 公式問題2セット。読解55問・リスニング55問はすべて即時採点"
        "（2020年版は公式音声、旧版は公式スクリプトから合成）。作文には模範解答つき。"),

    # ---------- A2 首页 ----------
    "DELE A2 · 现行题型": ("DELE A2 · Current format", "DELE A2 · 現行形式"),
    "官方样卷 Modelo 0（旧版）": (
        "Official sample paper Modelo 0 (older format)",
        "公式サンプル Modelo 0（旧形式）"),
    "Instituto Cervantes 官方公开的 2 套 A2 试卷 · 阅读与听力均可即时判分 · "
    "听力配音频（2020 样卷为官方真人录音，旧版样卷按官方原文合成）· 写作附参考答案": (
        "The two A2 papers released by Instituto Cervantes · Reading and listening scored "
        "instantly · Audio included (2020 sample: official recording; older sample: voiced "
        "from the official transcript) · Model answers for writing",
        "Instituto Cervantes が公開した A2 公式問題2セット・読解とリスニングは即時採点・"
        "音声つき（2020年版は公式音声、旧版は公式スクリプトから合成）・作文には模範解答つき"),
    "每套有 阅读（Prueba 1）与 听力（Prueba 2），点选项后按「确认作答」立即判定。": (
        "Each paper has <b>Reading (Prueba 1)</b> and <b>Listening (Prueba 2)</b>; pick an "
        "option and press “Check” for an instant verdict.",
        "各セットには<b>読解（Prueba 1）</b>と<b>リスニング（Prueba 2）</b>があります。"
        "選択肢を選び「解答を確認」で即時に判定されます。"),
    "听力先点每个 Tarea 的播放键听录音再答题；一段录音可反复播放，侧栏可切 "
    "0.75× / 1× / 1.25× / 1.5× 倍速，做完还能展开听力原文核对。": (
        "For listening, press the play button of each Tarea first, then answer. A clip can be "
        "replayed as often as you like; the sidebar offers 0.75× / 1× / 1.25× / 1.5× speeds, "
        "and you can expand the transcript afterwards to check.",
        "リスニングは各 Tarea の再生ボタンで音声を聞いてから解答します。同じ音声は何度でも"
        "再生でき、サイドバーで 0.75× / 1× / 1.25× / 1.5× に速度変更できます。"
        "あとからスクリプトを開いて確認もできます。"),
    "阅读里需要对照原文的题（独立告示、人物介绍、房屋广告、长文等）都在题目上方直接给出原文，"
    "不用来回翻页。": (
        "Reading questions that need the source text (stand-alone notices, profiles, housing "
        "ads, long articles…) show it right above the question, so there is no back-and-forth.",
        "原文を参照する読解問題（独立した告知、人物紹介、住宅広告、長文など）は、"
        "問題のすぐ上に原文が表示されるので、ページを行き来する必要はありません。"),
    "Prueba 3 写作不判分，建议先自己写，再展开参考答案对照。": (
        "<b>Prueba 3</b> writing is not auto-scored — write it yourself first, then expand "
        "the model answers to compare.",
        "<b>Prueba 3</b> の作文は自動採点されません。まず自分で書き、"
        "そのあと模範解答を開いて見比べましょう。"),
    "Instituto Cervantes 对 A2 公开的成套试卷有限：2020 版样卷（现行题型）与旧版样卷"
    "（Modelo 0, Versión 2）已全部收录； 2020 年 2 月真题的题目为扫描件（无文字层），暂未收录。": (
        "Instituto Cervantes has released only a few complete A2 papers: the 2020 sample "
        "(current format) and the older sample (Modelo 0, Versión 2) are both included here. "
        "The February 2020 past paper is a scan without a text layer and is not included yet.",
        "Instituto Cervantes が公開している A2 の完全な問題は限られています。2020年版サンプル"
        "（現行形式）と旧版サンプル（Modelo 0, Versión 2）はすべて収録済みです。"
        "2020年2月の過去問はテキスト層のないスキャン画像のため、未収録です。"),
    "题目与答案均来自 Instituto Cervantes 公开发布的官方样卷，版权归其所有，仅供个人学习自测。": (
        "Questions and answers come from the official sample papers released by Instituto "
        "Cervantes. Copyright Instituto Cervantes; for personal study and self-testing only.",
        "問題と解答は Instituto Cervantes が公開した公式サンプル問題によるものです。"
        "著作権は Instituto Cervantes に帰属し、個人の学習・自己採点用です。"),
    "Prueba 1 · 阅读 30 题": (
        "Prueba 1 · 30 reading questions", "Prueba 1 · 読解30問"),
    "Prueba 2 · 听力 30 题": (
        "Prueba 2 · 30 listening questions", "Prueba 2 · リスニング30問"),
    "Prueba 3 · 写作 3 题": (
        "Prueba 3 · 3 writing tasks", "Prueba 3 · 作文3題"),
    "阅读 30 题": ("30 reading questions", "読解30問"),
    "听力 30 题": ("30 listening questions", "リスニング30問"),
    "写作 3 题": ("3 writing tasks", "作文3題"),
    "共 60 题可判分": ("60 questions scored in total", "採点対象は全60問"),

    # ---------- A2 内页（页脚 / 提示） ----------
    "听力音频": ("Audio", "音声"),
    "听力音频：官方公开的真人录音（audios-A2 音频包）；为控制体积已由 320 kbps "
    "转码为单声道 48 kbps，音质足够听清，内容未做任何剪辑。": (
        "Audio: the official human recording (the audios-A2 pack), "
        "transcoded from 320 kbps to mono 48 kbps to keep the size down. Speech is perfectly "
        "clear and nothing has been cut.",
        "音声：Instituto Cervantes 公開の公式音声（audios-A2 パック）。容量を抑えるため "
        "320 kbps からモノラル 48 kbps に変換しています。聞き取りに支障はなく、"
        "内容のカットは一切ありません。"),
    "听力音频：官方未发布录音，Prueba 2 的音频按官方听力原文用神经语音（TTS）合成，"
    "不同说话人用了不同音色；为控制体积压为单声道 48 kbps，节奏与停顿按原卷标注还原。"
    "非真人录音，正式备考请以考场原音为准。": (
        "Audio: Instituto Cervantes never released a recording for this paper, so the "
        "Prueba 2 audio was synthesized from the official transcript "
        "with neural TTS, using different voices per speaker. Compressed to mono 48 kbps, and "
        "the pauses follow the timings marked in the paper. <b>Not a human recording</b> — for "
        "real exam preparation rely on the official audio.",
        "音声：このセットの録音は Instituto Cervantes から公開されていないため、"
        "公式スクリプトからニューラル TTS で合成しました（話者ごとに声を変えています）。"
        "容量を抑えるためモノラル 48 kbps に変換し、間の取り方は原巻の指定に合わせています。"
        "<b>人による録音ではありません</b>。本番対策には公式音声をお使いください。"),
    "非真人录音": ("<b>Not a human recording</b>", "<b>人による録音ではありません</b>"),
    "说明：答案依据官方 Clave de respuestas 逐题核对；如发现个别拼写差异以官方原件为准。": (
        "Note: answers were checked question by question against the official "
        "Clave de respuestas; if you spot a spelling difference, "
        "the official original prevails.",
        "注：解答は公式の Clave de respuestas と一問ずつ照合しています。"
        "表記の違いがある場合は公式原本を優先してください。"),
    "题目来源：Instituto Cervantes 公开发布的 DELE A2 官方样卷（Modelo 0）， "
    "版权归 Instituto Cervantes 所有，此处仅用于个人学习与自测。": (
        "Source: the official DELE A2 sample papers (Modelo 0) released by Instituto "
        "Cervantes. Copyright Instituto Cervantes; used here for personal study and "
        "self-testing only.",
        "出典：Instituto Cervantes が公開した DELE A2 公式サンプル（Modelo 0）。"
        "著作権は Instituto Cervantes に帰属し、ここでは個人の学習・自己採点用にのみ使用しています。"),
    "阅读（Prueba 1）": ("Reading · Prueba 1", "読解（Prueba 1）"),
    "听力（Prueba 2）": ("Listening · Prueba 2", "リスニング（Prueba 2）"),

    # ---------- 拆散的文本节点（原句被 <b> / <span> 切开） ----------
    "30 题 · 即时判分": ("30 questions · instant scoring", "30問・即時採点"),
    "每套有": ("Each paper has", "各セットには"),
    "与": ("and", "と"),
    "听力": ("Listening", "リスニング"),
    "，点选项后按「确认作答」立即判定。": (
        "; pick an option and press “Check” for an instant verdict.",
        "。選択肢を選び「解答を確認」で即時に判定されます。"),
    "先点每个 Tarea 的播放键听录音再答题；一段录音可反复播放，侧栏可切 "
    "0.75× / 1× / 1.25× / 1.5× 倍速，做完还能展开听力原文核对。": (
        "press the play button of each Tarea first, then answer. A clip can be replayed as "
        "often as you like; the sidebar offers 0.75× / 1× / 1.25× / 1.5× speeds, and you can "
        "expand the transcript afterwards to check.",
        "各 Tarea の再生ボタンで音声を聞いてから解答します。同じ音声は何度でも再生でき、"
        "サイドバーで 0.75× / 1× / 1.25× / 1.5× に速度変更できます。"
        "あとからスクリプトを開いて確認もできます。"),
    "Instituto Cervantes 对 A2 公开的成套试卷有限：2020 版样卷（现行题型）与旧版样卷（": (
        "Instituto Cervantes has released only a few complete A2 papers: the 2020 sample "
        "(current format) and the older sample (",
        "Instituto Cervantes が公開している A2 の完全な問題は限られています。"
        "2020年版サンプル（現行形式）と旧版サンプル（"),
    "）已全部收录； 2020 年 2 月真题的题目为扫描件（无文字层），暂未收录。": (
        ") are both included here. The February 2020 past paper is a scan without a text layer "
        "and is not included yet.",
        "）はすべて収録済みです。2020年2月の過去問はテキスト層のないスキャン画像のため、"
        "未収録です。"),
    "：官方公开的真人录音（": (": the official human recording (", "：公式音声（"),
    "音频包）；为控制体积已由 320 kbps 转码为单声道 48 kbps，音质足够听清，内容未做任何剪辑。": (
        " pack), transcoded from 320 kbps to mono 48 kbps to keep the size down. Speech is "
        "perfectly clear and nothing has been cut.",
        " パック）。容量を抑えるため 320 kbps からモノラル 48 kbps に変換しています。"
        "聞き取りに支障はなく、内容のカットは一切ありません。"),
    "：官方未发布录音，": (
        ": Instituto Cervantes never released a recording for this paper, so the ",
        "：このセットの録音は公開されていないため、"),
    "的音频按官方听力原文用神经语音（TTS）合成，不同说话人用了不同音色；"
    "为控制体积压为单声道 48 kbps，节奏与停顿按原卷标注还原。": (
        " audio was synthesized from the official transcript with neural TTS, using different "
        "voices per speaker. Compressed to mono 48 kbps, and the pauses follow the timings "
        "marked in the paper.",
        " の音声は公式スクリプトからニューラル TTS で合成しました（話者ごとに声を変えています）。"
        "容量を抑えるためモノラル 48 kbps に変換し、間の取り方は原巻の指定に合わせています。"),
    "，正式备考请以考场原音为准。": (
        " for real exam preparation rely on the official audio.",
        "。本番対策には公式音声をお使いください。"),
    "：Instituto Cervantes 公开发布的 DELE A2 官方样卷（": (
        ": the official DELE A2 sample papers (", "：Instituto Cervantes が公開した DELE A2 公式サンプル（"),
    "逐题核对；如发现个别拼写差异以官方原件为准。": (
        " question by question; if you spot a spelling difference, the official original "
        "prevails.",
        " と一問ずつ照合しています。表記の違いがある場合は公式原本を優先してください。"),

    # ---------- <title> ----------
    "DELE A2 阅读 + 写作 + 听力 · 官方样卷练习册": (
        "DELE A2 Reading + Writing + Listening · Official sample papers",
        "DELE A2 読解＋作文＋リスニング · 公式サンプル問題集"),
    "官方样卷 Modelo 0（2020 版） · DELE A2 阅读+写作+听力": (
        "Official sample paper Modelo 0 (2020 edition) · DELE A2 Reading + Writing + Listening",
        "公式サンプル Modelo 0（2020年版） · DELE A2 読解＋作文＋リスニング"),
    "官方样卷 Modelo 0（旧版） · DELE A2 阅读+写作+听力": (
        "Official sample paper Modelo 0 (older format) · DELE A2 Reading + Writing + Listening",
        "公式サンプル Modelo 0（旧形式） · DELE A2 読解＋作文＋リスニング"),
}


def _kv(k, en, ja):
    """渲染成仓库近期沿用的单行紧凑条目样式。"""
    return " %s: {\"en\": %s, \"ja\": %s}," % (
        json.dumps(k, ensure_ascii=False),
        json.dumps(en, ensure_ascii=False),
        json.dumps(ja, ensure_ascii=False),
    )


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    # 关键：不能 json.dump 整个文件 —— 原文件是「主体多行 + 近期条目单行」的混合排版，
    # 整体重写会把 2000 行无关内容卷进 diff。这里改成纯文本追加，只加新行。
    with open(PATH, encoding="utf-8", newline="") as f:
        txt = f.read()
    d = json.loads(txt)

    add_lines = []
    skipped = []
    for k, (en, ja) in NEW.items():
        if k in d:
            if d[k] != {"en": en, "ja": ja}:
                skipped.append(k)   # 已存在且内容不同 —— 需人工处理，不静默覆盖
            continue
        add_lines.append(_kv(k, en, ja))

    if add_lines:
        add_lines[-1] = add_lines[-1].rstrip(",")   # 末条不能带逗号（JSON 不允许尾逗号）
        end = txt.rstrip()
        assert end.endswith("}"), end[-40:]
        body = end[:-1].rstrip()          # 去掉根对象的收尾 }
        if body and not body.endswith(","):
            body += ","
        txt = body + "\n" + "\n".join(add_lines) + "\n}\n"
        with open(PATH, "w", encoding="utf-8", newline="\n") as f:
            f.write(txt)

    print("i18n.json：新增 %d 条，跳过（已存在且不一致）%d 条，现共 %d 条"
          % (len(add_lines), len(skipped), len(d) + len(add_lines)))
    for k in skipped:
        print("  ! 已存在且有差异：%s" % k)
    return 0


if __name__ == "__main__":
    sys.exit(main())
