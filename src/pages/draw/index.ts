import { state } from "../../state";

export function initDrawPage(params) {
  const currentState = state.getState();
  const playerScore = currentState.results.myScore;
  const computerScore = currentState.results.computerScore;

  const div = document.createElement("main");
  div.classList.add("draw-container");
  div.innerHTML = `

 <div class="win-star">Empate!</div>
 <div class="score-table">
 <h3>Score</h3>
 <h4>Vos: ${playerScore}</h4>
 <h4>Maquina:  ${computerScore}</h4>
 </div>
 <menu-button class="welcome-button">Volver a jugar</menu-button>
 `;

  const welcomeButton = div.querySelector(".welcome-button")!;
  welcomeButton.addEventListener("click", () => {
    params.goTo("/game");
  });

  return div;
}
