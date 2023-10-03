export function initHome(params) {
  const div = document.createElement("div");
  div.className = "home-page-container";
  div.innerHTML = `
  <div class="container-title">
    <h1 class="title">Piedra <br>
    Papel <span>ó</span><br>
    Tijera</h1>
  </div>
      <div class="container-btn">
        <my-button class="button"></my-button>
      </div>
      <div class="container-hands">
      <img class="piedra"  alt="Piedra">
      <img class="papel" alt="Pepel">
      <img class="tijera" alt="Tijera">
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

  const btn = div.querySelector(".button");
  btn?.addEventListener("click", e => {
    e.preventDefault();
    const goTo = params;
    return goTo.goTo("/instructions");
  });

  return div;
}
