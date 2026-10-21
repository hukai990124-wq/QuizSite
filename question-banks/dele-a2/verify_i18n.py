# -*- coding: utf-8 -*-
"""三语验收：站点（../site/）在中 / EN / 日 三种模式下的界面文案与听力板块。

前提：../site/ 已经有静态服务（默认 127.0.0.1:8777），例如
      cd ../site && python -m http.server 8777
检查点：
  A 首页数字与 DELE A2 卡片（三语）
  B A2 2 套卷的标题 / 跳转按钮 / 播放器标签 / 听力原文开关（EN / 日 都要翻，切回中文要还原）
  C 页面功能不受翻译影响（题目数、audio 数、题面西班牙语不被翻译）
"""
import sys

from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8777"
PAGES = ["a2-modelo0-2020", "a2-modelo0-v2"]

ok, bad = [], []


def chk(cond, msg):
    (ok if cond else bad).append(msg)
    print(("  ✓ " if cond else "  ✗ ") + msg)


def set_lang(page, lang):
    page.evaluate("l => { try{localStorage.setItem('ui:lang',l)}catch(e){} }", lang)
    page.reload(wait_until="load")
    page.wait_for_timeout(250)


def es_stem_of(page):
    """第一题的西班牙语题面（用来验证「题面绝不被翻译」）。"""
    return page.evaluate(
        "()=>{const e=document.querySelector('.q .stem span[lang=es]')"
        "||document.querySelector('.q .stem');return e?e.textContent.trim():''}")


