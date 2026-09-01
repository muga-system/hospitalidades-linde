# Inventario y recambios de assets

Los archivos actuales son originales de LINDE y suficientes para la demo. Este
registro indica qué puede reemplazarse por material final sin tocar los
componentes.

## Assets vigentes

- `public/images/home/hero-linde.png`: poster del hero principal.
- `public/images/library/threshold-linde.png`: fotografía de umbral usada como
  apoyo y fallback editorial.
- `public/imagenes/{slug}.png`: ilustraciones opacas para tarjetas de la home,
  navegación y footer.
- `public/imagenes/{slug}-transparente.png`: ilustraciones transparentes para
  hero de detalle de cada opción de solución.
- `public/graphics/plans/*.svg`: planos conceptuales propios de los seis
  modelos demo.
- `public/graphics/map-territory.svg`: gráfico de apoyo del portfolio.

## Pendientes de producción

- Reemplazar el poster del hero por video o fotografía final cuando exista una
  dirección de producción aprobada.
- Sustituir las fotografías compartidas de apoyo por una biblioteca propia de
  arquitectura, interior y materialidad; conservar dimensiones, ratios, crops
  y puntos focales definidos en `src/data/media.ts`.
- Sustituir planos conceptuales por documentación autorizada si la demo pasa a
  presentación comercial real.

No descargar, hotlinkear ni incorporar assets del sitio de referencia. Todo
recambio debe conservar `alt`, dimensiones y rol visual.
