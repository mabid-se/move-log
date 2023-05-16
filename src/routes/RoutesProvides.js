import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MoveLogLP from "../views/MoveLogLP";
import About from "../views/About";

const RoutesProvider = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<MoveLogLP />} />
            <Route path="/home" exact element={<Navigate to="/" replace />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default RoutesProvider;
