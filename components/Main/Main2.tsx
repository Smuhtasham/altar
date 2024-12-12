"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "swiper/css";
import "../Main/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";

import "swiper/css/pagination";
import { useState } from "react";

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
      <div className="w-[70%] flex justify-between m-auto">
        <img src="elle.png" className="w-[30%]" alt="" />
        <img src="architectural-digest.png" className="w-[30%]" alt="" />
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
        height: "80vh",
        backgroundColor: "#faf8f0",
        overflow: "hidden",
      }}
    >
      <div className="pt-8">
        <Swiper
          slidesPerView={1.4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/10.png" alt="Image 1" className="w-[800px] h-[500px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/06.png" alt="Image 2" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/19.png"
              alt="Image 3"
              className="w-[800px] h- object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/22.png"
              alt="Image 1"
              className="w-[800px] h- object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/39.png"
              alt="Image 1"
              className="w-[800px] h- object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/40.png"
              alt="Image 1"
              className="w-[800px] h- object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export const Section2: React.FC = () => {
  // State to track the currently displayed image
  const [currentImage, setCurrentImage] = useState<string>("/01.png");

  // Mapping categories to images
  const images: Record<
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10",
    string
  > = {
    "1": "/21.png",
    "2": "/02.png",
    "3": "/03.png",
    "4": "/06.png",
    "5": "/08.png",
    "6": "/10.png",
    "7": "/22.png",
    "8": "/18.png",
    "9": "/39.png",
    "10": "/42.png",
  };

  // Function to handle hover
  const handleHover = (category: keyof typeof images) => {
    setCurrentImage(images[category]);
  };

  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#faf8f0",
      }}
    >
      <div className="h-[100vh] lg:h-[90vh] justify-between text-black flex flex-col lg:flex-row gap-4 lg:gap-0 lg:pt-20 w-[80%] m-auto">
        {/* Food Categories */}
        <div className="w-[60%]">
          <table className=" w-[100%] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 px-4 font-bold text-[22px]">Category</th>
                <th className="py-2 px-4 font-bold text-[22px]">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-b hover:bg-[#a0a0a022] cursor-pointer"
                onMouseEnter={() => handleHover("1")}
              >
                <td className="py-2 px-4">Coffee & Breakfast</td>
                <td className="py-2 px-4 hover:underline">
                  <p>Coffee & Bowls</p>
                </td>
              </tr>
              <tr
                className="border-b hover:bg-[#a0a0a022] cursor-pointer"
                onMouseEnter={() => handleHover("2")}
              >
                <td className="py-2 px-4">Coffee & Breakfast</td>
                <td className="py-2 px-4 hover:underline">
                <p>French Bakery</p>
                </td>
              </tr>
              <tr
                className="border-b hover:bg-[#a0a0a022] cursor-pointer"
                onMouseEnter={() => handleHover("4")}
              >
                <td className="py-2 px-4">Lunch</td>
                <td className="py-2 hover:underline px-4">
                  <p>Seafood</p>
                </td>
              </tr>
              <tr className="border-b hover:bg-[#a0a0a022] cursor-pointer">
                <td className="py-2 px-4">Dinner</td>
                <td className="py-2 px-4">
                  <p
                    className="hover:underline cursor-pointer"
                    onMouseEnter={() => handleHover("5")}
                  >
                    Mexican
                  </p>
                </td>
              </tr>
              <tr className="border-b hover:bg-[#a0a0a022] cursor-pointer">
                <td className="py-2 px-4">Dinner</td>
                <td className="py-2 px-4">
                  <p
                    className="hover:underline cursor-pointer"
                    onMouseEnter={() => handleHover("6")}
                  >
                    Asian & Sushi
                  </p>
                </td>
              </tr>
              <tr className="border-b hover:bg-[#a0a0a022] cursor-pointer">
                <td className="py-2 px-4">Dinner</td>
                <td className="py-2 px-4">
                  <p
                    className="hover:underline cursor-pointer"
                    onMouseEnter={() => handleHover("7")}
                  >
                    French
                  </p>
                </td>
              </tr>
              <tr className="border-b hover:bg-[#a0a0a022] cursor-pointer">
                <td className="py-2 px-4">Dinner</td>
                <td className="py-2 px-4">
                  <p
                    className="hover:underline cursor-pointer"
                    onMouseEnter={() => handleHover("8")}
                  >
                    Italian
                  </p>
                </td>
              </tr>
              <tr
                className="hover:bg-[#a0a0a022] cursor-pointer"
                onMouseEnter={() => handleHover("10")}
              >
                <td className="py-2 px-4">Order Online</td>
                <td className="py-2 hover:underline px-4">
                  <p>Mexican</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Image Display */}
        <div className="w-[30%] absolute top-20 right-0 gap-2">
          <img
            src={currentImage}
            className="w-[300px] h-[400px] object-cover"
            alt="Category"
          />
        </div>
      </div>
    </motion.div>
  );
};

