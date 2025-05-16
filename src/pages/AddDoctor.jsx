import React, { useState } from "react";

const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setDoctorData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Added:", doctorData);
    alert("Doctor added successfully!");
    setDoctorData({
      name: "",
      specialization: "",
      email: "",
      phone: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-sm mt-8 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
        Add a New Doctor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={doctorData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Dr. John Doe"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Specialization
          </label>
          <input
            type="text"
            name="specialization"
            value={doctorData.specialization}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="E.g. Dentist, Orthodontist"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={doctorData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="doctor@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={doctorData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="+8801XXXXXXXXX"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Profile Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
