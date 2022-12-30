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
    console.log(data);
    return {
      ...data,
      createAt: data.createAt.toDate(),
      lastUpdate: data.lastUpdate.toDate(),
    };
  });

  return articles;
};

//firestore storage

export async function getMdFileUrl(title: string) {
  const hashedTitle = getUuid(title);
  const fileRef = ref(
    st,
    "articles/" + hashedTitle + "/" + hashedTitle + ".md"
  );
  const url = await getDownloadURL(fileRef);
  //console.log(url);
  return url;
}

export async function getImageUrl(articleTitle: string, src: string) {
  const hashedTitle = getUuid(articleTitle);
  const fileRef = ref(st, "articles/" + hashedTitle + "/" + src);
  //console.log("articles/" + hashedTitle + "/" + src);
  const url = await getDownloadURL(fileRef);
  //console.log(url);
  return url;
}

export const getMdFileText = async (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};
