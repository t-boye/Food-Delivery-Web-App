
import React from "react";
import Frehfood from "../../assets/Images/FreshFood.jpg";

const FreshFood = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-center mt-8">
      <div className="w-[100%] md:w-1/2 px-8 md:px-0">
        <img className="w-full h-full" src={Frehfood} alt="Fresh Food" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:text-2xl text-white text-center">
        <h1 className="font-head text-5xl">Fresh, Healthy, Organic</h1>
        <h2 className="font-head text-5xl">Delicious Fruits</h2>
        <p className="leading-8 py-9 tracking-wider px-4">
          Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food! Free food, free food!
        </p>
        <div className="justify-center">
        <a
          className="w-fit px-12 border bg-[#d44646] border-blue-300 rounded-md text-xl p-2 pl-16 focus:border-indigo-500 hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-5">
            Learn More
        </a>
        </div>
      </div>
    </div>
  );
};

export default FreshFood;
