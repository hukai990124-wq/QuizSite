/* Cloudflare Worker + Durable Object
 * 题库站「在线人数 + 地球光点」
 *
 * 路由
 *   GET /api/presence        WebSocket 升级 —— 建立在线会话
 *   GET /api/presence/snap   一次性 JSON 快照（无 WebSocket 时兜底）
 *   其余请求                  交给静态资源
 *
 * 计费说明：静态资源请求（HTML/题目/图片）不经过本脚本，仍然免费无限。
 * 只有 /api/presence* 才落到 Worker 上，才计入额度。
 */

import { handleAccountRequest } from "./account.mjs";
import { handleChatRequest } from "./chat.mjs";
import { handleGavinSpeech } from "./gavin-speech.mjs";
import { handleGavinConversation } from "./gavin-conversation.mjs";
import { handleStudyTimeRequest, clearExpiredStudyTime } from "./weekly-study.mjs";

// 心跳超时：超过这个时长没有任何消息就当作已离开
const TIMEOUT_MS = 90 * 1000;
// 巡检间隔：定期兜底广播一次（防止某次事件广播丢失）
const SWEEP_MS = 30 * 1000;

// IP 定位拿不到坐标时的国家中心兜底（不是精确位置，只是让点落在大致方位）
const CC = {
  US: [39.8, -98.6], CA: [56.1, -106.3], MX: [23.6, -102.6], BR: [-14.2, -51.9],
  AR: [-38.4, -63.6], CL: [-35.7, -71.5], CO: [4.6, -74.3], PE: [-9.2, -75.0],
  VE: [6.4, -66.6], EC: [-1.8, -78.2], BO: [-16.3, -63.6], PY: [-23.4, -58.4],
  UY: [-32.5, -55.8], CU: [21.5, -77.8], GT: [15.8, -90.2], DO: [18.7, -70.2],
  CR: [9.7, -83.8], PA: [8.5, -80.8],

  GB: [55.4, -3.4], IE: [53.4, -8.2], FR: [46.2, 2.2], DE: [51.2, 10.4],
  NL: [52.1, 5.3], BE: [50.5, 4.5], LU: [49.8, 6.1], CH: [46.8, 8.2],
  AT: [47.5, 14.6], IT: [41.9, 12.6], ES: [40.5, -3.7], PT: [39.4, -8.2],
  SE: [60.1, 18.6], NO: [60.5, 8.5], FI: [61.9, 25.7], DK: [56.3, 9.5],
  IS: [64.9, -19.0], PL: [51.9, 19.1], CZ: [49.8, 15.5], SK: [48.7, 19.7],
  HU: [47.2, 19.5], RO: [45.9, 25.0], BG: [42.7, 25.5], GR: [39.1, 21.8],
  HR: [45.1, 15.2], RS: [44.0, 21.0], UA: [48.4, 31.2], BY: [53.7, 28.0],
  LT: [55.2, 23.9], LV: [56.9, 24.6], EE: [58.6, 25.0], MD: [47.4, 28.4],
  AL: [41.2, 20.2], SI: [46.2, 15.0],

  RU: [61.5, 105.3], TR: [38.9, 35.2], KZ: [48.0, 66.9], UZ: [41.4, 64.6],
  AZ: [40.1, 47.6], GE: [42.3, 43.4], AM: [40.1, 45.0], IL: [31.0, 34.9],
  SA: [23.9, 45.1], AE: [23.4, 53.8], QA: [25.4, 51.2], KW: [29.3, 47.5],
  OM: [21.5, 55.9], JO: [30.6, 36.2], LB: [33.9, 35.9], SY: [34.8, 39.0],
  IQ: [33.2, 43.7], IR: [32.4, 53.7], AF: [33.9, 67.7], PK: [30.4, 69.3],
  YE: [15.6, 48.5], BH: [26.0, 50.5],

  CN: [35.9, 104.2], HK: [22.3, 114.2], MO: [22.2, 113.5], TW: [23.7, 121.0],
  JP: [36.2, 138.3], KR: [35.9, 127.8], KP: [40.3, 127.5], MN: [46.9, 103.8],
  IN: [20.6, 79.0], BD: [23.7, 90.4], LK: [7.9, 80.8], NP: [28.4, 84.1],
  BT: [27.5, 90.4], MM: [21.9, 96.0], TH: [15.9, 101.0], VN: [14.1, 108.3],
  LA: [19.9, 102.5], KH: [12.6, 105.0], MY: [4.2, 101.9], SG: [1.35, 103.8],
  ID: [-0.8, 113.9], PH: [12.9, 121.8], BN: [4.5, 114.7],

  AU: [-25.3, 133.8], NZ: [-40.9, 174.9], PG: [-6.3, 143.9], FJ: [-17.7, 178.1],

  EG: [26.8, 30.8], MA: [31.8, -7.1], DZ: [28.0, 1.7], TN: [33.9, 9.6],
  LY: [26.3, 17.2], SD: [12.9, 30.2], ET: [9.1, 40.5], KE: [-0.02, 37.9],
  TZ: [-6.4, 34.9], UG: [1.4, 32.3], NG: [9.1, 8.7], GH: [7.9, -1.0],
  CI: [7.5, -5.5], SN: [14.5, -14.5], CM: [7.4, 12.4], ZA: [-30.6, 22.9],
  ZW: [-19.0, 29.2], ZM: [-13.1, 27.8], MZ: [-18.7, 35.5], AO: [-11.2, 17.9],
  NA: [-22.6, 17.1], MG: [-18.8, 46.9], MU: [-20.3, 57.6], RW: [-1.9, 29.9],
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/gavin/speech") return handleGavinSpeech(request, env);
    if (url.pathname === "/api/gavin/conversation") return handleGavinConversation(request, env);
    if (url.pathname === "/api/study-time") return handleStudyTimeRequest(request, env);
    if (["/api/chat", "/api/chat/status", "/api/gavin", "/api/gavin/status"].includes(url.pathname)) {
      return handleChatRequest(request, env, ctx);
    }
    if (url.pathname === "/api/presence" || url.pathname === "/api/presence/snap") {
      const stub = env.PRESENCE.get(env.PRESENCE.idFromName("global"));
      return stub.fetch(request);
    }
    if (url.pathname.startsWith("/api/auth") || url.pathname.startsWith("/api/progress")) {
      return await handleAccountRequest(request, env) || new Response("Not found", { status: 404 });
    }
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  },
  async scheduled(_controller, env) {
    await clearExpiredStudyTime(env);
  },
};

