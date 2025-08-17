import React from "react";
import { Link } from "react-scroll";

export default function NavItemLinks({ children, toWhere }) {
  return (
    <Link
      smooth={true}
      duration={500}
      to={toWhere}
      spy={true}
      activeClass="scale-120 border  shadow-2xl "
      className={`from-card-left  border-blue-500 group to-card-right mx-auto flex h-8 max-w-md min-w-xs cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl  bg-gradient-to-br py-5 shadow-xl shadow-black/10 transition-all duration-200 ease-in-out`}
    >
      <div className="flex w-full items-center gap-5">
        <div className="flex-1 text-center">{children}</div>
      </div>
    </Link>
  );
}
