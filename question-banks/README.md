# 全题库 TypeScript 维护方式

14 个题库都由同一套严格检查的 TypeScript 发布器构建。题目数据与页面框架已经分开；正常构建不需要运行旧 Python 页面生成器，也不读取 `site` 中的 HTML 作为模板。

```text
question-banks/
  aws-aib/、aws-aif/、aws-aip/、aws-clf/、aws-mla/、aws-saa/
  dele-a1/、dele-a2/、fe/、java-bronze/、programming/
  toeic-listening/、toeic-reading/、workbuddy-opc/
    bank.mts            # 题库名称、页面数据与附加文件的 TypeScript 声明
    pages.json          # 题目、选项、答案、解析、页面文本（当前编辑源）
  fe/content/           # FE 的 344 道图片题和 AI 文本材料
  migration-inventory.json  # 迁移前的页面指纹与题目清单
quiz_kit/typescript/
  model.mts             # 题目、选项、页面和布局类型
  define-bank.mts       # JSON 边界校验
  fe-data.mts           # FE 图片题类型、答案和材料校验
  render.mts            # 共用 TypeScript 渲染器
  layouts.mts           # 去重后的页面、题目、选项布局和兼容交互片段
  banks.mts             # 全题库注册表
  build.mts             # 发布与核对命令
```

## 编辑题目

在对应题库的 `pages.json` 中按 `path` 找到试卷，再按 `questions[].id` 或 `number` 找到题目。

- `content.stem`：题干，保留英中日段落、图片和代码等富文本标记。
- `choices[].content`：选项文字或图片；`letter` 是判分用的选项标识。
- `answer`：答案属性。普通选择题是 `A` 或 `B, E`；填空沿用原来的等价答案约定。
- `content.expl` 或 `content.explanation.*`：解析。字段保留原题型结构；`answerLabels` 让标准参考答案标签和判分答案共用同一值。
- `content.qhead` / `content.qhd`：题目标题和题型说明。
- 页面顶层 `content`：页标题、介绍、阅读与听力材料等。
- 页面 `content` 的 `script.*.TOTAL`：试卷总题数；`script.*.KEY` / `STORE` 是学习进度键，日常改题应保留。
- `layout`：布局引用。相同布局由多题共用；调整公共按钮或结构时修改对应 TypeScript 布局，而不是逐题修改 HTML。

富文本字段是已审核、随仓库维护的 HTML 片段，不是 TS/JS 表达式。构建不会执行其中的模板语法。属性值沿用原页面的 HTML 编码，例如双引号写为 `&quot;`。题目 ID、题号、选项字母和页面地址关系到已有学习进度，日常改题时应保留。

新增题目可复制同题型记录。新增或删题时也要同步题号、ID、题型说明、页面 `content` 中的 `script.*.TOTAL`、目录统计和验收测试。此次迁移保留原有判分行为。

## 构建与验证

在仓库根目录运行：

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm build             # 全部题库、前端资源和 Worker
corepack pnpm typecheck         # 前端、Worker 和题库构建的严格类型检查
corepack pnpm test              # 完整自动化验证
corepack pnpm test:banks:browser # 隔离浏览器作答与恢复检查（Windows 使用已安装的 Edge）
node scripts/build-banks.mjs --bank aws-saa  # 只重建一个题库
node scripts/build-banks.mjs --check         # 比较全部源码与当前输出
```

`pnpm` 已在 PATH 中时可省略 `corepack`。构建不爬题、不翻译、不调用 AI 或生成音频。首次迁移的额外核对命令为 `node scripts/build-banks.mjs --check --verify-migration`；它比较历史指纹，后续有意改题后不再要求与历史原文相同。Linux 浏览器检查需先用 `corepack pnpm exec playwright install chromium` 安装测试浏览器。

生成的 117 个科目 HTML 和 FE 发布 JSON 不再进入 Git；本地仍生成在原来的 `site/<题库>/` 地址，部署前必须先构建。首页、随机考试入口、图片和音频继续保留。`.build/` 是编译缓存。编辑器默认隐藏生成的科目 HTML，避免与源码混在一起。

## 历史采集工具

原有下载、PDF/OCR 提取、翻译、音频工具和原始数据仍供追溯来源使用。旧页面生成入口已转接 TypeScript 发布器；旧的扁平 JSON、`out/`、`output/` 或历史生成器函数不再是当前页面的编辑源。导入新采集材料时，先校验并整理进 `pages.json`，不要用旧成品 HTML 覆盖当前数据。

FE 的 PDF/OCR 工具更新 `question-banks/fe/content/` 中的数据及原有图片路径；随后运行统一构建发布。一次性 TypeScript 导入器保留迁移方法，但默认拒绝再次覆盖现有题库源文件。

此次迁移集中于题目数据和页面构建。原有浏览器判分脚本、内联样式及账号/AI 模块继续兼容保留；它们不会因为布局文件采用 `.mts` 就自动获得交互逻辑的类型检查。
