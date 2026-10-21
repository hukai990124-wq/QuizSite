"""Extract FE question text from the existing ignored IPA PDFs for text-only AI.

Images remain the visual source of truth. Extraction cannot preserve all diagram
geometry or table layout; the chat context explicitly flags that limitation.
Run with the bundled Python (pdfplumber) after the official/extra builders.
"""
import json
import pathlib
import re
import pdfplumber

ROOT = pathlib.Path(__file__).resolve().parents[2]
START = re.compile(r"(?m)^問\s*([0-9０-９]+)\s*")


def question_text(page_text, number):
    headings = list(START.finditer(page_text))
    for index, match in enumerate(headings):
        if int(match.group(1)) == number:
            end = headings[index + 1].start() if index + 1 < len(headings) else len(page_text)
            return page_text[match.start():end].strip()
    raise ValueError(f"Question heading not found: {number}")


def main():
    pages = {}
    materials = {}
    ocr_cache = json.loads((ROOT / "question-banks/fe/raw/chat-ocr-pages-v2.json").read_text(encoding="utf-8-sig"))
    for filename in ("data.json", "extra.json"):
        data = json.loads((ROOT / "site/fe" / filename).read_text(encoding="utf-8"))
        for set_id, exam in data["sets"].items():
            materials[set_id] = {}
            expected_pages = {}
            for item in exam["questions"]:
                for page in item["pages"]:
                    expected_pages.setdefault(page, []).append(item.get("originNumber", item["number"]))
            for q in exam["questions"]:
                prefix = re.fullmatch(r"images/(.+)-p\d+\.jpg", q["images"][0]).group(1)
                if prefix not in pages:
                    with pdfplumber.open(ROOT / "question-banks/fe/raw" / f"{prefix}-qs.pdf") as pdf:
                        pages[prefix] = [page.extract_text() or "" for page in pdf.pages]
                text = "\n".join(pages[prefix][page - 1] for page in q["pages"])
                from_ocr = not text.strip()
                if from_ocr:
                    image_texts = []
                    for image, page in zip(q["images"], q["pages"]):
                        extracted = ocr_cache[pathlib.Path(image).name]
                        headings = list(re.finditer(r"(?m)^問\s*[0-9０-９]+(?:[ \t]+[0-9０-９]+)*[ \t]*", extracted))
                        expected = expected_pages[page]
                        if len(headings) != len(expected):
                            raise ValueError(f"OCR heading count mismatch: {image}, {len(headings)} vs {expected}")
                        # Scan OCR often reads 10 as 19 or 11 as '1 1'. Repair
                        # only headings using the verified page map and order.
                        for heading, original in reversed(list(zip(headings, expected))):
                            extracted = extracted[:heading.start()] + f"問{original} " + extracted[heading.end():]
                        extracted = re.sub(r"(?<=[\u3040-\u30ff\u3400-\u9fff])[ \t]+(?=[\u3040-\u30ff\u3400-\u9fff])", "", extracted)
                        image_texts.append(extracted)
                    text = "\n".join(image_texts)
                try:
                    text = question_text(text, q.get("originNumber", q["number"]))
                except ValueError as error:
                    raise ValueError(f"{set_id}/{q['number']} ({prefix}): {ascii(text[:150])}") from error
                text = re.sub(r"(?m)^\s*[－−-]\s*\d+\s*[－−-]\s*$", "", text).strip()
                if len(text) < 30:
                    raise ValueError(f"Insufficient text: {set_id}/{q['number']}")
                materials[set_id][str(q["number"])] = ("[扫描题面 OCR 文本，可能有识别误差，请核对原图]\n" if from_ocr else "") + text
    target = ROOT / "site/fe/chat-materials.json"
    target.write_text(json.dumps(materials, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Extracted {sum(len(qs) for qs in materials.values())} FE question texts.")


if __name__ == "__main__":
    main()
