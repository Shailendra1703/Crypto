import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <center>
        <div className=" md:w-[500px] flex justify-center justify-items-center m-10 flex-col mx-auto">
          <h1 className="text-center py-2 w-[100px] md:text-5xl text-3xl border-b-4 border-indigo-500 mx-auto text-2xl font-bold mt-7 text-[#00df9a]">
            (0_0)
          </h1>
          <div className="">
            <input
              className="p-3 md:w-[400px] mx-[50px] mt-6 outline outline-gray-500/50 active:outline-blue-500 rounded"
              type="email"
              placeholder="Enter email "
              name=""
              id=""
            />
            <input
              className="p-3 w-[400px] mx-[50px]  my-6 outline outline-gray-500/50 active:outline-blue-500 rounded "
              type="password"
              placeholder="password"
              name=""
              id=""
            />
          </div>
          <div>
            <a
              href=""
              className="text-white float-right pr-[50px] hover:underline "
            >
              Forget Password
            </a>
          </div>
          <div>
            <button className="bg-[#00df9a]  outline-none rounded-md font-medium w-[200px] my-3  px-6 py-3">
              Login
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
