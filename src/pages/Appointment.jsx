import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import chairImage from "../assets/chair.png";
import Button from "../components/Button";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    "Teeth Whitening",
    "Root Canal Treatment",
    "Dental Cleaning",
    "Cavity Filling",
    "Braces Consultation",
    "Tooth Extraction",
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const openBookingModal = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const closeBookingModal = () => {
    setShowModal(false);
    setSelectedSlot(null);
  };

  const handleBooking = () => {
    console.log("Booking Successful");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Calendar and Chair Image */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
        <div className="w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center text-primary">
            Select Appointment Date
          </h2>
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar w-full rounded-lg border-none"
            tileClassName="rounded-lg hover:bg-primary hover:text-white transition"
          />
          <p className="mt-4 text-center text-gray-600">
            You selected:{" "}
            <span className="font-medium text-primary">
              {date.toDateString()}
            </span>
          </p>
        </div>
        <div className="w-full max-w-lg">
          <img
            src={chairImage}
            alt="Dental Chair"
            className="w-full h-auto object-contain rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Selected date */}
      <div className="text-center text-xl font-semibold text-gray-700 mb-6">
        Available Services on{" "}
        <span className="text-primary">{date.toDateString()}</span>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <h3 className="text-lg font-medium text-gray-800 text-center">
              {service}
            </h3>
          </div>
        ))}
      </div>

      {/* Time Slots for Selected Service */}
      {selectedService && (
        <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow animate-fadeIn">
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">
            {selectedService} -{" "}
            <span className="text-gray-800"> Available Time Slots</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeSlots.map((slot, idx) => (
              <div
                key={idx}
                className="border border-primary rounded-md p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-800 font-medium mb-2">{slot}</p>
                <Button onClick={() => openBookingModal(slot)}>
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn scale-95">
            {/* Close Button */}
            <button
              onClick={closeBookingModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            {/* Booking Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Book Appointment
              </h2>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">{selectedService}</span> on{" "}
                <span className="text-primary">{date.toDateString()}</span> at{" "}
                <span className="font-medium">{selectedSlot}</span>
              </p>
            </div>

            {/* Booking Form */}
            <form className="space-y-5 p-6 bg-white max-w-md mx-auto">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="text-center pt-2">
                <Button
                  onClick={handleBooking}
                  className="w-full bg-primary text-white hover:bg-primary/90 transition rounded-lg py-2"
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
