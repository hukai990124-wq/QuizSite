"""Import pinned MIT study questions, excluding separately attributed content."""
import hashlib
import json
import re
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
COMMIT = "509c7e42a0da2ad7af4a2ac4ca4df6a0f17ea615"
SOURCE = "https://raw.githubusercontent.com/JeremyEngineer/aws-aip-c01-practice-exam/" + COMMIT


def download(relative):
    request = urllib.request.Request(SOURCE + "/" + relative, headers={"User-Agent": "QuizBank-study-import"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def fingerprint(text):
    return re.sub(r"[^a-z0-9]+", "", text.lower())


def main():
    existing = json.loads(HERE.joinpath("data/questions.json").read_text(encoding="utf-8"))
    seen = {fingerprint(q["question"]["en"]): "pdf-" + q["id"] for q in existing}
    bank, excluded, duplicates, sources = [], [], [], []
    license_text = download("LICENSE").decode("utf-8")
    if "MIT License" not in license_text or "JeremyEngineer" not in license_text:
        raise ValueError("Unexpected source license")
    for tier in ("easy", "hard", "veryhard"):
        content = download(f"questions/questions_{tier}.json")
        raw = json.loads(content)
        sources.append({"tier": tier, "sha256": hashlib.sha256(content).hexdigest(), "count": len(raw["questions"])})
        for q in raw["questions"]:
            source_id = tier + ":" + q["id"]
            if q.get("source"):
                excluded.append({"id": source_id, "source": q["source"]})
                continue
            identity = fingerprint(q["question"])
            if identity in seen:
                duplicates.append({"id": source_id, "matches": seen[identity]})
                continue
            seen[identity] = source_id
            task = raw["tasks"][q["task"]]
            options = [{"letter": chr(65 + i), "en": o["text"], "explanation": {"en": o["explanation"]}}
                       for i, o in enumerate(q["options"])]
            answer = [chr(65 + i) for i, o in enumerate(q["options"]) if o["correct"]]
            if len(options) < 4 or len(options) > 6 or not answer or (q["type"] == "single") != (len(answer) == 1):
                raise ValueError("Invalid source question: " + source_id)
            resources = task["resources"]
            if any(not r["url"].startswith("https://docs.aws.amazon.com/") and not r["url"].startswith("https://aws.amazon.com/") for r in resources):
                raise ValueError("Unexpected reference URL")
            bank.append({"id": "open-aip-" + str(len(bank) + 1).zfill(3), "sourceId": source_id,
                         "tier": tier, "task": q["task"], "domain": task["domain"],
                         "question": {"en": q["question"]}, "options": options, "answer": answer,
                         "resources": resources})
    HERE.joinpath("data/open-questions.json").write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    HERE.joinpath("data/open-source.json").write_text(json.dumps({"repository": "https://github.com/JeremyEngineer/aws-aip-c01-practice-exam", "commit": COMMIT,
        "files": sources, "excluded": excluded, "duplicates": duplicates, "imported": len(bank)}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    HERE.joinpath("LICENSE-JeremyEngineer.txt").write_text(license_text, encoding="utf-8")
    print(json.dumps({"imported": len(bank), "excluded": len(excluded), "duplicates": duplicates}), flush=True)


if __name__ == "__main__":
    main()
