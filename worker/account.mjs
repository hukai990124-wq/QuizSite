import { scryptSync } from "node:crypto";
import { registrationConfig, verifyRegistration } from "./registration-turnstile.mjs";

const MIN_CREDENTIAL_LENGTH = 6;
const MAX_CREDENTIAL_LENGTH = 15;
// Workers caps native PBKDF2 at 100,000 iterations. Use OWASP's memory-hard
// scrypt alternative rather than weakening PBKDF2 to fit that runtime limit:
// https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const PASSWORD_SCRYPT_N = 16384;
const PASSWORD_HASH_PREFIX = "scrypt-v1$";
const PASSWORD_SALT_BYTES = 16;
const PASSWORD_HASH_BYTES = 32;
const MAX_PROGRESS_ITEMS = 10_000;
const MAX_PROGRESS_ITEM_BYTES = 4 * 1024;
const MAX_AUTH_BODY_BYTES = 8 * 1024;
const MAX_PROGRESS_BODY_BYTES = 2 * 1024 * 1024;
const SESSION_COOKIE = "__Host-quizbank_session";
const SESSION_TTL_SECONDS = 30 * 24 * 60 * 60;

export function validateCredentials(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    throw new TypeError("账号和密码必须填写");
  }

  const usernameLength = Array.from(username).length;
  const passwordLength = Array.from(password).length;
  if (
    usernameLength < MIN_CREDENTIAL_LENGTH ||
    usernameLength > MAX_CREDENTIAL_LENGTH ||
    passwordLength < MIN_CREDENTIAL_LENGTH ||
    passwordLength > MAX_CREDENTIAL_LENGTH
  ) {
    throw new RangeError("账号和密码长度须为 6–15 个字符");
  }
}

export function chooseProgressRecord(localRecord, cloudRecord, preferLocal = false) {
  if (!localRecord) return cloudRecord;
  if (!cloudRecord) return localRecord;
  if (preferLocal) return localRecord;

  const localTime = Number.isSafeInteger(localRecord.updatedAt) ? localRecord.updatedAt : 0;
  const cloudTime = Number.isSafeInteger(cloudRecord.updatedAt) ? cloudRecord.updatedAt : 0;
  return localTime >= cloudTime ? localRecord : cloudRecord;
}

function encodeBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(value) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]+$/.test(value)) return null;
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  try {
    const binary = atob(base64 + "=".repeat((4 - (base64.length % 4)) % 4));
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch {
    return null;
  }
}

async function derivePassword(password, salt, iterations) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  return new Uint8Array(await crypto.subtle.deriveBits({
    name: "PBKDF2",
    hash: "SHA-256",
    salt,
    iterations,
  }, key, PASSWORD_HASH_BYTES * 8));
}

function deriveScryptPassword(password, salt) {
  return new Uint8Array(scryptSync(password, salt, PASSWORD_HASH_BYTES, {
    N: PASSWORD_SCRYPT_N,
    r: 8,
    p: 5,
    maxmem: 32 * 1024 * 1024,
  }));
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(PASSWORD_SALT_BYTES));
  const hash = deriveScryptPassword(password, salt);
  return {
    salt: encodeBase64Url(salt),
    hash: PASSWORD_HASH_PREFIX + encodeBase64Url(hash),
    iterations: PASSWORD_SCRYPT_N,
  };
}

export async function verifyPassword(password, stored) {
  const salt = decodeBase64Url(stored?.salt);
  const isScrypt = typeof stored?.hash === "string" && stored.hash.startsWith(PASSWORD_HASH_PREFIX);
  const expected = decodeBase64Url(isScrypt ? stored.hash.slice(PASSWORD_HASH_PREFIX.length) : stored?.hash);
  const iterations = stored?.iterations;
  if (
    !salt || salt.length !== PASSWORD_SALT_BYTES ||
    !expected || expected.length !== PASSWORD_HASH_BYTES ||
    (isScrypt
      ? iterations !== PASSWORD_SCRYPT_N
      : !Number.isInteger(iterations) || iterations < 100_000 || iterations > 1_000_000)
  ) return false;

  const actual = isScrypt
    ? deriveScryptPassword(password, salt)
    : await derivePassword(password, salt, iterations);
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= actual[index] ^ expected[index];
  }
  return difference === 0;
}

