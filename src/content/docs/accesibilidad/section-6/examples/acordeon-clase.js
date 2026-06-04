class Accordion {
  constructor(container, allowMultiple = true) {
    this.container = container;
    this.allowMultiple = allowMultiple;
    this.buttons = [...container.querySelectorAll('[aria-expanded]')];

    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.toggle(index));
      button.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });
  }

  toggle(index) {
    const button = this.buttons[index];
    const content = document.getElementById(button.getAttribute('aria-controls'));
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Si no permitimos múltiples, cerrar todos los demás
    if (!this.allowMultiple && !isExpanded) {
      this.buttons.forEach((btn, i) => {
        if (i !== index) {
          btn.setAttribute('aria-expanded', 'false');
          const otherContent = document.getElementById(btn.getAttribute('aria-controls'));
          otherContent.hidden = true;
        }
      });
    }

    // Alternar el actual
    button.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
  }

  handleKeydown(e, currentIndex) {
    let newIndex;

    switch(e.key) {
      case 'ArrowDown':
        newIndex = (currentIndex + 1) % this.buttons.length;
        this.buttons[newIndex].focus();
        e.preventDefault();
        break;
      case 'ArrowUp':
        newIndex = currentIndex === 0 ? this.buttons.length - 1 : currentIndex - 1;
        this.buttons[newIndex].focus();
        e.preventDefault();
        break;
      case 'Home':
        this.buttons[0].focus();
        e.preventDefault();
        break;
      case 'End':
        this.buttons[this.buttons.length - 1].focus();
        e.preventDefault();
        break;
    }
  }
}

// Inicializar (allowMultiple: true permite múltiples secciones abiertas)
document.querySelectorAll('.accordion').forEach(el => {
  new Accordion(el, true);
});
