/* 题库站 · 左下角「在线人数 + 3D 地球」小窗 —— 自包含组件（无外部依赖）
 *
 * 接入：页面 </body> 之前加一行即可
 *   <script src="/assets/presence.js"></script>
 *
 * 可选配置（写在上面那行之前）：
 *   window.PRESENCE_CFG = {
 *     endpoint: "/api/presence",   // 后端地址；跨域时写完整 https://...
 *     demo: false                  // true = 不连后端，用演示数据
 *   };
 *
 * 表现
 *   - 左下角常驻一枚小地球：自转、有经纬网与陆地点阵；地球上的金点就是正在浏览的人。
 *   - 地球下方一行「● N 人在线」，点一下展开城市列表，再点收起。
 *   - 卡片右上角有一枚「－」按钮，点了整个小窗会缩成左下角一枚 44px 圆钮（只显示人数）；
 *     再点圆钮即展开。选择记在 localStorage（presence:fold），全站各页共用。
 *     —— 答题卡在窄屏（<1080px）是底部通栏抽屉，会和小地球重叠，用这个按钮给它让位。
 *   - 连不上后端：连续失败几次后整个小窗自动隐藏，并彻底停止重试（刷新页面才会再试）。
 *   - 省电：页面切到后台时暂停渲染；系统开启「减少动态效果」时不自转；收起时不渲染。
 *   - 文案是中文，交给站内既有的 i18n 运行时翻译（词条已收录在词典里）。
 */
