import React from "react";
import { DefaultProps } from "../../../types";

import "./NavigationButton.scss";

interface INavigationButtonProps extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  direction: "left" | "right";
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ className, onClick, direction }) => {
  return (
    <button onClick={onClick} className={`navigation-button ${className ? className : ""}`}>
      <span className={`navigation-button__arrow navigation-button__arrow--${direction}`}></span>
    </button>
  );
};

export default NavigationButton;
