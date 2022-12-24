import { Timestamp } from "firebase/firestore";

export type Article = {
  title: string;
  createdAt: string;
  lastUpdateAt: string;
  summary: string;
  tags: string[];
  likes: number;
  views: number;
};
