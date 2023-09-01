import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import FIREBASE_API from "../secret/firebaseAPI.json";
import {
  getFirestore,
  query,
  orderBy,
  collection,
  limit,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { Article } from "../types/article";

// Initialize Firebase
const app = initializeApp(FIREBASE_API);

// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);
getStorage();
getAnalytics(app);

interface FArticle {
  title: string;
  url: string;
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
    const data: FArticle = doc.data() as FArticle; // covert timestamp to date object
    return {
      ...data,
      createAt: data.createAt.toDate(),
      lastUpdate: data.lastUpdate.toDate(),
    };
  });

  return articles;
};

//firestore storage

export function getImageUrl(key: string | undefined, src: string | undefined) {
  if (src === undefined || key === undefined) {
    return "";
  }
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    FIREBASE_API.storageBucket
  }/o/${"articles/" + key + "/" + src}?alt=media`;
  return url;
}

/**
 * Get
 * @param key key of the article to get
 * @returns
 */
export const getMdFileText = async (key: string): Promise<string> => {
  // get the url of the file
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    FIREBASE_API.storageBucket
  }/o/${"articles%2F" + key + "%2F" + key + ".md"}?alt=media`;

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

/**
 *
 * @param key key of the article to get
 * @returns
 */
export const getArticleDoc = async (key: string): Promise<Article> => {
  const documentRef = doc(db, "articles", key);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) {
    const b: FArticle = documentSnapshot.data() as FArticle;
    const article: Article = {
      ...b,
      createAt: b.createAt.toDate(),
      lastUpdate: b.lastUpdate.toDate(),
    };
    return article;
  } else {
    throw new Error("404");
  }
};
