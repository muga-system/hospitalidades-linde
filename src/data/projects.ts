import projectSeed from '../../content/projects.json';
import { createProjectMedia } from './media';
import type { Project, ProjectStatus } from './types';

const technicalByProject: Record<
  string,
  { label: string; value: string }[]
> = {
  'casa-cauce': [
    { label: 'Estado', value: 'Obra terminada · demo' },
    { label: 'Sistema', value: 'Estructura liviana y galería profunda' },
    { label: 'Orientación', value: 'Apertura oeste filtrada' },
  ],
  'refugio-lenga': [
    { label: 'Estado', value: 'En diseño · demo' },
    { label: 'Programa', value: 'Uso propio + estadías cortas' },
    { label: 'Clima', value: 'Reparo y asoleamiento de invierno' },
  ],
  'patio-del-nire': [
    { label: 'Estado', value: 'Anteproyecto · demo' },
    { label: 'Implantación', value: 'Dos alas y patio reparado' },
    { label: 'Terreno', value: 'Viento y amplitud térmica' },
  ],
  'base-arrayan': [
    { label: 'Estado', value: 'En obra · demo' },
    { label: 'Programa', value: 'Huéspedes + trabajo' },
    { label: 'Estrategia', value: 'Borde arbolado y privacidad' },
  ],
  'abra-manso': [
    { label: 'Estado', value: 'En diseño · demo' },
    { label: 'Programa', value: 'Vivienda y trabajo remoto' },
    { label: 'Estrategia', value: 'Acceso semi-independiente' },
  ],
  'galpon-lacar': [
    { label: 'Estado', value: 'Concepto · demo' },
    { label: 'Programa', value: 'Hospitalidad de baja escala' },
    { label: 'Estrategia', value: 'Sala común con piezas laterales' },
  ],
};

export const projects: Project[] = projectSeed.map((project, index) => ({
  ...project,
  status: project.status as ProjectStatus,
  isDemo: true,
  technicalNotes: technicalByProject[project.slug],
  images: createProjectMedia(project.name, index),
}));

export const featuredProjects = projects.slice(0, 4);

export const statusLabel: Record<ProjectStatus, string> = {
  concept: 'Concepto',
  design: 'En diseño',
  build: 'En obra',
  complete: 'Terminado',
};
