# 基本情報技術者試験（FE）官方题库

站点入口：`site/fe/index.html`；科目 A、B 分别在 `a.html`、`b.html`，年度互不混合。

| 年度 | 科目 A | 科目 B |
| --- | ---: | ---: |
| 2022 官方样题 | 60 | 20 |
| 2023 公开实考题 | 20 | 6 |
| 2024 | 20 | 6 |
| 2025 | 20 | 6 |
| 2026 | 20 | 6 |

2022 年的 80 题是 IPA 于当年发布、用于 2023 年新制科目 A/B 的样题，并非 2022 年旧制“上午/下午”实考题。2023–2026 年每年公开的 26 题是部分实考题，不是完整 CBT 考卷。题面图片由官方问题 PDF 转换，答案逐题核对官方解答 PDF；未改写原题或加入第三方解析。合计 184 题。页面逐题标注年度、科目、题号及来源；2022 样题使用 IPA 指定的出典格式。版权归独立行政法人情報処理推進機構（IPA）所有。IPA 的[公开题使用说明](https://www.ipa.go.jp/shiken/faq.html)与[样题使用说明](https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html)允许在教育题库中利用这些材料，但要求注明来源。

构建：安装 Python 3、Poppler（`pdftoppm` 在 PATH），从仓库根目录运行 `python fe/build_official.py`。脚本下载 IPA 官方 PDF 到被 Git 忽略的 `fe/raw/`，并生成 `site/fe/data.json` 与题页 JPEG。`fe/test_official.py` 用 `pdfplumber` 对照来源文件验证题号、答案和页码。`fe/test_browser.cjs` 是本地浏览器冒烟测试，需要 Playwright、Edge 和 `python -m http.server 8765 --directory site`。

官方入口：[2022 样题](https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html) · [2023](https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html) · [2024](https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html) · [2025](https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html) · [2026](https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html)
