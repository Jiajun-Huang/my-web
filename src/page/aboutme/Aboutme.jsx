import React, { Component, useEffect } from "react";
//import Markdown from "react-markdown";
import MarkDown from "../../util/Markdown/Markdown.tsx";
import Card from "../../component/card/Card";
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
        console.log(text);
      });
  });
  return (
    <div>
      <Card type="main-card">
        <MarkDown>{md}</MarkDown>
      </Card>
    </div>
  );
}
