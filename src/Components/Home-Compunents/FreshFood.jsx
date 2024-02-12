import React from "react";
import Frehfood from "../../assets/Images/FreshFood.jpg";

const FreshFood = () => {
  return (
    <div className="w-full h-[80vh] flex items-center gap-x-12 ">
      <div className="w-1/2 ">
        <img className="" width="100%" height="100%" src={Frehfood} />
      </div>
      <div className="w-1/2 text-white">
        <h1 className="dancing-script text-5xl">Fresh, Healthy, Organic</h1>
        <h1 className="dancing-script text-5xl">Delicious Fruits</h1>

        <p className="pr-24 leading-8 py-12 tracking-wider">
          Lingvanex free service instantly translates words, phrases to voice,
          audio files, podcast, documents, and web pages from Urdu to English
          and from English to ...
        </p>
        <a
          className="w-fit px-12 border bg-[#d44646] border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
          hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default FreshFood;
