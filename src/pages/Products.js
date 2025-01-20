import React from 'react';

const importAll = (r) => r.keys().reduce((acc, item, index) => {
  acc[index] = r(item);
  return acc;
}, {});

const images = importAll(require.context('./assests', false, /\.(png|jpe?g|svg)$/));

const Products = () => {
  const products = [
    { 
      title: 'FRP Cabin', 
      description: 'Durable and lightweight cabins, ideal for multiple applications.', 
      image: images[0],
      alt: 'FRP Cabin',
    },
    { 
      title: 'FRP Toilet / Urinals', 
      description: 'Hygienic and portable FRP toilets and urinals for public and private spaces.', 
      image: images[1],
      alt: 'FRP Toilet / Urinals',
    },
    { 
      title: 'FRP Dome & Canopy', 
      description: 'Stylish and sturdy domes and canopies for various environments.', 
      image: images[2], 
      alt: 'FRP Dome & Canopy',
    },
    { 
      title: 'FRP Door', 
      description: 'Elegant and long-lasting FRP doors with superior strength.', 
      image: images[3], 
      alt: 'FRP Door',
    },
    { 
      title: 'FRP Boat & Jetty', 
      description: 'High-performance boats and jetties designed for durability and safety.', 
      image: images[4], 
      alt: 'FRP Boat & Jetty',
    },
    { 
      title: 'FRP Scrubber & Man Hole Cover', 
      description: 'Advanced FRP scrubbers and manhole covers for industrial and municipal needs.', 
      image: images[5], 
      alt: 'FRP Scrubber & Man Hole Cover',
    },
    { 
      title: 'FRP Grating & Tree Guard', 
      description: 'Robust gratings and tree guards for enhanced protection and utility.', 
      image: images[6], 
      alt: 'FRP Grating & Tree Guard',
    },
    { 
      title: 'FRP Dustbin & Planter', 
      description: 'Stylish and eco-friendly dustbins and planters for urban and rural settings.', 
      image: images[7], 
      alt: 'FRP Dustbin & Planter',
    },
    { 
      title: 'FRP Vachanalaya', 
      description: 'Durable and functional structures for vachanalayas.', 
      image: images[8], 
      alt: 'FRP Vachanalaya',
    },
    { 
      title: 'FRP Bus Stop', 
      description: 'Modern and weather-resistant bus stops designed for durability.', 
      image: images[9], 
      alt: 'FRP Bus Stop',
    },
    { 
      title: 'FRP Lining & FRP Tank', 
      description: 'Reliable linings and tanks for industrial and domestic use.', 
      image: images[10], 
      alt: 'FRP Lining & FRP Tank',
    },
    { 
      title: 'FRP Turn Key Projects', 
      description: 'Comprehensive turnkey solutions for FRP projects of any scale.', 
      image: images[11], 
      alt: 'FRP Turn Key Projects',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-black">Our Products</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="overflow-hidden transition-shadow border rounded-lg shadow hover:shadow-lg"
            >
              <img 
                src={product.image} 
                alt={product.alt} 
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <button className="px-4 py-2 mt-4 text-sm font-semibold text-white rounded bg-custom-orange hover:bg-indigo-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
