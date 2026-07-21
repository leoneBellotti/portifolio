import { SITE_URL, SITE_NAME, CONTACT } from './site.config';
import type { ProjectEntry } from './i18n/types';
import type { Locale } from './site.config';

const jobTitlePt = 'Especialista Técnico Sênior — Sistemas, APIs, Cloud e Modernização de Legados';
const jobTitleEn = 'Senior Technical Specialist — Systems, APIs, Cloud and Legacy Modernization';

function personSchema(lang: Locale) {
  return {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: lang === 'pt' ? jobTitlePt : jobTitleEn,
    email: `mailto:${CONTACT.email}`,
    sameAs: [CONTACT.linkedin, CONTACT.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santo André',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  };
}

export function personJsonLd(lang: Locale) {
  return { '@context': 'https://schema.org', ...personSchema(lang) };
}

export function profilePageJsonLd(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema(lang),
  };
}

export function creativeWorkJsonLd(project: ProjectEntry, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.tagline,
    url: canonicalUrl,
    creator: {
      '@type': 'Person',
      name: SITE_NAME,
    },
    keywords: project.tech.join(', '),
  };
}
