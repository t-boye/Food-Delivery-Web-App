import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <div className="menu-icon">
        <BsJustify
          className="icon text-2xl cursor-pointer"
          onClick={OpenSidebar}
        />
      </div>
      <div className="flex items-center">
        <BsSearch className="icon text-xl mr-4" />
        <input
          type="text"
          placeholder="Search"
          className="bg-white w-full text-gray-800 py-1 sm:px-3 lg:px-32 rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <BsFillBellFill className="icon text-xl" />
        <BsFillEnvelopeFill className="icon text-xl" />
        <BsPersonCircle className="icon text-xl" />
      </div>
    </header>
  );
}

export default Header;
