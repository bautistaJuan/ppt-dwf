export function instructions(params) {
  const instructions = document.createElement("div");
  instructions.className = "intro";
  instructions.innerHTML = `
    <div class="container-instrution">
      <h2 class="sub-instruction">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <div class="play-btn">
      <my-button class="change-page">Play!</my-button>
      </div>
      <div class="hands">
        <my-hands></my-hands>
      </div>
    </div>
  `;
  const playButton = instructions.querySelector(".change-page");
  playButton?.addEventListener("click", e => {
    e.preventDefault();
    params.goTo("/game");
  });

  return instructions;
}
