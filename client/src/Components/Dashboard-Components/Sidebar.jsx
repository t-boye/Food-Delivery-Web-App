import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import { LuCar } from "react-icons/lu";
import { FcProcess } from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={`${
        openSidebarToggle
          ? "fixed left-0 top-0 w-64 bg-gray-800 text-white z-50 transition duration-300 ease-in-out overflow-y-auto"
          : ""
      }`}
    >
      <div className="sidebar-title flex items-center justify-between p-4">
        <div className="sidebar-brand flex items-center">
          <BsCart3 className="icon_header text-3xl mr-2" />
          <h1 className="dancing-script text-xl font-bold text-white">
            My Food App
          </h1>
        </div>
        <span
          className="icon close_icon cursor-pointer text-2xl"
          onClick={OpenSidebar}
        >
          &times;
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsGrid1X2Fill className="icon text-xl mr-4" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsFillArchiveFill className="icon text-xl mr-4" />
            Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsFillGrid3X3GapFill className="icon text-xl mr-4" />
            Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsPeopleFill className="icon text-xl mr-4" />
            Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <IoFastFoodOutline className="icon text-xl mr-4" />
            Orders
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <FcProcess className="icon text-xl mr-4" />
            Processed
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <LuCar className="icon text-xl mr-4" />
            Delivered
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsListCheck className="icon text-xl mr-4" />
            Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsMenuButtonWideFill className="icon text-xl mr-4" />
            Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-gray-700 rounded-md"
          >
            <BsFillGearFill className="icon text-xl mr-4" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
