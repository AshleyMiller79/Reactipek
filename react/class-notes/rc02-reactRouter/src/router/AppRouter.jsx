import React from "react";

import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Teacher from "../pages/Teacher";
import TeacherDetails from "../pages/TeacherDetails";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";

import FS from "../pages/FS";
import AWS from "../pages/AWS";
import Login from "../pages/Login";
import CardDetails from "../pages/CardDetails";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:namee" element={<CardDetails />} />

        {/* <Route path="/contact" element={<ContactForm />} /> */}

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<ContactForm />} />
        </Route>

        {/* <Route path="/paths" element={<Paths />} /> */}


{/* nested route */}
        <Route path="/paths" element={<Paths />}>
          <Route path="/paths/fs" element={<FS/>} />
          <Route path="aws" element={<AWS/>}/>
        </Route>



<Route path="*" element={<NotFound/>}/>


      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
