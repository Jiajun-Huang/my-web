import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMdFileUrl,
  getMdFileText,
  getImageUrl,
} from "../../../util/firebase.uitil.ts";

import Title from "../../../component/title/Title.component.tsx";
import Card from "../../../component/card/Card.component.tsx";
import MarkDown from "../../../util/Markdown/Markdown.tsx";

import { useQuery } from "react-query";

const fetchData = (title: string) => {
  const url: string = getMdFileUrl(title);
  return getMdFileText(url);
};

export default function SingleArticle() {
  const { title } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    "article/" + title,
    fetchData.bind(null, title)
  );

  return (
    <article>
      <Title>{title}</Title>
      <Card color="main">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error occurred: {error.message}</div>
        ) : (
          <MarkDown transformImageUrl={getImageUrl.bind(null, title)}>
            {data}
          </MarkDown>
        )}
      </Card>
    </article>
  );
}
