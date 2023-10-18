export function result(params) {
  const div = document.createElement("div");
  div.className = "result-page-container";
  div.innerHTML = `
      <div class="container-title">
        <h1 class="title">Resultado</h1>
      </div>
    `;
  return div;
}
