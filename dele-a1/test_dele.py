# -*- coding: utf-8 -*-
"""DELE A1 练习册端到端验证（Playwright）

覆盖：
 阅读（Prueba 1）
 1) 每页阅读 .q = 25
 2) 全答对 -> 正确率 100%；全答错 -> 0%
 3) 填空判定：正确写法 / 容错写法（无重音、带冠词）
 听力（Prueba 2）
 4) 听力题数量 / <audio> 数量 / 音频与图片文件真实可加载
 5) 倍速按钮、跳到听力、听力原文折叠
 分部统计
 6) 阅读 / 听力 分部正确率各自计算
 双端
 7) 手机视口无横向溢出、答题卡浮层不超出视口
 8) 首页 5 张卡片
"""
import os
import sys
import json
import threading
import functools
import http.server
import socketserver
import re
import glob

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
SHOT = os.path.join(HERE, "shots")
os.makedirs(SHOT, exist_ok=True)

PORT = 8765
BASE = "http://127.0.0.1:%d" % PORT

# slug -> (阅读题数, 听力题数)
PAGES = {
    "a1-modelo0-2020": (25, 25),
    "a1-modelo0-2008": (25, 25),
    "a1-0720": (25, 0),
    "a1-2009-0516": (25, 25),
    "a1-2011": (25, 25),
}
# 每份试卷应有的 <audio> 数：2009 有示例与逐题 AI 合成音频（22 段）
AUDIO_N = {
    "a1-modelo0-2020": 5,
    "a1-modelo0-2008": 21,
    "a1-0720": 0,
    "a1-2009-0516": 22,
    "a1-2011": 21,
}
fails = []


def url(slug):
    return "%s/%s.html" % (BASE, slug)


def answer_all(page, mode, only=None):
    """mode='right' 全对；'wrong' 全错。only=题号列表时只答这些题。"""
    qs = page.eval_on_selector_all(
        ".q", "els => els.map(e => ({n:e.getAttribute('data-n'),k:e.getAttribute('data-kind'),a:e.getAttribute('data-ans')}))")
    for q in qs:
        n = q["n"]
        if only and int(n) not in only:
            continue
        ans = (q["a"] or "").split("|")[0].strip()
        if q["k"] == "fill":
            val = ans if mode == "right" else "ZZZZ"
            page.fill("#q%s input.fill" % n, val)
            page.press("#q%s input.fill" % n, "Enter")
        else:
            letters = page.eval_on_selector_all(
                "#q%s li.opt" % n, "els => els.map(e=>e.getAttribute('data-letter'))")
            want = ans.upper() if mode == "right" else next(
                (l for l in letters if l.upper() != ans.upper()), letters[0])
            page.click("#q%s li.opt[data-letter='%s']" % (n, want))
            page.click("#q%s .js-submit" % n)
    page.wait_for_timeout(150)


def static_checks():
    """HTML 里引用的 audio/img 必须在 out/ 真实存在（最容易漏的东西）。"""
    for p in sorted(glob.glob(os.path.join(OUT, "*.html"))):
        html = open(p, encoding="utf-8").read()
        refs = set(re.findall(r'(?:src|href)="((?:audio|img)/[^"]+)"', html))
        miss = [r for r in refs if not os.path.exists(os.path.join(OUT, r))]
        if miss:
            fails.append("%s: 引用了不存在的文件 %s" % (os.path.basename(p), miss[:5]))
        print("  static", os.path.basename(p), "引用资源", len(refs), "缺失", len(miss))


class _Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve():
    handler = functools.partial(_Handler, directory=OUT)
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


print("=== 静态资源检查 ===")
static_checks()
httpd = serve()

