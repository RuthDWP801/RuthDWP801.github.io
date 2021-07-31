class MiFooter
extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>&copy; 2021 Ruth Vianey Perez Zetina.</p>`;
  }
}

customElements.define("mi-footer", MiFooter);
