export const BACK_TO_TOP_THRESHOLD = 320;

export function shouldShowBackToTop(scrollPosition) {
  return Number.isFinite(scrollPosition) && scrollPosition >= BACK_TO_TOP_THRESHOLD;
}

function getLabel() {
  const language = String(
    document.documentElement.getAttribute("data-lang") ||
    document.documentElement.lang || "zh-CN"
  ).toLowerCase();
  if (language.startsWith("ja")) return "ページの先頭へ戻る";
  if (language.startsWith("en")) return "Back to top";
  return "返回顶部";
}

function mountBackToTop() {
  if (!document.body || document.getElementById("quizbank-back-to-top")) return;

  if (!document.getElementById("quizbank-back-to-top-css")) {
    const stylesheet = document.createElement("link");
    stylesheet.id = "quizbank-back-to-top-css";
    stylesheet.rel = "stylesheet";
    stylesheet.href = new URL("./back-to-top.css", import.meta.url).href;
    document.head.appendChild(stylesheet);
  }

  const button = document.createElement("button");
  button.id = "quizbank-back-to-top";
  button.className = "qb-back-to-top";
  button.type = "button";
  button.hidden = true;

  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↑";
  button.appendChild(arrow);

  function updateLabel() {
    const label = getLabel();
    button.setAttribute("aria-label", label);
    button.title = label;
  }

  function updateVisibility() {
    button.hidden = !shouldShowBackToTop(window.scrollY);
  }

  updateLabel();
  button.addEventListener("click", function () {
    const reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
  window.addEventListener("scroll", updateVisibility, { passive: true });
  document.body.appendChild(button);
  updateVisibility();

  if (window.MutationObserver) {
    const languageObserver = new MutationObserver(updateLabel);
    languageObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "data-lang"],
    });
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBackToTop, { once: true });
  } else {
    mountBackToTop();
  }
}
