# 11 — Arquitectura técnica vigente

## Stack

- Astro 7 con salida `static`.
- TypeScript estricto y datos JSON locales.
- CSS propio con tokens y estilos próximos a cada componente Astro.
- Fuentes open source autoalojadas (`Newsreader` e `Inter`).
- `@astrojs/sitemap` para el sitemap de producción.

La demo no necesita React, Vue, un CMS, un router de cliente ni un mapa con
clave propietaria. Las interacciones se resuelven con islas Astro pequeñas y
scripts DOM aislados.

## Capas

1. `content/`: edición de contenido sin lógica de presentación.
2. `src/data/`: contratos, normalización, media y selectores de dominio.
3. `src/components/`: piezas visuales con responsabilidad única.
4. `src/scripts/`: filtros, rails, reel y wizard; inicialización compatible con
   `astro:page-load`.
5. `src/pages/`: composición de rutas y metadata.
6. `src/layouts/` y `src/styles/`: shell global, tokens, tipografía y accesibilidad.

## Media y rendimiento

Todas las imágenes declaran `width`/`height` y `alt`. Hero usa `fetchpriority`
alto; contenido posterior usa `loading="lazy"`. Las variantes de ilustración se
seleccionan por rol en `src/data/media.ts`, evitando duplicar rutas o crops en
componentes.

## Motion y navegación

`ClientRouter` de `astro:transitions` mantiene transiciones suaves entre
páginas. El reel fotográfico utiliza un stage sticky con variables CSS y un
script acotado para actualizar escenas durante el scroll. Cada animación tiene
salida estática bajo `prefers-reduced-motion: reduce`.

## Portfolio y formulario

`/proyectos/` prioriza una colección HTML directa y filtrable; el mismo array
tipado alimenta las tarjetas y los detalles. El wizard valida en cliente y
termina en éxito local; la conexión a un endpoint real queda fuera de esta
demo.

## Despliegue

`pnpm build` genera `dist/`, apto para hosting estático. `PUBLIC_SITE_URL`
puede definir el dominio usado por canonical y sitemap. No hay secretos ni
servicios externos obligatorios en el MVP.
