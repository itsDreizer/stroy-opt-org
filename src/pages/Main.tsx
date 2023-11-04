import React, { PropsWithChildren, useEffect, useRef } from "react";
import CallModal from "../components/callModal/CallModal";
import Header from "../components/header/Header";
import { useAppSelector } from "../redux/hooks";

interface IMainProps extends PropsWithChildren {}

const Main: React.FC<IMainProps> = () => {
  const { isHeaderMenuVisible, isCallModalVisible, windowWidth } = useAppSelector((state) => {
    return state.states;
  });

  const { isMenuVisible: isCatalogVisible } = useAppSelector((state) => {
    return state.catalog;
  });

  useEffect(() => {
    const condition = isCallModalVisible || isHeaderMenuVisible || (isCatalogVisible && windowWidth < 1000);

    document.body.style.overflow = condition ? "hidden" : "visible";
  }, [isCallModalVisible, isHeaderMenuVisible]);

  return (
    <div className="page-main">
      <CallModal />
      <Header />
    </div>
  );
};

export default Main;
