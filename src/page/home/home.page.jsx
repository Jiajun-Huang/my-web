import React, { useEffect, useState } from "react";
import ArticleCard from "../../component/articleCard/articleCard.component.tsx";

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
    <>
      <section>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </section>
      <aside></aside>
    </>
  );
}
