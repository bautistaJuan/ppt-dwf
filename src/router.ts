import { game } from "./pages/game";
import { initHome } from "./pages/home";
import { instructions } from "./pages/introduction";
import { movements } from "./pages/seeMovements/movs";
import { result } from "./pages/viewResult/result";

const BASE_PATH = "/dwf-m5-desafio-final";

function isGithubPages() {
  return location.host.includes("bautistajuan.github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: initHome,
  },
  {
    path: /\/introductions/,
    component: instructions,
  },
  {
    path: /\/game/,
    component: game,
  },
  {
    path: /\/result/,
    component: result,
  },
  {
    path: /\/movements/,
    component: movements,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    // console.log("el handle Route recibio una nueva ruta y es", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}
