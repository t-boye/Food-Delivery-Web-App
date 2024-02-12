import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Burger from "../../assets/Images/slide1.png";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container   mx-[5%] my-12 ">
      <Slider className="px-[.3rem] " {...settings}>
        {data.map((item) => {
          return (
            <div className="flex gap-x-12" key={item.name}>
              <div className="bg-[#3c3a3a] h-[25vh] rounded-lg shadow-md shadow-[white] relative overflow-hidden ">
                <div className="flex items-center text-white gap-x-4 ">
                  <div className="">
                    <img className="" src={item.img} height={100} width={160} />
                  </div>
                  <div className="">
                    <h1 className="dancing-scrip"> {item.name}</h1>
                    <p className="">{item.price}</p>
                  </div>
                  <div className="pb-3 pr-3 bg-green-500 rounded-full h-14 w-14 text-white font-bold cursor-pointer absolute bottom-[-3%] right-[-5%] flex items-center justify-center text-2xl">
                    +
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
const data = [
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
  {
    name: `Checken Fry`,
    price: `$ ${14}`,
    img: Burger,
  },
];
