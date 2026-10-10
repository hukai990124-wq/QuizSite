export function submitChatOnEnter(event, submit, enabled) {
  if (event.key !== "Enter" || event.shiftKey || event.isComposing || event.keyCode === 229 || !enabled) return false;
  event.preventDefault();
  submit();
  return true;
}
