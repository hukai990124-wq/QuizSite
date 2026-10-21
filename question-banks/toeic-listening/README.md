# TOEIC® Listening 练习 · 10 套（带音频 + 可作答判分）

## 第 07–10 套：toeicmocktests 追加套

与第 01–04 套**同源**（toeicmocktests.com 免费模拟，官方 2026 格式）、
**同工艺**（该站公开的 `/api/tts` 接口合成 + ffmpeg 合并），各 100 题：
Part 1 × 6、Part 2 × 25、Part 3 × 39（13 段）、Part 4 × 30（10 段）。

题源站上共有 9 套 mock，01–04 已用 1–4，本次追加 **mock 5–8**，
落地为站内第 **07–10 套**（05/06 是 Ocean 套，编号不冲突）。

生成流程（独立脚本，不改动 01–04 的 build/dump/gen_html 原逻辑）：

```bash
node toeic-listening/dump_extra.js 5 6 7 8          # 汇总 raw content JS
python toeic-listening/add_tmt_sets.py build        # 生成题目 + 音频任务
python toeic-listening/dl_audio.py --jobs parsed/tmt-extra-audio-jobs.json
python toeic-listening/add_tmt_sets.py render       # 渲染 HTML/md 并同步到 site/
```

（源 mock 号 05–08 → 站内套号 07–10。新增图片 24 张、音频 216 个 mp3。）

## 第 05 / 06 套：英美混音强化练习

两套均为 100 题：Part 1 × 6、Part 2 × 25、Part 3 × 39、Part 4 × 30。
沿用现有逐题答题、即时判分、错题筛选、答题卡、交卷和本机进度保存。

