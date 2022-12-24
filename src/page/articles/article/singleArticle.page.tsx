import React from "react";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const { title } = useParams();
  return <div>{title}</div>;
}
