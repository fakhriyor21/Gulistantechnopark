import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA83qwQdosOisF2J1dInj5Z69fBOtMisUY",
  authDomain: "gulistantechnopark.firebaseapp.com",
  projectId: "gulistantechnopark",
  storageBucket: "gulistantechnopark.firebasestorage.app",
  messagingSenderId: "148605457051",
  appId: "1:148605457051:web:d315978edca1511a442c3e",
  measurementId: "G-1FTVNGV75J"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
