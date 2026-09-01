import solutionSeed from '../../content/solutions.json';
import { generatedImage } from './media';
import type { HomeSolutionCard, Solution } from './types';

const solutionExtras: Record<
  string,
  Pick<Solution, 'principles' | 'considerations' | 'projectSlugs' | 'image'>
> = {
  'vivienda-territorio': {
    principles: [
      {
        title: 'Lectura antes de forma',
        body: 'Acceso, asoleamiento, viento y vegetación ordenan la implantación antes de definir metros.',
      },
      {
        title: 'Una casa que dura',
        body: 'Materiales, mantenimiento y etapas se piensan con el uso cotidiano y el clima real.',
      },
    ],
    considerations: [
      { title: 'Sitio', body: 'Pendiente, orientación y distancias de obra.' },
      { title: 'Vida diaria', body: 'Rutinas, guardado y vínculo con exterior.' },
      { title: 'Etapas', body: 'Qué conviene resolver ahora y qué dejar preparado.' },
    ],
    projectSlugs: ['casa-cauce', 'patio-del-nire', 'abra-manso'],
    image: generatedImage(
      'vivienda-permanente-transparente',
      'Vivienda permanente LINDE vinculada con un claro de bosque patagónico.',
    ),
  },
  refugio: {
    principles: [
      {
        title: 'Llegar y abrir fácil',
        body: 'El recorrido y los apoyos cotidianos se diseñan para que usar el refugio sea simple.',
      },
      {
        title: 'Poco mantenimiento, mucha presencia',
        body: 'Cada decisión busca una casa durable que mantenga su carácter a lo largo de las estaciones.',
      },
    ],
    considerations: [
      { title: 'Estacionalidad', body: 'Uso discontinuo, protección y apertura.' },
      { title: 'Reparo', body: 'Galerías, accesos y exteriores que sirven con mal tiempo.' },
      { title: 'Autonomía', body: 'Sistemas y guardado compatibles con estadías cortas.' },
    ],
    projectSlugs: ['casa-cauce', 'refugio-lenga'],
    image: generatedImage(
      'refugio-de-temporada-transparente',
      'Refugio de temporada LINDE entre árboles y montañas.',
    ),
  },
  hospitalidad: {
    principles: [
      {
        title: 'Experiencia y operación juntas',
        body: 'La llegada, la privacidad, los servicios y el mantenimiento forman un único sistema.',
      },
      {
        title: 'Escala humana',
        body: 'Las unidades se organizan para crear una experiencia memorable sin sobredimensionar la operación.',
      },
    ],
    considerations: [
      { title: 'Recorridos', body: 'Cruces claros entre huéspedes, equipos y servicios.' },
      { title: 'Privacidad', body: 'Vistas y expansiones que no invaden otras unidades.' },
      { title: 'Repetición útil', body: 'Piezas repetibles sin homogeneizar el lugar.' },
    ],
    projectSlugs: ['refugio-lenga', 'galpon-lacar'],
    image: generatedImage(
      'varias-unidades-transparente',
      'Varias unidades de hospitalidad LINDE organizadas alrededor de un espacio común.',
    ),
  },
  'unidad-complementaria': {
    principles: [
      {
        title: 'Sumar sin invadir',
        body: 'La nueva pieza encuentra autonomía, privacidad y una posición que ordena el conjunto existente.',
      },
      {
        title: 'Una herramienta abierta',
        body: 'Puede ser estudio, huéspedes, renta o taller según el momento del proyecto.',
      },
    ],
    considerations: [
      { title: 'Distancias', body: 'Separación y relación con la vivienda original.' },
      { title: 'Infraestructura', body: 'Trazas y capacidades previstas desde el comienzo.' },
      { title: 'Usos futuros', body: 'Flexibilidad sin agregar superficie superflua.' },
    ],
    projectSlugs: ['base-arrayan'],
    image: generatedImage(
      'unidad-complementaria-transparente',
      'Unidad complementaria LINDE junto a una vivienda existente.',
    ),
  },
};

export const solutions: Solution[] = solutionSeed.map((solution) => ({
  ...solution,
  ...solutionExtras[solution.slug],
  isDemo: true,
}));

