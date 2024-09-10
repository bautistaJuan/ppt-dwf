import { initRouter } from "./router";
import { state } from "./state";
import "./components/titles";
import "./components/buttons";
import "./components/ring";
import "./components/hands";

(function () {
  state.restoreState();
  console.log("hola");
  const rootEl = document.querySelector(".root")!;
  initRouter(rootEl);
})();
