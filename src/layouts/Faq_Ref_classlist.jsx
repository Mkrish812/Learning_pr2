import { Plus } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";

export default function Faq() {
    
  const Faqs = useRef([])

  const handleFaq = (index) => {
    const F = Faqs.current[index].classList
    if (F.contains("max-h-18")) {
      F.remove("max-h-18");
      F.add("max-h-[1000px]");
    } else {
      F.remove("max-h-[1000px]");
      F.add("max-h-18");
    }
  };

  const faqData = [
    {
      id: 1,
      question: "How long does setup take?",
      answer:
        "Setup takes just a few minutes—connect your accounts and you're ready to go.",
    },
    {
      id: 2,
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      id: 3,
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time from your account settings.",
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and data protection practices.",
    },
    {
      id: 5,
      question: "Do you offer customer support?",
      answer:
        "Yes, our support team is available 24/7 via email and live chat.",
    },
  ];

  return (
    <Element name="features" className="mt-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-2">
          <div className="flex h-screen flex-col gap-3">
            <div className="sticky top-20">
              <div className="flex flex-col gap-5">
                <h3 className="mr-auto rounded-3xl bg-white px-3 py-1 text-sm text-gray-500 shadow-xl">
                  Features
                </h3>
                <h1 className="rounded-3xl text-start text-2xl font-semibold md:text-4xl">
                  Streamline Finances with <br />
                  Smart Features
                </h1>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="flex flex-col gap-5">
              {faqData.map((fq,index) => (
                <div
                  key={fq.question}
                  onClick={() => handleFaq(index)}
                  ref={(el)=>Faqs.current[index] = el}
                  className="from-card-left to-card-right flex h-auto max-h-18 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white bg-gradient-to-br px-8 py-7 shadow-xl shadow-black/10 transition-[max-height] duration-700 ease-in-out"
                >
                  <div className="flex justify-between">
                    <h3>{fq.question}</h3>
                    <div className="text-gray-500">
                      <Plus size={17} />
                    </div>
                  </div>
                  <p className="mt-5 text-gray-500">
                    {fq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
