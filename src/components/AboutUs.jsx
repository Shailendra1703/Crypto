import React from 'react'
import Navbar from './Navbar'

const AboutUS = () => {
  return (
    <>
    <Navbar/>
    <div className=" flex justify-between pt-10 md:ml-[120px]">
     <h1 className=" text-white flex items-center flex-col text-center text-[50px] md:text-4xl  md:pb-[50px] font-bold md:w-auto">
        About Us
        <span className="border-b-4 md:ml-4 ml-3 border-b-main md:w-[98px] w-[60px] md:py-2 py-1 mb-[10px]"></span>
      </h1>
      <span className="h-10 w-3/4 bg-main"></span>
      </div>
    <div className="md:px-[150px] sm:px-[30px] flex xxs:flex-col sm:flex-row justify-between ">
<div className="float-left
 xxs:w-full sm:w-1/4">
  <div className=" w-[73px] bg-main h-[4px] text-white mt-[130px] ml-5  "></div>
  <br />
  <div className=" font-bold text-white ml-5 mr-[40px] mx-10 ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad
    porro temporibus distinctio a, et maxime quasi quia fuga cum! In.
  </div>
</div>

<div className="text-white mt-10 mt-[120px] md:w-2/3 float-right  mx-10">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
  provident itaque possimus quod officia aliquam, quasi praesentium
  ipsum harum, officiis esse qui corrupti eius mollitia, quaerat fugiat
  ea molestias unde!
  <br />
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ab,
  optio ipsam molestias a odio modi recusandae atque officia fugiat
  animi nisi sequi labore deserunt dolor! Modi libero facere veniam.
</div>
</div>
  
</>
  )
}

export default AboutUS

