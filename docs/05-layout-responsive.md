# 05 — Layout y responsive

## Regla principal

La geometría de HUTS es referencia directa. No normalizar todo dentro de un contenedor estándar ni convertir cada sección en una grilla uniforme.

El objetivo es reproducir:

- cambios fuertes de escala;
- full bleed;
- asimetrías controladas;
- texto desplazado respecto de imagen;
- grandes márgenes intencionales;
- secciones donde el vacío es parte de la composición;
- recomposición móvil con el mismo carácter.

## Contenedor

- máximo visual orientativo: 1600–1800 px;
- algunas superficies e imágenes deben llegar a viewport completo;
- contenido editorial: 680–820 px cuando corresponda;
- gutters variables según composición, no un único padding global.

Referencia de gutters:

- móvil: 18–22 px;
- tablet: 28–36 px;
- desktop: 40–64 px;
- wide: 64–88 px.

## Grilla

Usar una base de 12 columnas en desktop como ayuda, no como resultado visual.

- móvil: 4;
- tablet: 6;
- desktop: 12.

Las piezas pueden romper esa grilla deliberadamente para acercarse a las composiciones del referente.

## Espaciado

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160 / 192
```

No reducir los espacios grandes por temor a “desperdiciar pantalla”. El aire es parte de la UI.

## Breakpoints

```text
480
768
1024
1280
1536
```

Ajustar por comportamiento visual real.

## Hero

- Desktop: 88–100svh según la página/referencia.
- Móvil: 80–92svh.
- Full bleed cuando la referencia use superficie dominante.
- Copy superpuesto o desplazado según el patrón equivalente de HUTS.
- Video con poster.
- Crop y `object-position` ajustados por breakpoint.

## Catálogos y listados

No imponer “3 cards iguales” si la referencia usa una composición más libre.

Las tarjetas deben respetar:

- ratios de imagen;
- densidad de metadata;
- tamaño de títulos;
- espacio entre items;
- comportamiento hover;
- orden y reflujo mobile cercanos al referente.

## Portfolio

- mapa como vista principal cuando corresponda;
- mapa desktop 70–85svh;
- móvil con mapa + sheet/resultados;
- toggle mapa/grilla con jerarquía equivalente al referente;
- la grilla puede ser regular o editorial según la inspección visual del sitio de referencia.

## Páginas de detalle

Permitir alternancia de:

- hero grande;
- title/specs compactos;
- texto angosto;
- imágenes full-width;
- pares de imágenes;
- bloques técnicos;
- enormes espacios de respiración.

Evitar la plantilla “hero + sección centrada + 3 cards + CTA”.

## Header

El tamaño exacto se ajusta después de comparar contra HUTS.

- desktop: aproximadamente 64–88 px;
- móvil: 56–72 px;
- comportamiento transparente/sólido y sticky debe seguir la sensación del referente;
- menú y overlays son parte crítica de fidelidad.

## Responsive móvil

No limitarse a `grid-template-columns: 1fr`.

Para cada pantalla preguntar:

1. ¿qué elemento domina en desktop?
2. ¿qué jerarquía conserva HUTS en mobile?
3. ¿qué cambia de posición?
4. ¿qué se vuelve horizontal/scrollable?
5. ¿qué deja de estar superpuesto?
6. ¿cómo cambia la navegación?

## Texto

Body nunca menor de 16 px. Los displays pueden ser muy grandes si mantienen legibilidad. Ajustar `letter-spacing`, ancho, balance y line-height para preservar la personalidad del referente.
