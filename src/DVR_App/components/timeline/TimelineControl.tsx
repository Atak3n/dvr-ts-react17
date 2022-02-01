import React from "react";
import Timeline from "./timer/Timeline";
import "./timeline_control.scss";
interface ChildProps {}

const TimelineControl: React.FC<ChildProps> = () => {
  // 86400
  const visibleFrom = Math.round((Date.now() - 56400) / 1000);
  const visibleTo = Math.round((Date.now() + 30000) / 1000);
  
  return (
    <div className="timeline_control">
      <Timeline
        visibleFrom={visibleFrom}
        visibleTo={visibleTo}
        ranges={[
          {
            duration: 9610,
            from: 1643682086,
          },
        ]}
      />
      <div className="menu">Menu</div>
    </div>
  );
};

export default TimelineControl;
