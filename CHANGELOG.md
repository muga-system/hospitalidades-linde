# Changelog

## [Unreleased]

- CTA de navegación sin flecha, con el mismo barrido del hero compartido
  desde `ActionLink`, también en el menú móvil y al enfocar con teclado.
- Refactor de datos por dominio (`media`, `site`, `models`, `projects`,
  `solutions` y `selectors`) con `content.ts` como fachada compatible.
- Detalle de soluciones dividido en hero, decisiones, reel de proyectos y
  cierre, sin cambiar la composición visual ni las rutas.
- Modificadores locales para conservar los estilos compactos al usar CSS scoped
  en los nuevos componentes.
- Documentación operativa, decisiones de diseño y roles de assets actualizados.
- Home simplificada: se eliminaron bloques editoriales repetidos sin tocar los
  carruseles horizontales aprobados.
- Detalles de proyectos con condiciones específicas del sitio, navegación
  anterior/siguiente y sin galería hero repetida ni grilla relacionada.
- Proceso reducido a seis pasos y una imagen; Servicios separado por alcance
  contratables; Modelos con una sola introducción y un único cierre.
- Las cuatro soluciones amplias quedaron como categorías internas sin rutas
  públicas duplicadas.
- Imágenes públicas convertidas a WebP; los PNG fuente se conservan fuera de
  `public/`.
- Integración de `hero-motion.mp4` optimizado para web en el hero, con poster
  WebP, fallback y salida para `prefers-reduced-motion`.
- Hero con un único CTA de pastilla verde y círculo independiente: barrido
  claro secuencial y relevo de flecha horizontal por diagonal al hacer hover
  o enfocar con teclado; adaptación sin movimiento y sin CTA de proyectos.

## [0.1.0] — 2026-09-01

- Demo estática LINDE con 32 rutas generadas por Astro.
- Home y navegación con ocho opciones de solución en orden estable.
- Rutas de detalle únicas para las ocho opciones y cuatro agrupaciones amplias.
- Ilustraciones LINDE opacas para tarjetas y variantes transparentes para
  detalles de solución.
- Portfolio directo con filtros, detalle de proyecto y navegación relacionada.
- Reel fotográfico full bleed en páginas de solución.
- Wizard de consulta local con página de éxito.
- Transiciones de navegación Astro y soporte de reduced motion.
- Secciones Estudio y Guías retiradas del alcance de la demo.
