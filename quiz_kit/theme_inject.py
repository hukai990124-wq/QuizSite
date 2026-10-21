"""Generate the shared QuizSite shell and attach it to published pages."""

import argparse
import re
import shutil
from pathlib import Path


HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
SITE = ROOT / "site"
ASSETS = SITE / "assets"
CSS_ID = "quizsite-theme-css"
JS_ID = "quizsite-theme-js"
CSS_TAG = f'<link rel="stylesheet" href="/assets/quizsite-theme.css" id="{CSS_ID}">'
JS_TAG = f'<script src="/assets/quizsite-theme.js" id="{JS_ID}" defer></script>'


def inject_html(text):
    """Add the theme assets once, preserving the document's newline style."""
    if len(re.findall(r"</head\s*>", text, flags=re.IGNORECASE)) != 1:
        raise ValueError("expected exactly one closing </head>")
    if len(re.findall(r"</body\s*>", text, flags=re.IGNORECASE)) != 1:
        raise ValueError("expected exactly one closing </body>")

    newline_match = re.search(r"\r\n|\r|\n", text)
    newline = newline_match.group(0) if newline_match else ""
    changed = False

    if not re.search(rf'id=["\']{CSS_ID}["\']', text, flags=re.IGNORECASE):
        text = re.sub(
            r"</head\s*>",
            lambda match: CSS_TAG + newline + match.group(0),
            text,
            count=1,
            flags=re.IGNORECASE,
        )
        changed = True

    if not re.search(rf'id=["\']{JS_ID}["\']', text, flags=re.IGNORECASE):
        text = re.sub(
            r"</body\s*>",
            lambda match: JS_TAG + newline + match.group(0),
            text,
            count=1,
            flags=re.IGNORECASE,
        )
        changed = True

    return text, changed


def inject_file(path):
    with path.open("r", encoding="utf-8", newline="") as source:
        original = source.read()
    updated, changed = inject_html(original)
    if changed:
        with path.open("w", encoding="utf-8", newline="") as target:
            target.write(updated)
    return changed


def copy_theme_assets(assets_dir):
    """Use compiled TypeScript JS, not a second hand-maintained implementation."""
    for name in ("quizsite-theme.css", "quizsite-theme.js"):
        source = ASSETS / name if name.endswith(".js") else ROOT / "src/css" / name
        if not source.exists():
            raise FileNotFoundError(f"Missing {source}; run pnpm build first")
        target = assets_dir / name
        if not target.exists() or source.read_bytes() != target.read_bytes():
            shutil.copyfile(source, target)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site-root", type=Path, default=SITE)
    args = parser.parse_args()
    site_root = args.site_root.resolve()
    assets_dir = site_root / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)

    copy_theme_assets(assets_dir)

    pages = sorted(path for path in site_root.rglob("*.html") if path.parent != assets_dir)
    updated = 0
    skipped = 0
    for page in pages:
        if page.relative_to(site_root).as_posix() == "index.html":
            skipped += 1
            continue
        try:
            updated += inject_file(page)
        except ValueError as error:
            raise SystemExit(f"Cannot attach theme to {page}: {error}") from error

    print(f"Shared theme copied to {assets_dir}; updated {updated} of {len(pages)} HTML pages; skipped {skipped} portal page.")


if __name__ == "__main__":
    main()
