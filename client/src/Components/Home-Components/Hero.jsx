import React from "react";
import { motion } from "framer-motion";
import Chef from "../../assets/Images/chef-vector-bg-removed.png"

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
    <div className="Hero-section mt-16  w-full bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between border-[3px] md:h-[80vh] border-white rounded-2xl">
        {/* left container */}
        <div className="left-container text-white w-full md:w-1/2 px-4 md:px-12 lg:px-20">
          <div className="font-head text-6xl md:text-6xl text-center md:text-left">
            <h1 className="lg:text-8xl">We Provide</h1>
            <h1 className="my-3 lg:text-8xl">delivery Within</h1>
            <h1 className="text-[#d44646] lg:text-6xl">30 min</h1>
          </div>

          <div className="mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-x-4">
            <a
              className="w-fit px-8 md:px-12 border bg-[#d44646] border-blue-300 rounded-md text-lg md:text-xl p-2 pl-4 md:pl-5  focus:border-indigo-500
                hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Order Now
            </a>
            <a
              className="w-fit px-8 md:px-12 border bg-transparent cursor-pointer border-blue-300 rounded-md text-lg md:text-xl p-2 pl-4 md:pl-5  focus:border-indigo-500
                hover:bg-[#e63b3b] focus:ring-indigo-500 focus:ring-opacity-50"
            >
              See Menu
            </a>
          </div>
        </div>

        {/* right container / Image Container */}
        <div className="lg:pl-64 md:w-1/2 mt-8 md:mt-4">
          <motion.img
            className=""
            src={Chef}
            height={150}
            width={500}
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;