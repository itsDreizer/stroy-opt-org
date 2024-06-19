import React, { PropsWithChildren, useEffect, useRef } from "react";
import CallModal from "../components/callModal/CallModal";
import Header from "../components/header/Header";
import { useAppSelector } from "../redux/hooks";
import IntroSection from "../components/sections/introSection/IntroSection";
import RecommendationsSection from "../components/sections/recommendations/RecommendationsSection";

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
  }, [isCallModalVisible, isHeaderMenuVisible, isCatalogVisible, windowWidth]);

  return (
    <div className="page-main">
      <CallModal />
      <Header />
      <IntroSection />
      <RecommendationsSection />
    </div>
  );
};

export default Main;
