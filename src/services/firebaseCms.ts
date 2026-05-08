import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { db, isFirebaseConfigured, storage } from "@/firebase/config";
import type { AboutCms, ContactMessage, GalleryImage, NewsArticle, ServiceItem } from "@/types/cms";

const col = {
  messages: "messages",
  news: "news",
  services: "services",
  gallery: "gallery",
  cms: "cms",
} as const;

export function canUseFirebase(): boolean {
  return isFirebaseConfigured();
}

export async function submitContactMessage(data: Omit<ContactMessage, "createdAt" | "read">): Promise<void> {
  if (!canUseFirebase()) throw new Error("Firebase sozlanmagan");
  await addDoc(collection(db(), col.messages), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
}

export async function listContactMessages(): Promise<{ id: string; data: ContactMessage }[]> {
  if (!canUseFirebase()) return [];
  const snap = await getDocs(collection(db(), col.messages));
  return snap.docs
    .map((d) => ({ id: d.id, data: d.data() as ContactMessage }))
    .sort((a, b) => {
      const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      return bv - av;
    });
}

export function watchContactMessages(
  onNext: (rows: { id: string; data: ContactMessage }[]) => void,
  onError?: (err: Error) => void,
): () => void {
  if (!canUseFirebase()) {
    onNext([]);
    return () => undefined;
  }
  return onSnapshot(
    collection(db(), col.messages),
    (snap) =>
      onNext(
        snap.docs
          .map((d) => ({ id: d.id, data: d.data() as ContactMessage }))
          .sort((a, b) => {
            const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            return bv - av;
          }),
      ),
    (err) => onError?.(err as Error),
  );
}

export async function setMessageRead(id: string, read: boolean): Promise<void> {
  await updateDoc(doc(db(), col.messages, id), { read });
}

export async function deleteMessage(id: string): Promise<void> {
  await deleteDoc(doc(db(), col.messages, id));
}

export async function listNews(): Promise<{ id: string; data: NewsArticle }[]> {
  if (!canUseFirebase()) return [];
  const snap = await getDocs(collection(db(), col.news));
  return snap.docs
    .map((d) => ({ id: d.id, data: d.data() as NewsArticle }))
    .sort((a, b) => {
      const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      return bv - av;
    });
}

export async function createNews(payload: {
  title: string;
  description: string;
  imageUrl: string;
  mediaType?: "image" | "video";
  active?: boolean;
}): Promise<string> {
  const refDoc = await addDoc(collection(db(), col.news), {
    ...payload,
    active: payload.active ?? true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return refDoc.id;
}

export async function getNewsById(id: string): Promise<NewsArticle | null> {
  if (!canUseFirebase()) return null;
  const snap = await getDoc(doc(db(), col.news, id));
  if (!snap.exists()) return null;
  return snap.data() as NewsArticle;
}

export async function updateNews(
  id: string,
  payload: Partial<{ title: string; description: string; imageUrl: string; mediaType: "image" | "video"; active: boolean }>,
): Promise<void> {
  await updateDoc(doc(db(), col.news, id), {
    ...payload,
    updatedAt: serverTimestamp(),
  });
}

export function watchNews(
  onNext: (rows: { id: string; data: NewsArticle }[]) => void,
  onError?: (err: Error) => void,
): () => void {
  if (!canUseFirebase()) {
    onNext([]);
    return () => undefined;
  }

  return onSnapshot(
    collection(db(), col.news),
    (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as NewsArticle,
      }));

      // Client-side sort: query `orderBy`ga bog'liq indeks muammolarini oldini oladi.
      items.sort((a, b) => {
        const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
        const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
        return bv - av;
      });

      onNext(items);
    },
    (err) => onError?.(err as Error),
  );
}

export async function deleteNews(id: string): Promise<void> {
  await deleteDoc(doc(db(), col.news, id));
}

export async function listServices(): Promise<{ id: string; data: ServiceItem }[]> {
  if (!canUseFirebase()) return [];
  const snap = await getDocs(collection(db(), col.services));
  return snap.docs
    .map((d) => ({ id: d.id, data: d.data() as ServiceItem }))
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

export function watchServices(
  onNext: (rows: { id: string; data: ServiceItem }[]) => void,
  onError?: (err: Error) => void,
): () => void {
  if (!canUseFirebase()) {
    onNext([]);
    return () => undefined;
  }

  return onSnapshot(
    collection(db(), col.services),
    (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as ServiceItem,
      }));

      // Client-side sort
      items.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

      onNext(items);
    },
    (err) => onError?.(err as Error),
  );
}

