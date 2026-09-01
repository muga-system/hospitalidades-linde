# 18 — QA de implementación LINDE

Fecha de revisión: 2026-09-01.

## Verificaciones automatizadas

- `pnpm check`: 0 errores, 0 warnings, 0 hints (38 archivos Astro/TS).
- `pnpm build`: 32 rutas estáticas generadas y sitemap creado.
- `git diff --check`: sin errores de whitespace.
- Las ocho rutas de opción de la home se generan con slugs e ilustraciones
  transparentes propios; no comparten por accidente la ruta de vivienda
  permanente.

## Cobertura funcional

- Header, footer, navegación con soluciones y proyectos, menú mobile y CTA.
- Home, catálogo de seis modelos, detalle de modelo y portfolio filtrable.
- Detalle de proyecto con navegación relacionada.
- Detalle de las ocho opciones y cuatro soluciones amplias.
- Reel de proyectos full bleed y transiciones Astro entre páginas.
- Wizard de consulta hasta `/gracias/`.
- 404 estático y sitemap.

## Revisión visual y responsive

La revisión visual previa se realizó en desktop y móvil contra HUTS. Se
conservaron los patrones aprobados: ilustración principal contenida, serif de
gran escala frente a sans compacta, espacio negativo, bloques imagen-texto,
secuencia fotográfica full bleed y CTA/footer en superficies diferenciadas.

Las comprobaciones responsive cubrieron 320, 375, 768, 1024, 1440 y 1920 px,
sin overflow horizontal en las pantallas revisadas. El refactor actual solo
reorganiza responsabilidades y mantiene el markup y CSS resultantes.

## Criterios de identidad y accesibilidad

LINDE aporta marca, copy, tokens, datos, ilustraciones y fotografías; no se
incorporan assets ni código del referente. Se mantienen skip link, landmarks,
un `h1` por página, labels, mensajes de error, foco visible, `alt`, reduced
motion y una colección de proyectos usable sin mapa propietario.

## Pendientes no bloqueantes

La demo sigue usando dos fotografías de apoyo reutilizadas con crops distintos.
El recambio por biblioteca fotográfica final está documentado en
`ASSET_TODO.md` y no requiere cambios de componentes.
