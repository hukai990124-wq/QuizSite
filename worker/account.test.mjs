import test, {beforeEach} from "node:test";
import assert from "node:assert/strict";
import { pbkdf2Sync, scryptSync } from "node:crypto";
import {
  chooseProgressRecord,
  handleAccountRequest,
  hashPassword,
  validateCredentials,
  validateMutationRequest,
  validateProgressItems,
  verifyPassword,
} from "./account.mjs";

test("credentials accept any content inside the agreed 6–15 character range", () => {
  assert.doesNotThrow(() => validateCredentials("账号名   ", "密码密码密码"));
  assert.doesNotThrow(() => validateCredentials("😀😀😀😀😀😀", "a b c d"));
});

test("credentials reject missing values and lengths outside 6–15 Unicode characters", () => {
  for (const [username, password] of [
    ["short", "123456"],
    ["123456", "short"],
    ["x".repeat(16), "123456"],
    ["123456", "x".repeat(16)],
    ["", "123456"],
    ["123456", ""],
  ]) {
    assert.throws(() => validateCredentials(username, password), /6–15/);
  }
});

test("first progress merge keeps local conflicts and includes cloud-only records", () => {
  const local = { value: { s: ["A"] }, updatedAt: 10, isDeleted: false };
  const cloud = { value: { s: ["B"] }, updatedAt: 20, isDeleted: false };

  assert.equal(chooseProgressRecord(local, cloud, true), local);
  assert.equal(chooseProgressRecord(undefined, cloud, true), cloud);
});

test("subsequent progress merge keeps the newest per-question edit, including tombstones", () => {
  const older = { value: { s: ["A"] }, updatedAt: 10, isDeleted: false };
  const newer = { value: null, updatedAt: 20, isDeleted: true };

  assert.equal(chooseProgressRecord(older, newer), newer);
  assert.equal(chooseProgressRecord(newer, older), newer);
});

test("progress merge resolves timestamp ties in favor of the local record", () => {
  const local = { value: { s: ["A"] }, updatedAt: 20, isDeleted: false };
  const cloud = { value: { s: ["B"] }, updatedAt: 20, isDeleted: false };

  assert.equal(chooseProgressRecord(local, cloud), local);
});

test("password hashes are salted and verify only the original password", async () => {
  const first = await hashPassword("sixsix");
  const second = await hashPassword("sixsix");

  assert.notEqual(first.salt, second.salt);
  assert.notEqual(first.hash, second.hash);
  assert.equal(await verifyPassword("sixsix", first), true);
  assert.equal(await verifyPassword("sixsix!", first), false);
});

test("password hashing works under the Workers PBKDF2 iteration cap", async (t) => {
  const deriveBits = crypto.subtle.deriveBits.bind(crypto.subtle);
  t.mock.method(crypto.subtle, "deriveBits", (algorithm, key, length) => {
    if (algorithm.name === "PBKDF2" && algorithm.iterations > 100_000) {
      throw new DOMException("Pbkdf2 iteration counts above 100000 are not supported", "NotSupportedError");
    }
    return deriveBits(algorithm, key, length);
  });

  const stored = await hashPassword("secret1");
  assert.equal(await verifyPassword("secret1", stored), true);
  assert.equal(await verifyPassword("wrongpw", stored), false);
});

test("versioned scrypt hashes match native scrypt and reject unrecognized parameters", async () => {
  const stored = await hashPassword("secret1");
  const salt = Buffer.from(stored.salt, "base64url");
  const expected = scryptSync("secret1", salt, 32, { N: 16384, r: 8, p: 5, maxmem: 32 * 1024 * 1024 });
  assert.equal(stored.hash, "scrypt-v1$" + expected.toString("base64url"));
  assert.equal(await verifyPassword("secret1", { ...stored, iterations: 32768 }), false);
  assert.equal(await verifyPassword("secret1", { ...stored, hash: stored.hash.replace("scrypt-v1", "scrypt-v9") }), false);
});

test("existing unprefixed PBKDF2 records remain verifiable", async () => {
  const salt = Buffer.alloc(16, 7);
  const stored = {
    salt: salt.toString("base64url"),
    hash: pbkdf2Sync("secret1", salt, 100_000, 32, "sha256").toString("base64url"),
    iterations: 100_000,
  };
  assert.equal(await verifyPassword("secret1", stored), true);
  assert.equal(await verifyPassword("wrongpw", stored), false);
});

