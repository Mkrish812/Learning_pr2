import { Star } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import testimonials from "../components/ReviewsData";
import CountUp from "react-countup";


export default function Reviews() {

  return (
    <Element name="reviews" className=" py-10 ">
      <div className="container">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Reviews
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Real Stories, Real Results
          </h1>
        </div>
        <div className="overflow-hidden inner-y-white  ">
          <div className="flex items-center gap-10 px-5 py-4 lg:gap-20 animate-scroll-review-x relative -z-30 ">
            {         
            testimonials.map((items) => (
              <div
                key={items.id}
                className="bg-secondary relative flex h-64 max-w-xs min-w-xs flex-col gap-10 rounded-xl px-10 py-5 shadow-xl md:h-60 md:max-w-md"
              >
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-300 text-amber-300"
                      strokeWidth={1.75}
                    />
                  ))}
                </div>
                <p className="text-gray-500">{items.text}</p>
                <div className="absolute bottom-5 flex gap-2">
                  <img
                    src={items.image}
                    className="size-10 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col text-sm">
                    <h3>{items.name}</h3>
                    <p className="text-gray-500">{items.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden inner-y-white  ">
          <div className="flex items-center gap-10 px-5 py-4 lg:gap-20 animate-scroll-review-xrev -translate-x-[100%] relative -z-30 ">
            {         
            testimonials.map((items) => (
              <div
                key={items.id}
                className="bg-secondary relative flex h-64 max-w-xs min-w-xs flex-col gap-10 rounded-xl px-10 py-5 shadow-xl md:h-60 md:max-w-md"
              >
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-300 text-amber-300"
                      strokeWidth={1.75}
                    />
                  ))}
                </div>
                <p className="text-gray-500">{items.text}</p>
                <div className="absolute bottom-5 flex gap-2">
                  <img
                    src={items.image}
                    className="size-10 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col text-sm">
                    <h3>{items.name}</h3>
                    <p className="text-gray-500">{items.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 ">
             <div className="flex flex-col md:flex-row md:gap-7 gap-3  ">
                <div className="flex flex-col">
                    <p className="text-6xl font-medium text-center"> <CountUp end={23} duration={2} enableScrollSpy scrollSpyOnce />K+</p>
                    <p className="text-gray-500 text-center text-sm md:text-lg">Happy Users</p>
                </div>
                <div className="bg-gray-200  w-0.5 my-3 "></div>
                <div className="flex flex-col">
                    <p className="text-6xl font-medium text-center"> <CountUp end={99} duration={2} enableScrollSpy scrollSpyOnce />%</p>
                    <p className="text-gray-500 text-center text-sm md:text-lg">Uptime</p>
                </div>
                <div className="bg-gray-200  w-0.5 my-3"></div>
                <div className="flex flex-col">
                    <p className=" text-6xl font-medium text-center"> <CountUp end={500} duration={5} enableScrollSpy scrollSpyOnce />M+</p>
                    <p className="text-gray-500 text-center text-sm md:text-lg">Happy Users</p>
                </div>
             </div>
        </div>
      </div>
    </Element>
  );
}
