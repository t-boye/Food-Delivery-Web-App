import React from "react";
import { IoBagAdd, IoFastFoodOutline } from "react-icons/io5";
import { PiCarProfileBold } from "react-icons/pi";
const WhyChoose = () => {
  return (
    <div className="pb-12 px-[5%]">
      <h1 className="text-5xl text-center text-white pb-16 dancing-script">
        Why Choose Us?
      </h1>
      <div className=" text-white flex items-center justify-between">
        <div className="w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <IoFastFoodOutline className="text-[160px] text-gray-500" />
          <h1 className="text-2xl font-semibold dancing-script">Fresh Food</h1>
          <p className="text-center text-[16px] text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>

        <div className="w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <IoBagAdd className="text-[160px] text-gray-500" />
          <h1 className="text-2xl font-semibold dancing-script">
            {" "}
            Best Offers
          </h1>
          <p className="text-center text-[16px] text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>
        <div className="w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <PiCarProfileBold className="text-[160px] text-gray-500" />
          <h1 className="text-2xl font-semibold dancing-script">
            Fast Devlivery
          </h1>
          <p className="text-center text-[16px] text-gray-400">
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
