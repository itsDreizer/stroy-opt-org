import React, { useEffect, useRef } from "react";
import { DefaultProps } from "../../../types";

import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import "./Modal.scss";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const modalPortal = document.querySelector("#modal-portal");

interface IModalProps extends DefaultProps {
  isModalVisible: boolean;
  setModalVisible: ActionCreatorWithPayload<boolean>;
  isAbleToClose?: boolean;
}

const Modal: React.FC<IModalProps> = (props) => {
  const dispatch = useAppDispatch();
  const { children, className, isModalVisible, setModalVisible, isAbleToClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const classes = {
    rootClass: className ? className : ``,
    bodyClass: className ? `${className}-body` : ``,
    overlayClass: className ? `${className}-overlay` : ``,
  };

  const JSX = (
    <CSSTransition nodeRef={modalRef} classNames={`modal`} in={isModalVisible} unmountOnExit mountOnEnter timeout={700}>
      <div ref={modalRef} className={`modal ${classes.rootClass}`}>
        <div
          onClick={(e) => {
            if (isAbleToClose) {
              dispatch(setModalVisible(false));
            }
          }}
          className={`modal-overlay ${classes.overlayClass}`}>
          <div className="modal-overlay__close-button"></div>
        </div>
        <div className={`modal-body ${classes.bodyClass}`}>{children}</div>
      </div>
    </CSSTransition>
  );

  if (modalPortal) {
    return createPortal(JSX, modalPortal);
  } else {
    return <div style={{ display: "none" }}></div>;
  }
};

export default Modal;
