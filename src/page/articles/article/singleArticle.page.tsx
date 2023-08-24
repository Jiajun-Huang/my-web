import React from "react";
import { useParams } from "react-router-dom";
import { getMdFileText, getImageUrl } from "../../../util/firebase.uitil";

import Title from "../../../component/title/Title.component";
import Card from "../../../component/card/Card.component";
import MarkDown from "../../../util/Markdown/Markdown";
import DoesNotExist from "../../doesNotExist/DoesNotExist.page";
import "./singleArticle.style.scss";
import { useQuery } from "react-query";

export default function SingleArticle() {
  const { title } = useParams<string>();
  const { isLoading, isError, data, error } = useQuery<string, Error>(
    "article/" + title,
    getMdFileText.bind(null, title as string)
  );

  if (isError && error.message === "404") {
    //return <p>Does not exist</p>
    return <DoesNotExist />;
  }

  return (
    <article className='single-article'>
      <Title>
        {isLoading ? "Loading" : isError ? "Error!" : (title as string)}
      </Title>
      <Card color='main'>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error occurred: {error.message}</div>
        ) : (
          <MarkDown transformImageUrl={getImageUrl.bind(null, title as string)}>
            {data as string}
          </MarkDown>
        )}
      </Card>
    </article>
  );
}