// export const Section3 = () => {
//   const { scrollY } = useScroll();
//   const imageHeight = useSpring(
//     useTransform(scrollY, [2200, 2500], [150, 360]),
//     {
//       stiffness: 60,
//     }
//   );
//   const smallImageHeight = useSpring(
//     useTransform(scrollY, [2300, 2400], [200, 360]),
//     {
//       stiffness: 60,
//     }
//   );
//   return (
//     <motion.div
//       style={{
//         position: "sticky",
//         top: 0,
//         backgroundColor: "#faf8f0",
//       }}
//     >
//       <div className="h-[120vh] lg:h-[100vh] flex flex-col lg:flex-row  lg:justify-center py-12 gap-4 lg:gap-0 lg:py-28 items-center w-[90%] m-auto">
//         <div className="w-full lg:hidden flex lg:w-[50%]">
//           <motion.div
//             style={{
//               height: smallImageHeight,
//             }}
//           >
//             <img
//               src="/15.png"
//               className="w-[300px] lg:w-[500px] h-full object-cover"
//               alt="Section 2 Image"
//             />
//           </motion.div>
//         </div>
//         <div className="w-full lg:w-[50%]  text-black flex flex-col items-start gap-1 lg:gap-4">
//           <p>/ BAZAAR</p>
//           <h3 className="text-[30px] lg:text-[56px] font-medium">
//             Timeless Creativity
//           </h3>
//           <p className="lg:w-[400px]">
//             The Scorpios Bazaar celebrates artisanship through a handpicked
//             selection of like-minded brands that share and honor core values of
//             timeless craftsmanship, cultural heritage and sustainability.
//           </p>
//           <button className="border border-black py-1 px-2">
//             DISCOVER MORE
//           </button>
//         </div>
//         <div className="w-full hidden lg:flex lg:w-[50%]">
//           <motion.div
//             style={{
//               position: "absolute",
//               top: 160, // Keep the bottom of the image fixed
//               height: imageHeight, // Dynamically changing height from top
//               width: "50%",
//               overflow: "hidden", // Hide any overflowing part of the image
//             }}
//           >
//             <img
//               src="/15.png"
//               className="w-[300px] lg:w-[500px] h-full object-cover"
//               alt="Section 2 Image"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

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
        <h2 className="text-[40px] lg:text-[80px] font-semibold">
          ALTAR TULUM
        </h2>
        <div>
          <button
            className="px-2 py-1 lg:px-8 lg:py-2 text-[18px] font-semibold lg:text-base rounded-sm cursor-pointer"
            style={{
              border: `1px solid white`,
              transition: "border-color 1s ease",
            }}
            onClick={() =>
              (window.location.href =
                "https://www.airbnb.com/rooms/589202359470803966")
            } // Replace with your link
          >
            RESERVATIONS
          </button>
        </div>
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
        backgroundRepeat: "no-repeat",
        zIndex: 5,
        width:"100%",
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
