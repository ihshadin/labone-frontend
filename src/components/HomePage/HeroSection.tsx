"use client";
import LabBtn from "@/utils/LabBtn";
import "../../styles/homePage.css";
import heroImage from "../../assets/images/labone-bg.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="hidden md:flex">
      <Swiper 
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="hero-slider hero-pagination"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex flex-col justify-center">
              <div>
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px]">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px] font-tiroBangla">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
            {/* <Image
              className="min-h-[700px]"
              src={heroImage}
              alt="labOne-hero"
            /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex flex-col justify-center">
              <div>
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px]">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px] font-tiroBangla">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
            {/* <Image
              className="min-h-[700px]"
              src={heroImage}
              alt="labOne-hero"
              jahid vai is good
            /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
