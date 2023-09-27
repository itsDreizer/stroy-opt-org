import React, { FC, PropsWithChildren } from "react";
import LightButton from "../UI/buttons/LightButton";

import "./Header.scss";
import Logo from "../UI/logo/Logo";
import BlueButton from "../UI/buttons/BlueButton";
import SearchInput from "../searchInput/SearchForm";
import HeaderCatalogToggler from "./HeaderCatalogToggler";
import { Link } from "react-router-dom";
import HeaderActions from "./HeaderActions";
import HeaderNav from "./HeaderNav";

interface IHeaderProps extends PropsWithChildren {}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top__container">
          {window.innerWidth > 1400 ? <HeaderNav /> : false}
          <div className="header-order-call">
            <div className="header-order-call__period">Ежедневно, с 8:00 до 18:00</div>
            <a className="header-order-call__phone" href="tel:8 800 444 00 65">
              8 800 444 00 65
            </a>
            <LightButton className="header-order-call__button">Заказать звонок</LightButton>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="header-main__container">
          <Logo className="header-logo" />
          <HeaderCatalogToggler />
          <SearchInput placeholder="Найти среди 50000 товаров. Например: Дрель Bosch" className="header-search-form" />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
