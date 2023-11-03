import React from "react";
import { DefaultProps } from "../../../types";

interface IModalTitleProps extends DefaultProps {}

const ModalTitle: React.FC<IModalTitleProps> = (props) => {
  const { children, className } = props;
  return <h2 className={`modal-body__title ${className ? className : ""}`}>{children}</h2>;
};

export default ModalTitle;
