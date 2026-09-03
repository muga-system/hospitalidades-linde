import projectSeed from '../../content/projects.json';
import { createProjectMedia } from './media';
import type { Media, Project, ProjectStatus } from './types';

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

const projectMediaOverrides: Record<string, {
  hero?: Media;
  detail?: Media;
  response?: Media;
}> = {
  'casa-cauce': {
    hero: {
      src: '/images/projects/casa-cauce-hero.png',
      alt: 'Casa Cauce, vivienda lineal con galería profunda en un lote arbolado de Lago Puelo.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/casa-cauce-gallery.png',
      alt: 'Interior de Casa Cauce con galería profunda y vistas al paisaje de Lago Puelo.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/casa-cauce-umbral-galeria.png',
      alt: 'Umbral de la galería de Casa Cauce con vistas al paisaje de Lago Puelo.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'refugio-lenga': {
    hero: {
      src: '/images/projects/refugio-lenga-hero.png',
      alt: 'Refugio Lenga, vivienda de dos alas con estar central en un bosque de El Bolsón.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/refugio-lenga-estar-central.png',
      alt: 'Estar central de Refugio Lenga con estructura de madera, piedra y vistas al bosque.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/refugio-lenga-expansion-exterior.png',
      alt: 'Expansión exterior protegida de Refugio Lenga entre sus dos alas y el paisaje.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'patio-del-nire': {
    hero: {
      src: '/images/projects/patio-del-nire-hero.png',
      alt: 'Patio del Ñire, vivienda en forma de L alrededor de un patio protegido en Trevelin.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/patio-del-nire-estar-patio.png',
      alt: 'Estar de Patio del Ñire abierto hacia el patio protegido y el paisaje de Trevelin.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/patio-del-nire-patio-protegido.png',
      alt: 'Patio protegido de Patio del Ñire entre las dos alas de la vivienda.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'base-arrayan': {
    hero: {
      src: '/images/projects/base-arrayan-hero.png',
      alt: 'Base Arrayán, unidad compacta para huéspedes y trabajo entre árboles en Villa La Angostura.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/base-arrayan-interior-flexible.png',
      alt: 'Interior flexible de Base Arrayán con cama, guardado, kitchenette y escritorio hacia el bosque.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/base-arrayan-borde-vegetal.png',
      alt: 'Borde vegetal de Base Arrayán con sendero, unidad compacta y vivienda existente entre los árboles.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'galpon-lacar': {
    hero: {
      src: '/images/projects/galpon-lacar-hero.png',
      alt: 'Galpón Lácar, conjunto de hospitalidad con volumen central alto y piezas laterales en San Martín de los Andes.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/galpon-lacar-estar-central.png',
      alt: 'Estar central de Galpón Lácar con doble altura, comedor común y circulaciones laterales.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/galpon-lacar-piezas-laterales.png',
      alt: 'Circulación central de Galpón Lácar entre sus piezas laterales de escala doméstica.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
  'abra-manso': {
    hero: {
      src: '/images/projects/abra-manso-hero.png',
      alt: 'Abra Manso, vivienda con pieza de trabajo semi-independiente en un bosque de Bariloche.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    detail: {
      src: '/images/projects/abra-manso-interior-flexible.png',
      alt: 'Interior flexible de Abra Manso con estar, comedor y espacio de trabajo conectado.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
    response: {
      src: '/images/projects/abra-manso-acceso-semi-independiente.png',
      alt: 'Acceso semi-independiente de Abra Manso entre la pieza de trabajo, la vivienda y el paisaje boscoso.',
      width: 1536,
      height: 1024,
      position: 'center center',
    },
  },
};

export const projects: Project[] = projectSeed.map((project, index) => ({
  ...project,
  status: project.status as ProjectStatus,
  isDemo: true,
  technicalNotes: technicalByProject[project.slug],
  images: createProjectMedia(project.name, index, projectMediaOverrides[project.slug]),
}));

export const featuredProjects = projects.slice(0, 4);

export const statusLabel: Record<ProjectStatus, string> = {
  concept: 'Concepto',
  design: 'En diseño',
  build: 'En obra',
  complete: 'Terminado',
};