题目来自 [TOEIC Question Ocean](https://github.com/kdeppaei/toeic-question-ocean)，
固定版本 `a940bb8b479ef4d06af468015d757041c3d2e457`；为 MIT 许可的原创模拟，
不是 ETS 官方真题。版权声明见 `LICENSE-OCEAN.txt`。
新增图片均为该项目的原创 AI 商务场景，未使用其 Pexels 照片。
中文解析保留原文；选项作确定性重排，答案和录音同步调整。
优先抽取原库标注的中高难度项目，平衡分配两套；标签不是经过校准的 TOEIC 分数。
打印机图片题重写了干扰项和解析，以增强动作、状态辨别，已人工检查图片。

短题逐题英美交替；每段长对话的男声固定美式、女声固定英式；独白按段交替。
第 05 / 06 套均使用 Kokoro-82M，分别使用 `am_michael`（美式男声）和 `bf_emma`（英式女声），语速 1.1。第 05 套于 2026-10-15 从旧 Piper 音频替换为 Kokoro；题文、答案、口音分配和进度键不变。
均为合成音，不是官方或真人录音。模型不在网页端运行；网站播放的是 108 个本地 MP3 文件。
语音来源及许可信息见 `AUDIO-NOTICES.md`。
网页加载和首次播放需要网络；下载完整 HTML 和资源目录后可离线打开。

### 复现与检查

1. 将题源仓库检出到上述固定版本。
2. `node toeic-listening/import_ocean.cjs ../toeic-question-ocean`
3. 准备 Node.js 和 FFmpeg；无需 Piper 模型或密钥。
4. 第 05 套通过 Kokoro 公共 Space 合成并暂存、校验后安装：
   `node toeic-listening/synthesize_kokoro_m6.mjs --mock 5 --out-dir <第五套独立暂存目录> --ffmpeg <FFmpeg路径> --install`。
5. 第 06 套使用相同命令，但传入 `--mock 6` 和独立暂存目录（不传 `--mock` 时仍默认第 06 套，兼容旧命令）。语音片段按文本、声音和语速的指纹缓存，中断重跑可以复用已生成片段。旧 `synthesize_accent_audio.py` 仅供历史 Piper 版本复现，勿用其覆盖当前音频。
6. `python toeic-listening/build_extra_sets.py`
7. `python -m unittest discover -s toeic-listening -p test_extra_sets.py -v`

生成器复用 `gen_html.py` / `quiz_kit`，仅写入第 05 / 06 套；
原四套题目、音频和进度键不会重建或迁移。

### 发布与回退

2026-10-15 的 Kokoro 补录仅替换第五套 54 个同名 MP3（源目录和 `site/` 各一份）并更新音频清单与来源说明，不重建题页、翻译或题库数据。完成后运行 `pnpm test`、音频清单/口音测试和 `node toeic-listening/kokoro_playback_audit.cjs`；后者需通过 `QUIZSITE_BROWSER_MODULES` 指定隔离浏览器依赖，可用 `QUIZSITE_TEST_BASE` 检查已部署站点。回退本次音频提交即可恢复旧录音，不需要删除进度或修改数据库。页面播放的是静态 MP3，不会实时调用 Kokoro。

Cloudflare 继续由主分支自动部署，无新增服务或密钥。发布后检查六套目录、05/06 题页、音频播放和判分。
如新增题页无法加载、播放或保存进度，停止推广新增入口；回退本次 TOEIC 功能提交及合并中的总数调整，
保留同时合入的 DELE 更新。旧四套进度键不变，05/06 的本机进度无需删除。

下文是原第 01–04 套的来源说明，相关版权声明仅针对原四套。

**4 套完整 TOEIC 听力**，每套 **100 题**，结构与现行 TOEIC L&R 考试的听力部分完全对齐：

| 部分 | 题型 | 题量 | 题号 |
|---|---|---|---|
| Part 1 | Photographs（看图选句） | 6 | 1–6 |
| Part 2 | Question-Response（问答） | 25 | 7–31 |
| Part 3 | Conversations（对话） | 39 | 32–70 |
| Part 4 | Talks（独白） | 30 | 71–100 |

每套都有：**听力音频（mp3）+ 题目文本 + 答案 + 逐题解析 + 录音原文（transcript）**，
并且**可直接在线作答、自动判对错、统计正确率**。

---

## ⚠️ 先说清楚一条：音频是电脑合成（TTS），不是真人录音

- 这 4 套的录音由 **Deepgram Aura 语音合成**生成（美/英/爱尔兰口音男声女声混用），
  **不是** ETS 官方播音员，也不是真人录音。
- 用途是**练题型、练反应、练语速**，**不能**用来当作「考试原声」的听力素材。
- 想要真人录音/官方原声，见文末「想要真人录音怎么办」。

---

## 怎么用

打开 **`index.html`** → 选一套：

| 功能 | 说明 |
|---|---|
| **听录音** | 每题/每段都有一个音频播放条，可重播（真实考试只播一遍，练时可反复听） |
| **Part 1** | 看照片 → 听 4 句陈述 → 选最贴切的一句 |
| **Part 2** | 听一句问话 + 三个回应 → 选最恰当的回答 |
| **Part 3 / 4** | 听对话/独白 → 回答 3 题（题面印在屏幕上，跟真考试一致） |
| **判对错** | 答对绿色 ✓，答错红色 ✗ 并标出「正解」 |
| **正确率统计** | 顶部实时显示「已答 / 正确 / 错误 / 正确率」+ 进度条 |
| **录音原文** | 每题/每段可展开看 transcript（答完自动展开） |
| **答题卡 / 交卷 / 只看错题 / 进度保存** | 与阅读练习同一套引擎，进度存本机浏览器 |

> **选项文本默认隐藏**（Part 1 / 2）：跟真考试一样，只能靠听来选。
> 想边看文本边核对，点顶部「显示选项文本」。
>
> 手机浏览器打开同样可用，Safari「添加到主屏幕」后跟 App 一样，**音频已本地化，可离线**。

需要纯文本排版的，用同名 `.md` 文件。

## 文件清单

```
index.html                         ← 总目录（从这里进）
TOEIC_Listening_Test_01..10.html   ← 10 套（可作答）
TOEIC_Listening_Test_01..10.md     ← 10 套纯文本版（音频 + 原文 + 答案 + 解析）
audio/m1..m10/                     ← 每套 54 个音频（P1×6 + P2×25 + P3×13 + P4×10）
img/                               ← Part 1 照片（01–04、07–10 各 6 张；05–06 用 Ocean 原创 AI 图）
```

## 来源

| 套号 | 来源 |
|---|---|
| 01–04 | **TOEIC Mock Tests**（toeicmocktests.com）—— 免费模拟，官方 2026 格式，无需注册 |
| 05–06 | **TOEIC Question Ocean**（MIT 许可原创模拟题；均使用 Kokoro-82M） |
| 07–10 | **TOEIC Mock Tests**（toeicmocktests.com）—— 与 01–04 同源，追加套 |

- Part 1 照片为该站用 AI 生成的仿真商务场景图（05–06 除外，用 Ocean 的原创图）。
- 音频通过该站公开的 TTS 接口生成（`/api/tts`）。

## 版权与使用声明

- **TOEIC® 与 ETS®** 是美国教育考试服务中心（ETS）的注册商标，本项目与 ETS 无任何关联，也未获其认可或赞助。
- 题目内容著作权归来源网站所有，此处仅供**个人学习/备考**使用，**请勿商业使用或再次分发**。
- 本项目**未收录任何 ETS 官方受版权保护的真题**。

---

## 想要真人录音怎么办（官方与其他途径）

**关键事实：ETS 从不公开任何真实考试场次的真题与录音。** TOEIC 不像雅思/托福那样有公开的 past papers，
所以「某某场次的官方真题 + 录音」在市面上**不存在**。能拿到官方音的只有下面这两条路：

| 途径 | 有什么 | 说明 |
|---|---|---|
| **ETS 官方免费样题** | 1 份 L&R Sample Test（PDF，含听力节选 + 官方音频链接） | `ets.org/pdfs/toeic/toeic-listening-reading-sample-test.pdf`，官网免费，量很少 |
| **公式 TOEIC Listening & Reading 問題集 1–12** | 每本 **2 回完整真题（400 题）+ 官方播音员音频（CD / 下载）** | 日本 IIBC 出版，¥3,080–3,300/本，**唯一能拿到官方原声＋同源题目的正规渠道**。第 9 集起改为纯下载音频 |

第三方免费来源（含**真人录音**的，可作补充）：

| 站点 | 说明 |
|---|---|
| **yec.co.id/toeic/simulasi** | 印尼考点自制的完整模拟题，**真人录音 mp3 直链**，题目文本齐全 |
| **jaxtina.com** | 越南英语中心，完整 listening mock + mp3 |
| **toeic-training.com** | 分 Part 练习 + 完整听力套题，带音频与 audioscript |
| **practice-the-toeic-test.com** | 免费样题带真人配音，完整版 $8 |
| **estudyme.com** | TOEIC Test Pro，题库量大（部分免费） |
| **YouTube：E2 TOEIC、Hip English** | 完整听力套题视频，可当音频用 |

> 结论：**要官方同源原声 → 只能买公式問題集；要免费真人录音 → 用 yec.co.id / jaxtina 这类第三方。**
> 本次交付的 4 套属于「官方 2026 格式的第三方模拟 + TTS 音」，适合日常刷题，不适合当原声范本。

---
_整理生成于 2026-10-06。_
