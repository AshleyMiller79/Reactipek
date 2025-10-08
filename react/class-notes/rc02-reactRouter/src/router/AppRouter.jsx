import React from "react";

import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
