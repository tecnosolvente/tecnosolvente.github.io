# Tecno Solvente — Landing

Landing page de **Tecno Solvente** (Digitalización y Automatización Comercial), hecha con Astro 5 y Tailwind CSS 4.

**Sitio publicado:** https://tecnosolvente.github.io/ (se actualiza solo en cada push a `main`).

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve el build
```

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Número de WhatsApp, LinkedIn y precios (iguales para todos los idiomas) | `src/config/site.ts` |
| Todos los textos, en español, inglés y portugués | `src/i18n/ui.ts` |
| Colores y tipografías | `src/styles/global.css` (bloque `@theme`) |
| Secciones | `src/components/*.astro` |
| Orden de las secciones | `src/components/HomePage.astro` |

## Idiomas

| URL | Idioma |
| --- | --- |
| `/` | Español (principal) |
| `/en/` | Inglés |
| `/pt-br/` | Portugués (Brasil) |

Para cambiar un texto, editá la misma clave en los 3 idiomas dentro de `src/i18n/ui.ts`.
Cuando tengas dominio, configuralo en `site` dentro de `astro.config.mjs` (mejora el SEO por idioma).
