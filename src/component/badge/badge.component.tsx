import React from "react";
/**
 *
 * @param color: main color OR secondary color
 * @param hover: should color change when hover. If empty then no hover effect
 * @returns
 */
export default function Badge({ color, hover }) {
  const className = color + " " + hover ? hover : "";

  return <span className={"badge" + className}>Badge</span>;
}