with sync_playwright() as pw:
    br = pw.chromium.launch()
    ctx = br.new_context(viewport={"width": 1180, "height": 900})
    pg = ctx.new_page()
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    pg.on("console", lambda m: errors.append("console:" + m.text) if m.type == "error" else None)

    print("mp3 支持:", pg.evaluate("document.createElement('audio').canPlayType('audio/mpeg')") or "(空)")

    for slug, (nread, nlisten) in PAGES.items():
        want = nread + nlisten
        pg.goto(url(slug))
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(220)

        n = pg.eval_on_selector_all(".q", "e=>e.length")
        nr = pg.eval_on_selector_all(".q[data-part='read']", "e=>e.length")
        nl = pg.eval_on_selector_all(".q[data-part='listen']", "e=>e.length")
        if (n, nr, nl) != (want, nread, nlisten):
            fails.append("%s: 题量 (总%d/阅%d/听%d) != (%d/%d/%d)" % (slug, n, nr, nl, want, nread, nlisten))

        naud = pg.eval_on_selector_all("audio", "e=>e.length")
        if naud != AUDIO_N[slug]:
            fails.append("%s: <audio> %d != %d" % (slug, naud, AUDIO_N[slug]))

        # 音频 / 题目配图真的能加载
        if nlisten:
            loads = pg.evaluate("""async () => {
              const as=[...document.querySelectorAll('audio')];let ok=0,bad=[];
              for(const a of as){try{const r=await fetch(a.getAttribute('src'));r.ok?ok++:bad.push(a.getAttribute('src'))}
                catch(e){bad.push(a.getAttribute('src'))}}
              return {ok,bad};
            }""")
            if loads["bad"]:
                fails.append("%s: 音频加载失败 %s" % (slug, loads["bad"][:3]))
            nimg = pg.evaluate("""async () => {
              const is=[...document.querySelectorAll('.q img')];let ok=0,bad=[];
              for(const i of is){try{const r=await fetch(i.getAttribute('src'));r.ok?ok++:bad.push(i.getAttribute('src'))}
                catch(e){bad.push(i.getAttribute('src'))}}
              return {n:is.length,ok,bad};
            }""")
            if nimg["bad"]:
                fails.append("%s: 题目配图加载失败 %s" % (slug, nimg["bad"][:3]))

        # 听力原文折叠
        ntrans = pg.eval_on_selector_all("details.trans", "e=>e.length")
        expect_trans = 4 if slug in ("a1-modelo0-2020", "a1-modelo0-2008", "a1-2009-0516", "a1-2011") else 0
        if ntrans != expect_trans:
            fails.append("%s: 听力原文折叠 %d != %d" % (slug, ntrans, expect_trans))
        if ntrans:
            pg.evaluate("document.querySelector('details.trans').open=true")
            txt = pg.eval_on_selector("details.trans .tbody", "e=>e.innerText")
            if len(txt.strip()) < 40:
                fails.append("%s: 听力原文内容过短" % slug)

        # 展开/收起全部解析
        pg.click("#btn-expand")
        pg.wait_for_timeout(150)
        tot_ans = pg.eval_on_selector_all("details.ans", "e=>e.length")
        opend = pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length")
        if tot_ans != want or opend != want:
            fails.append("%s: 展开解析 open=%d total=%d (期望 %d)" % (slug, opend, tot_ans, want))
        pg.click("#btn-expand")
        pg.wait_for_timeout(130)
        if pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length") != 0:
            fails.append("%s: 收起解析未归零" % slug)

        # 全对
        answer_all(pg, "right")
        pct, done = pg.inner_text("#s-pct"), pg.inner_text("#s-done")
        if pct != "100%" or done != str(want):
            fails.append("%s: 全对 pct=%s done=%s (期望 100%%/%d)" % (slug, pct, done, want))

        # 分部统计
        ps_r = pg.inner_text("#ps-r")
        if not ps_r.startswith("25/25"):
            fails.append("%s: 阅读分部 %s (期望 25/25)" % (slug, ps_r))
        if nlisten and not pg.inner_text("#ps-l").startswith("25/25"):
            fails.append("%s: 听力分部 %s (期望 25/25)" % (slug, pg.inner_text("#ps-l")))

        # 答题卡 / 成绩单
        pg.click("#btn-sheet")
        pg.wait_for_timeout(200)
        nlinks = pg.eval_on_selector_all("#sheet .grid a", "e=>e.length")
        if nlinks != want:
            fails.append("%s: 答题卡 %d != %d" % (slug, nlinks, want))
        pg.click("#sh-close")
        pg.click("#btn-report")
        pg.wait_for_timeout(160)
        if pg.inner_text("#rp-pct") != "100%":
            fails.append("%s: 成绩单 %s" % (slug, pg.inner_text("#rp-pct")))
        pg.click("#rp-close")

        # 只看错题（全对 → 0 题）
        pg.click("#btn-wrong")
        pg.wait_for_timeout(150)
        vis = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis != 0:
            fails.append("%s: 全对时只看错题 %d (期望 0)" % (slug, vis))
        pg.click("#btn-wrong")
        pg.wait_for_timeout(90)

        # 倍速 + 跳到听力
        if nlisten:
            if naud:
                pg.click(".spdbar button.spd[data-rate='0.75']")
                pg.wait_for_timeout(110)
                rates = set(pg.eval_on_selector_all("audio", "e=>e.map(a=>a.playbackRate)"))
                if any(abs(r - 0.75) > .001 for r in rates):
                    fails.append("%s: 倍速未生效 %s" % (slug, rates))
                pg.click(".spdbar button.spd[data-rate='1']")
            pg.evaluate("window.scrollTo(0,0)")
            pg.wait_for_timeout(150)
            pg.click("#btn-jump-l")
            # 平滑滚动距离很长，轮询等它停稳
            top, prev, stable = None, None, 0
            for _ in range(40):
                pg.wait_for_timeout(120)
                top = pg.evaluate("()=>Math.round(document.getElementById('listening').getBoundingClientRect().top)")
                if top == prev:
                    stable += 1
                    if stable >= 3:
                        break
                else:
                    stable = 0
                prev = top
            if not (-20 <= top <= 200):
                fails.append("%s: 跳到听力后 #listening top=%s" % (slug, top))

        # 只答听力前 3 题 → 阅读未开始 / 听力 3/25
        if nlisten:
            pg.evaluate("localStorage.clear()")
            pg.reload()
            pg.wait_for_timeout(150)
            answer_all(pg, "right", only=[26, 27, 28])
            if "未开始" not in pg.inner_text("#ps-r"):
                fails.append("%s: 只答听力时阅读分部 %s" % (slug, pg.inner_text("#ps-r")))
            if not pg.inner_text("#ps-l").startswith("3/25"):
                fails.append("%s: 听力分部 %s (期望 3/25)" % (slug, pg.inner_text("#ps-l")))

        # 全错
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(150)
        answer_all(pg, "wrong")
        if pg.inner_text("#s-pct") != "0%":
            fails.append("%s: 全错 pct=%s (期望 0%%)" % (slug, pg.inner_text("#s-pct")))
        pg.click("#btn-wrong")
        pg.wait_for_timeout(150)
        vis = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis != want:
            fails.append("%s: 全错时只看错题 %d (期望 %d)" % (slug, vis, want))
        pg.click("#btn-wrong")

        # 截图
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(320)
        pg.screenshot(path=os.path.join(SHOT, slug + "_top.png"))
        if nlisten:
            pg.evaluate("document.getElementById('listening').scrollIntoView()")
            pg.wait_for_timeout(260)
            pg.screenshot(path=os.path.join(SHOT, slug + "_listening.png"))
        pg.evaluate("document.querySelector('#writing').scrollIntoView()")
        pg.wait_for_timeout(220)
        pg.screenshot(path=os.path.join(SHOT, slug + "_writing.png"))
        print("checked", slug, "阅读", nr, "听力", nl, "audio", naud, "errors", len(errors))

    # ---- 阅读填空容错（2009 T4：18-25） ----
    pg.goto(url("a1-2009-0516"))
    cases = [("18", "lunes", True), ("19", "el viernes", True), ("20", "miercoles", True),
             ("20", "MARTES", True), ("21", "jueves", True), ("22", "Barcelona", True),
             ("25", "futbol", True), ("24", "juanes", True), ("23", "sevilla", True),
             ("18", "martes", False), ("20", "lunes", False)]
    for n, val, expect in cases:
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(80)
        pg.fill("#q%s input.fill" % n, val)
        pg.press("#q%s input.fill" % n, "Enter")
        pg.wait_for_timeout(70)
        got = pg.eval_on_selector("#q%s" % n, "e=>e.classList.contains('wrong')")
        if (not got) != expect:
            fails.append("阅读填空 第%s题 '%s' 期望%s 实际%s" % (n, val, "对" if expect else "错", "错" if got else "对"))
    print("阅读填空容错 checked")

    # ---- 听力填空容错（2011 听力 T4：44-50） ----
    pg.goto(url("a1-2011"))
    cases_l = [("45", "modernas", True), ("45", "MODERNAS", True), ("46", "6", True),
               ("47", "gratis", True), ("48", "caros", True), ("49", "musica", True),
               ("50", "frio", True), ("50", "calor", False)]
    for n, val, expect in cases_l:
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(80)
        pg.fill("#q%s input.fill" % n, val)
        pg.press("#q%s input.fill" % n, "Enter")
        pg.wait_for_timeout(70)
        got = pg.eval_on_selector("#q%s" % n, "e=>e.classList.contains('wrong')")
        if (not got) != expect:
            fails.append("听力填空 第%s题 '%s' 期望%s 实际%s" % (n, val, "对" if expect else "错", "错" if got else "对"))
    print("听力填空容错 checked")

    # ---- 手机视口 ----
    m = ctx.new_page()
    m.set_viewport_size({"width": 375, "height": 812})
    for slug in PAGES:
        m.goto(url(slug))
        m.wait_for_timeout(320)
        over = m.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
        if over > 2:
            fails.append("%s: 手机视口横向溢出 %dpx" % (slug, over))
        m.click("#btn-sheet")
        m.wait_for_timeout(260)
        ok = m.eval_on_selector("#sheet", "e=>e.getBoundingClientRect().bottom <= window.innerHeight + 1 && e.getBoundingClientRect().top < window.innerHeight")
        if not ok:
            fails.append("%s: 答题卡浮层超出视口" % slug)
        m.screenshot(path=os.path.join(SHOT, slug + "_mobile.png"))
        m.click("#sh-close")
        print("mobile", slug, "overflow=", over)

    # ---- 首页 ----
    idx = ctx.new_page()
    idx.goto("%s/index.html" % BASE)
    idx.wait_for_timeout(320)
    cards = idx.eval_on_selector_all("a.card", "e=>e.length")
    if cards != 5:
        fails.append("首页卡片数 %d != 5" % cards)
    idx.screenshot(path=os.path.join(SHOT, "index.png"), full_page=True)

    if errors:
        fails.append("JS 错误: " + json.dumps(errors[:8], ensure_ascii=False))
    br.close()

httpd.shutdown()

print("\n==== RESULT ====")
if fails:
    for f in fails:
        print("FAIL:", f)
    sys.exit(1)
print("ALL PASS")
