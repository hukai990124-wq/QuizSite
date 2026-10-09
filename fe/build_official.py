"""Build the FE viewer from IPA's 2022 sample and 2023–2026 public PDFs.

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
    2022: "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_",
    2023: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_",
    2024: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_",
    2025: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_",
    2026: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_",
}
SOURCE_PAGES = {
    2022: "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
    2023: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
    2024: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
    2025: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
    2026: "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
}

def single_page_questions(first_page, counts):
    """Expand question counts on consecutive PDF pages to per-question page lists."""
    return [[page] for page, count in enumerate(counts, first_page) for _ in range(count)]


# Each entry is the original PDF's one-based page number(s) for that question.
# Shared pages intentionally appear for more than one 科目A question.
PAGES = {
    (2022, "a"): single_page_questions(4, [2, 2, 1, 1, 2, 3, 2, 1, 2, 3, 3, 2, 4, 2, 3, 2, 4, 3, 2, 3, 2, 2, 2, 2, 3, 2]),
    (2023, "a"): single_page_questions(2, [2, 2, 2, 3, 1, 2, 2, 2, 2, 2]),
    (2024, "a"): [[2], [2], [3], [3], [4], [4], [4], [5], [5], [5], [6], [6], [6], [7], [7], [8], [8], [8], [9], [9]],
    (2025, "a"): [[2], [2], [3], [3], [4], [5], [5], [6], [6], [6], [7], [7], [7], [8], [8], [9], [9], [9], [10], [10]],
    (2026, "a"): [[4], [4], [5], [5], [6], [6], [7], [7], [8], [8], [8], [9], [9], [10], [10], [11], [11], [12], [12], [13]],
    (2022, "b"): [[4], [5], [6], [7], [8], [9], [10], [12, 13], [14, 15], [16, 17], [18], [20, 21], [22], [23], [24, 25], [26, 27], [28, 29], [30, 31], [32, 33], [34, 35]],
    (2023, "b"): [[4], [5], [6, 7], [8, 9], [10, 11], [12, 13]],
    (2024, "b"): [[4], [5], [6, 7], [8, 9], [10, 11, 12], [14, 15]],
    (2025, "b"): [[4, 5], [6], [8, 9], [10], [12, 13], [14, 15]],
    (2026, "b"): [[4], [5], [6], [8, 9], [10, 11], [12, 13]],
}
ANSWERS = {
    (2022, "a"): "エエエアイエイウエウウイエエエアエエエエアイアイアエイエアアエアウウイアエイイイウエウエイエエイアアエアエエイエウイイウ",
    (2023, "a"): "ウウエエイウイエウウエウエウエイウウエア",
    (2024, "a"): "ウエイエウアウウウエウエウウエエアエエア",
    (2025, "a"): "エイイウアウエエウアウエエエウエイエエイ",
    (2026, "a"): "イウイイイイエアウウアウアエウアイアアイ",
    (2022, "b"): "カウカエオアカエウカアエウクアクカエエカ",
    (2023, "b"): "アクエエエア",
    (2024, "b"): "イエエイオウ",
    (2025, "b"): "カアイクオク",
    (2026, "b"): "エカアエイケ",
}
OPTION_COUNTS_B = {
    2022: [6, 5, 7, 4, 7, 4, 6, 4, 4, 6, 4, 4, 4, 8, 4, 9, 10, 10, 5, 7],
    2023: [4, 8, 4, 5, 9, 4],
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
    for year in (2022, 2023, 2024, 2025, 2026):
        for subject in ("a", "b"):
            base = BASES[year] + subject + ("_set_sample_" if year == 2022 else "_")
            question_url, answer_url = base + "qs.pdf", base + "ans.pdf"
            source = RAW / f"{year}-{subject}-qs.pdf"
            answer_source = RAW / f"{year}-{subject}-ans.pdf"
            for url, target in ((question_url, source), (answer_url, answer_source)):
                if not target.exists():
                    urllib.request.urlretrieve(url, target)
            pages = PAGES[year, subject]
            answers = ANSWERS[year, subject]
            expected_count = (60 if subject == "a" else 20) if year == 2022 else (20 if subject == "a" else 6)
            assert len(pages) == len(answers) == expected_count
            option_counts = [4] * len(pages) if subject == "a" else OPTION_COUNTS_B[year]
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
                "year": year, "subject": subject.upper(), "kind": "sample" if year == 2022 else "public",
                "sourceAttribution": (f"出典：基本情報技術者試験（科目{subject.upper()}試験） サンプル問題セット"
                                      if year == 2022 else f"出典：{year}年度 基本情報技術者試験 科目{subject.upper()} 公開問題"),
                "sourcePage": SOURCE_PAGES[year],
                "questionPdf": question_url, "answerPdf": answer_url, "questions": questions,
            }
    (OUT / "data.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Built {sum(len(x['questions']) for x in data['sets'].values())} questions across {len(data['sets'])} sets")


if __name__ == "__main__":
    main()
