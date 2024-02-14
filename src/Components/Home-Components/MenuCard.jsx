import React from "react";
import MenuImg from "../../assets/Images/FreshFood.jpg";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const MenuCard = () => {
  const cardVariants = {
    hover: {
      scale: 1.1,
      opacity: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="border-2 overflow-hidden flex flex-col pb-4 rounded-[30px] border-b-8 border-r-8 border-b-gray-700 border-r-gray-800">
      <div className="h-[12rem]">
        <motion.img
          className="w-full h-full"
          src={MenuImg}
          width={400}
          height={200}
          alt="CardImage"
          variants={cardVariants}
          whileHover="hover"
        />
      </div>
      <div className="p-[10px] text-white">
        <h3 className="foot-head font-medium text-2xl md:text-3xl pt-7">Special Food</h3>
      </div>
      <div className="flex items-center justify-between px-[10px]">
        <div className="flex items-center gap-x-1 text-xl text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="bg-[#d44646] w-12 md:w-16 h-12 md:h-16 shadow-md cursor-pointer shadow-gray-600 rounded-full flex items-center justify-center text-3xl md:text-5xl text-white">
          <p className="mb-1 md:mb-2">+</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;