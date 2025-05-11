import React from "react";
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
      <HeroSection />
      <ContactCard />
      <Services />
      <DentalHero />
      <MakeAppointment />
      <OurDoctors />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
