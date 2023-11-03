import React, { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsHeaderMenuVisible } from "../../redux/reducers/statesSlice";
interface IHeaderMenuTogllerProps extends PropsWithChildren {}

const HeaderMenuToggler: React.FC<IHeaderMenuTogllerProps> = () => {
  const isMenuVisible = useAppSelector((state) => {
    return state.states.isHeaderMenuVisible;
  });

  const dispatch = useAppDispatch();

  return (
    <div className="header-menu-toggler">
      <div
        onClick={(e) => dispatch(setIsHeaderMenuVisible(!isMenuVisible))}
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
