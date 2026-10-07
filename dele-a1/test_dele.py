# -*- coding: utf-8 -*-
"""DELE A1 练习册端到端验证（Playwright）
1) 每页 .q 数量 = 25，无 JS 报错
2) 全答对 -> 正确率 100%
3) 全答错 -> 正确率 0%
4) 填空判定：正确写法 / 容错写法（无重音、带冠词）
5) 手机视口无横向溢出、工具栏按钮可点
6) 截图存档
"""
import os
import sys
import json

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
SHOT = os.path.join(HERE, "shots")
os.makedirs(SHOT, exist_ok=True)

PAGES = ["a1-modelo0-2020", "a1-modelo0-2008", "a1-0720", "a1-2009-0516"]
fails = []


def url(slug):
    return "file:///" + os.path.join(OUT, slug + ".html").replace("\\", "/")


def answer_all(page, mode):
    """mode='right' 全对；'wrong' 全错"""
    qs = page.eval_on_selector_all(".q", "els => els.map(e => ({n:e.getAttribute('data-n'),k:e.getAttribute('data-kind'),a:e.getAttribute('data-ans')}))")
    for q in qs:
        n = q["n"]
        ans = (q["a"] or "").split("|")[0].strip()
        if q["k"] == "fill":
            if mode == "right":
                val = ans
            else:
                val = "ZZZZ"
            page.fill("#q%s input.fill" % n, val)
            page.press("#q%s input.fill" % n, "Enter")
        else:
            letters = page.eval_on_selector_all(
                "#q%s li.opt" % n, "els => els.map(e=>e.getAttribute('data-letter'))")
            want = ans.upper() if mode == "right" else next((l for l in letters if l.upper() != ans.upper()), letters[0])
            page.click("#q%s li.opt[data-letter='%s']" % (n, want))
            page.click("#q%s .js-submit" % n)
    page.wait_for_timeout(150)


with sync_playwright() as pw:
    br = pw.chromium.launch()
    ctx = br.new_context(viewport={"width": 1180, "height": 900})
    pg = ctx.new_page()
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    pg.on("console", lambda m: errors.append("console:" + m.text) if m.type == "error" else None)

    for slug in PAGES:
        pg.goto(url(slug))
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(150)

        n = pg.eval_on_selector_all(".q", "e=>e.length")
        nfill = pg.eval_on_selector_all(".q[data-kind='fill']", "e=>e.length")
        if n != 25:
            fails.append("%s: .q 数量 %d != 25" % (slug, n))

        # 展开/收起全部解析（未作答状态）
        pg.click("#btn-expand")
        pg.wait_for_timeout(120)
        total_ans = pg.eval_on_selector_all("details.ans", "e=>e.length")
        opend = pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length")
        if total_ans != 25 or opend != 25:
            fails.append("%s: 展开解析 open=%d total=%d (期望 25/25)" % (slug, opend, total_ans))
        pg.click("#btn-expand")
        pg.wait_for_timeout(120)
        opend2 = pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length")
        if opend2 != 0:
            fails.append("%s: 收起解析 open=%d (期望 0)" % opend2)

        # 全对
        answer_all(pg, "right")
        pct = pg.inner_text("#s-pct")
        done = pg.inner_text("#s-done")
        if pct != "100%" or done != "25":
            fails.append("%s: 全对结果 pct=%s done=%s (期望 100%%/25)" % (slug, pct, done))

        # 交卷成绩单
        pg.click("#btn-report")
        pg.wait_for_timeout(120)
        rp = pg.inner_text("#rp-pct")
        if rp != "100%":
            fails.append("%s: 成绩单 %s != 100%%" % (slug, rp))
        pg.click("#rp-close")

        # 全对 -> 只看错题：应一道都不显示
        pg.click("#btn-wrong")
        pg.wait_for_timeout(120)
        vis_w = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis_w != 0:
            fails.append("%s: 全对时只看错题仍显示 %d 题 (期望 0)" % (slug, vis_w))
        pg.click("#btn-wrong")
        pg.wait_for_timeout(60)

        # 全错
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(150)
        answer_all(pg, "wrong")
        pct = pg.inner_text("#s-pct")
        if pct != "0%":
            fails.append("%s: 全错结果 pct=%s (期望 0%%)" % (slug, pct))

        # 全错 -> 只看错题：应全部显示
        pg.click("#btn-wrong")
        pg.wait_for_timeout(120)
        vis = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis != 25:
            fails.append("%s: 全错时只看错题显示 %d 题 (期望 25)" % (slug, vis))
        pg.click("#btn-wrong")

        # 截图（干净状态）
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(250)
        pg.screenshot(path=os.path.join(SHOT, slug + "_top.png"))
        pg.evaluate("document.querySelector('#writing').scrollIntoView()")
        pg.wait_for_timeout(200)
        pg.screenshot(path=os.path.join(SHOT, slug + "_writing.png"))
        print("checked", slug, "fill=", nfill, "errors=", len(errors))

    # ---- 填空题容错专项（2009） ----
    pg.goto(url("a1-2009-0516"))
    pg.evaluate("localStorage.clear()")
    pg.reload()
    cases = [("18", "lunes", True), ("19", "el viernes", True), ("20", "miercoles", True),
             ("20", "MARTES", True), ("21", "jueves", True), ("22", "Barcelona", True),
             ("25", "futbol", True), ("24", "juanes", True), ("23", "sevilla", True),
             ("18", "martes", False)]
    for n, val, expect in cases:
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(80)
        pg.fill("#q%s input.fill" % n, val)
        pg.press("#q%s input.fill" % n, "Enter")
        pg.wait_for_timeout(60)
        got = pg.eval_on_selector("#q%s" % n, "e=>e.classList.contains('wrong')")
        ok = (not got) == expect
        if not ok:
            fails.append("填空容错 第%s题 '%s' 期望%s 实际%s" % (n, val, "对" if expect else "错", "错" if got else "对"))
    print("fill tolerance checked")

    # ---- 手机视口 ----
    m = ctx.new_page()
    m.set_viewport_size({"width": 375, "height": 812})
    for slug in PAGES:
        m.goto(url(slug))
        m.wait_for_timeout(250)
        over = m.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
        if over > 2:
            fails.append("%s: 手机视口横向溢出 %dpx" % (slug, over))
        m.click("#btn-sheet")
        m.wait_for_timeout(250)
        sheet_ok = m.eval_on_selector("#sheet", "e=>e.getBoundingClientRect().bottom <= window.innerHeight + 1 && e.getBoundingClientRect().top < window.innerHeight")
        if not sheet_ok:
            fails.append("%s: 答题卡浮层超出视口" % slug)
        m.screenshot(path=os.path.join(SHOT, slug + "_mobile.png"))
        m.click("#sh-close")
        print("mobile", slug, "overflow=", over)

    # ---- 首页 ----
    idx = ctx.new_page()
    idx.goto("file:///" + os.path.join(OUT, "index.html").replace("\\", "/"))
    idx.wait_for_timeout(250)
    cards = idx.eval_on_selector_all("a.card", "e=>e.length")
    if cards != 4:
        fails.append("首页卡片数 %d != 4" % cards)
    idx.screenshot(path=os.path.join(SHOT, "index.png"), full_page=True)

    if errors:
        fails.append("JS 错误: " + json.dumps(errors[:8], ensure_ascii=False))
    br.close()

print("\n==== RESULT ====")
if fails:
    for f in fails:
        print("FAIL:", f)
    sys.exit(1)
print("ALL PASS")
