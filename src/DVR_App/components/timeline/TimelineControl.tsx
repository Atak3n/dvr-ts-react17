import React, { useEffect, useState } from "react";
import axios from "axios";
import "./timeline_control.scss";
import Timeline from "./timer/Timeline";
import Menu from "./menu/Menu";

interface ChildProps {
  from: number;
  url: string;
}

const TimelineControl: React.FC<ChildProps> = ({ from, url }) => {
  const now = Math.round(Date.now() / 1000);
  const [visibleFrom, setVisibleFrom] = useState(from - 56400);
  const [visibleTo, setVisibleTo] = useState(from + 30000);
  const [ranges, setRanges] = useState<{ duration: number; from: number }[]>(
    []
  );
  const [observable, setObservable] = useState<{ to: number; from: number }>({
    from: visibleFrom,
    to: visibleTo,
  });

  useEffect(() => {
    axios
      .get(
        `${url}/recording_status.json?from=${visibleFrom}&to=${visibleTo}&request=motion_log,ranges`
      )
      .then(function (response) {
        const { data } = response;
        const { ranges } = data[0];
        setRanges(ranges);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    getOservables(ranges);
  }, [ranges]);

  const getOservables = (rangesData: { duration: number; from: number }[]) => {
    let minimalFrom = visibleFrom;
    rangesData.forEach((range) => {
      if (range.from && range.from < minimalFrom) {
        minimalFrom = range.from;
      }
    });
    setObservable({
      from: minimalFrom,
      to: observable.to,
    });
  };

  const zoomIn = () => {
    console.log("zoomIn");
    setVisibleFrom(visibleFrom + 200);
    setVisibleTo(visibleTo - 200);
  };

  const zoomOut = () => {
    if (visibleFrom - 200 < observable.from) {
      setVisibleFrom(observable.from);
    } else {
      setVisibleFrom(visibleFrom - 200);
    }
    if (visibleTo + 200 > observable.to) {
      setVisibleTo(observable.to);
    } else {
      setVisibleTo(visibleTo + 200);
    }
  };

  return (
    <div className="timeline_control">
      <Timeline
        visibleFrom={visibleFrom}
        visibleTo={visibleTo}
        ranges={ranges}
        observable={observable}
        now={now}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
      />
      <Menu zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  );
};

export default TimelineControl;
