import React from "react";
import image6 from "./images/image6.jpg";
import image10 from "./images/image10.jpg";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto gap-8 px-6 py-12 font-sans md:flex-row bg-gradient-to-b from-gray-50 to-gray-200 md:h-160">
      {/* Left Section */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="flex flex-col items-start gap-6 px-6 py-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold text-center md:text-4xl text-custom-blue-dark md:text-left">
            Welcome to NDA Plastech
          </h3>
          <h1 className="text-xl font-medium text-center md:text-2xl text-custom-blue-light md:text-left">
            Innovative products. Global needs.
          </h1>
          <p className="leading-relaxed text-center text-gray-700 md:text-left">
            Established in 1994 by Mr. D. B. Asabe, NDA Plastech has soon become
            the name of trust for our well-reputed and dignified customers in
            case of need. We build relations beyond business, which has worked
            in favor of our team for re-engineering the word of IMPOSSIBLE to "I
            M POSSIBLE".
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="w-32 h-12 text-lg font-bold text-white rounded-lg bg-custom-orange hover:bg-orange-700">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full gap-6 md:w-1/2">
        {/* Top Right Section */}
        <div className="flex flex-col items-start w-full gap-6 px-6 py-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-center md:text-4xl text-custom-blue-dark md:text-left">
            Tech Advantage FRP
          </h1>
          <p className="leading-relaxed text-center text-gray-700 md:text-left">
            FRP offers advantages of superior quality. Various levels of
            sophistication are available. Engineers and research professionals
            consistently work to improve the products' technology to make them
            suitable for different types of applications.
          </p>
        </div>

        {/* FRP Door and FRP Boat & Jetty Sections */}
        <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row">
          {/* FRP Door */}
          <div className="flex flex-col items-center w-full gap-4 px-4 py-6 bg-white rounded-lg shadow-lg md:items-start md:w-1/2">
            <img
              src={image10}
              alt="FRP Door"
              className="w-full rounded-lg md:w-1/3"
            />
            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
              <h2 className="text-xl font-bold md:text-2xl text-custom-blue-dark">
                FRP Door
              </h2>
              <p className="text-gray-700">
                Elegant and long-lasting FRP doors with superior strength.
              </p>
              <button className="w-32 h-10 text-white rounded-lg bg-custom-orange hover:bg-orange-700">
                Learn More
              </button>
            </div>
          </div>

          {/* FRP Boat & Jetty */}
          <div className="flex flex-col items-center w-full gap-4 px-4 py-6 bg-white rounded-lg shadow-lg md:items-start md:w-1/2">
            <img
              src={image6}
              alt="FRP Boat & Jetty"
              className="w-full rounded-lg md:w-1/3"
            />
            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
              <h2 className="text-xl font-bold md:text-2xl text-custom-blue-dark">
                FRP Boat & Jetty
              </h2>
              <p className="text-gray-700">
                High-performance boats and jetties designed for durability and
                safety.
              </p>
              <button className="w-32 h-10 text-white rounded-lg bg-custom-orange hover:bg-orange-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
