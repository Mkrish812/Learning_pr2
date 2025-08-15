import { Unplug, Activity, TrendingUp } from "lucide-react"; // example icons
import React from "react";
import { Element } from "react-scroll";
import h1 from "../assets/HowWorks/h1.png";
import h2 from "../assets/HowWorks/h2.png";
import h3 from "../assets/HowWorks/h3.png";

export default function HowWorks() {

  return (
     <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-2 px-8">
            <div className="grid gap-2">
              <figure className="sticky top-0 grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0  grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0  grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0  grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <div className="h-120"></div>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
                Copied & Paste Every Component you want and make an creative
                website 😎
              </h1>
            </div>
          </div>
        </section>
  );
}

