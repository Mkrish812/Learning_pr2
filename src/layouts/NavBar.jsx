import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <>
      <nav className=" h-16 bg-transparen  backdrop-blur-md  py-5 fixed top-0 w-screen z-50">
        <div className="container flex justify-between items-center ">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg font-blod "
          >
            The <span className="text-zinc-950">Company</span>
          </Link>

          <Menu />
        </div>
      </nav>
    </>
  );
}
