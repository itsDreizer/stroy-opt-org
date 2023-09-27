import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element}></Route>;
      })}
    </Routes>
  );
};

export default AppRouter;
