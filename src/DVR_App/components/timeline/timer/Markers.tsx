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
  let [markers, setMarkers] = useState<number[]>([]);

  useEffect(() => {
    const step = (visibleTo - visibleFrom) / 10;
    markers = [];
    for (let i = visibleFrom; i <= visibleTo; i = i + step) {
      markers.push(i);
      setMarkers(markers);
    }
  }, [visibleFrom, visibleTo]);

  const toHumanTime = (utc: number) => {
    const date = new Date(utc * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

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
      {markers.map((marker) => {
        return (
          <div key={marker}>
            <p data-utc={marker}>{toHumanTime(marker)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Markers;
