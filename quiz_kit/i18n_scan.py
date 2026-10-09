# -*- coding: utf-8 -*-
"""用真实浏览器 + i18n 运行时自身的区域规则，扫出「英文模式下仍显示中文」的界面串。

关键：必须在**未翻译的原始 DOM** 上判定，否则 passA 的「整句」键会被已翻译的
碎片污染。所以用 fetch 拿原始 HTML → DOMParser 解析 → 复刻运行时三道锁。

报告打到 stdout（有多少条缺、分别在哪几页），同时把明细写进系统临时目录
（临时目录路径会打印出来），不想往仓库里落文件。
  kind = A   整句级（white 区域 + 准叶元素 + 无 [id] 后代）→ 词典按整句收录
         B   碎片级（文本节点）
         C   属性（title / aria-label / placeholder / alt）
         T   <title>
用法：先在 site/ 起静态服务（默认 8777），再跑本脚本。
"""
import json
import os
import sys
import tempfile

from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # quiz_kit/ 的上一层
SITE = os.path.join(ROOT, "site")
BASE = "http://127.0.0.1:8777"

SCAN_JS = r"""
async (url) => {
  var R = window.__I18N__;
  if (!R) return { error: "no __I18N__" };
  var DICT = R.dict;
  var html = await (await fetch(url)).text();
  var doc = new DOMParser().parseFromString(html, "text/html");

  var WHITE = {}, BLACK = {}, INLINE = {}, SKIP = {};
  ("hero idx-hd idx-main toolbar tbin btns qbar qact sheet mask report howto author-dialog " +
   "reset-dialog verdict scroll-hint notice card cards tags tg pg no sd meta badge sub ov-hd " +
   "ov-bar need lang-foot").split(" ").forEach(function (c) { WHITE[c] = 1; });
  ("q tarea source qlist pool passage stem opt opts anbody src-table src-grid " +
   "fields sbody task req opthint imgopts letteropts tno tkind inst lead thd " +
   "src-h pl cap otxt gridwrap wq qtext ans i18n-noloc").split(" ")
   .forEach(function (c) { BLACK[c] = 1; });
  var WTAG = { header: 1, footer: 1 };
  ("script style noscript textarea svg canvas iframe").split(" ")
    .forEach(function (t) { SKIP[t] = 1; });
  ("b strong em i u span a code small sub sup abbr br mark").split(" ")
    .forEach(function (t) { INLINE[t] = 1; });

  function clsOf(el) { var c = el.getAttribute("class"); return c ? c.split(/\s+/) : []; }
  function region(el) {
    var p = el, i, c, tag;
    while (p && p.nodeType === 1) {
      tag = p.tagName.toLowerCase();
      if (tag === "html") return null;
      if (tag === "summary" || WTAG[tag]) return "white";
      c = clsOf(p);
      for (i = 0; i < c.length; i++) if (WHITE[c[i]]) return "white";
      for (i = 0; i < c.length; i++) if (BLACK[c[i]]) return "black";
      p = p.parentNode;
    }
    return null;
  }
  function norm(s) { return String(s == null ? "" : s).replace(/\s+/g, " ").trim(); }
  function hasCJK(s) { return /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(s); }
  function quasiLeaf(el) {
    var ch = el.children, i;
    for (i = 0; i < ch.length; i++) if (!INLINE[ch[i].tagName.toLowerCase()]) return false;
    return true;
  }
  function ctxOf(el) {
    var t = el.tagName.toLowerCase();
    var c = el.getAttribute("class");
    return c ? t + "." + c.split(/\s+/)[0] : t;
  }

  /* 与 i18n_runtime.js 的 RULES 保持一致：命中的文案由动态规则翻，不需要进字典 */
  var RULES = [
    /最后更新\s*[:：]\s*/,
    /题\s*·\s*正确率\s*/,
    /·\s*正确率\s*/,
    /本题需选\s*(\d+)\s*项，你选了\s*(\d+)\s*项/,
    /(\d+)\s*分\s*(\d+)\s*秒/,
    /正确答案\s*[:：]\s*/,
    /^\s*第\s*(\d+)\s*题录音\s*$/
  ];
  function byRule(s) {
    for (var i = 0; i < RULES.length; i++) if (RULES[i].test(s)) return true;
    return false;
  }

  /* 元素自身直接文本（不含子元素）的长度。用来剔除 div.tags / div.top 这类
     「纯容器」——它们只是并排几个 span，运行时的整句替换会把 span 结构冲掉，
     所以不该当整句 key 收录。真正的句子（内嵌 <b>）直接文本一定够长。 */
  function directLen(el) {
    var n = el.childNodes, i, s = "";
    for (i = 0; i < n.length; i++) if (n[i].nodeType === 3) s += n[i].nodeValue;
    return norm(s).length;
  }

  var out = [];
  function add(kind, key, el) {
    out.push({ kind: kind, key: key, ctx: ctxOf(el), region: region(el) || "none" });
  }

  // passA：整句级
  //   命中字典 → 运行时会整段替换 innerHTML，里面的碎片不必再看（打标记 + return）
  //   未命中   → 运行时同样会继续往下翻碎片，所以既报整句键，也继续递归
  (function walk(el) {
    var tag = el.tagName.toLowerCase();
    if (!SKIP[tag] && region(el) === "white" && quasiLeaf(el) && !el.querySelector("[id]")) {
      var t = norm(el.textContent);
      if (t && hasCJK(t)) {
        if (DICT[t]) { el.setAttribute("data-i18n-covered", "1"); return; }
        if (directLen(el) >= 4 && !byRule(t)) add("A", t, el);
      }
    }
    var kids = [].slice.call(el.children), i;
    for (i = 0; i < kids.length; i++) if (kids[i].parentNode) walk(kids[i]);
  })(doc.body);

  // passB：碎片级（跳过已被整句替换覆盖的区域）
  var it = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var t = norm(n.nodeValue);
      if (!t || !hasCJK(t) || byRule(t)) return NodeFilter.FILTER_REJECT;
      var p = n.parentNode;
      if (!p || p.nodeType !== 1 || SKIP[p.tagName.toLowerCase()]) return NodeFilter.FILTER_REJECT;
      if (p.closest("[data-i18n-covered]")) return NodeFilter.FILTER_REJECT;
      var r = region(p);
      return (r === "white" || r === null) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var n;
  while ((n = it.nextNode())) { if (!DICT[norm(n.nodeValue)]) add("B", norm(n.nodeValue), n.parentNode); }

  // passC：属性
  var ATTRS = ["title", "aria-label", "placeholder", "alt"];
  var list = [].slice.call(doc.querySelectorAll("[title],[aria-label],[placeholder],[alt]"));
  for (var i = 0; i < list.length; i++) {
    var el = list[i], r = region(el);
    if (!(r === "white" || r === null)) continue;
    for (var j = 0; j < ATTRS.length; j++) {
      var v = el.getAttribute(ATTRS[j]);
      if (v && hasCJK(v) && !DICT[v] && !byRule(v)) add("C", ATTRS[j] + " | " + v, el);
    }
  }

  // <title>
  var te = doc.querySelector("title");
  if (te && te.textContent) {
    var tt = norm(te.textContent);
    if (hasCJK(tt) && !DICT[tt] && !byRule(tt)) out.push({ kind: "T", key: tt, ctx: "title", region: "none" });
  }
  return { items: out };
}
"""


