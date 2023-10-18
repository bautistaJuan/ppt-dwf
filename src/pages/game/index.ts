import { state, Move } from "../../state";
export function game(params) {
  let timeEnd: boolean = true;
  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    
    <div class="container-timer">
      <my-timer></my-timer>
    </div>
    <div class="container-game">
    <my-hands class="hands"></my-hands>
    </div>
  `;
  const hands = div.querySelector(".hands");

  (function SetMoveAndWinner() {
    const OPCIONES = ["Piedra", "Papel", "Tijera"];
    let movimientoComputadora;
    movimientoComputadora = OPCIONES[Math.floor(Math.random() * 3)];
    hands?.addEventListener("handSelected", (e: any) => {
      // Efecto en mano seleccionado, junto
      e.detail.addClass.add("click", "nextPage");
      state.setMoves(e.detail.selectionPlayer, movimientoComputadora);
      state.resultOfTheGame(e.detail.selectionPlayer, movimientoComputadora);

      // Pasemos a ver los resultados...
      if (e.detail.addClass[2] == "nextPage") {
        setTimeout(() => {
          timeEnd = false;
          params.goTo("/result");
        }, 1000);
      }
    });
  })();
  (function timeOff() {
    let counter = 3;
    const intervalId = setInterval(() => {
      counter--;
      if (counter < 1 && timeEnd == true) {
        console.log("El evento no ha sido activado");
        clearInterval(intervalId);
        params.goTo("/introductions");
      }
    }, 1000);
  })();

  return div;
}
