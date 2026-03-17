import {
  defineRouteMiddleware,
  type StarlightRouteData,
} from "@astrojs/starlight/route-data";

// Middleware sencillo: solo controla la paginación del tutorial.
export const onRequest = defineRouteMiddleware((context) => {
  updateTutorialPagination(context.locals.starlightRoute);
});

function updateTutorialPagination(starlightRoute: StarlightRouteData) {
  const { entry, pagination } = starlightRoute;

  if (!isTutorialEntry(entry)) return;

  // Orden explícito de las páginas de tu tutorial.
  // Puedes ampliar este array según añadas más pasos.
  const tutorialPages = [
    { id: "tutorial", title: "Introducción al tutorial" },
    { id: "tutorial/0", title: "Tutorial 00" },
    { id: "tutorial/1", title: "Tutorial 01" },
  ];

  const index = tutorialPages.findIndex((p) => p.id === entry.id);
  if (index === -1) return;

  const prevPage = tutorialPages[index - 1];
  const nextPage = tutorialPages[index + 1];

  if (prevPage) {
    pagination.prev = {
      href: `/${prevPage.id}/`,
      isCurrent: false,
      label: prevPage.title,
      type: "link",
      badge: undefined,
      attrs: {},
    };
  }

  if (nextPage) {
    // Mientras haya siguiente dentro del tutorial, sobreescribimos.
    pagination.next = {
      href: `/${nextPage.id}/`,
      isCurrent: false,
      label: nextPage.title,
      type: "link",
      badge: undefined,
      attrs: {},
    };
  }
}

function isTutorialEntry(entry: StarlightRouteData["entry"]) {
  // En tu proyecto los IDs de estas páginas son:
  //   'tutorial', 'tutorial/0', 'tutorial/1', ...
  return entry.id.split("/")[0] === "tutorial";
}
