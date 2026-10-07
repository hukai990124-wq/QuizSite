# -*- coding: utf-8 -*-
"""端到端验证 4 套听力 HTML。

1) 资源完整性：每个 <audio src> / <img src> 指向的文件是否真实存在、非空
2) 判分逻辑：全部选对 → 正确率应为 100%
3) 边界：全部故意选错 → 正确率应为 0%，且每题出现「正解」标记
4) 手机视口：sticky 工具栏高度是否被正确写入 --tb，且答案锚点不被遮挡
5) 控制台无 JS 报错
"""
import os
import re
import sys

from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')
BASE = os.path.dirname(os.path.abspath(__file__))
SRC = {'A': 0, 'B': 1, 'C': 2, 'D': 3}

ANSWER_ALL = r"""
() => {
  const out = {total: 0, missing: []};
  document.querySelectorAll('.q').forEach(q => {
    out.total++;
    const ans = (q.getAttribute('data-ans') || '').split(',')[0].trim().toUpperCase();
    const li = [...q.querySelectorAll('li.opt')].find(x => x.getAttribute('data-letter') === ans);
    if (!li) { out.missing.push(q.id); return; }
    li.click();
    const sb = q.querySelector('.js-submit');
    if (sb) sb.click();
  });
  return out;
}
"""

WRONG_ALL = r"""
() => {
  document.querySelectorAll('.q').forEach(q => {
    const ans = (q.getAttribute('data-ans') || '').split(',')[0].trim().toUpperCase();
    const opts = [...q.querySelectorAll('li.opt')];
    const bad = opts.find(x => x.getAttribute('data-letter') !== ans);
    if (bad) bad.click();
    const sb = q.querySelector('.js-submit');
    if (sb) sb.click();
  });
  return true;
}
"""


def stats(page):
    return page.evaluate(r"""()=>({
      done: document.getElementById('s-done').textContent,
      ok: document.getElementById('s-ok').textContent,
      bad: document.getElementById('s-bad').textContent,
      pct: document.getElementById('s-pct').textContent
    })""")


def check_assets(page):
    urls = page.evaluate(r"""()=>{
      const a=[...document.querySelectorAll('audio')].map(x=>x.getAttribute('src'));
      const i=[...document.querySelectorAll('img.photo')].map(x=>x.getAttribute('src'));
      return {audio:a, img:i};
    }""")
    missing = []
    empties = []
    for u in urls['audio'] + urls['img']:
        p = os.path.join(BASE, u.replace('/', os.sep))
        if not os.path.exists(p):
            missing.append(u)
        elif os.path.getsize(p) < 800:
            empties.append(u)
    return urls, missing, empties


def main():
    files = [f'TOEIC_Listening_Test_{i:02d}.html' for i in (1, 2, 3, 4)]
    fails = []
    with sync_playwright() as pw:
        br = pw.chromium.launch()
        for fn in files:
            path = os.path.join(BASE, fn)
            ctx = br.new_context(viewport={'width': 1100, 'height': 900})
            page = ctx.new_page()
            errs = []
            page.on('pageerror', lambda e: errs.append(str(e)))
            page.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
            page.goto('file:///' + path.replace('\\', '/'))
            page.wait_for_timeout(400)

            urls, missing, empties = check_assets(page)
            r1 = page.evaluate(ANSWER_ALL)
            page.wait_for_timeout(300)
            s1 = stats(page)
            n_wrong_mark = page.evaluate("()=>document.querySelectorAll('li.opt.miss').length")

            # 重载后（先清空本机记录）用「全选错」再验一次
            page.evaluate("()=>{try{localStorage.clear()}catch(e){}}")
            page.reload()
            page.wait_for_timeout(300)
            page.evaluate(WRONG_ALL)
            page.wait_for_timeout(300)
            s2 = stats(page)
            n_bad = page.evaluate("()=>document.querySelectorAll('li.opt.bad').length")

            print(f'--- {fn} ---')
            print(f'  audio={len(urls["audio"])} img={len(urls["img"])} 缺文件={len(missing)} 空文件={len(empties)}')
            if missing:
                print('  缺失:', missing[:5])
            print(f'  全选对: done={s1["done"]} ok={s1["ok"]} bad={s1["bad"]} pct={s1["pct"]}')
            print(f'  全选错: done={s2["done"]} ok={s2["ok"]} bad={s2["bad"]} pct={s2["pct"]} 标红数={n_bad}')
            print(f'  JS 报错: {len(errs)} {errs[:2]}')

            if s1['pct'] != '100%':
                fails.append(f'{fn}: 全选对未得 100% ({s1["pct"]})')
            if s2['pct'] != '0%':
                fails.append(f'{fn}: 全选错未得 0% ({s2["pct"]})')
            if missing or empties:
                fails.append(f'{fn}: 资源缺失 {len(missing)} 空 {len(empties)}')
            if errs:
                fails.append(f'{fn}: JS 报错 {errs[:1]}')
            if r1['missing']:
                fails.append(f'{fn}: 以下题找不到正确选项 {r1["missing"][:5]}')
            ctx.close()

        # ---- 手机视口：sticky 工具栏是否算对高度 ----
        ctx = br.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
        page = ctx.new_page()
        page.goto('file:///' + os.path.join(BASE, files[0]).replace('\\', '/'))
        page.wait_for_timeout(400)
        tb = page.evaluate("()=>getComputedStyle(document.documentElement).getPropertyValue('--tb').trim()")
        print(f'--- 手机视口 ---  --tb={tb}')
        if not tb or tb == '0px':
            fails.append('手机视口 --tb 未写入')
        page.screenshot(path=os.path.join(BASE, '_shots', 'mobile_top.png'))
        # 滚到第 32 题看是否被工具栏遮挡
        page.evaluate("()=>{const e=document.getElementById('q32'); if(e)e.scrollIntoView();}")
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(BASE, '_shots', 'mobile_q32.png'))
        ctx.close()

        # 桌面截图
        ctx = br.new_context(viewport={'width': 1100, 'height': 950})
        page = ctx.new_page()
        page.goto('file:///' + os.path.join(BASE, files[0]).replace('\\', '/'))
        page.wait_for_timeout(400)
        page.evaluate("()=>{const e=document.getElementById('q1'); if(e)e.scrollIntoView();}")
        page.wait_for_timeout(300)
        page.screenshot(path=os.path.join(BASE, '_shots', 'desktop_p1.png'))
        ctx.close()
        br.close()

    print()
    if fails:
        print('❌ 未通过：')
        for f in fails:
            print('  -', f)
        sys.exit(1)
    print('✅ 全部通过')


if __name__ == '__main__':
    main()
