# 09 — Modelo de contenido

## Principio

La UI nunca debe contener arrays grandes hardcodeados dentro de componentes. Separar datos, tipos y presentación.

## Entidades

### SiteConfig

```ts
interface SiteConfig {
  brand: string;
  descriptor: string;
  email: string;
  phone?: string;
  social: { label: string; href: string }[];
  primaryCta: { label: string; href: string };
}
```

### Solution

```ts
interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  principles: { title: string; body: string }[];
  considerations: { title: string; body: string }[];
  modelSlugs: string[];
  projectSlugs: string[];
  image: Media;
}
```

### Model

```ts
interface Model {
  slug: string;
  name: string;
  areaM2: number;
  bedrooms: number | 'studio';
  bathrooms: number;
  flexibleSpace?: boolean;
  tagline: string;
  summary: string;
  features: string[];
  recommendedFor: string[];
  images: Media[];
  planImage?: Media;
  isFeatured?: boolean;
  isDemo: true;
}
```

### Project

```ts
interface Project {
  slug: string;
  name: string;
  city: string;
  province: string;
  lat: number;
  lng: number;
  modelSlugs: string[];
  solutionSlugs: string[];
  areaM2: number;
  bedrooms?: number;
  bathrooms?: number;
  status: 'concept' | 'design' | 'build' | 'complete';
  intro: string;
  challenge: string;
  response: string;
  technicalNotes: { label: string; value: string }[];
  images: Media[];
  isDemo: true;
}
```

### Guide

Usar Astro Content Collection en Markdown/MDX.

Frontmatter sugerido:

```yaml
title:
description:
publishedAt:
category:
cover:
relatedProjects:
relatedModels:
draft:
```

### Media

```ts
interface Media {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  focalPoint?: 'center' | 'top' | 'bottom' | string;
  caption?: string;
}
```

## Datos iniciales

Este paquete incluye:

- `content/site.json`
- `content/models.json`
- `content/projects.json`
- `content/solutions.json`
- `content/guides.json`

Codex puede migrarlos a `.ts` tipado si resulta más cómodo, manteniendo separación.

## Assets

Nunca asumir que una URL remota estará disponible en producción. Usar rutas locales en `public/images`.

Si no existen imágenes al implementar:

1. crear placeholders SVG originales con el nombre del asset esperado;
2. dejar un `ASSET_TODO.md` generado en el repo de implementación;
3. no hotlinkear imágenes de HUTS.
