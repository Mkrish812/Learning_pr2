import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { useParallax, useParallaxController } from "react-scroll-parallax";

export default function GetInTouch() {
  const [formProgress, setFormProgress] = useState(null);
  const parallaxController = useParallaxController();

  const frm = useParallax({
    onProgressChange: (progress) => setFormProgress(progress),
  });

  useEffect(() => {
    if (formProgress * 100 < 40) {
        const value =  40 - formProgress * 100;
    frm.ref.current.style.transform = `rotateX(${value.toFixed(0)}deg)`;
    }else {
        frm.ref.current.style.transform = `rotateX(0deg)`;
    }
    

  }, [formProgress]);



  useEffect(() => {
    parallaxController.update();
  }, []);

  return (
    <Element name="blog" className="mt-10 py-10">
      <div className="container">
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
            ref={frm.ref}
            className={`relative mx-auto flex max-w-xl rounded-2xl bg-gradient-to-b from-sky-400 via-blue-600 to-sky-600 p-5 shadow-xl transform-3d transition-all duration-100 ease-in`}
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
                    id=""
                  >
                    <option value="Login">Login</option>
                    <option value="Payment">Payment</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500" htmlFor="Email">
                    Email
                  </label>
                  <textarea
                    className="rounded-md bg-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline focus:outline-blue-200"
                    type="text"
                    id="Email"
                    placeholder="Enter email"
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