def main():
    errs = []
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        ctx = b.new_context(viewport={"width": 1280, "height": 900})
        pg = ctx.new_page()
        pg.on("pageerror", lambda e: errs.append(str(e)[:120]))

        # ---------------------------------------------------- A 首页
        print("\n=== A 首页（题库总览）===")
        pg.goto(BASE + "/index.html", wait_until="load")
        set_lang(pg, "zh")
        hero = pg.inner_text(".hero .sub")
        chk("4571" in hero, "首页 hero 总数 = 4571：%s" % hero[:46])
        chk(pg.inner_text("#ov-txt").strip() == "0 / 4571", "总进度分母 = 4571")
        card = pg.query_selector('[data-site="dele-a2"]')
        chk(card is not None, "首页有 DELE A2 卡片")
        ct = card.inner_text()
        chk("110 题" in ct, "DELE A2 卡片显示 110 题")
        chk("阅读 + 写作 + 听力" in ct, "DELE A2 卡片标题为「阅读 + 写作 + 听力」")
        chk("2 套 A2 试卷" in ct and "听力 55 题" in ct, "DELE A2 卡片描述提到 2 套 + 听力 55 题")

        set_lang(pg, "en")
        hero = pg.inner_text(".hero .sub")
        ct = pg.query_selector('[data-site="dele-a2"]').inner_text()
        chk("4,571" in hero, "EN hero 显示 4,571 questions")
        chk("110 questions" in ct, "EN 卡片 110 questions")
        chk("Reading + Writing + Listening" in ct, "EN 卡片标题已翻")
        chk("two A2 papers" in ct, "EN 卡片描述已翻")

        set_lang(pg, "ja")
        hero = pg.inner_text(".hero .sub")
        ct = pg.query_selector('[data-site="dele-a2"]').inner_text()
        chk("4,571" in hero, "日 hero 显示 4,571問")
        chk("110問" in ct, "日 卡片 110問")
        chk("読解＋作文＋リスニング" in ct, "日 卡片标题已翻")

        set_lang(pg, "zh")
        chk("4571" in pg.inner_text(".hero .sub"), "切回中文还原")

        # ---------------------------------------------------- A2 目录页
        print("\n=== A2 目录页 ===")
        pg.goto(BASE + "/dele-a2/index.html", wait_until="load")
        set_lang(pg, "zh")
        zh_links = [a.get_attribute("href") for a in pg.query_selector_all("a[href$='.html']")]
        chk(sum(1 for h in zh_links if h and h.startswith(("a2-modelo0-2020", "a2-modelo0-v2"))) == 2,
            "目录页列出 2 套卷：%s" % [h for h in zh_links if h and h.startswith("a2-")])
        set_lang(pg, "en")
        chk("Official sample paper" in pg.inner_text("body"), "EN 目录页卷名已翻")
        set_lang(pg, "ja")
        chk("公式サンプル" in pg.inner_text("body"), "日 目录页卷名已翻")

        # ---------------------------------------------------- B DELE A2 各卷
        for slug in PAGES:
            print("\n=== B %s ===" % slug)
            pg.goto(BASE + "/dele-a2/%s.html" % slug, wait_until="load")
            set_lang(pg, "zh")
            zh_title = pg.title()
            zh_jumps = [e.inner_text() for e in pg.query_selector_all("button.jump")]
            zh_alabs = [e.inner_text() for e in pg.query_selector_all(".alab")]
            n_q = len(pg.query_selector_all(".q"))
            n_au = len(pg.query_selector_all("audio"))
            es_stem = es_stem_of(pg)
            chk(bool(es_stem), "%s 能取到西班牙语题面" % slug)

            set_lang(pg, "en")
            en_title = pg.title()
            en_body = pg.inner_text("body")
            en_jumps = [e.inner_text() for e in pg.query_selector_all("button.jump")]
            en_alabs = [e.inner_text() for e in pg.query_selector_all(".alab")]
            chk(len(pg.query_selector_all(".q")) == n_q, "%s EN 模式下题目数不变 (%d)" % (slug, n_q))
            chk(len(pg.query_selector_all("audio")) == n_au, "%s EN 模式下 audio 数不变 (%d)" % (slug, n_au))
            chk(es_stem_of(pg) == es_stem, "%s 题面（西班牙语）未被翻译" % slug)
            chk("阅读 + 写作 + 听力" not in en_title and "Reading" in en_title,
                "%s EN 标题已翻：%s" % (slug, en_title[:56]))
            chk(all("→" in t and not any("\u4e00" <= c <= "\u9fff" for c in t) for t in en_jumps)
                if en_jumps else True,
                "%s EN 跳转按钮已翻：%s" % (slug, en_jumps))
            chk(all(not any("\u4e00" <= c <= "\u9fff" for c in t) for t in en_alabs) if en_alabs else True,
                "%s EN 播放器标签已翻：%s" % (slug, en_alabs[:2]))
            chk(("Playback speed" in en_body) if n_au else True,
                "%s EN「播放速度」已翻" % slug)
            chk(("Show the transcript" in en_body) if n_au else True,
                "%s EN 听力原文开关已翻" % slug)
            chk(("To listening →" in en_jumps) if en_jumps else True,
                "%s EN「跳到听力 →」已翻" % slug)

            set_lang(pg, "ja")
            ja_body = pg.inner_text("body")
            chk(pg.title() != en_title and any("\u3040" <= c <= "\u30ff" for c in pg.title()),
                "%s 日 标题已翻：%s" % (slug, pg.title()[:56]))
            chk(("リスニングへ →" in ja_body) if en_jumps else True, "%s 日「リスニングへ →」" % slug)
            chk(("再生速度" in ja_body) if n_au else True, "%s 日「再生速度」" % slug)

            set_lang(pg, "zh")
            chk(pg.title() == zh_title, "%s 切回中文标题还原" % slug)
            chk([e.inner_text() for e in pg.query_selector_all("button.jump")] == zh_jumps,
                "%s 切回中文按钮还原" % slug)
            chk([e.inner_text() for e in pg.query_selector_all(".alab")] == zh_alabs,
                "%s 切回中文播放器标签还原" % slug)
            chk(len(pg.query_selector_all(".q")) == n_q, "%s 切回中文题目数不变" % slug)

        # ---------------------------------------------------- 手机宽度
        print("\n=== 手机 375px 三语无横向溢出 ===")
        m = ctx.new_page()
        m.set_viewport_size({"width": 375, "height": 812})
        for lang in ("zh", "en", "ja"):
            for path in ("/index.html", "/dele-a2/index.html", "/dele-a2/a2-modelo0-v2.html"):
                m.goto(BASE + path, wait_until="load")
                m.evaluate("l => { try{localStorage.setItem('ui:lang',l)}catch(e){} }", lang)
                m.reload(wait_until="load")
                m.wait_for_timeout(200)
                ov = m.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
                chk(ov <= 1, "%s %s 溢出 %d px" % (lang, path, ov))

        b.close()

    print("\n==== RESULT ====")
    print("通过 %d / 失败 %d" % (len(ok), len(bad)))
    for msg in bad:
        print("  ✗ " + msg)
    if errs:
        print("控制台错误：")
        for e in set(errs):
            print("   ", e)
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main())
