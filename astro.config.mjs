// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Publicado en GitHub Pages (organización "tecnosolvente", repo "tecnosolvente.github.io").
  // Si más adelante usás un dominio propio, cambiá `site` por ese dominio.
  // (Si algún día se publica en una subcarpeta, agregá `base: '/subcarpeta'`: los links ya lo soportan.)
  site: 'https://tecnosolvente.github.io',

  // Idiomas: "/" español (principal), "/en/" inglés, "/pt-br/" portugués de Brasil.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },

  // Tailwind CSS v4 se integra como plugin de Vite (ya no hace falta @astrojs/tailwind).
  vite: {
    plugins: [tailwindcss()],
  },
});
