import React, { PropsWithChildren } from "react";

import "./Checkbox.scss";
interface ICheckBoxProps extends PropsWithChildren {
  classNamesPrefix?: string;
}

const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>((props, ref) => {
  const { children, classNamesPrefix, ...otherProps } = props;

  const classNames = {
    label: classNamesPrefix ? `${classNamesPrefix}-checkbox-label` : "",
    customCheckbox: classNamesPrefix ? `${classNamesPrefix}-custom-checkbox` : "",
    labelText: classNamesPrefix ? `${classNamesPrefix}-checkbox-label__text` : "",
  };

  return (
    <label className={`checkbox-label ${classNames.label}`}>
      <input ref={ref} {...otherProps} className={"hidden-checkbox"} type="checkbox" />
      <div className={`custom-checkbox ${classNames.customCheckbox}`}></div>
      <div className={`checkbox-label__text ${classNames.labelText}`}>{children}</div>
    </label>
  );
});

export default CheckBox;
