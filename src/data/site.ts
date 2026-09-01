import siteSeed from '../../content/site.json';
import type { SiteConfig } from './types';

export const site: SiteConfig = {
  ...siteSeed,
  demo: true,
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};
