import React, { PropsWithChildren, FC } from "react";
import Header from "../components/header/Header";

interface IMainProps extends PropsWithChildren {}

const Main: FC<IMainProps> = () => {
  return (
    <div className="page-main">
      <Header />
    </div>
  );
};

export default Main;
