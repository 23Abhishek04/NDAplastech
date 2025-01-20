import React from "react";
import image from "./Photo/Aboutimage.jpg";
import image2 from "./Photo/mission.jpg";

const AboutUs = () => {
  return (
    <div className="w-full h-auto font-sans">
      <div className="relative flex items-center justify-center w-full bg-center bg-no-repeat bg-cover h-96">
        {/* Background Image */}
        <img
          src={image}
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Grey Overlay */}
        <div className="absolute inset-0 bg-stone-800 bg-opacity-30"></div>

        {/* Overlay Text */}
        <h1 className="relative text-6xl font-bold text-white">
          NDA PLASTECT Overview
        </h1>
      </div>

      <div>
        <div className="flex flex-col justify-start w-full px-24 py-20 text-black h-128">
          <h1 className="mb-8 text-6xl font-bold text-center">About Us</h1>

          <p className="mb-10 text-lg leading-relaxed text-center">
            NDA Plastech was established in 1994 by Mr. D. B. Asabe with the
            sole objective of giving strong and durable FRP products to the
            world. In its short stint, the company has carved a niche for itself
            and has earned a reputation for being the most dynamic and reliable
            company when it comes to supplying strong and durable FRP products.
          </p>

          <p className="text-lg leading-relaxed text-center ">
            We have had an elite list of clientele which includes Tata Motors,
            Bajaj Auto, Mahindra & Mahindra, Alfa Laval, Tetra Pack, Volkswagen,
            Kirloskar, Cummins, General Motors, Government & Semi Government
            organizations. Our strength has been our commitment towards quality,
            our team of qualified professionals, the resources we have at our
            disposal, the satisfaction and delight of our customers, and the
            trust our esteemed customers have shown in us.
          </p>
        </div>

        {/* Vision and Mission */}
        <div
          className="relative grid w-full grid-cols-1 gap-8 px-24 py-20 bg-center bg-no-repeat bg-cover md:grid-cols-2 h-144"
          style={{ backgroundImage: `url(${image2})` }}
        >
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Vision Section */}
          <div className="relative px-6 py-10 pt-20 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-4xl">
              <i className="fas fa-eye text-custom-orange"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black">
              Our Company Vision
            </h3>
            <p className="leading-relaxed text-black">
              No organization has ever stood the test of time without the trust
              and satisfaction of its customers. Our vision is to build on the
              trust of our customers and serve them with dedication and quality.
              Our vision is to set benchmarks in the FRP manufacturing industry
              and take the quality level to new heights.
            </p>
          </div>

          {/* Mission Section */}
          <div className="relative px-6 py-10 pt-20 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-4xl">
              <i className="fas fa-bullseye text-custom-orange"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black">
              Our Company Mission
            </h3>
            <p className="leading-relaxed text-black">
              To manufacture sustainable products which provide cost-efficient
              solutions to clients and customers, structural performance, and
              durability of materials over many conventional materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
