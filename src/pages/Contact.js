import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-12 bg-gray-100">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Reach Us At</h2>
            <p className="text-gray-600">
              <strong>Address:</strong> <br />
              S.No.1567, Dehu-Alandi Road, <br />
              Chikhali, Tal-Haveli, <br />
              Dist - Pune 412 114
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> <br />
              +91 8055002758 <br />
              +91 9767102713
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> <br />
              <a
                href="mailto:enquiry@ndaplastech.com"
                className="text-blue-500 hover:underline"
              >
                enquiry@ndaplastech.com
              </a>
              <br />
              <a
                href="mailto:sales@ndaplastech.com"
                className="text-blue-500 hover:underline"
              >
                sales@ndaplastech.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
