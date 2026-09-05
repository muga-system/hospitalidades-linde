export type Media = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
  caption?: string;
};

export type SiteConfig = {
  brand: string;
  descriptor: string;
  heroTitle: string;
  heroSummary: string;
  email: string;
  primaryCta: { label: string; href: string };
  demo: true;
  social: { label: string; href: string }[];
};

export type Solution = {
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
  isDemo: true;
};

export type HomeSolutionCard = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  image: Media;
};

export type Model = {
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
  planImage: Media;
  isFeatured: boolean;
  isDemo: true;
};

export type ProjectStatus = 'concept' | 'design' | 'build' | 'complete';

export type Project = {
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
  status: ProjectStatus;
  intro: string;
  challenge: string;
  response: string;
  technicalNotes: { label: string; value: string }[];
  images: Media[];
  isDemo: true;
};
