function materialText(element: HTMLElement): string {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("button, script, style, audio, .verdict, .qact").forEach(node => node.remove());
  const language = document.documentElement.dataset.lang || "zh";
  const current = language.startsWith("ja") ? "ja" : language.startsWith("en") ? "en" : "zh";
  clone.querySelectorAll(".en, .zh, .ja").forEach(node => {
    const parent = node.parentElement;
    if (!node.classList.contains(current) && parent?.querySelector(`.${current}`)) node.remove();
  });
  return (clone.textContent || "").replace(/[\t ]+/g, " ").replace(/\n\s*\n/g, "\n").trim();
}

export function extractQuestionContext(question: HTMLElement | null | undefined): string {
  if (!question) return "";
  // Image-based viewers provide extracted PDF text instead of UI controls.
  if (question.dataset.chatContext) return question.dataset.chatContext.slice(0, 10000);
  const materials: string[] = [];
  // Shared reading/listening material may precede several question siblings.
  let sibling = question.previousElementSibling as HTMLElement | null;
  while (sibling && !sibling.matches("h1, h2, h3, .ref")) {
    if (sibling.matches(".passage, .transcript, .stimulus, .texts, .dialogue")) materials.unshift(materialText(sibling));
    sibling = sibling.previousElementSibling as HTMLElement | null;
  }
  const group = question.closest<HTMLElement>(".group, .qgroup, .task, .block");
  group?.querySelectorAll<HTMLElement>(".passage, .transcript, .stimulus").forEach(node => {
    if (!question.contains(node)) materials.push(materialText(node));
  });
  const answer = question.dataset.ans || question.dataset.answer || "";
  return [`试卷：${document.title}`, ...new Set(materials), materialText(question), answer ? `题库参考答案：${answer}` : ""]
    .filter(Boolean).join("\n\n").slice(0, 10000);
}
