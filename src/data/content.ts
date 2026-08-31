import guideSeed from '../../content/guides.json';
import modelSeed from '../../content/models.json';
import projectSeed from '../../content/projects.json';
import siteSeed from '../../content/site.json';
import solutionSeed from '../../content/solutions.json';
import type { Guide, Media, Model, Project, SiteConfig, Solution } from './types';

const hero: Media = {
  src: '/images/home/hero-linde.png',
  alt: 'Refugio contemporáneo de LINDE entre una pradera y bosque patagónico.',
  width: 1536,
  height: 1024,
};

const threshold: Media = {
  src: '/images/library/threshold-linde.png',
  alt: 'Umbral protegido de madera con vista hacia un bosque patagónico.',
  width: 1536,
  height: 1024,
};

export const site: SiteConfig = {
  ...siteSeed,
  demo: true,
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

const imagePositions = ['70% center', 'center center', '35% center', '68% 34%', '55% 62%', '82% center'];
const projectPositions = ['73% center', '55% center', '30% center', '75% 65%', '52% 35%', '84% center'];

function mediaSet(name: string, index: number): Media[] {
  const position = imagePositions[index % imagePositions.length];
  return [
    { ...hero, alt: `${name}, arquitectura demo de LINDE en relación con el paisaje.`, position },
    { ...threshold, alt: `Materialidad y expansión exterior de ${name}.`, position: index % 2 ? '35% center' : '68% center' },
    { ...hero, alt: `Vista amplia del entorno de ${name}.`, position: imagePositions[(index + 2) % imagePositions.length] },
  ];
}

export const models: Model[] = modelSeed.map((model, index) => ({
  ...model,
  bedrooms: model.bedrooms === 'studio' ? 'studio' : Number(model.bedrooms),
  isDemo: true,
  images: mediaSet(model.name, index),
  planImage: {
    src: `/graphics/plans/${model.slug}.svg`,
    alt: `Planta conceptual original del modelo ${model.name}.`,
    width: 1200,
    height: 780,
  },
}));

const solutionExtras: Record<string, Pick<Solution, 'principles' | 'considerations' | 'projectSlugs' | 'image'>> = {
  'vivienda-territorio': {
    principles: [
      { title: 'Lectura antes de forma', body: 'Acceso, asoleamiento, viento y vegetación ordenan la implantación antes de definir metros.' },
      { title: 'Una casa que dura', body: 'Materiales, mantenimiento y etapas se piensan con el uso cotidiano y el clima real.' },
    ],
    considerations: [
      { title: 'Sitio', body: 'Pendiente, orientación y distancias de obra.' },
      { title: 'Vida diaria', body: 'Rutinas, guardado y vínculo con exterior.' },
      { title: 'Etapas', body: 'Qué conviene resolver ahora y qué dejar preparado.' },
    ],
    projectSlugs: ['casa-cauce', 'patio-del-nire', 'abra-manso'],
    image: { ...hero, alt: 'Casa LINDE vinculada con un claro de bosque patagónico.', position: '72% center' },
  },
  refugio: {
    principles: [
      { title: 'Llegar y abrir fácil', body: 'El recorrido y los apoyos cotidianos se diseñan para que usar el refugio sea simple.' },
      { title: 'Poco mantenimiento, mucha presencia', body: 'Cada decisión busca una casa durable que mantenga su carácter a lo largo de las estaciones.' },
    ],
    considerations: [
      { title: 'Estacionalidad', body: 'Uso discontinuo, protección y apertura.' },
      { title: 'Reparo', body: 'Galerías, accesos y exteriores que sirven con mal tiempo.' },
      { title: 'Autonomía', body: 'Sistemas y guardado compatibles con estadías cortas.' },
    ],
    projectSlugs: ['casa-cauce', 'refugio-lenga'],
    image: { ...threshold, alt: 'Terraza protegida de un refugio demo de LINDE.', position: '70% center' },
  },
  hospitalidad: {
    principles: [
      { title: 'Experiencia y operación juntas', body: 'La llegada, la privacidad, los servicios y el mantenimiento forman un único sistema.' },
      { title: 'Escala humana', body: 'Las unidades se organizan para crear una experiencia memorable sin sobredimensionar la operación.' },
    ],
    considerations: [
      { title: 'Recorridos', body: 'Cruces claros entre huéspedes, equipos y servicios.' },
      { title: 'Privacidad', body: 'Vistas y expansiones que no invaden otras unidades.' },
      { title: 'Repetición útil', body: 'Piezas repetibles sin homogeneizar el lugar.' },
    ],
    projectSlugs: ['refugio-lenga', 'galpon-lacar'],
    image: { ...threshold, alt: 'Interior y paisaje de una hospitalidad demo de LINDE.', position: '42% center' },
  },
  'unidad-complementaria': {
    principles: [
      { title: 'Sumar sin invadir', body: 'La nueva pieza encuentra autonomía, privacidad y una posición que ordena el conjunto existente.' },
      { title: 'Una herramienta abierta', body: 'Puede ser estudio, huéspedes, renta o taller según el momento del proyecto.' },
    ],
    considerations: [
      { title: 'Distancias', body: 'Separación y relación con la vivienda original.' },
      { title: 'Infraestructura', body: 'Trazas y capacidades previstas desde el comienzo.' },
      { title: 'Usos futuros', body: 'Flexibilidad sin agregar superficie superflua.' },
    ],
    projectSlugs: ['base-arrayan'],
    image: { ...hero, alt: 'Pieza complementaria LINDE entre árboles nativos.', position: '78% center' },
  },
};

export const solutions: Solution[] = solutionSeed.map((solution) => ({
  ...solution,
  ...solutionExtras[solution.slug],
  isDemo: true,
}));

const technicalByProject: Record<string, { label: string; value: string }[]> = {
  'casa-cauce': [{ label: 'Estado', value: 'Obra terminada · demo' }, { label: 'Sistema', value: 'Estructura liviana y galería profunda' }, { label: 'Orientación', value: 'Apertura oeste filtrada' }],
  'refugio-lenga': [{ label: 'Estado', value: 'En diseño · demo' }, { label: 'Programa', value: 'Uso propio + estadías cortas' }, { label: 'Clima', value: 'Reparo y asoleamiento de invierno' }],
  'patio-del-nire': [{ label: 'Estado', value: 'Anteproyecto · demo' }, { label: 'Implantación', value: 'Dos alas y patio reparado' }, { label: 'Terreno', value: 'Viento y amplitud térmica' }],
  'base-arrayan': [{ label: 'Estado', value: 'En obra · demo' }, { label: 'Programa', value: 'Huéspedes + trabajo' }, { label: 'Estrategia', value: 'Borde arbolado y privacidad' }],
  'abra-manso': [{ label: 'Estado', value: 'En diseño · demo' }, { label: 'Programa', value: 'Vivienda y trabajo remoto' }, { label: 'Estrategia', value: 'Acceso semi-independiente' }],
  'galpon-lacar': [{ label: 'Estado', value: 'Concepto · demo' }, { label: 'Programa', value: 'Hospitalidad de baja escala' }, { label: 'Estrategia', value: 'Sala común con piezas laterales' }],
};

export const projects: Project[] = projectSeed.map((project, index) => ({
  ...project,
  status: project.status as Project['status'],
  isDemo: true,
  technicalNotes: technicalByProject[project.slug],
  images: [
    { ...hero, alt: `${project.name}, proyecto demo de LINDE en ${project.city}.`, position: projectPositions[index] },
    { ...threshold, alt: `Detalle de materialidad de ${project.name}.`, position: index % 2 ? '68% center' : '35% center' },
    { ...hero, alt: `Relación entre arquitectura y paisaje en ${project.name}.`, position: projectPositions[(index + 2) % projectPositions.length] },
  ],
}));

export const guides: Guide[] = guideSeed.map((guide, index) => ({
  ...guide,
  isDemo: true,
  publishedAt: ['2026-05-20', '2026-06-10', '2026-07-02'][index],
  cover: index === 1
    ? { ...threshold, alt: `Imagen editorial para la guía ${guide.title}.`, position: '63% center' }
    : { ...hero, alt: `Imagen editorial para la guía ${guide.title}.`, position: imagePositions[index + 1] },
  body: [
    'Un terreno no se entiende con una única visita. Las condiciones que parecen pequeñas —una sombra persistente, el modo de llegar o una pendiente suave— cambian el proyecto cuando se miran temprano.',
    'En LINDE usamos estas preguntas como una primera conversación de trabajo: no para cerrar respuestas prematuras, sino para ordenar prioridades reales antes de convertirlas en metros, materiales y etapas.',
    'Este contenido es una guía demostrativa. Su función es mostrar el tipo de información que una futura publicación editorial del estudio podría desarrollar.',
  ],
}));

export const featuredModels = models.filter((model) => model.isFeatured);
export const featuredProjects = projects.slice(0, 4);
export const getModel = (slug: string) => models.find((model) => model.slug === slug);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getSolution = (slug: string) => solutions.find((solution) => solution.slug === slug);
export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);

export const relatedModels = (slugs: string[]) => models.filter((model) => slugs.includes(model.slug));
export const relatedProjects = (slugs: string[]) => projects.filter((project) => slugs.includes(project.slug));

export const formatBedrooms = (bedrooms: Model['bedrooms'] | number | undefined) => {
  if (bedrooms === 'studio' || bedrooms === 0) return 'Estudio';
  return `${bedrooms} dorm.`;
};

export const statusLabel: Record<Project['status'], string> = {
  concept: 'Concepto',
  design: 'En diseño',
  build: 'En obra',
  complete: 'Terminado',
};
