import React, { FC } from "react";

import "./Buttons.scss";
import { IButtonProps } from "../../../types";

interface IBlueButtonProps extends IButtonProps {}

const BlueButton: FC<IBlueButtonProps> = ({ children }) => {
  return <button className="button button--blue">{children}</button>;
};

export default BlueButton;
