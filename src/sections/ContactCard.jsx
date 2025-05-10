import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhoneAlt className="w-6 h-6 text-white" />,
    title: "Phone",
    detail: "+1 (123) 456-7890",
    bgColor: "bg-gradient-to-b from-[#0FCFEC] to-[#19D3AE]",
    textColor: "text-white",
    iconBg: "bg-white/20",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6 text-white" />,
    title: "Location",
    detail: "123 Main Street, Barisal, Bangladesh",
    bgColor: "bg-[#3A4256]",
    textColor: "text-white",
    iconBg: "bg-white/20",
  },
  {
    icon: <FaEnvelope className="w-6 h-6 text-white" />,
    title: "Email",
    detail: "info@yourdomain.com",
    bgColor: "bg-gradient-to-b from-[#0FCFEC] to-[#19D3AE]",
    textColor: "text-white",
    iconBg: "bg-white/20",
  },
];

export default function ContactCard() {
  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} ${item.textColor} shadow-lg rounded-2xl p-6 flex items-center transition hover:shadow-xl`}
          >
            <div className={`p-3 ${item.iconBg} rounded-full mr-4`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
