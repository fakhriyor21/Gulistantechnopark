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
  const uploadFile =
    mediaType === "image" ? await optimizeImageForUploadWithTimeout(file, 10000) : file;

  // Rasm uchun CORS muammolarini to'liq chetlab o'tish:
  // optimizatsiyalangan data URL ni bevosita saqlaymiz (local + production).
  if (mediaType === "image") {
    onProgress?.(20);
    const inlineUrl = await fileToDataUrl(uploadFile);
    if (inlineUrl.length > 900_000) {
      throw new Error(
        "Rasm hajmi katta. Iltimos, kichikroq rasm tanlang (taxminan 600KB gacha).",
      );
    }
    onProgress?.(100);
    return { url: inlineUrl, mediaType };
  }

  const safeName = uploadFile.name || file.name;
  const path = `news/${Date.now()}_${safeName.replace(/[^\w.-]/g, "_")}`;
  const sref = ref(storage(), path);

  try {
    onProgress?.(0);
    const uploadedRef =
      mediaType === "image"
        ? await uploadImageOnce(sref, uploadFile, onProgress)
        : await uploadWithResumableFallback(sref, uploadFile, onProgress);
    const url = await getDownloadURL(uploadedRef);
    onProgress?.(100);
    return { url, mediaType };
  } catch (err) {
    // Storage upload yiqilsa (CORS, preflight, network va h.k.), rasmni inline data URL sifatida saqlaymiz.
    if (mediaType === "image") {
      const dataUrl = await fileToDataUrl(uploadFile);
      if (dataUrl.length > 900_000) {
        throw new Error(
          "Rasm hajmi katta: CORS fallback uchun kichikroq rasm tanlang (taxminan 600KB gacha).",
        );
      }
      onProgress?.(100);
      return { url: dataUrl, mediaType };
    }
    const e = err as { code?: string; message?: string };
    console.error("[uploadNewsMedia] Storage upload error", {
      code: e.code,
      message: e.message,
      path,
    });
    throw err;
  }
}

async function uploadImageOnce(
  sref: ReturnType<typeof ref>,
  uploadFile: File,
  onProgress?: (percent: number) => void,
) {
  onProgress?.(10);
  const snap = await uploadBytes(sref, uploadFile);
  onProgress?.(95);
  return snap.ref;
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error ?? new Error("FileReader xatosi"));
    reader.readAsDataURL(file);
  });
}

async function uploadWithResumableFallback(
  sref: ReturnType<typeof ref>,
  uploadFile: File,
  onProgress?: (percent: number) => void,
) {
  try {
    return await uploadWithResumable(sref, uploadFile, onProgress);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    // Progress event kelmay qoladigan brauzer/tarmoq holatlarida direct upload bilan qayta urinib ko'ramiz.
    if (!/stall timeout|hard timeout/i.test(message)) throw err;
    onProgress?.(5);
    const snap = await uploadBytes(sref, uploadFile);
    onProgress?.(95);
    return snap.ref;
  }
}

function uploadWithResumable(
  sref: ReturnType<typeof ref>,
  uploadFile: File,
  onProgress?: (percent: number) => void,
): Promise<ReturnType<typeof ref>> {
  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(sref, uploadFile);
    const hardTimeoutMs = 180000;
    const stallTimeoutMs = 45000;
    let settled = false;
    let hardTimer: ReturnType<typeof setTimeout> | null = null;
    let stallTimer: ReturnType<typeof setTimeout> | null = null;

    const clearTimers = () => {
      if (hardTimer) clearTimeout(hardTimer);
      if (stallTimer) clearTimeout(stallTimer);
      hardTimer = null;
      stallTimer = null;
    };

    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      clearTimers();
      try {
        task.cancel();
      } catch {
        // no-op
      }
      reject(error);
    };

    const armStallTimer = () => {
      if (stallTimer) clearTimeout(stallTimer);
      stallTimer = setTimeout(() => {
        fail(new Error("Upload jarayoni to'xtab qoldi (stall timeout). Internet/Storage holatini tekshiring."));
      }, stallTimeoutMs);
    };

    hardTimer = setTimeout(() => {
      fail(new Error("Upload juda uzoq davom etdi (hard timeout). Qayta urinib ko'ring."));
    }, hardTimeoutMs);
    armStallTimer();

    task.on(
      "state_changed",
      (snapshot) => {
        armStallTimer();
        const pct =
          snapshot.totalBytes > 0
            ? Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            : 0;
        onProgress?.(pct);
      },
      (err) => {
        if (settled) return;
        settled = true;
        clearTimers();
        reject(err);
      },
      () => {
        if (settled) return;
        settled = true;
        clearTimers();
        resolve(task.snapshot.ref);
      },
    );
  });
}

async function optimizeImageForUploadWithTimeout(file: File, timeoutMs: number): Promise<File> {
  try {
    return await Promise.race<File>([
      optimizeImageForUpload(file),
      new Promise<File>((resolve) => {
        setTimeout(() => resolve(file), timeoutMs);
      }),
    ]);
  } catch {
    return file;
  }
}

async function optimizeImageForUpload(file: File): Promise<File> {
  // Faqat rasm bo'lsa va brauzer canvas qo'llasa optimizatsiya qilamiz.
  if (!file.type.startsWith("image/")) return file;
  if (typeof window === "undefined") return file;

  try {
    if (typeof createImageBitmap !== "function") return file;
    const bitmap = await createImageBitmap(file);
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const targetW = Math.max(1, Math.round(bitmap.width * scale));
    const targetH = Math.max(1, Math.round(bitmap.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, targetW, targetH);

    const blob: Blob | null = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/webp", 0.82),
    );
    if (!blob) return file;

    // Agar optimizatsiya foyda bermasa originalni qoldiramiz.
    if (blob.size >= file.size) return file;

    const base = file.name.replace(/\.[^.]+$/, "") || "image";
    return new File([blob], `${base}.webp`, { type: "image/webp" });
  } catch {
    return file;
  }
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
