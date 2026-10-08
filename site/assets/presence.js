/* 题库站 · 左下角「在线人数」小窗  —— 自包含组件
 *
 * 接入：页面里加一行即可（放 </body> 之前）
 *   <script src="/assets/presence.js"></script>
 *
 * 可选配置（写在上面那行之前）：
 *   window.PRESENCE_CFG = {
 *     endpoint: "/api/presence",   // 后端；跨域时写完整地址
 *     demo: false                  // true = 不连后端，用演示数据
 *   };
 *
 * 说明
 *   小窗默认只显示一个数字，点一下才展开列表 —— 不挡内容。
 *   连不上后端时，连续失败几次后自动隐藏，不留残疾 UI。
 *   文字是中文，交给站内既有的 i18n 运行时翻译（词条已加入词典）。
 */
(function (global) {
  "use strict";

  var CFG = global.PRESENCE_CFG || {};
  var ENDPOINT = CFG.endpoint || "/api/presence";
  var DEMO = !!CFG.demo;
  var HEARTBEAT = 15000;       // 心跳间隔；服务端借此机会同步人数
  var HIDE_AFTER = 4;          // 连续失败多少次后自动收起
  var MAX_CITIES = 8;

  /* ------------------------------------------------------------------ 样式 */
  var CSS = [
    ".pc-win{position:fixed;left:16px;bottom:16px;z-index:900;background:#fff;",
    "border:1px solid #e3e9ee;border-radius:13px;overflow:hidden;",
    "box-shadow:0 6px 20px rgba(16,24,40,.10);color:#0f172a;",
    "font:13px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;",
    "-webkit-tap-highlight-color:transparent;transition:box-shadow .15s}",
    ".pc-win:hover{box-shadow:0 9px 26px rgba(16,24,40,.15)}",
    ".pc-hd{display:flex;align-items:center;gap:7px;padding:9px 13px;border:0;background:transparent;",
    "font:inherit;color:inherit;cursor:pointer;width:100%;text-align:left}",
    ".pc-dot{width:8px;height:8px;border-radius:99px;background:#cbd5e1;flex:0 0 auto;transition:background .2s}",
    ".pc-dot.on{background:#0b6b3a;animation:pc-pulse 1.9s ease-out infinite}",
    "@keyframes pc-pulse{0%{box-shadow:0 0 0 0 rgba(11,107,58,.5)}70%{box-shadow:0 0 0 8px rgba(11,107,58,0)}100%{box-shadow:0 0 0 0 rgba(11,107,58,0)}}",
    ".pc-num{font-size:16px;font-weight:600;color:#0b6b3a;font-variant-numeric:tabular-nums;",
    "min-width:15px;text-align:right;display:inline-block}",
    ".pc-lbl{color:#5b6570;white-space:nowrap;margin-left:3px}",
    ".pc-panel{max-height:0;overflow:hidden;transition:max-height .22s ease}",
    ".pc-win[data-open='1'] .pc-panel{max-height:240px}",
    ".pc-in{border-top:1px solid #eef2f5;padding:9px 13px 11px}",
    ".pc-cities{display:flex;flex-wrap:wrap;gap:5px}",
    ".pc-city{font-size:11.5px;color:#42566b;background:#f1f5f9;border-radius:7px;padding:3px 8px;",
    "font-variant-numeric:tabular-nums}",
    ".pc-tip{font-size:11.5px;color:#8b95a1;margin-top:7px}",
    ".pc-tip b{color:#0b6b3a;font-variant-numeric:tabular-nums;margin-right:3px}",
    "@media (max-width:640px){.pc-win{left:10px;bottom:10px}.pc-hd{padding:7px 11px}.pc-num{font-size:15px}}",
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

  /* ------------------------------------------------------------ 小窗 DOM */
  function buildUI() {
    var win = document.createElement("div");
    win.className = "pc-win";
    win.id = "pc-win";
    win.innerHTML =
      '<button class="pc-hd" type="button" aria-expanded="false" aria-label="在线人数">' +
      '<i class="pc-dot"></i>' +
      '<b class="pc-num">–</b>' +
      '<span class="pc-lbl">人在线</span>' +
      '</button>' +
      '<div class="pc-panel"><div class="pc-in">' +
      '<div class="pc-cities"></div>' +
      '<div class="pc-tip">正在连接…</div>' +
      '</div></div>';

    document.body.appendChild(win);

    var hd = win.querySelector(".pc-hd");
    var dot = win.querySelector(".pc-dot");
    var num = win.querySelector(".pc-num");
    var cities = win.querySelector(".pc-cities");
    var tip = win.querySelector(".pc-tip");
    var last = -1;

    hd.addEventListener("click", function () {
      var open = win.getAttribute("data-open") === "1";
      win.setAttribute("data-open", open ? "0" : "1");
      hd.setAttribute("aria-expanded", open ? "false" : "true");
    });

    function apply(s) {
      if (typeof s.count === "number") {
        num.textContent = s.count;
        if (s.count !== last) {
          last = s.count;
          num.style.transition = "none";
          num.style.transform = "scale(1.22)";
          global.requestAnimationFrame(function () {
            num.style.transition = "transform .3s ease-out";
            num.style.transform = "scale(1)";
          });
        }
      }
      var list = s.users || [], out = [], seen = {};
      for (var i = 0; i < list.length; i++) {
        var c = list[i].city || list[i].cc || "";
        if (!c || seen[c]) continue;
        seen[c] = 1; out.push(c);
      }
      cities.innerHTML = out.slice(0, MAX_CITIES).map(function (c) {
        return '<span class="pc-city">' + esc(c) + "</span>";
      }).join("");
      // 文案拆成独立文本节点，才能被站内 i18n 逐块翻译
      if (out.length) {
        tip.innerHTML = "<b>" + list.length + "</b><span>个位置·点击收起</span>";
      } else if (s.count > 0) {
        tip.innerHTML = "<span>有人在浏览，位置未公开</span>";
      } else {
        tip.innerHTML = "<span>还没有其他人</span>";
      }
    }

    function setStatus(text, on) {
      dot.className = "pc-dot" + (on ? " on" : "");
      tip.textContent = text;
    }

    function show(v) { win.style.display = v ? "" : "none"; }

    return { apply: apply, setStatus: setStatus, show: show, el: win };
  }

  /* ------------------------------------------------------------ 演示数据 */
  var POOL = [
    { city: "Tokyo", cc: "JP" }, { city: "Hong Kong", cc: "HK" },
    { city: "Singapore", cc: "SG" }, { city: "London", cc: "GB" },
    { city: "New York", cc: "US" }, { city: "Paris", cc: "FR" },
    { city: "Sydney", cc: "AU" }, { city: "Seoul", cc: "KR" },
    { city: "Taipei", cc: "TW" }, { city: "São Paulo", cc: "BR" },
    { city: "Dubai", cc: "AE" }, { city: "Toronto", cc: "CA" }
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

  /* -------------------------------------------------------------- 网络层 */
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
        // 后端不可用：收起小窗并彻底停手，不再反复打扰（刷新页面会重新尝试）
        ui.show(false);
        return;
      }
      var wait = Math.min(30000, 900 * Math.pow(1.7, Math.min(retry, 6)));
      setTimeout(connect, wait);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible" && ws && ws.readyState > 1) connect();
    });
    global.addEventListener("pagehide", function () {
      closed = true;
      if (hb) clearInterval(hb);
      if (ws) { try { ws.close(); } catch (e) { } }
    });

    connect();
  }

  /* ------------------------------------------------------------------ 启动 */
  function boot() {
    if (!document.body) return;
    var ui = buildUI();
    ui.show(false);                 // 先藏起来，连上再出现，避免闪一下
    if (DEMO) { startDemo(ui); return; }
    startNetwork(ui);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
