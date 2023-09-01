import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../../component/card/articleCard/articleCard.component";
import Title from "../../component/title/Title.component";

import { Article } from "../../types/article";
import { queryArticlesProfile } from "../../util/firebase.uitil";
import Card from "../../component/card/Card.component";
import { useQuery } from "react-query";
import "./home.style.scss";

import { Skeleton } from "antd";

export default function Home() {
  const navigate = useNavigate();
  const LOADING_DISPLAY = 5;
  const it = new Array(LOADING_DISPLAY).fill(0);
  const { isLoading, isError, data, error } = useQuery<Article[]>(
    "home",
    queryArticlesProfile
  );

  const toArticle = (key: string) => {
    navigate("/articles/" + key);
  };

  console.log(isLoading);
  return (
    <div className='home'>
      <header>
        <Title> Jiajun's WebSite </Title>
      </header>
      <section className="article-card-list">
        {/* if loading create  */}
        {isLoading
          ? it.map((_, i) => (
              <div className='article-item' key={i}>
                <Card color={"main"} size={"small"} hover={true}>
                  <Skeleton key={i} active />
                </Card>
              </div>
            ))
          : data?.map((article, i) => (
              <div className='article-item' key={i}>
                <ArticleCard
                  article={article}
                  onClick={toArticle.bind(null, article.url)}
                />
              </div>
            ))}
      </section>
      <aside></aside>
    </div>
  );
}
