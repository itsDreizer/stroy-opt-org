import React from "react";
import { DefaultProps } from "../../../types";

import "./MenuTab.scss";

 interface IMenuTab extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  tabID: string;
  currentTab: string;
}

const MenuTab: React.FC<IMenuTab> = ({ children, className, onClick, tabID, currentTab }) => {
  return (
    <li
      data-tab={tabID}
      onClick={onClick}
      className={`menu-tab ${className ? className : ""} ${currentTab === tabID ? "active" : ""}`}>
      {children}
    </li>
  );
};

export default MenuTab;
