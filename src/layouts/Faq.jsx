import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Element } from "react-scroll";

export default function Faq() {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
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
    <Element name="faqs" className="mt-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="sticky top-20">
              <div className="flex flex-col gap-5">
                <h3 className="mr-auto rounded-3xl bg-white px-3 py-1 text-sm text-gray-500 shadow-xl">
                  FAQ
                </h3>
                <h1 className="rounded-3xl text-start text-2xl font-semibold md:text-4xl">
                  Streamline Finances with <br /> Smart Questions
                </h1>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="flex flex-col gap-5">
              {faqData.map((fq, index) => {
                const isOpen = openFaqs.includes(index);
                return (
                  <div
                    key={fq.id}
                    onClick={() => toggleFaq(index)}
                    className={`from-card-left to-card-right flex cursor-pointer flex-col rounded-2xl border border-white bg-gradient-to-br px-8 py-5 shadow-xl shadow-black/10 transition-all duration-500 ease-in-out`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="">{fq.question}</h3>
                      <div className="text-gray-500">
                        <Plus
                          className={`${isOpen ? "rotate-45" : "rotate-0"} transition-[rotate] duration-500 ease-in-out`}
                          size={17}
                        />
                      </div>
                    </div>
                    <p
                      className={`text-gray-500 ${isOpen ? "mt-5 max-h-[1000px] translate-0" : "text-primary mt-0 max-h-0 overflow-hidden"} transition-all duration-500 ease-in-out`}
                    >
                      {fq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
