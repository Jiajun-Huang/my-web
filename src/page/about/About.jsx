import React, { Component, useEffect } from "react";

//componement
import MarkDown from "../../util/Markdown/Markdown.tsx";
import Card from "../../component/card/Card";
import Title from "../../component/title/Title.component.tsx";

import content from "./about.md";
import { useState } from "react";

export default function About() {
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
      <Title>About</Title>
      <Card type="main-card">
        <MarkDown>{md}</MarkDown>
      </Card>
    </div>
  );
}
