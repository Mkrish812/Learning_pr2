import React, { useRef } from "react";
import { Element } from "react-scroll";

export default function TrustedBy() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    console.log(card);
    
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
   
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    // const rotateX = ((y - centerY) / centerY) * -15;
    // const rotateY = ((x - centerX) / centerX) * 15;
    console.log(`((${y} - ${centerY}) / ${centerY} ) = ${rotateX}`);
    console.log(`((${x} - ${centerX}) / ${centerX} ) = ${rotateY}`);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="flex flex-col py-20 items-center justify-center min-h-screen bg-gray-900 perspective-distant gap-20">
      <div
        ref={cardRef}
        className="w-96 rounded-3xl bg-gradient-to-br overflow-hidden from-indigo-500 to-blue-500 text-white shadow-xl transform transition-transform duration-100 ease-linear"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src="try.png" alt="" />
      </div>

      <div className="w-96 rounded-3xl rotate-x-[2deg] rotate-y-[-10deg]  ">
        <img
          src="try.png"
          className="object-center object-cover rounded-3xl "
          alt=""
        />
      </div>
    </div>
  );
}
