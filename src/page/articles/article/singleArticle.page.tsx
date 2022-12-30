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

interface ContentData {
  url: string;
  content: string;
}

export default function SingleArticle() {
  const { title } = useParams();
  const [data, setData] = useState<ContentData>({ url: "", content: "" });

  useEffect(() => {
    const fetchData = async (title: string) => {
      const url: string = await getMdFileUrl(title);
      const content: string = await getMdFileText(url);
      setData({ url, content });
    };

    if (title !== undefined) fetchData(decodeURI(title).replace("-", " "));
  }, [title]);

  if (data.url === "" || data.content === "") {
    return <div>Loading</div>;
  }

  return (
    <article>
      <Title>{title}</Title>
      <Card color="main">
        <MarkDown imageUrl={getImageUrl.bind(null, title)}>
          {data.content}
        </MarkDown>
      </Card>
    </article>
  );
}
