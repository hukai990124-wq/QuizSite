const FOOTER_ID = "qb-sigil-footer";
const STYLE_ID = "qb-sigil-footer-css";
const FONT_ID = "qb-sigil-footer-font";

export function mountSigilFooter(doc = document) {
  if (!doc.body || doc.getElementById(FOOTER_ID)) return null;

  if (!doc.getElementById(STYLE_ID)) {
    const stylesheet = doc.createElement("link");
    stylesheet.id = STYLE_ID;
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/assets/sigil-footer.css";
    doc.head.appendChild(stylesheet);
  }

  if (!doc.getElementById(FONT_ID)) {
    const font = doc.createElement("link");
    font.id = FONT_ID;
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap";
    doc.head.appendChild(font);
  }

  const footer = doc.createElement("div");
  footer.id = FOOTER_ID;
  footer.className = "qb-sigil-footer";

  const rights = doc.createElement("span");
  rights.className = "qb-sigil-footer__rights i18n-noloc";
  rights.textContent = "© @HuKai. All rights reserved.";

  const brand = doc.createElement("div");
  brand.className = "qb-sigil-footer__brand";

  const image = doc.createElement("img");
  image.className = "qb-sigil-footer__image";
  image.src = "/assets/sigilHK.png";
  image.alt = "";
  image.loading = "lazy";
  image.setAttribute("aria-hidden", "true");

  const motto = doc.createElement("span");
  motto.className = "qb-sigil-footer__motto i18n-noloc";
  motto.lang = "la";
  motto.textContent = "Omnia Superabo";

  brand.appendChild(image);
  brand.appendChild(motto);
  footer.appendChild(rights);
  footer.appendChild(brand);
  doc.body.appendChild(footer);
  return footer;
}

if (typeof document !== "undefined") mountSigilFooter(document);