def main():
    pages = []
    for dp, dn, fn in os.walk(SITE):
        if os.path.basename(dp) == "assets":
            continue
        for f in sorted(fn):
            if f.lower().endswith(".html"):
                rel = os.path.relpath(os.path.join(dp, f), SITE).replace("\\", "/")
                pages.append(rel)
    pages.sort()

    keys = {}
    errors = []
    hit_pages = 0
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        ctx = b.new_context(viewport={"width": 1280, "height": 900})
        ctx.add_init_script("try{localStorage.setItem('ui:lang','en')}catch(e){}")
        pg = ctx.new_page()
        pg.goto(BASE + "/index.html", wait_until="load")
        pg.wait_for_timeout(200)
        for i, rel in enumerate(pages):
            try:
                r = pg.evaluate(SCAN_JS, BASE + "/" + rel)
            except Exception as e:
                errors.append((rel, str(e)[:150]))
                continue
            items = r.get("items", [])
            if items:
                hit_pages += 1
            for it in items:
                k = it["key"]
                rec = keys.setdefault(k, {"kind": it["kind"], "ctx": it["ctx"],
                                          "region": it["region"], "pages": []})
                if rel not in rec["pages"]:
                    rec["pages"].append(rel)
        b.close()

    todo_path = os.path.join(tempfile.gettempdir(), "quizbank_i18n_todo.json")
    with open(todo_path, "w", encoding="utf-8") as f:
        json.dump(keys, f, ensure_ascii=False, indent=1)
    print("明细已写入 %s" % todo_path)

    print("%d 个页面 / %d 个页面有待补串 / %d 条不重复" % (len(pages), hit_pages, len(keys)))
    if errors:
        print("！%d 个页面扫描失败：" % len(errors))
        for rel, e in errors:
            print("   ", rel, e)

    for k in sorted(keys, key=lambda x: (keys[x]["kind"], x)):
        v = keys[k]
        print("[%s] %-52s <%s> (%d)" % (v["kind"], k[:52], v["ctx"], len(v["pages"])))
    return 0


if __name__ == "__main__":
    sys.exit(main())
