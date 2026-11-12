/**
 * Utilidades de idioma.
 * El idioma sale de la URL: "/" = español, "/en/" = inglés, "/pt-br/" = portugués (Brasil).
 */
import { ui, type Lang } from './ui';

export const LANGS = ['es', 'en', 'pt-br'] as const satisfies readonly Lang[];
export const DEFAULT_LANG: Lang = 'es';

/** Nombre de cada idioma en su propio idioma (para el selector). */
export const LANG_NAMES: Record<Lang, { short: string; long: string }> = {
  es: { short: 'ES', long: 'Español' },
  en: { short: 'EN', long: 'English' },
  'pt-br': { short: 'PT', long: 'Português (Brasil)' },
};

/**
 * Prefijo donde vive el sitio (config `base` de astro.config.mjs), sin barra final.
 * En GitHub Pages es "/tecnosolvente"; con dominio propio sería "".
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Antepone el prefijo del sitio a una ruta interna: withBase('/favicon.svg') → "/tecnosolvente/favicon.svg". */
export function withBase(path: string) {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Detecta el idioma a partir de la URL actual (ignorando el prefijo del sitio). */
export function getLang(url: URL): Lang {
  const path = BASE && url.pathname.startsWith(BASE) ? url.pathname.slice(BASE.length) : url.pathname;
  const first = path.split('/').filter(Boolean)[0];
  return (LANGS as readonly string[]).includes(first) ? (first as Lang) : DEFAULT_LANG;
}

/** Textos del idioma pedido. */
export function t(lang: Lang) {
  return ui[lang];
}

/** Dirección de la página en cada idioma: "/", "/en/", "/pt-br/" (con el prefijo del sitio). */
export function localizedPath(lang: Lang) {
  return withBase(lang === DEFAULT_LANG ? '/' : `/${lang}/`);
}

/**
 * Formatea un precio en pesos argentinos según el idioma.
 * - es:    { prefix: "$",   amount: "20.000" }
 * - en:    { prefix: "ARS", amount: "20,000" }
 * - pt-br: { prefix: "ARS", amount: "20.000" }
 * (En inglés/portugués "$" solo se confundiría con dólares o reales.)
 */
export function formatPrice(value: number, lang: Lang) {
  const locale = lang === 'en' ? 'en-US' : lang === 'pt-br' ? 'pt-BR' : 'es-AR';
  return {
    prefix: lang === 'es' ? '$' : 'ARS',
    amount: value.toLocaleString(locale),
  };
}

/** Precio en una sola cadena, para textos chicos (ej. "$7.500", "ARS 7,500"). */
export function priceText(value: number, lang: Lang) {
  const { prefix, amount } = formatPrice(value, lang);
  return lang === 'es' ? `${prefix}${amount}` : `${prefix} ${amount}`;
}
