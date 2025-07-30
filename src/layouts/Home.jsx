import React from "react";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <Element name="home" className="mt-28 px-10 lg:px-40">
      <div className="flex flex-col lg:flex-row justify-center items-center text-black">
        <div className="flex flex-col  items-center lg:items-start text-[clamp(1.25rem,4vw,3.75rem)] font-medium">
            <span className="">Grow Smarter,</span>
          
          <span className="text-nowrap bg-gradient-to-b from-black via-gray-500 to-gray-300 bg-clip-text text-transparent">Invest with Confidence</span>
        </div>
        <div className="flex flex-col justify-between gap-5 items-center lg:items-end bg-">
          <p className="text-center lg:text-end text-gray-500">
            Smarter tools designed to help you grow your wealth effortlessly andtake control of your financial future.
          </p>
          <button className="py-2 px-5 rounded-3xl text-white bg-blue-400 shadow-sm hover:shadow-lg  hover:shadow-black/20 shadow-black/20  ">
            Get Starded
          </button>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </Element>
  );
}
