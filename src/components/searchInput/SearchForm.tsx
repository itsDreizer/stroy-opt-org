import React, { FC } from "react";
import { DefaultProps } from "../../types";

// @ts-ignore
import loop from "../../images/icons/loop.svg";

import "./SearchForm.scss";

interface ISearchInputProps extends DefaultProps {
  placeholder?: string;
}

const SearchInput: FC<ISearchInputProps> = (props) => {
  const { placeholder, className } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`search-form ${className ? className : ""}`}>
      <input
        className={`search-form__input ${className ? className + "__input" : ""}`}
        placeholder={placeholder}
        type="text"
      />
      <button className={`search-form__submit ${className ? className + "__submit" : ""}`} type="submit">
        <img src={loop} alt="Лупа" />
      </button>
    </form>
  );
};

export default SearchInput;
