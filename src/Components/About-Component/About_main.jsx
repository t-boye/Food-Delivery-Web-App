import React from "react";
// import "./About_Style.css";
import TeamCarousel from "../About-Component/TeamCarousel";
function About() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 pt-24 pb-24">
      {/* Introduction */}
      <div className="flex flex-wrap md:flex-row gap-10 overflow-hidden max-w-7xl mx-auto rounded-xl pb-10 shadow-md md:shadow-8xl justify-center">
        <div className="md:text-center w-full md:w-1/2 px-8">
          <h3 className="font-head text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            About My Food App
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-loose">
            My Food App is your one-stop shop for discovering exciting culinary
            experiences. We connect you with a wide variety of restaurants and
            cuisines, offering a convenient and delightful way to explore the
            world of food.
          </p>
        </div>
      </div>

      {/* Story and "Need for My Food App" */}
      <div className="flex flex-col pt-16 items-center gap-10 mb-20 max-w-7xl mx-auto">
        <h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          Need for My Food App
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10 leading-loose">
          In today's fast-paced world, finding the time and energy to research
          and discover new restaurants can be challenging and find good healthy
          food around you. My Food App makes it easy. With our curated selection
          of restaurants, intuitive search filters, and personalized
          recommendations, you can effortlessly find the perfect meal for any
          occasion.
        </p>
      </div>
    </div>
  );
}

export default About;
