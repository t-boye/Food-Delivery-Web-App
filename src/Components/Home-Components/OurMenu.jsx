import React from "react";
import MenuCard from "./MenuCard";

const OurMenu = () => {
  return (
    <div className="">
      <h2 className="font-head text-center pt-10 text-5xl font-semibold pb-5 text-white">
        Explore Our Menu
      </h2>
      <hr className="w-10 h-3 color-red pl" />

      <div className="flex flex-wrap justify-center gap-16 mt-12 pb-12 px-10">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div className="flex items-center justify-center">
        <a
          className="w-fit text-white px-12 border bg-[#d44646]  border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
        hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50 "
        >
          <span className="pl-8">View More</span>
        </a>
      </div>
    </div>
  );
};

export default OurMenu;