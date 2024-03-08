import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdOutlineWatchLater } from "react-icons/md";
import { motion } from "framer-motion";

import React from "react";

const ContactServices = () => {
  return (
    <div className="px-[5%]  py-24 flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-y-0 items-center gap-x-24">
      <div className="w-full lg:w-1/2 ">
        <div className="">
          <h1 className="text-[24px] font-medium text-white">
            How Can I Schedule a Consultation with Extrem Soft?{" "}
          </h1>
          <p className="py-4 text-[16px] font-normal text-gray-400">
            Scheduling a consultation with Extrem Soft is simple! You can either
            drop us an email at info@extremsoft.com, call us directly at +1
            (555) 123-4567, or fill out our contact form with your details and
            preferred meeting time. We are eager to discuss your digital
            aspirations and provide personalized insights.
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-medium text-white">
            What Information Should I Include in My Inquiry?{" "}
          </h1>
          <p className="py-4 text-[16px] font-normal text-gray-400">
            To ensure a swift and accurate response, please include relevant
            details about your inquiry. For general inquiries, your name and a
            brief overview of your question or requirement are sufficient. If
            you have a specific project in mind, providing details about your
            goals and expectations will help us tailor our response to your
            needs.
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-medium text-white">
            Can I Visit Extrem Softs Office in Person?{" "}
          </h1>
          <p className="py-4 text-[16px] font-normal text-gray-400">
            Absolutely! We welcome visitors to our office. If you Id like to
            meet with our team in person, please schedule an appointment by
            reaching out through email, phone, or our contact form. Our office
            address is [Your Office Address]. We look forward to hosting you and
            discussing how we can collaborate to achieve your digital
            objectives.
          </p>
        </div>
      </div>

      <div className="w-[300px] sm:w-[500px] md:w-[620px] py-12 md:py-0 md:h-[600px] rounded-[60px] shadow-md border-t-[10px] border-r-[10px] border-t-[#F35542] border-r-[#F35542]">
        <div className="flex flex-col items-center justify-center gap-y-6 text-white mt-12">
          <motion.span
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            className="flex justify-center items-center hover:text-[#0A66C2] bg-[#d44646] w-[70px] h-[70px] rounded-full text-white text-[35px] "
          >
            <FaLocationDot />
          </motion.span>
          <div className="text-gray-400">
            <p className=" leading-5">5000 Thayer Center, STE</p>
            <p className=""> C Oakland, MD 21550</p>
          </div>
        </div>

        <div className="flex flex-col justify-between md:flex-row px-12">
          <div className="flex flex-col items-center justify-center gap-y-6 text-white mt-12">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="flex justify-center items-center hover:text-[#0A66C2] bg-[#d44646] w-[70px] h-[70px] rounded-full text-white text-[35px] "
            >
              <IoCall />
            </motion.span>
            <div className="text-gray-400">
              <p className="leading-5">+1 (000) 000-0000</p>
            </div>
          </div>

          <div className="hidden md:flex text-xl font-semibold mb-7 items-end text-white">
            Contact Info
          </div>

          <div className="flex flex-col items-center justify-center gap-y-6 text-white mt-12">
            <motion.span
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="flex justify-center items-center hover:text-[#0A66C2] bg-[#d44646] w-[70px] h-[70px] rounded-full text-white text-[35px] "
            >
              <MdEmail />
            </motion.span>
            <div className="text-gray-400">
              <p className=" leading-5">info@website.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-6 text-white mt-12">
          <motion.span
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            className="flex justify-center items-center hover:text-[#0A66C2] bg-[#d44646] w-[70px] h-[70px] rounded-full text-white text-[35px] "
          >
            <MdOutlineWatchLater />
          </motion.span>
          <div className="flex text-gray-400 flex-col items-center">
            <p className=" leading-5">Monday - Friday</p>
            <p className=""> 9am - 5pm</p>
            <p className="">Weekend - Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactServices;
