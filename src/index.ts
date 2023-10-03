import { initHome } from "./pages/home";
import { initRouter } from "./router";
import "./components/choose-game/selectHand";
import "./components/timer/index";
import "./components/button/my-button";
const root = document.querySelector(".root")!;
initRouter(root);
