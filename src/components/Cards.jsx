import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white px-4 py-[10rem] w-full">
      <div className="max-w-[1240px] cursor-pointer mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md py-3 font-medium w-[200px] mx-auto my-6 px-6">
            Start Trail
          </button>
        </div>
        <div className="w-full bg-gray-100 border shadow-xl flex flex-col md:my-0  p-4 my-8 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 rounded-md mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="font-bold text-4xl text-center">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 4GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md py-3 font-medium w-[200px] mx-auto my-6 px-6">
            Start Trail
          </button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="font-bold text-4xl text-center">$349</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1500 GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md py-3 font-medium w-[200px] mx-auto my-6 px-6">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
