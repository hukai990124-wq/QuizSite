"""Import only visible, horizontal text from the owner's six cropped PDFs."""
import argparse
import hashlib
import json
import logging
import re
from pathlib import Path

import pdfplumber

logging.getLogger("pdfminer").setLevel(logging.ERROR)
HERE = Path(__file__).resolve().parent


def visible_text(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            visible = page.crop(page.bbox).filter(
                lambda obj: obj["object_type"] != "char" or abs(obj.get("matrix", (1, 0))[1]) < .01
            )
            pages.append(visible.extract_text() or "")
    return "\n".join(pages)


def blocks(text):
    starts = list(re.finditer(r"Question\s*#\s*(\d+)\s*Topic\s*1", text))
    return {int(m[1]): text[m.end():starts[i + 1].start() if i + 1 < len(starts) else len(text)].strip()
            for i, m in enumerate(starts)}


def flatten(text):
    return re.sub(r"\s+", " ", text).strip()


def import_bank(folder):
    questions, discussions, sources = {}, {}, []
    for kind, target in (("题目", questions), ("答案讨论", discussions)):
        for path in sorted(folder.glob(f"AIP-C01_{kind}_*.pdf")):
            text = visible_text(path)
            if kind == "答案讨论":
                # Answer-only crops have no question heading; each Correct Answer
                # starts the next record, in the filename's stated sequence.
                start = int(re.search(r"_(\d+)-", path.name)[1])
                markers = list(re.finditer(r"Correct Answer\s*:", text))
                records = {start + i: text[m.start():markers[i + 1].start() if i + 1 < len(markers) else len(text)]
                           for i, m in enumerate(markers)}
            else:
                records = blocks(text)
            overlap = target.keys() & records.keys()
            if overlap:
                raise ValueError(f"Duplicate records in {path.name}: {overlap}")
            target.update(records)
            sources.append({"file": path.name, "sha256": hashlib.sha256(path.read_bytes()).hexdigest(), "count": len(records)})
            print(path.name, len(records), flush=True)
    expected = set(range(1, 137))
    if set(questions) != expected or set(discussions) != expected:
        raise ValueError(f"Missing questions {expected - questions.keys()}; answers {expected - discussions.keys()}")
    bank = []
    for number in sorted(questions):
        raw = questions[number]
        choices = list(re.finditer(r"^([A-F])\.\s+", raw, re.M))
        if len(choices) < 4:
            raise ValueError(f"Q{number}: fewer than four choices")
        options = [{"letter": m[1], "en": flatten(raw[m.end():choices[i + 1].start() if i + 1 < len(choices) else len(raw)])}
                   for i, m in enumerate(choices)]
        discussion = discussions[number]
        answer = list(re.search(r"Correct Answer\s*:\s*([A-F]+)", discussion)[1])
        if not set(answer) <= {o["letter"] for o in options}:
            raise ValueError(f"Q{number}: answer not offered")
        comments = discussion.split("Comments", 1)[-1].strip() if "Comments" in discussion else ""
        comments = re.sub(r"Currently there are no comments.*", "", comments).strip()
        explanation = ""
        for match in re.finditer(r"Selected Answer:\s*([A-F]+)\s*\n(.*?)(?=upvoted\s+\d+\s+times|\Z)", comments, re.S):
            if set(match[1]) == set(answer):
                explanation = match[2].strip()
                break
        if not explanation:
            explanation = "The supplied answer key selects " + ", ".join(answer) + ". " + " ".join(o["en"] for o in options if o["letter"] in answer)
        bank.append({"id": f"aip-{number:03d}", "number": number,
                     "question": {"en": flatten(raw[:choices[0].start()])},
                     "options": options, "answer": answer,
                     "explanation": {"en": explanation}, "discussion": comments})
    HERE.joinpath("data").mkdir(exist_ok=True)
    HERE.joinpath("data/questions.json").write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    HERE.joinpath("data/sources.json").write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Imported", len(bank), "questions", flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("folder", type=Path)
    import_bank(parser.parse_args().folder)
