// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "JS DOCS",
      // Configuración de idioma: sitio monolingüe en español
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      social: [
        // {
        //   icon: "github",
        //   label: "GitHub",
        //   href: "https://github.com/withastro/starlight",
        // },
      ],
      sidebar: [
        {
          label: "JavaScript",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "¿Qué es JavaScript?", slug: "guia/que-es-javascript" },
            { label: "¿Tipos de datos?", slug: "guia/tipos-de-datos" },
            {
              label: "Arrays",
              items: [
                {
                  label: "Arrays en JavaScript",
                  slug: "guia/arrays",
                },
                {
                  label: "Métodos y propiedades de Array",
                  slug: "guia/array/metodos-propiedades-array",
                },
                {
                  label: "Iteración de Arrays",
                  slug: "guia/array/iteracion-arrays",
                },
                {
                  label: "Busqueda en Arrays",
                  slug: "guia/array/busqueda-metodos",
                },
                {
                  label: "Ordenación de Arrays",
                  slug: "guia/array/ordenacion-arrays",
                },
                {
                  label: "Transformación de Arrays",
                  slug: "guia/array/transformacion-array",
                },
              ],
            },
            {
              label: "Objetos",
              items: [
                {
                  label: "Objetos en JavaScript",
                  slug: "guia/objetos/objetos",
                },
                {
                  label: "Desestructuración de objetos",
                  slug: "guia/objetos/desestructuracion-objetos",
                },
                {
                  label: "Iteración de objetos",
                  slug: "guia/objetos/iterar-objetos",
                },
              ],
            },
            {
              label: "Ejercicios",
              slug: "guia/ejercicios/array-objetos",
            },
            {
              label: "Proyectos",
              items: [
                {
                  label: "Carrito",
                  slug: "guia/proyectos/carrito",
                },
                {
                  label: "Paises REST",
                  slug: "guia/proyectos/paises",
                },
              ],
            },
          ],
        },
        {
          label: "Zona profesorado",
          items: [
            { label: "Acceso profes", slug: "profes/login" },
            {
              label: "Respuestas actividades",
              items: [
                {
                  label: "Resumen general",
                  slug: "profes/respuestas",
                },
              ],
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],

      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
