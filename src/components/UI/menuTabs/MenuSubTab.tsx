import React from "react";
import { DefaultProps } from "../../../types";

import "./MenuSubTab.scss";

export interface IMenuSubTab extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  tabID: string;
  currentTab: string;
}

const MenuSubTab: React.FC<IMenuSubTab> = ({ children, className, onClick, tabID, currentTab }) => {
  return (
    <li
      data-sub-tab={tabID}
      onClick={onClick}
      className={`menu-sub-tab ${className ? className : ""} ${currentTab === tabID ? "active" : ""}`}>
      {children}
    </li>
  );
};

export default MenuSubTab;
