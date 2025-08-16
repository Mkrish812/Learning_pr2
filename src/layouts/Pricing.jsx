import { Box, Check } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";

export default function Pricing() {
  return (
    <Element name="integrations" className="bg-primary mt-10 py-10">
      <div className="container">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Pricing
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Plans for Every Stage
          </h1>
        </div>

        <div className="mx-auto grid grid-cols-1 place-content-center place-items-center gap-5 lg:grid-cols-3">
          {/* card------------------------------------1 */}
          <div className="flex w-full max-w-md flex-col gap-3 rounded-2xl bg-white px-6 py-10 shadow-lg md:max-w-none md:flex-row lg:max-w-md lg:flex-col">
            <div className="flex flex-col gap-3 md:flex-1 md:gap-x-7">
              <div className="flex items-center gap-3">
                <span className="bg-secondary flex size-10 items-center justify-center rounded-full">
                  <Box />
                </span>
                <span>Starter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-semibold text-black">$0</span>{" "}
                <span className="text-sm text-gray-500"> /mo</span>
              </div>
              <p className="text-gray-500">
                Perfect for small teams getting started with AI-powered project
                management.
              </p>
              <button className="mt-4 rounded-3xl bg-black py-3 text-center font-semibold text-white shadow-lg">
                Get Started
              </button>
            </div>

            <div className="mt-5 h-[1px] bg-gray-200"></div>
            <div className="flex flex-col md:flex-1">
              <div className="mt-7 flex flex-col gap-3 text-gray-500">
                <p className="flex items-center gap-3">
                  <Check /> <span>1 connected account</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Real-time dashboard access</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Basic reporting</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Email support</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Up to 2 team members</span>
                </p>
              </div>
            </div>
          </div>
          {/* card------------------------------------2 */}
          <div className="flex w-full max-w-md flex-col rounded-2xl pb-1 px-1 bg-transparent z-0 shadow-lg md:max-w-none relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-bl from-violet-700 via-blue-500 to-violet-500 -z-10 backdrop-blur-3xl animate-slow-spin scale-200 md:scale-220 lg:scale-170"></div>
            <p className="py-3 text-center text-sm text-white">Best Deal</p>
            <div className="flex flex-col gap-3 rounded-2xl bg-white px-6 py-10 shadow-md md:flex-row  lg:flex-col">
              <div className="flex flex-col gap-3 md:flex-1 md:gap-x-7">
                <div className="flex items-center gap-3">
                  <span className="bg-secondary flex size-10 items-center justify-center rounded-full">
                    <Box />
                  </span>
                  <span>Starter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-semibold text-black">$0</span>{" "}
                  <span className="text-sm text-gray-500"> /mo</span>
                </div>
                <p className="text-gray-500">
                  Ideal for growing teams who need deeper insights.
                </p>
                <button className=" rounded-3xl bg-gradient-to-bl from-blue-500 via-blue-600 to-blue-300 py-3 text-center font-semibold text-white shadow-lg">
                  Get Started
                </button>
              </div>

              <div className="mt-5 h-[1px] bg-gray-200"></div>
              <div className="flex flex-col md:flex-1">
                <div className="mt-7 flex flex-col gap-3 text-gray-500">
                  <p className="flex items-center gap-3">
                    <Check /> <span>1 connected account</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Check /> <span>Real-time dashboard access</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Check /> <span>Basic reporting</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Check /> <span>Email support</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Check /> <span>Up to 2 team members</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card------------------------------------3 */}
          <div className="flex w-full max-w-md flex-col gap-3 rounded-2xl bg-white px-6 py-10 shadow-lg md:max-w-none md:flex-row lg:max-w-md lg:flex-col">
            <div className="flex flex-col gap-3 md:flex-1 md:gap-x-7">
              <div className="flex items-center gap-3">
                <span className="bg-secondary flex size-10 items-center justify-center rounded-full">
                  <Box />
                </span>
                <span>Starter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-semibold text-black">$0</span>{" "}
                <span className="text-sm text-gray-500"> /mo</span>
              </div>
              <p className="text-gray-500">
                Perfect for small teams getting started with AI-powered project
                management.
              </p>
              <button className="mt-4 rounded-3xl bg-black py-3 text-center font-semibold text-white shadow-lg">
                Get Started
              </button>
            </div>

            <div className="mt-5 h-[1px] bg-gray-200"></div>
            <div className="flex flex-col md:flex-1">
              <div className="mt-7 flex flex-col gap-3 text-gray-500">
                <p className="flex items-center gap-3">
                  <Check /> <span>1 connected account</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Real-time dashboard access</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Basic reporting</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Email support</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check /> <span>Up to 2 team members</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