export class Presence {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this._sig = "";
    this.state.blockConcurrencyWhile(async () => {
      const cur = await this.state.storage.getAlarm();
      if (cur === null) await this.state.storage.setAlarm(Date.now() + SWEEP_MS);
    });
  }

  async alarm() {
    this.broadcast(true);       // 兜底：定时强制发一次，纠正任何丢失的状态
    const cur = await this.state.storage.getAlarm();
    if (cur === null) await this.state.storage.setAlarm(Date.now() + SWEEP_MS);
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.endsWith("/snap")) {
      return new Response(JSON.stringify(this.snapshot()), {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
          "strict-transport-security": "max-age=31536000",
          "x-content-type-options": "nosniff",
          "x-frame-options": "DENY",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "camera=(), microphone=()",
        },
      });
    }

    if ((request.headers.get("Upgrade") || "").toLowerCase() !== "websocket") {
      return new Response("Expected WebSocket upgrade", {
        status: 426,
        headers: {
          "strict-transport-security": "max-age=31536000",
          "x-content-type-options": "nosniff",
          "x-frame-options": "DENY",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "camera=(), microphone=()",
        },
      });
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    this.state.acceptWebSocket(server);
    server.serializeAttachment(this.locate(request, url));
    this.broadcast();

    return new Response(null, { status: 101, webSocket: client });
  }

  // 把请求里的位置信息整理成一条会话记录
  locate(request, url) {
    const cf = request.cf || {};
    const q = (k) => url.searchParams.get(k) || "";

    let lat = parseFloat(q("la") || cf.latitude);
    let lon = parseFloat(q("lo") || cf.longitude);
    const country = (q("c") || cf.country || "").toUpperCase();
    const city = q("ct") || cf.city || "";

    // 拿不到坐标、或明显是 0,0 的占位值 → 退回国家中心
    if (!isFinite(lat) || !isFinite(lon) || (Math.abs(lat) < 0.01 && Math.abs(lon) < 0.01)) {
      const c = CC[country];
      lat = c ? c[0] : NaN;
      lon = c ? c[1] : NaN;
    }

    return {
      vid: q("vid").slice(0, 40),
      lat: lat,
      lon: lon,
      country: country,
      city: String(city).slice(0, 40),
      ip: "",                       // 有意不留存 IP
      t: Date.now(),
    };
  }

  // 心跳：刷新时间戳，并借机做一次「有变化才发」的同步。
  // 这一步是刻意补的 —— 只靠 close 事件广播不够可靠，万一那一次丢包，
  // 下一个心跳周期就能把人数纠正回来。
  webSocketMessage(ws) {
    let a = null;
    try { a = ws.deserializeAttachment(); } catch (e) { }
    if (!a) return;
    a.t = Date.now();
    try { ws.serializeAttachment(a); } catch (e) { }
    this.broadcast();
  }

  webSocketClose(ws) { this.broadcast(); }
  webSocketError(ws) { this.broadcast(); }

  // 当前真实的在线会话：去重 + 剔除超时
  live() {
    const now = Date.now();
    const byVid = new Map();
    let n = 0;
    for (const ws of this.state.getWebSockets()) {
      let a = null;
      try { a = ws.deserializeAttachment(); } catch (e) { }
      if (!a) continue;
      if (now - (a.t || 0) > TIMEOUT_MS) continue;
      n++;
      const k = a.vid || ("anon-" + n);
      if (!byVid.has(k)) byVid.set(k, a);
    }
    return { count: byVid.size, list: [...byVid.values()] };
  }

  snapshot() {
    const { count, list } = this.live();
    const users = [];
    for (const a of list) {
      if (!isFinite(a.lat) || !isFinite(a.lon)) continue;
      users.push({
        lat: +a.lat.toFixed(3),
        lon: +a.lon.toFixed(3),
        city: a.city || "",
        cc: a.country || "",
      });
    }
    return { type: "state", count: count, users: users, ts: Date.now() };
  }

  // 广播。默认「状态没变就不发」—— 省流量，也让心跳能安全地反复调用。
  broadcast(force) {
    const snap = this.snapshot();
    const sig = snap.count + "|" + snap.users.map(function (u) {
      return u.lat + "," + u.lon;
    }).join(";");
    if (!force && sig === this._sig) return 0;
    this._sig = sig;

    const payload = JSON.stringify(snap);
    let sent = 0;
    for (const ws of this.state.getWebSockets()) {
      try { ws.send(payload); sent++; } catch (e) { }
    }
    return sent;
  }
}
