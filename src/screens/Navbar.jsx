import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Gaming Website
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-100 hover:text-white">Games</Link>
          <Link to="/about" className="text-gray-100 hover:text-white">About</Link>
          <Link to="/services" className="text-gray-100 hover:text-white">Services</Link>
          <Link to="/payments" className="text-gray-100 hover:text-white">Payments</Link>
        </div>
      </div>
    </nav>
  );
}
