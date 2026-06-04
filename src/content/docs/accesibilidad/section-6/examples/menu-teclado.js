const button = document.getElementById('menu-button');
const menu = document.getElementById('menu-list');
const items = menu.querySelectorAll('[role="menuitem"]');
let currentIndex = -1;

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
  menu.hidden = isOpen;
  if (!isOpen) {
    items[0].focus();
    currentIndex = 0;
  }
});

menu.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].focus();
      break;
    case 'ArrowUp':
      e.preventDefault();
      currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
      items[currentIndex].focus();
      break;
    case 'Escape':
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      button.focus();
      break;
    case 'Enter':
      // Ejecutar acción del item
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      break;
  }
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== button) {
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }
});
