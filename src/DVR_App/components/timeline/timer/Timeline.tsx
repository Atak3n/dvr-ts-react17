import React, { useEffect, useState } from "react";
import "./timeline.scss";
import Markers from "./Markers";
import Line from "./Line";
interface ChildProps {
  from: number;
  to: number;
  ranges: { duration: number; from: number }[];
}

const Timeline: React.FC<ChildProps> = ({ from, to, ranges }) => {
  const [sections, setSections] = useState<
    { duration: number; from: number; type: string }[]
  >([]);
  useEffect(() => {
    buildSections(from, to, ranges);
  }, []);

  const buildSections = (
    from: number,
    to: number,
    ranges: { duration: number; from: number }[]
  ) => {
    console.log({ from, to, ranges });
    const timeline = to - from;
    const inPercent = (value: number) => {
      return value / (timeline / 100);
    };
    let sections: { duration: number; from: number; type: string }[] = [];
    const now = Math.round(Date.now() / 1000);

    if (now > from && now < to) {
      sections.push({
        from: inPercent(now - from),
        duration: inPercent(to - now),
        type: "buffering",
      });
    }
    setSections(sections);
  };

  return (
    <div className="timeline">
      <Markers />
      <Line sections={sections} />
    </div>
  );
};

export default Timeline;
