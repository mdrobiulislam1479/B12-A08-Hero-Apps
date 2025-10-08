import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-black border-b-[1px] border-gray-300">
      <div className="max-w-[1440px] mx-auto px-6 2xl:px-0">
        <div className="flex justify-between h-16 items-center">
          <Link to={"/"} className="flex gap-2 items-center">
            <img src={Logo} alt="main-logo" className="w-10 h-10" />
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              HERO.IO
            </p>
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink to={"/"} end className=" hover:text-[#632EE3]">
              Home
            </NavLink>
            <NavLink to={"/apps"} className="hover:text-[#632EE3]">
              Apps
            </NavLink>
            <NavLink to={"/installation"} className="hover:text-[#632EE3]">
              Installation
            </NavLink>
          </div>
          <div className="hidden lg:flex">
            <a
              href="https://github.com/mdrobiulislam1479"
              target="_blank"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0"
            >
              <IoLogoGithub className="w-5 h-5" /> Contribute
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-6 py-4 space-y-4 flex flex-col text-center border-t-[1px] border-gray-300">
          <NavLink to={"/"} end className=" hover:text-[#632EE3]">
            Home
          </NavLink>
          <NavLink to={"/apps"} className="hover:text-[#632EE3]">
            Apps
          </NavLink>
          <NavLink to={"/installation"} className="hover:text-[#632EE3]">
            Installation
          </NavLink>
          <a
            href="https://github.com/mdrobiulislam1479"
            target="_blank"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0"
          >
            <IoLogoGithub className="w-5 h-5" /> Contribute
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
