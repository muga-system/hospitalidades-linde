# Manifest de assets LINDE

Este inventario describe los assets que consume la implementación actual. No
incluye recursos del referente HUTS.

| Rol | Ubicación | Uso |
| --- | --- | --- |
| Hero | `public/images/home/hero-linde.png` | Poster principal de la home |
| Apoyo/fallback | `public/images/library/threshold-linde.png` | Decisiones y fallback de soluciones |
| Ilustración opaca | `public/imagenes/*.png` | Tarjetas de home, navegación y footer |
| Ilustración transparente | `public/imagenes/*-transparente.png` | Hero de detalle de solución |
| Planos | `public/graphics/plans/*.svg` | Detalle de los seis modelos |
| Portfolio gráfico | `public/graphics/map-territory.svg` | Apoyo visual del explorador |

Las dimensiones, `alt`, versiones y puntos focales se centralizan en
`src/data/media.ts`. Para pendientes de producción consultar
[`ASSET_TODO.md`](../ASSET_TODO.md).
