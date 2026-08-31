# AGENTS.md — instrucciones operativas para Codex

## Misión

Implementar la demo **LINDE** siguiendo este paquete, usando `https://huts.com/` como **referencia visual y de interfaz principal**.

La prioridad no es diseñar “otro sitio de arquitectura” inspirado vagamente en HUTS. La prioridad es **recrear con alta fidelidad práctica la familia de experiencia de HUTS**: composición, escala, ritmo, jerarquía, navegación, tratamiento de imágenes, comportamiento responsive, densidad, transiciones e interacción.

LINDE debe diferenciarse por identidad y contenido propios, no por alejarse artificialmente de la UI de referencia.

## Regla de interpretación principal

**HUTS manda en UI y experiencia. LINDE manda en identidad, contenido y assets.**

Si existe tensión entre “hacer algo original” y “mantener la sensación/interfaz del referente”, conservar la lógica visual del referente y resolver la originalidad mediante recursos propios.

No convertir LINDE en una reinterpretación editorial genérica, un template de arquitectura ni una extensión visual de MUGA.

## Qué se debe emular de cerca

- arquitectura visual general;
- proporciones y escalas entre bloques;
- ritmo vertical y uso del espacio negativo;
- jerarquía tipográfica y contraste de escalas;
- relación entre serif display y sans de interfaz;
- navegación desktop/mobile;
- comportamiento del header y menús;
- hero y tratamiento full-bleed de fotografía/video;
- composición asimétrica entre imagen, título, texto y metadata;
- tarjetas/fichas arquitectónicas y su densidad;
- portfolio con mapa/grilla;
- estructura y lectura de páginas de modelo/proyecto;
- transiciones, reveals, hovers y tempo general;
- comportamiento responsive y recomposición en móvil;
- sensación de sitio editorial/arquitectónico de alta gama sin caer en una landing genérica.

## Qué debe ser propio de LINDE

1. Marca, logotipo y descriptor.
2. Textos y microcopy.
3. Fotografías, videos, renders y planos.
4. SVGs, ilustraciones, iconos y motivos gráficos.
5. Tokens y valores de color exactos.
6. Fuentes: no usar archivos tipográficos propietarios de HUTS.
7. Nombres de modelos, proyectos, soluciones y datos.
8. Código, DOM, CSS y JavaScript: implementar desde cero.

## Reglas obligatorias

1. Leer toda la documentación antes de crear componentes.
2. Si hay acceso web, abrir HUTS y contrastar visualmente las páginas equivalentes durante la implementación y el QA.
3. No copiar/extraer HTML, CSS, JS ni assets del sitio de referencia.
4. No descargar ni hotlinkear imágenes, videos, iconos, SVGs, ilustraciones, logos o fuentes de HUTS.
5. No usar textos, nombres de modelos/proyectos o datos del referente.
6. Los SVGs/motivos propios pueden ocupar roles visuales equivalentes a los del referente, pero deben ser dibujados para LINDE.
7. Los tokens deben ser propios, pero conservar roles cromáticos y relaciones de contraste coherentes con la sensación del referente.
8. No cambiar una composición, proporción o interacción solamente “para que sea diferente”.
9. Mantener los datos demo desacoplados de la UI.
10. Priorizar HTML semántico y Astro sin hidratar componentes que no lo necesiten.
11. Cualquier animación debe respetar `prefers-reduced-motion`.
12. No instalar dependencias si CSS/DOM simple resuelve el problema.
13. El mapa debe funcionar sin clave propietaria; preferir MapLibre + OpenStreetMap.
14. No introducir un CMS en el MVP. Preparar tipos para migrar luego.
15. El formulario debe validar en cliente y terminar en éxito local; documentar dónde conectar un endpoint real.
16. Mantener textos demo en español rioplatense neutro y profesional.
17. Métricas demo deben estar marcadas como `isDemo: true`.
18. Usar `pnpm`, nunca npm.
19. Evitar N+1, hidrataciones innecesarias y cascadas de renderizado.

## Prioridad de decisión

Cuando haya que elegir entre alternativas, usar este orden:

1. fidelidad de UI/experiencia respecto de HUTS;
2. legibilidad y responsive;
3. identidad y contenido propios de LINDE;
4. accesibilidad;
5. performance;
6. simplicidad técnica;
7. abstracción/reutilización.

La fidelidad visual nunca justifica copiar código o assets de terceros.

## Stack recomendado

- Astro estable vigente al momento de implementar.
- TypeScript estricto.
- CSS propio con custom properties/tokens.
- MapLibre GL JS + OpenStreetMap.
- Astro Content Collections o TypeScript/JSON local.
- Motion: CSS primero; librería pequeña solo si una interacción equivalente al referente realmente la necesita.
- Sin framework UI pesado por defecto.

## Estructura sugerida

```text
src/
  components/
    global/
    home/
    catalog/
    projects/
    forms/
  content/
  data/
  layouts/
  pages/
  styles/
  utils/
public/
  images/
  video/
  icons/
  graphics/
```

## Orden de implementación

1. Lectura completa + inspección visual del referente.
2. Tokens + tipografía + layout global.
3. Header/footer y navegación.
4. Datos locales y tipos.
5. Home completa con fidelidad visual antes de multiplicar plantillas.
6. Catálogo y detalle de modelo.
7. Portfolio grilla.
8. Portfolio mapa.
9. Detalle de proyecto.
10. Proceso/servicios/estudio.
11. Guías.
12. Formulario multipaso.
13. Motion e interacciones.
14. Comparación visual contra el referente en desktop/mobile.
15. QA responsive, accesibilidad y performance.

## Criterio de cierre

No declarar el proyecto terminado hasta completar `docs/14-qa-acceptance.md` y `docs/17-ui-fidelity-checklist.md`.

Una implementación técnicamente correcta pero visualmente genérica **no está terminada**.
