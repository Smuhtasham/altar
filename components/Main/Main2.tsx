"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Section = () => {
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        fontSize: "3.5vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#faf8f0",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        paddingBottom: "10vh",
      }}
    >
      <div className="w-[80%] py-32 m-auto">
        <h2 className="text-black font-semibold text-[25px] lg:text-[35px]">
          Our contemporary agora for shared celebration set against the Cycladic
          sunset and the soulful beat of Altar
        </h2>
      </div>
    </motion.div>
  );
};
export const Section1 = () => {
  const { scrollY } = useScroll();
  const imageHeight = useSpring(useTransform(scrollY, [700, 900], [400, 700]), {
    stiffness: 60,
    damping: 25,
  });
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        height: imageHeight,
        fontSize: "3.5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        paddingBottom: "10vh",
      }}
    >
      <img src="04.png" className="w-full h-full object-cover" alt="" />
      <p className="absolute top-24 text-[16px]">/ ENCOUNTER</p>
      <h2 className="absolute w-[70%] text-center text-[30px] lg:text-[56px] font-bold lg:w-[400px]">Redefining the future of art</h2>
    </motion.div>
  );
};

export const Section2 = () => {
  const { scrollY } = useScroll();
  const imageHeight = useSpring(
    useTransform(scrollY, [1600, 1800], [200, 360]),
    {
      stiffness: 60,
      damping: 25,
    }
  );
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#faf8f0",
      }}
    >
      <div className="h-[120vh] lg:h-[100vh] flex flex-col gap-4 lg:flex-row lg:gap-0 lg:justify-center py-20 lg:py-40 items-center w-[90%] m-auto">
        <div className="w-full lg:w-[50%]">
          <motion.div
            style={{
              height: imageHeight,
            }}
          >
            <img
              src="/24.png"
              className="w-[300px] lg:w-[500px] h-full lg:h-full object-cover"
              alt="Section 2 Image"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-[50%] text-black flex flex-col items-start lg:gap-4">
          <p>/ Food</p>
          <h3 className="text-[30px] lg:text-[56px] font-medium">A Taste of Our Culture</h3>
          <p>
            Like our music, art, and wellbeing explorations, the kitchen at
            Scorpios thrives on breaking down borders and bringing people
            together.
          </p>
          <button className="underline underline-offset-1">Explore</button>
        </div>
      </div>
    </motion.div>
  );
};

export const Section3 = () => {
  const { scrollY } = useScroll();
  const imageHeight = useSpring(
    useTransform(scrollY, [2200, 2400], [200, 360]),
    {
      stiffness: 60,
    }
  );
  const smallImageHeight = useSpring(
    useTransform(scrollY, [2300, 2400], [200, 360]),
    {
      stiffness: 60,
    }
  );
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#faf8f0",
      }}
    >
      <div className="h-[120vh] lg:h-[100vh] flex flex-col lg:flex-row  lg:justify-center py-12 gap-4 lg:gap-0 lg:py-28 items-center w-[90%] m-auto">
      <div className="w-full lg:hidden flex lg:w-[50%]">
          <motion.div
            style={{
              height: smallImageHeight,
            }}
          >
            <img
              src="/15.png"
              className="w-[300px] lg:w-[500px] h-full object-cover"
              alt="Section 2 Image"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-[50%]  text-black flex flex-col items-start gap-1 lg:gap-4">
          <p>/ BAZAAR</p>
          <h3 className="text-[30px] lg:text-[56px] font-medium">Timeless  Creativity</h3>
          <p className="lg:w-[400px]">
            The Scorpios Bazaar celebrates artisanship through a handpicked
            selection of like-minded brands that share and honor core values of
            timeless craftsmanship, cultural heritage and sustainability.
          </p>
          <button className="border border-black py-1 px-2">
            DISCOVER MORE
          </button>
        </div>
        <div className="w-full hidden lg:flex lg:w-[50%]">
          <motion.div
            style={{
              height: imageHeight,
            }}
          >
            <img
              src="/15.png"
              className="w-[300px] lg:w-[500px] h-full object-cover"
              alt="Section 2 Image"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Section4 = () => {
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        backgroundImage: "url('/01.png')",
        zIndex: 3,
      }}
    >
      <div className="flex absolute lg:left-[22%] top-[20%] lg:top-[32%] gap-6 flex-col lg:w-[60%] justify-center items-center">
        <h2 className="text-[40px] lg:text-[80px] font-semibold">Soho Roc House</h2>
        <p className="w-[90%] lg:w-[60%] lg:flex text-center">
          A stone’s throw away from Scorpios, this Soho House members’ club and
          hotel is set on one of the most scenic stretches of the Mykonian
          coast. It is built with the same love of high aesthetics, nature and
          minimalistic design we share, and lures like-minded guests and members
          into embracing the island barefoot.
        </p>
        <button className="underline-offset-4 underline text-[18px] font-semibold">
          Visit
        </button>
      </div>
    </motion.div>
  );
};

