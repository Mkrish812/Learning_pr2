import React from "react";
import { Link } from "react-scroll";

export default function NavItemLinks({ children, toWhere, isOpen, setisOpen }) {
  const handelClose = () => {
    setTimeout(() => {
       setisOpen((i) => !i);
    }, 500);
   
  };
  return (
    <Link
      onClick={handelClose}
      smooth={true}
      duration={1000}
      to={toWhere}
      spy={true}
      activeClass="scale-115 lg:scale-120  border  shadow-2xl "
      className={`from-card-left group to-card-right mx-auto flex h-8 max-w-md min-w-xs cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-blue-200 bg-gradient-to-br py-5 shadow-xl shadow-black/10 `}
    >
      <div className="flex w-full items-center gap-5">
        <div className="flex-1 text-center capitalize">{children}</div>
      </div>
    </Link>
  );
}
