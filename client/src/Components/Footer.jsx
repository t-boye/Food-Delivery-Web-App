import React from "react";
import { motion } from "framer-motion";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const background = "linear-gradient(117deg, #0EB0AA 1.01%, #11474B 86.78%)";

const Footer = () => {
  return (
    <div className="bg-gray-800 border-t-2  relative  w-full mt-[20rem] ">
      <div className=" px-[5%] w-full absolute top-[-290px] lg:top-[-170px]">
        <div className="flex flex-col py-12 gap-y-4 lg:gap-y-0 lg:py-0 lg:flex-row justify-between items-center lg:px-[13%]  lg:h-[230px] w-full rounded-lg bg-[#0EB0AA]">
          <div className="flex flex-col items-center justify-center gap-y-6 text-white">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="flex justify-center items-center w-[70px] h-[70px] rounded-full text-white text-[35px] cursor-pointer hover:text-[#0A66C2] bg-[#d44646] "
            >
              <IoCall />
            </motion.span>
            <p className="">+1 (000) 000-0000</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-6 text-white">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="flex justify-center items-center  w-[70px] h-[70px] rounded-full text-white text-[35px] cursor-pointer hover:text-[#0A66C2] bg-[#d44646] "
            >
              <MdEmail />
            </motion.span>
            <p className="">myfoodapp@hotmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-6 text-white">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="flex justify-center items-center w-[70px] h-[70px] rounded-full text-white text-[35px] cursor-pointer hover:text-[#0A66C2] bg-[#d44646] "
            >
              <FaLocationDot />
            </motion.span>
            <p className="px-4 text-center">Abeka - Accra </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap pb-12 flex-col lg:flex-row justify-between lh-[416px] px-[5%] pt-[80px]"
        style={{ background: background }}
      >
        <div className="">
          <h1
            id="logo"
            className="dancing-script  font-bold text-3xl cursor-pointer text-white"
          >
            My Food App
          </h1>
          <p className="w-[300px] text-white py-5">
            our all-in-one solution for recipes, restaurant recommendations, and
            personalized dietary guidance. Whether you're a cooking enthusiast
            or looking for convenient dining options, our app has you covered.
          </p>
          <div className="flex items-center mt-1 text-xl gap-x-2">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="cursor-pointer w-[40px] flex items-center justify-center text-2xl h-[40px] bg-white  rounded-full text-blue-600"
            >
              <FaFacebook className="cursor-pointer" />
            </motion.span>
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className=" cursor-pointer w-[40px] flex items-center justify-center text-2xl h-[40px] bg-white rounded-full text-[#0A66C2]"
            >
              <FaLinkedin className="cursor-pointer" />
            </motion.span>
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              span
              className=" cursor-pointer w-[40px] flex items-center justify-center text-2xl h-[40px] bg-white k rounded-full text-[#1DA1F2]"
            >
              <FaTwitter className="cursor-pointer" />
            </motion.span>
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              span
              className="cursor-pointer w-[40px] flex items-center justify-center text-2xl h-[40px] bg-white  rounded-full text-[#CD201F]"
            >
              <FaYoutube className="cursor-pointer" />
            </motion.span>
          </div>
        </div>
        <div className="px-[5%] lg:px-0 justify- flex flex-wrap mt-12 lg:mt-0 lg:items-center gap-x-16">
          <div className="flex flex-col lg:items-center">
            <h1 className="font-head text-[24px] font-medium mr-10 text-white pb-6 flex lg:justify-centers">
              Quick Links
            </h1>
            <ul className="text-white flex flex-col justify-center gap-y-2 text-[16px] font-normal ">
              <a href="./Home" className="Home">
                <li className="list-item pb-2 cursor-pointer hover:animate-pulse ">
                  Home
                </li>
              </a>

              <a href="./Services" className="Services">
                <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                  Services
                </li>
              </a>
              <a href="./About" className="About">
                <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                  About Us
                </li>
              </a>
              <a href="./ContactUs" className="ContactUs">
                <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                  Contact Us
                </li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center">
            <h1 className="font-head text-[24px] font-medium mr-10 text-white pb-6 flex lg:justify-center">
              Our Menu
            </h1>
            <ul className="text-white flex flex-col justify-center gap-y-2 text-[16px] font-normal ">
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse ">
                Burger
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                Banku
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                Chicken
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                Baryani
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center">
            <h1 className="font-head text-[24px] font-medium mr-10 text-white pb-6 flex lg:justify-center">
              Contact Us
            </h1>
            <ul className="text-white flex flex-col justify-center gap-y-2 text-[16px] font-normal ">
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse ">
                +233 593 501 488
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                +233 506 465 843
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                myfoodapp@gmail.com
              </li>
              <li className="list-item pb-2 cursor-pointer hover:animate-pulse">
                myfoodapp@hotmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center">
            <h1 className="font-head text-[24px] font-medium mr-10 text-white pb-4 flex lg:justify-center">
              Newsletter
            </h1>
            <p className="text-white text-md lg:text-center pb-4">
              Stay up-to-date with our latest news, updates, <br />
              and exclusive offers by signing up for our newsletter.
            </p>
            <div className="text-white flex flex-col justify-center gap-y-2 text-[16px] font-normal ">
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4"
                />
              </form>
              <button
                type="submit"
                className="bg-[#d44646] hover:bg-transparent border border-blue  text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: background }}
        className="flex font-semibold justify-center w-full items-center py-2 border-t-2 border-white text-white  "
      >
        <p className="text-1xl">
          © 2024 Copyright
          <span className="pl-4 pr-3 text-1xl dancing-script">
            My Food App
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
