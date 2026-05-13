/**
 * Django REST — barcha CMS ma'lumotlari shu origin orqali.
 * Prod: `.env` da `VITE_API_ORIGIN=https://api.domen.uz` (oxiridagi `/` ixtiyoriy).
 * Dev: bo'sh qoldirilsa `http://127.0.0.1:8000` ishlatiladi.
 */
const envOrigin = (import.meta.env.VITE_API_ORIGIN as string | undefined)?.trim().replace(/\/$/, "");

/** API va media uchun asosiy origin (proksi ishlatilmasa to‘g‘ridan-to‘g‘ri shu manzilga so‘rov ketadi) */
export const API_ORIGIN = envOrigin || "http://127.0.0.1:8000";

/** REST: `/api/v1/...` — masalan http://127.0.0.1:8000/api/v1 */
export const API_V1_BASE = `${API_ORIGIN}/api/v1`;

/** Har doim Django CMS */
export const USE_DJANGO_CMS = true;

/** Firebase frontendda ishlatilmaydi */
export const USE_FIREBASE = false;

function joinOriginPath(origin: string, pathname: string): string {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin.replace(/\/$/, "")}${p}`;
}

/** Django admin — tanlangan til prefiksi bilan (`/uz/admin/`, `/en/admin/` …) */
export function djangoAdminUrl(lang: string): string {
  const explicit = (import.meta.env.VITE_DJANGO_ADMIN_URL as string | undefined)?.trim();
  if (explicit) return explicit;
  const code = lang.replace(/\/$/, "").split("-")[0] || "uz";
  return `${API_ORIGIN.replace(/\/$/, "")}/${code}/admin/`;
}

/** Ixtiyoriy joylar uchun standart (o'zbek) */
export const DJANGO_ADMIN_URL = djangoAdminUrl("uz");

export function mediaFileUrl(fileName: string): string {
  if (!fileName) return "";
  if (/^https?:\/\//i.test(fileName)) return fileName;
  return joinOriginPath(API_ORIGIN, `/media/${encodeURIComponent(fileName)}`);
}
