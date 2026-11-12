/**
 * Todos los textos de la página, por idioma.
 * El español es la referencia: inglés y portugués deben tener exactamente las mismas claves
 * (TypeScript avisa si falta alguna).
 *
 * Los precios NO están acá: viven en src/config/site.ts y son iguales para todos los idiomas.
 */

const es = {
  meta: {
    htmlLang: 'es-AR',
    ogLocale: 'es_AR',
    title: 'Tecno Solvente | Digitalización y Automatización Comercial',
    description:
      'Carteles inteligentes con QR y NFC y páginas web para comercios y negocios. Precios claros y contacto directo por WhatsApp.',
  },
  tagline: 'Digitalización y Automatización Comercial',
  nav: {
    label: 'Principal',
    services: 'Servicios',
    plans: 'Planes',
    contact: 'Contacto',
    ctaLong: 'Contactar por WhatsApp',
    ctaShort: 'WhatsApp',
    language: 'Idioma',
  },
  wa: {
    general: 'Hola Tecno Solvente! Quiero consultar por mi negocio.',
    visit: 'Hola Tecno Solvente! Quiero agendar una visita para mi negocio.',
    plan: (name: string) => `Hola Tecno Solvente! Me interesa el plan "${name}".`,
  },
  hero: {
    badge: 'Tecnología para comercios y negocios',
    titleA: 'Conectá tu mostrador con',
    titleB: 'tus clientes',
    text: 'Soluciones integrales para comercios y negocios: carteles inteligentes que tus clientes escanean con el celular y páginas web para que te encuentren y te contacten fácil. Sin vueltas y a precios claros.',
    ctaPlans: 'Ver Planes y Precios',
    ctaTalk: 'Hablemos',
    howTitle: 'Así funciona',
    howSteps: '3 pasos',
    steps: [
      { label: 'Tu cliente acerca el celular al cartel', tag: 'NFC · QR' },
      { label: 'Ve tu página con toda tu info al instante', tag: 'Web' },
      { label: 'Te escribe por WhatsApp o te sigue en redes', tag: 'Contacto' },
    ],
  },
  value: {
    eyebrow: 'Por qué elegirnos',
    title: 'Todo lo digital de tu negocio, en un solo lugar',
    text: 'Te ayudamos a que tus clientes te encuentren y te contacten fácil, sin que tengas que saber nada de tecnología.',
    items: [
      {
        title: 'Presencia Instantánea',
        text: 'Un cartel en tu mostrador o vidriera: tus clientes lo escanean o acercan el celular y llegan a tus redes, tu ubicación o tu menú.',
      },
      {
        title: 'Tu Web a Medida',
        text: 'Una página propia para tu negocio, diseñada a tu medida, que se ve bien en cualquier celular.',
      },
      {
        title: 'Nos Ocupamos de Todo',
        text: 'Armamos todo por vos y, con el abono mensual, hacemos los cambios que necesites. Vos seguí atendiendo tu negocio.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Planes y precios',
    title: 'Precios claros, sin letra chica',
    text: (n: number) =>
      `El armado se paga una sola vez. Si más adelante querés actualizar algo, elegís: un abono mensual con hasta ${n} cambios por mes, o pagar cada cambio solo cuando lo necesites.`,
    currencyNote: 'Precios en pesos argentinos (ARS).',
  },
  plan: {
    featured: 'Recomendado',
    oneTime: 'pago único',
    custom: 'presupuesto a medida',
    customText: 'Contanos qué necesitás y te armamos una propuesta para tu negocio.',
    changesTitle: 'Cambios posteriores',
    monthly: 'Abono mensual',
    monthlyNote: (n: number) => `hasta ${n} cambios por mes`,
    perChange: 'Cambio suelto',
    perChangeNote: 'sin abono',
    perMonth: '/mes',
    noMonthly: 'Sin costos mensuales.',
    ask: 'A consultar',
    cta: 'Consultar este plan',
  },
  /** Textos de cada plan, por id (ver PLANS en src/config/site.ts). */
  plans: {
    'acceso-directo': {
      category: 'Presencia',
      name: 'Cartel Inteligente',
      summary:
        'Un cartel con código QR y chip NFC: tus clientes lo escanean o acercan el celular y llegan directo a tu Instagram, tu ubicación o tu menú.',
    },
    'acumulador-links': {
      category: 'Web',
      name: 'Todos tus Links',
      summary:
        'Cartel + una página simple que reúne todo en un solo lugar: WhatsApp, redes sociales, ubicación y horarios.',
    },
    'pagina-web': {
      category: 'Web',
      name: 'Tu Página Web',
      summary:
        'Cartel + la página web de tu negocio, diseñada a tu medida: quiénes son, qué ofrecen, fotos y cómo contactarte.',
    },
    'web-completa': {
      category: 'Web',
      name: 'Web Completa',
      summary:
        'Para negocios que necesitan más que una web que informa: desde que tus clientes reserven turnos o hagan pedidos, hasta un sistema completo hecho a medida para tu negocio.',
    },
    'whatsapp-basico': {
      category: 'Automatización',
      name: 'Botón de WhatsApp Básico',
      summary: 'Respuestas automáticas y menú de atención para que no se te escape ningún cliente.',
    },
    'catalogo-digital': {
      category: 'Automatización',
      name: 'Catálogo Digital de Pedidos',
      summary: 'Tus productos online: el cliente arma el pedido y te llega directo por WhatsApp.',
    },
    'soporte-integral': {
      category: 'Soporte',
      name: 'Soporte Tecnológico Integral',
      summary: 'Ayuda con tu equipamiento, cuentas y herramientas digitales cuando la necesites.',
    },
  },
  about: {
    eyebrow: 'Quién está detrás',
    hello: (name: string) => `Hola, soy ${name}`,
    text: (site: string) =>
      `Estoy detrás de ${site}. Cuando nos escribís, hablás directamente conmigo: te asesoro, armo tu solución y te acompaño después.`,
    linkedin: 'Ver mi perfil en LinkedIn',
  },
  contact: {
    eyebrow: 'Hablemos de tu negocio',
    title: 'Agendá una visita o consultanos por tu negocio',
    text: 'Pasamos por tu local, vemos cómo trabajás y te recomendamos la solución justa para vos.',
    cta: 'Escribinos por WhatsApp',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    linkedinLabel: (name: string) => `LinkedIn de ${name}`,
  },
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Tecno Solvente | Business Digitalization & Automation',
    description:
      'Smart signs with QR and NFC and websites for shops and businesses. Clear prices and direct contact on WhatsApp.',
  },
  tagline: 'Business Digitalization & Automation',
  nav: {
    label: 'Main',
    services: 'Services',
    plans: 'Plans',
    contact: 'Contact',
    ctaLong: 'Contact on WhatsApp',
    ctaShort: 'WhatsApp',
    language: 'Language',
  },
  wa: {
    general: "Hi Tecno Solvente! I'd like to ask about my business.",
    visit: "Hi Tecno Solvente! I'd like to book a visit for my business.",
    plan: (name: string) => `Hi Tecno Solvente! I'm interested in the "${name}" plan.`,
  },
  hero: {
    badge: 'Technology for shops and businesses',
    titleA: 'Connect your counter with',
    titleB: 'your customers',
    text: 'All-in-one solutions for shops and businesses: smart signs your customers scan with their phone, and websites that make it easy to find and contact you. Straightforward, with clear prices.',
    ctaPlans: 'See Plans & Pricing',
    ctaTalk: "Let's talk",
    howTitle: 'How it works',
    howSteps: '3 steps',
    steps: [
      { label: 'Your customer taps their phone on the sign', tag: 'NFC · QR' },
      { label: 'They instantly see your page with all your info', tag: 'Web' },
      { label: 'They message you on WhatsApp or follow you on social media', tag: 'Contact' },
    ],
  },
  value: {
    eyebrow: 'Why choose us',
    title: 'Everything digital for your business, in one place',
    text: 'We help your customers find and contact you easily, with no tech knowledge needed on your side.',
    items: [
      {
        title: 'Instant Presence',
        text: 'A sign on your counter or shop window: customers scan it or tap their phone and land on your social media, location or menu.',
      },
      {
        title: 'Your Custom Website',
        text: 'A website of your own, designed for your business, that looks great on any phone.',
      },
      {
        title: 'We Handle Everything',
        text: 'We set everything up for you and, with the monthly plan, make the changes you need. You keep running your business.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Plans & pricing',
    title: 'Clear prices, no fine print',
    text: (n: number) =>
      `Setup is a one-time payment. If you want to update something later, you choose: a monthly plan with up to ${n} changes per month, or pay for each change only when you need it.`,
    currencyNote: 'Prices in Argentine pesos (ARS).',
  },
  plan: {
    featured: 'Recommended',
    oneTime: 'one-time payment',
    custom: 'custom quote',
    customText: "Tell us what you need and we'll put together a proposal for your business.",
    changesTitle: 'Later changes',
    monthly: 'Monthly plan',
    monthlyNote: (n: number) => `up to ${n} changes per month`,
    perChange: 'Single change',
    perChangeNote: 'no monthly plan',
    perMonth: '/mo',
    noMonthly: 'No monthly fees.',
    ask: 'Ask us',
    cta: 'Ask about this plan',
  },
  plans: {
    'acceso-directo': {
      category: 'Presence',
      name: 'Smart Sign',
      summary:
        'A sign with a QR code and an NFC chip: customers scan it or tap their phone and go straight to your Instagram, location or menu.',
    },
    'acumulador-links': {
      category: 'Web',
      name: 'All Your Links',
      summary:
        'Sign + a simple page that brings everything together: WhatsApp, social media, location and opening hours.',
    },
    'pagina-web': {
      category: 'Web',
      name: 'Your Website',
      summary:
        'Sign + your business website, custom-designed: who you are, what you offer, photos and how to reach you.',
    },
    'web-completa': {
      category: 'Web',
      name: 'Complete Website',
      summary:
        'For businesses that need more than a website that just informs: from letting customers book appointments or place orders, to a complete system custom-built for your business.',
    },
    'whatsapp-basico': {
      category: 'Automation',
      name: 'Basic WhatsApp Button',
      summary: 'Automatic replies and a service menu so you never miss a customer.',
    },
    'catalogo-digital': {
      category: 'Automation',
      name: 'Digital Order Catalog',
      summary: 'Your products online: customers build their order and it reaches you on WhatsApp.',
    },
    'soporte-integral': {
      category: 'Support',
      name: 'Full Tech Support',
      summary: 'Help with your equipment, accounts and digital tools whenever you need it.',
    },
  },
  about: {
    eyebrow: "Who's behind it",
    hello: (name: string) => `Hi, I'm ${name}`,
    text: (site: string) =>
      `I'm the person behind ${site}. When you message us, you talk directly to me: I advise you, build your solution and support you afterwards.`,
    linkedin: 'View my LinkedIn profile',
  },
  contact: {
    eyebrow: "Let's talk about your business",
    title: 'Book a visit or ask about your business',
    text: 'We visit your shop, see how you work and recommend the right solution for you.',
    cta: 'Message us on WhatsApp',
  },
  footer: {
    rights: 'All rights reserved.',
    linkedinLabel: (name: string) => `${name} on LinkedIn`,
  },
};

const ptBr: Dict = {
  meta: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    title: 'Tecno Solvente | Digitalização e Automação Comercial',
    description:
      'Placas inteligentes com QR e NFC e sites para comércios e negócios. Preços claros e contato direto pelo WhatsApp.',
  },
  tagline: 'Digitalização e Automação Comercial',
  nav: {
    label: 'Principal',
    services: 'Serviços',
    plans: 'Planos',
    contact: 'Contato',
    ctaLong: 'Falar no WhatsApp',
    ctaShort: 'WhatsApp',
    language: 'Idioma',
  },
  wa: {
    general: 'Olá Tecno Solvente! Quero saber mais para o meu negócio.',
    visit: 'Olá Tecno Solvente! Quero agendar uma visita para o meu negócio.',
    plan: (name: string) => `Olá Tecno Solvente! Tenho interesse no plano "${name}".`,
  },
  hero: {
    badge: 'Tecnologia para comércios e negócios',
    titleA: 'Conecte seu balcão aos',
    titleB: 'seus clientes',
    text: 'Soluções completas para comércios e negócios: placas inteligentes que seus clientes escaneiam com o celular e sites para que encontrem você e entrem em contato facilmente. Sem complicação e com preços claros.',
    ctaPlans: 'Ver Planos e Preços',
    ctaTalk: 'Vamos conversar',
    howTitle: 'Como funciona',
    howSteps: '3 passos',
    steps: [
      { label: 'Seu cliente aproxima o celular da placa', tag: 'NFC · QR' },
      { label: 'Vê sua página com todas as suas informações na hora', tag: 'Site' },
      { label: 'Manda mensagem no WhatsApp ou segue você nas redes', tag: 'Contato' },
    ],
  },
  value: {
    eyebrow: 'Por que nos escolher',
    title: 'Tudo o que é digital no seu negócio, em um só lugar',
    text: 'Ajudamos seus clientes a encontrar você e entrar em contato facilmente, sem que você precise entender de tecnologia.',
    items: [
      {
        title: 'Presença Instantânea',
        text: 'Uma placa no seu balcão ou vitrine: seus clientes escaneiam ou aproximam o celular e chegam às suas redes, à sua localização ou ao seu cardápio.',
      },
      {
        title: 'Seu Site Sob Medida',
        text: 'Uma página própria para o seu negócio, feita sob medida, que fica ótima em qualquer celular.',
      },
      {
        title: 'Cuidamos de Tudo',
        text: 'Montamos tudo para você e, com a mensalidade, fazemos as alterações que precisar. Você segue cuidando do seu negócio.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Planos e preços',
    title: 'Preços claros, sem letras miúdas',
    text: (n: number) =>
      `A criação é paga uma única vez. Se depois quiser atualizar algo, você escolhe: uma mensalidade com até ${n} alterações por mês, ou pagar cada alteração só quando precisar.`,
    currencyNote: 'Preços em pesos argentinos (ARS).',
  },
  plan: {
    featured: 'Recomendado',
    oneTime: 'pagamento único',
    custom: 'orçamento sob medida',
    customText: 'Conte o que você precisa e montamos uma proposta para o seu negócio.',
    changesTitle: 'Alterações posteriores',
    monthly: 'Mensalidade',
    monthlyNote: (n: number) => `até ${n} alterações por mês`,
    perChange: 'Alteração avulsa',
    perChangeNote: 'sem mensalidade',
    perMonth: '/mês',
    noMonthly: 'Sem custos mensais.',
    ask: 'Sob consulta',
    cta: 'Consultar este plano',
  },
  plans: {
    'acceso-directo': {
      category: 'Presença',
      name: 'Placa Inteligente',
      summary:
        'Uma placa com QR code e chip NFC: seus clientes escaneiam ou aproximam o celular e vão direto para o seu Instagram, sua localização ou seu cardápio.',
    },
    'acumulador-links': {
      category: 'Site',
      name: 'Todos os seus Links',
      summary:
        'Placa + uma página simples que reúne tudo em um só lugar: WhatsApp, redes sociais, localização e horários.',
    },
    'pagina-web': {
      category: 'Site',
      name: 'Seu Site',
      summary:
        'Placa + o site do seu negócio, feito sob medida: quem vocês são, o que oferecem, fotos e como entrar em contato.',
    },
    'web-completa': {
      category: 'Site',
      name: 'Site Completo',
      summary:
        'Para negócios que precisam de mais do que um site informativo: desde que seus clientes agendem horários ou façam pedidos, até um sistema completo feito sob medida para o seu negócio.',
    },
    'whatsapp-basico': {
      category: 'Automação',
      name: 'Botão de WhatsApp Básico',
      summary: 'Respostas automáticas e menu de atendimento para você não perder nenhum cliente.',
    },
    'catalogo-digital': {
      category: 'Automação',
      name: 'Catálogo Digital de Pedidos',
      summary: 'Seus produtos online: o cliente monta o pedido e ele chega direto no seu WhatsApp.',
    },
    'soporte-integral': {
      category: 'Suporte',
      name: 'Suporte Tecnológico Completo',
      summary: 'Ajuda com seus equipamentos, contas e ferramentas digitais quando você precisar.',
    },
  },
  about: {
    eyebrow: 'Quem está por trás',
    hello: (name: string) => `Olá, sou ${name}`,
    text: (site: string) =>
      `Sou quem está por trás da ${site}. Quando você entra em contato, fala diretamente comigo: eu te oriento, monto sua solução e acompanho você depois.`,
    linkedin: 'Ver meu perfil no LinkedIn',
  },
  contact: {
    eyebrow: 'Vamos falar do seu negócio',
    title: 'Agende uma visita ou fale sobre o seu negócio',
    text: 'Vamos até o seu estabelecimento, entendemos como você trabalha e recomendamos a solução certa para você.',
    cta: 'Chame no WhatsApp',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    linkedinLabel: (name: string) => `LinkedIn de ${name}`,
  },
};

export const ui = { es, en, 'pt-br': ptBr } as const;
export type Lang = keyof typeof ui;
