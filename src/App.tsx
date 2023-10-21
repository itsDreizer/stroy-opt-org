import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { setWindowWidth } from "./redux/reducers/statesSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.onresize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
