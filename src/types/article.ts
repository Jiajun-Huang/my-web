import { Timestamp } from "firebase/firestore";

export type Article = {
  title: string;
  createdAt: Date;
  lastUpdateAt: Date;
  summary: string;
  tags: string[];
  likes: number;
  views: number;
};
