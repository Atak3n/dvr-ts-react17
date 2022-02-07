import React from "react";
import "./markers.scss";
interface ChildProps {
  zoomIn: () => void;
  zoomOut: () => void;
}

const Markers: React.FC<ChildProps> = ({ zoomIn, zoomOut }) => {
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