export async function createService(payload: {
  title: string;
  description: string;
  linkPath: string;
  iconId: string;
  order: number;
}): Promise<string> {
  const refDoc = await addDoc(collection(db(), col.services), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return refDoc.id;
}

export async function updateService(
  id: string,
  payload: Partial<{ title: string; description: string; linkPath: string; iconId: string; order: number }>,
): Promise<void> {
  await updateDoc(doc(db(), col.services, id), {
    ...payload,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteService(id: string): Promise<void> {
  await deleteDoc(doc(db(), col.services, id));
}

export async function listGallery(): Promise<{ id: string; data: GalleryImage }[]> {
  if (!canUseFirebase()) return [];
  const snap = await getDocs(collection(db(), col.gallery));
  return snap.docs
    .map((d) => ({ id: d.id, data: d.data() as GalleryImage }))
    .sort((a, b) => {
      const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
      return bv - av;
    });
}

export function watchGallery(
  onNext: (rows: { id: string; data: GalleryImage }[]) => void,
  onError?: (err: Error) => void,
): () => void {
  if (!canUseFirebase()) {
    onNext([]);
    return () => undefined;
  }
  return onSnapshot(
    collection(db(), col.gallery),
    (snap) =>
      onNext(
        snap.docs
          .map((d) => ({ id: d.id, data: d.data() as GalleryImage }))
          .sort((a, b) => {
            const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            return bv - av;
          }),
      ),
    (err) => onError?.(err as Error),
  );
}

export async function uploadNewsMedia(
  file: File,
  onProgress?: (percent: number) => void,
): Promise<{ url: string; mediaType: "image" | "video" }> {
  if (!canUseFirebase()) {
    throw new Error("Firebase sozlanmagan");
  }

  const mediaType = file.type.startsWith("video/") ? "video" : "image";
  const path = `news/${Date.now()}_${file.name.replace(/[^\w.-]/g, "_")}`;
  const sref = ref(storage(), path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(sref, file);
    task.on(
      "state_changed",
      (snapshot) => {
        const pct = snapshot.totalBytes > 0 ? Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) : 0;
        onProgress?.(pct);
      },
      (err) => {
        const e = err as { code?: string; message?: string };
        console.error("[uploadNewsMedia] Storage upload error", {
          code: e.code,
          message: e.message,
          path,
        });
        reject(err);
      },
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          onProgress?.(100);
          resolve({ url, mediaType });
        } catch (err) {
          reject(err);
        }
      },
    );
  });
}

export async function uploadGalleryFile(file: File, caption: string): Promise<string> {
  const path = `gallery/${Date.now()}_${file.name.replace(/[^\w.-]/g, "_")}`;
  const sref = ref(storage(), path);
  await uploadBytes(sref, file);
  const url = await getDownloadURL(sref);
  await addDoc(collection(db(), col.gallery), {
    imageUrl: url,
    caption,
    createdAt: serverTimestamp(),
  });
  return url;
}

export async function deleteGalleryItem(id: string): Promise<void> {
  await deleteDoc(doc(db(), col.gallery, id));
}

export async function getAboutCms(): Promise<AboutCms | null> {
  if (!canUseFirebase()) return null;
  const snap = await getDoc(doc(db(), col.cms, "about"));
  if (!snap.exists()) return null;
  return snap.data() as AboutCms;
}

export function watchAboutCms(
  onNext: (data: AboutCms | null) => void,
  onError?: (err: Error) => void,
): () => void {
  if (!canUseFirebase()) {
    onNext(null);
    return () => undefined;
  }
  return onSnapshot(
    doc(db(), col.cms, "about"),
    (snap) => onNext(snap.exists() ? (snap.data() as AboutCms) : null),
    (err) => onError?.(err as Error),
  );
}

export async function saveAboutCms(payload: Pick<AboutCms, "enabled" | "eyebrow" | "title" | "subtitle" | "bodyHtml">): Promise<void> {
  await setDoc(
    doc(db(), col.cms, "about"),
    {
      ...payload,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function ensureAboutCmsDoc(): Promise<void> {
  await setDoc(
    doc(db(), col.cms, "about"),
    {
      enabled: false,
      eyebrow: "Biz haqimizda",
      title: "Guliston Yoshlar Texnoparki",
      subtitle: "",
      bodyHtml: "",
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
