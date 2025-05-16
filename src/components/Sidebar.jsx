import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] sticky top-16 hidden md:block">
      <nav className="p-4 space-y-2 text-[#898989] font-medium">
        <Link to="/dashboard" className="block hover:text-blue-600">
          Dashboard Home
        </Link>
        <Link
          to="/dashboard/my-appointment"
          className="block text-[#898989] hover:text-blue-600 mb-3"
        >
          My Appointment
        </Link>
        <Link
          to="/dashboard/reviews"
          className="block text-[#898989]  hover:text-blue-600 mb-3"
        >
          My Reviews
        </Link>
        <Link
          to="/dashboard/history"
          className="block text-[#898989]  hover:text-blue-600 mb-3"
        >
          My History
        </Link>
        <Link
          to="/dashboard/all-users"
          className="block text-[#898989]  hover:text-blue-600 mb-3"
        >
          All Users
        </Link>
        <Link
          to="/dashboard/add-doctor"
          className="block text-[#898989]  hover:text-blue-600 mb-3"
        >
          Add a Doctors
        </Link>
        <Link
          to="/dashboard/manage-doctors"
          className="block text-[#898989]  hover:text-blue-600 mb-3"
        >
          Manage Doctors
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
