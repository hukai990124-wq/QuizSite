"""Build two additional FE A60/B20 practice papers from published IPA PDFs.

The A papers are complete 科目A exemption exams, not CBT exam papers. The B
papers are curated combinations of separately published questions, not
original 20-question exam papers. Source PDFs remain in ignored fe/raw/.
"""

import json
import pathlib
import re
import shutil
import subprocess
import urllib.request

import pdfplumber


ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = ROOT / "fe/raw"
OUT = ROOT / "site/fe"
IMAGES = OUT / "images"
PDFTOPPM = shutil.which("pdftoppm") or shutil.which("pdftoppm.exe")
LABELS = "アイウエオカキクケコ"
BASE = "https://www.ipa.go.jp/shiken/about/gmcbt800000077l9-att/"
SOURCE_PAGE = "https://www.ipa.go.jp/shiken/about/menjo-fe.html"
PAGES = {
    "jan": [3, 3, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 3, 1, 2, 2, 3, 3, 2, 3, 1],
    "jun": [3, 1, 2, 3, 2, 2, 1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 2, 1],
}
DATES = {"jan": "20250126", "jun": "20250608"}
EARLY_URL = "https://www.ipa.go.jp/shiken/syllabus/ps6vr7000000oett-att/fe_kamoku_b_sample.pdf"
EARLY_PAGE = "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20220425.html"
EARLY_PAGES = [[2], [3], [4, 5], [6], [7, 8], [9, 10]]
EARLY_ANSWERS = "カウアイウオ"
EARLY_COUNTS = [7, 4, 6, 4, 4, 10]


def download(url, filename):
    path = RAW / filename
    if not path.exists():
        urllib.request.urlretrieve(url, path)
    return path


def render(source, prefix, page):
    name = f"{prefix}-p{page:02d}.jpg"
    target = IMAGES / name
    if not target.exists():
        subprocess.run([PDFTOPPM, "-f", str(page), "-l", str(page),
                        "-r", "130", "-jpeg", "-jpegopt", "quality=80,optimize=y",
                        "-singlefile", str(source), str(target.with_suffix(""))], check=True)
    return "images/" + name


def build_a(paper, month):
    date = DATES[month]
    question_pdf = BASE + f"tokurei_Mondai_{date}_FE.pdf"
    answer_pdf = BASE + f"tokurei_ans_{date}_FE.pdf"
    source = download(question_pdf, f"2025-{month}-a-qs.pdf")
    answer = download(answer_pdf, f"2025-{month}-a-ans.pdf")
    with pdfplumber.open(answer) as pdf:
        text = " ".join(page.extract_text() or "" for page in pdf.pages)
    answers = {int(number): label for number, label in re.findall(r"問\s*(\d+)\s*([アイウエ])", text)}
    assert len(answers) == 60
    page_numbers = [page for page, count in enumerate(PAGES[month], 4) for _ in range(count)]
    assert len(page_numbers) == 60
    questions = []
    for number, page in enumerate(page_numbers, 1):
        questions.append({"number": number, "originNumber": number, "pages": [page],
                          "images": [render(source, f"2025-{month}-a", page)],
                          "answer": answers[number], "options": list(LABELS[:4]),
                          "sourcePage": SOURCE_PAGE, "questionPdf": question_pdf,
                          "answerPdf": answer_pdf,
                          "sourceAttribution": f"出典：2025年{1 if month == 'jan' else 6}月実施 修了認定に係る試験（基本情報技術者試験に係る問題）"})
    return {"subject": "A", "kind": "exemption", "label": f"第 {paper} 套 · 2025 年{1 if month == 'jan' else 6}月科目 A 免除修了试验",
            "questions": questions}


def build_b(paper, existing, early):
    if paper == 2:
        selections = [(f"{year}-b", n) for year in (2023, 2024, 2025) for n in range(1, 7)] + [("2022-early-b", n) for n in (1, 6)]
    else:
        selections = [("2026-b", n) for n in range(1, 7)] + [("2022-early-b", n) for n in range(2, 6)] + [("2022-b", n) for n in list(range(1, 8)) + [17, 18, 19]]
    questions = []
    for number, (origin, origin_number) in enumerate(selections, 1):
        source = early if origin == "2022-early-b" else existing[origin]
        original = source["questions"][origin_number - 1]
        questions.append({"number": number, "origin": origin, "originNumber": origin_number,
                          "pages": original["pages"], "images": original["images"],
                          "answer": original["answer"], "options": original["options"],
                          "sourcePage": source["sourcePage"], "questionPdf": source["questionPdf"],
                          "answerPdf": source["answerPdf"], "sourceAttribution": source["sourceAttribution"]})
    return {"subject": "B", "kind": "composite", "label": f"第 {paper} 套 · IPA 官方公开题组卷",
            "questions": questions}


def main():
    if not PDFTOPPM:
        raise SystemExit("pdftoppm not found")
    RAW.mkdir(parents=True, exist_ok=True)
    IMAGES.mkdir(parents=True, exist_ok=True)
    existing = json.loads((OUT / "data.json").read_text(encoding="utf-8"))["sets"]
    source = download(EARLY_URL, "2022-early-b-qs.pdf")
    early = {"sourcePage": EARLY_PAGE, "questionPdf": EARLY_URL, "answerPdf": EARLY_URL + "#page=11",
             "sourceAttribution": "出典：基本情報技術者試験 科目B試験サンプル問題",
             "questions": [{"pages": pages, "images": [render(source, "2022-early-b", page) for page in pages],
                            "answer": EARLY_ANSWERS[i], "options": list(LABELS[:EARLY_COUNTS[i]])}
                           for i, pages in enumerate(EARLY_PAGES)]}
    data = {"sets": {"paper-2-a": build_a(2, "jan"), "paper-3-a": build_a(3, "jun"),
                     "paper-2-b": build_b(2, existing, early), "paper-3-b": build_b(3, existing, early)}}
    (OUT / "extra.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Built two extra A60/B20 practice papers")


if __name__ == "__main__":
    main()