export function validateProgressItems(items, now = Date.now()) {
  if (!Array.isArray(items) || items.length > MAX_PROGRESS_ITEMS) {
    throw new RangeError("Progress item count exceeds the allowed limit");
  }

  const seen = new Set();
  return items.map((item) => {
    const { storageKey, itemKey, value, updatedAt, isDeleted } = item || {};
    if (
      typeof storageKey !== "string" ||
      !/^quiz:[A-Za-z0-9:_-]{1,250}$/.test(storageKey) ||
      typeof itemKey !== "string" ||
      !(itemKey === "@value" || /^[A-Za-z0-9:_-]{1,128}$/.test(itemKey)) ||
      !Number.isSafeInteger(updatedAt) || updatedAt < 0 ||
      typeof isDeleted !== "boolean"
    ) {
      throw new TypeError("Invalid progress record");
    }

    const identity = `${storageKey}\u0000${itemKey}`;
    if (seen.has(identity)) throw new TypeError("Duplicate progress record");
    seen.add(identity);

    let valueJson = null;
    if (!isDeleted) {
      valueJson = JSON.stringify(value);
      if (valueJson === undefined) throw new TypeError("Invalid progress value");
      if (new TextEncoder().encode(valueJson).byteLength > MAX_PROGRESS_ITEM_BYTES) {
        throw new RangeError("Progress value size exceeds the allowed limit");
      }
    }

    return {
      storageKey,
      itemKey,
      value: isDeleted ? null : JSON.parse(valueJson),
      updatedAt: Math.min(updatedAt, now + 5 * 60 * 1000),
      isDeleted,
    };
  });
}

export function validateMutationRequest(request) {
  const origin = request.headers.get("Origin");
  const contentType = request.headers.get("Content-Type") || "";
  return origin === new URL(request.url).origin && /^application\/json(?:\s*;|$)/i.test(contentType);
}

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Strict-Transport-Security": "max-age=31536000",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=()",
      ...headers,
    },
  });
}

async function readJsonBody(request, maxBytes) {
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > maxBytes) throw new RangeError("Request body too large");

  const chunks = [];
  let totalBytes = 0;
  if (request.body) {
    const reader = request.body.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        totalBytes += value.byteLength;
        if (totalBytes > maxBytes) {
          try { await reader.cancel(); }
          catch (cancelError) { /* Keep the size-limit response even if the stream already closed. */ }
          throw new RangeError("Request body too large");
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }
  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  chunks.forEach((chunk) => { bytes.set(chunk, offset); offset += chunk.byteLength; });
  const raw = new TextDecoder().decode(bytes);
  const value = JSON.parse(raw);
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError("JSON object required");
  }
  return value;
}

function encodeToken(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function digestHex(value) {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function readSessionToken(request) {
  const cookieHeader = request.headers.get("Cookie") || "";
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0 || part.slice(0, separator).trim() !== SESSION_COOKIE) continue;
    const token = part.slice(separator + 1).trim();
    return /^[A-Za-z0-9_-]{40,60}$/.test(token) ? token : "";
  }
  return "";
}

