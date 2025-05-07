import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from "../sections/HeroSection";
import ContactCard from "../sections/ContactCard";
import Services from "../sections/Services";
import DentalHero from "../sections/DentalHero";
import OurDoctors from "../sections/OurDoctors";
import MakeAppointment from "../sections/MakeAppointment";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <HeroSection />
        <ContactCard />
      </div>
      <Services />
      <DentalHero />
      <OurDoctors />
      <MakeAppointment />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home