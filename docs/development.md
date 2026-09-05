# Guía de desarrollo

## Flujo de datos

Los JSON de `content/` son la fuente editable. Cada dominio los importa y
construye sus objetos tipados:

```text
content/*.json
      ↓
src/data/{site,models,projects,solutions}.ts
      ↓
src/data/selectors.ts
      ↓
pages + components Astro
```

`src/data/content.ts` solo reexporta la API pública de datos. Esa fachada
evita que las páginas queden acopladas a la organización interna de los
módulos.

## Responsabilidades

- `types.ts`: contratos compartidos; cambiar un contrato exige revisar sus
  consumidores con `pnpm check`.
- `media.ts`: rutas, dimensiones, versiones y posiciones focales; no repetir
  factories de imágenes en páginas.
- `models.ts`, `projects.ts`, `solutions.ts`: un único lugar para cada dominio
  y sus relaciones directas.
- `selectors.ts`: consultas derivadas (`relatedModels`, `relatedProjects`,
  `formatBedrooms`) sin lógica de presentación.
- `src/components/`: markup, estilos y comportamiento de una pieza visual.
- `src/pages/`: composición de ruta, metadata y selección de datos; mantenerlas
  delgadas.
- `src/scripts/`: inicialización de interacciones DOM aisladas y compatible con
  `astro:page-load`.

## Agregar una solución

1. Agregar o editar el registro de categoría interna en `content/solutions.json`.
2. Si la opción debe aparecer en la home, agregar su registro en
   `src/data/solutions.ts` con un slug de detalle único, título, resumen e
   ilustración propios.
3. Asociar `modelSlugs` y `projectSlugs` existentes antes de crear nuevos
   registros.
4. Colocar la variante opaca y/o transparente en `public/imagenes/` según su
   rol. Registrar el uso en `ASSET_TODO.md` si es un recambio pendiente.
5. Ejecutar `pnpm check` y `pnpm build`; revisar que la ruta estática aparezca
   en la salida.

La página dinámica `src/pages/soluciones/[slug].astro` genera solo las rutas de
las ocho opciones visibles y compone
`SolutionHero`, `SolutionDecisions`, `SolutionProjectReel` y
`SolutionClosing`. Los componentes no deben leer JSON directamente.

## Agregar modelos o proyectos

Editar el JSON correspondiente, respetar `src/data/types.ts` y mantener slugs
estables. Las imágenes fotográficas compartidas se crean en `media.ts`; si un
proyecto necesita una composición distinta, agregar una factory explícita allí
en lugar de condicionales dentro de una tarjeta.

## Interacciones y accesibilidad

- Usar CSS/DOM antes que una dependencia nueva.
- Registrar listeners una sola vez y reinicializar en `astro:page-load` cuando
  haya navegación entre páginas.
- Toda animación debe tener una salida para
  `prefers-reduced-motion: reduce`.
- Mantener landmarks, foco visible, labels y textos alternativos al modificar
  markup.

## Verificación y commits

```powershell
pnpm check
pnpm build
git diff --check
```

Cada bloque coherente (datos, componente, documentación o QA) se confirma con
un commit separado en `main`. No mezclar recambios de contenido con refactors
que cambien comportamiento sin documentarlo en el mensaje y en
`CHANGELOG.md`.
