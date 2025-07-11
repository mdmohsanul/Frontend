"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "@/data/people";

const Instructors = () => {
  return (
  <div className=" relative h-[40rem] overflow-hidden">
    <WavyBackground className="max-w-4xl mx-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
       Meet Our Instructors
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
       Discover the talented professional who will guide your musical journey
      </p>
      <div className="flex flex-row items-center justify-center mb-10 mt-20  w-full">
      <AnimatedTooltip items={people} />
    </div>
    </WavyBackground>
   
  </div>
   
  )
}

export default Instructors