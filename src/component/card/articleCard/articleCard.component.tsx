import React from "react";
import { Article } from "../../../types/article";
import Badge from "../../badge/badge.component";
import Card from "../Card.component";

import "./articleCard.style.scss";

interface Props {
  article: Article;
  [x: string]: any;
}
/**
 * card
 *  title
 *  content
 *  time tags
 *
 * @param {*} param0
 * @returns
 */
export default function ArticleCard({ article, ...otherProps }: Props) {
  return (
    <div className="article-card" {...otherProps}>
      <Card color={"main"} size={"small"} hover={true}>
        <h3 className="card-title">{article.title}</h3>
        <p className="card-text">{article.intro}</p>
        <div className="card-badge">
          <Badge color={"secondary"} hover={true}>
            {article.createAt.toISOString().slice(0, 10)}
          </Badge>
          <div className="card-tags">
            {article.tags.map((tag) => (
              <Badge color={"secondary"} hover={true}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
