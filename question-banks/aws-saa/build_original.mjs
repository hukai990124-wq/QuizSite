import { mkdir, readFile, writeFile } from "node:fs/promises";

const questions = JSON.parse(await readFile(new URL("original-questions.json", import.meta.url), "utf8"));

if (!Array.isArray(questions) || questions.length !== 50) throw new Error("Expected 50 questions");
for (const [index, item] of questions.entries()) {
  const languages = ["en", "zh", "ja"];
  const validText = value => value && languages.every(lang => typeof value[lang] === "string" && value[lang].trim());
  const expectedLetters = item.select === 1 ? "ABCD" : "ABCDE";
  if (item.id !== index + 1 || ![1, 2, 3, 4].includes(item.domain)
      || !/^[1-4]\.\d$/.test(item.task) || ![1, 2].includes(item.select)
      || !Array.isArray(item.options) || item.options.length !== expectedLetters.length
      || !item.options.every((option, i) => option.letter === expectedLetters[i] && validText(option))
      || !Array.isArray(item.answer) || item.answer.length !== item.select
      || new Set(item.answer).size !== item.answer.length
      || !item.answer.every(letter => expectedLetters.includes(letter) && typeof letter === "string" && letter.length === 1)
      || !validText(item.stem) || !validText(item.explanation)) {
    throw new Error(`Invalid question ${index + 1}`);
  }
}
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
const paragraphs = (values, className) => values.map((value, index) => `<p class="${className[index]}">${escapeHtml(value)}</p>`).join("\n");
const renderQuestion = question => {
  const options = question.options.map(option => `<li class="opt" data-letter="${option.letter}">
      <span class="letter">${option.letter}</span><div class="otext">${paragraphs([option.en, option.zh, option.ja], ["en", "zh", "ja"])}</div>
    </li>`).join("\n");
  const answers = question.answer.join(", ");
  return `<div class="q" id="q${question.id}" data-n="${question.id}" data-ans="${answers}">
  <div class="qhead"><span class="qno">Question ${question.id}</span><span class="badge">Domain ${question.domain} · Task ${question.task} · Select ${question.select}</span></div>
  <div class="stem">${paragraphs([question.stem.en, question.stem.zh, question.stem.ja], ["en", "zh", "ja"])}</div>
  <ol class="opts">${options}</ol>
  <div class="qact"><button class="primary js-submit" type="button" disabled>确认作答</button><button class="js-reveal" type="button">直接看答案</button><button class="js-redo" type="button">重做本题</button><button class="js-next" type="button">下一题 ↓</button><span class="need">${question.select === 1 ? "单选" : "多选"} · 需选 ${question.select} 项</span></div>
  <div class="verdict"></div>
  <details class="ans"><summary>答案与解析 / Answer &amp; Explanation</summary>
    <p class="correct">正确答案 <b>${answers}</b></p>
    <div class="expl">${paragraphs([question.explanation.en, question.explanation.zh, question.explanation.ja], ["en", "zh", "ja"])}</div>
  </details>
</div>`;
};

const pagePath = new URL("../../site/aws-saa/original/part01.html", import.meta.url);
await mkdir(new URL("../../site/aws-saa/original/", import.meta.url), { recursive: true });
let html = await readFile(new URL("original-template.html", import.meta.url), "utf8");
const wrap = `<div class="wrap">
<h1>AWS SAA-C03 原创加练卷 · 第 01 份</h1>
<p class="sub">50 道原创练习题 · 覆盖四大考试领域 · 附答案与解析</p>
<div class="toolbar"><div class="btns"><a class="navback" href="../index.html">← 返回目录</a>
<button class="primary" id="btn-sheet" type="button">答题卡</button><button id="btn-wrong" type="button">只看错题</button><button id="btn-expand" type="button">展开全部解析</button><button id="btn-report" type="button">交卷</button><button id="btn-reset" type="button">重置</button><button onclick="window.print()" type="button">打印 / 存 PDF</button>
</div><div class="qbar"><span>已答 <b id="s-done">0</b>/<b>50</b></span><span>正确 <b id="s-ok" class="ok">0</b></span><span>错误 <b id="s-bad" class="bad">0</b></span><span>正确率 <b id="s-pct">—</b></span><span class="pbar"><i id="s-fill"></i></span></div></div>
${questions.map(renderQuestion).join("\n")}
</div><div class="sheet" id="sheet">`;
if (!html.includes("<!-- QUIZ_CONTENT -->")) throw new Error("Missing quiz content placeholder");
html = html.replace("<!-- QUIZ_CONTENT -->", wrap);
await writeFile(pagePath, html, "utf8");
console.log(`Generated ${questions.length} original SAA questions and ${pagePath.pathname}`);
