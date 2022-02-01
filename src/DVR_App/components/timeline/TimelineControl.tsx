import React, { useEffect, useState } from "react";
import Timeline from "./timer/Timeline";
import "./timeline_control.scss";
import axios from "axios";

interface ChildProps {
  from: number;
  url: string;
}

const TimelineControl: React.FC<ChildProps> = ({ from, url }) => {
  // 86400
  const [visibleFrom, setVisibleFrom] = useState(from - 56400);
  const [visibleTo, setVisibleTo] = useState(from + 30000);
  const [ranges, setRanges] = useState<{ duration: number; from: number }[]>(
    []
  );

  useEffect(() => {
    axios
      .get(
        `${url}/recording_status.json?from=${visibleFrom}&to=${visibleTo}&request=motion_log,ranges`
      )
      .then(function (response) {
        console.log(response);
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
  }, [visibleFrom, visibleTo]);

  return (
    <div className="timeline_control">
      <Timeline
        visibleFrom={visibleFrom}
        visibleTo={visibleTo}
        ranges={ranges}
      />
      <div className="menu">Menu</div>
    </div>
  );
};

export default TimelineControl;
