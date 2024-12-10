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
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        paddingBottom: "10vh",
      }}
    >
      <div className="w-[80%] py-32 m-auto">
        <h2 className="text-black font-semibold text-[35px]">
          Our contemporary agora for shared celebration set against the Cycladic
          sunset and the soulful beat of Scorpios
        </h2>
      </div>
    </motion.div>
  );
};
export const Section1 = () => {
  const { scrollY } = useScroll();
  const imageHeight = useSpring(useTransform(scrollY, [700, 900], [700, 800]), {
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
      <p className="absolute top-10 text-[16px]">/ ENCOUNTER</p>
      <h2 className="absolute text-[56px] font-bold w-[400px]">Redefining the future of art</h2>
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
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div className="flex justify-center py-40 items-center w-[90%] m-auto">
        <div className="w-[50%]">
          <motion.div
            style={{
              width: "500px",
              height: imageHeight,
            }}
          >
            <img
              src="/24.png"
              className="w-full h-full object-cover"
              alt="Section 2 Image"
            />
          </motion.div>
        </div>
        <div className="w-[50%] text-black flex flex-col items-start gap-4">
          <p>/ Food</p>
          <h3 className="text-[56px] font-medium">A Taste of Our Culture</h3>
          <p>
            Like our music, art, and wellbeing explorations, the kitchen at
            Scorpios thrives on breaking down borders and bringing people
            together.
          </p>
          <button className="underline-offset-1">Explore</button>
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
  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div className="flex justify-center py-28 items-center w-[90%] m-auto">
        <div className="w-[50%] text-black flex flex-col items-start gap-4">
          <p>/ BAZAAR</p>
          <h3>Timeless Craftmanship and Creativity</h3>
          <p className="w-[400px]">
            The Scorpios Bazaar celebrates artisanship through a handpicked
            selection of like-minded brands that share and honor core values of
            timeless craftsmanship, cultural heritage and sustainability. Step
            inside the handwoven bedouin tent that is the current home of the
            Bazaar in Mykonos, and you’ll be immersed into a reverential,
            multi-sensory retail experience.
          </p>
          <button className="border border-black py-1 px-2">
            DISCOVER MORE
          </button>
        </div>
        <div className="w-[50%]">
          <motion.div
            style={{
              width: "500px",
              height: imageHeight,
            }}
          >
            <img
              src="/15.png"
              className="w-full h-full object-cover"
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
      <div className="flex absolute left-[22%] top-[32%] gap-6 flex-col w-[60%] justify-center items-center">
        <h2 className="text-[80px] font-semibold">Soho Roc House</h2>
        <p className="w-[60%] text-center">
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
        height: "100vh",
        backgroundImage: "url('/53.png')",
        zIndex: 3,
      }}
    >
      <div className="">
        <div className="flex absolute top-[25%] gap-6 flex-col w-full justify-center items-center">
          <h2 className="text-[60px] font-medium">Join the community</h2>
          <p className="text-center text-[24px] w-[750px]">
            Sign up to follow the Scorpios journey to new shores, receive
            inner-circle updates and special offers. Or be the first to hear
            about the latest releases and goings-on inside the Scorpios Music
            label.
          </p>
          <div className="flex gap-7">
            <div className="flex gap-2">
              <input type="radio" className="" />
              ALTAR World
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              Music Label
            </div>
          </div>
          <div className=" w-full justify-center flex flex-col gap-4">
            <div className="flex justify-between w-[90%] m-auto">
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
            <div className="flex justify-center items-center gap-4">
              <input
                type="radio"
                className="appearance-none w-4 h-4 border-2 border-white rounded-full cursor-pointer checked:bg-white checked:border-white checked:after:block checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:mx-auto checked:after:my-auto"
              />
              I have understood the privacy policy and agree of the term of
              use.*
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="py-1 px-2 border border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
