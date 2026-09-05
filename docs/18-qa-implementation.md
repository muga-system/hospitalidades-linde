# 18 — QA de implementación LINDE

Fecha de revisión: 2026-09-05.

## Verificaciones automatizadas

- `pnpm check`: 0 errores, 0 warnings, 0 hints (38 archivos Astro/TS).
- `pnpm build`: 29 rutas estáticas generadas y sitemap creado.
- `git diff --check`: sin errores de whitespace.
- Las ocho rutas de opción de la home se generan con slugs e ilustraciones
  transparentes propios; no comparten por accidente la ruta de vivienda
  permanente.
- Las cuatro categorías amplias se mantienen en datos, pero no generan rutas
  públicas duplicadas.
- Las 54 imágenes públicas se sirven como WebP; los PNG fuente se conservan
  en `assets/source-images/` fuera del paquete estático.
- El hero incorpora `hero-motion.mp4` optimizado para web (1280×854, 30 fps,
  ~4 MB), con poster WebP, fallback y respeto de `prefers-reduced-motion`.

## Cobertura funcional

- Header, footer, navegación con soluciones y proyectos, menú mobile y CTA.
- Home, catálogo de seis modelos, detalle de modelo y portfolio filtrable.
- Detalle de proyecto con condiciones específicas del sitio y navegación
  anterior/siguiente.
- Detalle de las ocho opciones públicas; las cuatro categorías amplias son
  relaciones internas.
- Reel de proyectos full bleed y transiciones Astro entre páginas.
- Wizard de consulta hasta `/gracias/`.
- 404 estático y sitemap.
- Home con recorrido compacto, sin bloques editoriales repetidos.
- Proceso con seis pasos y una sola imagen editorial; Servicios describe
  alcances contratables; Modelos cierran con una única sección de descubrimiento.

## Revisión visual y responsive

Se conservaron los patrones aprobados: ilustración principal contenida, serif
de gran escala frente a sans compacta, espacio negativo, bloques imagen-texto,
secuencia fotográfica full bleed y CTA/footer en superficies diferenciadas.
Esta pasada reorganiza el contenido y reduce bloques; no reemplaza la revisión
manual final en desktop y móvil contra HUTS.

## Criterios de identidad y accesibilidad

LINDE aporta marca, copy, tokens, datos, ilustraciones y fotografías; no se
incorporan assets ni código del referente. Se mantienen skip link, landmarks,
un `h1` por página, labels, mensajes de error, foco visible, `alt`, reduced
motion y una colección de proyectos usable sin mapa propietario.

## Pendientes de validación manual final

- Revisar visualmente 320, 375, 768, 1024, 1440 y 1920 px, especialmente los
  carruseles horizontales, crops y la nueva densidad de Home/Proceso/Servicios.
- Confirmar foco, Escape y reduced motion en navegación y wizard en un navegador
  real.
- Probar el formulario demo publicado y completar dominio, SEO final y redes.
- La sustitución de las dos fotografías de apoyo reutilizadas por una biblioteca
  final sigue documentada en `ASSET_TODO.md`.
