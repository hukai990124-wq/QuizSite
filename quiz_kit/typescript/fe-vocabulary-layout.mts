interface VocabularyPage {
  subject: string;
  label: string;
  count: number;
  themes: string;
  footer: string;
  bankAttribute?: string;
}

function vocabularyPage({ subject, label, count, themes, footer, bankAttribute = '' }: VocabularyPage): string {
  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${subject} · 词汇背诵集 | 我的题库</title>
<link rel="stylesheet" href="/assets/quizsite-theme.css" id="quizsite-theme-css">
<link rel="stylesheet" href="/assets/fe-vocabulary.css">
<script src="/assets/quizsite-theme.js" id="quizsite-theme-js" defer></script>
<script type="module" src="/assets/fe-vocabulary.mjs"></script></head>
<body class="fe-vocabulary"${bankAttribute}><main class="v-wrap">
<a class="v-back" href="index.html">← ${subject}题库</a>
<header class="v-header"><p class="v-eyebrow">${label} · VOCABULARY</p><h1>词汇背诵集</h1>
<p class="v-lead">先认得术语，再读懂题目。</p><p class="v-muted">${count} 个核心词 · 日文 / 读音 / 英文 / 中文 · ${themes}</p>
<p class="v-intro">看词回忆 → 翻卡核对 → 标记掌握程度。每次从一个主题开始，把不熟的词留给下一轮。</p></header>
<p id="v-loading" role="status">正在加载词汇……</p><button type="button" id="v-retry" hidden>重新加载</button>
<noscript><p>请启用 JavaScript 以使用翻卡、搜索和进度保存。</p></noscript>
<div id="v-workspace" hidden>
<section class="v-progress-panel" aria-label="背诵进度"><p id="v-counts"></p><progress id="v-progress" value="0" max="${count}" aria-label="已掌握词汇比例"></progress>
<p class="v-muted">背诵记录保存在当前浏览器，可随时回来继续。</p><p id="v-storage" role="status" hidden>浏览器不允许保存记录，本次会话仍可背诵，关闭后记录可能丢失。</p></section>
<form id="v-filter" class="v-filter" role="search" aria-label="筛选词汇">
<label class="v-search">搜索词汇<input type="search" id="v-search" placeholder="日文、假名、英文或中文" autocomplete="off"></label>
<label>主题<select id="v-category"><option value="all">全部主题</option></select></label>
<label>学习状态<select id="v-status"><option value="all">全部词汇</option><option value="unseen">未学习</option><option value="review">待复习</option><option value="mastered">已掌握</option></select></label>
<button type="button" id="v-reset">恢复全部</button></form>
<div class="v-toolbar"><p id="v-results" role="status"></p><div class="v-view" role="group" aria-label="学习视图"><button type="button" id="v-card-view" aria-pressed="true">翻卡背诵</button><button type="button" id="v-list-view" aria-pressed="false">词汇总览</button></div></div>
<section id="v-card" class="v-card" aria-label="词汇记忆卡">
<div class="v-card-top"><span id="v-position"></span><span id="v-word-status" class="v-badge"></span></div>
<div class="v-study-options"><label>回忆方向<select id="v-direction"><option value="forward">日文 → 中文</option><option value="reverse">中文 → 日文</option></select></label><button type="button" id="v-shuffle">打乱顺序</button></div>
<div class="v-question"><h2 id="v-prompt" lang="ja"></h2><p id="v-reading" class="v-muted"></p></div>
<button type="button" id="v-flip" class="v-primary" aria-expanded="false" aria-controls="v-answer">翻卡 · 显示答案</button>
<div id="v-answer" class="v-answer" hidden><h3 id="v-answer-title"></h3><p id="v-answer-reading" class="v-muted" hidden></p><dl><dt>记忆提示</dt><dd id="v-hint"></dd><dt>易混辨析</dt><dd id="v-contrast"></dd></dl></div>
<div class="v-ratings" role="group" aria-label="掌握程度"><button type="button" id="v-review" disabled>还不熟 · 留待复习</button><button type="button" id="v-mastered" disabled>记住了 · 已掌握</button></div>
<p class="v-muted v-small">先在心里回答，再翻卡标记。标记后继续下一个词。</p>
<nav class="v-navigation" aria-label="词汇导航"><button type="button" id="v-prev">← 上一个</button><button type="button" id="v-next">下一个 →</button></nav>
</section>
<section id="v-list" class="v-list" aria-label="词汇总览" hidden></section>
<section id="v-empty" class="v-empty" hidden><h2>这一组已看完，或暂无匹配词汇</h2><p id="v-empty-text"></p><button type="button" id="v-empty-reset">恢复全部词汇</button></section>
<p id="v-feedback" class="v-feedback" role="status" aria-live="polite"></p>
</div>
<footer class="v-footer">${footer}</footer>
</main></body></html>`;
}

export default vocabularyPage({
  subject: '基本情报', label: 'FE', count: 120, themes: '八个主题',
  footer: `<p>本站整理的学习辅助材料，释义与提示为简述，不代表完整考试范围。遇到计算或算法题，还需要结合题目练习。</p><p>范围参考：<a href="https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kpe-att/syllabus_fe_ver9_2.pdf" target="_blank" rel="noopener noreferrer">IPA FE 大纲 Ver.9.2 ↗</a> · <a href="a.html">科目 A 练习</a> · <a href="b.html">科目 B 练习</a></p>`,
});

export const aibVocabularyLayout = vocabularyPage({
  subject: 'AWS AIB-C01', label: 'AIB-C01', count: 60, themes: '四个考纲领域',
  bankAttribute: ' data-vocabulary-bank="aib"',
  footer: '<a href="https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html">AWS 日文考试指南</a> · <a href="community01.html">用户整理练习卷</a>',
});
