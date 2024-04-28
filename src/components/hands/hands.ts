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
        height: 200px; 
        margin-right: 10px;
      }
      .click{
        height: 300px;
        padding: 10px;
        position: absolute;
        top: 50%;
        right: 40%;
      }
      .hands-container{
        display: flex;
        justify-content: space-between;
      }
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

      imgUrl.forEach(img => {
        // Agregando imagen y de paso los eventos para cada mano
        if (img.className == "papel") {
          img.src = new URL("../../img/papel.png", import.meta.url).toString();
        } else if (img.className == "piedra") {
          img.src = new URL("../../img/piedra.png", import.meta.url).toString();
        } else if (img.className == "tijera") {
          img.src = new URL("../../img/tijera.png", import.meta.url).toString();
        }

        // Escuchamos un evento para disparar uno nuevo
        img.addEventListener("click", (i: any) => {
          console.log("Esto aprete: ", i.target.id);

          const event = new CustomEvent("handSelected", {
            detail: {
              selectionPlayer: i.target.id,
              addClass: i.target.classList,
            },
          });
          this.dispatchEvent(event);
        });
      });
      this.shadow.appendChild(handsContainer);
    }
  }
);
