(function (global, document) {
  "use strict";

  var USERNAME_MIN = 6;
  var USERNAME_MAX = 15;
  var META_LAST_SYNC = "account:last-full-sync";
  var sync = global.QuizBankProgressSync || null;
  var storage = null;
  var meta = null;
  var accountUser = null;
  var applyingRemote = false;
  var syncInFlight = false;
  var syncAgain = false;
  var syncAgainFull = false;
  var syncTimer = null;
  var retryTimer = null;
  var storageTrackingInstalled = false;
  var authMode = "login";
  var dialog = null;
  var trigger = null;

  var COPY = {
    zh: {
      eyebrow: "QuizBank 账号", title: "登录或注册", description: "登录后，学习进度会在设备间同步。注册无需邮箱或验证码。",
      login: "登录", register: "注册", username: "账号（6–15 个字符）", password: "密码（6–15 个字符）",
      loginButton: "登录", registerButton: "创建账号", forgot: "忘记密码无法自助找回。",
      close: "关闭", account: "当前账号", logout: "退出登录", delete: "删除账号",
      deleteDescription: "删除后会清除账号及所有云端进度，本机浏览器中的进度会保留。请输入密码确认。",
      deletePassword: "当前密码", confirmDelete: "永久删除账号", cancel: "取消",
      invalidRange: "账号和密码都需要为 6–15 个字符。", invalidCredentials: "账号或密码错误。",
      accountExists: "这个账号已被注册。", rateLimited: "操作过于频繁，请稍后再试。",
      unavailable: "账号服务暂不可用；本机答题和进度仍可使用。",
      networkError: "网络暂不可用，学习进度会留在本机并在联网后重试。",
      syncing: "正在同步本机学习进度……", synced: "学习进度已同步。", pending: "已登录；本机进度将在联网后同步。",
      deleted: "账号及云端进度已删除；本机进度保留。", syncWait: "进度同步稍后会自动重试。",
      mustLogin: "登录状态已失效，请重新登录。", deleteFailed: "无法删除账号，请检查密码后重试。",
      loading: "正在检查账号状态……", accountLabel: "账号：", loginLabel: "登录 / 注册",
    },
    en: {
      eyebrow: "QuizBank account", title: "Sign in or register", description: "Sign in to sync study progress across devices. No email or verification code is needed.",
      login: "Sign in", register: "Register", username: "Account (6–15 characters)", password: "Password (6–15 characters)",
      loginButton: "Sign in", registerButton: "Create account", forgot: "Forgot passwords cannot be recovered automatically.",
      close: "Close", account: "Signed-in account", logout: "Sign out", delete: "Delete account",
      deleteDescription: "This deletes the account and all cloud progress. Progress saved in this browser stays here. Enter your password to confirm.",
      deletePassword: "Current password", confirmDelete: "Delete permanently", cancel: "Cancel",
      invalidRange: "Account and password must each be 6–15 characters.", invalidCredentials: "Account or password is incorrect.",
      accountExists: "That account is already registered.", rateLimited: "Too many attempts. Please try again later.",
      unavailable: "Account service is unavailable. Local quizzes and progress still work.",
      networkError: "Network unavailable. Progress stays on this device and will retry when connected.",
      syncing: "Syncing local study progress…", synced: "Study progress is synced.", pending: "Signed in; local progress will sync when connected.",
      deleted: "Account and cloud progress deleted. Local progress is kept.", syncWait: "Progress sync will retry automatically.",
      mustLogin: "Your session expired. Please sign in again.", deleteFailed: "Could not delete the account. Check the password and retry.",
      loading: "Checking account status…", accountLabel: "Account: ", loginLabel: "Sign in / Register",
    },
    ja: {
      eyebrow: "QuizBank アカウント", title: "ログインまたは登録", description: "ログインすると学習進捗をデバイス間で同期できます。メールや認証コードは不要です。",
      login: "ログイン", register: "登録", username: "アカウント（6～15文字）", password: "パスワード（6～15文字）",
      loginButton: "ログイン", registerButton: "アカウントを作成", forgot: "パスワードを忘れた場合、自分では再設定できません。",
      close: "閉じる", account: "ログイン中のアカウント", logout: "ログアウト", delete: "アカウントを削除",
      deleteDescription: "アカウントとクラウド上の進捗を削除します。このブラウザーの進捗は残ります。確認のためパスワードを入力してください。",
      deletePassword: "現在のパスワード", confirmDelete: "完全に削除", cancel: "キャンセル",
      invalidRange: "アカウントとパスワードはそれぞれ6～15文字にしてください。", invalidCredentials: "アカウントまたはパスワードが正しくありません。",
      accountExists: "このアカウントはすでに登録されています。", rateLimited: "試行回数が多すぎます。しばらくしてから再試行してください。",
      unavailable: "アカウントサービスを利用できません。問題演習とローカル進捗は引き続き利用できます。",
      networkError: "ネットワークに接続できません。進捗はこの端末に保存され、接続後に再試行します。",
      syncing: "ローカルの学習進捗を同期中…", synced: "学習進捗を同期しました。", pending: "ログイン済みです。接続後に進捗を同期します。",
      deleted: "アカウントとクラウド進捗を削除しました。ローカル進捗は保持されています。", syncWait: "進捗の同期は自動的に再試行されます。",
      mustLogin: "セッションの有効期限が切れました。再度ログインしてください。", deleteFailed: "削除できませんでした。パスワードを確認して再試行してください。",
      loading: "アカウント状態を確認中…", accountLabel: "アカウント：", loginLabel: "ログイン / 登録",
    },
  };

  function language() {
    var savedLanguage = "";
    try { savedLanguage = String(global.localStorage.getItem("ui:lang") || "").toLowerCase(); }
    catch (error) { savedLanguage = ""; }
    var value = String((savedLanguage === "zh" || savedLanguage === "en" || savedLanguage === "ja")
      ? savedLanguage
      : (document.documentElement.getAttribute("data-lang") || document.documentElement.lang || "zh")).toLowerCase();
    return value.indexOf("ja") === 0 ? "ja" : value.indexOf("en") === 0 ? "en" : "zh";
  }

  function words() { return COPY[language()]; }

  function loadStyles() {
    if (document.getElementById("quizbank-account-css")) return;
    var link = document.createElement("link");
    link.id = "quizbank-account-css";
    link.rel = "stylesheet";
    link.href = "/assets/account.css";
    document.head.appendChild(link);
  }

  function loadSyncModule(callback) {
    if (global.QuizBankProgressSync) { callback(); return; }
    var existing = document.getElementById("quizbank-account-sync-js");
    if (existing) {
      existing.addEventListener("load", callback, { once: true });
      return;
    }
    var script = document.createElement("script");
    script.id = "quizbank-account-sync-js";
    script.src = "/assets/account-sync.js";
    script.onload = callback;
    script.onerror = function () { updateTrigger(); };
    document.head.appendChild(script);
  }

  function createTrigger() {
    trigger = document.querySelector(".qb-auth-trigger");
    if (!trigger) {
      var inner = document.querySelector(".qb-sitebar__inner");
      if (!inner) return;
      trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "qb-auth-trigger qb-sitebar__account i18n-noloc";
      trigger.setAttribute("aria-haspopup", "dialog");
      inner.appendChild(trigger);
    }
    trigger.classList.add("i18n-noloc");
    trigger.addEventListener("click", openDialog);
  }

  function makeDialog() {
    if (dialog) return;
    dialog = document.createElement("dialog");
    dialog.className = "qb-account-dialog i18n-noloc";
    dialog.setAttribute("aria-labelledby", "qb-account-title");
    dialog.innerHTML =
      '<section class="qb-account-panel">' +
        '<button class="qb-account-close" type="button" id="qb-account-close" aria-label="Close">×</button>' +
        '<p class="qb-account-eyebrow" id="qb-account-eyebrow"></p>' +
        '<h2 class="qb-account-title" id="qb-account-title"></h2>' +
        '<p class="qb-account-description" id="qb-account-description"></p>' +
        '<div class="qb-account-switch" id="qb-account-switch" role="group">' +
          '<button type="button" id="qb-mode-login" data-mode="login" aria-pressed="true"></button>' +
          '<button type="button" id="qb-mode-register" data-mode="register" aria-pressed="false"></button>' +
        '</div>' +
        '<form id="qb-auth-form">' +
          '<div class="qb-account-fields">' +
            '<label class="qb-account-field"><span id="qb-username-caption"></span><input id="qb-username" type="text" required autocomplete="username" spellcheck="false"></label>' +
            '<label class="qb-account-field"><span id="qb-password-caption"></span><input id="qb-password" type="password" required autocomplete="current-password"></label>' +
          '</div>' +
          '<p class="qb-account-error" id="qb-auth-error" role="alert" aria-live="polite"></p>' +
          '<p class="qb-account-status" id="qb-auth-status" role="status" aria-live="polite"></p>' +
          '<button class="qb-account-submit" id="qb-auth-submit" type="submit"></button>' +
          '<p class="qb-account-note" id="qb-account-note"></p>' +
        '</form>' +
        '<div id="qb-account-view" hidden>' +
          '<p class="qb-account-eyebrow" id="qb-profile-label"></p>' +
          '<p class="qb-account-profile" id="qb-profile-name"></p>' +
          '<section class="qb-weekly-study" id="qb-weekly-study" hidden><p id="qb-weekly-caption"></p><p class="qb-weekly-total" id="qb-weekly-total"></p><p class="qb-account-note" id="qb-weekly-note"></p></section>' +
          '<p class="qb-account-status" id="qb-sync-status" role="status" aria-live="polite"></p>' +
          '<div class="qb-account-actions"><button type="button" id="qb-logout"></button><button type="button" class="qb-account-delete" id="qb-show-delete"></button></div>' +
          '<div class="qb-account-delete-panel" id="qb-delete-panel" hidden>' +
            '<p id="qb-delete-description"></p>' +
            '<form id="qb-delete-form"><label class="qb-account-field"><span id="qb-delete-password-caption"></span><input id="qb-delete-password" type="password" required autocomplete="current-password"></label>' +
              '<p class="qb-account-error" id="qb-delete-error" role="alert" aria-live="polite"></p>' +
              '<div class="qb-account-actions"><button type="button" id="qb-cancel-delete"></button><button type="submit" class="qb-account-delete" id="qb-confirm-delete"></button></div>' +
            '</form>' +
          '</div>' +
        '</div>' +
      '</section>';
    document.body.appendChild(dialog);
    dialog.querySelector("#qb-account-close").addEventListener("click", closeDialog);
    dialog.querySelector("#qb-mode-login").addEventListener("click", function () { setMode("login"); });
    dialog.querySelector("#qb-mode-register").addEventListener("click", function () { setMode("register"); });
    dialog.querySelector("#qb-auth-form").addEventListener("submit", submitAuth);
    dialog.querySelector("#qb-logout").addEventListener("click", logout);
    dialog.querySelector("#qb-show-delete").addEventListener("click", showDelete);
    dialog.querySelector("#qb-cancel-delete").addEventListener("click", hideDelete);
    dialog.querySelector("#qb-delete-form").addEventListener("submit", deleteAccount);
    dialog.addEventListener("click", function (event) { if (event.target === dialog) closeDialog(); });
    applyCopy();
  }

  function byId(id) { return dialog.querySelector("#" + id); }

  function setText(id, value) { byId(id).textContent = value; }

  function refreshMessage(id, keys, copy) {
    var node = byId(id);
    if (!node.textContent) return;
    var languages = Object.keys(COPY);
    for (var keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
      var key = keys[keyIndex];
      for (var languageIndex = 0; languageIndex < languages.length; languageIndex += 1) {
        if (node.textContent === COPY[languages[languageIndex]][key]) {
          node.textContent = copy[key];
          return;
        }
      }
    }
  }

  function applyCopy() {
    if (!dialog) return;
    var c = words();
    setText("qb-account-eyebrow", c.eyebrow);
    setText("qb-account-title", c.title);
    setText("qb-account-description", c.description);
    setText("qb-mode-login", c.login);
    setText("qb-mode-register", c.register);
    setText("qb-username-caption", c.username);
    setText("qb-password-caption", c.password);
    setText("qb-account-note", c.forgot);
    setText("qb-profile-label", c.account);
    setText("qb-logout", c.logout);
    setText("qb-show-delete", c.delete);
    setText("qb-delete-description", c.deleteDescription);
    setText("qb-delete-password-caption", c.deletePassword);
    setText("qb-confirm-delete", c.confirmDelete);
    setText("qb-cancel-delete", c.cancel);
    byId("qb-account-close").setAttribute("aria-label", c.close);
    byId("qb-mode-login").setAttribute("aria-pressed", authMode === "login" ? "true" : "false");
    byId("qb-mode-register").setAttribute("aria-pressed", authMode === "register" ? "true" : "false");
    byId("qb-password").setAttribute("autocomplete", authMode === "register" ? "new-password" : "current-password");
    setText("qb-auth-submit", authMode === "login" ? c.loginButton : c.registerButton);
    ["invalidRange", "invalidCredentials", "accountExists", "rateLimited", "unavailable", "networkError", "mustLogin"]
      .forEach(function (key) { refreshMessage("qb-auth-error", [key], c); });
    ["syncing", "synced", "pending", "deleted", "unavailable", "networkError", "mustLogin"]
      .forEach(function (key) { refreshMessage("qb-auth-status", [key], c); });
    ["syncing", "synced", "pending", "syncWait", "unavailable", "networkError", "mustLogin"]
      .forEach(function (key) { refreshMessage("qb-sync-status", [key], c); });
    ["invalidCredentials", "rateLimited", "unavailable", "networkError", "deleteFailed"]
      .forEach(function (key) { refreshMessage("qb-delete-error", [key], c); });
    if (trigger) updateTrigger();
  }

  function updateTrigger() {
    global.dispatchEvent(new global.CustomEvent("quizbank:account-changed", { detail: { username: accountUser ? accountUser.username : null } }));
    if (!trigger) return;
    var c = words();
    var label = accountUser ? c.accountLabel + accountUser.username : c.loginLabel;
    trigger.textContent = label;
    trigger.setAttribute("aria-label", label);
    trigger.setAttribute("title", label);
    trigger.setAttribute("aria-haspopup", "dialog");
  }

  function setMode(mode) {
    authMode = mode === "register" ? "register" : "login";
    byId("qb-auth-error").textContent = "";
    byId("qb-auth-status").textContent = "";
    applyCopy();
  }

  function showSignedIn(signedIn) {
    byId("qb-auth-form").hidden = signedIn;
    byId("qb-account-switch").hidden = signedIn;
    byId("qb-account-view").hidden = !signedIn;
    if (signedIn) setText("qb-profile-name", accountUser.username);
  }

  function openDialog() {
    if (!dialog) makeDialog();
    showSignedIn(!!accountUser);
    applyCopy();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "open");
    global.dispatchEvent(new global.Event("quizbank:account-opened"));
    if (accountUser) byId("qb-logout").focus();
    else byId("qb-username").focus();
  }

  function closeDialog() {
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  function requestJson(path, method, body) {
    var options = { method: method, credentials: "same-origin", cache: "no-store", headers: {} };
    if (body !== undefined) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }
    return global.fetch(path, options).then(function (response) {
      return response.text().then(function (raw) {
        var data = {};
        try { data = raw ? JSON.parse(raw) : {}; }
        catch (error) { data = {}; }
        if (!response.ok) {
          var failure = new Error(data.error || "Request failed");
          failure.status = response.status;
          throw failure;
        }
        return data;
      });
    });
  }

  function errorCopy(error, fallback) {
    var c = words();
    if (error && error.status === 409) return c.accountExists;
    if (error && error.status === 429) return c.rateLimited;
    if (error && error.status === 503) return c.unavailable;
    if (error && error.status === 401) return c.invalidCredentials;
    if (error && error.status === 400) return c.invalidRange;
    if (error && error.status) return fallback;
    return c.networkError;
  }

  function setBusy(button, busy) {
    button.disabled = busy;
    button.setAttribute("aria-busy", busy ? "true" : "false");
  }

  function credentialLength(value) { return Array.from(value).length; }

  function submitAuth(event) {
    event.preventDefault();
    var username = byId("qb-username").value;
    var password = byId("qb-password").value;
    var c = words();
    var error = byId("qb-auth-error");
    var status = byId("qb-auth-status");
    var button = byId("qb-auth-submit");
    error.textContent = "";
    status.textContent = "";
    if (credentialLength(username) < USERNAME_MIN || credentialLength(username) > USERNAME_MAX ||
        credentialLength(password) < USERNAME_MIN || credentialLength(password) > USERNAME_MAX) {
      error.textContent = c.invalidRange;
      return;
    }

    setBusy(button, true);
    requestJson(authMode === "register" ? "/api/auth/register" : "/api/auth/login", "POST", {
      username: username,
      password: password,
    }).then(function (result) {
      accountUser = result.user;
      byId("qb-password").value = "";
      updateTrigger();
      showSignedIn(true);
      status.textContent = "";
      setSyncStatus(c.syncing);
      queueSync(true, 0);
    }).catch(function (failure) {
      error.textContent = errorCopy(failure, c.invalidCredentials);
    }).finally(function () { setBusy(button, false); });
  }

  function setSyncStatus(message) {
    if (dialog) byId("qb-sync-status").textContent = message || "";
  }

  function persistMeta(value) {
    meta = value;
    if (storage && sync) sync.writeMeta(storage, meta);
  }

  function isQuizKey(key) {
    return typeof key === "string" && /^quiz:[A-Za-z0-9:_-]{1,250}$/.test(key);
  }

  function trackStorageChange(key, oldValue, newValue) {
    if (!sync || applyingRemote || !isQuizKey(key)) return;
    if (!meta) meta = sync.readMeta(storage);
    var result = sync.trackChange(key, oldValue, newValue, meta, Date.now());
    meta = result.meta;
    if (result.records.length) {
      persistMeta(meta);
      queueSync(false, 900);
    }
  }

  function installStorageTracking() {
    try { storage = global.localStorage; } catch (error) { return; }
    if (!storage || !global.Storage || !global.Storage.prototype || storageTrackingInstalled) return;
    meta = sync.readMeta(storage);
    var prototype = global.Storage.prototype;
    var originalSetItem = prototype.setItem;
    var originalRemoveItem = prototype.removeItem;
    var originalClear = prototype.clear;

    prototype.setItem = function (key, value) {
      if (this !== storage) return originalSetItem.call(this, key, value);
      var normalizedKey = String(key);
      var oldValue = originalGetItem.call(this, normalizedKey);
      originalSetItem.call(this, normalizedKey, value);
      if (isQuizKey(normalizedKey)) trackStorageChange(normalizedKey, oldValue, String(value));
    };
    var originalGetItem = prototype.getItem;
    prototype.removeItem = function (key) {
      if (this !== storage) return originalRemoveItem.call(this, key);
      var normalizedKey = String(key);
      var oldValue = originalGetItem.call(this, normalizedKey);
      originalRemoveItem.call(this, normalizedKey);
      if (oldValue !== null && isQuizKey(normalizedKey)) trackStorageChange(normalizedKey, oldValue, null);
    };
    prototype.clear = function () {
      if (this !== storage) return originalClear.call(this);
      var preserved = [];
      var quizKeys = [];
      for (var index = 0; index < this.length; index += 1) {
        var key = this.key(index);
        var value = originalGetItem.call(this, key);
        if (isQuizKey(key)) quizKeys.push({ key: key, value: value });
        else preserved.push({ key: key, value: value });
      }
      originalClear.call(this);
      preserved.forEach(function (entry) { originalSetItem.call(storage, entry.key, entry.value); });
      if (!applyingRemote) quizKeys.forEach(function (entry) { trackStorageChange(entry.key, entry.value, null); });
    };
    storageTrackingInstalled = true;

    global.addEventListener("storage", function (event) {
      if (event.storageArea !== storage || !sync) return;
      if (event.key === null || isQuizKey(event.key)) {
        queueSync(false, 100);
        global.dispatchEvent(new global.Event("quizbank:progress-updated"));
      }
    });
  }

  function wasFullSyncRecent() {
    if (!storage) return false;
    var last = 0;
    try { last = Number(storage.getItem(META_LAST_SYNC) || 0); }
    catch (error) { last = 0; }
    return Date.now() - last < 5 * 60 * 1000;
  }

  function queueSync(full, delay) {
    if (!accountUser || !sync) return;
    if (syncInFlight) {
      syncAgain = true;
      syncAgainFull = syncAgainFull || !!full;
      return;
    }
    if (syncTimer) global.clearTimeout(syncTimer);
    syncTimer = global.setTimeout(function () {
      syncTimer = null;
      runSync(!!full || !wasFullSyncRecent());
    }, delay || 0);
  }

  function clearAccountState(message) {
    accountUser = null;
    updateTrigger();
    if (dialog) {
      showSignedIn(false);
      byId("qb-auth-status").textContent = message || words().mustLogin;
    }
  }

  function refreshLiveQuizState() {
    var key = global.KEY;
    var questions = global.QS;
    if (!isQuizKey(key) || !storage || !global.S || !Array.isArray(questions) || typeof global.paint !== "function") return;
    try { global.S = JSON.parse(storage.getItem(key) || "{}") || {}; }
    catch (error) { global.S = {}; }
    questions.forEach(function (question) { global.paint(question); });
    if (typeof global.stats === "function") global.stats();
    if (typeof global.sheet === "function") global.sheet();
  }

  function runSync(full) {
    if (!accountUser || !sync || !storage) return Promise.resolve();
    if (syncInFlight) {
      syncAgain = true;
      syncAgainFull = syncAgainFull || !!full;
      return Promise.resolve();
    }
    syncInFlight = true;
    var currentMeta = sync.readMeta(storage);
    var collected = full
      ? sync.collectSnapshot(storage, currentMeta, Date.now())
      : sync.collectPending(storage, currentMeta, Date.now());
    meta = collected.meta;
    persistMeta(meta);
    var records = collected.records;
    if (!full && !records.length) {
      syncInFlight = false;
      return Promise.resolve();
    }

    if (dialog) setSyncStatus(words().syncing);
    return requestJson("/api/progress/sync", "POST", { full: !!full, records: records }).then(function (result) {
      applyingRemote = true;
      try {
        var sentTimes = new Map(records.map(function (record) {
          return [record.storageKey + "\u0000" + record.itemKey, record.updatedAt];
        }));
        var safeRecords = (result.records || []).filter(function (record) {
          var identity = record.storageKey + "\u0000" + record.itemKey;
          var sentAt = sentTimes.get(identity);
          var pending = meta.pending[record.storageKey];
          var currentAt = meta.stamps[record.storageKey] && meta.stamps[record.storageKey][record.itemKey];
          if (pending && Object.prototype.hasOwnProperty.call(pending, record.itemKey) &&
              (sentAt === undefined || pending[record.itemKey] !== sentAt)) return false;
          return sentAt === undefined || !Number.isSafeInteger(currentAt) || currentAt <= sentAt;
        });
        var applied = sync.applyMergedRecords(storage, meta, safeRecords);
        var settled = sync.settle(applied.meta, records, result.records || []);
        persistMeta(settled);
        if (applied.changed) global.dispatchEvent(new global.Event("quizbank:progress-updated"));
      } finally { applyingRemote = false; }
      if (full) {
        try { storage.setItem(META_LAST_SYNC, String(Date.now())); }
        catch (error) {
          if (global.console && global.console.warn) global.console.warn("Could not record the last full progress sync.", error);
        }
      }
      if (dialog) setSyncStatus(words().synced);
    }).catch(function (failure) {
      if (failure && failure.status === 401) clearAccountState(words().mustLogin);
      else if (dialog) setSyncStatus(errorCopy(failure, words().syncWait));
      if (!failure || !failure.status || failure.status >= 500) {
        if (retryTimer) global.clearTimeout(retryTimer);
        retryTimer = global.setTimeout(function () {
          retryTimer = null;
          if (accountUser) queueSync(false, 0);
        }, 30000);
      }
    }).finally(function () {
      syncInFlight = false;
      var again = syncAgain;
      var againFull = syncAgainFull;
      syncAgain = false;
      syncAgainFull = false;
      if (again && accountUser) queueSync(againFull, 0);
    });
  }

  function fetchSession() {
    requestJson("/api/auth/me", "GET").then(function (result) {
      accountUser = result.user;
      updateTrigger();
      if (dialog) showSignedIn(!!accountUser);
      if (accountUser) queueSync(!wasFullSyncRecent(), 0);
    }).catch(function (failure) {
      updateTrigger();
      if (dialog) byId("qb-auth-status").textContent = errorCopy(failure, words().unavailable);
    });
  }

  function logout() {
    var button = byId("qb-logout");
    setBusy(button, true);
    requestJson("/api/auth/logout", "POST", {}).then(function () {
      accountUser = null;
      updateTrigger();
      showSignedIn(false);
      byId("qb-auth-status").textContent = "";
      byId("qb-auth-error").textContent = "";
      if (syncTimer) { global.clearTimeout(syncTimer); syncTimer = null; }
    }).catch(function (failure) {
      setSyncStatus(errorCopy(failure, words().unavailable));
    }).finally(function () { setBusy(button, false); });
  }

  function showDelete() {
    byId("qb-delete-error").textContent = "";
    byId("qb-delete-password").value = "";
    byId("qb-delete-panel").hidden = false;
    byId("qb-delete-password").focus();
  }

  function hideDelete() {
    byId("qb-delete-panel").hidden = true;
    byId("qb-delete-error").textContent = "";
  }

  function deleteAccount(event) {
    event.preventDefault();
    var button = byId("qb-confirm-delete");
    var error = byId("qb-delete-error");
    var password = byId("qb-delete-password").value;
    error.textContent = "";
    if (!accountUser) return;
    setBusy(button, true);
    requestJson("/api/auth/account", "DELETE", { password: password }).then(function () {
      accountUser = null;
      updateTrigger();
      hideDelete();
      byId("qb-delete-password").value = "";
      showSignedIn(false);
      byId("qb-auth-status").textContent = words().deleted;
      setSyncStatus("");
      if (syncTimer) { global.clearTimeout(syncTimer); syncTimer = null; }
      if (retryTimer) { global.clearTimeout(retryTimer); retryTimer = null; }
    }).catch(function (failure) {
      error.textContent = failure && failure.status === 401
        ? words().deleteFailed
        : errorCopy(failure, words().deleteFailed);
    }).finally(function () { setBusy(button, false); });
  }

  global.QuizBankAccount = Object.freeze({ getUser: function () { return accountUser ? { username: accountUser.username } : null; } });

  function startBackgroundSync() {
    global.addEventListener("online", function () { queueSync(false, 0); });
    global.addEventListener("quizbank:progress-updated", refreshLiveQuizState);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && accountUser && !wasFullSyncRecent()) queueSync(true, 0);
    });
    global.setInterval(function () {
      if (accountUser && !wasFullSyncRecent()) queueSync(true, 0);
    }, 60 * 1000);
    if (global.MutationObserver) {
      new MutationObserver(function (mutations) {
        if (mutations.some(function (mutation) { return mutation.attributeName === "data-lang"; })) {
          applyCopy();
          updateTrigger();
        }
      }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
    }
  }

  function initialize() {
    if (!document.getElementById("quizbank-chat-js")) {
      var chatScript = document.createElement("script");
      chatScript.id = "quizbank-chat-js";
      chatScript.type = "module";
      chatScript.src = "/assets/chat.mjs";
      document.head.appendChild(chatScript);
    }
    loadStyles();
    createTrigger();
    makeDialog();
    updateTrigger();
    startBackgroundSync();
    loadSyncModule(function () {
      sync = global.QuizBankProgressSync;
      if (!sync) {
        updateTrigger();
        return;
      }
      installStorageTracking();
      fetchSession();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})(window, document);
