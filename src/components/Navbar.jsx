import React from "react";
import LOGO from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={LOGO}
          alt="logo"
          className="h-12 w-12 object-contain gap-2 "
        />
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-xl ">
        <FaLinkedinIn className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
