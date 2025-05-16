import React from "react";

const ManageDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ayesha Siddiqua",
      specialty: "Orthodontist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Dr. Anisur Rahman",
      specialty: "Endodontist",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Dr. Meherun Nahar",
      specialty: "Periodontist",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Dr. Sajjad Hossain",
      specialty: "Oral Surgeon",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];

  const handleRemove = (id) => {
    alert(`Doctor with ID ${id} will be removed.`);
    // You can replace this with actual API/delete logic.
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 shadow-sm rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Manage Doctors
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left divide-y divide-gray-100">
          <thead className="text-gray-600 bg-white">
            <tr>
              <th className="py-3 px-4">Sl. No.</th>
              <th className="py-3 px-4">Profile</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Speciality</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white divide-y divide-gray-100">
            {doctors.map((doctor, index) => (
              <tr key={doctor.id} className="hover:bg-gray-100 transition">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4">{doctor.name}</td>
                <td className="py-3 px-4">{doctor.specialty}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleRemove(doctor.id)}
                    className="bg-red-400 hover:bg-red-500 text-white py-1 px-3 rounded-md text-xs"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {doctors.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
