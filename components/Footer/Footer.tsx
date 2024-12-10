import React from "react";

const Footer = () => {
  return (
    <div className="h-[120vh] bg-[#1a1a1a]">
      <div className="w-[90%] flex pt-48 justify-between m-auto">
        <div className="w-[45%] flex flex-col gap-6 pt-20 text-white">
          <h2 className="text-[24px] font-medium">ALTAR</h2>
          <p className="text-[13px] w-[300px]">
            Altar is a gathering place where free spirits, artists, and
            changemakers come together to celebrate, collaborate, and
            recalibrate to the cadence of nature and the beat of our times.
          </p>
        </div>
        <div className="w-[45%] flex gap-20 pt-20">
          <div className="flex flex-col text-[14px] font-semibold gap-8">
            <p>MYKONOS</p>
            <p>WHERE TO FIND US</p>
            <p>PRIVATE EVENT MYKONOS</p>
            <p>BODRUM</p>
            <p>STORIES</p>
            <p>ALTAR MUSIC LABEL</p>
          </div>
          <div className="flex flex-col text-[14px] font-semibold gap-8">
            <p>CONTACT</p>
            <p>PRESS</p>
            <p>CAREERS</p>
            <p>SOHO ROC HOUSE</p>
            <p>TERM OF USE</p>
            <p>PRIVACY POLICY</p>
            <p>COOKIE POLICY</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto py-12 flex justify-between">
        <div className="flex gap-4">
          <p>INSTAGRAM</p>
          <p>SPOTIFY</p>
          <p>LINKEDIN</p>
          <p>YOUTUBE</p>
        </div>
        <div>
          <p className="text-[#bab5ab] text-[12px] pr-10">
            {" "}
            &copy;ALTAR 2024 | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
