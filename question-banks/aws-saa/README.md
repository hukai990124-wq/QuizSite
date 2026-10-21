# AWS SAA-C03 备考题库（中英对照）

AWS Certified Solutions Architect – Associate (SAA-C03) 备考题库。A、B 两条题库各 10 份、每份 50 题，共 **1000 题**；另有 **50 道原创加练题**和 AWS 官方样题 10 题。新增原创卷提供英中日题干、选项与解析。

> 打开 **`output/index.html`** 就是总入口。

> ⚠️ 中文为**机器翻译**（Google 引擎 + 术语白名单），用于辅助理解；**术语与表述以英文原文为准**。时间充裕时建议以英文题干为准做题。

---

## 目录结构

```
output/
├── index.html              # 总入口（先开这个）
├── appendix_official.html  # 附录：AWS 官方样题 10 题（官方答案与解析）
├── original-questions.json # 原创加练卷数据（构建时生成）
├── build_original.mjs      # 生成原创加练卷 HTML 与题目数据
├── original/               # C 线 · 原创加练卷
│   └── part01.html         # 50 题，英中日对照
├── real/                   # A 线 · 真题演练卷（HydraNode）
│   ├── index.html
│   ├── part01.html …part10.html    # 每份 50 题
│   └── part01.md  …part10.md       # 同内容 Markdown 可编辑版
└── compliance/             # B 线 · 原创练习卷（Ditectrev）
    ├── index.html
    └── part01.html …part10.html / .md
```

## 两条线怎么选

| | A 线 · 真题演练卷 | B 线 · 原创练习卷 |
|---|---|---|
| **来源** | HydraNode 免费题库（552 题，取 500） | Ditectrev 原创题库（772 题，取 500） |
| **题量** | 10 份 × 50 题 = **500 题** | 10 份 × 50 题 = **500 题** |
| **内容** | 考生回忆的真题，最接近真实考试 | 依考纲编写的原创题，非真题 |
| **解析** | ✅ 每题完整解析 | ❌ 无解析（仅答案） |
| **风险** | ⚠️ 属"真题 dump"，**仅限自用** | ✅ 可自由使用 |

**建议**：先用 B 线打基础，再用 A 线模拟真实难度，最后用官方样题校准。

## 使用方法（可作答版）

- **做题**：打开 `output/index.html` → 选一份 → **点选项 →「确认作答」** → 立刻判对错、显示正确答案与解析。
- **多选**：题目标签会写 `Select 2 / Select 3`，操作区提示「需选 N 项」。选不满也能提交，答错时提示你选了几项。
- **正确率**：顶部实时显示「已答 / 正确 / 错误 / 正确率」+ 进度条；右上「交卷」看最终成绩与用时。
- **答题卡**：弹出全部题号的网格，颜色区分对错，点击跳转。
- **只看错题**：一键过滤只显示做错的题，反复刷。
- **进度保存**：存在本机浏览器，关掉再打开继续做（不跨设备同步）。
- **重做本题 / 直接看答案**：单题重做；「直接看答案」不计入正确率。
- **打印/存 PDF**：点右上「打印 / 存 PDF」，输出纯题面，解析另起一页。
- **可编辑**：每份同时提供 `.md` 文件，可直接修改、导入 Anki 等。
- **触屏/手机**：响应式布局，Safari 加到主屏幕后全屏可用；纯静态，不需要联网、不需要注册。

### 答题引擎在哪

交互逻辑（判分 / 统计 / 进度 / 答题卡）抽成了共用模块 **`../../quiz_kit/quizkit.py`**，TOEIC 与 AWS 两条线共用同一份，改一处两边同步生效。
真正注入页面的是内联的 CSS+JS，所以每个 HTML **单文件自包含**，可以直接发到手机、离线打开。

## 数据质检（本次生成时已逐题校验）

- 1000 题 + 官方 10 题，**题干、选项、答案三项完整率 100%**，无空字段。
- 逐题校验「英文本出现的服务名在中文里是否丢失」——**残留缺陷 0**。
- 全文扫描无占位符残留、无乱码字符。
- 术语白名单：`Amazon EC2 / S3 / RDS / DynamoDB …`、`AWS IAM / KMS / Lambda …`、`S3 Glacier` 等品牌名保留英文；存储类名（Glacier Deep Archive 等）不直译。

## 考试信息（SAA-C03）

- 65 题（50 题计分 + 15 题不计分）· 130 分钟 · 及格分 720/1000
- 四大领域：设计安全架构 30% · 设计弹性架构 26% · 设计高性能架构 24% · 设计成本优化架构 20%
- 官方考试页：https://aws.amazon.com/certification/certified-solutions-architect-associate/

## 版权与合规声明

- AWS® / Amazon Web Services® 等为其各自所有者的商标；本项目与 AWS 无任何关联。
- **A 线**题目来自公开可访问的第三方题库站，属"考生回忆真题"性质。AWS 认证协议禁止**传播**考试内容——**请勿再分发、商用或公开分享**，仅供个人备考。
- **B 线**为第三方原创练习题（Ditectrev 声明非 dump），版权归原作者。
- **附录**为 AWS 官方公开的 Sample Questions。
- 本目录不含任何付费真题。

## 数据来源

| 来源 | 链接 | 用途 |
|---|---|---|
| HydraNode | hydranode.ai/exams/aws/saa-c03 | A 线题库（552 题） |
| Ditectrev | github.com/Ditectrev/…SAA-C03… | B 线题库（772 题） |
| AWS 官方样题 | aws.amazon.com（Sample Questions PDF） | 附录 10 题 |

## 复现/重跑（脚本）

| 脚本 | 作用 |
|---|---|
| `translate.py <source> <lo> <hi>` | 批量机翻（术语白名单 + 占位符保护） |
| `fix_tr.py <source> [--dry]` | 翻译质检 + 自动补翻（空字段/丢术语/残留占位符） |
| `normalize_zh.py` | 术语与中英混排规范化 |
| `gen_saa.py <hydranode\|ditectrev> <total>` | 组装可作答的 HTML/MD |
| `gen_appendix.py` | 生成官方样题附录（可作答） |
| `../../quiz_kit/quizkit.py` | **共用答题引擎**（判分/统计/进度/答题卡/成绩单），TOEIC 与 AWS 共用 |
| `../toeic-reading/gen_html.py` | TOEIC 侧生成器（同样引用 quizkit） |

---
*生成时间：2026-10-05 · 工具：WorkBuddy*