test("progress payloads accept bounded quiz records and reject unsafe keys or oversized values", () => {
  const [valid] = validateProgressItems([{
    storageKey: "quiz:aws:clf:01",
    itemKey: "1",
    value: { s: ["A"], ok: null, revealed: false },
    updatedAt: 123,
    isDeleted: false,
  }], 200);
  assert.equal(valid.updatedAt, 123);

  assert.throws(() => validateProgressItems([{
    storageKey: "quiz:bad/name",
    itemKey: "1",
    value: {},
    updatedAt: 123,
    isDeleted: false,
  }], 200), /invalid/i);
  assert.throws(() => validateProgressItems([{
    storageKey: "quiz:aws:clf:01",
    itemKey: "1",
    value: "x".repeat(4097),
    updatedAt: 123,
    isDeleted: false,
  }], 200), /size/i);
});

test("mutating API requests require same-origin JSON", () => {
  const target = "https://quizsite.example";
  assert.equal(validateMutationRequest(new Request(target, {
    method: "POST",
    headers: { Origin: target, "Content-Type": "application/json" },
  })), true);
  assert.equal(validateMutationRequest(new Request(target, {
    method: "POST",
    headers: { Origin: "https://attacker.example", "Content-Type": "application/json" },
  })), false);
  assert.equal(validateMutationRequest(new Request(target, {
    method: "POST",
    headers: { Origin: target, "Content-Type": "text/plain" },
  })), false);
});

test("oversized streamed JSON is rejected even when Content-Length is absent", async () => {
  const origin = "https://quizsite.example";
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new Uint8Array(9 * 1024).fill(32));
      controller.close();
    },
  });
  const request = new Request(origin + "/api/auth/register", {
    method: "POST",
    headers: { Origin: origin, "Content-Type": "application/json" },
    body: stream,
    duplex: "half",
  });
  const response = await handleAccountRequest(request, makeEnvironment());

  assert.equal(response.status, 413);
});

function createMemoryDatabase() {
  const database = {
    users: new Map(),
    sessions: new Map(),
    progress: new Map(),
    prepare(sql) {
      return {
        bind(...values) {
          return {
            first: () => database.first(sql, values),
            all: () => database.all(sql, values),
            run: () => database.run(sql, values),
          };
        },
      };
    },
    async batch(statements) {
      const results = [];
      for (const statement of statements) results.push(await statement.run());
      return results;
    },
    first(sql, values) {
      if (sql.startsWith("SELECT id, username, password_salt")) {
        return [...this.users.values()].find((user) => user.username === values[0]) || null;
      }
      if (sql.startsWith("SELECT password_salt, password_hash, password_iterations")) {
        const user = this.users.get(values[0]);
        return user ? {
          password_salt: user.password_salt,
          password_hash: user.password_hash,
          password_iterations: user.password_iterations,
        } : null;
      }
      if (sql.startsWith("SELECT sessions.token_hash")) {
        const session = this.sessions.get(values[0]);
        const user = session && this.users.get(session.user_id);
        return session && user ? { ...session, ...user } : null;
      }
      if (sql.startsWith("SELECT progress_initialized FROM users")) {
        return this.users.get(values[0]) || null;
      }
      throw new Error("Unexpected first query: " + sql);
    },
    all(sql, values) {
      if (sql.startsWith("SELECT storage_key, item_key, value_json")) {
        return { results: [...this.progress.values()].filter((item) => item.user_id === values[0]) };
      }
      if (sql.startsWith("SELECT storage_key, item_key")) {
        return { results: [...this.progress.values()].filter((item) => item.user_id === values[0] && item.storage_key === values[1]) };
      }
      throw new Error("Unexpected all query: " + sql);
    },
    run(sql, values) {
      if (sql.startsWith("INSERT OR IGNORE INTO users")) {
        const [id, username, password_salt, password_hash, password_iterations, registration_country, registration_region, created_at] = values;
        if ([...this.users.values()].some((user) => user.username === username)) return { meta: { changes: 0 } };
        this.users.set(id, { id, username, password_salt, password_hash, password_iterations, progress_initialized: 0, registration_country, registration_region, created_at });
        return { meta: { changes: 1 } };
      }
      if (sql.startsWith("INSERT INTO sessions")) {
        const [token_hash, user_id, created_at, expires_at] = values;
        this.sessions.set(token_hash, { token_hash, user_id, created_at, expires_at });
        return { meta: { changes: 1 } };
      }
      if (sql.startsWith("DELETE FROM sessions WHERE token_hash")) return { meta: { changes: this.sessions.delete(values[0]) ? 1 : 0 } };
      if (sql.startsWith("DELETE FROM sessions WHERE user_id")) {
        let changes = 0;
        for (const [key, row] of this.sessions) if (row.user_id === values[0]) { this.sessions.delete(key); changes += 1; }
        return { meta: { changes } };
      }
      if (sql.startsWith("DELETE FROM progress WHERE user_id")) {
        let changes = 0;
        for (const [key, row] of this.progress) if (row.user_id === values[0]) { this.progress.delete(key); changes += 1; }
        return { meta: { changes } };
      }
      if (sql.startsWith("DELETE FROM users WHERE id")) return { meta: { changes: this.users.delete(values[0]) ? 1 : 0 } };
      if (sql.startsWith("UPDATE users SET progress_initialized")) {
        const user = this.users.get(values[0]);
        if (user) user.progress_initialized = 1;
        return { meta: { changes: user ? 1 : 0 } };
      }
      if (sql.startsWith("INSERT INTO progress")) {
        const [user_id, storage_key, item_key, value_json, updated_at, is_deleted] = values;
        const identity = JSON.stringify([user_id, storage_key, item_key]);
        const current = this.progress.get(identity);
        if (!current || updated_at >= current.updated_at) {
          this.progress.set(identity, { user_id, storage_key, item_key, value_json, updated_at, is_deleted });
          return { meta: { changes: 1 } };
        }
        return { meta: { changes: 0 } };
      }
      throw new Error("Unexpected run query: " + sql);
    },
  };
  return database;
}

