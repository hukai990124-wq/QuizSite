"""Translate the pinned practice questions into Chinese only; preserve cached fields."""
import concurrent.futures
import json
import urllib.parse
from pathlib import Path

from translate import translate_batch

DATA = Path(__file__).resolve().parent / "data/open-questions.json"


def translate_question(question):
    fields = [question["question"], *question["options"], *(o["explanation"] for o in question["options"])]
    pending = [f for f in fields if not f.get("zh")]
    while pending:
        batch, size = [], 0
        while pending:
            field = pending[0]
            length = len(urllib.parse.quote_plus(field["en"]))
            if batch and size + length > 5700:
                break
            batch.append(pending.pop(0))
            size += length
        translated = translate_batch([f["en"] for f in batch], "zh-CN")
        for field, text in zip(batch, translated):
            field["zh"] = text


def main():
    bank = json.loads(DATA.read_text(encoding="utf-8"))
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        jobs = {pool.submit(translate_question, q): q for q in bank}
        for index, job in enumerate(concurrent.futures.as_completed(jobs), 1):
            try:
                job.result()
            except Exception as error:
                failures.append((jobs[job]["id"], str(error)))
            if index % 20 == 0 or index == len(jobs):
                DATA.write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"Chinese translation: {index}/{len(bank)}, failures: {len(failures)}", flush=True)
    if failures:
        raise RuntimeError(failures)


if __name__ == "__main__":
    main()
