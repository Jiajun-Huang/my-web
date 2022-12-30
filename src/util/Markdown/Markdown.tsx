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

interface Props {
  children: string;
  imageUrl: (url: string) => Promise<string>;
}

const MarkDown = ({ children, imageUrl }: Props) => {
  console.log(typeof children); // here shows object
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        transformImageUri={async (src) => {
          const url = await imageUrl(src);
          console.log(url);
          return url;
        }}
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
        {children.toString()}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
