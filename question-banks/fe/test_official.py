"""Verify the published FE bank against downloaded IPA source PDFs."""

import json
import pathlib
import re
import unicodedata

import pdfplumber


ROOT = pathlib.Path(__file__).resolve().parents[2]
DATA = json.loads((ROOT / "site/fe/data.json").read_text(encoding="utf-8"))


def normal(text):
    return unicodedata.normalize("NFKC", text)


def test_sets():
    assert len(DATA["sets"]) == 10
    for key, exam in DATA["sets"].items():
        year, subject = key.split("-")
        raw = ROOT / "question-banks/fe/raw" / f"{year}-{subject}-qs.pdf"
        answer = ROOT / "question-banks/fe/raw" / f"{year}-{subject}-ans.pdf"
        with pdfplumber.open(raw) as pdf, pdfplumber.open(answer) as answer_pdf:
            answer_text = normal(" ".join(page.extract_text() or "" for page in answer_pdf.pages))
            expected = {
                int(number): label
                for number, label in re.findall(r"問\s*(\d+)\s*([アイウエオカキクケコ])", answer_text)
            }
            questions = exam["questions"]
            expected_count = (60 if subject == "a" else 20) if year == "2022" else (20 if subject == "a" else 6)
            assert len(questions) == expected_count
            assert exam["kind"] == ("sample" if year == "2022" else "public")
            assert len(expected) == len(questions), key
            for question in questions:
                number = question["number"]
                assert expected[number] == question["answer"], (key, number)
                assert question["answer"] in question["options"]
                assert len(question["pages"]) == len(question["images"])
                first_page = normal(pdf.pages[question["pages"][0] - 1].extract_text() or "")
                assert re.search(r"問\s*" + str(number) + r"\b", first_page), (key, number)
                for page_number, image in zip(question["pages"], question["images"]):
                    assert 1 <= page_number <= len(pdf.pages)
                    assert (ROOT / "site/fe" / image).stat().st_size > 1000


if __name__ == "__main__":
    test_sets()
    print("10 sets / 184 questions match IPA source PDFs")
