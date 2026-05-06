/**
 * Backend manzili (.env: VITE_API_ORIGIN=https://sizning-server.uz).
 * Dev rejimida bo‘sh — so‘rovlar `vite` orqali `/api` → localhost:3000 proxisi bilan ketadi (CORS yo‘q).
 */
const raw = (import.meta.env.VITE_API_ORIGIN as string | undefined)?.trim();
export const API_ORIGIN =
  raw && raw.length > 0
    ? raw.replace(/\/$/, "")
    : import.meta.env.DEV
      ? ""
      : "http://localhost:3000";

export function mediaFileUrl(fileName: string): string {
  if (!fileName) return "";
  if (/^https?:\/\//i.test(fileName)) return fileName;
  return `${API_ORIGIN}/api/media/${encodeURIComponent(fileName)}`;
}
