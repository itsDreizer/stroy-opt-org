import React, { FC, PropsWithChildren } from "react";
import LightButton from "../UI/Buttons/LightButton";

import "./Header.scss";

interface IHeaderProps extends PropsWithChildren {}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header-top">
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  О компании
                </a>
              </li>

              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Оплата
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Доставка
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Возврат
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Отзывы
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Вопрос-ответ
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Новости
                </a>
              </li>
              <li className="header-list__item">
                <a className="header-list__link" href="">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-order-call">
            <div className="header-order-call__period">Ежедневно, с 8:00 до 18:00</div>
            <a className="header-order-call__phone" href="tel:8 800 444 00 65">
              8 800 444 00 65
            </a>
            <LightButton className="header-order-call__button">Заказать звонок</LightButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
