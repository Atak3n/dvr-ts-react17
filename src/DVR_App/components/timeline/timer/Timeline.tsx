import React, { useEffect, useState } from "react";
import "./timeline.scss";
import Markers from "./Markers";
import Line from "./Line";

interface ChildProps {
  visibleFrom: number;
  visibleTo: number;
  ranges: { duration: number; from: number }[];
  observable: { to: number; from: number };
  now: number;
  zoomIn: () => void;
  zoomOut: () => void;
}

const Timeline: React.FC<ChildProps> = ({
  visibleFrom,
  visibleTo,
  ranges,
  observable,
  now,
  zoomIn,
  zoomOut,
}) => {
  const visibleRange = visibleTo - visibleFrom;
  const [sections, setSections] = useState<
    { duration: number; from: number; type: string; order: number }[]
  >([
    {
      from: observable.from,
      duration: now - observable.from,
      type: "empty",
      order: 1,
    },
    {
      from: now,
      duration: 30000,
      type: "buffering",
      order: 0,
    },
  ]);

  useEffect(() => {
    buildSections(ranges);
  }, [observable]);

  const buildSections = (ranges: { duration: number; from: number }[]) => {
    let sections = [
      {
        from: now,
        duration: 30000,
        type: "buffering",
        order: 0,
      },
    ];
    let orderNum = 1;
    let checkingTime = now;
    while (checkingTime >= observable.from) {
      ranges.forEach((range) => {
        const { from, duration } = range;
        const emWidth = from + duration;
        // if (emWidth < checkingTime) {
        sections.push({
          from: emWidth,
          duration: checkingTime - emWidth,
          type: "empty",
          order: orderNum,
        });
        orderNum++;
        // }
        sections.push({
          from: from,
          duration: duration,
          type: "hit",
          order: orderNum,
        });
        checkingTime = range.from;
        orderNum++;
      });
      if (checkingTime > observable.from) {
        sections.push({
          from: observable.from,
          duration: checkingTime - observable.from,
          type: "empty",
          order: orderNum,
        });
        checkingTime = observable.from - 1;
        orderNum++;
      }
    }
    setSections(sections);
  };

  return (
    <div className="timeline">
      <Markers zoomIn={zoomIn} zoomOut={zoomOut} />
      <Line
        sections={sections}
        observable={observable}
        visibleRange={visibleRange}
      />
    </div>
  );
};

export default Timeline;
