import type { Locale } from '../site.config';

export const ROUTES = {
  home: { pt: '/', en: '/en/' },
  about: { pt: '/sobre/', en: '/en/about/' },
  projects: { pt: '/projetos/', en: '/en/projects/' },
  projectAtendepix: { pt: '/projetos/atendepix/', en: '/en/projects/atendepix/' },
  project3dt: { pt: '/projetos/3dt-online/', en: '/en/projects/3dt-online/' },
  projectSakkamusuko: { pt: '/projetos/sakkamusuko/', en: '/en/projects/sakkamusuko/' },
  services: { pt: '/servicos/', en: '/en/services/' },
  experience: { pt: '/experiencia/', en: '/en/experience/' },
  skills: { pt: '/competencias/', en: '/en/skills/' },
  blog: { pt: '/blog/', en: '/en/blog/' },
  contact: { pt: '/contato/', en: '/en/contact/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export function route(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

/** Given the current route key, returns the equivalent path in the other locale (for the language switcher). */
export function alternateLocalePath(key: RouteKey, currentLocale: Locale): { locale: Locale; path: string } {
  const otherLocale: Locale = currentLocale === 'pt' ? 'en' : 'pt';
  return { locale: otherLocale, path: ROUTES[key][otherLocale] };
}
