import React from "react";
import "./badge.style.scss";

interface Props {
  children: String;
  color: String;
  hover: Boolean;
}
/**
 *
 * @param color: main OR secondary
 * @param hover: should color change when hover. If empty then no hover effect
 * @returns
 */
export default function Badge({ children, color, hover }) {
  const className: string = `${color}-color ${hover ? "hover-badge" : ""}`;
  return <span className={"badge " + className}>{children}</span>;
}
