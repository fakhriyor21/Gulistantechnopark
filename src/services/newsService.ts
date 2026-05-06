import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase/config";

export interface News {
  id: string;
  title: string;
  description: string;
  datatime: string;
  file: string[];
}

const newsCollection = collection(db, "news");

export async function getAllNews(): Promise<News[]> {
  const newsQuery = query(newsCollection, orderBy("datatime", "desc"));
  const snapshot = await getDocs(newsQuery);

  return snapshot.docs.map((docSnapshot: QueryDocumentSnapshot<DocumentData>) => ({
    id: docSnapshot.id,
    title: docSnapshot.data().title || "",
    description: docSnapshot.data().description || "",
    datatime: docSnapshot.data().datatime || "",
    file: docSnapshot.data().file || [],
  }));
}

export async function addNews(news: Omit<News, "id">): Promise<void> {
  await addDoc(newsCollection, {
    title: news.title,
    description: news.description,
    datatime: news.datatime,
    file: news.file,
  });
}

export async function deleteNews(id: string): Promise<void> {
  await deleteDoc(doc(db, "news", id));
}
