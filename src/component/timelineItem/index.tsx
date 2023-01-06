import React from "react";

import "./index.scss";

interface Props {
  date: number;
  logContent: string[];
}

const TimeItem: React.FC<Props> = ({ date, logContent }) => {
  return (
    <div className={"item"}>
      <div className={"time"}>
        <div className={"dot"}>
          <div className={"dotIn"} />
        </div>
        {new Date(date).toISOString().slice(0, 10)}
      </div>

      <ul className={"content"}>
        {logContent.map((log, index) => (
          <li key={index + log} className={"timeLi"}>
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeItem;
