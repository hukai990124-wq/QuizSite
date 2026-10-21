export function submitChatOnEnter(event: KeyboardEvent, submit: () => void, enabled: boolean): boolean {
  if (event.key !== "Enter" || event.shiftKey || event.isComposing || event.keyCode === 229 || !enabled) return false;
  event.preventDefault();
  submit();
  return true;
}
