function record(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}
const normalize = (value) => value.replace(/\s+/g, ' ').trim().toUpperCase();
export function isExamCorrect(question, selection) {
    if (question.fill)
        return !!normalize(selection[0] || '') && question.answers.includes(normalize(selection[0] || ''));
    const unique = [...new Set(selection)];
    return !!question.answers.length && unique.length === question.answers.length && unique.every(value => question.answers.includes(value));
}
export function readExamState(raw, questions, now) {
    const state = { exam: { startedAt: now, submitted: false, submittedAt: null }, answers: {} };
    let source;
    try {
        source = raw ? JSON.parse(raw) : null;
    }
    catch {
        return state;
    }
    if (!record(source))
        return state;
    const meta = source.exam;
    if (record(meta)) {
        if (typeof meta.startedAt === 'number' && Number.isSafeInteger(meta.startedAt) && meta.startedAt > 0 && meta.startedAt <= now)
            state.exam.startedAt = meta.startedAt;
        if (meta.submitted === true && typeof meta.submittedAt === 'number' && Number.isSafeInteger(meta.submittedAt) && meta.submittedAt >= state.exam.startedAt && meta.submittedAt <= now) {
            state.exam.submitted = true;
            state.exam.submittedAt = meta.submittedAt;
        }
    }
    for (const q of questions) {
        const entry = source[q.id];
        if (!record(entry) || !Array.isArray(entry.s))
            continue;
        const selected = entry.s.filter((s) => typeof s === 'string');
        const s = q.fill ? selected.slice(0, 1).map(value => value.slice(0, 2000)) : [...new Set(selected.filter(value => /^[A-Z]$/.test(value)))];
        state.answers[q.id] = { s, ok: state.exam.submitted ? isExamCorrect(q, s) : null, revealed: false };
    }
    return state;
}
export function gradeExam(questions, state) {
    let answered = 0, correct = 0;
    for (const q of questions) {
        const s = state.answers[q.id]?.s || [];
        if (s.some(value => value.trim()))
            answered++;
        if (isExamCorrect(q, s))
            correct++;
    }
    return { answered, correct, wrong: answered - correct, unanswered: questions.length - answered, percent: questions.length ? Math.round(correct / questions.length * 100) : 0 };
}
