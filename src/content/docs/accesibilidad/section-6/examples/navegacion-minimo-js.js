document.querySelectorAll('[aria-expanded]').forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const submenu = document.getElementById(button.getAttribute('aria-controls'));

    button.setAttribute('aria-expanded', !isExpanded);
    submenu.hidden = isExpanded;
  });
});
