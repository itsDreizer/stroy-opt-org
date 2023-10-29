import React, { PropsWithChildren } from "react";
import LightButton from "../UI/buttons/LightButton";

import Logo from "../UI/logo/Logo";
import SearchInput from "../UI/searchInput/SearchForm";
import Catalog from "../catalog/Catalog";
import HeaderActions from "./HeaderActions";
import HeaderCatalogToggler from "./HeaderCatalogToggler";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuToggler from "./HeaderMenuToggler";
import HeaderNav from "./HeaderNav";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MobileCatalog from "../catalog/MobileCatalog";
import "./Header.scss";

interface IHeaderProps extends PropsWithChildren {}

const Header: React.FC<IHeaderProps> = () => {
  const { windowWidth, isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <HeaderMenu />
      <div className="header-top">
        <div className="header-top__container">
          {windowWidth > 1400 ? <HeaderNav /> : <HeaderMenuToggler />}
          {windowWidth < 1350 && windowWidth > 1100 ? <HeaderCatalogToggler /> : false}
          {windowWidth > 430 ? (
            <div className="header-order-call">
              {windowWidth > 700 ? <div className="header-order-call__period">Ежедневно, с 8:00 до 18:00</div> : false}
              <a className="header-order-call__phone" href="tel:8 800 444 00 65">
                8 800 444 00 65
              </a>
              <LightButton
                onClick={(e) => {
                  dispatch(setIsCallModalVisible(true));
                }}
                className="header-order-call__button">
                Заказать звонок
              </LightButton>
            </div>
          ) : (
            false
          )}
          {windowWidth < 430 ? <HeaderCatalogToggler /> : false}
        </div>
      </div>
      <div className="header-main">
        <div className="header-main__container">
          <div className="header-main__floor-actions">
            <Logo className="header-logo" />
            {windowWidth > 1350 ? <HeaderCatalogToggler /> : false}
            {windowWidth > 1100 ? (
              <SearchInput
                placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                className="header-search-form"
              />
            ) : (
              false
            )}
            <HeaderActions />
          </div>
          {windowWidth < 1100 ? (
            <div className="header-main__floor-search">
              {windowWidth > 430 ? <HeaderCatalogToggler /> : false}
              <SearchInput placeholder="Поиск..." className="header-search-form" />
            </div>
          ) : (
            false
          )}
        </div>
      </div>
      {windowWidth > 999 ? <Catalog /> : <MobileCatalog />}
    </header>
  );
};

export default Header;
