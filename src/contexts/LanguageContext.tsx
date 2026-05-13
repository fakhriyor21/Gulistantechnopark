import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { APP_LOCALES, type AppLocale, getClientLanguage, initClientLanguageFromStorage, setClientLanguage } from "@/lib/i18n";
import { catalog, type SiteMessages } from "@/locales/catalog";

type LanguageContextValue = {
  language: AppLocale;
  setLanguage: (lang: AppLocale) => void;
  locales: readonly AppLocale[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLangState] = useState<AppLocale>(() => initClientLanguageFromStorage());

  const setLanguage = useCallback((lang: AppLocale) => {
    setClientLanguage(lang);
    setLangState(lang);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      locales: APP_LOCALES,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      language: getClientLanguage(),
      setLanguage: setClientLanguage,
      locales: APP_LOCALES,
    };
  }
  return ctx;
}

/** UI matnlari (nav, footer, sahifa qisqa matnlari) — til bilan avtomatik yangilanadi */
export function useMessages(): SiteMessages {
  const { language } = useLanguage();
  return catalog[language];
}
