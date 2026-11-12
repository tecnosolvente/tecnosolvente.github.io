/**
 * Configuración central del sitio.
 * Todo el contenido "de negocio" (WhatsApp, planes, precios) vive acá,
 * así los componentes solo se encargan de la presentación.
 */

import type { Dict } from '../i18n/ui';

// Formato wa.me: código de país + 9 (celular AR) + área + número, sin "+", espacios ni guiones.
// 11 2161-9240 → 54 9 11 21619240
export const WHATSAPP_NUMBER = '5491121619240';

/** Arma un link wa.me con un mensaje precargado (el mensaje llega ya traducido desde cada componente). */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Persona detrás del emprendimiento (sección "Quién está detrás"). */
export const OWNER = {
  name: 'Kevin Caria',
  initials: 'KC',
  linkedin: 'https://www.linkedin.com/in/kevin-caria/',
  // Opcional: poné una foto en /public (ej. /kevin.jpg) y cargá la ruta acá. Sin foto se muestran las iniciales.
  photo: '' as string,
};

export const SITE = {
  name: 'Tecno Solvente',
};

/**
 * PLANES: solo datos de negocio (precios en pesos argentinos, como números).
 * Los textos de cada plan (nombre, descripción, categoría) están traducidos en
 * src/i18n/ui.ts → plans[id]. Un precio se cambia acá y aplica a los 3 idiomas.
 *
 * Cambios después de la entrega (links, textos, fotos, etc.). El cliente elige:
 * - monthly: abono mensual que incluye hasta MONTHLY_CHANGES cambios por mes.
 * - perChange: sin abono, paga cada cambio cuando lo pide.
 * Si un valor falta, la tarjeta muestra "A consultar".
 */
export interface UpdateOptions {
  monthly?: number;
  perChange?: number;
}

export type PlanId = keyof Dict['plans'];

export interface Plan {
  id: PlanId;
  /** Pago inicial (único). Sin valor = presupuesto a medida ("A consultar"). */
  price?: number;
  /** Sin esto, el plan no incluye cambios posteriores (ej. Cartel Inteligente). */
  updates?: UpdateOptions;
  featured?: boolean;
  /** true = el plan no se muestra en la página (servicio todavía no definido). */
  hidden?: boolean;
}

/** Cantidad de cambios por mes incluidos en el abono. */
export const MONTHLY_CHANGES = 2;

export const PLANS: Plan[] = [
  { id: 'acceso-directo', price: 20000 }, // Cartel Inteligente
  { id: 'acumulador-links', price: 30000, updates: { monthly: 7500, perChange: 15000 } }, // Todos tus Links
  { id: 'pagina-web', price: 100000, updates: { monthly: 15000, perChange: 30000 }, featured: true }, // Tu Página Web
  { id: 'web-completa' }, // Web Completa: sin price → se cotiza según cada proyecto

  // --- Servicios en evaluación: ocultos hasta definirlos (cambiar hidden a false para mostrarlos) ---
  { id: 'whatsapp-basico', price: 52500, updates: { monthly: 12000 }, hidden: true },
  { id: 'catalogo-digital', price: 60000, updates: { monthly: 12000 }, hidden: true },
  // Original: sin alta, abono mensual (1 hora mensual). Requiere su propio diseño de tarjeta si se activa.
  { id: 'soporte-integral', price: 0, updates: { monthly: 9000 }, hidden: true },
];
