import React from 'react';

const clients = [
  "Ahmednagar Forgings Ltd.",
  "Alfa Laval (I) Ltd., Pune.",
  "Bajaj Auto Ltd.",
  "Bharat Electronics Ltd.",
  "BVG India Ltd.",
  "Cummins India Ltd.",
  "Cantonment Board, Aurangabad.",
  "Commissioner of Police, Mumbai.",
  "Gabrial (I) Ltd., Chakan, Pune.",
  "General Motors",
  "Kalyani Thermal.",
  "Kirloskar Oil Engines Ltd., Khadaki, Pune.",
  "Mahindra Navistar Automotive Ltd.",
  "P. C. M. C., Pimpri, Pune.",
  "P. M. C. Pune.",
  "Tata Motors",
  "Thai Summit Auto Neel.",
  "Tata Johonson Controls Automotive Ltd.",
  "The Indian Card Clothing & Co. Ltd., Pimpri, Pune.",
  "Volkswagon India Pvt. Ltd.",
  "Walchandnagar Industries Ltd."
];

const ClientPage = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">Our Clients</h2>
        <p className="mb-10 text-lg text-center text-gray-600">
          NDA Plastech has achieved an exemplary record of serving many prestigious clients.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div key={index} className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-medium text-gray-800 truncate">{client}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
