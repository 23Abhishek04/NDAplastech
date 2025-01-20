import React from "react";
import VideO from "./images/Sequence.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black md:h-160">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full opacity-100"
        src={VideO}
        autoPlay
        loop
        muted
      />

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center w-auto h-full bg-black bg-opacity-50 md:justify-start">
        <div className="relative px-6 py-8 ml-4 md:ml-20 md:w-160 md:pt-7">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-5xl md:mb-6 md:text-left">
            Transforming Ideas into Innovative Solutions
          </h1>
          <p className="mb-6 text-base text-center text-white md:text-lg md:text-left">
            Empowering industries with cutting-edge plastic technologies that
            drive sustainability and efficiency. Discover our range of
            customized solutions tailored to meet your needs.
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
            <button className="w-32 h-12 mx-2 mb-4 text-lg font-bold rounded-lg md:text-xl md:h-14 md:w-36 bg-custom-orange md:mb-0">
              <span className="text-white">Explore More</span>
            </button>
            <button className="w-32 h-12 mx-2 text-lg font-bold rounded-lg md:text-xl md:h-14 md:w-36 bg-custom-orange">
              <span className="text-white">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
