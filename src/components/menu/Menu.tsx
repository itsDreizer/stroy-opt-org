import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch } from "../../redux/hooks";
import { DefaultProps } from "../../types";
import "./Menu.scss";
const menu = document.querySelector("#menu-portal");

interface IMenuProps extends DefaultProps {
  title: string;
  closeMenuAction: ActionCreatorWithPayload<boolean, string>;
  isMenuVisible: boolean;
  isArrowBackVisible?: boolean;
  goBack?: () => void;
  onClose?: () => void;
  onEnter?: () => void;
  onEntered?: () => void;
  onEntering?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  onExiting?: () => void;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const {
    children,
    title,
    className,
    isMenuVisible,
    closeMenuAction,
    onClose,
    onEnter,
    onExited,
    goBack,
    isArrowBackVisible,
  } = props;

  const dispatch = useAppDispatch();

  const ref = useRef(null);

  const classes = {
    rootClass: className ? className : "",
    containerClass: className ? `${className}__container` : "",
    headerClass: className ? `${className}-header` : "",
    titleClass: className ? `${className}__title` : "",
    closeButtonClass: className ? `${className}__close` : "",
    bodyClass: className ? `${className}-body` : "",
  };

  const JSX = (
    <CSSTransition
      onExited={onExited}
      nodeRef={ref}
      mountOnEnter
      unmountOnExit
      in={isMenuVisible}
      timeout={700}
      classNames={"menu"}>
      <div ref={ref} className={`menu ${classes.rootClass}`}>
        <div className={`menu__container ${classes.containerClass}`}>
          <header className={`menu-header ${classes.headerClass}`}>
            <div
              onClick={goBack}
              className={`menu__title ${classes.titleClass} ${isArrowBackVisible ? "arrow-back" : ""}`}>
              {title}
            </div>
            <button
              onClick={() => {
                dispatch(closeMenuAction(!isMenuVisible));
                if (onClose) {
                  onClose();
                }
              }}
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
