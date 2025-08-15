import React, { useRef } from "react";
import { Element } from "react-scroll";
import f1 from "../assets/Features/f1.png";
import f2 from "../assets/Features/f2.png";
import f3 from "../assets/Features/f3.png";
import f4 from "../assets/Features/f4.png";
import f5 from "../assets/Features/f5.png";

export default function Features() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  const handleMouseMove = (e,ref) => {
    const card = ref.current;
    // console.log(card);

    const rect = card.getBoundingClientRect();
    // console.log(rect);
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    console.log(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = (e) => {
    const card = e.target;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  return (
    <Element name="features" className="mt-10 ">
      <div className="container">
        <div className="flex flex-col py-10 gap-5 ">
          <h3 className="bg-white py-1 px-3 text-sm text-gray-500 rounded-3xl shadow-xl mx-auto">
            Features
          </h3>
          <h1 className=" md:text-4xl text-2xl font-semibold rounded-3xl  mx-auto text-center">
            Streamline Finances with <br />
            Smart Features
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 perspective-distant">
            {/* card1--------- */}
            <div
              ref={card1Ref}
              onMouseMove={(e)=>handleMouseMove(e,card1Ref)}
              onMouseLeave={handleMouseLeave}
              className=" shadow-2xl shadow-black/25 flex flex-col col-span-2 md:col-span-3 lg:col-span-2 rounded-2xl px-10 py-7 "
            >
              <p className="text-2xl ">Real-Time Analytics</p>
              <p className=" mt-1 text-gray-500 ">
                Monitor your finances live with clear, intuitive dashboards.
              </p>
              <img src={f1} className="h-40 w-fit mx-auto mt-10 " alt="" />
            </div>
            {/* card2--------- */}
            <div
              ref={card2Ref}
              onMouseMove={(e)=>handleMouseMove(e,card2Ref)}
              onMouseLeave={handleMouseLeave}
              className=" shadow-2xl shadow-black/25 flex flex-col col-span-2 md:col-span-3 lg:col-span-2 rounded-2xl px-10 py-7 "
            >
              <p className="text-2xl ">Automated Reports</p>
              <p className=" mt-1 text-gray-500 ">
                Generate summaries instantly—no manual work needed.
              </p>
              <img src={f2} className="h-40 w-fit mx-auto mt-10 " alt="" />
            </div>
            {/* card3--------- */}
            <div
              ref={card3Ref}
              onMouseMove={(e)=>handleMouseMove(e,card3Ref)}
              onMouseLeave={handleMouseLeave}
              className=" shadow-2xl shadow-black/25 flex flex-col col-span-2 md:col-span-3 lg:col-span-2 rounded-2xl px-10 py-7 "
            >
              <p className="text-2xl ">Smart Budgeting</p>
              <p className=" mt-1 text-gray-500 ">
                Plan and adjust with AI-powered budget suggestions.
              </p>
              <img src={f3} className="h-40 w-fit mx-auto mt-10 " alt="" />
            </div>
            {/* card4--------- */}
            <div
              ref={card4Ref}
              onMouseMove={(e)=>handleMouseMove(e,card4Ref)}
              onMouseLeave={handleMouseLeave}
              className=" shadow-2xl shadow-black/25 flex flex-col lg:flex-row col-span-2 md:col-span-3 lg:items-center rounded-2xl px-10 py-7 "
            >
              <div>
                 <p className="text-2xl ">Secure Syncing</p>
              <p className=" mt-1 text-gray-500 ">
                Monitor your finances live with dashboards.
              </p>
            </div>
              <img src={f4} className="h-40 w-fit mx-auto mt-10 " alt="" />
            </div>
            {/* card5--------- */}
            <div
              ref={card5Ref}
              onMouseMove={(e)=>handleMouseMove(e,card5Ref)}
              onMouseLeave={handleMouseLeave}
              className=" shadow-2xl shadow-black/25 flex flex-col lg:flex-row col-span-2 md:col-span-3 lg:items-center rounded-2xl px-10 py-7 "
            > 
            <div>
                 <p className="text-2xl ">Growth Score</p>
              <p className=" mt-1 text-gray-500 ">
               Generate summaries instantly.
              </p>
            </div>
             
              <img src={f5} className="h-40 w-fit mx-auto mt-10 " alt="" />
            </div>
          </div>
        </div>
      </div>

    </Element>
  );
}
