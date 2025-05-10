import React from "react";
import dental1 from "../assets/fluoride.png";
import dental2 from "../assets/cavity.png";
import dental3 from "../assets/teeth.png";

import SectionTitle from "../components/SectionTitle";

const services = [
  {
    image: dental1,
    title: "Fluoride Treatment",
    description:
      "Strengthen your enamel and prevent cavities with our fluoride treatments. Ideal for children and adults seeking long-term dental protection.",
  },
  {
    image: dental2,
    title: "Cavity Filling",
    description:
      "Restore the strength and function of decayed teeth with our safe, painless cavity filling procedures using durable, tooth-colored materials.",
  },
  {
    image: dental3,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our advanced teeth whitening services. We use safe, professional-grade techniques for fast and lasting results.",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-[#F4F7FB]">
      <SectionTitle
        subtitle="Our Services"
        title="Services We Provide"
        textAlign="center" // or "left", or "right"
      />

      {/* <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Dental Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore a wide range of modern dental care services tailored just for
          you.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
          >
            <div className="flex justify-center mb-4">
              {" "}
              <img
                src={service.image}
                alt="General Dentistry"
                className="w-16 h-16"
              />{" "}
            </div>
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
