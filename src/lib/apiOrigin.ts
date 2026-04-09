/** Backend manzili (.env: VITE_API_ORIGIN=https://sizning-server.uz) */
export const API_ORIGIN = (
  import.meta.env.VITE_API_ORIGIN as string | undefined
)?.replace(/\/$/, "") || "http://localhost:3000";

export function mediaFileUrl(fileName: string): string {
  if (!fileName) return "";
  if (/^https?:\/\//i.test(fileName)) return fileName;
  return `${API_ORIGIN}/api/media/${encodeURIComponent(fileName)}`;
}
