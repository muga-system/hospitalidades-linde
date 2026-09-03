import type { Media } from './types';

const IMAGE_VERSION = 'home-restored-20260901';

export const heroMedia: Media = {
  src: '/images/home/hero-linde.png',
  alt: 'Refugio contemporáneo de LINDE entre una pradera y bosque patagónico.',
  width: 1536,
  height: 1024,
};

export const thresholdMedia: Media = {
  src: '/images/library/threshold-linde.png',
  alt: 'Umbral protegido de madera con vista hacia un bosque patagónico.',
  width: 1536,
  height: 1024,
};

export const generatedImage = (filename: string, alt: string): Media => ({
  src: `/imagenes/${filename}.png?v=${IMAGE_VERSION}`,
  alt,
  width: 1122,
  height: 1402,
  position: 'center center',
});

const imagePositions = [
  '70% center',
  'center center',
  '35% center',
  '68% 34%',
  '55% 62%',
  '82% center',
];

const projectPositions = [
  '73% center',
  '55% center',
  '30% center',
  '75% 65%',
  '52% 35%',
  '84% center',
];

export function createModelMedia(name: string, index: number): Media[] {
  const position = imagePositions[index % imagePositions.length];

  return [
    {
      ...heroMedia,
      alt: `${name}, arquitectura demo de LINDE en relación con el paisaje.`,
      position,
    },
    {
      ...thresholdMedia,
      alt: `Materialidad y expansión exterior de ${name}.`,
      position: index % 2 ? '35% center' : '68% center',
    },
    {
      ...heroMedia,
      alt: `Vista amplia del entorno de ${name}.`,
      position: imagePositions[(index + 2) % imagePositions.length],
    },
  ];
}

export function createProjectMedia(
  name: string,
  index: number,
  overrides?: ProjectMediaOverrides,
): Media[] {
  const { hero, detail, response } = overrides ?? {};
  const position = projectPositions[index % projectPositions.length];

  return [
    hero ?? {
      ...heroMedia,
      alt: `${name}, proyecto demo de LINDE en territorio.`,
      position,
    },
    detail ?? {
      ...thresholdMedia,
      alt: `Detalle de materialidad de ${name}.`,
      position: index % 2 ? '68% center' : '35% center',
    },
    response ?? {
      ...heroMedia,
      alt: `Relación entre arquitectura y paisaje en ${name}.`,
      position: projectPositions[(index + 2) % projectPositions.length],
    },
  ];
}

export type ProjectMediaOverrides = {
  hero?: Media;
  detail?: Media;
  response?: Media;
};
