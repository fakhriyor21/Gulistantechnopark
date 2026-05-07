import type { AdminNewsItem, ContactMessageItem } from "@/types/admin";

const STORAGE_KEYS = {
  auth: "adminToken",
  news: "newsItems",
  messages: "contactMessages",
} as const;

function safeRead<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeWrite<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function isAdminAuthenticated(): boolean {
  return Boolean(localStorage.getItem(STORAGE_KEYS.auth));
}

export function loginAdmin(username: string, password: string): boolean {
  const isValid = username === "admin" && password === "admin123";
  if (isValid) {
    localStorage.setItem(STORAGE_KEYS.auth, `admin_${Date.now()}`);
  }
  return isValid;
}

export function logoutAdmin(): void {
  localStorage.removeItem(STORAGE_KEYS.auth);
}

export function getAdminNews(): AdminNewsItem[] {
  return safeRead<AdminNewsItem[]>(STORAGE_KEYS.news, []);
}

export function saveAdminNews(items: AdminNewsItem[]): void {
  safeWrite(STORAGE_KEYS.news, items);
}

export function upsertAdminNews(item: AdminNewsItem): void {
  const items = getAdminNews();
  const updated = [item, ...items.filter((news) => news.id !== item.id)];
  saveAdminNews(updated);
}

export function deleteAdminNews(id: string): void {
  const updated = getAdminNews().filter((item) => item.id !== id);
  saveAdminNews(updated);
}

export function getContactMessages(): ContactMessageItem[] {
  return safeRead<ContactMessageItem[]>(STORAGE_KEYS.messages, []);
}

export function saveContactMessages(items: ContactMessageItem[]): void {
  safeWrite(STORAGE_KEYS.messages, items);
}

export function addContactMessage(item: ContactMessageItem): void {
  const items = getContactMessages();
  saveContactMessages([item, ...items]);
}
