import React from "react";
import Badge from "../../badge/badge.component.tsx";
import Card from "../Card.component.tsx";

import "./articleCard.style.scss";
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
  const today = new Date();
  return (
    <div className="article-card">
      <Card color={"main"} size={"small"} hover={true}>
        <h3 className="card-title">Lorem ipsum dolor sit amet</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          tenetur vero aliquid eos architecto odit placeat ea qui reprehenderit
          obcaecati, quia porro? Eius, perspiciatis quam. Asperiores officia
          dolore fuga dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cumque, unde odit necessitatibus culpa mollitia consectetur
          sapiente deleniti asperiores est aperiam dolorum, velit maiores
          facilis quia sint nostrum numquam dolores quidem!
        </p>
        <div className="card-badge">
          <Badge color={"secondary"} hover={true}>
            {today.toISOString().substring(0, 10)}
          </Badge>
          <div className="card-tags">
            <Badge color={"secondary"} hover={true}>
              Javascript
            </Badge>
            <Badge color={"secondary"} hover={true}>
              Javascript
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
