# QuizSite

个人学习题库网站：[quizsite.p8.ink](https://quizsite.p8.ink)。

## 用 VS Code 打开

在 VS Code 中选择「文件 → 从文件打开工作区」，打开根目录的 **`QuizSite.code-workspace`**。左侧会分别显示 HTML、CSS、JavaScript、TypeScript、题库资料、后端、工具和文档。

工作区会隐藏依赖、缓存和 `site/assets` 中自动生成的 CSS/JS，搜索也会略过题库的 `out`、`output` 副本。这些文件仍在磁盘上，需要查看时可调整工作区的 `files.exclude` / `search.exclude`。普通「打开文件夹」也可以工作，但不会显示分类工作区的多目录入口。

## 目录怎么分

```text
QuizSite/
├─ src/                       网站前端可编辑源码
│  ├─ css/                    公共样式、聊天框、账号框、考试、页脚
│  ├─ javascript/             手写 JS、账号、在线人数、随机题、翻译运行时
│  └─ typescript/             带类型检查的交互代码（.ts / .mts）
├─ question-banks/            13 个考试/练习资料目录、题目数据、生成脚本
├─ site/                      HTML 网页、发布数据、图片、音频；部署目录
│  ├─ index.html              首页
│  ├─ assets/                 构建生成的 CSS/JS，以及公共图片/数据
│  ├─ aws-aif/、aws-aip/…     AWS 各题库页面
│  ├─ programming/            HTML、CSS、TypeScript 代码审查页面
│  └─ 其他考试目录/           各自的 HTML、数据、图片、音频
├─ worker/                    Cloudflare 后端 API、数据库迁移和测试
├─ quiz_kit/                  共用判分模板、翻译词典、注入器和浏览器检查工具
├─ scripts/                   前端资源构建脚本
├─ tests/                     自动化测试
├─ docs/                      设计与维护说明
├─ .vscode/                   VS Code 的构建、检查、测试和预览任务
├─ package.json               常用命令和依赖
└─ wrangler.toml              Cloudflare Worker 部署配置
```

## 想改什么，就去哪里

| 修改内容 | 编辑位置 |
| --- | --- |
| 首页文字、题库卡片、首页布局 | `site/index.html` |
| 公共外观、配色、导航样式 | `src/css/quizsite-theme.css` |
| AI 聊天窗口样式 / 交互 | `src/css/chat.css` / `src/typescript/chat.mts` |
| 账号窗口样式 / 交互 | `src/css/account.css` / `src/javascript/account.js` |
| 随机出题入口 / 考试交互 | `src/javascript/random-quiz.js` / `src/typescript/random-exam.mts` |
| 页脚徽章和座右铭 | `src/css/sigil-footer.css` / `src/typescript/sigil-footer.mts` |
| 返回顶部、学习计时、人机验证前端 | `src/typescript/` 中相应模块 |
| 中英日界面词条 / 翻译规则 | `quiz_kit/i18n.json` / `src/javascript/i18n_runtime.js` |
| HTML、CSS、TypeScript 练习题本身 | `question-banks/programming/*-review.json` |
| AWS 或语言考试题目、答案、原件 | `question-banks/` 对应科目；见[题库资料说明](question-banks/README.md) |
| AI 提示词、模型和每日次数限制 | `worker/chat.mts` |
| 登录、注册、学习进度后端 | `worker/account.mjs` |
| 人机验证服务端 | `worker/registration-turnstile.mts` |

`site` 中部分旧试卷仍含生成器输出的内联样式和答题脚本，保留现有行为。由脚本生成的题目页优先修改对应题库数据或生成器；直接改成品 HTML，之后重新生成可能会覆盖。编程题里展示的代码片段属于题目资料，不是网站自身的源码。

## 编辑、构建、预览

需要 Node.js 22.13 或更新版本，以及 `package.json` 声明的 pnpm 版本。首次在新电脑打开时，在仓库根目录运行：

```powershell
pnpm install --frozen-lockfile
pnpm build
```

日常在仓库根目录运行：

```powershell
pnpm build          # CSS/JS 同步到 site/assets，编译前后端 TypeScript
pnpm typecheck      # 严格类型检查
pnpm test           # 构建并运行全部 Node 自动化测试
pnpm dev:types      # 修改前端 TypeScript 时自动编译
```

也可以用 VS Code 的「终端 → 运行任务」选择「构建网站」「检查 TypeScript」「运行全部测试」「本地预览（静态网页）」。`Ctrl+Shift+B` 运行默认构建任务。

本地预览任务需要 Python，打开 [localhost:8000](http://localhost:8000)。它只提供静态页面，账号、AI 等接口需要 Cloudflare Worker 环境。停止预览时在任务终端按 `Ctrl+C`。

生成题库 HTML 或音频时按各科目的说明执行 Python/Node 脚本。普通前端构建不会重新爬题、翻译、调用模型或生成语音。

## 源码和生成文件

- 浏览器最终执行 JavaScript。`src/typescript/*.mts` 编译为 `site/assets/*.mjs`，公共导航 `.ts` 编译为 `.js`，URL 保持原样。
- `src/css/`、`src/javascript/` 的独立文件会复制到 `site/assets/`；翻译运行时和词典合成为 `i18n.js`。
- 这些浏览器 CSS/JS 产物不再重复提交到 Git，由 `pnpm build` 重建。请修改 `src` 中的源文件。
- 后端 `.mts` 和同名 `.mjs` 放在 `worker`；编辑 `.mts` 后构建。`account.mjs` 和 `worker.js` 是手写后端文件。
- `site` 的 HTML、发布数据和媒体继续提交。`raw/`、解析中间文件、截图等仍按 `.gitignore` 留在本机。
- API Secret 继续保存在 Cloudflare 的运行时 Secret 中。

网站由现有 `quizsite` Worker 提供页面和 API，`quizsite-entry` Pages 入口通过服务绑定接入新域名。日常发布步骤见[部署指南](部署指南.md)。
