export const APP_LOCALES = ["uz", "en", "ru"] as const;
export type AppLocale = (typeof APP_LOCALES)[number];

const STORAGE_KEY = "texnopark_locale";

function normalize(raw: string | null | undefined): AppLocale {
  if (!raw) return "uz";
  const c = raw.trim().toLowerCase().split("-")[0] || "uz";
  return (APP_LOCALES as readonly string[]).includes(c) ? (c as AppLocale) : "uz";
}

function readStorage(): AppLocale {
  if (typeof window === "undefined") return "uz";
  return normalize(window.localStorage.getItem(STORAGE_KEY));
}

/** Axios / til konteksti uchun — bir xil qiymat */
let memoryLocale: AppLocale = typeof window !== "undefined" ? readStorage() : "uz";

export function getClientLanguage(): AppLocale {
  return memoryLocale;
}

export function setClientLanguage(lang: AppLocale): void {
  memoryLocale = lang;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }
}

export function initClientLanguageFromStorage(): AppLocale {
  memoryLocale = readStorage();
  if (typeof document !== "undefined") {
    document.documentElement.lang = memoryLocale;
  }
  return memoryLocale;
}
