import { models } from './models';
import { projects } from './projects';
import { solutions } from './solutions';
import type { Model } from './types';

export const getModel = (slug: string) =>
  models.find((model) => model.slug === slug);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getSolution = (slug: string) =>
  solutions.find((solution) => solution.slug === slug);

export const relatedModels = (slugs: string[]) =>
  models.filter((model) => slugs.includes(model.slug));

export const relatedProjects = (slugs: string[]) =>
  projects.filter((project) => slugs.includes(project.slug));

export const formatBedrooms = (
  bedrooms: Model['bedrooms'] | number | undefined,
) => {
  if (bedrooms === 'studio' || bedrooms === 0) return 'Estudio';
  return `${bedrooms} dorm.`;
};
