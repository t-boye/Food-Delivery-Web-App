import React from "react";
import ChatImage from "../../assets/Images/ChatImage.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";

const navbar = () => {
  return (
    <div className="bg-green-500 py-4 px-[5%] flex items-center justify-between fixed left-0 w-full top-[4.5rem]">
      <div className="flex items-center gap-x-10">
        <div className="">
          <FaArrowLeft className="text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-4 ">
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              className="rounded-full h-[50px] w-[50px]"
              style={{ width: "50px" }}
              src={ChatImage}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="">johnson</h1>
            <p className="">Online</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-12 text-xl">
        <IoMdVideocam />
        <IoMdVideocam />
      </div>
    </div>
  );
};

export default navbar;
