import React from "react";
import { Element } from "react-scroll";
import h1 from "../assets/Home/h1.png";
import h2 from "../assets/Home/h2.png";
import h3 from "../assets/Home/h3.png";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <Element name="home" className=" mt-20 lg:mt-28  ">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center text-black ">
          <div className="flex flex-col  items-center lg:items-start text-[clamp(1.25rem,4vw,3.75rem)] font-medium ">
            <span className="">Grow Smarter,</span>

            <span className="text-nowrap bg-gradient-to-b from-black via-gray-500 to-gray-300 bg-clip-text text-transparent">
              Invest with Confidence
            </span>
          </div>
          <div className="flex flex-col justify-between gap-5 items-center lg:items-end ">
            <p className="text-center lg:text-end text-gray-500">
              Smarter tools designed to help you grow your wealth effortlessly
              andtake control of your financial future.
            </p>
            <button className="py-2 px-5 rounded-3xl text-white bg-blue-400 shadow-sm hover:shadow-lg  hover:shadow-black/20 shadow-black/20  ">
              Get Starded
            </button>
          </div>
        </div>
        <div className=" overflow-y-hidden ">
          <div className="relative  flex justify-center items-center rounded-4xl z-0 h-96 bg-gradient-to-b from-gray-50 via-secondary to-gray-50 bg-secondary mt-20">
            <Parallax speed={20}>
              <img className="w-50 z-10" src={h1} alt="image" />
            </Parallax>
            <img
              className=" hidden md:block absolute left-1/3 lg:-translate-x-40 md:-translate-x-48  -z-10 top-20 shadow-2xl rounded-3xl h-20 "
              src={h2}
              alt=""
            />
            <img
              className=" hidden md:block absolute right-1/3 lg:translate-x-28 md:translate-x-40  bottom-20 shadow-2xl rounded-3xl h-24 "
              src={h3}
              alt=""
            />

            <div className="bg-black rounded-3xl py-3 px-5 min-w-fit text-white hidden md:block absolute right-1/3 lg:translate-x-10 md:translate-x-40 top-20 text-sm">
              Build wealth, one step closer
            </div>
            <div className="bg-black rounded-3xl py-3 px-5 min-w-fit text-white hidden md:block absolute left-1/3 lg:-translate-x-10 md:-translate-x-40 bottom-10 text-sm">
              Smarter tools for better investing
            </div>

            <div className="absolute inset-0  inner-bottom-white  rounded-4xl" />
          </div>
        </div>
      </div>
    </Element>
  );
}
