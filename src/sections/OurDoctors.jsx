import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import specialist from "../assets/doctor.png";

const OurDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Orthodontist",
      description:
        "Dr. Sarah specializes in braces and aligners with over 10 years of experience in restoring confident smiles.",
      image: specialist,
    },
    {
      id: 2,
      name: "Dr. James Smith",
      designation: "Pediatric Dentist",
      description:
        "With a gentle approach, Dr. James makes children feel safe and happy while taking care of their oral health.",
      image: specialist,
    },
    {
      id: 3,
      name: "Dr. Emily Clark",
      designation: "Cosmetic Dentist",
      description:
        "Dr. Emily is an expert in smile makeovers using the latest cosmetic dental technologies and techniques.",
      image: specialist,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Expert Doctors
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Meet our professional and experienced dental care specialists
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {doctor.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">{doctor.designation}</p>
              <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary hover:text-blue-700 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-sky-500 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-blue-600 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
