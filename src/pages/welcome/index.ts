import piedraImg from "url:../../assets/piedra.svg";
import papelImg from "url:../../assets/papel.svg";
import tijerasImg from "url:../../assets/tijera.svg";

export function initWelcomePage(params) {
  const div = document.createElement("main");

  div.innerHTML = `
 <welcome-title>Piedra Papel o Tijera</welcome-title>
 <menu-button class="welcome-button">Empezar</menu-button>
 <div class="hands-container">
 <img class="welcome-hands" src=${tijerasImg}>
 <img class="welcome-hands" src=${piedraImg}>
 <img class="welcome-hands" src=${papelImg}>
 </div>
 `;

  div.classList.add("welcome-container");

  const welcomeButton = div.querySelector(".welcome-button")!;
  welcomeButton.addEventListener("click", () => {
    params.goTo("/index");
  });

  return div;
}
