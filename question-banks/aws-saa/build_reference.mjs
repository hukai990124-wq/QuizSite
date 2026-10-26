import { readFile, writeFile } from 'node:fs/promises';
import { groups } from './reference-data.mjs';

const scope = JSON.parse(await readFile(new URL('reference-scope.json', import.meta.url), 'utf8'));
const entries = groups.flatMap(group => group.entries);
const services = entries.filter(entry => entry.kind === 'service');
const ids = new Set();
for (const entry of entries) {
  if (ids.has(entry.id) || !/^[a-z][a-z0-9-]+$/.test(entry.id)) throw new Error(`Invalid reference ID: ${entry.id}`);
  ids.add(entry.id);
  for (const field of ['name', 'alias', 'purpose', 'functions', 'distinction', 'source']) {
    if (!entry[field]?.trim()) throw new Error(`Missing ${field}: ${entry.id}`);
  }
  if (!['aws.amazon.com', 'docs.aws.amazon.com'].includes(new URL(entry.source).hostname)) throw new Error(`Non-AWS source: ${entry.id}`);
  if (/[\u3040-\u30ff]/u.test([entry.alias, entry.purpose, entry.functions, entry.distinction].join(' '))) throw new Error(`Japanese in Chinese reference: ${entry.id}`);
}
for (const name of scope.services) {
  if (!services.some(entry => entry.name === name)) throw new Error(`Missing in-scope service: ${name}`);
}
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const counts = `${services.length} 项服务 · ${entries.length - services.length} 个术语`;
const renderEntry = entry => `<article class="ref-entry" id="${entry.id}" data-kind="${entry.kind}">
  <div class="ref-entry-heading"><span class="ref-kind">${entry.kind === 'service' ? '服务' : '术语'}</span><h3><a href="#${entry.id}">${esc(entry.name)}</a></h3><p class="ref-alias">${esc(entry.alias)}</p></div>
  <dl><div><dt>有什么用</dt><dd>${esc(entry.purpose)}</dd></div><div><dt>实现什么</dt><dd>${esc(entry.functions)}</dd></div><div class="ref-distinction"><dt>理解要点</dt><dd>${esc(entry.distinction)}</dd></div></dl>
  <a class="ref-source" href="${esc(entry.source)}" target="_blank" rel="noopener noreferrer">AWS 官方资料<span class="ref-sr-only">：${esc(entry.name)}（新窗口）</span> ↗</a>
</article>`;

const html = `<!DOCTYPE html>
<html lang="zh-CN" data-lang="zh">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AWS SAA-C03 服务与术语集 · QuizSite</title>
<meta name="description" content="按用途理解 AWS SAA-C03 的 ${services.length} 项服务与 ${entries.length - services.length} 个核心术语，包含功能说明、概念辨析和官方资料。">
<link rel="stylesheet" href="/assets/quizsite-theme.css" id="quizsite-theme-css">
<link rel="stylesheet" href="/assets/saa-reference.css">
<script src="/assets/quizsite-theme.js" id="quizsite-theme-js" defer></script>
<script type="module" src="/assets/saa-reference.mjs"></script>
</head>
<body class="saa-reference">
<a class="ref-skip" href="#reference-content">跳到服务与术语</a>
<main class="ref-wrap i18n-noloc">
  <a class="ref-back" href="index.html">← SAA 备考目录</a>
  <header class="ref-hero">
    <p class="ref-eyebrow">AWS SAA-C03 / REFERENCE</p>
    <h1>服务与术语集</h1>
    <p class="ref-lead">先理解它有什么用，再理解它怎样组成架构。</p>
    <p class="ref-summary">${counts} · 12 个主题 · 中文说明，保留英文名称与缩写</p>
    <p class="ref-scope">服务范围按 <a href="${esc(scope.source)}" target="_blank" rel="noopener noreferrer">AWS 官方 SAA-C03 考纲</a>核对（${scope.checked}），另补充核心架构术语。官方清单并不穷尽所有考点，服务名称和可用性也会变化；每条附官方资料供继续查阅。</p>
  </header>
  <form class="ref-filter" id="reference-filter" role="search" hidden>
    <div class="ref-search-field"><label for="reference-search">搜索服务或术语</label><input type="search" id="reference-search" placeholder="例如：S3、私有子网、灾难恢复" autocomplete="off" aria-controls="reference-content"></div>
    <div class="ref-kind-field"><label for="reference-kind">内容类型</label><select id="reference-kind"><option value="all">全部内容</option><option value="service">只看服务</option><option value="term">只看术语</option></select></div>
    <button class="ref-clear" type="reset">清空筛选</button>
    <p class="ref-result" id="reference-result" role="status" aria-live="polite">显示 ${entries.length} / ${entries.length} 条</p>
  </form>
  <noscript><p class="ref-notice">全部内容已列在下方；启用 JavaScript 后可使用搜索与筛选。</p></noscript>
  <div class="ref-layout">
    <nav class="ref-nav" aria-label="按主题浏览">
      <h2>按主题浏览</h2>
      <button type="button" class="ref-all" data-category="all" aria-pressed="true" hidden>全部主题 <span>${entries.length}</span></button>
      ${groups.map(group => `<a href="#group-${group.id}" data-category="${group.id}">${esc(group.name)} <span>${group.entries.length}</span></a>`).join('\n      ')}
    </nav>
    <div id="reference-content" tabindex="-1">
      <p class="ref-empty" id="reference-empty" hidden>没有找到匹配条目。试试英文缩写、中文用途，或清空筛选。</p>
      ${groups.map((group, index) => `<section class="ref-group" id="group-${group.id}" data-group="${group.id}" aria-labelledby="heading-${group.id}">
        <header class="ref-group-heading"><p class="ref-section-number">${String(index + 1).padStart(2, '0')}</p><div><h2 id="heading-${group.id}">${esc(group.name)}</h2><p>${esc(group.intro)}</p></div></header>
        ${group.entries.map(renderEntry).join('\n')}
      </section>`).join('\n')}
    </div>
  </div>
  <footer class="ref-footer"><a href="index.html">← 返回 SAA 备考目录</a><p>本页为阅读参考资料，按用途整理服务和术语。</p></footer>
</main>
</body>
</html>
`;
await writeFile(new URL('../../site/aws-saa/reference.html', import.meta.url), html, 'utf8');
console.log(`Generated SAA reference: ${counts}, ${groups.length} categories.`);
