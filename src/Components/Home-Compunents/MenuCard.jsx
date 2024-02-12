import React from "react";
import MenuImg from "../../assets/Images/FreshFood.jpg";
import { FaStar } from "react-icons/fa";
const MenuCard = () => {
  return (
    <div className="border-2 overflow-hidden flex flex-col pb-4   rounded-[30px]  border-b-8 border-r-8 border-b-[#0EB0AA] border-r-[#0EB0AA]">
      <div className="h-[12rem] ">
        <img
          className=""
          src={MenuImg}
          width={400}
          height={200}
          alt="CardImage"
        />
      </div>
      <div className="p-[10px] text-white">
        <h1 className="  font-medium text-[24px] pt-7">Special Food</h1>
      </div>
      <div className="flex items-center justify-between px-[10px]">
        <div className="flex items-center gap-x-1 text-xl text-green-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="  bg-green-500  w-16 h-16 shadow-md cursor-pointer shadow-white rounded-full  flex items-center justify-center text-5xl   text-white ">
          <p className="mb-2">+</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
