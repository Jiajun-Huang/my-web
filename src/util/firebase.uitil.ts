import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const getUuid = require("uuid-by-string");

// Initialize Firebase
const app = initializeApp(FIREBASE_API);

// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);
const st = getStorage();
const analytics = getAnalytics(app);

interface FArticle {
  title: string;
  category: string;
  createAt: Timestamp;
  lastUpdate: Timestamp;
  intro: string;
  tags: string[];
  likes: number;
  views: number;
}

// firestore database
/**
 * fetch data for 8 articles data from most recent to oldest
 * @returns return the data fetched
 */
export const queryArticlesProfile = async (): Promise<Article[]> => {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, orderBy("createAt", "desc"), limit(8));
  const snapshot = await getDocs(q);
  const articles: Article[] = snapshot.docs.map((doc) => {
    const data: FArticle = doc.data() as FArticle;
    return {
      ...data,
      createAt: data.createAt.toDate(),
      lastUpdate: data.lastUpdate.toDate(),
    };
  });

  return articles;
};

//firestore storage

export function getImageUrl(title: string, src: string) {
  const hashedTitle = getUuid(title.replace("-", " "));
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    FIREBASE_API.storageBucket
  }/o/${encodeURIComponent("articles/" + hashedTitle + "/" + src)}?alt=media`;
  return url;
}

export const getMdFileText = async (title: string): Promise<string> => {
  const hashedTitle = getUuid(title.replace("-", " "));
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    FIREBASE_API.storageBucket
  }/o/${encodeURIComponent(
    "articles/" + hashedTitle + "/" + hashedTitle + ".md"
  )}?alt=media`;
  console.log(url);
  const response = await fetch(url);
  if (response.status === 200) {
    return response.text();
  } else if (response.status === 404) {
    const error = new Error("404");
    console.log(error);
    throw error;
  } else {
    throw new Error("error");
  }
};
