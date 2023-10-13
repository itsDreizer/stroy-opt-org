import React from "react";
import { DefaultProps } from "../../../types";

import "./MenuSubTab.scss";

export interface IMenuSubTab extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  tabID: string;
}

const MenuSubTab: React.FC<IMenuSubTab> = ({ children, className, onClick, tabID }) => {
  return (
    <div data-sub-tab={tabID} onClick={onClick} className={`menu-sub-tab ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default MenuSubTab;
