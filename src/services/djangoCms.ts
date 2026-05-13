import axios from "axios";
import type { ServiceData } from "@/data/serviceData";
import { API_V1_BASE } from "@/lib/apiOrigin";
import { getClientLanguage } from "@/lib/i18n";

const client = axios.create({
  baseURL: API_V1_BASE,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const lang = getClientLanguage();
  config.headers.set("X-App-Language", lang);
  config.headers.set("Accept-Language", `${lang},uz;q=0.9,en;q=0.8,*;q=0.5`);
  return config;
});

client.interceptors.response.use((response) => {
  const m = (response.config.method || "get").toLowerCase();
  if (m === "get" || m === "head") {
    console.info("Django API dan olindi", response.config.url || "");
  }
  return response;
});

export interface DjangoNewsApiRow {
  id: number;
  title: string;
  body_small?: string;
  img: string | null;
  created_at: string;
  language?: string;
}

export function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unwrapList<T>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[];
  if (data && typeof data === "object" && "results" in data) {
    const r = (data as { results: unknown }).results;
    if (Array.isArray(r)) return r as T[];
  }
  return [];
}

/** Backend: 9 raqam (masalan 901234567), +998 yoki bo'shliqlar avtomatik kesiladi */
export function phoneDigitsForDjango(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.length >= 12 && d.startsWith("998")) return d.slice(-9);
  if (d.length >= 9) return d.slice(-9);
  return d;
}

export async function djangoListNews(): Promise<DjangoNewsApiRow[]> {
  const { data } = await client.get<unknown>("/news/");
  return unwrapList<DjangoNewsApiRow>(data);
}

export async function djangoGetNews(id: number | string): Promise<DjangoNewsApiRow | null> {
  try {
    const { data } = await client.get<DjangoNewsApiRow>(`/news/${id}/`);
    return data;
  } catch {
    return null;
  }
}

/**
 * Ariza / savol formasi — faqat POST `/inquiry/` (GET yo'q).
 * `phone` 9 raqam yoki +998... (frontendda normalize qilinadi).
 */
export async function sendInquiry(data: {
  name: string;
  phone: string;
  message?: string;
  company_name?: string;
}): Promise<unknown> {
  const phone9 = phoneDigitsForDjango(data.phone);
  const payload = {
    name: data.name.trim().slice(0, 100),
    phone: phone9,
    company_name: (data.company_name?.trim() || "Ko'rsatilmagan").slice(0, 100),
    body_small: (data.message?.trim() || "—").slice(0, 200),
  };
  const { data: res } = await client.post("/inquiry/", payload);
  return res;
}

/** Eski nom — `sendInquiry` bilan bir xil */
export async function djangoSubmitInquiry(payload: {
  name: string;
  phone: string;
  company_name: string;
  body_small: string;
}): Promise<unknown> {
  return sendInquiry({
    name: payload.name,
    phone: payload.phone,
    company_name: payload.company_name,
    message: payload.body_small,
  });
}

/** Aloqa formasi (ism, telefon, qulay vaqt) — Django ConnectionForm */
export async function djangoSubmitContact(payload: {
  name: string;
  phone: string;
  comfort_time: string;
}): Promise<unknown> {
  const { data } = await client.post("/contact/", payload);
  return data;
}

export interface DjangoServiceListItem {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  created_at?: string;
  language?: string;
}

export interface DjangoServiceSection {
  id: number;
  title: string;
  language?: string;
}

export interface DjangoServiceDetail {
  id: number;
  title: string;
  body_small?: string;
  created_at?: string;
  language?: string;
}

export interface DjangoMainServiceDetail {
  id: number;
  title: string;
  slug: string;
  body?: string;
  image: string | null;
  created_at?: string;
  language?: string;
  sections?: DjangoServiceSection[];
  details?: DjangoServiceDetail[];
}

export async function djangoListMainServices(): Promise<DjangoServiceListItem[]> {
  const { data } = await client.get<unknown>("/services/", { params: { page_size: 100 } });
  return unwrapList<DjangoServiceListItem>(data);
}

export async function djangoGetServiceBySlug(slug: string): Promise<DjangoMainServiceDetail | null> {
  try {
    const { data } = await client.get<DjangoMainServiceDetail>(
      `/services/by-slug/${encodeURIComponent(slug)}/`,
    );
    return data;
  } catch {
    return null;
  }
}

