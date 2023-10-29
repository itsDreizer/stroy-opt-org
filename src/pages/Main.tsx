import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";
import { useAppSelector } from "../redux/hooks";
import Modal from "../components/UI/modal/Modal";
import CallModal from "../components/callModal/CallModal";

interface IMainProps extends PropsWithChildren {}

const Main: React.FC<IMainProps> = () => {
  return (
    <div className="page-main">
      <CallModal />
      <Header />
    </div>
  );
};

export default Main;
