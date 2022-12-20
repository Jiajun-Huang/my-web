import React from "react";
import "./Card.style.scss";
import { Children } from "react";

function Card({ children, type, ...otherProps }) {
  return (
    <div className={`card ${type ? "main-card" : type}`} {...otherProps}>
      {children}
    </div>
  );
}

export default Card;
