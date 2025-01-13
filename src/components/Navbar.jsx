import React from "react";
// import LOGO from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6 ">
      <div className="flex flex-shrink-0 items-center text-2xl">
        Humna Ramzan
        {/* <img
          src={LOGO}
          alt="logo"
          className="h-12 w-12 object-contain gap-2 "
        /> */}
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-xl ">
        <a href="https://www.linkedin.com/in/humna-ramzan-4a22b5271/">
          <FaLinkedinIn className="cursor-pointer" />
        </a>
        <a href="https://github.com/HumnaRamzan">
          {" "}
          <FaGithub className="cursor-pointer" />
        </a>
        {/* <a href="">
          {" "}
          <FaInstagram className="cursor-pointer" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
