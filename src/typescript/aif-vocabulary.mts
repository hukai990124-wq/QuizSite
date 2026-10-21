// Native buttons keep the shared quiz engine's scoring and persistence intact.
// Enter on a choice selects it; it must not trigger the engine's submit shortcut.
document.querySelectorAll<HTMLButtonElement>('.vocab-pick').forEach(button => {
  button.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') event.stopPropagation();
  });
});

function updateChoices(): void {
  document.querySelectorAll<HTMLButtonElement>('.vocab-pick').forEach(button => {
    const option = button.closest('li.opt');
    button.setAttribute('aria-pressed', String(
      ['sel', 'ok', 'bad'].some(state => option?.classList.contains(state))
    ));
    button.disabled = button.closest('.q')?.classList.contains('done') || false;
  });
}
updateChoices();
new MutationObserver(updateChoices).observe(document.body, {
  subtree: true, attributes: true, attributeFilter: ['class']
});
