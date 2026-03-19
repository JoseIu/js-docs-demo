// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { sidebar } from './src/astro.sidebar';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '',
      logo: {
        src: './src/assets/logo.webp',
        alt: 'Logo de NTT DATA'
      },
      // routeMiddleware: "./src/routeData.ts",
      // Configuración de idioma: sitio monolingüe en español
      locales: {
        root: {
          label: 'Español',
          lang: 'es'
        }
      },

      components: {
        Sidebar: './src/components/starlight/Sidebar.astro'
      },
      sidebar,

      customCss: ['./src/fonts/font-face.css', './src/styles/custom.css']
    })
  ]
});
