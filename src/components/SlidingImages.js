import React, { useState } from "react";
// Import images
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";

const SlidingImages = () => {
  // Array of imported images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center w-full h-auto bg-gray-100">
      <div className="flex items-center justify-between w-full h-12 px-8 mt-5 mb-5">
        <h1 className="flex text-2xl font-bold">
          Product Gallery /
          <span className="ml-2 underline transition-colors duration-300 cursor-pointer text-custom-orange hover:text-orange-500">
            View all
          </span>
        </h1>
        <div className="flex">
          <button
            onClick={prevSlide}
            className="w-10 h-10 mr-2 text-xl text-orange-600 bg-white border-2 border-orange-600 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 text-xl text-orange-600 bg-white border-2 border-orange-600 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="w-full px-6 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // 100% shift for 1 image at a time on mobile
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto transition-transform duration-500 transform rounded-lg shadow-md hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingImages;
