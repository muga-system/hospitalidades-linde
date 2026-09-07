import modelSeed from '../../content/models.json';
import { createModelMedia } from './media';
import type { Media, Model } from './types';

const modelMediaOverrides: Record<string, {
  hero?: Media;
  detail?: Media;
  response?: Media;
}> = {
  nido: {
    hero: {
      src: '/images/models/nido-38-maqueta-principal.webp',
      alt: 'Maqueta principal de Nido, pieza compacta con expansión semicubierta y abertura orientable.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/nido-38-planta-esquematica.webp',
      alt: 'Planta esquemática de Nido con núcleo compacto, ambiente integrado y expansión semicubierta.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/nido-38-axonometria-corte.webp',
      alt: 'Axonometría seccionada de Nido con ambiente integrado, núcleo técnico y expansión semicubierta.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  cauce: {
    hero: {
      src: '/images/models/cauce-62-maqueta-principal.webp',
      alt: 'Maqueta principal de Cauce, refugio lineal con galería longitudinal y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/cauce-62-planta-esquematica.webp',
      alt: 'Planta esquemática de Cauce con galería longitudinal, estar abierto y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/cauce-62-axonometria-galeria.webp',
      alt: 'Axonometría seccionada de Cauce con galería longitudinal, estar central y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  lenga: {
    hero: {
      src: '/images/models/lenga-84-maqueta-principal.webp',
      alt: 'Maqueta principal de Lenga, dos alas privadas vinculadas por un estar central abierto al paisaje.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/lenga-84-planta-esquematica.webp',
      alt: 'Planta esquemática de Lenga con dos alas privadas, centro común y expansión protegida.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/lenga-84-axonometria-centro-comun.webp',
      alt: 'Axonometría seccionada de Lenga con alas privadas equivalentes y un centro común abierto.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  abra: {
    hero: {
      src: '/images/models/abra-105-maqueta-principal.webp',
      alt: 'Maqueta principal de Abra, casa compacta con área social pasante y una pieza flexible.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/abra-105-planta-esquematica.webp',
      alt: 'Planta esquemática de Abra con área social pasante, dos dormitorios y pieza flexible.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/abra-105-axonometria-pieza-flexible.webp',
      alt: 'Axonometría seccionada de Abra con área social pasante, dos dormitorios y una pieza flexible independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  patio: {
    hero: {
      src: '/images/models/patio-128-maqueta-principal.webp',
      alt: 'Maqueta principal de Patio, dos alas que construyen un patio central protegido.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/patio-128-planta-esquematica.webp',
      alt: 'Planta esquemática de Patio con dos alas residenciales alrededor de un patio central protegido.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/patio-128-axonometria-patio-protegido.webp',
      alt: 'Axonometría seccionada de Patio con dos alas residenciales y un patio central protegido como articulador.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  galpon: {
    hero: {
      src: '/images/models/galpon-156-maqueta-principal.webp',
      alt: 'Maqueta principal de Galpón, una nave central de gran escala con piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/galpon-156-planta-esquematica.webp',
      alt: 'Planta esquemática de Galpón con nave central social y piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/galpon-156-axonometria-nave-central.webp',
      alt: 'Axonometría seccionada de Galpón con nave central de doble altura y piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
};

const modelPlanAssets: Record<string, string> = {
  nido: 'nido-38',
  cauce: 'cauce-62',
  lenga: 'lenga-84',
  abra: 'abra-105',
  patio: 'patio-128',
  galpon: 'galpon-156',
};

export const models: Model[] = modelSeed.map((model, index) => ({
  ...model,
  bedrooms: model.bedrooms === 'studio' ? 'studio' : Number(model.bedrooms),
  isDemo: true,
  images: createModelMedia(model.name, index, modelMediaOverrides[model.slug]),
  planImage: {
    src: `/graphics/plans/${modelPlanAssets[model.slug] ?? model.slug}.svg`,
    alt: `Planta conceptual original del modelo ${model.name}.`,
    width: 1200,
    height: 780,
  },
}));

export const featuredModels = models.filter((model) => model.isFeatured);
