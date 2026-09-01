# 18 — QA de implementación LINDE

Fecha de revisión: 2026-08-31.

## Cobertura realizada

- `pnpm check`: 0 errores, 0 warnings, 0 hints.
- `pnpm build`: 25 rutas estáticas generadas y sitemap creado.
- Enlaces internos de los 25 HTML de `dist/`: 0 destinos internos ausentes.
- Navegador: home desktop y móvil, dropdown desktop, menú móvil, modelo
  `Lenga 84`, portfolio grilla/filtro y wizard hasta `/gracias/`.
- Responsive: comprobación de overflow horizontal en 320, 375, 768, 1024,
  1440 y 1920 px; sin overflow en las pantallas revisadas.
- Consola: sin errores ni warnings durante las pruebas de home, detalle de
  modelo y portfolio.

## Cierre de `14-qa-acceptance.md`

- Identidad: LINDE, copy, tokens, fotografías generadas para la demo y SVGs
  originales; sin assets, código ni textos del referente.
- Global/rutas: las 25 rutas requeridas, 404, header, footer y CTA principal
  están generados y enlazados.
- Navegación: panel desktop con soluciones ilustradas y proyectos, menú móvil, Escape, foco y estado de scroll
  verificados en navegador.
- Home, modelos, portfolio y wizard: funcionalidades y recorridos principales
  verificados. El portfolio usa una grilla directa y filtrable, sin mapa
  propietario ni interacción que oculte los proyectos.
- Accesibilidad: skip link, landmarks, un `h1` por página, inputs etiquetados,
  errores con `role=alert`, reduced motion y navegación alternativa de mapa
  implementados.

## Cierre de `17-ui-fidelity-checklist.md`

La comparación se realizó contra HUTS en desktop y móvil durante la
implementación. En las soluciones se preservaron los patrones observados:
ilustración principal contenida, serif de gran escala frente a UI sans
compacta, mucho espacio negativo, bloques imagen-texto alternados, listas con
reglas/checks, secuencia de fotografías a pantalla completa y CTA/footer en
dos superficies. LINDE mantiene una paleta, marca, planos, copy y assets
propios.

## Limitación conocida

La demo usa dos fotografías originales reutilizadas con crops distintos para
no inventar un banco de fotos externo. `ASSET_TODO.md` identifica el recambio
por fotografía y video final. Las ilustraciones nuevas viven en
`public/imagenes/` y se usan tanto en soluciones como en navegación y footer.
