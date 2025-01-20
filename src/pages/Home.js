import React from "react";
import HeroSection from "../components/HeroSection.js";
import WelcomeSection from "../components/WelcomeSection.js";
import SlidingImages from "../components/SlidingImages.js";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <SlidingImages />
    </div>
  );
};

export default Home;
