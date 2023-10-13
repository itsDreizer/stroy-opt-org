import React from "react";
import { DefaultProps } from "../../../types";

import "./MenuTab.scss";

export interface IMenuTab extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  tabID: string;
  currentTab: string;
}

const MenuTab: React.FC<IMenuTab> = ({ children, className, onClick, tabID, currentTab }) => {
  return (
    <div
      data-tab={tabID}
      onClick={onClick}
      className={`menu-tab ${className ? className : ""} ${currentTab === tabID ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default MenuTab;
