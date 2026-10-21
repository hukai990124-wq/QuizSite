"""Cache machine translations for the supplied AIP bank; never calls the site's AI API."""
import concurrent.futures
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

DATA = Path(__file__).resolve().parent / "data/questions.json"


def translate_batch(texts, language):
    params = [("client", "dict-chrome-ex"), ("sl", "en"), ("tl", language)]
    params += [("q", text) for text in texts]
    url = "https://clients5.google.com/translate_a/t?" + urllib.parse.urlencode(params)
    for attempt in range(5):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=30) as response:
                result = json.load(response)
            if not isinstance(result, list) or len(result) != len(texts) or any(not isinstance(t, str) or not t.strip() for t in result):
                raise ValueError("Translation response has missing fields")
            return result
        except Exception:
            if attempt == 4:
                raise
            time.sleep(1 + attempt)


def translate_question(question):
    fields = [question["question"], *question["options"], question["explanation"]]
    for lang, target in (("zh", "zh-CN"), ("ja", "ja")):
        pending = [field for field in fields if not field.get(lang)]
        while pending:
            batch, size = [], 0
            while pending:
                field = pending[0]
                length = len(urllib.parse.quote_plus(field["en"]))
                if batch and size + length > 5700:
                    break
                batch.append(pending.pop(0))
                size += length
            result = translate_batch([field["en"] for field in batch], target)
            for field, text in zip(batch, result):
                field[lang] = text
    return question


def main():
    questions = json.loads(DATA.read_text(encoding="utf-8"))
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        jobs = {pool.submit(translate_question, question): question for question in questions}
        for i, job in enumerate(concurrent.futures.as_completed(jobs), 1):
            try:
                job.result()
            except Exception as error:
                failures.append((jobs[job]["id"], str(error)))
            if i % 10 == 0 or i == len(jobs):
                DATA.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"Translated {i}/{len(jobs)}; failures {len(failures)}", flush=True)
    if failures:
        raise RuntimeError(failures)


if __name__ == "__main__":
    main()
