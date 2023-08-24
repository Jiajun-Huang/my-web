import React from "react";
import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// plugin
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "./markdown.style.scss";
import { CodeProps } from "react-markdown/lib/ast-to-react";
interface Props {
  children: string;
  transformImageUrl?: (url: string) => string;
}

const MarkDown = ({ children, transformImageUrl = (src) => src }: Props) => {
  return (
    <div className='markdown'>
      <ReactMarkdown
        remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        transformImageUri={(src) => {
          return transformImageUrl(src);
        }}
        components={{
          code({
            node,
            inline,
            className,
            children,
            style,
            ...props
          }: CodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark} // Spread the oneDark object inside another object
                language={match[1]}
                PreTag='div'
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
//https://github.com/kevinzunigacuellar/remark-code-title
//https://github.com/zestedesavoir/zmarkdown/tree/HEAD/packages/remark-iframes#readme
//https://github.com/remarkjs/react-markdown/issues/622