beforeEach(t=>t.mock.method(globalThis,'fetch',async url=>{
  assert.equal(url,'https://challenges.cloudflare.com/turnstile/v0/siteverify');
  return Response.json({success:true,hostname:'quizsite.example',action:'register'});
}));

function makeRequest(path, method, body, headers = {}) {
  const origin = "https://quizsite.example";
  return new Request(origin + path, {
    method,
    headers: {
      ...(body === undefined ? {} : { "Content-Type": "application/json", Origin: origin }),
      ...headers,
    },
    ...(body === undefined ? {} : { body: JSON.stringify(path === '/api/auth/register' ? {turnstileToken:'unit-test-token',...body} : body) }),
  });
}

function makeEnvironment(allowed = true) {
  return {
    DB: createMemoryDatabase(),
    TURNSTILE_SITE_KEY:'unit-test-public-key',
    TURNSTILE_SECRET_KEY:'unit-test-private-value',
    AUTH_LIMIT: { limit: async () => ({ success: allowed }) },
  };
}

test("registration creates a case-sensitive account and an HttpOnly secure session", async () => {
  const env = makeEnvironment();
  const request = makeRequest("/api/auth/register", "POST", {
    username: "Tester1",
    password: "secret1",
  });
  Object.defineProperty(request, "cf", { value: { country: "JP", region: "Tokyo" } });
  const response = await handleAccountRequest(request, env);
  const cookie = response.headers.get("Set-Cookie");

  assert.equal(response.status, 201);
  assert.match(cookie, /^__Host-quizsite_session=.*; Path=\/; Max-Age=2592000; Secure; HttpOnly; SameSite=Strict$/);
  assert.equal(response.headers.get("Strict-Transport-Security"), "max-age=31536000");
  assert.equal(response.headers.get("X-Frame-Options"), "DENY");
  assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal((await response.json()).user.username, "Tester1");
  assert.equal([...env.DB.users.values()][0].password_hash === "secret1", false);
  assert.equal([...env.DB.users.values()][0].registration_country, "JP");
  assert.equal([...env.DB.users.values()][0].registration_region, "Tokyo");
  assert.equal(env.DB.users.size, 1);

  const lowerCaseLogin = await handleAccountRequest(makeRequest("/api/auth/login", "POST", {
    username: "tester1",
    password: "secret1",
  }), env);
  assert.equal(lowerCaseLogin.status, 401);
});

test("registration succeeds without location metadata and stores it as unknown", async () => {
  const env = makeEnvironment();
  const response = await handleAccountRequest(makeRequest("/api/auth/register", "POST", {
    username: "Tester1",
    password: "secret1",
  }), env);

  assert.equal(response.status, 201);
  assert.equal([...env.DB.users.values()][0].registration_country, null);
  assert.equal([...env.DB.users.values()][0].registration_region, null);
});

