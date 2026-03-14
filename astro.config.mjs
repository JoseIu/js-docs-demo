// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      logo: {
        src: "./src/assets/logo.webp",
        alt: "Logo de NTT DATA",
      },
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
            { label: "¿Qué es JavaScript?", slug: "js/que-es-javascript" },
            { label: "¿Tipos de datos?", slug: "js/tipos-de-datos" },
            {
              label: "Arrays",
              collapsed: true,

              items: [
                {
                  label: "Arrays en JavaScript",
                  slug: "js/arrays",
                },
                {
                  label: "Métodos y propiedades de Array",
                  slug: "js/array/metodos-propiedades-array",
                },
                {
                  label: "Iteración de Arrays",
                  slug: "js/array/iteracion-arrays",
                },
                {
                  label: "Busqueda en Arrays",
                  slug: "js/array/busqueda-metodos",
                },
                {
                  label: "Ordenación de Arrays",
                  slug: "js/array/ordenacion-arrays",
                },
                {
                  label: "Transformación de Arrays",
                  slug: "js/array/transformacion-array",
                },
              ],
            },
            {
              label: "Objetos",
              collapsed: true,

              items: [
                {
                  label: "Objetos en JavaScript",
                  slug: "js/objetos/objetos",
                },
                {
                  label: "Desestructuración de objetos",
                  slug: "js/objetos/desestructuracion-objetos",
                },
                {
                  label: "Iteración de objetos",
                  slug: "js/objetos/iterar-objetos",
                },
              ],
            },
            {
              label: "Ejercicios",
              slug: "js/ejercicios/array-objetos",
            },
            {
              label: "Proyectos",
              collapsed: true,

              items: [
                {
                  label: "Carrito",
                  slug: "js/proyectos/carrito",
                },
                {
                  label: "Paises REST",
                  slug: "js/proyectos/paises",
                },
              ],
            },
          ],
          collapsed: true,
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
          collapsed: true,
        },
        {
          label: "Accesibilidad - WCAG 2.2",
          collapsed: true,
          items: [
            {
              label: "1.Introducción a la Accesibilidad Digital",
              items: [
                {
                  label: "1.1 ¿Qué es la Accesibilidad Digital?",
                  slug: "accesibilidad/section-1/1",
                },
                {
                  label: "1.2 ¿Para qué Sirve la Accesibilidad Digital?",
                  slug: "accesibilidad/section-1/1-2",
                },
                {
                  label: "1.3 ¿A Quién Beneficia la Accesibilidad Digital?",
                  slug: "accesibilidad/section-1/1-3",
                },
                {
                  label: "1.4 Mitos y Realidades de la Accesibilidad",
                  slug: "accesibilidad/section-1/1-4",
                },
                {
                  label:
                    "1.5 Diseño Accesible desde el Principio (Design Thinking)",
                  slug: "accesibilidad/section-1/1-5",
                },
              ],
            },
            {
              label: "2. Marco Legal y Fundamentos de la Accesibilidad",
              collapsed: true,

              items: [
                {
                  label: "2.1 Legislación y Normativas de Accesibilidad",
                  slug: "accesibilidad/section-2/2_1",
                },
                {
                  label: "2.2 Estándares y Pautas de Accesibilidad",
                  slug: "accesibilidad/section-2/2_2",
                },
              ],
            },
            {
              label: "3. HTML semántico",
              collapsed: true,
              items: [
                {
                  label: "3.1 Importancia de la semántica en la accesibilidad",
                  slug: "accesibilidad/section-3/3_1",
                },
                {
                  label: "3.2 Estructura de encabezados y jerarquía",
                  slug: "accesibilidad/section-3/3_2",
                },
                {
                  label: "3.3 Listas y tablas accesibles",
                  slug: "accesibilidad/section-3/3_3",
                },
                {
                  label: "3.4 Formularios accesibles",
                  slug: "accesibilidad/section-3/3_4",
                },
                {
                  label: "3.5 Roles nativos de los elementos",
                  slug: "accesibilidad/section-3/3_5",
                },
                {
                  label: "3.6 Buenas prácticas de marcado y validación",
                  slug: "accesibilidad/section-3/3_6",
                },
              ],
            },
            {
              label: "4. ARIA, roles, estados y propiedades",
              collapsed: true,

              items: [
                {
                  label: "4.1 Qué es ARIA y cuándo usarlo",
                  slug: "accesibilidad/section-4/4_1",
                },
                {
                  label: "4.2 Roles ARIA más utilizados",
                  slug: "accesibilidad/section-4/4_2",
                },
                {
                  label: "4.3 Estados y propiedades más comunes",
                  slug: "accesibilidad/section-4/4_3",
                },
                {
                  label: "4.4 Buenas y malas prácticas de ARIA",
                  slug: "accesibilidad/section-4/4_4",
                },
              ],
            },
            {
              label: "5. Árbol de accesibilidad",
              collapsed: true,

              items: [
                {
                  label: "5.1 Qué es y cómo funciona",
                  slug: "accesibilidad/section-5/5_1",
                },
                {
                  label: "5.2 Relación entre DOM y árbol",
                  slug: "accesibilidad/section-5/5_2",
                },
                {
                  label: "5.3 Herramientas para inspección",
                  slug: "accesibilidad/section-5/5_3",
                },
                {
                  label: "5.4 Problemas comunes",
                  slug: "accesibilidad/section-5/5_4",
                },
              ],
            },
            {
              label: "6. Patterns ARIA",
              collapsed: true,

              items: [
                {
                  label: "6.1 Qué son los patrones ARIA",
                  slug: "accesibilidad/section-6/6_1",
                },
                {
                  label: "6.2 Menús y menús desplegables",
                  slug: "accesibilidad/section-6/6_2",
                },
                {
                  label: "6.3 Tabs y acordeones",
                  slug: "accesibilidad/section-6/6_3",
                },
                {
                  label: "6.4 Diálogos/modales accesibles",
                  slug: "accesibilidad/section-6/6_4",
                },
              ],
            },
            {
              label: "7. Lectores de pantalla",
              collapsed: true,

              items: [
                {
                  label: "7.1 Qué son y cómo funcionan",
                  slug: "accesibilidad/section-7/7_1",
                },
                {
                  label: "7.2 NVDA (Windows)",
                  slug: "accesibilidad/section-7/7_2",
                },
                {
                  label: "7.3 VoiceOver (macOS/iOS)",
                  slug: "accesibilidad/section-7/7_3",
                },
                {
                  label: "7.4 TalkBack (Android)",
                  slug: "accesibilidad/section-7/7_4",
                },
              ],
            },
          ],
        },
      ],

      customCss: ["./src/fonts/font-face.css", "./src/styles/custom.css"],
    }),
  ],
});
