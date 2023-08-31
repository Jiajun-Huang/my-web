import React from "react";
import "./Title.style.scss";

interface Props {
  children: string;
}

function Title({ children, ...otherProps }: Props) {
  return (
    <h1 className="Title" {...otherProps}>
      {children}
    </h1>
  );
}

export default Title;
