import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../../component/card/articleCard/articleCard.component.tsx";
import Title from "../../component/title/Title.component.tsx";

import articleData from "../../data/data.json";

import { Article } from "../../types/article";

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
    const articleList: Article[] = articleData;
    console.log(articleList);
    setArticles(articleList);
  }, []);

  const toArticle = (title) => {
    console.log(title);

    navigate("/articles/" + encodeURI(title));
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
