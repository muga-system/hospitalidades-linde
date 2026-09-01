# 12 — Accesibilidad, SEO y performance

## Accesibilidad

### Obligatorio

- Un `h1` por página.
- Jerarquía de headings sin saltos absurdos.
- `nav`, `main`, `footer`, `article`, `section` semánticos.
- Skip link.
- Contraste WCAG AA en texto normal.
- Focus visible en todos los controles.
- Menú navegable con teclado.
- Escape cierra overlays/popups.
- Alt text descriptivo; `alt=""` para imágenes decorativas.
- Inputs con `label` real.
- Errores de formulario asociados con `aria-describedby`.
- Mapa no puede ser la única forma de acceder a proyectos: siempre existe grilla/lista equivalente.

## SEO

### Home

Title demo: `LINDE — Arquitectura y desarrollo en territorio`

Description demo: `Viviendas, refugios y proyectos de pequeña hospitalidad pensados desde el terreno hasta la obra.`

### Schema

No declarar `LocalBusiness`, `Architect` o métricas reales si la demo no representa una empresa real. Para portfolio ficticio, mantener schema mínimo o desactivarlo.

### URLs

- slugs cortos;
- español sin tildes en path;
- canonical consistente;
- evitar query params indexables de filtros si generan duplicación.

## Performance

Objetivos de demo en una conexión razonable:

- Lighthouse Performance >= 90 cuando no hay mapa abierto/inicializado de forma pesada.
- Accessibility >= 95.
- Best Practices >= 95.
- SEO >= 95.

### Estrategias

- mantener el portfolio HTML directo y filtrable sin depender de un mapa;
- poster para video;
- lazy-load del video cuando sea posible sin romper LCP;
- no cargar todas las imágenes de galería al inicio;
- no usar 4 pesos de cada fuente;
- limitar JS inicial.

## Core Web Vitals

- Evitar CLS reservando dimensiones.
- Hero LCP con poster/image optimizada.
- Event handlers pequeños.
- No usar scroll listeners sin throttling o IntersectionObserver.
