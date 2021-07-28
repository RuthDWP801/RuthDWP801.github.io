class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ruth Vianey Perez Zetina.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
