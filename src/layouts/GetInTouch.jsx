import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";

export default function GetInTouch() {
  const formRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = formRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // intersection ratio = % of element visible (0 to 1)
            setProgress(entry.intersectionRatio);
          }
        });
      },
      {
        root: null, // viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // track every 1%
      }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    if (!formRef.current) return;

    if (progress * 100 < 40) {
      const value = 40 - progress * 100;
      formRef.current.style.transform = `rotateX(${value.toFixed(0)}deg)`;
    } else {
      formRef.current.style.transform = `rotateX(0deg)`;
    }
  }, [progress]);

  return (
    <Element name="getintouch" className="mt-10 py-10">
      <div className="container overflow-hidden">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Contact
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Get in Touch 
          </h1>
        </div>
        <div className="perspective-distant">
          <div
            ref={formRef}
            className="relative mx-auto flex max-w-xl rounded-2xl bg-gradient-to-b from-sky-400 via-blue-600 to-sky-600 p-5 shadow-xl transform-3d transition-transform duration-150 ease-out"
          >
            <div className="w-full rounded-2xl bg-white px-5 py-7 shadow">
              <form className="flex flex-col gap-5" action="">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500" htmlFor="Cname">
                    Name
                  </label>
                  <input
                    className="rounded-md bg-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline focus:outline-blue-200"
                    type="text"
                    id="Cname"
                    placeholder="Enter name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="rounded-md bg-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline focus:outline-blue-200"
                    type="text"
                    id="Email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500" htmlFor="Topic">
                    Topic
                  </label>
                  <select
                    className="rounded-md bg-gray-100 px-3 py-2 focus:outline focus:outline-blue-200"
                    name="Topic"
                  >
                    <option value="Login">Login</option>
                    <option value="Payment">Payment</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500" htmlFor="Message">
                    Message
                  </label>
                  <textarea
                    className="rounded-md bg-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline focus:outline-blue-200"
                    id="Message"
                    placeholder="Enter message"
                  />
                </div>
                <button className="mx-auto flex items-center justify-center rounded-full bg-black/90 px-7 py-2 text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
