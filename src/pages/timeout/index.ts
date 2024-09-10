export function initTimeoutPage(params) {
  const div = document.createElement("main");

  div.innerHTML = `
 <in-title>Te quedaste sin tiempo! Acordate de elegir alguna jugada antes que se acaben los 3 segundos.</in-title>
 <menu-button class="play-button">Volver a jugar</menu-button>
 <menu-button class="return-button">Regresar al menu</menu-button>
 `;

  div.classList.add("timeout-container");

  const playButton = div.querySelector(".play-button")!;
  playButton.addEventListener("click", () => {
    params.goTo("/game");
  });

  const menuButton = div.querySelector(".return-button")!;
  menuButton.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
