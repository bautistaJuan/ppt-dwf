export function initHome(container: Element) {
  const div = document.createElement("div");
  div.className = "home-page-container";
  div.innerHTML = `
  <div class="container-title">
  <h1 class="title">Piedra <br>
  Papel <span>ó</span><br>
  Tijera</h1>
      </div>
      <div class="container-btn">
        <my-button></my-button>
      </div>
      <div class="container-hands">
      <img class="piedra" src="" alt="Piedra">
      <img class="papel" src="../../img/papel.png" alt="Pepel">
      <img class="tijera" src="" alt="Tijera">
      </div>
      `;
  const imgUrl = div.querySelectorAll("img");
  imgUrl.forEach(img => {
    if (img.className == "papel") {
      img.src = new URL("../../img/papel.png", import.meta.url).toString();
    } else if (img.className == "piedra") {
      img.src = new URL("../../img/piedra.png", import.meta.url).toString();
    } else if (img.className == "tijera") {
      img.src = new URL("../../img/tijera.png", import.meta.url).toString();
    }
  });

  container.appendChild(div);
}
