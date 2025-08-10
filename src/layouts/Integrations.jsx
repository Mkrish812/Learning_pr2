import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import i1 from "../assets/integrations/i1.png";
import i2 from "../assets/integrations/i2.png";
import i3 from "../assets/integrations/i3.png";
import i4 from "../assets/integrations/i4.png";
import i5 from "../assets/integrations/i5.png";
import { useParallax } from "react-scroll-parallax";

export default function Integrations() {
  const [eleProgress, setEleProgress] = useState(0);
  const [ixtrans, setIxtrans] = useState(0);

  // Multi refs for each image container
  const eleRefs = useRef([]);

  const arc = useParallax({
    onProgressChange: (progress) => setEleProgress(progress),
  });

  // Data: image and rotation in one object
  const items = [
    { image: i1, rotation: "rotate-[40deg]" },
    { image: i2, rotation: "rotate-[65deg]" },
    { image: i3, rotation: "rotate-[90deg]" },
    { image: i4, rotation: "rotate-[115deg]" },
    { image: i5, rotation: "rotate-[140deg]" },
  ];

  // Update translateX based on scroll progress
  useEffect(() => {
    const value = eleProgress * 100;
    if (value <= 16) {
      const computedIxtrans = value * -5;
      setIxtrans(computedIxtrans);
      eleRefs.current.forEach((el) => {
        if (el) {
          el.style.transform = `translateX(${computedIxtrans}px)`;
        }
      });
    }
  }, [eleProgress]);

  return (
    <Element name="integrations" className="mt-10">
      <div className="container">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-3 py-1 text-sm text-gray-500 shadow-xl">
            Integrations
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Powerful Integrations, <br />
            Effortless Setup
          </h1>

          <div className="inner-bottom-white flex w-full items-center justify-center">
            <div
              ref={arc.ref}
              className="inner-bottom-white relative size-100 rounded-full bg-gradient-to-b from-sky-200 via-white to-white md:size-[700px]"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`w-full ${item.rotation} absolute top-1/2 -translate-y-1/2`}
                >
                  <div
                    ref={(el) => (eleRefs.current[i] = el)}
                    className="from-card-left to-card-right flex size-10 translate-x-12 items-center justify-center rounded-2xl border border-white bg-gradient-to-br shadow-md md:size-16 md:translate-x-16"
                  >
                    <img
                      src={item.image}
                      className="size-8 md:size-10"
                      alt={`integration-${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </Element>
  );
}
