import React, { useEffect, useState } from "react";
import ArticleCard from "../../component/articleCard/articleCard.component.tsx";
import Card from "../../component/card/Card.component";
import Title from "../../component/title/Title.component.tsx";

import "./home.style.scss"
/**
 *  render article list in main page
 *  also the side bar
 *
 * @returns
 */
export default function Home() {
  const [articles, setArticles] = useState([]);
  console.log("asdf");
  // fect the dummy json as temporary
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((articleData) => articleData.json())
      .then((articleJson) => {
        setArticles([...articleJson.posts]);
        console.log(articleJson);
        console.log(typeof articles);
      });
  }, []);

  return (
    <div className="home">
      <header>
        <Title> Jiajun's WebSite </Title>
      </header>
      <Card color="main">
        <section>
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </section>
        <aside></aside>
      </Card>
    </div>
  );
}
