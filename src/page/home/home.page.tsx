import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../../component/card/articleCard/articleCard.component.tsx";
import Title from "../../component/title/Title.component.tsx";

import articleData from "../../data/data.json";

import { Article } from "../../types/article";
import { queryArticlesProfile } from "../../util/firebase.uitil.ts";

import "./home.style.scss";

/**
 *  render article list in main page
 *  also the side bar
 *
 * @returns
 */
export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const articles = await queryArticlesProfile();
      setArticles(articles);
    }

    fetchData();
  }, []);

  const toArticle = (title) => {
    console.log(title);

    navigate("/articles/" + encodeURIComponent(title).split("%20").join("-"));
  };

  return (
    <div className="home">
      <header>
        <Title> Jiajun's WebSite </Title>
      </header>
      <section>
        {articles.map((article, id) => (
          <ArticleCard
            article={article}
            key={id}
            onClick={toArticle.bind(null, article.title)}
          />
        ))}
      </section>
      <aside></aside>
    </div>
  );
}
