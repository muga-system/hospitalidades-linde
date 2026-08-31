# Prompt maestro para Codex

Usar este bloque como instrucción inicial.

---

Quiero que construyas **LINDE** de forma autónoma siguiendo toda la documentación de este repositorio.

## Antes de escribir código

1. Leé `AGENTS.md` completo.
2. Leé `README.md` y `MANIFEST.md`.
3. Leé todos los archivos de `docs/` en orden numérico.
4. Revisá `wireframes/`.
5. Revisá `content/`.
6. Revisá `implementation/ASSET_MANIFEST.md`.
7. Si tenés acceso web, inspeccioná visualmente `https://huts.com/` y las URLs de `docs/16-reference-sources.md` antes de fijar el sistema visual.

No empieces a producir una estética alternativa antes de comprender el referente.

## Objetivo principal

HUTS es la **referencia visual principal** de LINDE.

La prioridad máxima es emular con la mayor fidelidad práctica posible:

- interfaz;
- composición;
- escala;
- proporciones;
- jerarquía;
- ritmo;
- navegación;
- tratamiento de fotografía/video;
- relación texto/imagen;
- catálogo;
- portfolio mapa/grilla;
- páginas de detalle;
- motion;
- responsive;
- sensación general de la experiencia.

**No interpretes “identidad propia” como permiso para alejarte visualmente del referente.**

No quiero una reinterpretación editorial genérica, una landing de arquitectura estándar ni una variante de muga.dev.

Quiero que una persona que conozca HUTS reconozca inmediatamente la referencia visual al abrir LINDE.

## Separación de identidad

LINDE debe usar recursos propios para:

- marca y logo;
- textos;
- nombres;
- proyectos/datos;
- fotografías/videos/renders/planos;
- SVGs;
- iconos;
- ilustraciones;
- tokens y valores de color exactos;
- fuentes legalmente utilizables que no reutilicen archivos propietarios del referente.

No copies ni extraigas HTML, CSS, JavaScript, DOM o assets de HUTS. Implementá el resultado desde cero.

No cambies una decisión de UI solamente para diferenciarte.

## Autonomía

Trabajá de punta a punta sin pedirme decisiones menores.

Podés:

- crear/modificar archivos;
- instalar dependencias necesarias;
- ejecutar comandos;
- levantar el proyecto;
- corregir errores;
- refactorizar;
- inspeccionar visualmente;
- tomar decisiones de implementación coherentes.

Si algo no está especificado, elegí la solución que mejor preserve la fidelidad visual del referente sin sacrificar accesibilidad ni mantenimiento.

## Stack

- Astro estable.
- TypeScript strict.
- pnpm.
- CSS propio con tokens.
- MapLibre + OpenStreetMap.
- Datos locales, sin CMS en MVP.
- Hidratación solo donde sea necesaria.
- No framework UI pesado.

## Arquitectura

- contenido desacoplado de presentación;
- datos tipados;
- componentes solo cuando exista patrón real;
- imports explícitos;
- HTML semántico;
- evitar N+1;
- evitar cascadas de render/hidratación;
- evitar abstracciones prematuras.

## Proceso de implementación

Seguí `docs/13-implementation-roadmap.md`.

La home debe funcionar como prueba visual antes de multiplicar plantillas. Si la home se ve como un buen sitio genérico pero no recuerda claramente a HUTS, corregila antes de avanzar.

Construí todo el alcance:

- header/menu;
- home;
- soluciones;
- 6 modelos;
- index y detalle de modelos;
- portfolio mapa/grilla;
- detalle de proyectos;
- proceso;
- servicios;
- estudio;
- guías;
- wizard;
- responsive;
- motion;
- SEO base;
- accesibilidad;
- performance.

## Assets

Seguí `implementation/ASSET_MANIFEST.md`.

No uses assets de HUTS. Si faltan assets finales, creá placeholders originales que respeten ratios, crops y peso visual del layout.

## QA visual obligatorio

No alcanza con que compile.

Compará LINDE con HUTS en desktop y mobile cuando tus herramientas lo permitan.

Revisá especialmente:

- altura y composición del hero;
- header/menu;
- tamaños tipográficos;
- ancho y posición del copy;
- espacios verticales;
- full bleed;
- ratios/crops de imagen;
- densidad de metadata;
- catálogo;
- mapa/grilla;
- páginas de detalle;
- footer;
- hovers/reveals/transiciones.

Pasá `docs/17-ui-fidelity-checklist.md` antes del QA técnico.

## QA técnico

Pasá `docs/14-qa-acceptance.md` completo.

Ejecutá checks y build de producción. Corregí errores y warnings razonables.

## Git

Si no existe repo, inicializalo.

Hacé commits claros en español por unidades lógicas. Antes del cierre:

- `git status`
- `git --no-pager diff`

No hagas push sin remoto.

## Criterio de finalización

Una implementación funcional pero visualmente genérica está incompleta.

El proyecto está terminado cuando:

1. la relación visual con HUTS es evidente;
2. la identidad/contenido/assets pertenecen a LINDE;
3. desktop y mobile están resueltos;
4. el build pasa;
5. QA visual y técnico pasan.

Al final entregame un informe conciso con páginas, arquitectura, decisiones, QA/build, limitaciones y comandos de ejecución.

---
