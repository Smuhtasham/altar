"use client";
import React from "react";
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const Main = () => {
  return (
    <>
      <div className="h-[100vh] w-full relative">
        <img
          src="05.webp"
          className="w-full h-full object-cover"
          alt="Cover Image"
        />
        <p className="text-[18px] absolute font-semibold bottom-6 left-[45%]">
          ALTAR TULUM
        </p>
      </div>
      
    </>
  );
};

export default Main;
