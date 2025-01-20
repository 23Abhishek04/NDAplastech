import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

import ContactUs from './pages/Contact';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Client from './pages/Client';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Area with Animations */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

// Component to manage animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/client" element={<PageTransition><Client /></PageTransition>} />
        <Route path="/product" element={<PageTransition><Products /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// Component to add page transition effect
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home | Your Website';
        break;
      case '/about':
        document.title = 'About Us | Your Website';
        break;
      case '/products':
        document.title = 'Our Products | Your Website';
        break;
      // Add other cases for different routes
      default:
        document.title = 'Your Website';
    }
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
