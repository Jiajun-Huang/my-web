import React from "react";
import { Article } from "../../../types/article";
import Badge from "../../badge/badge.component.tsx";
import Card from "../Card.component.tsx";

import "./articleCard.style.scss";

interface Props {
  article: Article;
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
        <p className="card-text">{article.summary}</p>
        <div className="card-badge">
          <Badge color={"secondary"} hover={true}>
            {article.createdAt}
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
