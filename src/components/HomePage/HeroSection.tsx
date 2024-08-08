"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import heroBackground from "../../assets/images/Bannar-backg.png";
import heroBanner from "../../assets/images/Hero-bannar.png";
import heroImage from "../../assets/images/labone-bg.png";
// import required modules
import { Pagination } from "swiper/modules";
import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="hidden md:flex">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="hero-banner-slider"
      >
        {/* <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex flex-col justify-center">
              <div className="w-[50%]">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px]">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>
                <div>
                  <p className="text-base text-left text-accent mt-[28px] mb-[18px] font-tiroBangla">
                    সুখে দুখে আপনার পাশে ল্যাব ওয়ান হাসপাতাল
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex justify-between items-center">
              <div className="w-[50%] flex flex-col justify-center">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] ">
                  Lab One Hospital
                  <span className="text-[#dc3545] block">
                    {" "}
                    Your Health,{" "}
                  </span>{" "}
                  Our Focus
                </h2>
                <div>
                  <p className="text-base text-left text-accent mt-[28px] mb-[18px] font-tiroBangla max-w-[550px]">
                    Ensuring your optimal health through dedicated,
                    compassionate care and advanced medical treatments is our
                    mission
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>

              <div className="w-[50%]">
                <Image src={heroBanner.src} alt="LabOne" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex flex-col justify-center">
              <div className="w-[50%]">
                <h2 className="text-left text-[#058946] font-tiroBangla font-[700] text-[65px] leading-[1.1] md:w-[380px]">
                  বিষেশজ্ঞ
                  <span className="text-[#dc3545]"> ডাক্তারদের </span>
                  চেম্বার
                </h2>

                <div>
                  <p className="text-[16px] text-left text-accent mt-[28px] mb-[18px] font-tiroBangla">
                    সুখে দুখে আপনার পাশে
                  </p>
                  <LabBtn link="/appointment" text="Call Us" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
