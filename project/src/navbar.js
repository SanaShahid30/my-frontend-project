import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="https://thumbs.dreamstime.com/b/ocean-logo-design-abstract-waves-seagulls-89336091.jpg"
          alt="OceanView"
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <span className="text-2xl font-bold text-gray-700">OceanView</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-teal-600 cursor-pointer transition">Home</li>
        <li className="hover:text-teal-600 cursor-pointer transition">Rooms</li>
        <li className="hover:text-teal-600 cursor-pointer transition">Amenities</li>
        <li className="hover:text-teal-600 cursor-pointer transition">About</li>
        <li className="hover:text-teal-600 cursor-pointer transition">Contact</li>
      </ul>

      {/* Book Now Button */}
      <button className="px-5 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition">
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;
