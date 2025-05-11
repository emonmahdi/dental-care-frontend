// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const slides = [
//     {
//       title: "Your Smile, Our Priority",
//       subtitle: "Professional Dental Care for You and Your Family",
//       image: "https://img.freepik.com/free-photo/dental-cabinet-with-various-medical-equipment_140725-7678.jpg?ga=GA1.1.722124950.1730109715&semt=ais_hybrid&w=740",
//     },
//     {
//       title: "Gentle. Caring. Expert.",
//       subtitle: "We Help You Shine With Confidence",
//       image: "https://img.freepik.com/free-photo/dentist-doing-dental-treatment-intervention-senior-woman-elderly-patient-medical-examination-with-dentist-dental-office-with-orange-equipment_482257-12560.jpg?ga=GA1.1.722124950.1730109715&semt=ais_hybrid&w=740",
//     },
//     {
//       title: "Advanced Dental Solutions",
//       subtitle: "Modern Equipment & Friendly Staff",
//       image: "https://img.freepik.com/free-photo/interior-modern-dentist-cabinet-medical-chair-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment_482257-12482.jpg?ga=GA1.1.722124950.1730109715&semt=ais_hybrid&w=740",
//     },
//   ];

// export default function HeroSection() {
//   return (
//     <div className="relative w-full h-[90vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         loop
//         speed={800}
//         className="w-full h-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/50"></div>
//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 text-white">
//                 <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
//                 <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white shadow-lg transition duration-300">
//                   Book Appointment Now
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Swiper Arrows Styling */}
//       <style>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: white;
//         //   background-color: rgba(0, 0, 0, 0.5);
//           padding: 10px;
//           border-radius: 9999px;
//           top: 50%;
//           transform: translateY(-50%);
//         }
//         .swiper-button-next:hover,
//         .swiper-button-prev:hover {
//         //   background-color: rgba(0, 0, 0, 0.7);
//         }
//         .swiper-button-next {
//           right: 10px;
//         }
//         .swiper-button-prev {
//           left: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from "../components/Button";

const slides = [
  {
    title: "Your Smile, Our Priority",
    subtitle: "Professional Dental Care for You and Your Family",
    image:
      "https://img.freepik.com/free-photo/dental-cabinet-with-various-medical-equipment_140725-7678.jpg?w=740",
  },
  {
    title: "Gentle. Caring. Expert.",
    subtitle: "We Help You Shine With Confidence",
    image:
      "https://img.freepik.com/free-photo/dentist-doing-dental-treatment-intervention-senior-woman_482257-12560.jpg?w=740",
  },
  {
    title: "Advanced Dental Solutions",
    subtitle: "Modern Equipment & Friendly Staff",
    image:
      "https://img.freepik.com/free-photo/interior-modern-dentist-cabinet-medical-chair_482257-12482.jpg?w=740",
  },
];

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative w-full h-[100vh]">
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        speed={900}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                {/* <button
                  onClick={handleToggleForm}
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white shadow-lg transition duration-300"
                >
                  Book Appointment Now
                </button> */}
                <Button onClick={handleToggleForm}>Book Appointment</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Arrows Styling */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          padding: 10px;
          border-radius: 9999px;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
      `}</style>

      {/* Appointment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-all duration-300">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Book an Appointment
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              />
              <input
                type="date"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleToggleForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
