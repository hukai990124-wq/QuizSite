# -*- coding: utf-8 -*-
import os
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
SH = os.path.join(HERE, "shots")
os.makedirs(SH, exist_ok=True)


def u(slug):
    return "file:///" + os.path.join(OUT, slug + ".html").replace(os.sep, "/")


VIEWS = [
    ("a1-2009-0516", "#q5", "2009_q5img"),
    ("a1-2009-0516", "#t4", "2009_fill"),
    ("a1-0720", "#t2", "0720_match"),
    ("a1-0720", "#t4", "0720_grid"),
    ("a1-modelo0-2020", "#t1", "2020_t1"),
    ("a1-modelo0-2020", "#q18", "2020_t4"),
]

with sync_playwright() as pw:
    b = pw.chromium.launch()
    c = b.new_context(viewport={"width": 1180, "height": 1000})
    p = c.new_page()
    for slug, sel, name in VIEWS:
        p.goto(u(slug))
        p.evaluate("localStorage.clear()")
        p.reload()
        p.wait_for_timeout(300)
        p.evaluate("document.querySelector('%s').scrollIntoView()" % sel)
        p.wait_for_timeout(250)
        p.screenshot(path=os.path.join(SH, name + ".png"))
        print(name, "ok")
    b.close()
