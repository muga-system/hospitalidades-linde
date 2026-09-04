import modelSeed from '../../content/models.json';
import { createModelMedia } from './media';
import type { Media, Model } from './types';

const modelMediaOverrides: Record<string, {
  hero?: Media;
  detail?: Media;
  response?: Media;
}> = {
  'nido-38': {
    hero: {
      src: '/images/models/nido-38-maqueta-principal.png',
      alt: 'Maqueta principal de Nido 38, pieza compacta con expansión semicubierta y abertura orientable.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/nido-38-planta-esquematica.png',
      alt: 'Planta esquemática de Nido 38 con núcleo compacto, ambiente integrado y expansión semicubierta.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/nido-38-axonometria-corte.png',
      alt: 'Axonometría seccionada de Nido 38 con ambiente integrado, núcleo técnico y expansión semicubierta.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'cauce-62': {
    hero: {
      src: '/images/models/cauce-62-maqueta-principal.png',
      alt: 'Maqueta principal de Cauce 62, refugio lineal con galería longitudinal y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/cauce-62-planta-esquematica.png',
      alt: 'Planta esquemática de Cauce 62 con galería longitudinal, estar abierto y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/cauce-62-axonometria-galeria.png',
      alt: 'Axonometría seccionada de Cauce 62 con galería longitudinal, estar central y dormitorio independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'lenga-84': {
    hero: {
      src: '/images/models/lenga-84-maqueta-principal.png',
      alt: 'Maqueta principal de Lenga 84, dos alas privadas vinculadas por un estar central abierto al paisaje.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/lenga-84-planta-esquematica.png',
      alt: 'Planta esquemática de Lenga 84 con dos alas privadas, centro común y expansión protegida.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/lenga-84-axonometria-centro-comun.png',
      alt: 'Axonometría seccionada de Lenga 84 con alas privadas equivalentes y un centro común abierto.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'abra-105': {
    hero: {
      src: '/images/models/abra-105-maqueta-principal.png',
      alt: 'Maqueta principal de Abra 105, casa compacta con área social pasante y una pieza flexible.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/abra-105-planta-esquematica.png',
      alt: 'Planta esquemática de Abra 105 con área social pasante, dos dormitorios y pieza flexible.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/abra-105-axonometria-pieza-flexible.png',
      alt: 'Axonometría seccionada de Abra 105 con área social pasante, dos dormitorios y una pieza flexible independiente.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'patio-128': {
    hero: {
      src: '/images/models/patio-128-maqueta-principal.png',
      alt: 'Maqueta principal de Patio 128, dos alas que construyen un patio central protegido.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/patio-128-planta-esquematica.png',
      alt: 'Planta esquemática de Patio 128 con dos alas residenciales alrededor de un patio central protegido.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/patio-128-axonometria-patio-protegido.png',
      alt: 'Axonometría seccionada de Patio 128 con dos alas residenciales y un patio central protegido como articulador.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'galpon-156': {
    hero: {
      src: '/images/models/galpon-156-maqueta-principal.png',
      alt: 'Maqueta principal de Galpón 156, una nave central de gran escala con piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/models/galpon-156-planta-esquematica.png',
      alt: 'Planta esquemática de Galpón 156 con nave central social y piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/models/galpon-156-axonometria-nave-central.png',
      alt: 'Axonometría seccionada de Galpón 156 con nave central de doble altura y piezas laterales privadas.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
};

export const models: Model[] = modelSeed.map((model, index) => ({
  ...model,
  bedrooms: model.bedrooms === 'studio' ? 'studio' : Number(model.bedrooms),
  isDemo: true,
  images: createModelMedia(model.name, index, modelMediaOverrides[model.slug]),
  planImage: {
    src: `/graphics/plans/${model.slug}.svg`,
    alt: `Planta conceptual original del modelo ${model.name}.`,
    width: 1200,
    height: 780,
  },
}));

export const featuredModels = models.filter((model) => model.isFeatured);
