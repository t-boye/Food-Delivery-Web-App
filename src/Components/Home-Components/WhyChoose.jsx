import React from "react";
import { IoBagAdd, IoFastFoodOutline } from "react-icons/io5";
import { PiCarProfileBold } from "react-icons/pi";

const WhyChoose = () => {
  return (
    <div className="pb-12 mt-36 px-5 md:mt-16">
      <h1 className="font-head text-5xl text-center text-white pb-16 dancing-script">
        Why Choose Us?
      </h1>
      <div className="text-white flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <IoFastFoodOutline className="text-6xl md:text-[160px] text-gray-500" />
          <h1 className="text-2xl md:text-3xl font-semibold dancing-script">
            Fresh Food
          </h1>
          <p className="text-center text-sm md:text-base text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>

        <div className="w-full md:w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <IoBagAdd className="text-6xl md:text-[160px] text-gray-500" />
          <h1 className="text-2xl md:text-3xl font-semibold dancing-script">
            Best Offers
          </h1>
          <p className="text-center text-sm md:text-base text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>
        <div className="w-full md:w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <PiCarProfileBold className="text-6xl md:text-[160px] text-gray-500" />
          <h1 className="text-2xl md:text-3xl font-semibold dancing-script">
            Fast Delivery
          </h1>
          <p className="text-center text-sm md:text-base text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;