test('registration endpoint rejects missing verification before creating users/sessions, while config stays public',async()=>{
  const env=makeEnvironment();
  const response=await handleAccountRequest(makeRequest('/api/auth/register','POST',{username:'Tester1',password:'secret1',turnstileToken:null}),env);
  assert.equal(response.status,403);assert.equal(env.DB.users.size,0);assert.equal(env.DB.sessions.size,0);
  const config=await handleAccountRequest(makeRequest('/api/auth/registration-config','GET'),env);
  assert.deepEqual(await config.json(),{configured:true,siteKey:env.TURNSTILE_SITE_KEY});
  assert.equal(config.headers.get('Cache-Control'),'no-store');
});

test("login, session lookup, logout, and account deletion use the server-side session", async () => {
  const env = makeEnvironment();
  await handleAccountRequest(makeRequest("/api/auth/register", "POST", { username: "Tester1", password: "secret1" }), env);
  const login = await handleAccountRequest(makeRequest("/api/auth/login", "POST", { username: "Tester1", password: "secret1" }), env);
  const cookiePair = login.headers.get("Set-Cookie").split(";")[0];

  const me = await handleAccountRequest(makeRequest("/api/auth/me", "GET", undefined, { Cookie: cookiePair }), env);
  assert.equal((await me.json()).user.username, "Tester1");

  const logout = await handleAccountRequest(makeRequest("/api/auth/logout", "POST", {}, { Cookie: cookiePair }), env);
  assert.equal(logout.status, 200);
  assert.match(logout.headers.get("Set-Cookie"), /Max-Age=0/);
  const afterLogout = await handleAccountRequest(makeRequest("/api/auth/me", "GET", undefined, { Cookie: cookiePair }), env);
  assert.equal((await afterLogout.json()).user, null);

  const secondLogin = await handleAccountRequest(makeRequest("/api/auth/login", "POST", { username: "Tester1", password: "secret1" }), env);
  const secondCookie = secondLogin.headers.get("Set-Cookie").split(";")[0];
  env.DB.progress.set(JSON.stringify([[...env.DB.users.keys()][0], "quiz:aws:clf:01", "1"]), {
    user_id: [...env.DB.users.keys()][0],
    storage_key: "quiz:aws:clf:01",
    item_key: "1",
    value_json: JSON.stringify({ s: ["A"] }),
    updated_at: 1,
    is_deleted: 0,
  });

  const rejectedDelete = await handleAccountRequest(makeRequest("/api/auth/account", "DELETE", { password: "wrongpw" }, { Cookie: secondCookie }), env);
  assert.equal(rejectedDelete.status, 401);
  assert.equal(env.DB.users.size, 1);
  assert.equal(env.DB.progress.size, 1);

  const deleted = await handleAccountRequest(makeRequest("/api/auth/account", "DELETE", { password: "secret1" }, { Cookie: secondCookie }), env);
  assert.equal(deleted.status, 200);
  assert.equal(env.DB.users.size, 0);
  assert.equal(env.DB.sessions.size, 0);
  assert.equal(env.DB.progress.size, 0);
  assert.match(deleted.headers.get("Set-Cookie"), /Max-Age=0/);
});

test("phone and desktop sessions coexist, and logging out one does not revoke the other", async () => {
  const env = makeEnvironment();
  const registered = await handleAccountRequest(makeRequest("/api/auth/register", "POST", { username: "Tester1", password: "secret1" }), env);
  const desktopCookie = registered.headers.get("Set-Cookie").split(";")[0];
  const loggedIn = await handleAccountRequest(makeRequest("/api/auth/login", "POST", { username: "Tester1", password: "secret1" }), env);
  const phoneCookie = loggedIn.headers.get("Set-Cookie").split(";")[0];
  assert.notEqual(phoneCookie, desktopCookie);
  for (const cookie of [desktopCookie, phoneCookie]) {
    const me = await handleAccountRequest(makeRequest("/api/auth/me", "GET", undefined, { Cookie: cookie }), env);
    assert.equal((await me.json()).user.username, "Tester1");
  }
  await handleAccountRequest(makeRequest("/api/auth/logout", "POST", {}, { Cookie: phoneCookie }), env);
  const desktop = await handleAccountRequest(makeRequest("/api/auth/me", "GET", undefined, { Cookie: desktopCookie }), env);
  assert.equal((await desktop.json()).user.username, "Tester1");
});

