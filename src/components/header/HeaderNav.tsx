import React, { FC } from "react";
import { Link } from "react-router-dom";

const HeaderNav: FC = () => {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            О компании
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Оплата
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Доставка
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Возврат
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Отзывы
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Вопрос-ответ
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Новости
          </Link>
        </li>
        <li className="header-list__item">
          <Link className="header-list__link" to={"/"}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
