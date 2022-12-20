import React from "react";
import "./Card.style.scss";
import { Children } from "react";

const CARD_TYPE_CLASSES = {
  hover: "hover",
  darker: "darker",
  light: "light",
};

function Card({ children, color, toggle, ...otherProps }) {
  return (
    <div className={`card-container`} {...otherProps}>
      {children}
    </div>
  );
}

export default Card;
