import React, { ForwardedRef, LegacyRef, PropsWithChildren, ReactElement, ReactNode } from "react";

import "./Input.scss";

import ReactInputMask from "react-input-mask";

interface IInputProps extends PropsWithChildren {
  type: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  labelText?: string;
  mask?: string | (string | RegExp)[];

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { type, className, labelText, isRequired, mask, children, ...otherProps } = props;

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
      {mask ? (
        <ReactInputMask className={`input ${className ? className : ""}`} {...otherProps} type={type} mask={mask}>
          {/* @ts-ignore */}
          {(maskProps) => <input ref={ref} {...maskProps} type={type} />}
        </ReactInputMask>
      ) : (
        <input ref={ref} className={`input ${className ? className : ""}`} {...otherProps} type={type} />
      )}
    </label>
  );
});

export default Input;
