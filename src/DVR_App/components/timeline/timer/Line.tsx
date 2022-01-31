import React, { useEffect } from "react";
import "./line.scss";
interface ChildProps {
  sections: { duration: number; from: number; type: string }[];
}

const Line: React.FC<ChildProps> = ({ sections }) => {
  //   useEffect(() => {
  //     console.log({ sections });
  //   }, [sections]);

  return (
    <div className="lines">
      {sections.length ? (
        sections.map((section) => {
          const { type, from, duration } = section;
          return (
            <div
              key={`${type}_${from}`}
              className={type}
              style={{ left: `${from}%`, width: `${duration}%` }}
            ></div>
          );
        })
      ) : (
        <div className="empty" style={{ left: 0, width: "100%" }}></div>
      )}
    </div>
  );
};

export default Line;