export const homeSolutions: HomeSolutionCard[] = [
  {
    slug: 'vivienda-permanente',
    title: 'Vivienda permanente',
    summary: 'Una casa para vivir todos los días, abierta al paisaje y preparada para el clima real.',
    href: '/soluciones/vivienda-permanente/',
    image: generatedImage(
      'vivienda-permanente',
      'Vivienda permanente LINDE integrada a un terreno patagónico.',
    ),
  },
  {
    slug: 'refugio-de-temporada',
    title: 'Refugio de temporada',
    summary: 'Una pieza compacta para llegar, abrir, habitar y cerrar sin esfuerzo.',
    href: '/soluciones/refugio-de-temporada/',
    image: generatedImage(
      'refugio-de-temporada',
      'Refugio de temporada LINDE en un paisaje de bosque y montaña.',
    ),
  },
  {
    slug: 'varias-unidades',
    title: 'Varias unidades',
    summary: 'Un conjunto pequeño de unidades y recorridos pensado como una experiencia común.',
    href: '/soluciones/varias-unidades/',
    image: generatedImage(
      'varias-unidades',
      'Conjunto de varias unidades LINDE alrededor de un espacio común.',
    ),
  },
  {
    slug: 'casa-dos-generaciones',
    title: 'Casa para dos generaciones',
    summary: 'Dos volúmenes vinculados que equilibran autonomía, encuentro y vida compartida.',
    href: '/soluciones/casa-dos-generaciones/',
    image: generatedImage(
      'casa-dos-generaciones',
      'Casa LINDE para dos generaciones con dos volúmenes vinculados.',
    ),
  },
  {
    slug: 'unidad-complementaria',
    title: 'Unidad complementaria',
    summary: 'Una nueva pieza para huéspedes, renta, trabajo o usos que pueden cambiar con el tiempo.',
    href: '/soluciones/unidad-complementaria/',
    image: generatedImage(
      'unidad-complementaria',
      'Unidad complementaria LINDE junto a una vivienda existente.',
    ),
  },
  {
    slug: 'taller-independiente',
    title: 'Taller independiente',
    summary: 'Un espacio de trabajo con luz, guardado y una relación directa con el terreno.',
    href: '/soluciones/taller-independiente/',
    image: generatedImage(
      'taller-independiente',
      'Taller independiente LINDE para trabajar junto al paisaje.',
    ),
  },
  {
    slug: 'quincho',
    title: 'Quincho y encuentro',
    summary: 'Una estructura protegida para cocinar, reunirse y sostener la vida común.',
    href: '/soluciones/quincho/',
    image: generatedImage(
      'quincho',
      'Quincho LINDE abierto al paisaje para encuentros y comidas.',
    ),
  },
  {
    slug: 'cuarto-de-herramientas',
    title: 'Cuarto de herramientas',
    summary: 'Una pieza de apoyo para guardar, mantener y ordenar el funcionamiento cotidiano.',
    href: '/soluciones/cuarto-de-herramientas/',
    image: generatedImage(
      'cuarto-de-herramientas',
      'Cuarto de herramientas LINDE para guardado y apoyo del terreno.',
    ),
  },
];

const parentSolutionByHomeSlug: Record<string, string> = {
  'vivienda-permanente': 'vivienda-territorio',
  'refugio-de-temporada': 'refugio',
  'varias-unidades': 'hospitalidad',
  'casa-dos-generaciones': 'vivienda-territorio',
  'unidad-complementaria': 'unidad-complementaria',
  'taller-independiente': 'unidad-complementaria',
  quincho: 'hospitalidad',
  'cuarto-de-herramientas': 'unidad-complementaria',
};

export const homeSolutionDetails: Solution[] = homeSolutions.map((entry) => {
  const parent = solutions.find(
    (solution) => solution.slug === parentSolutionByHomeSlug[entry.slug],
  );

  if (!parent) {
    throw new Error(`No se encontró la solución base para ${entry.slug}.`);
  }

  return {
    ...parent,
    slug: entry.slug,
    title: entry.title,
    shortTitle: entry.title,
    summary: entry.summary,
    image: generatedImage(`${entry.slug}-transparente`, entry.image.alt),
  };
});
