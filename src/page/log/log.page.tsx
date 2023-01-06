import React from "react";
import Card from "../../component/card/Card.component";
import TimeItem from "../../component/timelineItem/index";
import Title from "../../component/title/Title.component";

interface TimeLineData {
  date: Date;
  logContent: string[];
}

interface Props {
  data: TimeLineData[];
}
const Log = () => {
  const data = [
    {
      date: 1672469210403,
      logContent: [
        "Happy New Year",
        "新年好啊",
        "The font end part is most finished ",
      ],
    },
  ];
  return (
    <>
      <Title>Update history</Title>
      <Card size="big" color={"main"}>
        {data.map((d, i) => (
          <TimeItem date={d.date} logContent={d.logContent} key={i} />
        ))}
      </Card>
    </>
  );
};

export default Log;
