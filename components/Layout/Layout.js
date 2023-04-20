import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, activeLink, setActiveLink }) => {
  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
