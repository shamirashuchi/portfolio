import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import resume from "../Pdf/Shamira Shamsee .pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex  justify-between items-center h-full px-4 py-8 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">S.</h1>
      <ul className="hidden md:flex items-center">
        <a href="#about" className="p-4 hover:text-[#00df9a]">
          About
        </a>
        <a href="#skill" className="p-4 hover:text-[#00df9a]">
          Skills
        </a>
        <a href="#project" className="p-4 hover:text-[#00df9a]">
          Projects
        </a>
        <a href="/blog" className="p-4 hover:text-[#00df9a]">
          Blog
        </a>
        <a href="#contact" className="p-4 hover:text-[#00df9a]">
          Contact
        </a>
        <a href={resume} download="Shamira Shamsee.pdf">
          {" "}
          <button className="btn btn-sm text-white btn-outline hover:bg-[#00df9a]">
            Resume
          </button>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#101f24] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">M.</h1>
        <a href="#about">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            About
          </li>
        </a>
        <a href="#skill">
          {" "}
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            Skills
          </li>
        </a>
        <a href="#project">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
            Contact
          </li>
        </a>
        <a href={resume} download="mihir.pdf">
          {" "}
          <button className="btn btn-sm text-white btn-outline hover:bg-[#00df9a]">
            Resume
          </button>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
