import React from "react";

const WhyChoose = () => {
  return (
    <div className="pb-12 mt-64 px-5 md:mt-16">
      <h1 className="font-head text-5xl text-center pt-16 text-white pb-16 dancing-script">
        Why Choose Us?
      </h1>
      <div className="text-white flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <img
            src={("https://i.postimg.cc/C1kVGRHs/9446156.png")}
            className="w-32 h-32 md:w-[160px] md:h-[160px]  object-cover"
            alt="Fresh Food"
          />
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
          <img
            src={("https://i.postimg.cc/hPSfGnc5/10823283.png")}
            className="w-32 h-32 md:w-[160px] md:h-[160px]  object-cover"
            alt="Best Offers"
          />
          <h1 className="text-2xl md:text-3xl font-semibold dancing-script">
            Best Offers
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-400">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly
          </p>
        </div>
        <div className="w-full md:w-[30%] flex flex-col justify-center gap-y-3 items-center">
          <img
            src={("https://i.postimg.cc/Wzcq8JRN/4860866.png")}
            className="w-32 h-32 md:w-[160px] md:h-[160px]  object-cover"
            alt="Fast Delivery"
          />
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