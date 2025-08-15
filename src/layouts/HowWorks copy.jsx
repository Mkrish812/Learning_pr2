import { Unplug, Activity, TrendingUp } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import h1 from "../assets/HowWorks/h1.png";
import h2 from "../assets/HowWorks/h2.png";
import h3 from "../assets/HowWorks/h3.png";

export default function HowWorks() {
  const cards = [
    {
      id: 1,
      icon: <Unplug strokeWidth={1} size={20} />,
      title: "Connect Accounts",
      description: "Securely link your bank and business tools in minutes.",
      image: h1,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      icon: <Activity strokeWidth={1} size={20} />,
      title: "Track in Real-Time",
      description: "View all your financial data live on one clean dashboard.",
      image: h2,
      gradient: "from-green-400 to-green-600",
    },
    {
      id: 3,
      icon: <TrendingUp strokeWidth={1} size={20} />,
      title: "Grow Smarter, Faster",
      description: "Use insights and reports to guide better business decisions.",
      image: h3,
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <Element name="howworks" className="mt-10 container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left column - Sticky heading */}
        <div className="sticky top-0 h-screen flex flex-col">
          <div className="py-20">
            <h3 className="mx-auto rounded-3xl bg-white px-3 py-1 text-sm text-gray-500 shadow-xl w-fit">
              How it works
            </h3>
            <h1 className="mt-4 text-center text-2xl font-semibold lg:text-5xl">
              From setup to insight—<br /> just three simple steps.
            </h1>
          </div>
        </div>
        <div className="grid gap-10">
          {cards.map((c) => (
            <div
              key={c.id}
              className="sticky top-20 from-card-left to-card-right mb-10 flex flex-col justify-between rounded-2xl border border-white bg-gradient-to-br px-14 py-10 shadow-xl shadow-black/10 md:h-96"
            >
              
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium">{c.title}</h3>
                  <p className="text-sm text-gray-200">{c.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <img src={c.image} className="lg:h-60" alt={c.title} />
              </div>
            </div>
          ))}

        
        </div>
      </div>
    </Element>
  );
}
