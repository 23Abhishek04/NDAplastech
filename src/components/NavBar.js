import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NDA from "./assest/NDA.png";
import rightlogo from "./assest/rightlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Top Header Section */}
      <div className="w-full bg-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 space-x-4 bg-blue-950 h-11">
          {/* Social Media Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="https://www.facebook.com/profile.php?id=61553223065692"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-600 rounded-3xl hover:bg-blue-700"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/nda-plastech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-800 rounded-3xl hover:bg-blue-900"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/ndaplastech2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-pink-600 rounded-3xl hover:bg-pink-700"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Contact Info */}
          <div className="items-center hidden space-x-4 md:flex">
            <span className="flex items-center space-x-2">
              <i className="text-orange-700 fa-solid fa-phone"></i>
              <span className="text-white">+91 9923101417</span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="text-orange-700 fa-solid fa-envelope"></i>
              <span className="text-white">enquiry@ndaplastech.com</span>
            </span>
          </div>
        </div>

        {/* Logo and Main Navbar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2 md:flex-nowrap">
          {/* Logo Section */}
          <div className="relative ml-2 overflow-hidden md:ml-16">
            <img src={NDA} alt="NDA Logo" className="h-16 mt-1 w-36 md:w-48 md:h-20" />
            <div className="font-sans text-sm font-bold md:text-base whitespace-nowrap animate-slide">
              Innovative Products. Global Needs
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="block p-2 text-2xl md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white md:static md:flex md:items-center md:space-x-4 md:w-auto`}
          >
            <Link
              to="/"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="fa-solid fa-house mr-1.5 text-sm"></i>Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              About Us
            </Link>
            <Link
              to="/product"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Products
            </Link>
            <Link
              to="/client"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Client
            </Link>
            <Link
              to="/gallery"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Gallery
            </Link>
            <Link
              to="/enquiry"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Enquiry
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="fa-solid fa-blog mr-1.5 text-sm"></i>Blog
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="mr-1 text-sm fa-solid fa-phone"></i> Contact Us
            </Link>
          </div>

          {/* Right Logo */}
          <div className="hidden md:block">
            <img src={rightlogo} alt="Right Logo" className="h-16 md:h-20" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
