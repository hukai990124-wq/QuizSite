# 题库资料与生成脚本

这里按考试分类保存可编辑的题目数据、参考资料、生成脚本及本地原件。网站发布的 HTML、音频、图片和数据在根目录的 `site/`，两者通过各题库的构建/同步脚本衔接。

| 目录 | 内容 | 主要编辑入口 |
| --- | --- | --- |
| `aws-aif/` | AWS AIF-C01、专业术语 | `vocabulary.json`；原题处理见 `gen_aif.py` |
| `aws-aip/` | AWS AIP-C01 | `data/questions.json`、`data/open-questions.json` |
| `aws-clf/` | AWS CLF-C02 | `data/questions.json` |
| `aws-mla/` | AWS MLA-C01 | `data/questions.json` |
| `aws-saa/` | AWS SAA-C03 | 原创题在 `build_original.mjs`，其余见本目录 README |
| `dele-a1/`、`dele-a2/` | 西班牙语阅读、听力、写作 | `build.py`、本地 `raw/`、`out/` |
| `toeic-listening/` | TOEIC 听力、音频生成 | `data/`、`build_extra_sets.py` |
| `toeic-reading/` | TOEIC 阅读 | `parsed/`、`assemble.py`、`gen_html.py` |
| `fe/` | 基本情报技术者科目 A/B | `build_official.py`、`build_extra.py`、本地 `raw/` |
| `programming/` | HTML、CSS、TypeScript 代码审查题 | `html-review.json`、`css-review.json`、`typescript-review.json` |
| `java-bronze/` | Java Bronze 练习与模拟考试 | `java-bronze.json`、`java-bronze-exam.json` |
| `workbuddy-opc/` | OPC 备考资料与生成器 | `data.py`、`data_papers.py` |

## 修改题目后怎么生成网页

在仓库根目录运行，例如：

```powershell
python question-banks/programming/build_html_review.py
python question-banks/programming/build_css_review.py
python question-banks/programming/build_typescript_review.py
python question-banks/java-bronze/build.py
python question-banks/aws-aif/gen_vocabulary.py
pnpm build
pnpm test
```

不同题库对原件、Python 库、音频工具和同步流程的要求不同，请结合对应目录的 README。不要批量执行下载、翻译或语音脚本来进行普通前端构建。

`raw/`、`parse/`、`parsed/`、截图和临时文件继续按原有 `.gitignore` 规则只留在本机。此次移动包含这些本地目录；不会把它们加入 Git，也没有改动题目、答案或音频内容。

编程题中的 HTML/CSS/JavaScript/TypeScript 示例属于题目内容；网站自身的代码在 `src/`。只改网站外观时，编辑 `src/css/`。
