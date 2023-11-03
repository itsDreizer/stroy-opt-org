import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCatalogVisible } from "../../redux/reducers/catalogSlice";
import { DefaultProps } from "../../types";

interface IHeaderCatalogTogglerProps extends DefaultProps {}

const HeaderCatalogToggler: React.FC<IHeaderCatalogTogglerProps> = () => {
  const isCatalogVisible = useAppSelector((state) => {
    return state.catalog.isMenuVisible;
  });

  const dispatch = useAppDispatch();

  return (
    <button
      onClick={(e) => {
        dispatch(setCatalogVisible(!isCatalogVisible));
      }}
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
