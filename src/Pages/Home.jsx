import React from "react";
import Hero from "../Components/Home-Compunents/Hero";
import DessertsCarousel from "../Components/Home-Compunents/DessertsCarousel";
import FreshFood from "../Components/Home-Compunents/FreshFood";
import WhyChoose from "../Components/Home-Compunents/WhyChoose";
import OurMenu from "../Components/Home-Compunents/OurMenu";

const Home = () => {
  return (
    <div>
      <Hero />
      <DessertsCarousel />
      <FreshFood />
      <WhyChoose />
      <OurMenu />
    </div>
  );
};

export default Home;
