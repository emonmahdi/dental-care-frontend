import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const hideFooterPages = ["/login", "/register"];

  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* To avoid being hidden by fixed navbar */}
        <Outlet />
      </main>
      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </>
  );
};


export default Layout
