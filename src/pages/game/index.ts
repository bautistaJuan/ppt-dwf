import { state } from "../../state";
import { movements } from "../seeMovements/movs";
export function game(params) {
  let timeEnd: boolean = true;
  const div = document.createElement("div");
  div.className = "container-game";
  div.innerHTML = `
      <div class="game-timer">
        <my-timer></my-timer>
      </div>
      <div class="game-hands">
        <my-hands class="hands"></my-hands>
      </div>
  `;
  const hands = div.querySelector(".hands");
  const timerHide = div.querySelector(".game-timer");

  (function SetMoveAndWinner() {
    const OPCIONES = ["Piedra", "Papel", "Tijera"];
    let movimientoComputadora;
    movimientoComputadora = OPCIONES[Math.floor(Math.random() * 3)];
    // Evento que se dispara desde el componente hands
    hands?.addEventListener("handSelected", (e: any) => {
      // console.log();
      timerHide?.classList.add("bye");
      // Efecto en mano seleccionado, avisamos del final de evento en caso de que se haya seleccionado
      e.detail.addClass.add("click", "nextPage");
      state.setMoves(e.detail.selectionPlayer, movimientoComputadora);
      state.resultOfTheGame(e.detail.selectionPlayer, movimientoComputadora);
      // recibimos el aviso anterio
      if (e.detail.addClass[2] == "nextPage") {
        timeEnd = !timeEnd;

        // Pasemos a ver los resultados...
        setTimeout(() => {
          params.goTo("/movements");
        }, 1000);
      }
    });
  })();
  // Si no elegiste ninguna de las opciones
  (function timeOff() {
    let counter = 3;
    const intervalId = setInterval(() => {
      counter--;
      if (counter < 1 && timeEnd == true) {
        clearInterval(intervalId);
        params.goTo("/introductions");
      }
    }, 1000);
  })();

  return div;
}
