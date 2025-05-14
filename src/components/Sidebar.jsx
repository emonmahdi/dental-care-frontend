import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] sticky top-16 hidden md:block">
      <nav className="p-4 space-y-2 text-gray-800 font-medium">
        <Link to="/dashboard" className="block hover:text-blue-600">
          Dashboard Home
        </Link>
        <Link to="/dashboard/my-appointment" className="block hover:text-blue-600">
          My Appointment
        </Link>
        <Link to="/dashboard/patients" className="block hover:text-blue-600">
          Patients
        </Link>
        <Link to="/dashboard/services" className="block hover:text-blue-600">
          Dental Services
        </Link>
        <Link to="/dashboard/reviews" className="block hover:text-blue-600">
          Reviews
        </Link>
        <Link to="/dashboard/settings" className="block hover:text-blue-600">
          Settings
        </Link>
      </nav> 
    </aside>
  );
};

export default Sidebar;
