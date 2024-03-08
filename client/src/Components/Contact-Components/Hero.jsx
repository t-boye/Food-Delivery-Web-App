import React from "react";
// import { motion } from "framer-motion";

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
    <div className="contact mt-16 w-full bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:h-[80vh] ">
        <div className="left-container text-white w-full px-8 md:px-12 lg:px-20">
          <div className="font-head text-4xl md:text-6xl text-center md:text-left">
            <h1 className="">Get in Touch with Us</h1>
            <h1 className="my-3">Your feedback matters</h1>
          </div>

          <div className="mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-x-4">
            <a
              className="w-fit justify-content px-8 md:px-12 border bg-[#d44646] border-blue-300 rounded-md text-lg md:text-xl p-2 pl-4 md:pl-5  focus:border-indigo-500
                hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Call Now
            </a>
            <a
              className="w-fit px-8 md:px-12 border bg-transparent cursor-pointer border-blue-300 rounded-md text-lg md:text-xl p-2 pl-4 md:pl-5  focus:border-indigo-500
                hover:bg-[#e63b3b] focus:ring-indigo-500 focus:ring-opacity-50"
            >
              See Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
