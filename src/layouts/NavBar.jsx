import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";


export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-transparen bg-gray-950t backdrop-blur-md px-10 lg:px-40 py-3 fixed top-0 w-screen">
        <Link to="home" smooth={true} duration={500} className="text-sm font-blod ">
          The <span className="text-zinc-950">Company</span>
        </Link>

        <Menu />
      </nav>
    </>
  );
}
