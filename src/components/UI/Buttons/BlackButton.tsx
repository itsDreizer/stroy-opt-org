import React, { FC } from "react";

import "./Buttons.scss";
import { IButtonProps } from "../../../types";

interface IBlueButtonProps extends IButtonProps {}

const BlackButton: FC<IBlueButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button button--black ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default BlackButton;
