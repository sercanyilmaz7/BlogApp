import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import MyBlog from "../pages/MyBlog";
import Detail from "../pages/Detail";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Dashboard />} />
        <Route path="register" element={<Register />} />

        {/* <Route path="new-blog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="my-blogs" element={<PrivateRouter />}>
          <Route path="" element={<MyBlog />} />
        </Route>
        <Route path="detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}
        {/* <Route path="my-blogs/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}
        <Route path="" element={<PrivateRouter />}>
          <Route path="my-blogs/detail/:id" element={<Detail />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-blogs" element={<MyBlog />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
