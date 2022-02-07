import React from "react";
import "./menu.scss";

interface ChildProps {
  zoomIn: () => void;
  zoomOut: () => void;
}

const Menu: React.FC<ChildProps> = ({ zoomIn, zoomOut }) => {
  return (
    <div className="menu">
      <div className="button" onClick={zoomIn}>
        +
      </div>
      <div className="button" onClick={zoomOut}>
        -
      </div>
    </div>
  );
};

export default Menu;
