import { pt } from './pt';
import { en } from './en';
import type { Dictionary } from './types';
import type { Locale } from '../site.config';

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
