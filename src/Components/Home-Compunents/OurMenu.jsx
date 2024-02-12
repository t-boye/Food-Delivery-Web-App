import React from "react";
import MenuCard from "./MenuCard";
const OurMenu = () => {
  return (
    <div className="">
      <h1 className="text-center text-5xl font-semibold pb-7 text-white">
        Explore Your Menu
      </h1>
      <div className=" flex items-center justify-end pr-12">
        <a
          className="w-fit text-white px-12 border bg-green-500 border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
        hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
        >
          View More
        </a>
      </div>
      <div className="grid grid-cols-3 gap-12  mt-12  pb-12 px-12">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
};

export default OurMenu;
