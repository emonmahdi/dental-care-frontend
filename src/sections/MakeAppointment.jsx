import React from 'react';
import doctor from '../assets/doctor.png';
import bg from '../assets/appointment.png';
import SectionTitle from "../components/SectionTitle";

const MakeAppointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat mt-20 relative"
    >
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Doctor Image */}
          <div className="hidden lg:block relative overflow-hidden h-[400px] lg:h-[450px] xl:h-[500px]">
            <img
              src={doctor}
              alt="Doctor"
              className="w-full max-w-md mx-auto transform scale-125 transition-all duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="text-white py-16">
            <SectionTitle
              subtitle="Appointment"
              title="Make an Appointment Today"
              textAlign="left"
              titleColor="text-white"
            />

            {/* <h3 className="text-black text-xl font-semibold mb-2">
              Appointment
            </h3>
            <h2 className="text-4xl font-bold mb-4">
              Make an Appointment Today
            </h2> */}
            <p className="mb-6 leading-relaxed text-sm md:text-base text-gray-100">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <button className="bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-secondary transition duration-300">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
