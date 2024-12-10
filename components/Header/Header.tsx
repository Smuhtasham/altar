"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import MenuPopover from "../Main/MenuPopover";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeadingScrolled, setIsHeadingScrolled] = useState(false);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeadingScrolled(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = isScrolled ? "white" : "transparent";
  const border = isScrolled ? "black" : "white";
  const textColor = isScrolled ? "black" : "white";
  const headingColor = isHeadingScrolled ? "black" : "white";

  // Transformations for scaling
  const scale = useSpring(useTransform(scrollY, [150, 280], [-1, -250]), {
    stiffness: 80,
    damping: 25,
  });
  const textSize = useSpring(useTransform(scrollY, [150, 280], [10, 2.5]), {
    stiffness: 80,
    damping: 25,
  });

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: "100%",
        position: "fixed",
        zIndex: "50",
        transition: "background-color 0.8s ease, color 1s ease",
      }}
    >
      <div className="flex items-center font-semibold justify-between text-[14px] h-[80px] w-[90%] m-auto">
        <div onClick={()=>setIsMenuOpen(true)} className="flex gap-2 cursor-pointer items-center">
          <HiMenuAlt4 size={30}/> Menu
        </div>
        <div className="flex justify-center top-[300px] ml-12 items-center absolute inset-0 font-medium">
          <motion.div
            style={{
              translateY: scale,
              scale: textSize,
              color: headingColor,
              transition: "color 1s ease",
            }}
          >
            ALTAR
          </motion.div>
        </div>
        <div>
          <button
            className="px-2 py-1"
            style={{ border: `1px solid ${border}`, transition: "border-color 1s ease" }}
          >
            RESERVE
          </button>
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
      <MenuPopover isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </motion.div>
  );
};

export default Header;
