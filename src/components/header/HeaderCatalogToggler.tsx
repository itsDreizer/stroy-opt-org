import React, { FC } from "react";
import { DefaultProps } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCatalogMenu } from "../../redux/reducers/statesSlice";

interface IHeaderCatalogTogglerProps extends DefaultProps {}

const HeaderCatalogToggler = () => {
  const isCatalogVisible = useAppSelector((state) => {
    return state.states.catalogMenu;
  });

  const dispatch = useAppDispatch();

  return (
    <button
      onClick={(e) => dispatch(setCatalogMenu(!isCatalogVisible))}
      className={`header-catalog-toggler ${isCatalogVisible ? "active" : ""}`}>
      <div className="header-catalog-toggler__lines">
        <div className="header-catalog-toggler__line-1"></div>
        <div className="header-catalog-toggler__line-2"></div>
      </div>
      <span>Каталог</span>
    </button>
  );
};

export default HeaderCatalogToggler;
