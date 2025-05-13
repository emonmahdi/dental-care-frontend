import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();
  const blackNavbarRoutes = [
    "/appointment",
    "/about",
    "/login",
    "/register",
    "/reviews",
  ];
  const isBlackNavbar = blackNavbarRoutes.includes(location.pathname);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky || isBlackNavbar
          ? "bg-white text-black shadow-md"
          : "bg-gray-800 text-white"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">Dental Care</Link>
          </div>

          {/* Center: Menu Items */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link
              to="/"
              className={`${
                isSticky || isBlackNavbar
                  ? "text-black hover:text-primary"
                  : "bg-gray-800 hover:text-primary"
              } transition`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isSticky || isBlackNavbar
                  ? "text-black hover:text-primary"
                  : "bg-gray-800 hover:text-primary"
              } transition`}
            >
              About
            </Link>
            <Link
              to="/appointment"
              className={`${
                isSticky || isBlackNavbar
                  ? "text-black hover:text-primary"
                  : "bg-gray-800 hover:text-primary"
              } transition`}
            >
              Appointment
            </Link>
            <Link
              to="/reviews"
              className={`${
                isSticky || isBlackNavbar
                  ? "text-black hover:text-primary"
                  : "bg-gray-800 hover:text-primary"
              } transition`}
            >
              Review
            </Link>
            <Link
              to="/contact"
              className={`${
                isSticky || isBlackNavbar
                  ? "text-black hover:text-primary"
                  : "bg-gray-800 hover:text-primary"
              } transition`}
            >
              Contact
            </Link>
          </div>

          {/* Right: Appointment Button */}
          <div className="hidden md:flex">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white shadow-md px-4 pt-2 space-y-2 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-blue-600"
        >
          About
        </Link>
        <Link
          to="/appointment"
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-blue-600"
        >
          Appointment
        </Link>
        <Link
          to="/reviews"
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-blue-600"
        >
          Review
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-blue-600"
        >
          Contact
        </Link>
        <Link
          to="/login"
          onClick={toggleMenu}
          className="block bg-blue-600 text-white text-center py-2 rounded-full mt-2 hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
