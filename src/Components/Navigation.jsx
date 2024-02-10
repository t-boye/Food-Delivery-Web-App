import React, { useState } from 'react';
import '../index.css'
import '../App.css'

function Navigation  () {
  const [toggle, setToggle] = useState(false);

  const userLinks = [
    { name: 'Settings', link: '/settings' },
    { name: 'Logout', link: '/logout' },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer text-gray-800">My Food App</div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search restaurants or dishes"
            className="border border-gray-300 rounded-md p-2 pl-10 w-64 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
            Search
          </button>
        </div>

        {/* User Profile Dropdown */}
        <div className="flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="focus:outline-none block hidden md:flex items-center text-gray-800 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md ${
              toggle ? 'block' : 'hidden'
            }`}
          >
            {userLinks.map((link) => (
              <li key={link.name} className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
