import React from 'react';
import bg from "../assets/appointment.png"; // or your desired background image path
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="bg-cover bg-center bg-no-repeat mt-20 relative"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
          subtitle="Contact Us"
          title="Stay Connected With Us"
          textAlign="center"
          titleColor="text-white"
        />

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-primary text-white font-bold py-3 rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-96">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.903269065277!2d90.41098147592893!3d23.8599096786029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5283ba3b4e7%3A0xf4385a62c84cd91c!2sApollo%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1628070488313!5m2!1sen!2sbd"
              className="w-full h-full rounded-lg border-0 shadow-md"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
