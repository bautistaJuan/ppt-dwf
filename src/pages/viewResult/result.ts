import { state } from "../../state";

export function result(params) {
  const resultGame = state.getHistory();
  const pointsData = resultGame.history;

  const div = document.createElement("div");
  div.className = "result-page-container";
  div.innerHTML = `
    <div class="container-result-end">
      <div class="img-container">
        <p class="text-result">${resultGame.currentGame.result}</p>   
        <img class="img-result" > 
      </div>
      <div class="score">
        <div class="score-data">
          <h2 class="score-h2">Score<h2>
          <p>Tu puntaje: <span class="user-points">${pointsData.myHistoryPlay}</span></p>
          <p>Maquina: <span class="mach-points">${pointsData.computerHistoryPlay}</span> </p>    
          </div>
      </div>
      <div class="container_button-try-again">
        <my-button class="button-try-again">Volver a Jugar</my-button>
        <my-button class="button-restart">Reiniciar</my-button>
      </div>
    </div>
  
  `;
  const image: HTMLImageElement = div.querySelector(".img-result")!;
  const bodyForResult: HTMLBodyElement = document.querySelector("body")!;
  if (resultGame.currentGame.result == "Ganaste") {
    bodyForResult.classList.add("ganaste");
    image.src = new URL("../../img/star-1.png", import.meta.url).toString();
  } else if (resultGame.currentGame.result == "Perdiste") {
    image.src = new URL("../../img/star-2.png", import.meta.url).toString();
    bodyForResult.classList.add("perdiste");
  } else {
    bodyForResult.classList.add("empate");
    image.src = new URL("../../img/star-2.png", import.meta.url).toString();
  }

  //logica para quitar color de fondo si vuelve para atras
  window.addEventListener("popstate", event => {
    if (event.state) {
      bodyForResult.classList.remove("ganaste");
      bodyForResult.classList.remove("empate");
      bodyForResult.classList.remove("perdiste");
    }
  });
  const tryAgainBtn = div.querySelector(".button-try-again");
  const restart = div.querySelector(".button-restart");
  restart?.addEventListener("click", () => {
    state.restartPoints();
    params.goTo("/welcome");
    bodyForResult.classList.remove("ganaste");
    bodyForResult.classList.remove("empate");
    bodyForResult.classList.remove("perdiste");
  });
  tryAgainBtn?.addEventListener("click", () => {
    params.goTo("/introductions");
    bodyForResult.classList.remove("ganaste");
    bodyForResult.classList.remove("empate");
    bodyForResult.classList.remove("perdiste");
  });

  return div;
}
