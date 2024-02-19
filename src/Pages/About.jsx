import React from "react";
import About_main from "../Components/About-Component/About_main";
import Hero from "../Components/About-Component/Hero";
import TeamCarousel from "../Components/About-Component/TeamCarousel";
import AppPerfomance from "../Components/About-Component/AppPerfomance";

export default function About() {
  return (
    <div className="bg-gray-200 ">
      <Hero />
      <About_main />
      <div className="h-screen">
        <h1 className="dancing-script  font-extrabold text-5xl py-12 text-center ">
          Our Teams
        </h1>
        <TeamCarousel />
      </div>
      <AppPerfomance />
    </div>
  );
}
