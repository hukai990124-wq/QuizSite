"""Build the FE public-question viewer from IPA's official 2024–2026 PDFs.

Source PDFs stay in ignored fe/raw/. The published site contains page images,
answer keys, and links back to IPA; it does not claim to contain full CBT papers.
Requires Poppler pdftoppm. Run from the repository root.
"""

import json
import pathlib
import shutil
import subprocess
import urllib.request


ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = ROOT / "fe" / "raw"
OUT = ROOT / "site" / "fe"
IMAGES = OUT / "images"
PDFTOPPM = shutil.which("pdftoppm") or shutil.which("pdftoppm.exe")
BASES = {
    2024: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_",
    2025: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_",
    2026: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_",
}
SOURCE_PAGES = {
    2024: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
    2025: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
    2026: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
}

# Each entry is the original PDF's one-based page number(s) for that question.
# Shared pages intentionally appear for more than one 科目A question.
PAGES = {
    (2024, "a"): [[2], [2], [3], [3], [4], [4], [4], [5], [5], [5], [6], [6], [6], [7], [7], [8], [8], [8], [9], [9]],
    (2025, "a"): [[2], [2], [3], [3], [4], [5], [5], [6], [6], [6], [7], [7], [7], [8], [8], [9], [9], [9], [10], [10]],
    (2026, "a"): [[4], [4], [5], [5], [6], [6], [7], [7], [8], [8], [8], [9], [9], [10], [10], [11], [11], [12], [12], [13]],
    (2024, "b"): [[4], [5], [6, 7], [8, 9], [10, 11, 12], [14, 15]],
    (2025, "b"): [[4, 5], [6], [8, 9], [10], [12, 13], [14, 15]],
    (2026, "b"): [[4], [5], [6], [8, 9], [10, 11], [12, 13]],
}
ANSWERS = {
    (2024, "a"): "ウエイエウアウウウエウエウウエエアエエア",
    (2025, "a"): "エイイウアウエエウアウエエエウエイエエイ",
    (2026, "a"): "イウイイイイエアウウアウアエウアイアアイ",
    (2024, "b"): "イエエイオウ",
    (2025, "b"): "カアイクオク",
    (2026, "b"): "エカアエイケ",
}
OPTION_COUNTS_B = {
    2024: [6, 4, 6, 4, 6, 5],
    2025: [6, 6, 4, 10, 7, 10],
    2026: [4, 6, 8, 4, 4, 10],
}
LABELS = "アイウエオカキクケコ"


def main():
    RAW.mkdir(parents=True, exist_ok=True)
    IMAGES.mkdir(parents=True, exist_ok=True)
    if not PDFTOPPM:
        raise SystemExit("pdftoppm not found on PATH")
    data = {"attribution": "© 独立行政法人情報処理推進機構 (IPA)", "sets": {}}
    for year in (2024, 2025, 2026):
        for subject in ("a", "b"):
            base = BASES[year] + subject + "_"
            question_url, answer_url = base + "qs.pdf", base + "ans.pdf"
            source = RAW / f"{year}-{subject}-qs.pdf"
            answer_source = RAW / f"{year}-{subject}-ans.pdf"
            for url, target in ((question_url, source), (answer_url, answer_source)):
                if not target.exists():
                    urllib.request.urlretrieve(url, target)
            pages = PAGES[year, subject]
            answers = ANSWERS[year, subject]
            assert len(pages) == len(answers) == (20 if subject == "a" else 6)
            option_counts = [4] * 20 if subject == "a" else OPTION_COUNTS_B[year]
            questions = []
            for number, (page_numbers, answer, count) in enumerate(zip(pages, answers, option_counts), 1):
                assert answer in LABELS[:count], (year, subject, number, answer)
                images = []
                for page in page_numbers:
                    image_name = f"{year}-{subject}-p{page:02d}.jpg"
                    target = IMAGES / image_name
                    if not target.exists():
                        subprocess.run([
                            PDFTOPPM, "-f", str(page), "-l", str(page),
                            "-r", "130", "-jpeg", "-jpegopt", "quality=80,optimize=y",
                            "-singlefile", str(source), str(target.with_suffix("")),
                        ], check=True)
                    images.append("images/" + image_name)
                questions.append({"number": number, "pages": page_numbers, "images": images,
                                  "answer": answer, "options": list(LABELS[:count])})
            data["sets"][f"{year}-{subject}"] = {
                "year": year, "subject": subject.upper(), "sourcePage": SOURCE_PAGES[year],
                "questionPdf": question_url, "answerPdf": answer_url, "questions": questions,
            }
    (OUT / "data.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Built {sum(len(x['questions']) for x in data['sets'].values())} questions across {len(data['sets'])} sets")


if __name__ == "__main__":
    main()
