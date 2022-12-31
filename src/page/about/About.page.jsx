import React, { Component, useEffect } from "react";

//componement
import MarkDown from "../../util/Markdown/Markdown.tsx";
import Card from "../../component/card/Card.component.tsx";
import Title from "../../component/title/Title.component.tsx";

import content from "./about.md";
import { useQuery } from "react-query";

export default function About() {
  const { isLoading, isError, data, error } = useQuery("about-md", async () => {
    const response = await fetch(content);
    return response.text();
  });

  return (
    <div>
      <Title>About</Title>
      <Card color="main">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error occurred: {error.message}</div>
        ) : (
          <MarkDown>{data}</MarkDown>
        )}
      </Card>
    </div>
  );
}
