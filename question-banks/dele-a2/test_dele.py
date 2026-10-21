# -*- coding: utf-8 -*-
"""DELE A2 练习册端到端验证（Playwright）

期望值全部从 data.py / data_audio.py 现场推导，不做硬编码 —— 以后再加套卷，
只要数据写对，这个脚本不用改。

覆盖：
  · 阅读（Prueba 1）/ 听力（Prueba 2）题量与出题结构一致
  · 音频 / 图片真实可加载
  · 全对 = 100%、全错 = 0%、只看错题、答题卡、成绩单、分部统计
  · 听力原文折叠、倍速、跳到听力
  · 手机视口无横向溢出、答题卡不超出视口
  · 首页卡片数
"""
import os
import sys
import json
import glob
import re
import threading
import functools
import http.server
import socketserver

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
SHOT = os.path.join(HERE, "shots")
os.makedirs(SHOT, exist_ok=True)
sys.path.insert(0, HERE)

import data as DATA          # noqa: E402
import data_audio as DA      # noqa: E402

PORT = 8766
BASE = "http://127.0.0.1:%d" % PORT
fails = []


def expect_of(s):
    """→ (阅读题数, 听力题数, audio 标签数, 原文折叠数)"""
    read_n = sum(len(t["items"]) for t in s["tareas"])
    L = DA.LISTENING.get(s["slug"]) or {"tareas": []}
    listen_n = sum(len(t["items"]) for t in L["tareas"])
    # <audio> = 每个 tarea 的整段音频 + 示例音频 + 逐题音频
    naud = 0
    ntrans = 0
    for t in L["tareas"]:
        if t.get("audio"):
            naud += 1
        if t.get("audio_intro"):
            naud += 1
        naud += len(t.get("item_audio") or [])
    ntrans = len(L["tareas"])
    return read_n, listen_n, naud, ntrans


PAGES = {s["slug"]: expect_of(s) for s in DATA.SETS}
print("试卷期望：")
for k, v in PAGES.items():
    print("  %-22s 阅%2d 听%2d audio%2d 原文%d" % (k, v[0], v[1], v[2], v[3]))


def url(slug):
    return "%s/%s.html" % (BASE, slug)


def answer_all(page, mode, only=None, upto=None):
    """mode='right' 全对；'wrong' 全错。only=题号集合。"""
    qs = page.eval_on_selector_all(
        ".q", "els => els.map(e => ({n:e.getAttribute('data-n'),k:e.getAttribute('data-kind'),a:e.getAttribute('data-ans')}))")
    for q in qs:
        n = q["n"]
        if only and int(n) not in only:
            continue
        if upto and int(n) > upto:
            continue
        ans = (q["a"] or "").split("|")[0].strip()
        if q["k"] == "fill":
            val = ans if mode == "right" else "ZZZZ"
            page.fill("#q%s input.fill" % n, val)
            page.press("#q%s input.fill" % n, "Enter")
        else:
            letters = page.eval_on_selector_all(
                "#q%s li.opt" % n, "els => els.map(e=>e.getAttribute('data-letter'))")
            letters = [l for l in letters if l]
            want = ans.upper() if mode == "right" else next(
                (l for l in letters if l.upper() != ans.upper()), letters[0])
            page.click("#q%s li.opt[data-letter='%s']" % (n, want))
            page.click("#q%s .js-submit" % n)
    page.wait_for_timeout(150)


