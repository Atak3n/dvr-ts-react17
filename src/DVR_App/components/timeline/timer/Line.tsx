import React, { useEffect } from "react";
import "./line.scss";
interface ChildProps {
  ranges: { duration: number; from: number }[];
}

const Line: React.FC<ChildProps> = ({ ranges }) => {
  //   useEffect(() => {
  //     console.log({ sections });
  //   }, [sections]);

  return (
    <div className="lineWrapper">
      <div className="lines">
        {ranges.length ? (
          ranges.map((ranges) => {
            const { from, duration } = ranges;
            return (
              <div
                //   key={`${type}_${from}`}
                className="hit"
                style={{
                  transform: `translateX(-${from}px)`,
                  width: `${duration}px`,
                }}
              ></div>
            );
          })
        ) : (
          <div className="empty" style={{ left: 0, width: "100%" }}></div>
        )}
      </div>
    </div>
  );
};

export default Line;
