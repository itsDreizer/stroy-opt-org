import React, { FC } from "react";

import "./Buttons.scss";
import { IButtonProps } from "../../../types";

interface IBlueButtonProps extends IButtonProps {}

const BlueButton: FC<IBlueButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button button--blue">
      {children}
    </button>
  );
};

export default BlueButton;
