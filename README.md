# LINDE

Demo comercial de arquitectura y desarrollo en territorio. Es un sitio
estático de Astro que presenta soluciones, modelos y proyectos propios de
LINDE con una dirección visual editorial inspirada en la experiencia de HUTS,
sin reutilizar su código, identidad ni assets.

## Estado actual

- Astro 7 + TypeScript estricto.
- Salida estática preparada para hosting simple.
- Contenido local en JSON, validado y transformado por módulos de dominio.
- 29 páginas estáticas: home, soluciones, modelos, proyectos, proceso,
  servicios, formulario y confirmación.
- La demo no incluye las secciones Estudio ni Guías; se quitaron para mantener
  un recorrido más claro y concentrado.
- Las transiciones de navegación usan `astro:transitions` y respetan
  `prefers-reduced-motion`.

## Arquitectura del código

```text
content/                 Fuentes de contenido editable (JSON)
src/data/
  types.ts               Contratos de dominio
  site.ts                Configuración global
  media.ts               Roles, versiones y fábricas de imágenes
  models.ts              Catálogo de modelos
  projects.ts            Portfolio y estados
  solutions.ts           Soluciones amplias y opciones de la home
  selectors.ts           Consultas y relaciones entre dominios
  content.ts             Fachada compatible para las páginas
src/components/
  global/                Header, footer, CTA y piezas compartidas
  home/                  Entradas de soluciones de la home
  catalog/               Tarjetas de modelos
  projects/              Explorador y tarjetas de proyectos
  solutions/             Hero, decisiones, reel y cierre de soluciones
  forms/                 Wizard de consulta
src/pages/                Composición de rutas Astro
src/scripts/              Comportamientos interactivos aislados
src/styles/               Tokens, tipografía, reset y estilos globales
public/                   Imágenes, ilustraciones, planos y gráficos propios
```

Las páginas componen datos y componentes; no contienen catálogos grandes ni
reglas de negocio. `src/data/content.ts` se conserva como fachada para que una
página no dependa de cómo se organizan internamente los datos.

## Rutas públicas

- `/`
- `/soluciones/` y `/soluciones/[slug]/`
- `/modelos/` y `/modelos/[slug]/`
- `/proyectos/` y `/proyectos/[slug]/`
- `/proceso/`, `/servicios/`, `/empezar/`, `/gracias/` y `/404.html`

Las ocho opciones de la home tienen rutas de detalle propias, en el mismo orden
en que aparecen en la navegación. Las cuatro soluciones amplias se mantienen
como categorías internas relacionadas y no generan rutas públicas duplicadas.

## Desarrollo local

Requiere Node.js compatible con Astro y `pnpm`.

```powershell
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4322
```

`pnpm check` ejecuta el diagnóstico de Astro/TypeScript y `pnpm build` lo
ejecuta antes de generar la salida estática en `dist/`.

## Contenido y assets

Editar primero los JSON de `content/` y respetar los tipos de `src/data/types.ts`.
Las relaciones entre soluciones, modelos y proyectos se resuelven en
`src/data/selectors.ts`.

- `public/images/home/hero-linde.webp`: poster/hero principal.
- `public/video/hero-motion.mp4`: video de fondo del hero optimizado para web,
  con poster/fallback.
- `public/images/library/threshold-linde.webp`: umbral fotográfico de apoyo y
  fallback.
- `public/imagenes/*.webp`: ilustraciones LINDE. Las variantes opacas se reservan
  para tarjetas de la home; las variantes `-transparente` se usan en la
  navegación y en los detalles de solución.
- `public/graphics/plans/`: planos conceptuales de la demo.

Los PNG originales se conservan en `assets/source-images/` y el MP4 original en
`assets/source-video/` para edición o reexportación; no se publican en el
paquete estático.

Mantener siempre `alt`, dimensiones, ratio y punto focal al reemplazar una
imagen. El inventario de recambios está en `ASSET_TODO.md`.

## Criterios de diseño

La referencia visual manda en composición, escala, ritmo, navegación y motion;
la marca, el copy, los datos, los colores exactos y los assets pertenecen a
LINDE. Las decisiones concretas están documentadas en
[`docs/decisions.md`](docs/decisions.md). La documentación operativa vigente
está en [`docs/development.md`](docs/development.md),
[`docs/14-qa-acceptance.md`](docs/14-qa-acceptance.md),
[`docs/17-ui-fidelity-checklist.md`](docs/17-ui-fidelity-checklist.md) y
[`docs/18-qa-implementation.md`](docs/18-qa-implementation.md).

## Historial de trabajo

Trabajar sobre `main` y usar commits pequeños con mensajes que expliquen el
bloque real terminado. Antes de publicar, verificar identidad, rama, remoto,
secrets y el resultado de `pnpm check`/`pnpm build`. El changelog de la demo
está en [`CHANGELOG.md`](CHANGELOG.md).
