import React, { useEffect, useRef, useState } from "react";
import "./line.scss";
interface ChildProps {
  sections: { duration: number; from: number; type: string; order: number }[];
  observable: { to: number; from: number };
  visibleFrom: number;
  visibleTo: number;
}

const Line: React.FC<ChildProps> = ({
  sections,
  observable,
  visibleFrom,
  visibleTo,
}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(0.25);
  const { from, to } = observable;

  useEffect(() => {
    if (!wrapper.current) return;
    const { offsetWidth } = wrapper.current;
    setZoom(offsetWidth / (visibleTo - visibleFrom));
  }, [visibleFrom, visibleTo, wrapper.current]);

  return (
    <div className="lineWrapper" ref={wrapper}>
      <div className="lines" style={{ width: `${to - from}px`, zoom }}>
        {sections.map((section) => {
          const { from, duration, type, order } = section;
          return (
            <div
              key={`${type}_${from}`}
              className={type}
              style={{
                width: `${duration}px`,
                order,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Line;
