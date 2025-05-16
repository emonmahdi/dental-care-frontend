import React from 'react';

const appointments = [
  {
    id: 1,
    name: "John Doe",
    service: "Dental Cleaning",
    time: "8:00 PM - 9:00 PM",
  },
  {
    id: 2,
    name: "Jane Smith",
    service: "Root Canal Treatment",
    time: "9:00 AM - 10:00 AM",
  },
  {
    id: 3,
    name: "Emily Johnson",
    service: "Teeth Whitening",
    time: "11:00 AM - 12:00 PM",
  },
  {
    id: 4,
    name: "Michael Brown",
    service: "Braces Consultation",
    time: "2:00 PM - 3:00 PM",
  },
  {
    id: 5,
    name: "Sarah Davis",
    service: "Dental Checkup",
    time: "4:00 PM - 5:00 PM",
  },
];

const MyAppointment = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                SL No
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Service
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {appointment.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {appointment.service}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {appointment.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
