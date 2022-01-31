import React from "react";
import Timeline from "./timer/Timeline";
import "./timeline_control.scss";
interface ChildProps {}

const TimelineControl: React.FC<ChildProps> = () => {
  // 86400
  const from = Date.now() - 56400;
  const to = Date.now() + 30000;
  return (
    <div className="timeline_control">
      <Timeline
        from={Math.round(from / 1000)}
        to={Math.round(to / 1000)}
        ranges={[
          {
            duration: 9670,
            from: 1643610826,
          },
        ]}
      />
      <div className="menu">Menu</div>
    </div>
  );
};

export default TimelineControl;
