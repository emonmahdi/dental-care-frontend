 
import React from "react";
import img from "../assets/treatment.png";

const DentalHero = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-6">
              The Procedure for a Check-up at <span className="text-primary">Den teeth</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Follow the procedure to have your mouth and oral health thoroughly checked with an assigned specialist. The doctor will give a thorough check of your mouth to find potential risks.
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 uppercase">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={img}
              alt="Dental treatment"
              className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHero;
