import React, { FC, PropsWithChildren } from "react";

import "./Buttons.scss";
import { IButtonProps } from "../../../types";

interface ILightButtonProps extends PropsWithChildren, IButtonProps {}

const LightButton: FC<ILightButtonProps> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={`button button-light ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default LightButton;
