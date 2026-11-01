export const PROMPT_FIELDS = Object.freeze(['identity', 'scope', 'style', 'rules']);
export function validatePrompt(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)
        || Object.keys(value).some(key => !PROMPT_FIELDS.some(field => field === key)))
        throw new Error('提示词字段不正确');
    const input = value;
    const result = {};
    for (const key of PROMPT_FIELDS) {
        const field = input[key];
        if (typeof field !== 'string' || !field.trim() || field.length > 12000) {
            throw new Error('每栏需填写 1–12000 个字符');
        }
        result[key] = field;
    }
    return result;
}
export function buildPrompt(value) {
    const prompt = validatePrompt(value);
    return ['角色身份', '知识范围', '表达风格', '回答规则'].map((label, index) => `${label}\n${prompt[PROMPT_FIELDS[index]]}`).join('\n\n');
}
