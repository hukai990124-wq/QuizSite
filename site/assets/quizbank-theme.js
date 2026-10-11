"use strict";
(function () {
    "use strict";
    if (!document.body)
        return;
    function updateReportHomeLanguage() {
        var currentLang = document.documentElement.getAttribute("data-lang") || "zh";
        document.querySelectorAll(".qb-report-home").forEach(function (link) {
            link.textContent = currentLang === "ja" ? "ホームに戻る" : currentLang === "en" ? "Back to home" : "回到主页";
        });
    }
    function mountReportHome() {
        document.querySelectorAll(".report .row").forEach(function (row) {
            if (row.querySelector(".qb-report-home"))
                return;
            var link = document.createElement("a");
            link.href = "/";
            link.className = "qb-report-home i18n-noloc";
            row.appendChild(link);
        });
        updateReportHomeLanguage();
    }
    mountReportHome();
    // Random papers replace their document and some render their report later.
    new MutationObserver(function (mutations) {
        if (mutations.some(function (mutation) {
            return Array.from(mutation.addedNodes).some(function (node) { return node instanceof HTMLElement; });
        }))
            mountReportHome();
    }).observe(document.body, { childList: true, subtree: true });
    document.addEventListener("quizbank:language-changed", updateReportHomeLanguage);
    if (/\/aws-aif\/bank\/part\d+/.test(location.pathname)) {
        var hotspotScript = document.createElement("script");
        hotspotScript.type = "module";
        hotspotScript.src = "/assets/aif-hotspots.mjs";
        document.head.appendChild(hotspotScript);
    }
    if (!document.getElementById("quizbank-back-to-top-js")) {
        var backToTopScript = document.createElement("script");
        backToTopScript.id = "quizbank-back-to-top-js";
        backToTopScript.type = "module";
        backToTopScript.src = "/assets/back-to-top.mjs";
        document.head.appendChild(backToTopScript);
    }
    if (!document.getElementById("quizbank-account-js")) {
        var accountScript = document.createElement("script");
        accountScript.id = "quizbank-account-js";
        accountScript.src = "/assets/account.js";
        accountScript.defer = true;
        document.head.appendChild(accountScript);
    }
    if (document.querySelector(".qb-sitebar"))
        return;
    var lang = String(document.documentElement.getAttribute("data-lang") ||
        document.documentElement.lang || "zh-CN").toLowerCase();
    var homeLabel = lang.indexOf("ja") === 0
        ? "問題一覧"
        : lang.indexOf("en") === 0
            ? "Question bank"
            : "题库总览";
    var heading = document.querySelector("h1");
    var home = document.createElement("a");
    var homeText = document.createElement("span");
    var brand = document.createElement("div");
    var mark = document.createElement("span");
    var name = document.createElement("span");
    var title = document.createElement("span");
    var inner = document.createElement("div");
    var header = document.createElement("header");
    function hideLink(link) {
        link.hidden = true;
        link.style.setProperty("display", "none", "important");
    }
    function refreshTitle() {
        var value = heading ? heading.textContent : document.title;
        title.textContent = String(value || "Practice").replace(/\s+/g, " ").trim();
    }
    home.href = "/";
    home.className = "qb-sitebar__home i18n-noloc";
    home.setAttribute("aria-label", homeLabel);
    homeText.className = "i18n-noloc";
    homeText.textContent = "← " + homeLabel;
    home.appendChild(homeText);
    function updateHomeLanguage() {
        var currentLang = document.documentElement.getAttribute("data-lang") || "zh";
        var label = currentLang === "ja" ? "問題一覧" : currentLang === "en" ? "Question bank" : "题库总览";
        homeText.textContent = "← " + label;
        home.setAttribute("aria-label", label);
    }
    document.addEventListener("quizbank:language-changed", updateHomeLanguage);
    updateHomeLanguage();
    brand.className = "qb-sitebar__brand";
    mark.className = "qb-sitebar__mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "Q";
    name.textContent = "QuizBank";
    brand.appendChild(mark);
    brand.appendChild(name);
    title.className = "qb-sitebar__title";
    refreshTitle();
    inner.className = "qb-sitebar__inner";
    inner.appendChild(brand);
    inner.appendChild(title);
    inner.appendChild(home);
    header.className = "qb-sitebar";
    header.appendChild(inner);
    document.body.insertBefore(header, document.body.firstChild);
    document.querySelectorAll('a[title*="题库总览"]').forEach(function (link) {
        if (!link.closest(".qb-sitebar") && !link.closest(".toolbar")) {
            hideLink(link);
        }
    });
    document.querySelectorAll("a.back").forEach(function (link) {
        var target;
        try {
            target = new URL(link.href, window.location.href);
        }
        catch (error) {
            return;
        }
        if ((target.pathname === "/" || target.pathname === "/index.html") &&
            /题库总览|question bank/i.test(link.textContent || "")) {
            hideLink(link);
        }
    });
    if (heading && window.MutationObserver) {
        new MutationObserver(refreshTitle).observe(heading, {
            childList: true,
            characterData: true,
            subtree: true
        });
    }
})();
