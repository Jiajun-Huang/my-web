import { useParams } from "react-router-dom";
import {
  getMdFileText,
  getImageUrl,
  getArticleDoc,
} from "../../../util/firebase.uitil";

import Title from "../../../component/title/Title.component";
import Card from "../../../component/card/Card.component";
import MarkDown from "../../../util/Markdown/Markdown";
import DoesNotExist from "../../doesNotExist/DoesNotExist.page";
import "./singleArticle.style.scss";
import { useQuery } from "react-query";
import { Article } from "../../../types/article";
import { Skeleton } from "antd";
import { countWords } from "alfaaz";

export default function SingleArticle() {
  // get key from url params
  // key is the uid for every article, defined when uploading the articles
  // key is used to find MD file such as storage/key/key.md
  // key is also the id for the article document in firebase
  const { key } = useParams<string>();

  // query for the articles md text
  const {
    isLoading: isMdLoading,
    isError: isMdError,
    data: mdData,
    error: mdError,
  } = useQuery<string, Error>(
    "article/md/" + key,
    getMdFileText.bind(null, key as string)
  );

  // query for the articles meta data
  const {
    isLoading: isDocLoading,
    isError: isDocError,
    data: docData,
    error: docError,
  } = useQuery<Article, Error>(
    "article/doc/" + key,
    getArticleDoc.bind(null, key as string)
  );

  const isLoading = isMdLoading || isDocLoading;
  const words = countWords(mdData as string);
  // console.log(key);
  if (isDocError) return <div>the articles does not exist</div>;
  if (isMdError)
    return <div>the file is missing or something else happened</div>;

  return (
    <article className='single-article'>
      <div className='title-container'>
        <Title>{isLoading ? "Loading" : docData!.title}</Title>

        {/* display meta data, retrive from firebase data */}
        <div className='article-metadata'>
          {/* date */}
          <div className='metadata-first'>
            <time>
              Create at {docData?.createAt.toISOString().slice(0, 10)}{" "}
            </time>
            <time>
              Update at {docData?.lastUpdate.toISOString().slice(0, 10)}
            </time>
          </div>
          {/* word counts, read time, views  */}
          <div className='metadata-second'>
            <span>Word Count: {words}</span>
            <span>Read Time: {Math.ceil(words / 200)} mins </span>
            <span>Views: {docData?.views}</span>
          </div>
          {/* cata, tags */}
          <div className='metadata-third'>
            <span>Category: {docData?.category} </span>
            <span>tags: {docData?.tags.toString()} </span>
          </div>
        </div>
      </div>

      {/*  */}

      {/* main body display */}
      <Card color='main'>
        {isLoading ? (
          <div>
            <Skeleton active paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <MarkDown transformImageUrl={getImageUrl.bind(null, key as string)}>
            {mdData as string}
          </MarkDown>
        )}
      </Card>
    </article>
  );
}
