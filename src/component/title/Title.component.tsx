import React from "react";
import "./Title.style.scss"
function Title({ children }) {
  return <h1 className="title">{children}</h1>;
}

export default Title;
