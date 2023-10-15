import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Menu.scss";
import { useAppDispatch } from "../../redux/hooks";
import { DefaultProps } from "../../types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { CSSTransition } from "react-transition-group";
const menu = document.querySelector("#menu-portal");

interface IMenuProps extends DefaultProps {
  title: string;
  closeMenuAction: ActionCreatorWithPayload<boolean, string>;
  isMenuVisible: boolean;
}

const Menu: FC<IMenuProps> = (props) => {
  const { children, title, className, isMenuVisible, closeMenuAction } = props;

  const dispatch = useAppDispatch();

  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? "hidden" : "visible";
  }, [isMenuVisible]);

  const classes = {
    rootClass: className ? className : "",
    headerClass: className ? `${className}-header` : "",
    titleClass: className ? `${className}__title` : "",
    closeButtonClass: className ? `${className}__close` : "",
    bodyClass: className ? `${className}-body` : "",
  };

  const JSX = (
    <CSSTransition nodeRef={ref} mountOnEnter unmountOnExit in={isMenuVisible} timeout={700} classNames={"menu"}>
      <div ref={ref} className={`menu ${classes.rootClass}`}>
        <div className="menu__container">
          <header className={`menu-header ${classes.headerClass}`}>
            <div className={`menu__title ${classes.titleClass}`}>{title}</div>
            <button
              onClick={() => dispatch(closeMenuAction(!isMenuVisible))}
              className={`menu__close ${classes.closeButtonClass}`}></button>
          </header>
        </div>
        <div className={`menu-body ${classes.bodyClass}`}>{children}</div>
      </div>
    </CSSTransition>
  );

  if (menu) {
    return createPortal(JSX, menu);
  } else {
    return <div style={{ display: "none" }}></div>;
  }
};

export default Menu;