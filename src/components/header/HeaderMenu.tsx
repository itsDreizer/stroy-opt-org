import React, { FC } from "react";
import Menu from "../menu/Menu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeaderMenu } from "../../redux/reducers/statesSlice";
import { Link } from "react-router-dom";
import LightButton from "../UI/buttons/LightButton";

const HeaderMenu: FC = () => {
  const isMenuVisible = useAppSelector((state) => {
    return state.states.headerMenu;
  });

  return (
    <Menu isMenuVisible={isMenuVisible} closeMenuAction={setHeaderMenu} title="Меню" className="header-menu">
      <nav className="header-menu-nav">
        <ul className="header-menu-list">
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Все акции
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Сравнение
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              О компании
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Оплата
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Доставка
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Возврат
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Отзывы
            </Link>
          </li>

          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Вопрос-ответ
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Новости
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu__container">
        <div className="header-order-call header-menu-order-call">
          <div className="header-order-call__period header-menu-order-call__period">Ежедневно, с 8:00 до 18:00</div>
          <a className="header-order-call__phone header-menu-order-call__phone" href="tel:8 800 444 00 65">
            8 800 444 00 65
          </a>
          <LightButton className="header-order-call__button header-menu-order-call__button">
            Заказать звонок
          </LightButton>
        </div>
      </div>
    </Menu>
  );
};

export default HeaderMenu;
