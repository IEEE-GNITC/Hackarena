import { IoIosMenu } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";


import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <p className="md:flex m-2 justify-center hidden items-center text-xl">
        <a href="">IEEE GNITC</a>
      </p>
      <div className="hidden md:flex m-2 p-4 justify-around border-y border-black items-center">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Guidelines">Guidelines</a>
        <a href="#Themes">Themes</a>
        <a href="#FAQ">FAQ</a>
        <a href="#Contact">Contact Us</a>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden m-2 flex justify-between border-y z-50  border-black  p-2">
      <p className="md:hidden m-2  text-xl">
        <a href="">IEEE GNITC</a>
      </p>
        <button
          onClick={toggleMenu}
          className="p-3  border rounded-xl text-black bg-gray-200"
        >
          <IoIosMenu />
        </button>
      </div>

      {/* Sliding Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-4 border rounded text-white bg-gray-800"
          >
            <RiCloseLargeFill />
          </button>
          <a href="#Home" className="text-white text-xl m-4" onClick={toggleMenu}>
            Home
          </a>
          <a href="#About" className="text-white text-xl m-4" onClick={toggleMenu}>
            About
          </a>
          <a href="#Guidelines" className="text-white text-xl m-4" onClick={toggleMenu}>
            Guidelines
          </a>
          <a href="#Themes" className="text-white text-xl m-4" onClick={toggleMenu}>
            Themes
          </a>
          <a href="#FAQ" className="text-white text-xl m-4" onClick={toggleMenu}>
            FAQ
          </a>
          <a href="#Contact" className="text-white text-xl m-4" onClick={toggleMenu}>
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}


export default Nav;
