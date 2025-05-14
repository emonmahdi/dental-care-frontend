import React, { useState } from "react";
import { Link } from "react-router";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

const DashboardNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-40 h-16 flex items-center justify-between px-6">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link to="/dashboard">Admin Panel</Link>
      </div>

      {/* Right: Menu and Profile */}
      <div className="flex items-center gap-6">
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
        <Link
          to="/dashboard/appointments"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          My Appointments
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
          >
            <img
              src="https://i.pravatar.cc/30"
              alt="User"
              className="rounded-full w-8 h-8"
            />
            <FiChevronDown className="text-gray-600" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiUser /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
