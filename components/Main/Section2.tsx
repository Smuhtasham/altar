"use client";
import { motion} from "framer-motion";
import { useState } from "react";
import Image from "next/image";


export const Section2: React.FC = () => {
    // State to track the currently displayed image
    const [currentImage, setCurrentImage] = useState<string>("/01.png");
  
    // Mapping categories to images
    const images: Record<
      "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10",
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
        <div className="h-[100vh] lg:h-[90vh] justify-between text-black flex pt-20 flex-col lg:flex-row gap-4 lg:gap-0 lg:pt-20 w-[80%] lg:m-auto">
          {/* Food Categories */}
          <div className="lg:w-[60%] w-[20%]">
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
            <motion.div
              key={currentImage}
              initial={{ scale: 0.6, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "30%",
                position: "absolute",
                top: "6rem", 
                right: 10,
                gap: "0.5rem",
              }}
            >
              <Image
                src={currentImage}
                className="w-[300px] h-[400px] object-cover"
                width={500}
                height={500}
                alt="Category"
              />
            </motion.div>
          </div>
      </motion.div>
    );
  };