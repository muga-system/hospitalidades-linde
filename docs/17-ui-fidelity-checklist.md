# 17 — Checklist de fidelidad visual HUTS → LINDE

Este documento evita que la implementación se desvíe hacia una web de arquitectura genérica.

## Regla de comparación

Para cada pantalla importante, comparar en paralelo LINDE y la página equivalente de HUTS cuando exista acceso web.

No buscar coincidencia de copy, logo, fotografías o colores exactos. Comparar **geometría y experiencia**.

## 1. Primera impresión

- ¿La pantalla tiene la misma ambición de escala?
- ¿La arquitectura/fotografía domina en la misma medida?
- ¿Los títulos son suficientemente grandes?
- ¿La navegación parece parte de la dirección de arte?
- ¿Existe tensión entre texto grande, metadata pequeña y espacios vacíos?

Si la respuesta es “se ve como una buena plantilla”, volver a trabajar.

## 2. Composición

Comparar:

- alto de hero;
- posición del título;
- anchos relativos de imagen/copy;
- full bleed vs container;
- alineaciones;
- desbalances intencionales;
- separación vertical entre secciones;
- relación entre bloques claros/oscuros/fotográficos.

## 3. Tipografía

No comparar el nombre de la fuente; comparar el resultado:

- contraste serif/sans;
- ancho visual;
- line-height;
- tracking;
- cantidad de líneas;
- escala del display;
- densidad de labels/specs.

Ajustar fuente alternativa si Newsreader/Inter no reproducen bien el rol visual.

## 4. Navegación

Revisar:

- altura;
- distribución;
- tamaño de links;
- CTA;
- transparencia/contraste;
- menu overlay/mega menu;
- interacción con scroll;
- mobile menu;
- animación de apertura/cierre.

## 5. Imágenes

- ratio;
- crop;
- posición del punto focal;
- escala relativa al viewport;
- combinación de imagen única/pares/grillas;
- separación entre media y metadata.

Un placeholder incorrectamente recortado puede hacer que la UI parezca diferente aunque el CSS sea correcto.

## 6. Catálogo/modelos

- tamaño de imagen;
- título;
- specs;
- hover;
- separación;
- cantidad visible por viewport;
- comportamiento mobile.

No transformar los modelos en cards de ecommerce o SaaS.

## 7. Portfolio

### Mapa

La demo actual prioriza una grilla directa y filtrable; no depende de un mapa
propietario para descubrir proyectos.

### Grilla

- misma colección;
- ritmo y ratios cercanos;
- hover y title treatment coherentes.
- cada proyecto enlaza a su detalle y permite continuar al anterior/siguiente.

## 8. Detalle de proyecto/modelo

- apertura;
- specs;
- secuencia de media;
- cambios de ancho;
- textos angostos;
- secciones técnicas;
- navegación relacionada;
- CTA final.

En el detalle de solución LINDE la apertura usa una ilustración contenida
centrada, seguida por introducción editorial, bloques imagen-texto alternados,
listas de decisiones y una secuencia de proyectos fotográficos full bleed.

No usar una única plantilla de artículo para todo.

## 9. Motion

Comparar sensación, no código:

- velocidad;
- easing;
- dirección;
- distancia;
- stagger;
- respuesta de hover;
- menu transitions;
- image reveals.

## 10. Mobile

La versión mobile es parte de la referencia, no una degradación.

- hero y títulos siguen teniendo presencia;
- navegación se transforma correctamente;
- imágenes conservan crop intencional;
- metadata sigue compacta;
- elementos táctiles son usables;
- grilla y secuencias fotográficas conservan crop intencional en móvil.

## 11. Anti-MUGA / anti-template

Corregir si aparecen:

- grilla técnica azulada;
- estética blanco/negro brutalista dominante;
- bloques rectangulares sistemáticos propios de muga.dev;
- hero centrado de producto digital;
- cards con border-radius repetidas;
- tres columnas de features con iconos;
- métricas SaaS;
- gradientes/glassmorphism;
- UI “premium” genérica sin relación directa con HUTS.

## 12. Gate final

La implementación pasa este gate solo si se cumplen simultáneamente:

1. **La interfaz recuerda claramente a HUTS.**
2. **La marca, los textos y los assets son inequívocamente LINDE.**
3. **El código es una implementación propia.**
4. **Desktop y mobile conservan esa relación.**
