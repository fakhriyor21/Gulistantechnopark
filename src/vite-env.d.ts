/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Prod: https://api.domen.uz — bo'sh bo'lsa http://127.0.0.1:8000 */
  readonly VITE_API_ORIGIN?: string;
  readonly VITE_DJANGO_API_TARGET?: string;
  readonly VITE_DJANGO_ADMIN_URL?: string;
  readonly VITE_USE_DJANGO_CMS?: string;
  readonly VITE_USE_FIREBASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
