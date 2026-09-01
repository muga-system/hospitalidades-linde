import modelSeed from '../../content/models.json';
import { createModelMedia } from './media';
import type { Model } from './types';

export const models: Model[] = modelSeed.map((model, index) => ({
  ...model,
  bedrooms: model.bedrooms === 'studio' ? 'studio' : Number(model.bedrooms),
  isDemo: true,
  images: createModelMedia(model.name, index),
  planImage: {
    src: `/graphics/plans/${model.slug}.svg`,
    alt: `Planta conceptual original del modelo ${model.name}.`,
    width: 1200,
    height: 780,
  },
}));

export const featuredModels = models.filter((model) => model.isFeatured);
