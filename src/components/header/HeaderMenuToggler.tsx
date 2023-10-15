import React, { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setHeaderMenu } from "../../redux/reducers/statesSlice";
interface IHeaderMenuTogllerProps extends PropsWithChildren {}

const HeaderMenuToggler: React.FC = () => {
  const isMenuVisible = useAppSelector((state) => {
    return state.states.headerMenu;
  });

  const dispatch = useAppDispatch();

  return (
    <div className="header-menu-toggler">
      <div
        onClick={(e) => dispatch(setHeaderMenu(!isMenuVisible))}
        className={`header-menu-toggler__burger ${isMenuVisible ? "active" : ""}`}>
        <div className="header-menu-toggler__line"></div>
        <div className="header-menu-toggler__line header-menu-toggler__line--active-hidden"></div>
        <div className="header-menu-toggler__line"></div>
      </div>
      <span className="header-menu-toggler__text">Меню</span>
    </div>
  );
};

export default HeaderMenuToggler;