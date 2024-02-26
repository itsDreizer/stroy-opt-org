import React from "react";

import gift from "../../images/icons/gift.svg";
import person from "../../images/icons/personInFrame.svg";
import stats from "../../images/icons/stats.svg";
import heart from "../../images/icons/heart.svg";
import basket from "../../images/icons/basket.svg";
import { Link } from "react-router-dom";

interface IHeaderActionsProps {}

const HeaderActions: React.FC<IHeaderActionsProps> = () => {
  return (
    <div className="header-actions">
      {window.innerWidth > 700 ? (
        <Link className="header-actions-item" to={"/"}>
          <div className="header-actions-item__block-img">
            <img className="header-actions-item__img" src={gift} alt="Акции" />
          </div>
          <div className="header-actions-item__text">Все акции</div>
        </Link>
      ) : (
        false
      )}
      <Link className="header-actions-item" to={"/"}>
        <div className="header-actions-item__block-img">
          <img className="header-actions-item__img" src={person} alt="Акции" />
        </div>
        <div className="header-actions-item__text">Войти</div>
      </Link>
      {window.innerWidth > 430 ? (
        <Link className="header-actions-item" to={"/"}>
          <div className="header-actions-item__block-img">
            <img className="header-actions-item__img" src={stats} alt="Акции" />
          </div>
          <div className="header-actions-item__text">Сравнение</div>
        </Link>
      ) : (
        false
      )}
      <Link data-count="3" className="header-actions-item" to={"/"}>
        <div className="header-actions-item__block-img">
          <img className="header-actions-item__img" src={heart} alt="Акции" />
        </div>
        <div className="header-actions-item__text">Избранное</div>
      </Link>
      <Link data-count="3" className="header-actions-item" to={"/"}>
        <div className="header-actions-item__block-img">
          <img className="header-actions-item__img" src={basket} alt="Акции" />
        </div>
        <div className="header-actions-item__text">Корзина</div>
      </Link>
    </div>
  );
};

export default HeaderActions;
