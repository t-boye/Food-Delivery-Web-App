import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="review-section">
      <h2 className="font-head text-center pt-32 text-5xl font-semibold pb-5 text-white">
        Reviews
      </h2>
      <div className="reviews flex flex-wrap">
        <div className="review w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="head-review mx-auto w-48 h-48 md:w-64 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              className="w-full h-full rounded-full object-cover shadow-lg"
              alt="Review 1"
            />
          </div>
          <div className="body-review bg-gray-200 p-8 shadow">
            <div className="name-review text-2xl text-gray-800 mb-1">Mudassir</div>
            <div className="place-review italic text-red-500">Pakistan</div>
          {/* Review stars */}
          <div className="flex items-center justify-between px-[10px]">
        <div className="flex items-center pl-11 gap-x-1 text-xl text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            </div>
            <div className="desc-review leading-6 text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
            </div>
          </div>
        </div>
        <div className="review w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="head-review mx-auto w-48 h-48 md:w-64 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              className="rev_img w-full h-full rounded-full object-cover shadow-lg"
              alt="Review 2"
            />
          </div>
          <div className="body-review bg-gray-200 p-8 shadow">
            <div className="name-review text-2xl text-gray-800 mb-1">Lucy Nabarise</div>
            <div className="place-review italic text-red-500">Madina - Accra</div>
            {/* Review stars */}
            <div className="flex items-center justify-between px-[10px]">
        <div className="flex items-center pl-11 gap-x-1 text-xl text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            </div>
            <div className="desc-review leading-6 text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
            </div>
          </div>
        </div>
        <div className="review w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="head-review mx-auto w-48 h-48 md:w-64 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className="rev_img w-full h-full rounded-full object-cover shadow-lg"
              alt="Review 3"
            />
          </div>
          <div className="body-review bg-gray-200 p-8 shadow">
            <div className="name-review text-2xl text-gray-800 mb-1">Michael Boye</div>
            <div className="place-review italic text-red-500">Abeka - Accra</div>
            {/* Review stars */}
            <div className="flex items-center justify-between px-[10px]">
        <div className="flex pl-11 items-center gap-x-1 text-xl text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaStarHalfAlt />
            </div>
            </div>
            <div className="desc-review leading-6 text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews 