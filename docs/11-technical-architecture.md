# 11 — Arquitectura técnica

## Decisión de stack

### Astro + TypeScript

Motivo:

- la mayor parte del sitio es contenido/marketing;
- excelente control del HTML enviado;
- hidratación selectiva para mapa y wizard;
- fácil evolución a CMS;
- menor complejidad que replicar el stack del referente.

## Dependencias mínimas sugeridas

- `astro`
- `typescript`
- `maplibre-gl`
- integración de sitemap si no está incluida en la configuración elegida

Opcionales, solo si aportan valor real:

- librería pequeña de motion;
- `@fontsource/newsreader` y `@fontsource/inter` si se decide autoalojar fuentes por paquete.

## No usar por defecto

- Tailwind si el objetivo es estudiar/mostrar CSS editorial propio.
- React/Vue/Svelte para componentes puramente estáticos.
- GSAP si CSS resuelve los efectos.
- un CMS antes de validar el sistema.

## Islas interactivas

Hidratar solo:

1. `ProjectMap`.
2. `ProjectFilters` si requiere estado complejo.
3. `LeadWizard`.
4. Menú mobile si la implementación vanilla se vuelve innecesariamente compleja.

## CSS

Estructura sugerida:

```text
src/styles/
  tokens.css
  reset.css
  typography.css
  global.css
  utilities.css
```

Los estilos específicos pueden vivir cerca de componentes `.astro` si no rompen consistencia.

## Imágenes

- Preferir pipeline de imágenes de Astro para assets importados cuando aplique.
- Definir `width`/`height`.
- `loading="lazy"` excepto hero/above-the-fold.
- AVIF/WebP donde convenga.
- No degradar renders arquitectónicos con compresión excesiva.

## Mapa

### Implementación

- MapLibre GL JS.
- Tiles OpenStreetMap mediante proveedor permitido para prototipo o style compatible.
- Para una demo local sin red, ofrecer fallback `StaticProjectMap` con SVG simplificado y puntos.

### Datos

El mapa consume el mismo array `projects` que la grilla.

## Formulario

MVP:

- validación HTML + TypeScript;
- estado local;
- éxito simulado;
- adaptar luego a endpoint real.

No guardar datos personales en `localStorage` por defecto. Si se usa persistencia temporal, preferir `sessionStorage` y documentarla.

## SEO

Crear componente `SeoHead` con:

- title;
- description;
- canonical;
- OG tags;
- Twitter/OpenGraph image;
- noindex opcional para demo privada.

## Entornos

- `PUBLIC_SITE_URL`.
- flag `PUBLIC_DEMO_MODE=true`.
- no secrets en el MVP.

## Despliegue

Compatible con hosting estático si formulario y datos siguen locales. Si luego se agrega backend, elegir adapter según plataforma real.