def static_checks():
    for p in sorted(glob.glob(os.path.join(OUT, "*.html"))):
        html = open(p, encoding="utf-8").read()
        # 页面里的 audio/img 引用（含 img 池里的 lazy 图）
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

    for slug, (nread, nlisten, naud_want, ntrans_want) in PAGES.items():
        want = nread + nlisten
        pg.goto(url(slug))
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(240)

        n = pg.eval_on_selector_all(".q", "e=>e.length")
        nr = pg.eval_on_selector_all(".q[data-part='read']", "e=>e.length")
        nl = pg.eval_on_selector_all(".q[data-part='listen']", "e=>e.length")
        if (n, nr, nl) != (want, nread, nlisten):
            fails.append("%s: 题量 (总%d/阅%d/听%d) != (%d/%d/%d)" % (slug, n, nr, nl, want, nread, nlisten))

        naud = pg.eval_on_selector_all("audio", "e=>e.length")
        if naud != naud_want:
            fails.append("%s: <audio> %d != %d" % (slug, naud, naud_want))

        # 音频 / 图片真的能加载（整页所有 img，含 T3 头像与 T1 图卡）
        loads = pg.evaluate("""async () => {
          const as=[...document.querySelectorAll('audio')];let ok=0,bad=[];
          for(const a of as){try{const r=await fetch(a.getAttribute('src'));r.ok?ok++:bad.push(a.getAttribute('src'))}
            catch(e){bad.push(a.getAttribute('src'))}}
          return {ok,bad};
        }""")
        if loads["bad"]:
            fails.append("%s: 音频加载失败 %s" % (slug, loads["bad"][:3]))
        nimg = pg.evaluate("""async () => {
          const is=[...document.querySelectorAll('img')];let ok=0,bad=[];
          for(const i of is){try{const r=await fetch(i.getAttribute('src'));r.ok?ok++:bad.push(i.getAttribute('src'))}
            catch(e){bad.push(i.getAttribute('src'))}}
          return {n:is.length,ok,bad};
        }""")
        if nimg["bad"]:
            fails.append("%s: 图片加载失败 %s" % (slug, nimg["bad"][:3]))

        # 听力原文折叠
        ntrans = pg.eval_on_selector_all("details.trans", "e=>e.length")
        if ntrans != ntrans_want:
            fails.append("%s: 听力原文折叠 %d != %d" % (slug, ntrans, ntrans_want))
        if ntrans:
            pg.evaluate("document.querySelector('details.trans').open=true")
            txt = pg.eval_on_selector("details.trans .tbody", "e=>e.innerText")
            if len(txt.strip()) < 40:
                fails.append("%s: 听力原文内容过短" % slug)

        # 展开/收起全部解析
        pg.click("#btn-expand")
        pg.wait_for_timeout(170)
        tot_ans = pg.eval_on_selector_all("details.ans", "e=>e.length")
        opend = pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length")
        if tot_ans != want or opend != want:
            fails.append("%s: 展开解析 open=%d total=%d (期望 %d)" % (slug, opend, tot_ans, want))
        pg.click("#btn-expand")
        pg.wait_for_timeout(150)
        if pg.eval_on_selector_all("details.ans", "e=>e.filter(x=>x.open).length") != 0:
            fails.append("%s: 收起解析未归零" % slug)

        # 全对
        answer_all(pg, "right")
        pct, done = pg.inner_text("#s-pct"), pg.inner_text("#s-done")
        if pct != "100%" or done != str(want):
            fails.append("%s: 全对 pct=%s done=%s (期望 100%%/%d)" % (slug, pct, done, want))

        # 分部统计
        ps_r = pg.inner_text("#ps-r")
        if not ps_r.startswith("%d/%d" % (nread, nread)):
            fails.append("%s: 阅读分部 %s (期望 %d/%d)" % (slug, ps_r, nread, nread))
        if nlisten and not pg.inner_text("#ps-l").startswith("%d/%d" % (nlisten, nlisten)):
            fails.append("%s: 听力分部 %s (期望 %d/%d)" % (slug, pg.inner_text("#ps-l"), nlisten, nlisten))

        # 答题卡 / 成绩单
        pg.click("#btn-sheet")
        pg.wait_for_timeout(220)
        nlinks = pg.eval_on_selector_all("#sheet .grid a", "e=>e.length")
        if nlinks != want:
            fails.append("%s: 答题卡 %d != %d" % (slug, nlinks, want))
        pg.click("#sh-close")
        pg.click("#btn-report")
        pg.wait_for_timeout(180)
        if pg.inner_text("#rp-pct") != "100%":
            fails.append("%s: 成绩单 %s" % (slug, pg.inner_text("#rp-pct")))
        pg.click("#rp-close")

        # 只看错题（全对 → 0 题）
        pg.click("#btn-wrong")
        pg.wait_for_timeout(170)
        vis = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis != 0:
            fails.append("%s: 全对时只看错题 %d (期望 0)" % (slug, vis))
        pg.click("#btn-wrong")
        pg.wait_for_timeout(110)

        # 倍速 + 跳到听力
        if nlisten:
            if naud:
                pg.click(".spdbar button.spd[data-rate='0.75']")
                pg.wait_for_timeout(130)
                rates = set(pg.eval_on_selector_all("audio", "e=>e.map(a=>a.playbackRate)"))
                if any(abs(r - 0.75) > .001 for r in rates):
                    fails.append("%s: 倍速未生效 %s" % (slug, rates))
                pg.click(".spdbar button.spd[data-rate='1']")
            pg.evaluate("window.scrollTo(0,0)")
            pg.wait_for_timeout(170)
            pg.click("#btn-jump-l")
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

        # 只答听力前 3 题 → 阅读未开始 / 听力 3/N
        if nlisten:
            pg.evaluate("localStorage.clear()")
            pg.reload()
            pg.wait_for_timeout(180)
            answer_all(pg, "right", only={nread + 1, nread + 2, nread + 3})
            if "未开始" not in pg.inner_text("#ps-r"):
                fails.append("%s: 只答听力时阅读分部 %s" % (slug, pg.inner_text("#ps-r")))
            if not pg.inner_text("#ps-l").startswith("3/%d" % nlisten):
                fails.append("%s: 听力分部 %s (期望 3/%d)" % (slug, pg.inner_text("#ps-l"), nlisten))

        # 全错
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(180)
        answer_all(pg, "wrong")
        if pg.inner_text("#s-pct") != "0%":
            fails.append("%s: 全错 pct=%s (期望 0%%)" % (slug, pg.inner_text("#s-pct")))
        pg.click("#btn-wrong")
        pg.wait_for_timeout(170)
        vis = pg.eval_on_selector_all(".q", "els=>els.filter(e=>e.offsetParent!==null).length")
        if vis != want:
            fails.append("%s: 全错时只看错题 %d (期望 %d)" % (slug, vis, want))
        pg.click("#btn-wrong")

        # 截图
        pg.evaluate("localStorage.clear()")
        pg.reload()
        pg.wait_for_timeout(360)
        pg.screenshot(path=os.path.join(SHOT, slug + "_top.png"))
        if nlisten:
            pg.evaluate("document.getElementById('listening').scrollIntoView()")
            pg.wait_for_timeout(300)
            pg.screenshot(path=os.path.join(SHOT, slug + "_listening.png"))
        pg.evaluate("document.getElementById('writing').scrollIntoView()")
        pg.wait_for_timeout(260)
        pg.screenshot(path=os.path.join(SHOT, slug + "_writing.png"))
        print("checked", slug, "阅", nr, "听", nl, "audio", naud, "err", len(errors))

    # ---- 手机视口 ----
    m = ctx.new_page()
    m.set_viewport_size({"width": 375, "height": 812})
    for slug in PAGES:
        m.goto(url(slug))
        m.wait_for_timeout(360)
        over = m.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
        if over > 2:
            fails.append("%s: 手机视口横向溢出 %dpx" % (slug, over))
        m.click("#btn-sheet")
        m.wait_for_timeout(300)
        ok = m.eval_on_selector("#sheet", "e=>e.getBoundingClientRect().bottom <= window.innerHeight + 1 && e.getBoundingClientRect().top < window.innerHeight")
        if not ok:
            fails.append("%s: 答题卡浮层超出视口" % slug)
        m.screenshot(path=os.path.join(SHOT, slug + "_mobile.png"))
        m.click("#sh-close")
        print("mobile", slug, "overflow=", over)

    # ---- 首页 ----
    idx = ctx.new_page()
    idx.goto("%s/index.html" % BASE)
    idx.wait_for_timeout(360)
    cards = idx.eval_on_selector_all("a.card", "e=>e.length")
    if cards != len(PAGES):
        fails.append("首页卡片数 %d != %d" % (cards, len(PAGES)))
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
