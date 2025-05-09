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
import Contact from "../sections/Contact";

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
      <MakeAppointment />
      <OurDoctors />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home