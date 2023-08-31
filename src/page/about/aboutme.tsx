//componement
import MarkDown from "../../component/Markdown/Markdown";

import content from "./aboutme.md";
import { useQuery } from "react-query";

export default function AboutMe() {
  const { isLoading, isError, data, error } = useQuery<string, Error>(
    "aboutme-md",
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
