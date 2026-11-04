# 基本情报词汇背诵集

目标：帮助中文学习者记住基本情報技術者题库中的日文术语，作为做题前后的记忆材料。沿用现有静态站、TypeScript 构建和主题，无新增依赖。

范围：120 个核心词，八组各 15 词（基础理论、算法与数据结构、计算机系统、数据库、网络、信息安全、软件开发、管理与战略）。每词有稳定 ID、日文、读音、英文、中文释义、记忆提示、易混辨析。内容为本站原创简述，范围参考 IPA FE 大纲 Ver.9.2；非官方词汇表或全部考试范围。

界面：从 FE 首页和 A/B 页面进入 `fe/vocabulary.html`。默认翻卡背诵，支持日→中、中→日、随机顺序、上一词/下一词；翻开才可标记「还不熟」或「已掌握」。筛选类别、全部/未学习/待复习/已掌握及搜索（含假名、英文、中文）；切换词汇总览能查阅当前筛选结果。空筛选有明确提示和恢复全部入口，加载失败可重试。

状态：`fe:vocabulary:v1` 在浏览器 localStorage 保存每词 `review` / `mastered`，缺省表示未学习。不混入答题分数、账号同步或随机试卷。损坏存储忽略；存储被拒绝时提示当前会话仍可背诵。复习标记后进入下一词；用待复习筛选背完后展示完成提示。提供已掌握数和总进度。

维护：数据在 `question-banks/fe/content/vocabulary.json`，页面壳在 `quiz_kit/typescript/fe-vocabulary-layout.mts`，注册到 FE 的 bank/pages/layouts；行为在 `src/typescript/fe-vocabulary.mts`，样式在 `src/css/fe-vocabulary.css`。遵循现有 DOM textContent 和原生表单控件风格，不使用 innerHTML 注入数据。

实施顺序：先数据与筛选/存储单元测试，再实现页面和入口，最后验证交互、持久化、移动端和构建可重现性。保留原有试卷和进度。

验收：120 个唯一词和 ID，字段完整、八类齐全；搜索日文/假名/中英文；翻卡、反向背诵、随机、导航、三种学习状态与刷新持久化可用；空结果、完成、加载失败、损坏/禁用存储可恢复；320/768/1440px 无横向溢出；原生键盘操作可用；新页面脚本无错误。

命令（仓库根目录）：
- `node scripts/build-project.mjs`
- `npm run typecheck`（Windows PowerShell 可用 `npm.cmd run typecheck`）
- `npm test`（Windows PowerShell 可用 `npm.cmd test`）
- `node scripts/build-banks.mjs --bank fe --check`
- `node quiz_kit/fe_vocabulary_audit.cjs`

边界：仅修改此功能的内容、构建注册和页面入口；不新增依赖，不修改答题/账号契约，不发布远程站点。

来源：[IPA 大纲 Ver.9.2](https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kpe-att/syllabus_fe_ver9_2.pdf)，[IPA 原题入口](https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/index.html)。
