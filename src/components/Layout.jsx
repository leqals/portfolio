import { useLocation } from "react-router-dom";
import { NavBar, Footer } from ".";

import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="relative bg-white min-h-screen w-screen pt-28 lg:pt-5 screen-px mx-auto ">
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
