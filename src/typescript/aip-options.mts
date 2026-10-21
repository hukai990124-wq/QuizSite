// Adapter only: selection and grading remain owned by the shared quiz engine.
const options = [...document.querySelectorAll<HTMLElement>('.q .opt')];
function updateAccessibility(): void {
  for (const option of options) {
    option.setAttribute('aria-checked', String(['sel','ok','bad'].some(state => option.classList.contains(state))));
    option.setAttribute('aria-disabled', String(option.closest('.q')?.classList.contains('done') || false));
  }
}
document.addEventListener('keydown', event => {
  if (!(event.target instanceof HTMLElement) || !['Enter', ' '].includes(event.key)) return;
  const option = event.target.closest<HTMLElement>('.q .opt');
  if (!option) return;
  event.preventDefault();
  event.stopPropagation();
  option.click();
}, true);
const observer = new MutationObserver(updateAccessibility);
for (const option of options) observer.observe(option, {attributes: true, attributeFilter: ['class']});
updateAccessibility();
