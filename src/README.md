# 网站前端源码

- `css/`：独立样式文件。公共配色和页面外壳看 `quizsite-theme.css`，其他组件按文件名区分。
- `javascript/`：现有手写 JavaScript，包含账号、在线人数、随机题、页脚，以及翻译运行时。`.mjs` 同样是 JavaScript，只是使用模块形式。
- `typescript/`：带类型检查的浏览器交互。`.ts` 和 `.mts` 都是 TypeScript；`.mts` 编译为浏览器加载的 `.mjs`。

执行 `pnpm build` 后，这些源码对应的浏览器文件会生成到 `site/assets/`，网页已有的资源链接保持不变。

HTML 页面按题库放在 `site/`。题目 JSON 和生成器按科目放在 `question-banks/`。后端代码在 `worker/`。

代码内的 `/assets/...` 是网站访问路径，不要因为源码目录变化把它改成 `/src/...`。
