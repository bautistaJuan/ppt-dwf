customElements.define(
  "my-button",
  class StartButton extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.innerHTML = `
        .button {
            color: #D8FCFC;
            text-align: center;
            font-family: 'Odibee Sans';
            font-size: 45px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.25px;
            width: 322px;
            height: 87px;
            flex-shrink: 0;
            border-radius: 10px;
            border: 10px solid #001997;
            background: #006CFC;
        }
        `;
      this.shadow.appendChild(style);
    }
    render() {
      this.shadow.innerHTML = `
         <button class="button" type="button">${this.textContent}</button>
        `;
    }
  }
);
