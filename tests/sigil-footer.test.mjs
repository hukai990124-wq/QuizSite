import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { mountSigilFooter } from "../site/assets/sigil-footer.mjs";

const siteDirectory = fileURLToPath(new URL("../site/", import.meta.url));

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.attributes = {};
    this.id = "";
    this.className = "";
    this.textContent = "";
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }
}

function createDocument() {
  const document = {
    head: new FakeElement("head"),
    body: new FakeElement("body"),
    createElement: (tagName) => new FakeElement(tagName),
    getElementById(id) {
      const find = (element) => {
        if (element.id === id) return element;
        for (const child of element.children) {
          const match = find(child);
          if (match) return match;
        }
        return null;
      };
      return find(this.head) || find(this.body);
    },
  };
  return document;
}

test("mounts the personal crest and Latin motto at the document bottom", () => {
  const document = createDocument();
  const existing = document.body.appendChild(new FakeElement("main"));

  const footer = mountSigilFooter(document);

  assert.equal(footer.id, "qb-sigil-footer");
  assert.equal(document.body.children.at(-2), existing);
  assert.equal(document.body.children.at(-1), footer);
  const [rights, brand] = footer.children;
  const [image, motto] = brand.children;
  assert.equal(rights.className, "qb-sigil-footer__rights i18n-noloc");
  assert.equal(rights.textContent, "© @HuKai. All rights reserved.");
  assert.equal(brand.className, "qb-sigil-footer__brand");
  assert.equal(image.src, "/assets/sigilHK.png");
  assert.equal(image.attributes["aria-hidden"], "true");
  assert.equal(motto.textContent, "Omnia Superabo");
  assert.equal(motto.lang, "la");
  assert.ok(document.head.children.some((element) => element.href === "/assets/sigil-footer.css"));
  assert.ok(document.head.children.some((element) => element.href.startsWith("https://fonts.googleapis.com/")));
});

test("sigil footer stays static and keeps the rights notice on the left", async () => {
  const stylesheet = await readFile(`${siteDirectory}assets/sigil-footer.css`, "utf8");

  assert.doesNotMatch(stylesheet, /animation|@keyframes|filter\s*:/i);
  assert.match(stylesheet, /\.qb-sigil-footer__rights\s*\{[^}]*justify-self:\s*start/s);
  assert.match(stylesheet, /@media\s*\(max-width:\s*600px\)/);
});

test("does not add duplicate crest footers or stylesheets", () => {
  const document = createDocument();

  mountSigilFooter(document);
  const firstFooter = document.body.children[0];
  const result = mountSigilFooter(document);

  assert.equal(result, null);
  assert.equal(document.body.children.length, 1);
  assert.equal(document.body.children[0], firstFooter);
  assert.equal(document.head.children.length, 2);
});

test("the homepage and shared quiz shell both load the crest footer", async () => {
  const homepage = await readFile(`${siteDirectory}index.html`, "utf8");
  const sharedTheme = await readFile(`${siteDirectory}assets/quizsite-theme.js`, "utf8");

  assert.match(homepage, /\/assets\/sigil-footer\.mjs/);
  assert.match(sharedTheme, /\/assets\/sigil-footer\.mjs/);
});