/** Industries sahifasi uchun ServiceData shakliga */
export function mapDjangoServiceToServiceData(
  api: DjangoMainServiceDetail,
  slug: string,
  fallbackIcon: string,
): ServiceData {
  const sections = api.sections ?? [];
  const details = api.details ?? [];
  const detailRows = details.map((d) => ({
    title: d.title,
    description: stripHtml(d.body_small || ""),
  }));
  const sectionRows = sections.map((s) => ({
    title: s.title,
    description: "",
  }));
  const dataRows = detailRows.length > 0 ? detailRows : sectionRows;
  const heroImage = api.image || fallbackIcon;
  return {
    name: api.title,
    description: stripHtml(api.body || "").slice(0, 800),
    icon: heroImage,
    id: slug,
    title: api.title,
    section: {
      title: sections[0]?.title ?? "Bo'limlar",
      description: stripHtml(api.body || "").slice(0, 400),
      data: dataRows.length > 0 ? dataRows : [{ title: api.title, description: stripHtml(api.body || "") }],
    },
  };
}

export interface DjangoAboutUs {
  id: number;
  body: string;
  students: number;
  direction: number;
  specialist: number;
  created_at?: string;
  language?: string;
}

export async function djangoGetAboutUs(): Promise<DjangoAboutUs | null> {
  try {
    const { data } = await client.get<unknown>("/about-us/");
    if (Array.isArray(data)) return (data[0] as DjangoAboutUs) ?? null;
    if (data && typeof data === "object") return data as DjangoAboutUs;
    return null;
  } catch {
    return null;
  }
}

export interface DjangoAboutCompany {
  id: number;
  title: string;
  text: string;
  image: string | null;
  image2: string | null;
  created_at?: string;
  language?: string;
}

export async function djangoListAboutCompany(): Promise<DjangoAboutCompany[]> {
  const { data } = await client.get<unknown>("/about-company/", { params: { page_size: 20 } });
  return unwrapList<DjangoAboutCompany>(data);
}

export interface DjangoHistoryRow {
  id: number;
  title: string;
  body_small: string;
  created_at: string;
  language?: string;
}

export async function djangoListHistory(): Promise<DjangoHistoryRow[]> {
  const { data } = await client.get<unknown>("/history/", { params: { page_size: 50, ordering: "created_at" } });
  return unwrapList<DjangoHistoryRow>(data);
}

export interface DjangoFaqRow {
  id: number;
  question: string;
  answer: string;
  created_at?: string;
  language?: string;
}

export async function djangoListFaqsPublic(): Promise<DjangoFaqRow[]> {
  const { data } = await client.get<unknown>("/faqs/", { params: { page_size: 100 } });
  return unwrapList<DjangoFaqRow>(data);
}

export interface DjangoTeamRow {
  id: number;
  full_name: string;
  position: string;
  img: string | null;
  created_at?: string;
  language?: string;
}

export async function djangoListTeam(): Promise<DjangoTeamRow[]> {
  const { data } = await client.get<unknown>("/team/", { params: { page_size: 100 } });
  return unwrapList<DjangoTeamRow>(data);
}

export interface DjangoGalleryRow {
  id: number;
  img: string | null;
  created_at?: string;
  language?: string;
}

export async function djangoListAboutUsImages(): Promise<DjangoGalleryRow[]> {
  const { data } = await client.get<unknown>("/about-us-images/", { params: { page_size: 100 } });
  return unwrapList<DjangoGalleryRow>(data);
}

export interface DjangoQuoteRow {
  id: number;
  full_name: string;
  position: string;
  body: string;
  img: string | null;
  quote_choices?: string;
  created_at?: string;
  language?: string;
}

export async function djangoGetQuoteLatest(): Promise<DjangoQuoteRow | null> {
  try {
    const { data } = await client.get<DjangoQuoteRow>("/quotes/latest/");
    return data;
  } catch {
    return null;
  }
}

/** Endpoint nomlari bilan mos keladigan qisqa nomlar */
export const djangoListServices = djangoListMainServices;
export const djangoListGallery = djangoListAboutUsImages;
export async function djangoGetTeam() {
  return djangoListTeam();
}
