/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-lg font-semibold">
            eBottles.com
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Portfolio
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto py-4">
            <a href="#" className="block text-white py-2">
              Home
            </a>
            <a href="#" className="block text-white py-2">
              About
            </a>
            <a href="#" className="block text-white py-2">
              Services
            </a>
            <a href="#" className="block text-white py-2">
              Portfolio
            </a>
            <a href="#" className="block text-white py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
