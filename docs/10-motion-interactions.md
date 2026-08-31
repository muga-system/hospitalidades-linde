# 10 — Motion e interacciones

## Principio

El movimiento es parte de la fidelidad de interfaz. No debe convertirse en espectáculo ni eliminarse por defecto para “simplificar”.

Si Codex puede inspeccionar el referente, debe observar tempo, desplazamientos, entrada de menú, hover, reveals y cambios de estado, y recrear una sensación equivalente con implementación propia.

## Timing base inicial

```css
--motion-fast: 160ms;
--motion-base: 280ms;
--motion-slow: 520ms;
--ease-standard: cubic-bezier(.2,.7,.2,1);
```

Estos valores son punto de partida. Ajustarlos durante QA si el referente se percibe más lento/rápido.

## Header y navegación

Prioridad alta:

- transición transparente/sólida;
- entradas y salidas de menu;
- estados hover;
- overlays;
- comportamiento con scroll;
- ninguna transición debe provocar layout shift.

## Links y controles

- microdesplazamientos de flechas/marcas;
- cambios de contraste;
- subrayados/gestos si corresponden;
- foco separado del hover.

No convertir todo en botones animados genéricos.

## Media y cards

- zoom muy contenido si la referencia lo utiliza;
- cambio de crop/overlay solo cuando aporte;
- metadata estable;
- tiempos coherentes entre todas las piezas.

## Scroll reveal

Usar solamente donde ayude a reproducir el carácter del referente:

- opacity;
- translate moderado;
- clipping/masks para media o títulos cuando tenga sentido;
- stagger pequeño.

No animar cada párrafo de forma mecánica.

## SVGs LINDE

Los SVGs propios pueden animarse para ocupar un rol equivalente al gesto gráfico del referente. La forma del dibujo debe ser original.

## Portfolio Mapa/Grilla

- conservar estado/filtros;
- transición breve y legible;
- popup/map markers con respuesta refinada;
- no desmontar o recalcular innecesariamente.

## Wizard

- slide/fade corto;
- progreso claro;
- foco en heading de cada paso;
- sensación equivalente al flujo de referencia sin copiar assets/copy.

## Reduced motion

Con `prefers-reduced-motion: reduce`:

- eliminar reveals no esenciales;
- eliminar parallax;
- mantener cambios de estado casi instantáneos;
- asegurar que la UI siga completa.

## Hero media

Si se usa video:

- `autoplay muted loop playsinline`;
- poster local;
- sin audio;
- crop ajustado por viewport;
- loop optimizado.
