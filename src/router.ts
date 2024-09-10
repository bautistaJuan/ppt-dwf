import { initWelcomePage } from "./pages/welcome";
import { initIndexPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initWinPage } from "./pages/win";
import { initDefeatPage } from "./pages/defeat";
import { initTimeoutPage } from "./pages/timeout";
import { initDrawPage } from "./pages/draw";

const rutas = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/desafio-m5/,
    component: initWelcomePage,
  },
  {
    path: /\/index/,
    component: initIndexPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
    path: /\/timeout/,
    component: initTimeoutPage,
  },
  {
    path: /\/victoria/,
    component: initWinPage,
  },
  {
    path: /\/derrota/,
    component: initDefeatPage,
  },
  {
    path: /\/empate/,
    component: initDrawPage,
  }
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    container.innerHTML = "";

    for (const r of rutas) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  if (location.host.includes("github.io")) {
    goTo("/desafio-m5");
  }

  //ESTO LO BORRE AL PRINCIPIO PERO PUEDE QUEDAR LUEGO
  /* handleRoute(location.pathname) */

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}
