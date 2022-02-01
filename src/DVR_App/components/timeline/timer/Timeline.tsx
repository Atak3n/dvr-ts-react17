import React, { useEffect, useState } from "react";
import "./timeline.scss";
import Markers from "./Markers";
import Line from "./Line";

interface ChildProps {
  visibleFrom: number;
  visibleTo: number;
  ranges: { duration: number; from: number }[];
}

const Timeline: React.FC<ChildProps> = ({ visibleFrom, visibleTo, ranges }) => {
  const [observable, setObservable] = useState<{ to: number; from: number }>({
    from: visibleFrom,
    to: visibleTo,
  });

  useEffect(() => {
    buildSections(visibleFrom, visibleTo, ranges);
  }, [ranges]);

  const buildSections = (
    from: number,
    to: number,
    ranges: { duration: number; from: number }[]
  ) => {
    // const timeline = to - from;
    // const inPercent = (value: number) => {
    //   return value / (timeline / 100);
    // };
    // let sections: { duration: number; from: number; type: string }[] = [];
    // const now = Math.round(Date.now() / 1000);
    // if (now > from && now < to) {
    //   sections.push({
    //     from: inPercent(now - from),
    //     duration: inPercent(to - now),
    //     type: "buffering",
    //   });
    // }
    // ranges.forEach((range) => {
    //   // debugger;
    //   const { from: rangeFrom, duration } = range;
    //   // check if range in viewpport
    //   console.log(from - (rangeFrom + duration));
    //   if (rangeFrom + duration > from && rangeFrom < to) {
    //     if (rangeFrom > from) {
    //       sections.push({
    //         from: inPercent(rangeFrom),
    //         duration: inPercent(duration) > 100 ? 100 : inPercent(duration),
    //         type: "hit",
    //       });
    //     } else {
    //       const newDur = inPercent(rangeFrom + duration - from);
    //       sections.push({
    //         from: 0,
    //         duration: newDur > 100 ? 100 : newDur,
    //         type: "hit",
    //       });
    //     }
    //   }
    // });
    // setSections(sections);
  };

  return (
    <div className="timeline">
      <Markers />
      <Line ranges={ranges} />
    </div>
  );
};

export default Timeline;