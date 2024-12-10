"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";

interface MenuPopoverProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuPopover: React.FC<MenuPopoverProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative text-black w-full">
      {/* Popover Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          top: -140,
          backgroundColor: "white",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", // Equivalent to `shadow-lg`
          borderRadius: "0.5rem", // Equivalent to `rounded-lg`
          padding: "1rem", // Equivalent to `p-4`
          width: "100%", // Equivalent to `w-56`
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex items-center font-semibold justify-between text-[14px] h-[80px] w-[90%] m-auto">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <RiCloseLargeLine size={26} /> Menu
          </div>

          <div>
            <button
              className="px-2 py-1"
              style={{
                border: `1px solid black`,
                transition: "border-color 1s ease",
              }}
            >
              RESERVE
            </button>
          </div>
        </div>
        <div className="flex py-10 w-[90%] m-auto justify-between">
          <div className="flex flex-col text-[14px] font-semibold gap-10">
            <div className="flex flex-col gap-4">
              <p className="cursor-pointer">BODRUM</p>
              <p className="cursor-pointer">MYKONOS</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="cursor-pointer">STORIES</p>
              <p className="cursor-pointer">MUSIC LABEL</p>
              <p className="cursor-pointer">THE RITUAL SPACE</p>
              <p className="cursor-pointer">ENCOUNTERS</p>
            </div>
          </div>
          <div>
            <img src="06.png" className="w-[200px] h-[300px]" alt="" />
          </div>
        </div>
        <div className="flex w-[90%] text-[14px] font-semibold py-4 m-auto gap-6">
          <p className="cursor-pointer">INSTAGRAM</p>
          <p className="cursor-pointer">SPOTIFY</p>
          <p className="cursor-pointer">YOUTUBE</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuPopover;
