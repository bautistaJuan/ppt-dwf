import { state } from "../../state";

export function movements(params) {
  //get data
  const currentState = state.getHistory();
  const computerGame = currentState.currentGame.computerPlay;
  const player = currentState.currentGame.myPlay;

  console.log("Desde game le dijimos al state que fue:", player);

  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    <div class="container-game-img">
        <img class="computer" >
        <img class="player" >
        <my-hands class="hands"></my-hands>
    </div>
  `;

  // get containers
  const containerHands = div.querySelector(".container-game-img")!;
  const computerImg = div.querySelector(".computer")!;
  const myPlayerImg = div.querySelector(".player")!;

  const hands = div.querySelector(".hands");
  const hand = hands?.shadowRoot?.querySelectorAll("img")!;

  //   Muestro jugada
  hand.forEach(img => {
    if (img.id === computerGame) {
      computerImg.setAttribute("src", img.src);
      containerHands.lastChild?.remove();
    } else if (img.id === player) {
      myPlayerImg.setAttribute("src", img.src);
      containerHands.lastChild?.remove();
    } else if (player === computerGame) {
      myPlayerImg.setAttribute("src", img.src);
      computerImg.setAttribute("src", img.src);
      containerHands.lastChild?.remove();
    }
  });

  // Pasemos a ver los resultados...

  setTimeout(() => {
    params.goTo("/result");
  }, 1000);

  return div;
}
