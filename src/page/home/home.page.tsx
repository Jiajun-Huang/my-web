import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../../component/card/articleCard/articleCard.component";
import Title from "../../component/title/Title.component";

import { Article } from "../../types/article";
import { queryArticlesProfile } from "../../util/firebase.uitil";
import { useQuery } from "react-query";
import "./home.style.scss";

/**
 *  render article list in main page
 *  also the side bar
 *
 * @returns
 */
export default function Home() {
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery<Article[]>(
    "home",
    queryArticlesProfile
  );

  const toArticle = (title: string) => {
    navigate("/articles/" + encodeURIComponent(title).split("%20").join("-"));
  };

  return (
    <div className='home'>
      <header>
        <Title> Jiajun's WebSite </Title>
      </header>
      <section>
        {isLoading ? (
          <p>Loading</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          data?.map((article) => (
            <ArticleCard
              article={article}
              onClick={toArticle.bind(null, article.title)}
            />
          ))
        )}
      </section>
      <aside></aside>
    </div>
  );
}
