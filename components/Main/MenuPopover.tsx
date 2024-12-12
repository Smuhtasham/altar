import { motion } from "framer-motion";
import React from "react";
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
          top: -160,
          backgroundColor: "white",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
          padding: "1rem",
          width: "100%",
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex items-center pt-[100px] lg:pt-6 font-semibold justify-between text-[14px] !h-[100px] w-[90%] m-auto">
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
        <div className="flex py-20 lg:py-10 w-[90%] m-auto justify-between">
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
