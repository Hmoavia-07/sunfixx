import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest('nav')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gradient-to-r from-blue-100 via-blue-600 to-blue-400 text-black shadow-2xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <h1 className="text-3xl font-bold">
          <a href="/">SunFix</a>
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
          <a href="#home" className="hover:underline transition duration-300 ease-in-out bg-gradient-to-r from-blue-800 via-blue-500 to-blue-100 rounded-full px-3 py-2">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:underline transition duration-300 ease-in-out bg-gradient-to-r from-blue-200 via-blue-600 to-blue-800 rounded-full px-3 py-2">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:underline transition duration-300 ease-in-out bg-gradient-to-r from-blue-200 via-blue-600 to-blue-800 rounded-full px-3 py-2">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline transition duration-300 ease-in-out bg-gradient-to-r from-blue-100 via-blue-600 to-blue-900 rounded-full px-3 py-2">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 py-2 shadow-lg">
          <ul className="flex flex-col space-y-2 text-center">
            <li>
              <a href="/" className="hover:underline transition duration-200">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:underline transition duration-200">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:underline transition duration-200">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline transition duration-200">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
