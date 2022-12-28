import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// plugin
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "./markdown.style.scss";
// Did you know you can use tildes instead of backticks for code in markdown? ✨

function extractMetaData(text: String): Array<any> {
  const metaData = {} as any;

  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m);
  // get metadata
  const rawMetaData = metaRegExp.exec(text);

  let keyValues;

  if (rawMetaData!) {
    // rawMeta[1] are the stuff between "---"
    keyValues = rawMetaData[1].split("\n");

    // which returns a list of key values: ["key1: value", "key2: value"]
    keyValues.forEach((keyValue) => {
      // split each keyValue to keys and values
      const [key, value] = keyValue.split(":");
      metaData[key] = value.trim();
    });
  }
  return [rawMetaData, metaData];
}

const MarkDown = ({ children, imageUrl = "" }) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        transformImageUri={(url) => `${imageUrl} ${url}`}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
