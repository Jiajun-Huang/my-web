import React from "react";
import Badge from "../badge/badge.component.tsx";
/**
 * card
 *  title
 *  content
 *  time tags
 *
 * @param {*} param0
 * @returns
 */
export default function ArticleCard({ article }: any) {
  return (
    <div className="article-card">
      <h3 className="card-title">Lorem ipsum dolor sit amet</h3>
      <p className="card-text"></p>
      <div className="card-badge">
        <Badge></Badge>
      </div>
    </div>
  );
}
