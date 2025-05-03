import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3A4256] text-gray-100 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">DentalCare</h4>
          <p className="text-sm leading-relaxed">
            DentalCare+ is your trusted family dental clinic. We provide
            exceptional care using advanced technology, tailored to your smile.
          </p>
          <div className="flex mt-4 space-x-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                General Dentistry
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Cosmetic Dentistry
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Orthodontics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Implants
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Pediatric Care
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <span>123 Smile Street, Dental City, BD</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-blue-400 mt-1" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-blue-400 mt-1" />
              <span>support@dentalcareplus.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} DentalCare. All rights reserved.
      </div>
    </footer>
  );
}
