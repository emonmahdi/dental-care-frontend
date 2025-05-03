import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from "../sections/HeroSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home