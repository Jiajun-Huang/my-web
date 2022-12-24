import React from "react";
import "./Card.style.scss";

function Card({ children, size, color, hover, ...otherProps }) {
  console.log(size);
  return (
    <div
      className={`card ${hover ? "hover-card" : ""} ${
        color ? "main-color" : color + "-color"
      } 
      ${size ? size : ""}}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Card;
