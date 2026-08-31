# 06 — Sistema de componentes

## Regla de diseño de componentes

Los componentes existen para implementar la UI observada, no para forzar la UI dentro de un design system genérico.

No crear una biblioteca abstracta de cards, panels y badges que homogenice las pantallas. Reutilizar cuando exista una forma realmente repetida en la referencia.

## Globales

### `SiteHeader`

Responsabilidad crítica de fidelidad.

- navegación;
- CTA;
- theme light/dark/auto;
- sticky/transparencia;
- overlays/menús;
- menú mobile;
- estados de scroll;
- interacción equivalente al referente implementada desde cero.

Comparar visualmente altura, espaciado, alineación, tamaño de marca, densidad de links y transición.

### `SiteFooter`

- composición amplia;
- CTA editorial;
- navegación agrupada;
- contacto;
- marca LINDE;
- SVG propio si corresponde;
- proporciones cercanas al referente.

### `ActionLink` / `Button`

Variantes según rol visual. No imponer botón sólido si el referente resuelve la acción como link, flecha o control textual.

### `SectionIntro`

- eyebrow;
- título;
- texto;
- acción.

Debe permitir alineación y posiciones asimétricas.

### `MediaFrame`

- image/video;
- aspect ratio;
- caption;
- object-position;
- full-bleed opcional;
- overlay opcional;
- responsive art direction.

## Catálogo

### `ModelCard`

- nombre;
- slug;
- superficie;
- dormitorios;
- baños;
- usos;
- imagen;
- estado destacado.

La fidelidad depende tanto de proporción y espacios como del contenido.

### `ModelSpecs`

Metadata compacta con jerarquía pequeña frente al display.

### `ModelGallery`

Preferir composición editorial equivalente al referente; no insertar un carousel por defecto.

## Soluciones

### `SolutionEntry`

Evitar card genérica. Debe poder funcionar como bloque de imagen + título + resumen + acción con diferentes proporciones según pantalla.

### `ConsiderationList`

Numeración y copy breve.

## Proyectos

### `ProjectCard`

- cover;
- nombre;
- ubicación;
- modelo;
- superficie;
- tipo;
- estado opcional.

### `ProjectFilter`

- tipo;
- modelo;
- superficie;
- provincia/región.

### `ProjectMap`

- MapLibre;
- markers propios;
- popup/card;
- CTA;
- accesibilidad;
- zoom controlado.

Markers, popup, controles y layout deben adaptarse visualmente a la referencia, sin copiar SVGs.

### `ViewToggle`

`Mapa | Grilla` con semántica correcta y tratamiento cercano al referente.

## Proceso

### `ProcessStep`

- número;
- nombre;
- descripción;
- entregables;
- media opcional.

### `PrincipleBlock`

- número;
- título;
- cuerpo;
- subprincipios.

## Guías

### `GuideCard`

Implementar solo si existe un patrón de listado consistente. Evitar “cardificar” todo.

## Conversión

### `LeadWizard`

1. contacto;
2. ubicación/lote;
3. tipo;
4. programa/superficie;
5. horizonte/presupuesto opcional;
6. mensaje/revisión.

Requisitos:

- progreso;
- atrás/siguiente;
- validación;
- errores inline;
- estado persistente opcional;
- éxito local;
- composición y transición cercanas al `/get-started/` de referencia usando copy y controles LINDE.
