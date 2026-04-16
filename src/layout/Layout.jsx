import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