test("logout still clears the browser cookie when the database binding is unavailable", async () => {
  const response = await handleAccountRequest(makeRequest("/api/auth/logout", "POST", {}), {});

  assert.equal(response.status, 200);
  assert.match(response.headers.get("Set-Cookie"), /Max-Age=0/);
});

test("auth mutations reject foreign origins and silently rate limit repeated attempts", async () => {
  const denied = makeEnvironment(false);
  const throttled = await handleAccountRequest(makeRequest("/api/auth/register", "POST", {
    username: "Tester1", password: "secret1",
  }), denied);
  assert.equal(throttled.status, 429);
  assert.equal(denied.DB.users.size, 0);

  const env = makeEnvironment();
  const crossSite = await handleAccountRequest(makeRequest("/api/auth/register", "POST", {
    username: "Tester1", password: "secret1",
  }, { Origin: "https://attacker.example" }), env);
  assert.equal(crossSite.status, 403);
  assert.equal(env.DB.users.size, 0);
});

test("first full progress sync merges cloud-only records but prefers the local answer on conflict", async () => {
  const env = makeEnvironment();
  const registration = await handleAccountRequest(makeRequest("/api/auth/register", "POST", {
    username: "Tester1", password: "secret1",
  }), env);
  const cookie = registration.headers.get("Set-Cookie").split(";")[0];
  const userId = [...env.DB.users.keys()][0];
  env.DB.progress.set(JSON.stringify([userId, "quiz:aws:clf:01", "1"]), {
    user_id: userId,
    storage_key: "quiz:aws:clf:01",
    item_key: "1",
    value_json: JSON.stringify({ s: ["B"] }),
    updated_at: 20,
    is_deleted: 0,
  });
  env.DB.progress.set(JSON.stringify([userId, "quiz:aws:clf:01", "3"]), {
    user_id: userId,
    storage_key: "quiz:aws:clf:01",
    item_key: "3",
    value_json: JSON.stringify({ s: ["C"] }),
    updated_at: 30,
    is_deleted: 0,
  });

  const response = await handleAccountRequest(makeRequest("/api/progress/sync", "POST", {
    full: true,
    records: [
      { storageKey: "quiz:aws:clf:01", itemKey: "1", value: { s: ["A"] }, updatedAt: 10, isDeleted: false },
      { storageKey: "quiz:aws:clf:01", itemKey: "2", value: { s: ["D"] }, updatedAt: 11, isDeleted: false },
    ],
  }, { Cookie: cookie }), env);
  const result = await response.json();
  const byQuestion = new Map(result.records.map((record) => [record.itemKey, record]));

  assert.equal(response.status, 200);
  assert.deepEqual(byQuestion.get("1").value, { s: ["A"] });
  assert.deepEqual(byQuestion.get("2").value, { s: ["D"] });
  assert.deepEqual(byQuestion.get("3").value, { s: ["C"] });
  assert.equal(env.DB.users.get(userId).progress_initialized, 1);
});

test("later progress sync selects the latest per-question edit and propagates deletions", async () => {
  const env = makeEnvironment();
  const registration = await handleAccountRequest(makeRequest("/api/auth/register", "POST", {
    username: "Tester1", password: "secret1",
  }), env);
  const cookie = registration.headers.get("Set-Cookie").split(";")[0];
  const userId = [...env.DB.users.keys()][0];

  await handleAccountRequest(makeRequest("/api/progress/sync", "POST", {
    full: true,
    records: [{ storageKey: "quiz:aws:clf:01", itemKey: "1", value: { s: ["A"] }, updatedAt: 100, isDeleted: false }],
  }, { Cookie: cookie }), env);
  const response = await handleAccountRequest(makeRequest("/api/progress/sync", "POST", {
    full: false,
    records: [
      { storageKey: "quiz:aws:clf:01", itemKey: "1", value: { s: ["B"] }, updatedAt: 90, isDeleted: false },
      { storageKey: "quiz:aws:clf:01", itemKey: "2", value: null, updatedAt: 110, isDeleted: true },
    ],
  }, { Cookie: cookie }), env);
  const result = await response.json();
  const byQuestion = new Map(result.records.map((record) => [record.itemKey, record]));

  assert.equal(response.status, 200);
  assert.deepEqual(byQuestion.get("1").value, { s: ["A"] });
  assert.equal(byQuestion.get("2").isDeleted, true);
});
