import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Yangiliklar API dan kelgan sana satrini ko‘rsatish; noto‘g‘ri bo‘lsa «—». */
export function formatNewsDate(dateString: string): string {
  if (!dateString?.trim()) return "—";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "—";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
