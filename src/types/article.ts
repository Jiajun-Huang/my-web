import { Timestamp } from "firebase/firestore";

export type Article = {
  title: string;
  url: string;
  createAt: Date;
  lastUpdate: Date;
  intro: string;
  tags: string[];
  category: string;
  likes: number;
  views: number;
};
