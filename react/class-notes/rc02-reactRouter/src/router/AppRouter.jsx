import React from "react";

import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/paths" element={<Paths />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