(function (global) {
  "use strict";

  var CFG = global.PRESENCE_CFG || {};
  var ENDPOINT = CFG.endpoint || "/api/presence";
  var DEMO = !!CFG.demo;
  var HEARTBEAT = 15000;        // 心跳间隔；服务端借此机会同步人数
  var HIDE_AFTER = 4;           // 连续失败多少次后自动收起
  var MAX_CITIES = 8;
  var FOLD_KEY = "presence:fold";   // 收起状态存这里，全站共用
  var FPS = 30;                 // 渲染帧率上限（这么小的球，30 帧足够）
  var TILT = 16;                // 地轴倾斜（度）
  var SPIN = 0.11;              // 每个渲染帧自转的角度

  /* ---------------------------------------------------------------- 陆地掩码
     144×72 等距圆柱网格，每个 hex 字符 = 4 格，bit=1 表示该格是陆地。
     由 build_land.py 从 Natural Earth 110m 陆地轮廓烘焙而来，此处直接内联，
     好处是整站只多一个文件、只多一次请求。 */
  var MASK = { w: 144, h: 72, rows: ["000000000000000000000000000000000000","000000000000000000000000000000000000","000000000000007800000000000000000000","000000003fffffffc0000000000200000000","000000107fdfffff0007c000000140000000","000000e9bf0fffff000000008001f8000000","000003c0af007fff00000002007ffe008000","0040037ceff03ffe000000041ffffffffa00","03fffffefb781ff80001fe01ffffffffffff","f7fffffffe3e1fc04007ffffffffffffffff","03fffffff21c1f01800f7fffffffffffffff","03ffffffe0700e00003e7ffffffffffffef8","00e07fffe07e0000003e3fffffffffff8080","00801ffff87f0000021cfffffffffffe0380","00000ffffeff80000f1fffffffffffff0300","000007ffffffc00003ffffffffffffff8000","000003fffffce00001ffffffffffffff0000","000003fffffe000001fffff7fffffffe0000","000003fffff0000005fbe0e7fffffffcc000","000003fffff000000f86fef7fffffff08000","000001ffffc000000f009ff7ffffff208000","000001ffffc0000006f007ffffffff130000","0000007fff80000007f803ffffffff0c0000","0000007fff0000000ffeffffffffff800000","0000003fc10000000fffffefffffff800000","0000000f810000003ffffff3ffffff000000","00000007800000003ffffdfe1ffffe800000","0000000388c000007ffffeff0fe7f8000000","00000003d81000007ffffefe07c3c0000000","00000000780000007fffff780783e0800000","000000000e0000007fffffe00301f0800000","00000000063800003fffffd0030060400000","0000000001ff00001ffffff0018100400000","00000000007f80000ffffff0000082000000","00000000007ff000000fffe0000186000000","0000000000fff000000fffc000018e000000","0000000000fffc00000fff800000ce840000","0000000000ffff80000fff0000004087c000","0000000000ffffc00007ff0000002001e000","0000000000ffffc00007ff00000000009000","00000000007fff800007ff00000000000000","00000000007fff800007ff100000000c4000","00000000003fff000007ff300000007ec000","00000000000fff000007fe300000007fe000","00000000000fff000007fc60000003fff000","00000000000ffc000003fc60000007fff800","00000000000ff8000003f800000007fff800","00000000001ff0000003f800000003fff800","00000000001ff0000001f000000003fff800","00000000001fe0000001e00000000383f800","00000000001f80000000000000000000f000","00000000001f000000000000000000002002","00000000003e000000000000000000002004","00000000003c000000000000000000000008","000000000038000000000000000000000010","000000000038000000000000000000000000","000000000038000000000000000000000000","000000000018000000000000000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000","00000000000600000000000600004c060000","0000000000040000000004fff1fffffffc00","00000000001e000007fffffff7fffffffff0","00000101ffff00003ffffffffffffffffff0","0007fffffff00007ffffffffffffffffffc0","017fffffff800c3fffffffffffffffffffc0","001fffffffff1cffffffffffffffffffff80","001ffffffffffffffffffffffffffffffff0","ffffffffffffffffffffffffffffffffffff","ffffffffffffffffffffffffffffffffffff"] };

  /* 展开成扁平的 [lon, lat, lon, lat, ...]，只算一次 */
  var LAND = (function () {
    var out = [], W = MASK.w, H = MASK.h, y, i, b, v, x, row;
    for (y = 0; y < H; y++) {
      row = MASK.rows[y];
      for (i = 0; i < row.length; i++) {
        v = parseInt(row.charAt(i), 16);
        if (!v) continue;
        for (b = 0; b < 4; b++) {
          if (v & (8 >> b)) {
            x = i * 4 + b;
            out.push((x + 0.5) / W * 360 - 180, 90 - (y + 0.5) / H * 180);
          }
        }
      }
    }
    return out;
  })();

  /* ------------------------------------------------------------------ 样式 */
  var CSS = [
    ".pc-win,.pc-win *{box-sizing:border-box}",
    /* z-index 35：高于各页顶部工具条（5/9/20/30），但低于答题卡 .sheet(40) 与成绩单遮罩 .mask(60)。
       这样答题卡抽屉一拉开就把小地球盖住，不会挡住底部的题号格。 */
    ".pc-win{position:fixed;left:16px;bottom:16px;z-index:35;overflow:hidden;width:138px;",
    "background:rgba(255,255,255,.95);border:1px solid #e3e9ee;border-radius:14px;",
    "box-shadow:0 8px 24px rgba(16,24,40,.13);color:#0f172a;",
    "font:13px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;",
    "-webkit-tap-highlight-color:transparent;transition:box-shadow .15s}",
    ".pc-win:hover{box-shadow:0 10px 30px rgba(16,24,40,.19)}",
    ".pc-globe{width:100%;height:136px;position:relative;cursor:grab;touch-action:none}",
    ".pc-globe:active{cursor:grabbing}",
    ".pc-globe canvas{width:100%;height:100%;display:block}",
    ".pc-hd{display:flex;align-items:center;gap:7px;width:100%;text-align:left;cursor:pointer;",
    "border:0;border-top:1px solid #eef2f5;background:transparent;font:inherit;color:inherit;",
    "padding:8px 12px 9px}",
    ".pc-dot{width:8px;height:8px;border-radius:99px;background:#cbd5e1;flex:0 0 auto;transition:background .2s}",
    ".pc-dot.on{background:#0b6b3a;animation:pc-pulse 1.9s ease-out infinite}",
    "@keyframes pc-pulse{0%{box-shadow:0 0 0 0 rgba(11,107,58,.5)}70%{box-shadow:0 0 0 8px rgba(11,107,58,0)}100%{box-shadow:0 0 0 0 rgba(11,107,58,0)}}",
    ".pc-num{font-size:16px;font-weight:600;color:#0b6b3a;font-variant-numeric:tabular-nums;",
    "min-width:15px;text-align:right;display:inline-block}",
    ".pc-lbl{color:#5b6570;white-space:nowrap;margin-left:3px}",
    ".pc-caret{margin-left:auto;color:#a9b4c0;font-size:11px;line-height:1;transition:transform .22s}",
    ".pc-win[data-open='1'] .pc-caret{transform:rotate(180deg)}",
    ".pc-panel{max-height:0;overflow:hidden;transition:max-height .22s ease}",
    ".pc-win[data-open='1'] .pc-panel{max-height:230px;overflow-y:auto}",
    ".pc-in{border-top:1px solid #eef2f5;padding:9px 12px 11px}",
    ".pc-cities{display:flex;flex-direction:column;gap:4px}",
    ".pc-city{font-size:11.5px;line-height:1.35;color:#42566b;background:#f1f5f9;border-radius:7px;",
    "padding:3px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}",
    ".pc-tip{font-size:11.5px;color:#8b95a1;margin-top:7px}",
    ".pc-tip b{color:#0b6b3a;font-variant-numeric:tabular-nums;margin-right:3px}",
    /* 收起按钮：停在卡片右上角。触屏没有 hover，所以常驻显示，只用透明度压低存在感 */
    ".pc-fold{position:absolute;top:5px;right:5px;z-index:2;width:21px;height:21px;padding:0;",
    "border:0;border-radius:99px;background:rgba(15,23,42,.06);color:#8492a3;cursor:pointer;",
    "display:flex;align-items:center;justify-content:center;opacity:.72;",
    "transition:opacity .15s,background .15s,color .15s;-webkit-tap-highlight-color:transparent}",
    ".pc-win:hover .pc-fold,.pc-fold:focus-visible{opacity:1}",
    ".pc-fold:hover{background:rgba(15,23,42,.13);color:#42566b}",
    ".pc-fold svg{width:11px;height:11px;display:block}",
    /* 收起态：整个小窗缩成左下角一枚圆钮，只留「● N」。
       注意：选择器带 [data-fold]，优先级高于下面的 @media，窄屏也能正确缩小。 */
    ".pc-win[data-fold='1']{width:44px;height:44px;border-radius:99px;cursor:pointer}",
    ".pc-win[data-fold='1'] .pc-globe,",
    ".pc-win[data-fold='1'] .pc-panel,",
    ".pc-win[data-fold='1'] .pc-lbl,",
    ".pc-win[data-fold='1'] .pc-caret,",
    ".pc-win[data-fold='1'] .pc-fold{display:none}",
    ".pc-win[data-fold='1'] .pc-hd{height:44px;padding:0;border-top:0;border-radius:99px;",
    "justify-content:center;gap:5px}",
    ".pc-win[data-fold='1'] .pc-num{font-size:15px;min-width:0;text-align:center;margin:0}",
    ".pc-win[data-fold='1'] .pc-dot{width:6px;height:6px}",
    ".pc-win[data-fold='1']:hover{border-color:#cbd5e1}",
    "@media (max-width:640px){.pc-win{left:10px;bottom:10px;width:106px}.pc-globe{height:104px}.pc-num{font-size:15px}.pc-hd{padding:7px 10px 8px;gap:6px}}",
    "@media print{.pc-win{display:none!important}}",
    "@media (prefers-reduced-motion:reduce){.pc-dot.on{animation:none}}"
  ].join("");

  var st = document.createElement("style");
  st.id = "pc-style";
  st.textContent = CSS;
  (document.head || document.documentElement).appendChild(st);

  /* -------------------------------------------------------------- 访客标识 */
  function visitorId() {
    var k = "presence:vid", v = "";
    try { v = localStorage.getItem(k) || ""; } catch (e) { }
    if (!v) {
      v = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      try { localStorage.setItem(k, v); } catch (e) { }
    }
    return v;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------------------------------------------------- 地球（canvas） */
  function Globe(cv) {
    var ctx = cv.getContext("2d");
    var self = this;
    var W = 136, H = 136, R = 64, cx = 68, cy = 68;
    var rot = -118, phase = 0;                       // rot 初始对准东亚一带
    var tilt = TILT * Math.PI / 180, ct = Math.cos(tilt), sn = Math.sin(tilt);
    var media = global.matchMedia ? global.matchMedia("(prefers-reduced-motion: reduce)") : null;
    var reduced = !!(media && media.matches);

    this.users = [];
    this.hold = false;                               // 拖动期间暂停自转

    /* 投影结果直接写进闭包变量 px/py/pz —— 每帧要算几千次，避免建对象 */
    var px = 0, py = 0, pz = 0;
    function project(lon, lat) {
      var la = lat * 0.0174532925, lo = (lon + rot) * 0.0174532925;
      var cl = Math.cos(la);
      var x = cl * Math.sin(lo), y = Math.sin(la), z = cl * Math.cos(lo);
      px = cx + R * x;
      py = cy - R * (y * ct - z * sn);
      pz = y * sn + z * ct;
    }

    var NB = (LAND.length || 8) + 8;
    var B0 = new Float32Array(NB), B1 = new Float32Array(NB), B2 = new Float32Array(NB);

    function resize() {
      var dpr = Math.min(global.devicePixelRatio || 1, 2);
      var r = cv.getBoundingClientRect();
      W = Math.round(r.width) || 136;
      H = Math.round(r.height) || W;
      if (W < 40) { W = 136; H = 136; }              // 被隐藏时量不到尺寸，用默认值
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.max(24, Math.min(W, H) / 2 - Math.max(3, W * 0.04));
      cx = W / 2; cy = H / 2;
      draw();
    }

    // 球体外面一圈很淡的辉光，让地球看着像悬在卡片上
    function paintGlow() {
      var g = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.14);
      g.addColorStop(0, "rgba(96,165,250,.16)");
      g.addColorStop(1, "rgba(96,165,250,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.14, 0, 6.2832);
      ctx.fillStyle = g; ctx.fill();
    }

    function paintSphere() {
      var g = ctx.createRadialGradient(cx - R * .32, cy - R * .36, R * .06, cx, cy, R * 1.02);
      g.addColorStop(0, "#22496c");
      g.addColorStop(.55, "#11293f");
      g.addColorStop(1, "#07141d");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832);
      ctx.fillStyle = g; ctx.fill();
    }

    function paintGrid() {
      var i, j, first;
      ctx.strokeStyle = "rgba(120,190,255,.14)";
      ctx.lineWidth = 0.6;
      for (i = -180; i < 180; i += 30) {
        ctx.beginPath(); first = 1;
        for (j = -88; j <= 88; j += 4) {
          project(i, j);
          if (pz <= 0) { first = 1; continue; }
          if (first) { ctx.moveTo(px, py); first = 0; } else { ctx.lineTo(px, py); }
        }
        ctx.stroke();
      }
      for (j = -60; j <= 60; j += 30) {
        ctx.beginPath(); first = 1;
        for (i = -180; i <= 180; i += 4) {
          project(i, j);
          if (pz <= 0) { first = 1; continue; }
          if (first) { ctx.moveTo(px, py); first = 0; } else { ctx.lineTo(px, py); }
        }
        ctx.stroke();
      }
    }

    function paintLand() {
      var n = LAND.length, i, i0 = 0, i1 = 0, i2 = 0, x, y, z;
      var s = Math.max(1, R * 0.019);
      for (i = 0; i < n; i += 2) {
        project(LAND[i], LAND[i + 1]);
        z = pz;
        if (z <= 0.02) continue;                     // 背面不画
        x = px; y = py;
        if (z > 0.62) { B0[i0++] = x; B0[i0++] = y; }
        else if (z > 0.25) { B1[i1++] = x; B1[i1++] = y; }
        else { B2[i2++] = x; B2[i2++] = y; }
      }
      // 越靠边越暗，做出球面的纵深感
      dot(B2, i2, "#1e5a45", 0.62, s);
      dot(B1, i1, "#2f8060", 0.86, s);
      dot(B0, i0, "#4aab82", 1, s);
    }

    function dot(a, n, color, alpha, s) {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      for (var i = 0; i < n; i += 2) ctx.fillRect(a[i] - s / 2, a[i + 1] - s / 2, s, s);
      ctx.globalAlpha = 1;
    }

    function paintUsers() {
      var pulse = (Math.sin(phase) + 1) / 2;
      var n = self.users.length, i, u, k, halo, g;
      for (i = 0; i < n; i++) {
        u = self.users[i];
        project(u.lon, u.lat);
        if (pz <= 0.04) continue;                    // 转到背面的点不画
        k = 0.6 + pz * 0.4;
        halo = R * (0.085 + 0.028 * pulse) * k;
        g = ctx.createRadialGradient(px, py, 0, px, py, halo);
        g.addColorStop(0, "rgba(255,226,130,.95)");
        g.addColorStop(.35, "rgba(255,178,36,.42)");
        g.addColorStop(1, "rgba(255,178,36,0)");
        ctx.beginPath(); ctx.arc(px, py, halo, 0, 6.2832);
        ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, Math.max(1.3, R * 0.022), 0, 6.2832);
        ctx.fillStyle = "#fff4cd"; ctx.fill();
      }
    }

    function paintRim() {
      ctx.strokeStyle = "rgba(150,215,255,.45)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832); ctx.stroke();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      paintGlow();
      paintSphere();
      paintGrid();
      paintLand();
      paintUsers();
      paintRim();
    }
    this.draw = draw;

    var raf = null, last = 0, minDt = 1000 / FPS;
    function loop(t) {
      raf = global.requestAnimationFrame(loop);
      if (t - last < minDt) return;                  // 限帧：多余的帧直接跳过
      last = t;
      if (!self.hold && !reduced) rot += SPIN;
      phase += 0.09;
      draw();
    }
    this.start = function () {
      if (raf) return;
      last = 0;
      raf = global.requestAnimationFrame(loop);
    };
    this.stop = function () {
      if (!raf) return;
      global.cancelAnimationFrame(raf);
      raf = null;
    };
    this.resize = resize;

    // 拖动旋转
    var drag = false, lastX = 0;
    cv.addEventListener("pointerdown", function (e) {
      drag = true; lastX = e.clientX; self.hold = true;
      try { cv.setPointerCapture(e.pointerId); } catch (err) { }
      e.preventDefault();
    });
    cv.addEventListener("pointermove", function (e) {
      if (!drag) return;
      rot += (e.clientX - lastX) * 0.55;
      lastX = e.clientX;
    });
    function stopDrag() { drag = false; self.hold = false; }
    cv.addEventListener("pointerup", stopDrag);
    cv.addEventListener("pointercancel", stopDrag);

    // 系统主题切换「减少动态效果」时立刻生效
    if (media && media.addEventListener) {
      media.addEventListener("change", function (e) {
        reduced = !!e.matches;
        if (reduced) draw();
      });
    }

    resize();
    if (global.ResizeObserver) new global.ResizeObserver(resize).observe(cv);
    else global.addEventListener("resize", resize);
  }

  /* ------------------------------------------------------------ 演示数据 */
  var POOL = [
    { lat: 35.68, lon: 139.69, city: "Tokyo", cc: "JP" },
    { lat: 22.32, lon: 114.17, city: "Hong Kong", cc: "HK" },
    { lat: 1.35, lon: 103.82, city: "Singapore", cc: "SG" },
    { lat: 51.51, lon: -0.13, city: "London", cc: "GB" },
    { lat: 40.71, lon: -74.01, city: "New York", cc: "US" },
    { lat: 48.86, lon: 2.35, city: "Paris", cc: "FR" },
    { lat: -33.87, lon: 151.21, city: "Sydney", cc: "AU" },
    { lat: 37.57, lon: 126.98, city: "Seoul", cc: "KR" },
    { lat: 25.03, lon: 121.57, city: "Taipei", cc: "TW" },
    { lat: -23.55, lon: -46.63, city: "São Paulo", cc: "BR" },
    { lat: 25.20, lon: 55.27, city: "Dubai", cc: "AE" },
    { lat: 43.65, lon: -79.38, city: "Toronto", cc: "CA" }
  ];
  function startDemo(ui) {
    var n = 0;
    function tick() {
      n = 1 + Math.floor(Math.random() * 5);
      var p = POOL.slice(), pick = [];
      for (var i = 0; i < n && p.length; i++) {
        pick.push(p.splice(Math.floor(Math.random() * p.length), 1)[0]);
      }
      ui.apply({ count: n, users: pick });
    }
    tick();
    setInterval(tick, 4500);
    ui.setStatus("演示数据", true);
    ui.show(true);
  }

  /* ------------------------------------------------------------ 小窗 DOM */
  function buildUI() {
    var win = document.createElement("div");
    win.className = "pc-win";
    win.id = "pc-win";
    win.innerHTML =
      '<div class="pc-globe"><canvas aria-hidden="true"></canvas></div>' +
      '<button class="pc-hd" type="button" aria-expanded="false" aria-label="在线人数">' +
      '<i class="pc-dot"></i>' +
      '<b class="pc-num">–</b>' +
      '<span class="pc-lbl">人在线</span>' +
      '<span class="pc-caret">▾</span>' +
      '</button>' +
      '<div class="pc-panel"><div class="pc-in">' +
      '<div class="pc-cities"></div>' +
      '<div class="pc-tip">正在连接…</div>' +
      '</div></div>' +
      // 放在最后：绝对定位下 DOM 越靠后越在上层，这样不会被地球画布吞掉点击
      '<button class="pc-fold" type="button" title="收起在线人数" aria-label="收起在线人数">' +
      '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">' +
      '<path d="M2.4 6h7.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg></button>';

    document.body.appendChild(win);

    var hd = win.querySelector(".pc-hd");
    var dot = win.querySelector(".pc-dot");
    var num = win.querySelector(".pc-num");
    var cities = win.querySelector(".pc-cities");
    var tip = win.querySelector(".pc-tip");
    var foldBtn = win.querySelector(".pc-fold");
    var globe = new Globe(win.querySelector(".pc-globe canvas"));

    var lastNum = -1, lastTip = "", lastCities = "";

    /* ------------------------------------------------------------ 收起 / 展开
       选择记在 localStorage（键 presence:fold），全站各页共用，不会每翻一页又弹出来。
       收起时停掉 canvas 自转（省电），展开时再续上。 */
    var visible = false, folded = false;

    function syncGlobe() {
      if (visible && !folded) globe.start();
      else globe.stop();
    }

    function setFold(on, save) {
      folded = !!on;
      win.setAttribute("data-fold", folded ? "1" : "0");
      hd.setAttribute("aria-label", folded ? "展开在线人数" : "在线人数");
      hd.setAttribute("title", folded ? "展开在线人数" : "在线人数");
      if (folded) {                      // 收起时顺手把展开的城市列表也收掉
        win.setAttribute("data-open", "0");
        hd.setAttribute("aria-expanded", "false");
      }
      if (save) { try { localStorage.setItem(FOLD_KEY, folded ? "1" : "0"); } catch (e) { } }
      syncGlobe();
      if (visible && !folded) globe.resize();   // 收起期间量不到尺寸，展开后重量一次
    }

    foldBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setFold(true, true);
    });

    hd.addEventListener("click", function () {
      if (folded) { setFold(false, true); return; }   // 收起态：点圆钮＝展开
      var open = win.getAttribute("data-open") === "1";
      win.setAttribute("data-open", open ? "0" : "1");
      hd.setAttribute("aria-expanded", open ? "false" : "true");
    });

    function apply(s) {
      if (typeof s.count === "number" && s.count !== lastNum) {
        lastNum = s.count;
        num.textContent = s.count;                   // 只在数字真变了才动 DOM
        num.style.transition = "none";
        num.style.transform = "scale(1.22)";
        global.requestAnimationFrame(function () {
          num.style.transition = "transform .3s ease-out";
          num.style.transform = "scale(1)";
        });
      }

      var list = s.users || [], out = [], seen = {}, i, c;
      globe.users = list;
      for (i = 0; i < list.length; i++) {
        c = list[i].city || list[i].cc || "";
        if (!c || seen[c]) continue;
        seen[c] = 1; out.push(c);
      }

      var ch = out.slice(0, MAX_CITIES).map(function (x) {
        return '<span class="pc-city">' + esc(x) + "</span>";
      }).join("");
      if (ch !== lastCities) { lastCities = ch; cities.innerHTML = ch; }

      // 文案拆成独立文本节点，才能被站内 i18n 逐块翻译
      var th;
      if (out.length) th = "<b>" + list.length + "</b><span>个位置·点击收起</span>";
      else if (s.count > 0) th = "<span>有人在浏览，位置未公开</span>";
      else th = "<span>还没有其他人</span>";
      if (th !== lastTip) { lastTip = th; tip.innerHTML = th; }
    }

    function setStatus(text, on) {
      dot.className = "pc-dot" + (on ? " on" : "");
      if (tip.textContent !== text) tip.textContent = text;
    }

    function show(v) {
      visible = !!v;
      win.style.display = visible ? "" : "none";
      syncGlobe();
      if (visible && !folded) globe.resize();
    }

    return {
      apply: apply, setStatus: setStatus, show: show, globe: globe, el: win,
      setFold: setFold, sync: syncGlobe,
      isFolded: function () { return folded; }
    };
  }

  /* ---------------------------------------------------------------- 网络层 */
  function startNetwork(ui) {
    var ws = null, retry = 0, hb = null, closed = false;

    function url() {
      var base = ENDPOINT;
      if (/^https?:|^wss?:/.test(base)) base = base.replace(/^http/, "ws");
      else base = (location.protocol === "https:" ? "wss:" : "ws:") + "//" + location.host + base;
      return base + (base.indexOf("?") < 0 ? "?" : "&") + "vid=" + encodeURIComponent(visitorId());
    }

    function connect() {
      if (closed) return;
      try { ws = new WebSocket(url()); } catch (e) { return later(); }

      ws.onopen = function () {
        retry = 0;
        ui.show(true);
        ui.setStatus("已连接", true);
        ui.sync();                       // 收起态下不要偷偷把地球重新转起来
        hb = setInterval(function () {
          if (ws && ws.readyState === 1) { try { ws.send("ping"); } catch (e) { } }
        }, HEARTBEAT);
      };
      ws.onmessage = function (ev) {
        var s = null;
        try { s = JSON.parse(ev.data); } catch (e) { return; }
        if (s && s.type === "state") ui.apply(s);
      };
      ws.onclose = function () {
        if (hb) { clearInterval(hb); hb = null; }
        ui.setStatus("已断开", false);
        later();
      };
      ws.onerror = function () { };
    }

    function later() {
      if (closed) return;
      retry++;
      if (retry >= HIDE_AFTER) {
        // 后端不可用：收起小窗并彻底停手，不再反复打扰（刷新页面才会重新尝试）
        ui.show(false);
        ui.globe.stop();
        return;
      }
      var wait = Math.min(30000, 900 * Math.pow(1.7, Math.min(retry, 6)));
      setTimeout(connect, wait);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { ui.globe.stop(); return; }
      ui.sync();
      if (ws && ws.readyState > 1) connect();
    });
    global.addEventListener("pagehide", function () {
      closed = true;
      if (hb) clearInterval(hb);
      ui.globe.stop();
      if (ws) { try { ws.close(); } catch (e) { } }
    });

    connect();
  }

  /* ------------------------------------------------------------------ 启动 */
  function boot() {
    if (!document.body) return;
    var ui = buildUI();
    var saved = "0";
    try { saved = localStorage.getItem(FOLD_KEY) || "0"; } catch (e) { }
    ui.setFold(saved === "1", false);   // 先按上次的选择摆好，再决定显不显示，避免闪一下
    ui.show(false);                     // 先藏起来，连上再出现
    if (DEMO) { startDemo(ui); return; }
    startNetwork(ui);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
