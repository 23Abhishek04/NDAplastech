import React from "react";

// Import images dynamically
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("./Photo", false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Header */}
        <h1 className="mb-8 text-4xl font-bold text-center text-black">
          Our Gallery
        </h1>
        <p className="mb-12 text-center text-gray-600">
          Explore our work through these visuals. Stay tuned as we update this space with more images showcasing our journey.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg group"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}  // More descriptive alt text
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-50">
                <p className="text-lg font-medium text-white opacity-0 group-hover:opacity-100">
                  Image {index + 1} Caption {/* Placeholder caption */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
