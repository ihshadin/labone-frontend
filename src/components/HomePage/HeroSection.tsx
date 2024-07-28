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
import LabBtn from "@/utils/LabBtn";

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
            <div className="absolute max-w-[1250px] p-2 w-full h-full flex items-center">
              <div className="w-[50%] ml-12">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px] ">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px]">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
            <Image
              className="min-h-[700px] bg-center bg-cover "
              src={heroImage}
              alt="labOne-hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute max-w-[1250px] p-2 w-full h-full flex items-center">
              <div className="w-[50%] ml-12">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px] ">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px]">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
            <Image
              className="min-h-[700px] bg-center bg-cover "
              src={heroImage}
              alt="labOne-hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute max-w-[1250px] p-2 w-full h-full flex items-center">
              <div className="w-[50%] ml-12">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px] ">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px]">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
            <Image
              className="min-h-[700px] bg-center bg-cover "
              src={heroImage}
              alt="labOne-hero"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
