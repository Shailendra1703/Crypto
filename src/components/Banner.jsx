import React from "react";
import Laptop from "../assets/laptop.jpg";

const Banner = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-main font-bold uppercase">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam
            delectus debitis saepe quibusdam velit suscipit, cum maiores
            inventore a, ipsa explicabo natus eos beatae quam veniam unde
            aliquam facilis.
          </p>
          <button className="bg-black text-[#00df9a] rounded w-[200px] font-medium my-6 mx-auto py-3 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
