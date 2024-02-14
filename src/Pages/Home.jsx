import React from "react";
import Hero from "../Components/Home-Components/Hero";
import FreshFood from "../Components/Home-Components/FreshFood";
import Reviews from "../Components/Home-Components/Reviews";
import WhyChoose from "../Components/Home-Components/WhyChoose";
import OurMenu from "../Components/Home-Components/OurMenu";

const Home = () => {
  return (
    <div>
      <Hero />
      <FreshFood />
      <WhyChoose />
      <OurMenu />
      <Reviews />
    </div>
  );
};

export default Home;
