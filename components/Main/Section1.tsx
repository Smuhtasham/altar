"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Main/style.css";
import "swiper/css/pagination";

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
        <div className="py-4">
          <Swiper
            slidesPerView={1.2}
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
                className="w-[800px] h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/22.png"
                alt="Image 1"
                className="w-[800px] h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/39.png"
                alt="Image 1"
                className="w-[800px] h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/40.png"
                alt="Image 1"
                className="w-[800px] h-[500px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    );
  };