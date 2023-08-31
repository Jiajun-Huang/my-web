import MarkDown from "../../component/Markdown/Markdown";

import content from "./aboutwebsite.md";
import { useQuery } from "react-query";

export default function AboutWebsite() {
  const { isLoading, isError, data, error } = useQuery<string, Error>(
    "aboutwebsite-md",
    async () => {
      const response = await fetch(content);
      return response.text();
    }
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>An error occurred: {error.message}</div>
      ) : (
        <MarkDown>{data || " "}</MarkDown>
      )}
    </div>
  );
}
