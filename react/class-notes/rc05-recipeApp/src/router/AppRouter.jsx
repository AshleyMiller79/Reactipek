import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";
import NotFound from "../pages/errorPage/NotFound";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* navbar */}

      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
