import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold tracking-wider">
          Gaming Website
        </div>
        <div className="flex space-x-8">
          <Link 
            to="/" 
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Games
          </Link>
          <Link 
            to="/about" 
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Services
          </Link>
          <Link 
            to="/payments" 
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Payments
          </Link>
        </div>
      </div>
    </nav>
  );
}
