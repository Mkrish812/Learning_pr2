import { Menu, X, House } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import NavItemLinks from "../components/NavItemLinks";

export default function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  const navItems = [
    { label: "Home", toWhere: "home" },
    { label: "Features", toWhere: "features" },
    { label: "Integrations", toWhere: "integrations" },
    { label: "How it works", toWhere: "howworks" },
    { label: "Pricing", toWhere: "pricing" },
    { label: "Reviews", toWhere: "reviews" },
    { label: "FAQ's", toWhere: "faqs" },
    { label: "Contact", toWhere: "getintouch" },
    { label: "Blogs", toWhere: "blog" },
  ];

  return (
    <>
      <nav className="bg-transparen fixed top-0 z-50 h-16 w-screen py-5 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-blod text-lg"
          >
            The <span className="text-zinc-950">Company</span>
          </Link>

          <Menu onClick={() => setisOpen((i) => !i)} />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 z-50 w-screen overflow-hidden bg-black/20 backdrop-blur-lg transition-[height] duration-500 ease-in-out ${isOpen ? "h-screen" : "h-0"}`}
      >
        <div className="container h-screen">
          <div className="relative h-20">
            <X
              onClick={() => setisOpen((i) => !i)}
              className={`from-card-left to-card-right absolute right-1/2 translate-x-1/2 transform cursor-pointer rounded-full border border-white bg-gradient-to-b shadow-xl shadow-black/10 transition-transform duration-500 ease-in-out ${isOpen ? "top-5 size-10 rotate-0 p-2" : "-top-10 size-0 rotate-360"}`}
            />
          </div>
          <div
            className={`absolute inset-x-0 mt-5 flex flex-col gap-5 py-5 ${isOpen ? "h-screen translate-y-0" : "h-0 -translate-y-96"} transform overflow-hidden transition-transform  duration-500 ease-in-out`}
          >
            {navItems.map(({ label, toWhere }) => (
              <NavItemLinks
                key={toWhere}
                setisOpen={setisOpen}
                isOpen={isOpen}
                toWhere={toWhere}
              >
                {label}
              </NavItemLinks>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
