import { useParams } from "react-router-dom";
import {
  getMdFileText,
  getImageUrl,
  getArticleDoc,
} from "../../../util/firebase.uitil";

import Title from "../../../component/title/Title.component";
import Card from "../../../component/card/Card.component";
import MarkDown from "../../../component/Markdown/Markdown";
import DoesNotExist from "../../doesNotExist/DoesNotExist.page";
import "./singleArticle.style.scss";
import { useQueries } from "react-query";
import { Article } from "../../../types/article";
import { Skeleton } from "antd";
import { countWords } from "alfaaz";
import { useState } from "react";
import {
  CalendarOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  FolderOutlined,
  TagOutlined,
  FileWordOutlined,
} from "@ant-design/icons";

export default function SingleArticle() {
  // get key from url params
  // key is the uid for every article, defined when uploading the articles
  // key is used to find MD file such as storage/key/key.md
  // key is also the id for the article document in firebase
  const { key } = useParams<string>();

  // query for the articles md text
  const queries = useQueries([
    {
      queryKey: ["article/md/", key],
      queryFn: () => getMdFileText(key as string),
    },
    {
      queryKey: ["article/doc/", key],
      queryFn: () => getArticleDoc(key as string),
    },
  ]);

  const mdDataQuery = queries[0];
  const docDataQuery = queries[1];

  const docLoading = queries[1].isLoading;
  const mdLoading = queries[0].isLoading;
  const isMdError = mdDataQuery.isError;
  const isDocError = docDataQuery.isError;

  if (isDocError) {
    return <div>The article does not exist</div>;
  }

  if (isMdError) {
    return <div>The file is missing or an error occurred</div>;
  }

  const mdData = mdDataQuery.data;
  const docData = docDataQuery.data;

  // console.log(key);
  if (isDocError) return <div>the articles does not exist</div>;
  if (isMdError)
    return <div>the file is missing or something else happened</div>;
  const count = mdData ? countWords(mdData) : 0;
  return (
    <article className='single-article'>
      <div className='title-container'>
        <Title>{docLoading ? "Loading" : docData!.title}</Title>

        {/* display meta data, retrive from firebase data */}
        <div className='article-metadata'>
          {/* date */}
          <div className='metadata-list'>
            <span>
              <CalendarOutlined /> Created{" "}
              <time>
                {docLoading
                  ? "____-__-__"
                  : docData?.createAt.toISOString().slice(0, 10)}
              </time>
            </span>
            <span>
              <SyncOutlined /> Updated{" "}
              <time>
                {docLoading
                  ? "____-__-__"
                  : docData?.lastUpdate.toISOString().slice(0, 10)}
              </time>
            </span>
          </div>
          {/* word counts, read time, views  */}
          <div className='metadata-list'>
            <span>
              <FileWordOutlined /> Word Count {docLoading ? "___" : count}
            </span>
            <span>
              <ClockCircleOutlined /> Read Time{" "}
              {docLoading ? "___" : Math.ceil(count / 200)} mins
            </span>
            <span>
              <EyeOutlined /> Views {docLoading ? "___" : docData?.views}
            </span>
          </div>
          {/* cata, tags */}
          <div className='metadata-list'>
            <span>
              <FolderOutlined /> Category: {docData?.category}
            </span>
            <span>
              <TagOutlined /> Tags: {docData?.tags.toString().replaceAll(",", ", ")}
            </span>
          </div>
        </div>
      </div>

      {/*  */}

      {/* main body display */}
      <Card color='main'>
        {mdLoading ? (
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
