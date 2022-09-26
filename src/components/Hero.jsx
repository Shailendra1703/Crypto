import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Crypto is the future of the world.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data.
        </h1>
        <div className="flex  justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Deal with us in{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
            strings={["Bitocoin", "Litecoin", "Ethereum", "Dogecoin"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your investment to maximize your profit.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
