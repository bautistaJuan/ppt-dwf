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
      <my-button class="change-page">Empezar</my-button>
    </div>
    <div class="container-hands">
      <my-hands></my-hands>
    </div>

  `;
  const btn = div.querySelector(".change-page");
  btn?.addEventListener("click", e => {
    e.preventDefault();
    return params.goTo("/introductions");
  });

  return div;
}