function sessionCookie(token, maxAge = SESSION_TTL_SECONDS) {
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; Secure; HttpOnly; SameSite=Strict`;
}

async function createSession(db, userId) {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const token = encodeToken(bytes);
  const tokenHash = await digestHex(token);
  const now = Date.now();
  const expiresAt = now + SESSION_TTL_SECONDS * 1000;
  await db.prepare(
    "INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
  ).bind(tokenHash, userId, now, expiresAt).run();
  return { cookie: sessionCookie(token), expiresAt };
}

export async function findSession(request, db) {
  const token = readSessionToken(request);
  if (!token) return null;
  const tokenHash = await digestHex(token);
  const row = await db.prepare(
    "SELECT sessions.token_hash, sessions.user_id, sessions.expires_at, users.username, users.progress_initialized FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ?",
  ).bind(tokenHash).first();
  if (!row) return null;
  if (row.expires_at <= Date.now()) {
    await db.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(tokenHash).run();
    return null;
  }
  return { ...row, tokenHash };
}

async function allowAuthAttempt(env, key) {
  if (!env.AUTH_LIMIT || typeof env.AUTH_LIMIT.limit !== "function") return null;
  try {
    // Cloudflare documents this binding as an eventually-consistent mitigation, not an exact counter:
    // https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/
    const result = await env.AUTH_LIMIT.limit({ key });
    return !!result?.success;
  } catch {
    return null;
  }
}

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

async function requestJson(request, maximumBytes) {
  try {
    return await readJsonBody(request, maximumBytes);
  } catch (error) {
    if (error instanceof RangeError && error.message === "Request body too large") {
      throw new ApiError(413, "Request body too large");
    }
    throw new ApiError(400, "Invalid JSON request");
  }
}

function apiUnavailable() {
  return jsonResponse({ error: "账号服务暂不可用，请稍后重试" }, 503);
}

function invalidCredentials() {
  return jsonResponse({ error: "账号或密码错误" }, 401);
}

async function checkAuthRate(env, request, action, username) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const nameHash = await digestHex(username);
  const keys = [`${action}:ip:${ip}`, `${action}:name:${nameHash}`];
  const results = await Promise.all(keys.map((key) => allowAuthAttempt(env, key)));
  if (results.some((result) => result === null)) return null;
  return results.every(Boolean);
}

async function handleRegister(request, env) {
  const body = await requestJson(request, MAX_AUTH_BODY_BYTES);
  try {
    validateCredentials(body.username, body.password);
  } catch (error) {
    return jsonResponse({ error: error.message }, 400);
  }

  const allowed = await checkAuthRate(env, request, "register", body.username);
  if (allowed === null) return apiUnavailable();
  if (!allowed) return jsonResponse({ error: "操作过于频繁，请稍后重试" }, 429);

  const verification = await verifyRegistration(request, env, body.turnstileToken);
  if (verification.status !== 200) return jsonResponse({ error: verification.error }, verification.status);
  const credentials = await hashPassword(body.password);
  const userId = crypto.randomUUID();
  const now = Date.now();
  const result = await env.DB.prepare(
    "INSERT OR IGNORE INTO users (id, username, password_salt, password_hash, password_iterations, progress_initialized, created_at) VALUES (?, ?, ?, ?, ?, 0, ?)",
  ).bind(
    userId,
    body.username,
    credentials.salt,
    credentials.hash,
    credentials.iterations,
    now,
  ).run();
  if (!result?.meta?.changes) return jsonResponse({ error: "该账号已被注册" }, 409);

  const session = await createSession(env.DB, userId);
  return jsonResponse({ user: { username: body.username } }, 201, {
    "Set-Cookie": session.cookie,
  });
}

async function handleLogin(request, env) {
  const body = await requestJson(request, MAX_AUTH_BODY_BYTES);
  try {
    validateCredentials(body.username, body.password);
  } catch (error) {
    return invalidCredentials();
  }

  const allowed = await checkAuthRate(env, request, "login", body.username);
  if (allowed === null) return apiUnavailable();
  if (!allowed) return jsonResponse({ error: "操作过于频繁，请稍后重试" }, 429);

  const user = await env.DB.prepare(
    "SELECT id, username, password_salt, password_hash, password_iterations FROM users WHERE username = ?",
  ).bind(body.username).first();
  const passwordMatches = user
    ? await verifyPassword(body.password, {
      salt: user.password_salt,
      hash: user.password_hash,
      iterations: user.password_iterations,
    })
    : (deriveScryptPassword(body.password, new Uint8Array(PASSWORD_SALT_BYTES)), false);
  if (!user || !passwordMatches) return invalidCredentials();

  const session = await createSession(env.DB, user.id);
  return jsonResponse({ user: { username: user.username } }, 200, {
    "Set-Cookie": session.cookie,
  });
}

async function handleLogout(request, env) {
  const token = readSessionToken(request);
  if (token && env.DB) {
    const tokenHash = await digestHex(token);
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(tokenHash).run();
  }
  return jsonResponse({ ok: true }, 200, {
    "Set-Cookie": sessionCookie("", 0),
  });
}

async function handleSessionInfo(request, env) {
  const session = await findSession(request, env.DB);
  return jsonResponse({ user: session ? { username: session.username } : null });
}

async function handleDeleteAccount(request, env) {
  const session = await findSession(request, env.DB);
  if (!session) return invalidCredentials();

  const body = await requestJson(request, MAX_AUTH_BODY_BYTES);
  if (typeof body.password !== "string") return invalidCredentials();
  const allowed = await checkAuthRate(env, request, "delete", session.username);
  if (allowed === null) return apiUnavailable();
  if (!allowed) return jsonResponse({ error: "操作过于频繁，请稍后重试" }, 429);

  const credentials = await env.DB.prepare(
    "SELECT password_salt, password_hash, password_iterations FROM users WHERE id = ?",
  ).bind(session.user_id).first();
  const passwordMatches = credentials && await verifyPassword(body.password, {
    salt: credentials.password_salt,
    hash: credentials.password_hash,
    iterations: credentials.password_iterations,
  });
  if (!passwordMatches) return invalidCredentials();

  await env.DB.batch([
    env.DB.prepare("DELETE FROM progress WHERE user_id = ?").bind(session.user_id),
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(session.user_id),
    env.DB.prepare("DELETE FROM users WHERE id = ?").bind(session.user_id),
  ]);
  return jsonResponse({ ok: true }, 200, {
    "Set-Cookie": sessionCookie("", 0),
  });
}

function recordFromRow(row) {
  return {
    storageKey: row.storage_key,
    itemKey: row.item_key,
    value: row.is_deleted ? null : JSON.parse(row.value_json),
    updatedAt: row.updated_at,
    isDeleted: !!row.is_deleted,
  };
}

function recordsMatch(first, second) {
  return !!first && !!second &&
    first.updatedAt === second.updatedAt &&
    first.isDeleted === second.isDeleted &&
    JSON.stringify(first.value) === JSON.stringify(second.value);
}

async function selectProgress(db, userId, storageKey) {
  const statement = storageKey === undefined
    ? db.prepare("SELECT storage_key, item_key, value_json, updated_at, is_deleted FROM progress WHERE user_id = ?").bind(userId)
    : db.prepare("SELECT storage_key, item_key, value_json, updated_at, is_deleted FROM progress WHERE user_id = ? AND storage_key = ?").bind(userId, storageKey);
  const result = await statement.all();
  return result.results || [];
}

async function handleProgressSync(request, env) {
  const session = await findSession(request, env.DB);
  if (!session) return jsonResponse({ error: "请先登录或重新登录" }, 401);

  const body = await requestJson(request, MAX_PROGRESS_BODY_BYTES);
  if (typeof body.full !== "boolean") {
    return jsonResponse({ error: "Invalid sync mode" }, 400);
  }

  let incoming;
  try {
    incoming = validateProgressItems(body.records, Date.now());
  } catch (error) {
    return jsonResponse({ error: error.message }, 400);
  }
  if (!body.full && !session.progress_initialized) {
    return jsonResponse({ error: "A full sync is required before incremental sync" }, 409);
  }

  const currentRows = body.full
    ? await selectProgress(env.DB, session.user_id)
    : (await Promise.all([...new Set(incoming.map((item) => item.storageKey))].map(
      (storageKey) => selectProgress(env.DB, session.user_id, storageKey),
    ))).flat();
  const current = new Map(currentRows.map((row) => {
    const record = recordFromRow(row);
    return [`${record.storageKey}\u0000${record.itemKey}`, record];
  }));
  const writes = [];
  const changed = new Map();
  const firstMerge = body.full && !session.progress_initialized;

  for (const localRecord of incoming) {
    const identity = `${localRecord.storageKey}\u0000${localRecord.itemKey}`;
    const cloudRecord = current.get(identity);
    let selected = chooseProgressRecord(localRecord, cloudRecord, firstMerge);
    if (firstMerge && cloudRecord && localRecord) {
      selected = {
        ...localRecord,
        updatedAt: Math.max(localRecord.updatedAt, cloudRecord.updatedAt + 1),
      };
    }
    current.set(identity, selected);
    changed.set(identity, selected);
    if (!recordsMatch(selected, cloudRecord)) writes.push(selected);
  }

  for (let offset = 0; offset < writes.length; offset += 100) {
    const chunk = writes.slice(offset, offset + 100).map((record) => env.DB.prepare(
      "INSERT INTO progress (user_id, storage_key, item_key, value_json, updated_at, is_deleted) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, storage_key, item_key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at, is_deleted = excluded.is_deleted WHERE excluded.updated_at >= progress.updated_at",
    ).bind(
      session.user_id,
      record.storageKey,
      record.itemKey,
      record.isDeleted ? null : JSON.stringify(record.value),
      record.updatedAt,
      record.isDeleted ? 1 : 0,
    ));
    await env.DB.batch(chunk);
  }

  if (body.full && !session.progress_initialized) {
    await env.DB.prepare("UPDATE users SET progress_initialized = 1 WHERE id = ?").bind(session.user_id).run();
  }

  const responseRecords = body.full
    ? [...current.values()]
    : [...changed.values()];
  responseRecords.sort((first, second) =>
    first.storageKey.localeCompare(second.storageKey) || first.itemKey.localeCompare(second.itemKey),
  );
  return jsonResponse({ initialized: true, records: responseRecords });
}

export async function handleAccountRequest(request, env) {
  const pathname = new URL(request.url).pathname;
  const routes = {
    "/api/auth/registration-config": { method: "GET", handler: (_request, environment) => jsonResponse(registrationConfig(environment)) },
    "/api/auth/register": { method: "POST", handler: handleRegister },
    "/api/auth/login": { method: "POST", handler: handleLogin },
    "/api/auth/logout": { method: "POST", handler: handleLogout },
    "/api/auth/me": { method: "GET", handler: handleSessionInfo },
    "/api/auth/account": { method: "DELETE", handler: handleDeleteAccount },
    "/api/progress/sync": { method: "POST", handler: handleProgressSync },
  };
  const route = routes[pathname];
  if (!route) return null;
  if (request.method !== route.method) {
    return jsonResponse({ error: "Method not allowed" }, 405, { Allow: route.method });
  }
  if (!env.DB && pathname !== "/api/auth/logout" && pathname !== "/api/auth/registration-config") return apiUnavailable();
  if (request.method !== "GET" && !validateMutationRequest(request)) {
    return jsonResponse({ error: "同源请求校验失败" }, 403);
  }

  try {
    return await route.handler(request, env);
  } catch (error) {
    if (error instanceof ApiError) return jsonResponse({ error: error.message }, error.status);
    console.error("quizbank_account_failure", { route: pathname, errorName: error?.name || "Error" });
    return apiUnavailable();
  }
}
