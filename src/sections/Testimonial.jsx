import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    name: "John Doe",
    title: "Patient",
    message: "Excellent service and very professional. The staff made me feel comfortable and at ease.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Jane Smith",
    title: "Patient",
    message: "Clean facilities and courteous doctors. I would highly recommend to my friends and family.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Johnson",
    title: "Patient",
    message: "Very smooth appointment process and great results. Thank you for your wonderful care!",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Michael Johnson2",
    title: "Patient 2",
    message: "Very smooth appointment process and great results. Thank you for your wonderful care!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary">What Our Patients Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='py-8'>
              <div className="bg-white shadow-lg rounded-lg p-6 text-left h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{testimonial.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
