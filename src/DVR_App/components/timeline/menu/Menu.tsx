import React from "react";
import "./menu.scss";

interface ChildProps {}

const Menu: React.FC<ChildProps> = () => {
  return (
    <div className="menu">
      <div className="button">+</div>
      <div className="button">-</div>
    </div>
  );
};

export default Menu;
