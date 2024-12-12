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
  const [isLogo, setIsLogo] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeadingScrolled(window.scrollY > 280);
      setIsLogo(window.scrollY > 300);
      setIsText(window.scrollY > 270);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = isScrolled ? "#faf8f0" : "transparent";
  const headerBorder = isScrolled ? "#a0a0a9" : "transparent";
  const border = isScrolled ? "black" : "white";
  const textColor = isScrolled ? "black" : "white";
  const headingColor = isHeadingScrolled ? "black" : "white";
  const headerHeight = isHeadingScrolled ? "70px" : "110px";
  const logo = isLogo ? "flex" : "hidden";
  const text = isText ? "hidden": "flex"

  // Transformations for scaling
  const scale = useSpring(useTransform(scrollY, [90, 280], [50, -270]), {
    stiffness: 80,
    damping: 25,
  });
  const textSize = useSpring(useTransform(scrollY, [150, 280], [12, 3]), {
    stiffness: 80,
    damping: 25,
  });
  const smallScale = useSpring(useTransform(scrollY, [150, 280], [-1, -285]), {
    stiffness: 80,
    damping: 25,
  });
  const SmallTextSize = useSpring(useTransform(scrollY, [150, 280], [7, 0.1]), {
    stiffness: 80,
    damping: 25,
  });

  return (
    <>
      <header>
        <motion.div
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderBottom: `1px solid ${headerBorder}`, // Customize width and color
            width: "100%",
            position: "fixed",
            zIndex: "50",
            transition:
              "background-color 0.8s ease, color 1s ease, border-color 0.8s ease",
          }}
        >
          <div
            className={`flex items-center font-semibold justify-between text-[14px] w-[90%] m-auto`}
            style={{
              height: `${headerHeight}`,
              transition: "height 0.8s ease, height 0.8s ease",
            }}
          >
            <div
              onClick={() => setIsMenuOpen(true)}
              className="flex gap-2 cursor-pointer items-center"
            >
              <HiMenuAlt4 size={30} /> Menu
            </div>
            <div className="hidden lg:flex justify-center top-[320px] ml-12 items-center absolute inset-0 font-medium">
              <motion.div
                style={{
                  translateY: scale,
                  scale: textSize,
                  color: headingColor,
                  transition: "color 1s ease",
                }}
              >
                <img src="/casa-altar.png" className="w-full h-[40px]" alt="" />
              </motion.div>
            </div>
            <div
              className={`${logo} lg:hidden justify-center -top-4 items-center absolute inset-0 font-medium`}
            >
              <div className="w-[40px] h-[40px]">
                <img src="/altarlogo.png" alt="" />
              </div>
            </div>
            <div
              className={`${text} lg:hidden justify-center top-[320px] items-center absolute inset-0 font-medium`}
            >
              <motion.div
                style={{
                  translateY: smallScale,
                  scale: SmallTextSize,
                  color: "white",
                  transition: "color 1s ease",
                }}
              >
               ALTAR
              </motion.div>
            </div>
            <div>
              <button
                className="px-2 py-1 lg:px-8 lg:py-2 text-[12px] lg:text-base rounded-sm cursor-pointer"
                style={{
                  border: `1px solid ${border}`,
                  transition: "border-color 1s ease",
                }}
                onClick={() =>
                  (window.location.href =
                    "https://www.airbnb.com/rooms/589202359470803966")
                } // Replace with your link
              >
                RESERVE
              </button>
            </div>
          </div>

          {/* Bottom Section of Navbar */}
          <div className="hidden lg:flex w-[90%] pt-[11px] font-semibold text-[14px] m-auto justify-between h-[50px]">
            <div className="w-[25%] cursor-pointer">MYKONOS</div>
            <div className="flex gap-14 font-bold w-[50%]">
              <p className="cursor-pointer">EAT & DRINK</p>
              <p className="cursor-pointer">SPACES</p>
              <p className="cursor-pointer">REGISTER</p>
            </div>
            <div className="w-[2px]"></div>
          </div>
          <MenuPopover isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </motion.div>
      </header>
    </>
  );
};

export default Header;
