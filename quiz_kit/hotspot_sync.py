"""Update downloadable AIF Markdown with the structured hotspot option data.

Question stems and explanations stay unchanged; only the missing option/answer
fields are repaired. The shared browser component uses this same source JSON.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def hotspot_markdown(data):
    lines = ["<!--hotspot:options-->", "**匹配项目 / Items**"]
    lines += [f"{index + 1}. {row}" for index, row in enumerate(data["rows"])]
    lines += ["", "**选项 / Options**"]
    lines += [f"- **{chr(65 + index)}.** {option}" for index, option in enumerate(data["options"])]
    lines += ["<!--/hotspot:options-->", ""]
    return "\n".join(lines)


def main():
    source = json.loads((ROOT / "site/assets/aif-hotspots.json").read_text(encoding="utf-8"))
    updated = 0
    for file in (ROOT / "site/aws-aif/bank").glob("part*.md"):
        original = file.read_text(encoding="utf-8")
        def update(match):
            number, section = match.group(1), match.group(0)
            if number not in source:
                return section
            data = source[number]
            section = re.sub(r"<!--hotspot:options-->.*?<!--/hotspot:options-->\s*", "", section, flags=re.S)
            answer = data["answer"]
            if answer is not None:
                value = " → ".join(f"{index + 1}: {chr(65 + choice)} ({data['options'][choice]})" for index, choice in enumerate(answer))
            else:
                value = "待核对 / Not yet verified — 暂不判分 / Not graded"
            return re.sub(r"\*\*正确答案 / Answer:.*?\*\*", hotspot_markdown(data) + f"**正确答案 / Answer: {value}**", section, count=1)
        revised = re.sub(r"^## Question (\d+)\b.*?(?=^## Question |\Z)", update, original, flags=re.M | re.S)
        if original != revised:
            file.write_text(revised, encoding="utf-8")
            updated += 1
    print(f"Updated {updated} AIF Markdown parts")


if __name__ == "__main__":
    main()
