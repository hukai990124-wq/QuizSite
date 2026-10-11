export function validateHotspot(value) {
    if (!value || typeof value !== "object")
        return null;
    const candidate = value;
    if (candidate.ordered !== undefined && typeof candidate.ordered !== "boolean")
        return null;
    if (candidate.note !== undefined && typeof candidate.note !== "string")
        return null;
    if (candidate.review !== undefined) {
        const review = candidate.review;
        if (!review || typeof review !== 'object' ||
            !['zh', 'en', 'ja'].every(language => typeof review[language] === 'string' && review[language].length > 0) ||
            !Array.isArray(review.sources) || review.sources.length < 1 ||
            !review.sources.every(url => {
                if (typeof url !== 'string')
                    return false;
                try {
                    const source = new URL(url);
                    return source.protocol === 'https:' && ['docs.aws.amazon.com', 'aws.amazon.com'].includes(source.hostname) && !source.username && !source.password;
                }
                catch {
                    return false;
                }
            }))
            return null;
    }
    if (!Array.isArray(candidate.options) || candidate.options.length < 1 || candidate.options.length > 26 ||
        !candidate.options.every(option => typeof option === "string" && option.length > 0) ||
        !Array.isArray(candidate.rows) || candidate.rows.length < 1 || candidate.rows.length > 26 ||
        !candidate.rows.every(row => typeof row === "string" && row.length > 0))
        return null;
    if (candidate.answer !== null && (!Array.isArray(candidate.answer) || candidate.answer.length !== candidate.rows.length ||
        !candidate.answer.every(index => Number.isInteger(index) && index >= 0 && index < candidate.options.length)))
        return null;
    return candidate;
}
export function matchingAnswer(choices, count, unique) {
    if (choices.length !== count || choices.some(choice => !/^[A-Z]$/.test(choice)))
        return "";
    if (unique && new Set(choices).size !== count)
        return "";
    return choices.join(">");
}
