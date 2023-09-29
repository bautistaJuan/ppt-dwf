import { state } from "../../state";
import { Jugada } from "../../state";
customElements.define(
  "my-selection",
  class Hands extends HTMLElement {
    shadow: ShadowRoot;
    mySelection: Jugada;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      state.subscribe(() => {
        this.render();
      });
      this.render();
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.innerHTML = `
        .piedra, .papel, .tijera{
            width: 80px;
            height: 60px;
            font-size: 20px;
            padding: 5px;
            background: blue;
            font-weight: bold;
            color : #fff;
          }
          `;
      this.shadow.appendChild(style);
      //   this.render();
    }
    render() {
      this.shadow.innerHTML = `
        <h1>Selecciona una mano</h1>
        <button type="button" class="piedra" target="piedra">Piedra</button>
        <button type="button" class="tijera" target="tijera">Tijera</button>
        <button type="button" class="papel" target="papel">Papel</button>
        `;
      const btn = this.shadow.querySelectorAll("button");
      for (const hand of btn) {
        hand.addEventListener("click", e => {
          const btnOption: any = e.target;
          state.setMove(btnOption.textContent);
        });
      }
    }
  }
);
