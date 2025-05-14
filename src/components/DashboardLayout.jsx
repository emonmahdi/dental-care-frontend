import React from "react";  
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar  />
      <div className="flex flex-1 pt-16"> {/* pt-16 to offset fixed navbar */}
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4">
          <Outlet /> {/* this will render nested routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
