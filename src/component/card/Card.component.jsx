import React from "react";
import "./Card.style.scss";

function Card({ children, color, ...otherProps }) {
  return (
    <div
      className={`card ${color ? "main-color" : color + "-color"}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Card;
