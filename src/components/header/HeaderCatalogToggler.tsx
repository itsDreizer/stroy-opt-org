import React, { FC } from "react";
import { DefaultProps } from "../../types";

interface IHeaderCatalogTogglerProps extends DefaultProps {}

const HeaderCatalogToggler = () => {
  return (
    <button onClick={(e) => e.currentTarget.classList.toggle("active")} className="header-catalog-toggler">
      <div className="header-catalog-toggler__lines">
        <div className="header-catalog-toggler__line-1"></div>
        <div className="header-catalog-toggler__line-2"></div>
      </div>
      <span>Каталог</span>
    </button>
  );
};

export default HeaderCatalogToggler;
