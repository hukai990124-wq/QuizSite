"""Check the two added 60+20 practice papers and their IPA provenance."""

import json
import re
import unicodedata
from pathlib import Path

import pdfplumber


ROOT = Path(__file__).resolve().parents[2]
EXTRA = ROOT / "site/fe/extra.json"


def test_extra():
    data = json.loads(EXTRA.read_text(encoding="utf-8"))
    assert set(data["sets"]) == {"paper-2-a", "paper-3-a", "paper-2-b", "paper-3-b"}
    for number, month in ((2, "jan"), (3, "jun")):
        exam = data["sets"][f"paper-{number}-a"]
        assert len(exam["questions"]) == 60
        assert [q["number"] for q in exam["questions"]] == list(range(1, 61))
        with pdfplumber.open(ROOT / f"question-banks/fe/raw/2025-{month}-a-ans.pdf") as pdf:
            text = " ".join(page.extract_text() or "" for page in pdf.pages)
        answers = {int(n): a for n, a in re.findall(r"問\s*(\d+)\s*([アイウエ])", text)}
        assert len(answers) == 60
        for q in exam["questions"]:
            assert q["answer"] == answers[q["number"]]
            assert all((ROOT / "site/fe" / image).stat().st_size > 1000 for image in q["images"])
    for number in (2, 3):
        exam = data["sets"][f"paper-{number}-b"]
        assert len(exam["questions"]) == 20
        assert [q["number"] for q in exam["questions"]] == list(range(1, 21))
        assert len({(q["origin"], q["originNumber"]) for q in exam["questions"]}) == 20
        for q in exam["questions"]:
            assert q["answer"] in q["options"]
            assert q["sourcePage"].startswith("https://www.ipa.go.jp/")
            assert all((ROOT / "site/fe" / image).stat().st_size > 1000 for image in q["images"])
    with pdfplumber.open(ROOT / "question-banks/fe/raw/2022-early-b-qs.pdf") as pdf:
        answer_text = unicodedata.normalize("NFKC", pdf.pages[10].extract_text() or "")
    answer_table = answer_text.split("問番号 出題趣旨", 1)[0]
    early_answers = {int(n): a for n, a in re.findall(r"問\s*(\d+)\s*([アイウエオカキクケコ])", answer_table)}
    assert len(early_answers) == 6
    for exam in (data["sets"]["paper-2-b"], data["sets"]["paper-3-b"]):
        for q in exam["questions"]:
            if q["origin"] == "2022-early-b":
                assert q["answer"] == early_answers[q["originNumber"]]
    first = {(q["origin"], q["originNumber"]) for q in data["sets"]["paper-2-b"]["questions"]}
    second = {(q["origin"], q["originNumber"]) for q in data["sets"]["paper-3-b"]["questions"]}
    assert first.isdisjoint(second)
    assert sum(q["origin"] == "2022-b" for q in data["sets"]["paper-3-b"]["questions"]) == 10


if __name__ == "__main__":
    test_extra()
    print("Extra FE papers: two A60 + two B20 verified")
