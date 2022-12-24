import React from "react";
import "./Card.style.scss";

function Card({ children, size, color, ...otherProps }) {
  console.log(size);
  return (
    <div
      className={`card ${color ? "main-color" : color + "-color"} 
      ${size ? size : ""}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Card;
