import React from "react";

import "./Buttons.scss";
import { IButtonProps } from "../../../types";

const Button: React.FC<IButtonProps> = ({ className, children, isLink, href, onClick, color, ...props }) => {
  return !isLink ? (
    <button onClick={onClick} className={`button button--${color} ${className ? className : ""}`}>
      {children}
    </button>
  ) : (
    <a onClick={onClick} href={href} className={`button button--${color} ${className ? className : ""}`}>
      {children}
    </a>
  );
};

export default Button;
