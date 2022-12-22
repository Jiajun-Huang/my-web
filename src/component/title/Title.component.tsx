import React from "react";
import "./Title.style.scss";
function Title({ children, ...otherProps }) {
  return (
    <h1 className="title" {...otherProps}>
      {children}
    </h1>
  );
}

export default Title;
