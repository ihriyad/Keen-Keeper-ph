import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
