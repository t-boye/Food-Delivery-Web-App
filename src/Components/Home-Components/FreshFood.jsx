
import React from "react";
import Freshfruit from "../../assets/Images/Fresh Fruits.jpg";


const FreshFood = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-center mt-8">
      <div className="w-full md:w-1/2 px-8 md:px-0">
        <img className="w-full h-[400px] md:h-[360px]" src={Freshfruit} alt="Fresh Food" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:text-2xl text-white text-center">
        <h1 className="font-head text-5xl">Fresh, Healthy, Organic</h1>
        <h2 className="font-head text-5xl">Delicious Fruits</h2>
        <p className="leading-8 py-7 tracking-wider px-5">
        Experience the goodness of fresh, healthy, organic, and delicious fruits. Indulge in nature's finest offerings with our wide selection of nutrient-rich fruits. From vibrant berries to juicy tropical favorites, our fruits are carefully sourced to ensure premium quality and exceptional taste. 
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
