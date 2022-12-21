import React, { Component, useEffect } from "react";

//componement
import MarkDown from "../../util/Markdown/Markdown.tsx";
import Card from "../../component/card/Card";
import Title from "../../component/title/Title.component.tsx";

import content from "./about.md";
import { useState } from "react";

export default function About() {
  //const [md, setMd] = useState("");
  // useEffect(() => {
  //   fetch(content)
  //     .then((r) => r.text())
  //     .then((text) => {
  //       setMd(text);
  //       //console.log(text);
  //     });
  // });
  const md = `
  ## Hi I am Jiajun <img src="https://github.com/Light-City/Light-City/blob/main/wave.gif?raw=true" width="30px">

- A computer engineering student at UBC

This is my own personal blog, thank you for finding this place in the vast Internet~

## About the website

This website is build with **React**.

This website is mainly used for posting my note and my experience

The website is still under construction, more featured are waiting to be added.

- [x] Markdown renderer
- [x] Add content to About
- [ ] Add footer
- [ ] Finish index page
- [ ] Add first article
- [ ] Finish Update page
- [ ] Finish Comments page
- [ ] Finish Quote page

  `;
  return (
    <div>
      <Title>About</Title>
      <Card type="main-card">
        <MarkDown>{md}</MarkDown>
      </Card>
    </div>
  );
}
