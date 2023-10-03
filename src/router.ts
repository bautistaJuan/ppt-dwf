import { initHome } from "./pages/home";
import { instructions } from "./pages/introduction";
const routes = [
  {
    path: /\/instructions/,
    component: instructions,
  },
  {
    path: /\/welcome/,
    component: initHome,
  },
];

const BASE_PATH = "/dwf-m5-desafio-final";

function isGitHubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", path);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const elemento: any = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        return container.appendChild(elemento);
      }
    }
  }

  if (location.pathname == "/" || location.host.includes("github.io")) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  console.log(window);

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}
