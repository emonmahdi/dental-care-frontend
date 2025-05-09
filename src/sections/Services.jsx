import React from 'react';
import {
  FaTooth,
  FaTeethOpen,
  FaRegSmile,
  FaTeeth,
  FaXRay,
  FaUserMd
} from 'react-icons/fa';

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-blue-500" />,
    title: "General Dentistry",
    description: "Routine cleanings, checkups, and fillings for all ages.",
  },
  {
    icon: <FaTeethOpen className="w-10 h-10 text-blue-500" />,
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and smile makeovers.",
  },
  {
    icon: <FaRegSmile className="w-10 h-10 text-blue-500" />,
    title: "Orthodontics",
    description: "Braces and aligners for straighter teeth.",
  },
  {
    icon: <FaTeeth className="w-10 h-10 text-blue-500" />,
    title: "Implants",
    description: "Permanent solutions for missing teeth.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-blue-500" />,
    title: "Dental X-Rays",
    description: "High-quality digital imaging and diagnostics.",
  },
  {
    icon: <FaUserMd className="w-10 h-10 text-blue-500" />,
    title: "Pediatric Dentistry",
    description: "Gentle care for our youngest patients.",
  }
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-[#F4F7FB]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Dental Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore a wide range of modern dental care services tailored just for
          you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-center text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
