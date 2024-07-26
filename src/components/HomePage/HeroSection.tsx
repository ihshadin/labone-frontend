"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/homePage.css";
import heroImage from "../../assets/images/labone-bg.png";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hidden md:flex">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div>
              <h2 className="text-7xl md:w-[380px] absolute left-5 bottom-20 text-primary">
                ল্যাব ওয়ান
                <span className="text-secondary"> হাসপাতালে </span> আপনাকে
                স্বাগতম
              </h2>
            </div>
            <Image src={heroImage} alt="labOne-hero" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={heroImage} alt="labOne-hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={heroImage} alt="labOne-hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={heroImage} alt="labOne-hero" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
