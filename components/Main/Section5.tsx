"use client";
import { motion } from "framer-motion";

export const Section5 = () => {
    return (
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          backgroundImage: "url('/53.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", 
          zIndex: 5,
          width: "100%",
        }}
      >
        <div className="h-[130vh] lg:h-[100vh]">
          <div className="flex absolute lg:top-[25%] top-[15%] gap-6 flex-col w-full justify-center items-center">
            <h2 className="text-[34px] lg:text-[60px] text-center font-medium">
              Join the community
            </h2>
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