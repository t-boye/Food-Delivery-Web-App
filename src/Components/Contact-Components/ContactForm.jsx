import React from "react";
import  "./Contact-style.css"
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="pt-24 text-white">
      <div className="flex justify-center flex-col items-center text-wrap">
        <h1 className="font-head text-[36px] text-center font-medium">
          Contact Us
        </h1>
        <p className="px-4 md:w-[550px] font-medium text-[19px] leading-6 text-center">
          At Extrem Soft, we are eager to hear from you and explore the endless
          possibilities for your digital success.
        </p>
      </div>
      <form>
        <div className="px-[5%] mt-10 lg:px-[20%]">
          <div className="flex flex-col md:items-center w-full">
            <div className="md:flex items-center outline-none gap-x-6 mb-4 w-full">
              <div className="w-full md:w-1/2">
                <p className="label stext-[19px] font-semibold pb-2">Name</p>
                <input
                  className="w-full text-white h-[60px] bg-[#11474B] rounded-md px-6"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="label text-[19px] font-semibold pb-2">Email</p>
                <input
                  className="w-full h-[60px] text-white bg-[#11474B] rounded-md px-6"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="md:flex items-center outline-none gap-x-6 mb-4 w-full">
              <div className="w-full md:w-1/2">
                <p className="label text-[19px] font-semibold pb-2">Phone Number</p>
                <input
                  className="w-full h-[60px] bg-[#11474B] text-white rounded-md px-6"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="label text-[19px] font-semibold pb-2">Country</p>
                <input
                  className="w-full h-[60px] bg-[#11474B] text-white rounded-md px-6"
                  placeholder="Enter your country"
                />
              </div>
            </div>
            <div className="md:flex items-center outline-none gap-x-6 mb-4 w-full">
              <div className="w-full">
                <p className="label text-[19px] font-semibold pb-2">Message</p>
                <textarea
                  className="w-full h-[120px] bg-[#11474B] text-white rounded-md px-6 py-4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-center">
            <button
              type="submit"
              className="flex gap-x-2 items-center text-[24px] font-medium text-white py-[8px] px-[18px] mt-6 rounded-md bg-[#F35542]"
            >
              Send
              <IoIosSend className="text-2xl" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
