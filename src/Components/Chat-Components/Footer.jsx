import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-500 fixed bottom-0 left-0 w-full p-4 text-[white] flex justify-between  items-center ">
      <div className="w-[10%] flex items-center justify-center">
        <FaPlus className="text-3xl cursor-pointer" />
      </div>
      <div className="py-3 px-3 rounded-md bg-gray-400 w-[80%] text-black">
        <input
          className="w-full h-full outline-none bg-transparent text-black"
          placeholder="Write message"
        />
      </div>
      <div className="w-[10%] flex items-center justify-center">
        <IoIosSend className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
