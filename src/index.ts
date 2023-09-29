import { initHome } from "./pages/home";
import "./components/choose-game/selectHand";
import "./components/timer/index";
import "./components/button/my-button";
const root = document.querySelector(".root")!;
initHome(root);
console.log(location.host);
