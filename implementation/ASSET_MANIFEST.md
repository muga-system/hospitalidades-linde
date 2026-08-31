# Asset manifest para la implementación

## Regla

No se incluyen fotografías ni recursos del referente. La implementación debe usar material propio/licenciado o placeholders originales.

Los assets temporales **deben respetar el rol visual, ratio, crop y peso compositivo** que necesita la interfaz. Un placeholder genérico mal proporcionado puede destruir la fidelidad del layout.

## Hero

- `public/images/home/hero-poster.webp` — ratio según composición final, ideal mínimo 1920 px de ancho.
- opcional `public/video/home/hero-loop.mp4` — loop corto, muted, optimizado.

Buscar arquitectura contemporánea fuertemente vinculada al paisaje, no imágenes inmobiliarias genéricas.

## Soluciones

- `solution-vivienda.webp`
- `solution-refugio.webp`
- `solution-hospitalidad.webp`
- `solution-unidad.webp`

Definir ratios después de observar el patrón equivalente del referente. No forzar 3:2 si la composición necesita otra proporción.

## Modelos

Por cada modelo:

- cover;
- exterior;
- interior;
- planta/elevación.

Ratios y crops deben adaptarse al componente visual final.

## Proyectos

Por cada proyecto:

- cover;
- hero;
- 3–5 imágenes secundarias;
- diagrama/plano opcional.

## SVGs / graphics

Crear recursos propios en `public/graphics/` para sustituir la función de los gestos gráficos del referente:

- marcas/curvas/gestos LINDE;
- flechas propias;
- iconografía de mapa;
- elementos de transición.

No descargar SVGs de HUTS.

## Equipo

No usar retratos stock si no son necesarios. La sección puede resolverse con contenido propio o placeholders claramente temporales.
