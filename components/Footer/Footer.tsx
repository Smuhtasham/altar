import React from "react";

const Footer = () => {
  return (
    <div className="h-[150vh] lg:h-[100vh] bg-[#1a1a1a] !z-20">
      <div className="w-[90%] flex flex-col lg:flex-row pt-[120px] lg:pt-10 justify-between m-auto">
        <div className="w-[45%] flex flex-col py-16 gap-6 text-white">
          <h2 className="text-[24px] font-medium">ALTAR</h2>
          <p className="text-[13px] w-[300px]">
            Altar is a gathering place where free spirits, artists, and
            changemakers come together to celebrate, collaborate, and
            recalibrate to the cadence of nature and the beat of our times.
          </p>
        </div>
        <div className="w-[45%] flex gap-20 lg:pt-20">
          <div className="flex flex-col text-[14px] font-semibold gap-8">
            <p className="hover:text-[#afafafbd] cursor-pointer">MYKONOS</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">WHERE TO FIND US</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">PRIVATE EVENT MYKONOS</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">BODRUM</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">STORIES</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">ALTAR MUSIC LABEL</p>
          </div>
          <div className="flex flex-col text-[14px] font-semibold gap-8">
            <p className="hover:text-[#afafafbd] cursor-pointer">CONTACT</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">PRESS</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">CAREERS</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">SOHO ROC HOUSE</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">TERM OF USE</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">PRIVACY POLICY</p>
            <p className="hover:text-[#afafafbd] cursor-pointer">COOKIE POLICY</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex text-[12px] lg:text-base gap-4">
          <p className="hover:text-[#afafafbd] cursor-pointer">INSTAGRAM</p>
          <p className="hover:text-[#afafafbd] cursor-pointer">SPOTIFY</p>
          <p className="hover:text-[#afafafbd] cursor-pointer">LINKEDIN</p>
          <p className="hover:text-[#afafafbd] cursor-pointer">YOUTUBE</p>
        </div>
        <div>
          <p className="text-[#bab5ab] text-[14px] pr-10">
            {" "}
            &copy;ALTAR 2024 | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
