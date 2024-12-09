"use client";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const Header: React.FC = () => {
  const { scrollY } = useScroll();

  // Define the motion value event (can be omitted if unused)
  const bg1 = useMotionValueEvent(scrollY, "change", (val: number) => {
    // Event callback if you want to use 'val' later
  });

  // Define the transformations for scale, text size, and background color
  const scale = useTransform(scrollY, [150, 280], [-1, -250]);
  const textSize = useTransform(scrollY, [150, 280], [10, 3]);
  const bgColor = useTransform(scrollY, [0, 250], ["rgba(0,0,0,0)", "rgba(255,255,255,1)"]);

  return (
    <div className={`fixed w-full z-50 text-white`}>
      <div className="flex items-center font-semibold justify-between text-[14px] h-[80px] w-[90%] m-auto">
        <div className="flex gap-2 items-center">
          <HiMenuAlt4 size={30} /> Menu
        </div>
        <div className={`flex justify-center top-[300px] ml-12 items-center absolute inset-0 text-white font-bold`}>
          <motion.div
            style={{
              translateY: scale,
              scale: textSize,
            }}
          >
            ALTAR
          </motion.div>
        </div>
        <div>
          <button className="px-2 py-1 border border-white">RESERVE</button>
        </div>
      </div>

      {/* Bottom Section of Navbar */}
      <div className="flex w-[90%] pt-[11px] font-semibold text-[14px] m-auto justify-between h-[50px]">
        <div>MYKONOS</div>
        <div className="flex gap-3 font-bold">
          <p>EAT & DRINK</p>
          <p>SPACES</p>
          <p>REGISTER</p>
        </div>
        <div className="w-[2px]"></div>
      </div>
    </div>
  );
};

export default Header;
