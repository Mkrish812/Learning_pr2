import React from "react";
import { Element } from "react-scroll";
import h1 from "../assets/Home/h1.png";
import h2 from "../assets/Home/h2.png";
import h3 from "../assets/Home/h3.png";
import { Parallax } from "react-scroll-parallax";
import c1 from "../assets/Companies/amazon.svg";
import c2 from "../assets/Companies/google.svg";
import c3 from "../assets/Companies/lenovo.svg";
import c4 from "../assets/Companies/paypal.svg";
import c5 from "../assets/Companies/shopify.svg";

export default function Home() {
  const logo = [c1, c2, c3, c4, c5]
  return (
    <Element name="home" className="mt-20 lg:mt-28">
      <div className="container">
        <div className="flex flex-col items-center justify-between text-black lg:flex-row">
          <div className="flex flex-col items-center text-[clamp(1.25rem,4vw,3.75rem)] font-medium lg:items-start">
            <span className="">Grow Smarter,</span>

            <span className="bg-gradient-to-b from-black via-gray-500 to-gray-300 bg-clip-text text-nowrap text-transparent">
              Invest with Confidence
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:items-end">
            <p className="text-center text-gray-500 lg:text-end">
              Smarter tools designed to help you grow your wealth effortlessly
              andtake control of your financial future.
            </p>
            <button className="rounded-3xl bg-blue-400 px-5 py-2 text-white shadow-sm shadow-black/20 hover:shadow-lg hover:shadow-black/20">
              Get Starded
            </button>
          </div>
        </div>
        <div className="overflow-y-hidden">
          <div className="via-secondary bg-secondary relative z-0 mt-20 flex h-96 items-center justify-center rounded-4xl bg-gradient-to-b from-gray-50 to-gray-50">
            <Parallax speed={20}>
              <img className="z-10 w-50" src={h1} alt="image" />
            </Parallax>
            <img
              className="absolute top-20 left-1/3 -z-10 hidden h-20 rounded-3xl shadow-2xl md:block md:-translate-x-48 lg:-translate-x-40"
              src={h2}
              alt=""
            />
            <img
              className="absolute right-1/3 bottom-20 hidden h-24 rounded-3xl shadow-2xl md:block md:translate-x-40 lg:translate-x-28"
              src={h3}
              alt=""
            />

            <div className="absolute top-20 right-1/3 hidden min-w-fit rounded-3xl bg-black px-5 py-3 text-sm text-white md:block md:translate-x-40 lg:translate-x-10">
              Build wealth, one step closer
            </div>
            <div className="absolute bottom-10 left-1/3 hidden min-w-fit rounded-3xl bg-black px-5 py-3 text-sm text-white md:block md:-translate-x-40 lg:-translate-x-10">
              Smarter tools for better investing
            </div>

            <div className="inner-bottom-white absolute inset-0 rounded-4xl" />
          </div>
        </div>
      </div>

      <div className="inner-y-white container mt-20 overflow-hidden ">
        <h3 className="mb-5 text-center font-light text-gray-600">
          Trusted by the leaders
        </h3>
           <div className="animate-scroll-x relative -z-30  flex items-center gap-10 px-5 py-4 lg:gap-20 ">
          {[...logo, ...logo].map((src, i) => (
            <img key={i} src={src} alt="" className="h-10 lg:h-14" />
          ))}
        </div>
          
      
      
         
        
      </div>
    </Element>
  );
}
