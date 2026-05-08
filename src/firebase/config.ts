import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

let app: FirebaseApp | null = null;

function readEnv(key: string): string {
  const v = import.meta.env[key as keyof ImportMetaEnv];
  return typeof v === "string" ? v.trim() : "";
}

function normalizeStorageBucket(bucket: string, projectId: string): string {
  const trimmed = bucket.trim();
  if (!trimmed) return `${projectId}.appspot.com`;
  // Env'da berilgan bucket nomini o'zgartirmaymiz:
  // yangi loyihalarda *.firebasestorage.app ham to'g'ri bo'lishi mumkin.
  return trimmed;
}

export function isFirebaseConfigured(): boolean {
  return Boolean(readEnv("VITE_FIREBASE_API_KEY") && readEnv("VITE_FIREBASE_PROJECT_ID"));
}

export function getFirebaseApp(): FirebaseApp {
  if (app) return app;
  const apiKey = readEnv("VITE_FIREBASE_API_KEY");
  const authDomain = readEnv("VITE_FIREBASE_AUTH_DOMAIN");
  const projectId = readEnv("VITE_FIREBASE_PROJECT_ID");
  const storageBucket = readEnv("VITE_FIREBASE_STORAGE_BUCKET");
  const messagingSenderId = readEnv("VITE_FIREBASE_MESSAGING_SENDER_ID");
  const appId = readEnv("VITE_FIREBASE_APP_ID");

  if (!apiKey || !projectId || !appId) {
    throw new Error(
      "Firebase sozlanmagan. Loyiha ildizida .env fayl yarating va VITE_FIREBASE_* o‘zgaruvchilarini joylang.",
    );
  }

  app = initializeApp({
    apiKey,
    authDomain: authDomain || `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: normalizeStorageBucket(storageBucket, projectId),
    messagingSenderId: messagingSenderId || undefined,
    appId,
    measurementId: readEnv("VITE_FIREBASE_MEASUREMENT_ID") || undefined,
  });
  return app;
}

export const auth = () => getAuth(getFirebaseApp());
export const db = () => getFirestore(getFirebaseApp());
export const storage = () => getStorage(getFirebaseApp());
