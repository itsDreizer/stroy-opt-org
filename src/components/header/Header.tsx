import React, { FC, PropsWithChildren, useState } from "react";
import LightButton from "../UI/buttons/LightButton";

import Logo from "../UI/logo/Logo";
import SearchInput from "../searchInput/SearchForm";
import "./Header.scss";
import HeaderActions from "./HeaderActions";
import HeaderCatalogToggler from "./HeaderCatalogToggler";
import HeaderMenuToggler from "./HeaderMenuToggler";
import HeaderNav from "./HeaderNav";
import Menu from "../menu/Menu";

interface IHeaderProps extends PropsWithChildren {}

const Header: FC<IHeaderProps> = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <header className="header">
      <Menu />
      <div className="header-top">
        <div className="header-top__container">
          {window.innerWidth > 1400 ? <HeaderNav /> : <HeaderMenuToggler />}
          {window.innerWidth < 1350 && window.innerWidth > 1100 ? <HeaderCatalogToggler /> : false}
          <div className="header-order-call">
            <div className="header-order-call__period">Ежедневно, с 8:00 до 18:00</div>
            <a className="header-order-call__phone" href="tel:8 800 444 00 65">
              8 800 444 00 65
            </a>
            <LightButton className="header-order-call__button">Заказать звонок</LightButton>
          </div>
          {window.innerWidth < 430 ? <HeaderCatalogToggler /> : false}
        </div>
      </div>
      <div className="header-main">
        <div className="header-main__container">
          <div className="header-main__floor-actions">
            <Logo className="header-logo" />
            {window.innerWidth > 1350 ? <HeaderCatalogToggler /> : false}
            {window.innerWidth > 1100 ? (
              <SearchInput
                placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                className="header-search-form"
              />
            ) : (
              false
            )}
            <HeaderActions />
          </div>
          {window.innerWidth < 1100 ? (
            <div className="header-main__floor-search">
              {window.innerWidth > 430 ? <HeaderCatalogToggler /> : false}
              <SearchInput placeholder="Поиск..." className="header-search-form" />
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
