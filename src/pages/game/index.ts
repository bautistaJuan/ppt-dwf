import { state } from "../../state";

export function initGamePage(params) {
  const div = document.createElement("main")!;

  div.classList.add("game-container");
  let counter = 3;
  let progress = 0;

  div.innerHTML = `
 <progress-ring stroke="20" radius="150" progress="0" contador="3"></progress-ring>
  
  <div class="player-container"></>
  <hand-comp jugada="tijeras"></hand-comp>
  <hand-comp jugada="papel"></hand-comp>
  <hand-comp jugada="piedra"></hand-comp>
  </div>
 `;

  //RECIBE EL EVENTO CON LA JUGADA EL JUGADOR
  function playListener() {
    const playerCont = div.querySelector(".player-container")!;
    const handsArray = playerCont.children;
    for (const hand of handsArray) {
      hand.addEventListener("play", (e: any) => {
        let jugada = e.detail.jugada;
        clearInterval(contador);
        clearTimeout(timeout);
        setTimeout(() => {
          handsPlay(jugada);
        }, 1000);
      });
    }
  }

  //GENERA LA ESCENA DEL JUEGO Y LE COMUNICA EL GANADOR AL ESTADO
  function handsPlay(jugada) {
    const computerPlay: any = randomPlay();

    div.innerHTML = `
     <div class="final-game-container"></>
     <hand-comp jugada=${computerPlay}></hand-comp>
     <hand-comp jugada=${jugada}></hand-comp>
     </div>
     `;

    const handPlayerEl = div.getElementsByTagName("hand-comp");
    handPlayerEl[1].shadowRoot.children[0].innerHTML = `
    .hand{
      height: 240px;
      position: absolute;
      bottom: 5%;
      cursor: pointer;
    }
  `;
    handPlayerEl[0].shadowRoot.children[0].innerHTML = `
    .hand{
      height: 220px;
      position: absolute;
      top: 5%;
      cursor: pointer;
      transform: rotate(180deg);
    }
  `;
    const finalResult = state.definePlay(jugada, computerPlay);

    //TE REDIRECCIONA AL RESULTADO FINAL
    function redirect() {
      if (finalResult == "victoria") {
        params.goTo("/victoria");
      }
      if (finalResult == "derrota") {
        params.goTo("/derrota");
      }
      if (finalResult == "empate") {
        params.goTo("/empate");
      }
    }

    //LA ACTIVA A LOS 2 SEGUNDOS DE DEVOLVER EL RESLULTADO
    setTimeout(() => {
      redirect();
    }, 2000);
  }

  //GENERA UN RESULTADO RANDOM DE UNA JUGADA
  function randomPlay() {
    const playArray = ["piedra", "papel", "tijeras"];
    const randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    const result = playArray[randomNumber];
    return result;
  }

  //INICIA UNA CUENTA ATRAS Y HACE PROGRESAR LA BARRA
  function counterInit() {
    const ring = div.children[0];
    const ringText = ring.shadowRoot.children[0].children[0].children[0];
    counter--,
      (progress += 33.3),
      (ringText.textContent = `${counter}`),
      ring.setAttribute("progress", `${progress}`);
  }

  // HACE PROGRESAR LA RUEDA Y REDUCE EL CONTADOR
  const contador = setInterval(counterInit, 1000);

  // A LOS 3 SEG CORTA EL INTERVALO
  var timeout;
  function setTimeOut() {
    timeout = setTimeout(() => {
      clearInterval(contador), params.goTo("/timeout");
    }, 3999);
  }

  setTimeOut();
  playListener();
  return div;
}