export const Section5 = () => {
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        backgroundImage: "url('/53.png')",
        backgroundRepeat:"no-repeat",
        zIndex: 5,
      }}
    >
      <div className="h-[130vh] lg:h-[120vh]">
        <div className="flex absolute lg:top-[25%] top-[15%] gap-6 flex-col w-full justify-center items-center">
          <h2 className="text-[34px] lg:text-[60px] text-center font-medium">Join the community</h2>
          <p className="text-center text-[18px] lg:text-[24px] w-[80%]">
            Sign up to follow the Scorpios journey to new shores, receive
            inner-circle updates and special offers. Or be the first to hear
            about the latest releases and goings-on inside the Scorpios Music
            label.
          </p>
          <div className="flex gap-7">
            <div className="flex gap-2">
            <input
                type="radio"
                className="appearance-none w-[20px] h-[20px] 
                lg:w-4 lg:h-4 border-2 border-white rounded-full cursor-pointer
                 checked:bg-white checked:border-white checked:after:block
                  checked:after:w-1 checked:after:h-1 checked:after:bg-white 
                  checked:after:rounded-full checked:after:mx-auto checked:after:my-auto"
              />
              ALTAR World
            </div>
            <div className="flex gap-2">
            <input
                type="radio"
                className="appearance-none w-[20px] h-[20px] 
                lg:w-4 lg:h-4 border-2 border-white rounded-full cursor-pointer
                 checked:bg-white checked:border-white checked:after:block
                  checked:after:w-1 checked:after:h-1 checked:after:bg-white 
                  checked:after:rounded-full checked:after:mx-auto checked:after:my-auto"
              />
              Music Label
            </div>
          </div>
          <div className=" w-full justify-center flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-between w-[90%] m-auto">
              <input
                type="text"
                placeholder="Email*"
                className="bg-transparent text-white placeholder:text-white border-b-2 border-gray-300 text-center w-[300px] py-2 outline-none"
              />

              <input
                type="text"
                placeholder="First name*"
                className="bg-transparent text-white placeholder:text-white border-b-2 border-gray-300 text-center w-[300px] py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="bg-transparent text-white placeholder:text-white border-b-2 border-gray-300 text-center w-[300px] py-2 outline-none"
              />
            </div>
            <div className="flex lg:w-full w-[80%] m-auto justify-center items-center gap-4">
              <input
                type="radio"
                className="appearance-none w-[35px] h-[20px] 
                lg:w-4 lg:h-4 border-2 border-white rounded-full cursor-pointer
                 checked:bg-white checked:border-white checked:after:block
                  checked:after:w-1 checked:after:h-1 checked:after:bg-white 
                  checked:after:rounded-full checked:after:mx-auto checked:after:my-auto"
              />
              I have understood the privacy policy and agree of the term of
              use.*
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="hover:bg-white hover:text-black rounded-md py-1 px-2 border border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
