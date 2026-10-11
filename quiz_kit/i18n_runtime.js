/* =============================================================================
   题库站点 · 界面三语切换运行时（中 / EN / 日）
   -----------------------------------------------------------------------------
   设计原则
     1. 只翻译「界面文案」。题目、选项、解析、原文、正文一律不碰。
        保障来自两道锁：① 区域规则（与 quiz_kit/i18n.json 的提取口径完全一致）
        ② 字典是精确匹配（规范化后全等），不是模糊替换。
     2. 切换语言 = 先还原所有改动，再按目标语言重做一遍。
        这样中→英→日→中 反复切换不会层层叠加、不会丢原文。
     3. 引擎（quizkit.py 的 _JS）后续动态写入的文案由 MutationObserver 兜住。

   本文件由 quiz_kit/i18n_inject.py 拼接 __I18N_DICT__ 后产出 site/assets/i18n.js
   —— 请勿直接改产物。
   ============================================================================= */
(function () {
  "use strict";

  var DICT = window.__I18N_DICT__ || {};
  var LANGS = ["zh", "en", "ja"];
  var LKEY = "ui:lang";
  var WS = /\s+/g;

  /* ---------------------------------------------------------------- 区域规则 */
  /* 与 quiz_kit/_extract_ui.py 的 decide() 同源：由【最近的带 class 祖先（含自身）】
     决定归属；命中 WHITE → 可翻译，命中 BLACK → 跳过，都没有 → 继续向上。
     aud = 听力播放器外壳（.aud > .alab 标签 + <audio>）；它常被放在题目区（BLACK）
     内部，但里面只有播放器的说明文字，没有题目内容，所以单独放行。 */
  var WHITE = {};
  ("hero idx-hd idx-main toolbar tbin btns qbar qact sheet mask report howto author-dialog " +
   "reset-dialog verdict scroll-hint notice card cards tags tg pg no sd meta badge sub ov-hd " +
   "ov-bar need lang-foot aud").split(" ").forEach(function (c) { WHITE[c] = 1; });

  var BLACK = {};
  ("q tarea source qlist pool passage stem opt opts anbody src-table src-grid " +
   "fields sbody task req opthint imgopts letteropts tno tkind inst lead thd " +
   "src-h pl cap otxt gridwrap wq qtext ans i18n-noloc").split(" ")
   .forEach(function (c) { BLACK[c] = 1; });

  var WTAG = { header: 1, footer: 1 };
  var SKIP = { script: 1, style: 1, noscript: 1, textarea: 1, svg: 1, canvas: 1, iframe: 1 };
  var INLINE = { b: 1, strong: 1, em: 1, i: 1, u: 1, span: 1, a: 1, code: 1,
                 small: 1, sub: 1, sup: 1, abbr: 1, br: 1, mark: 1 };

  function clsOf(el) {
    var c = el.getAttribute("class");
    return c ? c.split(/\s+/) : [];
  }
  function region(el) {
    var p = el, i, c, tag;
    while (p && p.nodeType === 1) {
      // i18n-noloc 是「显式声明不翻译」，优先级必须最高：
      // 否则 <header>/<footer>/<summary> 这些标签会被无条件判为 white，
      // 导致整页英文化时、标了 noloc 的内容区照样被翻掉。
      // 各题库用它圈出需要照原文保留的内容区（如中文题面、日文原题、版本说明）。
      c = clsOf(p);
      for (i = 0; i < c.length; i++) if (BLACK[c[i]]) return "black";
      tag = p.tagName.toLowerCase();
      if (tag === "html") return null;
      if (tag === "summary" || WTAG[tag]) return "white";
      for (i = 0; i < c.length; i++) if (WHITE[c[i]]) return "white";
      p = p.parentNode;
    }
    return null;
  }

  /* ---------------------------------------------------------------- 词条查询 */
  function norm(s) { return String(s == null ? "" : s).replace(WS, " ").trim(); }
  function hit(txt) { var k = norm(txt); return k ? (DICT[k] || null) : null; }

  /* 动态文案（数字会变，字典无法穷举的）—— 按顺序替换 */
  var RULES = [
    [/最后更新\s*[:：]\s*/g, "Last updated: ", "最終更新："],
    [/题\s*·\s*正确率\s*/g, " answered · Accuracy ", "問 · 正答率 "],
    [/·\s*正确率\s*/g, "· Accuracy ", "· 正答率 "],
    [/本题需选\s*(\d+)\s*项，你选了\s*(\d+)\s*项/g,
      "needs $1 answers, you picked $2", "この問題は$1つ選択が必要（あなたは$2つ）"],
    [/(\d+)\s*分\s*(\d+)\s*秒/g, "$1 min $2 sec", "$1分$2秒"],
    [/正确答案\s*[:：]\s*/g, "Correct: ", "正解："],
    /* 听力播放器：每题一个「第 N 题录音」标签 */
    [/^\s*第\s*(\d+)\s*题录音\s*$/, "Audio · Q$1", "音声 · 第$1問"],

    /* ---- 基本情報技術者（FE）题库：卷别 / 题号 / 进度等由 fe.js 拼出的动态文案。
       规则按顺序链式生效，次序不能乱：
       ① 含「科目 A 官方样题」字样的整句要最先处理；
       ② 「卷别名称」要排在含它的「第 N 套 · X · N 题」整句之前；
       ③ 具体整行规则最后兜底。 ---- */
    [/^\s*这是 IPA 于\s*(\d+)\s*年发布的新制科目\s*([AB])\s*官方样题（\s*(\d+)\s*题），并非\s*(\d+)\s*年旧制考试的实考卷。题目为日文原文，按原题号作答。\s*$/,
      "This is the official sample for the new-format Subject $2 published by IPA in $1 ($3 questions); it is not an actual paper from the old-format exam of $4. Questions are in the original Japanese; answer using the original question numbers.",
      "これはIPAが$1年に公表した新制度の科目$2公式サンプル（$3問）です。旧制度$4年の本試験のものではありません。問題は日本語原文で、元の問番号で解答します。"],
    [/科目\s*([AB])\s*免除修了试验/g, "Subject $1 exemption examination", "科目$1免除修了試験"],
    [/科目\s*([AB])\s*官方样题/g, "Subject $1 official sample", "科目$1公式サンプル"],
    [/IPA\s*官方样题/g, "IPA official sample", "IPA公式サンプル"],
    [/官方公开题组卷/g, "assembled from official public questions", "公式公開問題の組卷"],
    [/(\d+)\s*年官方样题\s*科目\s*([AB])/g, "$1 official sample · Subject $2", "$1年公式サンプル・科目$2"],
    [/^\s*第\s*(\d+)\s*题，未作答\s*$/, "Q$1 · unanswered", "第$1問・未回答"],
    [/^\s*第\s*(\d+)\s*题，正确\s*$/, "Q$1 · correct", "第$1問・正解"],
    [/^\s*第\s*(\d+)\s*题，错误\s*$/, "Q$1 · wrong", "第$1問・不正解"],
    [/^\s*第\s*(\d+)\s*套\s*·\s*(.+?)\s*·\s*(\d+)\s*题\s*$/, "Set $1 · $2 · $3 questions", "第$1セット・$2・$3問"],
    [/^\s*(\d+)\s*年官方样题\s*·\s*(\d+)\s*题\s*$/, "$1 official sample · $2 questions", "$1年公式サンプル・$2問"],
    [/^\s*(\d+)\s*年度公开题\s*·\s*(\d+)\s*题\s*$/, "$1 public questions · $2 questions", "$1年度公開問題・$2問"],
    [/^\s*(\d+)\s*套完整结构\s*·\s*每套\s*(\d+)\s*题\s*$/, "$1 complete sets · $2 questions each", "$1セット完備・各$2問"],
    [/^\s*(\d+)\s*\/\s*(\d+)\s*题已作答\s*·\s*(\d+)\s*题正确\s*$/,
      "$1 / $2 answered · $3 correct", "$1 / $2 問解答済み・$3問正解"],
    [/^\s*第\s*(\d+)\s*题选项\s*$/, "Options for question $1", "第$1問の選択肢"],
    [/^\s*第\s*(\d+)\s*题\s*·\s*(.+?)\s*$/, "Q$1 · $2", "第$1問・$2"],
    [/^\s*在新标签放大第\s*(\d+)\s*页题面\s*$/, "Open page $1 of the source paper in a new tab", "原題PDFの$1ページを新しいタブで開く"],
    [/^\s*点击题页可放大\s*·\s*IPA 原题第\s*(\d+)\s*题，第\s*(\d+)\s*页\s*·\s*©\s*IPA\s*$/,
      "Click the question page to enlarge · IPA question $1, page $2 · © IPA",
      "問題ページをクリックで拡大・IPA 第$1問、$2ページ・© IPA"],
    [/^\s*科目\s*([AB])\s*原题第\s*(\d+)\s*题，官方 PDF 第\s*(\d+)\s*页\s*$/,
      "Subject $1 question $2, official PDF page $3", "科目$1 第$2問・公式PDF $3ページ"],
    [/请阅读原题页中的「問\s*(\d+)」，再选择答案。/g,
      "Read question $1 on the source page, then choose your answer.",
      "原題ページの「問$1」を読んでから解答を選んでください。"],
    [/伪代码记法见官方 PDF 第\s*(\d+)\s*[–\-]\s*(\d+)\s*页/g,
      "See pages $1–$2 of the official PDF for pseudocode notation", "擬似言語の表記は公式PDFの$1–$2ページ参照"],
    [/^\s*出典：/, "Source: ", "出典："],

    /* ---- AI 学习助手窗口：题目下拉的「第 N 题」与额度剩余次数（数字会变）。
       注意本条必须排在「第 N 题录音 / 第 N 题选项 / 第 N 题 · X」之后，
       那三条都要求额外后缀，纯「第 N 题」才会落到这里。 ---- */
    [/^\s*第\s*(\d+)\s*题\s*$/, "Q$1", "第$1問"],
    [/^\s*今日剩余\s*(\d+)\s*\/\s*(\d+)\s*次（UTC-8 标准时间每日 0:00 刷新）。\s*$/,
      "$1 / $2 left today (resets daily at 00:00 UTC-8).",
      "本日あと$1 / $2回（UTC-8 の毎日0:00にリセット）。"],
    [/^\s*访客今日剩余\s*(\d+)\s*\/\s*(\d+)\s*次；注册账号每日可提问\s*50\s*次。\s*$/,
      "$1 / $2 left today as a guest; an account can ask 50 questions a day.",
      "ゲストは本日あと$1 / $2回。アカウントは1日50回まで質問できます。"]
  ];
  function dyn(text, lang) {
    var out = text, i, r;
    for (i = 0; i < RULES.length; i++) {
      r = RULES[i];
      out = out.replace(r[0], lang === "en" ? r[1] : r[2]);
    }
    return out === text ? null : out;
  }

  /* ------------------------------------------------------------ 改动登记簿 */
  /* Map 保留插入顺序；restore() 先还元素再还文本节点。 */
  var TORIG = new Map();   // Text    -> 原始 nodeValue
  var EORIG = new Map();   // Element -> 原始 innerHTML
  var AORIG = new Map();   // Element -> {attr: 原始值}

  function restore() {
    EORIG.forEach(function (html, el) { el.innerHTML = html; });
    EORIG.clear();
    TORIG.forEach(function (v, node) { node.nodeValue = v; });
    TORIG.clear();
    AORIG.forEach(function (bag, el) {
      for (var a in bag) { try { el.setAttribute(a, bag[a]); } catch (e) {} }
    });
    AORIG.clear();
  }

  function setText(node, val) {
    if (!TORIG.has(node)) TORIG.set(node, node.nodeValue);
    var raw = TORIG.get(node);
    var lead = /^\s*/.exec(raw)[0];
    var trail = /\s*$/.exec(raw)[0];
    node.nodeValue = lead + val + trail;
  }
  /* 整段替换时只放行 <b>（字典里少数整句保留原版加粗），其余一律转义 */
  function richText(val) {
    return String(val).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/&lt;(\/?b)&gt;/g, "<$1>");
  }
  function setMarkup(el, val) {
    if (!EORIG.has(el)) EORIG.set(el, el.innerHTML);
    el.innerHTML = richText(val);
  }
  function setAttr(el, attr, val) {
    var bag = AORIG.get(el);
    if (!bag) { bag = {}; AORIG.set(el, bag); }
    if (!(attr in bag)) bag[attr] = el.getAttribute(attr);
    el.setAttribute(attr, val);
  }

  /* -------------------------------------------------------------- 三趟扫描 */
  function quasiLeaf(el) {
    var ch = el.children, i;
    for (i = 0; i < ch.length; i++) if (!INLINE[ch[i].tagName.toLowerCase()]) return false;
    return true;
  }

  /* 第一趟：整句级。自顶向下，让「父句」优先于「子碎片」。
     只对 WHITE 区域、无 [id] 后代的准叶元素做整段替换 ——
     带 id 的都是引擎动态写入的槽位（#s-done / #rp-pct …），整段替换会把它们抹掉。 */
  function passA(root, lang) {
    (function walk(el) {
      var tag = el.tagName.toLowerCase();
      if (!SKIP[tag] && region(el) === "white" && quasiLeaf(el) && !el.querySelector("[id]")) {
        var e = DICT[norm(el.textContent)];
        if (e && e[lang === "en" ? 0 : 1]) {
          setMarkup(el, e[lang === "en" ? 0 : 1]);
          return;
        }
      }
      var kids = [].slice.call(el.children), i;
      for (i = 0; i < kids.length; i++) if (kids[i].parentNode) walk(kids[i]);
    })(root);
  }

  /* 第二趟：碎片级 + 动态规则。WHITE 与「无归属」区域都放行 ——
     无归属区域里唯一带中文的东西是页面右上角那颗「← 题库总览」返回按钮。 */
  function passB(root, lang) {
    var it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p || p.nodeType !== 1 || SKIP[p.tagName.toLowerCase()]) return NodeFilter.FILTER_REJECT;
        var r = region(p);
        return (r === "white" || r === null) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var list = [], n;
    while ((n = it.nextNode())) list.push(n);
    for (var i = 0; i < list.length; i++) {
      var node = list[i];
      var e = hit(node.nodeValue);
      if (e && e[lang === "en" ? 0 : 1]) { setText(node, e[lang === "en" ? 0 : 1]); continue; }
      var out = dyn(node.nodeValue, lang);
      if (out !== null) setText(node, out);
    }
  }

  /* 第三趟：属性（root 作用域内）+ 全页 <title> */
  var ATTRS = ["title", "aria-label", "placeholder", "alt"];
  var ASEL = "[title],[aria-label],[placeholder],[alt]";
  function passC(root, lang) {
    if (!root || !root.querySelectorAll) return;
    var list = [].slice.call(root.querySelectorAll(ASEL)), i, j;
    if (root.nodeType === 1 && root.matches && root.matches(ASEL)) list.push(root);
    for (i = 0; i < list.length; i++) {
      var el = list[i], r = region(el);
      if (!(r === "white" || r === null)) continue;
      for (j = 0; j < ATTRS.length; j++) {
        var v = el.getAttribute(ATTRS[j]);
        if (!v) continue;
        var e = hit(v);
        if (e && e[lang === "en" ? 0 : 1]) { setAttr(el, ATTRS[j], e[lang === "en" ? 0 : 1]); continue; }
        /* 属性里也有带数字的动态文案（如「第 3 题，未作答」这样的 aria-label），
           精确匹配不到时回落到动态规则。 */
        var d = dyn(v, lang);
        if (d !== null) setAttr(el, ATTRS[j], d);
      }
    }
  }
  function passTitle(lang) {
    var te = document.querySelector("title");
    if (!te || !te.textContent) return;
    var t = hit(te.textContent);
    if (t && t[lang === "en" ? 0 : 1]) { setMarkup(te, t[lang === "en" ? 0 : 1]); return; }
    var d = dyn(te.textContent, lang);
    if (d !== null) setMarkup(te, d);
  }

  /* ------------------------------------------------------------ 应用 / 切换 */
  var obs = null, observerOn = false;
  function observe() {
    if (!obs) obs = new MutationObserver(onMutations);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    observerOn = true;
  }
  function unobserve() {
    if (obs && observerOn) { obs.disconnect(); observerOn = false; }
  }
  function onMutations(recs) {
    var lang = current();
    if (lang === "zh") return;
    var roots = [], i, j;
    for (i = 0; i < recs.length; i++) {
      var r = recs[i];
      if (r.type === "childList") {
        for (j = 0; j < r.addedNodes.length; j++) {
          var n = r.addedNodes[j];
          if (n.nodeType === 1) roots.push(n);
          else if (n.nodeType === 3 && n.parentNode) roots.push(n.parentNode);
        }
      } else if (r.type === "characterData") {
        if (r.target.parentNode) roots.push(r.target.parentNode);
      }
    }
    if (!roots.length) return;
    unobserve();
    try {
      for (i = 0; i < roots.length; i++) {
        var el = roots[i];
        if (el.nodeType !== 1 || !el.isConnected) continue;
        if (SKIP[el.tagName.toLowerCase()]) continue;
        passA(el, lang); passB(el, lang); passC(el, lang);
      }
    } finally { observe(); }
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "zh";
    unobserve();
    try {
      restore();
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang",
        lang === "zh" ? "zh-CN" : (lang === "ja" ? "ja" : "en"));
      if (lang !== "zh" && document.body) {
        passA(document.body, lang);
        passB(document.body, lang);
        passC(document.body, lang);
        passTitle(lang);
      }
      var bs = document.querySelectorAll("[data-set-lang]"), i, on;
      for (i = 0; i < bs.length; i++) {
        on = bs[i].getAttribute("data-set-lang") === lang;
        bs[i].setAttribute("aria-pressed", on ? "true" : "false");
        if (on) bs[i].setAttribute("aria-current", "true"); else bs[i].removeAttribute("aria-current");
      }
    } finally {
      if (document.body) observe();
    }
    document.documentElement.removeAttribute("data-i18n-wait");
  }

  function current() {
    var l = null;
    try { l = localStorage.getItem(LKEY); } catch (e) {}
    if (LANGS.indexOf(l) < 0) {
      var n = (navigator.language || navigator.userLanguage || "").toLowerCase();
      l = n.indexOf("ja") === 0 ? "ja" : (n.indexOf("zh") === 0 ? "zh" : "en");
    }
    return l;
  }
  function setLang(l) {
    if (LANGS.indexOf(l) < 0) return;
    try { localStorage.setItem(LKEY, l); } catch (e) {}
    apply(l);
  }

  function boot() {
    /* 引擎里的 confirm() 文案不在 DOM 里，只能包一层 */
    if (!window.__i18nConfirmPatched && typeof window.confirm === "function") {
      window.__i18nConfirmPatched = 1;
      var raw = window.confirm;
      window.confirm = function (msg) {
        var l = current(), e = hit(msg);
        return raw.call(window, (e && e[l === "en" ? 0 : 1]) || msg);
      };
    }
    document.addEventListener("click", function (ev) {
      var t = ev.target;
      var b = (t && t.closest) ? t.closest("[data-set-lang]") : null;
      if (!b) return;
      ev.preventDefault();
      setLang(b.getAttribute("data-set-lang"));
    }, false);
    apply(current());
  }

  window.__I18N__ = { boot: boot, apply: apply, setLang: setLang, lang: current,
                      dict: DICT, region: region };
  window.__I18N_READY__ = true;
})();
