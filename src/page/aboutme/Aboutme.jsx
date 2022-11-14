import { WebView } from "react-native";
import React, { Component, useEffect } from "react";
//import Markdown from "react-markdown";
import MarkDown from "../../util/Markdown/Markdown.tsx";
import content from "./aboutme.md";
import { useState } from "react";

export default function Aboutme() {
  const file_name = "./aboutme.md";
  const [md, setMd] = useState("");
  useEffect(() => {
    fetch(content)
      .then((r) => r.text())
      .then((text) => {
        setMd(text);
        console.log("text decoded:", text);
        console.log(md);
      });
  });
  return (
    <div>
      <MarkDown content={md} className="marked"></MarkDown>
    </div>
  );
}
