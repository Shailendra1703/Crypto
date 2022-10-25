import React from "react";
import { useState } from "react";
import { icons } from "react-icons/lib";
import { AiOutlineMenuFold, AiOutlineClose,AiFillHome } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { MdTravelExplore ,MdContactPage} from "react-icons/md"; 
import { FcAbout} from "react-icons/fc"; 
const Nav = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row justify-between h-20 max-w-[1240px] border-b-2 border-[#E80F88] mx-auto items-end py-2">
        <h1 className="text-4xl px-2 font-bold text-[#E80F88]">pma.</h1>
        <ul className="hidden md:flex text-[#e80f88]">
          <li className="pl-2 text-[18px] font-bold">Home</li>
          <li className="pl-2 text-[18px] ml-5">Explore Unversities</li>
          <li className="pl-2 text-[18px] ml-5">About</li>
          <li className="pl-2 text-[18px] ml-5">Pricing</li>
          <li className="pl-2 text-[18px] ml-5">Contact Us</li>
        </ul>
        <div className="hidden md:flex px-4">
          <button className="w-[100px] text-[#E80F88] font-bold uppercase p-2 rounded">
            Login
          </button>
          <button className="w-[100px] bg-[#E80F88] uppercase text-white p-2 rounded ml-3">
            Register
          </button>
        </div>

        <div onClick={handelNav} className="block text-black md:hidden px-4">
          {!nav ? <AiOutlineMenuFold size={25} /> : <AiOutlineClose size={25} />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
        <h1 className="p-2 text-4xl m-5 font-bold text-[#E80F88]">pma.</h1>
        <ul className="mt-5">
          <li className="p-2 text-[18px] ml-5 font-bold flex flex-row"><span className="p-[5px]"><AiFillHome/></span>Home</li>
          <li className="p-2 text-[18px] ml-5 flex flex-row"><span className="p-[5px]"><MdTravelExplore/></span>Explore Unversities</li>
          <li className="p-2 text-[18px] ml-5 flex flex-row"><span className="p-[5px]"><FcAbout color="black"/></span>About</li>
          <li className="p-2 text-[18px] ml-5 flex flex-row"><span className="p-[5px]"><ImPriceTags/></span>Pricing</li>
          <li className="p-2 text-[18px] ml-5 flex flex-row"><span className="p-[5px]"><MdContactPage/></span>Contact Us</li>
        </ul>
        <div className="flex flex-col">
          <button className="w-[100px] text-[#E80F88] font-bold uppercase p-2 rounded ml-8">
            Login
          </button>
          <button className="w-[100px] bg-[#E80F88] uppercase text-white p-2 rounded ml-8">
            Register
          </button>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
