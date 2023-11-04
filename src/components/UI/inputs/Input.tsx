import React, { ReactNode } from "react";

import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";

import "./Input.scss";

interface IInputProps {
  type: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  labelText?: string;
  // register?: UseFormRegister;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { type, className, labelText, isRequired, ...otherProps } = props;

  return (
    <label className="input-label">
      {labelText ? (
        <div className="input-label__text">
          {labelText}
          {isRequired ? <div className="req-star">*</div> : false}:
        </div>
      ) : (
        false
      )}
      <input ref={ref} className={`input ${className ? className : ""}`} {...otherProps} type={type} />
    </label>
  );
});

export default Input;
