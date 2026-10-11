# TypeScript 网页交互层

## 目的与边界

为复杂交互、动画和未来图形组件建立类型检查与编译入口，不更换框架、不修改外观或账号/学习进度协议。TypeScript 在构建时转换成浏览器执行的 JavaScript，不是新增浏览器功能，也不自动产生炫彩效果。

项目已包含 AI 前端、聊天协议、HOTSPOT 数据协议与 AI Worker 的 TypeScript。本轮新增以下源文件，保留原浏览器 URL：

| TypeScript 源 | 编译产物 | 职责 |
| --- | --- | --- |
| `src/back-to-top.mts` | `site/assets/back-to-top.mjs` | 返回顶部、减少动态效果偏好 |
| `src/quizbank-theme.ts` | `site/assets/quizbank-theme.js` | 公共导航、组件加载、动态标题 |
| `src/aif-hotspots.mts` | `site/assets/aif-hotspots.mjs` | 匹配题控件、参考解释、进度恢复 |

公共导航仍为经典 `defer` 脚本；`moduleDetection: legacy` 防止生成 CommonJS `exports`，其余 `.mts` 文件仍是 ES 模块。类型检查保留 strict、noImplicitReturns、noUnusedLocals 等原有标准。新增 DOM 元素类型及对未知 JSON/事件目标的边界检查。

`quiz_kit/theme_inject.py` 从编译后的 `site/assets/quizbank-theme.js` 复制到目标站点；不再维护第二份 JS 实现。生成页面前先运行 `pnpm build`。

账号、在线人数、国际化生成器、随机出题和题目内联脚本仍为兼容 JavaScript；这不是“整个仓库全部转换完成”。本轮为新增 TypeScript 网页组件建立稳定入口，不将旧脚本强行设为弱类型 TS。

## 日常开发

1. 新 ES 模块写在 `src/<name>.mts`，使用 DOM 类型；编译后是 `/assets/<name>.mjs`。
2. 内部导入写输出扩展名 `.mjs`，例如 `import { matchingAnswer } from './hotspot-protocol.mjs'`。
3. `pnpm dev:types` 自动编译前端；另开本地静态服务器或 Wrangler 查看网页。
4. 发布前运行 `pnpm typecheck`、`pnpm test`；Cloudflare 的既有 `[build]` 自动执行 `pnpm build`。
5. 继续保留仓库已有编译产物策略。不要只修改 `site/assets` 中由 TS 生成的文件，下一次构建会覆盖它们。

动画、渐变、WebGL/Canvas 可以由这些 TS 模块调用；视觉样式仍写在 CSS。TypeScript 的职责是减少交互代码的类型错误，不替代动画库或图形 API。参考：[官方 DOM 文档](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)。

## 验收

- 严格类型检查与编译通过，错误时不输出构建产物；不添加 `any` 或类型检查屏蔽。
- 页面加载顺序与现有 URL 保持兼容，中文/英文/日文切换正常。
- 返回顶部仅挂载一次，滚动后显示，点击返回顶部，并尊重减少动态效果偏好。
- 匹配题选择、判分、重做、刷新恢复与学习进度格式保持兼容。
- 账号与 AI 请求使用模拟接口做浏览器回归，不消耗模型额度。

## 验证与回滚

`pnpm typecheck`、`pnpm test` 与 `quiz_kit/i18n_audit.cjs`。回滚对应迁移提交即可恢复原脚本；无数据库迁移或密钥修改。
