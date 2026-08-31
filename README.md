# LINDE — paquete de documentación para Codex

Este paquete define una demo comercial para **LINDE**, una marca ficticia de arquitectura, desarrollo rural y micro-hospitalidad.

La referencia principal es `https://huts.com/` y, en esta versión de la documentación, la referencia es **deliberadamente visual además de estratégica**.

## Directriz central

**HUTS manda en UI y experiencia. LINDE manda en identidad, contenido y assets.**

El objetivo es que LINDE se acerque todo lo posible a la calidad, composición, ritmo, escala, jerarquía, navegación, uso de fotografía, interacción y sensación general del referente, sin reutilizar su marca, contenido, archivos ni implementación.

No se busca una reinterpretación libre del concepto ni “otro sitio editorial sobrio”. Tampoco se busca trasladar la estética de muga.dev. La relación visual con HUTS debe ser evidente.

## Qué puede conservar la implementación

- estructura y lógica de interfaz;
- proporciones generales;
- uso de grandes superficies fotográficas;
- escalas tipográficas y contraste entre niveles;
- ritmo de secciones y espacio negativo;
- navegación y patrón de menús;
- relación entre catálogo, portfolio y contenido;
- mapa/grilla;
- comportamiento responsive;
- tempo de motion y microinteracciones;
- composiciones de imagen/texto/metadata equivalentes.

## Qué debe reemplazarse por recursos LINDE

- logo y marca;
- copy;
- proyectos y nombres;
- fotografías, renders, videos y planos;
- SVGs, ilustraciones e iconos;
- tokens exactos y paleta exacta;
- tipografías propietarias;
- código fuente, DOM y estilos del referente.

## Objetivo comercial

Construir una demo suficientemente sólida para mostrar a potenciales clientes de arquitectura, construcción, desarrollos rurales, cabañas, refugios o micro-hospitalidad. Debe transmitir rápidamente:

1. una dirección visual de alto nivel;
2. un catálogo de soluciones/modelos claro;
3. capacidad de mostrar arquitectura y territorio con fuerte componente visual;
4. un proceso completo desde exploración hasta consulta comercial.

## Identidad LINDE

- Marca demo: **LINDE**.
- Descriptor: **Arquitectura y desarrollo en territorio**.
- Mercado inicial de muestra: Patagonia / Argentina.
- Nombres, métricas, testimonios y proyectos son ficticios.
- La identidad debe poder reemplazarse desde pocos archivos/tokens sin alterar la arquitectura visual.

## Orden de lectura recomendado

1. `AGENTS.md`
2. `docs/00-project-brief.md`
3. `docs/01-reference-audit-huts.md`
4. `docs/02-product-positioning.md`
5. `docs/03-information-architecture.md`
6. `docs/04-visual-system.md`
7. `docs/05-layout-responsive.md`
8. `docs/06-component-system.md`
9. `docs/07-home-page.md`
10. `docs/08-secondary-pages.md`
11. `docs/09-content-model.md`
12. `docs/10-motion-interactions.md`
13. `docs/11-technical-architecture.md`
14. `docs/12-accessibility-seo-performance.md`
15. `docs/13-implementation-roadmap.md`
16. `docs/14-qa-acceptance.md`
17. `docs/15-reference-fidelity-rules.md`
18. `docs/16-reference-sources.md`
19. `docs/17-ui-fidelity-checklist.md`
20. `implementation/ASSET_MANIFEST.md`
21. `implementation/CODEX_MASTER_PROMPT.md`

## Alcance de la primera demo

- Home de alta fidelidad visual respecto del lenguaje del referente.
- Hero audiovisual o poster de alta calidad.
- Catálogo de 6 modelos ficticios.
- 4 tipos de solución/cliente.
- Portfolio con alternancia `Mapa / Grilla`.
- Detalle de proyecto.
- Página de proceso y servicios.
- Página de estudio.
- Guías/artículos con datos locales.
- Formulario guiado multipaso.
- Responsive completo.
- Estados hover/focus/reduced-motion.
- Datos locales sin CMS.

## Fuera de alcance

- autenticación;
- pagos;
- CRM real;
- CMS remoto obligatorio;
- backend complejo;
- mapas propietarios con API key;
- reutilización de código o assets de HUTS.

## Resultado esperado

Una persona familiarizada con HUTS debe reconocer inmediatamente la **familia de interfaz y experiencia** que se está tomando como referencia, mientras que todo lo que identifica a la empresa y su contenido debe pertenecer a LINDE.

Una web genérica de arquitectura, aunque sea prolija, no cumple el objetivo.

## Implementación local

La demo se implementa como un sitio estático de Astro con TypeScript estricto,
CSS propio, fuentes open source locales y MapLibre cargado sólo en el portfolio.

```powershell
pnpm install
pnpm dev
```

Abrir `http://127.0.0.1:4321/`.

### Verificación y build

```powershell
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4322
```

El mapa usa tiles públicos de OpenStreetMap y conserva una alternativa SVG y
una grilla HTML accesible. Los dos assets fotográficos de demostración y todos
los planos/gráficos propios están documentados en `ASSET_TODO.md` para su
reemplazo futuro sin cambiar los componentes.
