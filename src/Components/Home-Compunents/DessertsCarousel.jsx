import React from "react";
import Slider from "react-slick";
import Burger from "../../assets/Images/slide1.png";

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adapt as needed
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Add autoplay if desired
    autoplaySpeed: 2000, // Adjust autoplay speed if enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container mx-[5%] my-12">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.name}
            className="slide-item flex gap-x-12 animate__animated animate__fadeIn"
          >
            <div
              className="card bg-[#3c3a3a] h-[25vh] rounded-lg shadow-md shadow-[white] relative overflow-hidden flex flex-col justify-between text-white"
            >
              <div className="image-container px-3">
                <img src={item.img} alt={item.name} height={100} width={160} />
              </div>
              <div className="content-container px-3 py-2">
                <h1 className="dancing-scrip">{item.name}</h1>
                <p className="">{item.price}</p>
              </div>
              <div className="add-button pb-3 pr-3 bg-green-500 rounded-full h-14 w-14 text-white font-bold cursor-pointer flex items-center justify-center text-2xl">
                +
              </div>
            </div>
          </div>
        ))}
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
