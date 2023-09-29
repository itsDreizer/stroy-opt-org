import React, { FC } from "react";
import { createPortal } from "react-dom";

import "./Menu.scss";
import { useAppSelector } from "../../redux/hooks";

const menu = document.querySelector("#menu");

const Menu: FC = () => {
  const isMenuVisible = useAppSelector((state) => {
    return state.states.menu;
  });

  const JSX = (
    <div className={`menu `}>
      <div className="">Меню</div>
    </div>
  );

  if (menu && isMenuVisible) {
    return createPortal(JSX, menu);
  } else {
    return <div style={{ display: "none" }}></div>;
  }
};

export default Menu;
