"""Render original TypeScript review questions using the existing CSS review UI."""
import json
from pathlib import Path

from build_css_review import render
import i18n_inject

ROOT = Path(__file__).resolve().parents[2]
DESCRIPTION = "按 strict 模式审查；第 28–29 题注明额外配置。示例只展示，不会执行。"


def build():
    data = json.loads(ROOT.joinpath("question-banks/programming/typescript-review.json").read_text(encoding="utf-8"))
    if len(data) != 30:
        raise ValueError("Expected 30 TypeScript review questions")
    for question in data:
        for field in [question["prompt"], question["explanation"], *question["options"]]:
            if any(not field.get(lang, "").strip() for lang in ("en", "zh", "ja")):
                raise ValueError(f"Missing translation: {question['id']}")
    page = render(data, name="TypeScript", prefix="typescript", description=DESCRIPTION, source_name="TypeScript Handbook")
    target = ROOT / "site/programming/typescript.html"
    target.write_text(page, encoding="utf-8", newline="\n")
    i18n_inject.build_dict_js()
    i18n_inject.inject(str(target))
    print("Generated 30 TypeScript code review questions")


if __name__ == "__main__":
    build()
