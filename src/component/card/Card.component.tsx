import React from "react";
import "./Card.style.scss";

function Card({ children, size, color, hover, ...otherProps }) {
  return (
    <div
      className={`card ${hover ? "hover-card" : ""}  ${size ? size : ""} 
      ${color ? "main-color" : color + "-color"} }`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Card;
