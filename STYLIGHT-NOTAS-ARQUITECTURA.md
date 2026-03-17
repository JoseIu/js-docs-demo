# Notas sobre la personalización de Starlight

Este proyecto usa varias personalizaciones avanzadas de Starlight inspiradas en el código de la documentación oficial de Astro. Estas partes **no forman parte del API público documentado**, así que podrían romperse en futuras actualizaciones de `@astrojs/starlight`.

## 1. Sidebar tabulado (override de `Sidebar`)

- Archivo: `src/components/starlight/Sidebar.astro`
- Registro en config: en `astro.config.mjs` se define:
  - `components.Sidebar = "./src/components/starlight/Sidebar.astro"`
- Qué hace:
  - Reemplaza el sidebar por defecto de Starlight por una versión con _pestañas_ (tabs) de secciones, similar a la doc oficial de Astro.
  - Usa componentes internos de Starlight:
    - `@astrojs/starlight/components` (Icon)
    - `@astrojs/starlight/components/SidebarPersister.astro`
    - `@astrojs/starlight/components/SidebarSublist.astro`
  - Usa componentes locales copiados/adaptados de la doc de Astro:
    - `src/components/starlight/TabbedContent.astro`
    - `src/components/starlight/TabListItem.astro`
    - `src/components/starlight/TabPanel.astro`
  - Usa utilidades internas/de la doc:
    - `node_modules/@astrojs/starlight/utils/path` → `stripLeadingAndTrailingSlashes`
    - `src/content` → `allPages`
    - `src/util/isSubPage.ts`
    - `src/util/path-utils.ts` → `stripLangFromSlug`
- Riesgos de actualización:
  - Cualquier cambio interno en el tipo `StarlightRouteData["sidebar"]` o en la forma de los items del sidebar puede romper este componente.
  - Cambios de ruta o de firma en los componentes internos (`SidebarPersister`, `SidebarSublist`, `Icon`, etc.) también podrían fallar sin aviso.
  - Actualizar `@astrojs/starlight` a una versión mayor puede requerir revisar/ajustar este archivo.

## 2. Middleware de rutas para la paginación del tutorial

- Archivo: `src/routeData.ts`
- Registro en config: en `astro.config.mjs` se define:
  - `routeMiddleware: "./src/routeData.ts"`
- Qué hace:
  - Usa el hook oficial `defineRouteMiddleware` de Starlight para modificar los datos de ruta (`StarlightRouteData`).
  - Rellena `pagination.prev` y `pagination.next` de forma automática para las páginas del tutorial, según un array local de páginas ordenadas.
- Nivel de “oficialidad”:
  - El uso de `routeMiddleware` y de `StarlightRouteData` **sí** está documentado por Starlight (forma parte del API público), pero el detalle concreto de cómo se rellena `pagination` está inspirado en la implementación de la doc de Astro.
- Riesgos de actualización:
  - Si Starlight cambia la forma de `StarlightRouteData` o de la propiedad `pagination`, podría hacer falta ajustar este middleware.

## 3. Archivo de sidebar centralizado

- Archivo: `src/astro.sidebar.ts`
- Uso:
  - Se importa en `astro.config.mjs` y se pasa directamente a la integración Starlight como `sidebar`.
- Qué hace:
  - Define toda la estructura de navegación del sitio (Tutorial, JavaScript, Zona profesorado, Accesibilidad) en un único archivo tipado con `StarlightUserConfig["sidebar"]`.
- Nivel de “oficialidad”:
  - El formato del `sidebar` sí está documentado por Starlight, por lo que es relativamente estable.
- Riesgos de actualización:
  - Si cambian los tipos de `StarlightUserConfig["sidebar"]` (por ejemplo, nuevos campos requeridos o renombrados), habría que adaptar este archivo.

## 4. Recomendaciones para futuras actualizaciones

- Antes de actualizar `@astrojs/starlight`:
  - Revisa el _changelog_ oficial de Starlight.
  - Comprueba especialmente cambios en:
    - API de `sidebar` y tipos relacionados.
    - `StarlightRouteData` y campo `pagination`.
    - Componentes internos de `@astrojs/starlight/components`.
  - Haz pruebas sobre el sidebar tabulado (pestañas) y la paginación del tutorial.

- Si algo se rompe tras una actualización:
  1. Revisa primero `src/components/starlight/Sidebar.astro` (es la parte más frágil porque toca internals).
  2. Después, revisa `src/routeData.ts` si el problema está en los botones Prev/Next.

- Si en algún momento quieres volver al comportamiento estándar de Starlight:
  - En `astro.config.mjs`, elimina la sección `components: { Sidebar: "./src/components/starlight/Sidebar.astro" }`.
  - El resto de la configuración (sidebar y middleware de rutas) seguirá funcionando, pero con el sidebar nativo de Starlight.
