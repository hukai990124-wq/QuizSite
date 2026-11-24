(function () {
  "use strict";

  function files(prefix, count, name) {
    return Array.from({ length: count }, (_, i) => `${prefix}/${name}${String(i + 1).padStart(2, "0")}.html`);
  }
  const pools = {
    "aws-clf": { title: "AWS CLF-C02", type: "aws", files: files("aws-clf", 4, "part"), quotas: [12, 15, 17, 6], quickQuotas: [2, 3, 4, 1] },
    "aws-aib": { title: "AWS AIB-C01", type: "aws", files: ["aws-aib/community01.html"], storagePool: "aws-aib-community", quickQuotas: [2, 3, 3, 2], tenQuestionExam: true, maxSize: 30 },
    "aws-aip": { title: "AWS AIP-C01", type: "aws", files: [...files("aws-aip", 3, "part"), ...files("aws-aip/open-easy", 4, "part"), ...files("aws-aip/open-hard", 3, "part"), ...files("aws-aip/open-veryhard", 3, "part")] },
    "aws-aif": { title: "AWS AIF-C01", type: "aws", files: [...files("aws-aif/bank", 10, "part"), ...files("aws-aif/practice", 5, "part")] },
    "aws-saa": { title: "AWS SAA-C03", type: "aws", storagePool: "aws-saa-ac", files: [...files("aws-saa/real", 10, "part"), ...files("aws-saa/original", 1, "part")] },
    "aws-mla": { title: "AWS MLA-C01", type: "aws", files: ["aws-mla/index.html"] },
    "toeic-listening": { title: "TOEIC Listening", type: "listening", files: files("toeic-listening", 10, "TOEIC_Listening_Test_") },
    "toeic-reading": { title: "TOEIC Reading", type: "reading", files: files("toeic-reading", 10, "TOEIC_Reading_Test_") }
  };
  const params = new URLSearchParams(location.search);
  const poolName = params.get("pool");
  const config = pools[poolName];
  const size = Number(params.get("size"));
  const shortAwsPaper = config?.type === "aws" && size === 10;
  const quickPractice = shortAwsPaper && !config.tenQuestionExam;
  const message = document.getElementById("message");
  const retry = document.getElementById("retry");
  retry.addEventListener("click", () => location.reload());

  if (!config || size > (config.maxSize ?? 100) || !(shortAwsPaper || size === 50 || (size === 100 && config.type !== "aws"))) {
    message.textContent = "随机出题参数无效，请返回题库目录重新选择。";
    return;
  }

  let seed = params.get("seed");
  const hasSeed = /^[a-f0-9]{8}$/i.test(seed || "");
  if (!hasSeed) {
    seed = Array.from(crypto.getRandomValues(new Uint8Array(4)), n => n.toString(16).padStart(2, "0")).join("");
    params.set("seed", seed);
    history.replaceState(null, "", `${location.pathname}?${params}`);
  }
  let state = parseInt(seed, 16) || 1;
  function random() {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  }
  function shuffle(items) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function sample(items, count) {
    if (items.length < count) throw new Error(`题库不足：需要 ${count} 组，找到 ${items.length} 组`);
    return shuffle(items).slice(0, count);
  }
  function fingerprint(unit) {
    return unit.questions.map(q => (q.querySelector(".stem .en") || q.querySelector(".stem") || q).textContent.replace(/\s+/g, " ").trim().toLowerCase()).join("|");
  }
  function distinct(units) {
    const seen = new Set();
    return units.filter(unit => {
      const key = fingerprint(unit);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function questionUnit(node) { return { nodes: [node], questions: [node] }; }
  function sectionNodes(doc, part) {
    const heading = doc.querySelectorAll(".wrap > h2")[part];
    if (!heading) throw new Error(`缺少 Part ${part + 1}`);
    const nodes = [];
    for (let node = heading.nextElementSibling; node && node.tagName !== "H2"; node = node.nextElementSibling) nodes.push(node);
    return nodes;
  }
  function readingUnits(doc, part) {
    const nodes = sectionNodes(doc, part);
    if (part === 0) return nodes.filter(node => node.classList.contains("q")).map(questionUnit);
    const units = [];
    let current = null;
    nodes.forEach(node => {
      if (node.classList.contains("ref")) {
        current = { nodes: [], questions: [] };
        units.push(current);
      }
      if (current && (node.classList.contains("ref") || node.classList.contains("passage") || node.classList.contains("q"))) {
        current.nodes.push(node);
        if (node.classList.contains("q")) current.questions.push(node);
      }
    });
    return units.filter(unit => unit.questions.length);
  }
  function listeningUnits(doc, part) {
    return sectionNodes(doc, part).filter(node => node.classList.contains("set")).map(node => ({
      nodes: [node], questions: Array.from(node.querySelectorAll(".q"))
    }));
  }
  function chooseGroups(units, target) {
    const candidates = shuffle(distinct(units));
    const reachable = Array(target + 1).fill(null);
    reachable[0] = [];
    candidates.forEach((unit, index) => {
      const amount = unit.questions.length;
      for (let sum = target; sum >= amount; sum--) {
        if (!reachable[sum] && reachable[sum - amount]) reachable[sum] = [...reachable[sum - amount], index];
      }
    });
    if (!reachable[target]) throw new Error(`找不到完整题组来组成 ${target} 题`);
    return reachable[target].map(index => candidates[index]);
  }
  function mediaAbsolute(node, sourceUrl) {
    [node, ...node.querySelectorAll("[src]")].forEach(el => {
      if (el.hasAttribute("src")) el.setAttribute("src", new URL(el.getAttribute("src"), sourceUrl).href);
    });
  }
  function collect(docs, type, part) {
    return docs.flatMap(({ doc, url }) => {
      const units = type === "reading" ? readingUnits(doc, part) : listeningUnits(doc, part);
      return units.map(unit => ({ ...unit, url }));
    });
  }
  function renumber(unit, start, sourceUrl) {
    const nodes = unit.nodes.map(node => node.cloneNode(true));
    const questions = nodes.flatMap(node => node.classList.contains("q") ? [node] : Array.from(node.querySelectorAll(".q")));
    const originalNumbers = unit.questions.map(q => q.getAttribute("data-n"));
    questions.forEach((q, index) => {
      const number = start + index;
      const original = q.getAttribute("data-n");
      q.id = `q${number}`;
      q.setAttribute("data-n", String(number));
      const label = q.querySelector(".qhead .qno");
      if (label) label.textContent = `Question ${number}`;
      const inlineNumber = q.querySelector(".stem .n");
      if (inlineNumber) inlineNumber.textContent = `${number}.`;
      const source = q.querySelector(".qhead .src");
      if (source) source.textContent = `${sourceUrl.split("/").slice(-2).join("/")} #${original}`;
    });
    nodes.forEach(node => {
      const heading = node.classList.contains("set") ? node.querySelector(".shd") : null;
      if (heading) heading.textContent = questions.length === 1 ? `Question ${start}` : `Questions ${start}–${start + questions.length - 1}`;
      if (node.classList.contains("ref")) node.textContent = node.textContent.replace(/Questions?\s+\d+\s*[–-]\s*\d+|Question\s+\d+/i,
        questions.length === 1 ? `Question ${start}` : `Questions ${start}–${start + questions.length - 1}`);
      if (node.classList.contains("passage")) {
        const walker = node.ownerDocument.createTreeWalker(node, NodeFilter.SHOW_TEXT);
        const numberMap = new Map(originalNumbers.map((oldNumber, index) => [oldNumber, String(start + index)]));
        const oldPattern = originalNumbers.join("|");
        while (walker.nextNode()) {
          const textNode = walker.currentNode;
          textNode.textContent = textNode.textContent.replace(new RegExp(`(^|\\n)([ \\t]*)(${oldPattern})(?=[ \\t]*(?:\\n|$))`, "gm"),
            (_, line, spaces, oldNumber) => `${line}${spaces}${numberMap.get(oldNumber)}`);
        }
      }
      mediaAbsolute(node, sourceUrl);
    });
    return nodes;
  }
  function render(base, selected, quotas) {
    const doc = base.doc;
    const wrap = doc.querySelector(".wrap");
    const title = `${config.title} · ${quickPractice ? "随机刷 10 题" : `随机考试 ${size} 题`}`;
    doc.title = title;
    wrap.querySelector("h1").textContent = title;
    const intro = wrap.querySelector("p.sub, p.meta");
    if (intro) intro.textContent = `从本网站 ${config.title} 题库随机抽取 · ${size} 题 · 可作答判分 · 进度保存在本机`;
    if (config.type === "aws") wrap.querySelectorAll(":scope > p.sub").forEach(el => { if (el !== intro) el.remove(); });
    const countLabel = doc.querySelector(".qbar span:first-child b:last-child");
    if (countLabel) countLabel.textContent = String(size);
    const nextUrl = `/random.html?pool=${encodeURIComponent(poolName)}&size=${size}`;
    const newButton = doc.createElement("a");
    newButton.href = nextUrl;
    newButton.textContent = quickPractice ? "再刷 10 题" : "再随机一套";
    newButton.className = "random-again";
    doc.querySelector(".toolbar .btns").append(newButton);
    const extraStyle = doc.createElement("style");
    extraStyle.textContent = ".toolbar .random-again{display:inline-block;font:inherit;font-size:13px;padding:6px 13px;border-radius:7px;border:1px solid #0b6b3a;background:#fff;color:#0b6b3a;text-decoration:none}.toolbar .random-again:hover{background:#eef6f0}@media(max-width:560px){.toolbar .random-again{font-size:12px;padding:5px 10px}}";
    if (config.type === "aws") extraStyle.textContent += '.wrap .zh,.wrap .ja{display:none}html[data-lang="zh"] .wrap .zh{display:block}html[data-lang="ja"] .wrap .ja{display:block;color:#0f4c81;font-size:14px}html[data-lang="ja"] .wrap .ja:before{content:"日訳 ";font-size:10px;color:#9ca3af;letter-spacing:.5px}';
    doc.head.append(extraStyle);

    if (config.type === "aws") {
      wrap.querySelectorAll(":scope > .q").forEach(node => node.remove());
      const footer = wrap.querySelector(":scope > footer");
      let number = 1;
      selected.forEach(unit => renumber(unit, number++, unit.url).forEach(node => wrap.insertBefore(node, footer)));
      if (footer) footer.firstChild.textContent = "随机练习题来自本站同认证题库；具体来源和使用说明见对应题库目录。";
    } else {
      const headings = Array.from(wrap.querySelectorAll(":scope > h2"));
      let number = config.type === "reading" ? 101 : 1;
      headings.forEach((heading, part) => {
        const rest = sectionNodes(doc, part);
        rest.filter(node => node.classList.contains("q") || node.classList.contains("set") || node.classList.contains("ref") || node.classList.contains("passage")).forEach(node => node.remove());
        const anchor = headings[part + 1] || null;
        const first = number;
        selected[part].forEach(unit => {
          renumber(unit, number, unit.url).forEach(node => wrap.insertBefore(node, anchor));
          number += unit.questions.length;
        });
        heading.textContent = heading.textContent.replace(/（[^）]+）|\([^)]*\)/, `（${first}–${number - 1}）`);
      });
      const meta = wrap.querySelectorAll("p.meta");
      if (meta[1]) meta[1].textContent = `${size} 题 · ${quotas.map((n, i) => `Part ${config.type === "reading" ? i + 5 : i + 1}（${n}）`).join(" + ")} · ${config.type === "reading" ? "阅读篇章完整保留" : "录音题组完整保留"}`;
    }
    const scripts = Array.from(doc.querySelectorAll("script:not([src])"));
    const engine = scripts.find(script => /var KEY="quiz:/.test(script.textContent));
    if (!engine) throw new Error("原试卷缺少答题程序");
    // Random papers have their own controller regardless of the source paper's engine.
    doc.documentElement.dataset.examStatus = quickPractice ? "practice" : "pending";
    if (config.type === "aws") {
      doc.documentElement.dataset.examLayout = "single";
      doc.querySelectorAll(".exam-bar,.random-entry").forEach(node => node.remove());
      // Keep the source paper's directory link without covering the shared header controls.
      doc.querySelectorAll('a[style]').forEach(link => {
        if (link.style.position === 'fixed' && /目录|总览/.test(link.title)) {
          link.removeAttribute('style'); link.classList.add('exam-return'); wrap.prepend(link);
        }
      });
    }
    // A changed question pool must not reuse answers saved for the old numbered paper.
    doc.documentElement.dataset.examKey = `quiz:random-exam:${config.storagePool || poolName}:${size}:${seed}`;
    doc.documentElement.dataset.examTitle = config.title;
    const examStyle = doc.createElement("link");
    examStyle.rel = "stylesheet";
    examStyle.href = "/assets/random-exam.css";
    doc.head.append(examStyle);
    engine.textContent = "";
    engine.type = "module";
    engine.src = "/assets/random-exam.mjs";
    doc.querySelectorAll("[src],[href]").forEach(el => {
      ["src", "href"].forEach(name => {
        const value = el.getAttribute(name);
        if (value && !value.startsWith("#")) el.setAttribute(name, new URL(value, base.url).href);
      });
    });
    document.open();
    document.write(`<!DOCTYPE html>${doc.documentElement.outerHTML}`);
    document.close();
  }
  async function run() {
    const docs = await Promise.all(config.files.map(async path => {
      const url = new URL(path, location.href).href;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`无法读取 ${path}（HTTP ${response.status}）`);
      return { doc: new DOMParser().parseFromString(await response.text(), "text/html"), url };
    }));
    const base = docs[0];
    if (config.type === "aws") {
      const saaPolicy = poolName === "aws-saa" ? (await import("/assets/saa-exam-policy.mjs")).isSaaExamQuestion : null;
      const all = distinct(docs.flatMap(({ doc, url }) => Array.from(doc.querySelectorAll(".wrap > .q"))
        .filter(node => node.getAttribute("data-ans") && node.querySelector(".opts, input.fill"))
        .filter(node => !saaPolicy || saaPolicy(
          node.getAttribute("data-ans").split(/[,|]/).map(value => value.trim().toUpperCase()),
          Array.from(node.querySelectorAll(".opts li.opt"), option => option.dataset.letter || ""),
          node.getAttribute("data-kind") || ""))
        .map(node => ({ ...questionUnit(node), url }))));
      const quotas = shortAwsPaper ? config.quickQuotas : config.quotas;
      let selected;
      if (quotas) {
        selected = quotas.flatMap((count, index) => sample(all.filter(unit => unit.nodes[0].querySelector(".badge")?.textContent.includes(`Domain ${index + 1}`)), count));
        selected = shuffle(selected);
      } else selected = sample(all, size);
      render(base, selected, null);
    } else {
      const quotas = config.type === "listening" ? (size === 50 ? [3, 14, 18, 15] : [6, 25, 39, 30]) : (size === 50 ? [15, 8, 27] : [30, 16, 54]);
      const selected = quotas.map((count, part) => {
        const units = collect(docs, config.type, part);
        return config.type === "listening" && part < 2 ? sample(distinct(units), count) : chooseGroups(units, count);
      });
      render(base, selected, quotas);
    }
  }
  run().catch(error => {
    message.textContent = `出题失败：${error.message}`;
    retry.hidden = false;
  });
})();
