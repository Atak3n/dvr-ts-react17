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
  const now = Math.round(Date.now() / 1000);
  const [observable, setObservable] = useState<{ to: number; from: number }>({
    from: visibleFrom,
    to: visibleTo,
  });
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
    getOservables(ranges);
  }, [ranges]);

  const getOservables = (ranges: { duration: number; from: number }[]) => {
    let minimalFrom = visibleFrom;
    ranges.forEach((range) => {
      if (range.from && range.from < minimalFrom) {
        minimalFrom = range.from;
      }
    });
    setObservable({
      from: minimalFrom,
      to: observable.to,
    });
  };

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
    // const timeline = to - from;
    // const inPercent = (value: number) => {
    //   return value / (timeline / 100);
    // };
    // const now = Math.round(Date.now() / 1000);
    // if (now > from && now < to) {
    //   sections.push({
    //     from: inPercent(now - from),
    //     duration: inPercent(to - now),
    //     type: "buffering",
    //   });
    // }
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
        console.log({ checkingTime, obsFr: observable.from });
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
      <Markers />
      <Line
        sections={sections}
        observable={observable}
        visibleRange={visibleTo - visibleFrom}
      />
    </div>
  );
};

export default Timeline;
