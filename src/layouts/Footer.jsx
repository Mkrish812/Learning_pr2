import React from "react";
import { Element, Link } from "react-scroll";


export default function Footer() {
    const navLinks = [
  { label: "Home", to: "home" },
  { label: "Features", to: "features" },
  { label: "Pricing", to: "pricing" },
  { label: "Integrations", to: "integrations" },
  { label: "Contact", to: "getintouch" },
];

const extraLinks = [
  { label: "FAQ", to: "faqs" },
  { label: "Blogs", to: "blog" },
  { label: "Testimonials", to: "reviews" },
  { label: "Terms", to: "terms" },
  { label: "Privacy Policy", to: "privacy" },
];

  return (
    <Element name="footer" className="bg-primary mt-10">
      <div className="container py-10 md:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">
            <div className="flex flex-col gap-5 md:flex-row md:justify-between lg:flex-col lg:justify-normal">
          <div>
            <h3 className="text-2xl">Contact us at</h3>
            <h3 className="text-2xl text-gray-500">TheCompany@.com</h3>
          </div>
          <form
            className="flex max-w-md justify-between items-center rounded-full bg-white px-2 py-3 shadow-md md:w-96"
            action=""
          >
            <input
              type="text"
              className="ml-5 placeholder:text-gray-400"
              placeholder="Enter the Email"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-5 py-2 text-white shadow-md"
            >
              Sucribe
            </button>
          </form>
        </div>

        <div className="flex gap-10 md:gap-20 text-gray-500">
            <div className="flex flex-col gap-3">
  {navLinks.map(({ label, to }) => (
    <Link
      key={to}
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      {label}
    </Link>
  ))}
</div>

<div className="flex flex-col gap-3">
  {extraLinks.map(({ label, to }) => (
    <Link
      key={to}
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      {label}
    </Link>
  ))}
</div>


        </div> 
        </div>
       
      </div>
    </Element>
  );
}
