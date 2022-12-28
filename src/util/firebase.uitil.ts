import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import FIREBASE_API from "../secret/firebaseAPI.json";
import {
  getFirestore,
  query,
  orderBy,
  collection,
  limit,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { Article } from "../types/article";

// Initialize Firebase
const app = initializeApp(FIREBASE_API);

// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);
const st = getStorage();

interface FArticle {
  title: string;
  createdAt: Timestamp;
  lastUpdate: Timestamp;
  summary: string;
  tags: string[];
  likes: number;
  views: number;
}

// firestore database
/**
 * fetch data for 8 articles data from most recent to oldest
 * @returns return the data fetched
 */
export const queryArticlesProfile = async () => {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, orderBy("createAt", "desc"), limit(8));
  const snapshot = await getDocs(q);
  const articles: Article[] = snapshot.docs.map((doc) => {
    const data: FArticle = doc.data() as FArticle;
    console.log(data);
    return {
      ...data,
      createdAt: (data.createdAt as Timestamp).toDate(),
      lastUpdateAt: (data.lastUpdate as Timestamp).toDate(),
    };
  });

  return articles;
};

export const addCollectionAndDocuments = async (
  collenctionKey,
  documentKey
) => {
  const collectionRef = collection(db, collenctionKey);
};

//firestore storage
const root = ref(st);
const articlesRef = ref(st, "articles");
