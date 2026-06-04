class Tabs {
  constructor(container) {
    this.tablist = container.querySelector('[role="tablist"]');
    this.tabs = [...this.tablist.querySelectorAll('[role="tab"]')];
    this.panels = [...container.querySelectorAll('[role="tabpanel"]')];

    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.activateTab(index));
      tab.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });
  }

  activateTab(index) {
    // Desactivar todos los tabs
    this.tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', i === index);
      tab.tabIndex = i === index ? 0 : -1;
    });

    // Mostrar/ocultar paneles
    this.panels.forEach((panel, i) => {
      panel.hidden = i !== index;
    });

    // Foco en el tab activado
    this.tabs[index].focus();
  }

  handleKeydown(e, currentIndex) {
    let newIndex;

    switch(e.key) {
      case 'ArrowRight':
        newIndex = (currentIndex + 1) % this.tabs.length;
        this.activateTab(newIndex);
        e.preventDefault();
        break;
      case 'ArrowLeft':
        newIndex = currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
        this.activateTab(newIndex);
        e.preventDefault();
        break;
      case 'Home':
        this.activateTab(0);
        e.preventDefault();
        break;
      case 'End':
        this.activateTab(this.tabs.length - 1);
        e.preventDefault();
        break;
    }
  }
}

// Inicializar
document.querySelectorAll('.tabs').forEach(el => new Tabs(el));
