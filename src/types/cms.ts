import type { Timestamp } from "firebase/firestore";

export type ContactMessage = {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  message: string;
  read: boolean;
  createdAt: Timestamp;
};

export type NewsArticle = {
  title: string;
  description: string;
  imageUrl: string;
  mediaType?: "image" | "video";
  active?: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ServiceItem = {
  title: string;
  description: string;
  linkPath: string;
  iconId: string;
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type GalleryImage = {
  imageUrl: string;
  caption: string;
  createdAt: Timestamp;
};

export type AboutCms = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  bodyHtml: string;
  updatedAt?: Timestamp;
};
