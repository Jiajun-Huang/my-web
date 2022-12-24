import React, { useEffect, useState } from "react";
import ArticleCard from "../../component/card/articleCard/articleCard.component.tsx";
import Title from "../../component/title/Title.component.tsx";

import "./home.style.scss";
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
      <section>
        {articles.map((article, id) => (
          <ArticleCard article={article} key={id}/>
        ))}
      </section>
      <aside></aside>
    </div>
  );
}
