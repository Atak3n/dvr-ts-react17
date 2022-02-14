import React, { useEffect, useState } from "react";
import "./markers.scss";
interface ChildProps {
  zoomIn: () => void;
  zoomOut: () => void;
  visibleFrom: number;
  visibleTo: number;
}

const Markers: React.FC<ChildProps> = ({
  zoomIn,
  zoomOut,
  visibleFrom,
  visibleTo,
}) => {
  const { markers, setMarkers } = useState<[]>();

  useEffect(() => {
    const step = (visibleTo - visibleFrom) / 10;
    for (let i = visibleFrom; i <= visibleTo; i = i + step) {
      markers.push(i);
      setMarkers(markers);
    }
  }, [visibleFrom, visibleTo]);

  return (
    <div
      className="markers"
      onWheel={(e) => {
        if (e.deltaY < 0) {
          return zoomIn();
        } else if (e.deltaY > 0) {
          return zoomOut();
        } else {
          // return this.stopScale();
        }
      }}
    >
      Markers
    </div>
  );
};

export default Markers;
