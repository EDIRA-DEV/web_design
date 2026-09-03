'use client';

import { useLang } from '@/lib/i18n';
import { en, LocaleTranslations } from '@/locales/en';
import { es } from '@/locales/es';

export interface LanguageContextValue {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
  isEs: boolean;
  t: LocaleTranslations;
}

export function useLanguage(): LanguageContextValue {
  const { lang, setLang } = useLang();
  const isEs = lang === 'es';
  const t = isEs ? es : en;

  return {
    lang,
    setLang,
    isEs,
    t,
  };
}
