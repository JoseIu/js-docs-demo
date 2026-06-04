class AccessibleModal {
  constructor(modalElement) {
    this.modal = modalElement;
    this.overlay = document.querySelector('.modal-overlay');
    this.triggerElement = null;
    this.focusableElements = null;
    this.firstFocusable = null;
    this.lastFocusable = null;

    // Elementos enfocables
    this.focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');
  }

  open(triggerElement) {
    // Guardar referencia al elemento que abrió el modal
    this.triggerElement = triggerElement || document.activeElement;

    // Mostrar modal y overlay
    this.modal.hidden = false;
    if (this.overlay) this.overlay.hidden = false;

    // Ocultar contenido de fondo (respaldo para navegadores antiguos)
    document.body.setAttribute('aria-hidden', 'true');
    this.modal.removeAttribute('aria-hidden');

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    // Obtener elementos enfocables
    this.updateFocusableElements();

    // Foco inicial (primer elemento o el modal mismo)
    if (this.firstFocusable) {
      this.firstFocusable.focus();
    } else {
      this.modal.tabIndex = -1;
      this.modal.focus();
    }

    // Event listeners
    this.modal.addEventListener('keydown', this.handleKeydown);
    if (this.overlay) {
      this.overlay.addEventListener('click', this.close);
    }
  }

  close = () => {
    // Ocultar modal
    this.modal.hidden = true;
    if (this.overlay) this.overlay.hidden = true;

    // Restaurar contenido de fondo
    document.body.removeAttribute('aria-hidden');
    document.body.style.overflow = '';

    // Devolver foco al elemento que abrió el modal
    if (this.triggerElement) {
      this.triggerElement.focus();
    }

    // Limpiar event listeners
    this.modal.removeEventListener('keydown', this.handleKeydown);
    if (this.overlay) {
      this.overlay.removeEventListener('click', this.close);
    }
  }

  handleKeydown = (e) => {
    // Cerrar con Escape
    if (e.key === 'Escape') {
      this.close();
      return;
    }

    // Focus trap con Tab
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab (hacia atrás)
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else {
        // Tab (hacia adelante)
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }
  }

  updateFocusableElements() {
    this.focusableElements = [
      ...this.modal.querySelectorAll(this.focusableSelectors)
    ];
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
  }
}

// Uso
const modal = new AccessibleModal(document.querySelector('[role="dialog"]'));

document.getElementById('open-modal').addEventListener('click', function() {
  modal.open(this);
});

// Botones de cerrar
document.querySelectorAll('.modal-close, #cancel-btn').forEach(btn => {
  btn.addEventListener('click', () => modal.close());
});

document.getElementById('confirm-btn').addEventListener('click', () => {
  // Realizar acción
  console.log('Acción confirmada');
  modal.close();
});
