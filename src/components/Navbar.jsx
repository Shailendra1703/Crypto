import React from "react";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <a href="#" className="">
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">CRYPTO.</h1>
        </a>
        <ul className="hidden md:flex">
          <Link to="/" className="p-4">
            <li className="p-4">Home</li>
          </Link>
          <a href="">
            <li className="p-4">Company</li>
          </a>
          <a href="">
            <li className="p-4">Blog</li>
          </a>
          <a href="">
            <li className="p-4">Contact</li>
          </a>
          <Link to="/about" className="p-4">
            <li className="p-4">About Us</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block text-white md:hidden">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenuUnfold size={20} />
          )}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            CRYPTO.
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Blog</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <a href="">
            <button className="p-4 my-3   bg-[#00df9a] text-white rounded px-6 py-3 w-[120px] mx-auto">
              Login
            </button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
