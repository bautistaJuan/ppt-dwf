import { state } from "../../state";

customElements.define(
  "my-hands",
  class Hands extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    connectedCallback() {
      const styleHands = document.createElement("style");
      styleHands.innerHTML = `
      .piedra,
      .papel,
      .tijera {
        height: 150px; 
        margin-right: 5px;
      `;
      this.shadow.appendChild(styleHands);
    }
    render() {
      const handsContainer = document.createElement("div");
      handsContainer.className = "hands-container";
      handsContainer.innerHTML = `
        <img class="piedra" id="Piedra"  alt="Piedra">
        <img class="papel" id="Papel" alt="Pepel">
        <img class="tijera" id="Tijera" alt="Tijera">

      `;
      const imgUrl = handsContainer.querySelectorAll("img");
      const randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      const imgSelect = imgUrl[randomNum].id;
      imgUrl.forEach(img => {
        if (img.className == "papel") {
          img.src = new URL("../../img/papel.png", import.meta.url).toString();
        } else if (img.className == "piedra") {
          img.src = new URL("../../img/piedra.png", import.meta.url).toString();
        } else if (img.className == "tijera") {
          img.src = new URL("../../img/tijera.png", import.meta.url).toString();
        }

        img.addEventListener("click", (i: any) => {
          const event = new CustomEvent("handSelected", {
            detail: {
              selectionPlayer: i.target.id,
              selectionComputer: imgSelect,
            },
          });

          this.dispatchEvent(event);
        });
      });
      this.shadow.appendChild(handsContainer);
    }
  }
);
