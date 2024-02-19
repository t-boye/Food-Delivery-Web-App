import Slider from "react-slick";
// import react from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Chef from "../../assets/Images/chef.avif";
import React from "react";

const data = [
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
  {
    name: `chef.Joshan`,
    review: "UI/UX Designer and Kotlin Develop",
    img: { Chef },
  },
];
const TeamCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full sm:px-12 px-4   ">
      <div className="mt-[19px] w-full">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="w-full   text-black border-2 pt-6 rounded-[20px] border-t-[10px] border-t-[#0EB0AA] border-l-[10px] border-l-[#0EB0AA] "
            >
              <div className=" flex justify-center items-center rounded-t-xl border-2 border-red-500 ">
                <img
                  src={d.img}
                  width={150}
                  height={150}
                  alt="ourTeam pic"
                  className="h-44 w-44 rounded-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <div className="flex items-center mt-1 text-xl gap-x-4">
                  <FaFacebook className="cursor-pointer" />
                  <FaLinkedin className="cursor-pointer" />
                  <FaTwitter className="cursor-pointer" />
                  <FaYoutube className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
