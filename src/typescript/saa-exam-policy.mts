/** AWS SAA-C03 response types; applied only to random SAA exams. */
export function isSaaExamQuestion(answers:readonly string[], options:readonly string[], kind=''):boolean {
  if (kind || !answers.length || new Set(answers).size !== answers.length || new Set(options).size !== options.length) return false;
  if (!options.every(letter=>/^[A-Z]$/.test(letter)) || !answers.every(letter=>options.includes(letter))) return false;
  return answers.length === 1 ? options.length === 4 : options.length >= 5;
}
