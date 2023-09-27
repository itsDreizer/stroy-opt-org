import React, { FC, PropsWithChildren } from "react";
import { DefaultProps } from "../../../types";

//@ts-ignore
import logo from "../../../images/icons/logo.svg";

interface ILogoProps extends DefaultProps {}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div className={`logo ${className ? className : ""}`}>
      <img className={`logo__img ${className ? className + `__img` : ""}`} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
