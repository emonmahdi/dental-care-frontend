import React from "react";
import bg from "../assets/appointment.png"; // or your desired background image path
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="bg-cover bg-center bg-no-repeat relative"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
          subtitle="Contact Us"
          title="Stay Connected With Us"
          textAlign="center"
          titleColor="text-white"
        />

        <div className="flex justify-center px-4 py-10">
          <form className="w-full max-w-lg rounded-lg space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-primary text-white font-bold py-3 rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
