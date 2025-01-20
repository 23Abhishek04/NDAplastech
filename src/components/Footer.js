import React from "react";
import NDA from "./assest/NDA.png";
import rightlogo from "./assest/rightlogo.png";

const Footer = () => {
  return (
    <footer className="text-white shadow-lg bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950">
      <div className="px-4 py-8 mx-auto max-w-7xl md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div className="text-center transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <img
              src={NDA}
              alt="NDA Logo"
              className="w-32 mx-auto mt-1 mb-1 h-14 md:w-48 md:h-20"
            />
            <p className="text-sm md:text-base">Innovative Products. Global Needs</p>
          </div>

          {/* Column 2 */}
          <div className="font-sans transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="block text-lg font-bold">Phone:</a>
                <a className="block text-base transition duration-300 ease-in-out hover:text-gray-300">
                  +91 8055002758 / +91 9767102713
                </a>
              </li>

              <li>
                <a className="block text-lg font-bold">E-Mail:</a>
                <a className="block text-base transition duration-300 ease-in-out hover:text-gray-300">
                  enquiry@ndaplastech.com
                </a>
                <a className="block text-base transition duration-300 ease-in-out hover:text-gray-300">
                  sales@ndaplastech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="font-sans transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Location</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="block text-lg font-bold">Pune</a>
                <a className="block text-base transition duration-300 ease-in-out hover:text-gray-300">
                  S.No.1567, Dehu-Alandi Road, Chikhali, Tal-Haveli, Dist - Pune
                  412 114
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="font-sans transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Join Our Team</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="block text-lg font-bold">
                  View our current openings and sign up for alerts.
                </a>
                <button className="px-4 py-2 mt-1 transition duration-300 ease-in-out bg-orange-800 rounded-lg hover:bg-orange-700">
                  View Jobs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 mt-8 text-sm text-center border-t border-gray">
          <img
            src={rightlogo}
            alt="Right Logo"
            className="h-16 mx-auto mb-2 transition duration-500 ease-in-out transform hover:scale-110 md:h-20"
          />
          <p>Powered By T-Infosystem.</p>
          <p className="mt-2">
            <a
              href="#"
              className="transition duration-300 ease-in-out hover:text-gray-300"
            >
              Copyright © 2014 NDA Plastech. All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
