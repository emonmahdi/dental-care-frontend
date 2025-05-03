import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from "../sections/HeroSection";
import ContactCard from "../sections/ContactCard";
import Services from "../sections/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden">
        <HeroSection />
        <ContactCard />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home