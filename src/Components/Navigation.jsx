import React, { useState } from "react";
import "../index.css";
import "../App.css";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  const userLinks = [
    { name: "Settings", link: "/settings" },
    { name: "Sign In", link: "/log In" },
    { name: "Sign out", link: "/Signout" },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div
          id="logo"
          className="dancing-script  font-bold text-3xl cursor-pointer text-white"
        >
          My Food App
        </div>

        {/* Links */}
        <div className="font-head hidden md:flex items-center space-x-4">
          <a
            href="/Home"
            className="hover:border-b-2 text-white hover:border-blue-500 font-bold text-xl"
          >
            Home
          </a>
          <a
            href="/About"
            className="hover:border-b-2 text-white hover:border-blue-500 font-bold text-xl"
          >
            About
          </a>

          <a
            href="ContactUs"
            className="hover:border-b-2 text-white hover:border-blue-500 font-bold text-xl"
          >
            Contact
          </a>
          <div className="flex items-center hover:text-gray-600 lg:hidden">
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
            <ul
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md ${
                toggle ? "block" : "hidden"
              }`}
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
            >
              {userLinks.map((link) => (
                <li
                  key={link.name}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="focus:outline-none block hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul
            className={`absolute top-0 left-0 mt-2 w-48 bg-white border border-gray-30 rounded-md shadow-md ${
              toggle ? "block" : "hidden"
            }`}
          >
            <ul className="">
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <a href="/home">Home</a>
              </li>
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <a href="/about">About</a>
              </li>
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <a href="/services">Contact</a>
              </li>

            </ul>

            {/* Links from userLinks first */}
            {userLinks.map((link) => (
              <li
                key={link.name}
                className="px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search restaurants or dishes"
            className="border border-gray-300 rounded-md p-2 pl-10 w-64 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <button className="ml-4 bg-[#d44646] border-blue-300 border hover:bg-transparent text-white font-bold py-2 px-4 rounded-md">
            Search
          </button>
        </div>

        {/* Sign In and Sign Out */}
        <div className="sign-container hidden md:block text-white">
          <a
            href="/sign-in"
            className="border bg-[#d44646] border-blue-300 rounded-md p-2 pl-5 w-64 
        focus:border-indigo-500
        hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign In
          </a>
          <a
            href="/sign-out"
            className="border border-blue-300 rounded-md p-2 pl-5 w-64 
        hover:bg-[#e63b3b]
        focus:border-[#d44646] focus:ring-[#d44646] focus:ring-opacity-50"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
