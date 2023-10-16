import { state } from "../../state";
export function game() {
  const lastState = state.getState();

  // <my-timer></my-timer>
  const div = document.createElement("div");
  div.innerHTML = `
   <my-hands class="hands"></my-hands>
  `;
  return div;
}
