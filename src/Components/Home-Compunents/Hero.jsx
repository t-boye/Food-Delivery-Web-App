import React from "react";
import { motion } from "framer-motion";
import Food from "../../assets/Images/Burger.png";

const Hero = () => {
  //  animation variants for the image
  const imageVariants = {
    hover: {
      scale: 1.1,
      opacity: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="Hero-section mt-16 px-[2%] pt-12 h-screen w-full bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-between border-[5px] h-[90vh] border-white rounded-2xl">
        {/* left container*/}
        <div className="left-container text-white w-1/2 px-[3%] ">
          <div className="dancing-script text-6xl">
            <h1 className="">We Provide</h1>
            <h1 className="my-3">delivery Within</h1>
            <h1 className="text-[#d44646]">30 min</h1>
          </div>

          <div className="mt-12 flex items-center gap-x-4">
            <a
              className="w-fit px-12 border bg-[#d44646] border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
                hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Order Now
            </a>
            <a
              className="w-fit px-12 border bg-transparent cursor-pointer border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
                hover:bg-[#e63b3b] focus:ring-indigo-500 focus:ring-opacity-50"
            >
              See Menu
            </a>
          </div>
        </div>

        {/* right container / Image Container */}
        <div className="w-1/2">
          <motion.img
            className=""
            src={Food}
            width={600}
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
