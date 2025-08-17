import React from "react";
import { Link } from "react-scroll";

export default function NavItemLinks({ children, toWhere, isOpen, setisOpen }) {
  return (
    <Link
    onClick={() => setisOpen((i) => !i)}
      smooth={true}
      duration={500}
      to={toWhere}
      spy={true}
      activeClass="scale-115 lg:scale-120  border  shadow-2xl "
      className={`from-card-left group to-card-right mx-auto flex h-8 max-w-md min-w-xs cursor-pointer flex-col items-center justify-center 
        overflow-hidden rounded-2xl border-blue-200 bg-gradient-to-br py-5 shadow-xl shadow-black/10 
        transition-all duration-500 ease-in-out
        `}
    >
      <div className="flex w-full items-center gap-5">
        <div className="flex-1 text-center capitalize ">{children}</div>
      </div>
    </Link>
  );
}
