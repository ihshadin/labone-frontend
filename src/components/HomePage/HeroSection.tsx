"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroBackground from "../../assets/images/Bannar-backg.png";
import heroBanner from "../../assets/images/Hero-bannar.png";
import heroImage from "../../assets/images/labone-bg.png";
import { Pagination } from "swiper/modules";
import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getBanner } from "@/api/hero.api";
import { TBanners } from "@/types/hero.type";

const HeroSection = () => {
  const [banners, setBanner] = useState<TBanners[]>([]);

  const getBannerData = async () => {
    const data = await getBanner();
    setBanner(data);
  };

  useEffect(() => {
    getBannerData();
  }, []);

  // console.log("banner--=> ", banners);

  return (
    <div className="">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="hero-banner-slider hero-pagination"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto px-2 py-14 h-full flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-[50%] flex flex-col justify-center">
                <h2 className="text-left text-[#058946] font-bold text-4xl md:text-[65px] leading-[1.1]">
                  Lab One Hospital
                  <span className="text-[#dc3545] block">Your Health,</span>
                  Our Focus
                </h2>
                <div>
                  <p className="text-base text-left text-accent mt-3 md:mt-7 mb-[18px] max-w-[550px]">
                    Ensuring your optimal health through dedicated,
                    compassionate care and advanced medical treatments is our
                    mission
                  </p>
                  <LabBtn link="tel:0198685963" text="Call Us" />
                </div>
              </div>
              <div className="md:w-[50%]">
                <Image src={heroBanner.src} alt="LabOne" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[700px] md:bg-cover md:bg-center"
            style={{ backgroundImage: `url(${heroImage.src})` }}
          >
            <div className="w-full max-w-[1250px] mx-auto p-2 h-full flex flex-col justify-center gap-10">
              <div className="w-full md:w-[50%]">
                <h2 className="text-left text-[#058946] font-tiroBangla font-bold text-5xl md:text-[65px] leading-[1.1] md:w-[380px]">
                  ল্যাব ওয়ান
                  <span className="text-[#dc3545]"> হাসপাতালে </span> আপনাকে
                  স্বাগতম
                </h2>
                <div>
                  <p className="text-base text-left text-accent mt-[28px] mb-[18px] font-tiroBangla">
                    সুখে দুখে আপনার পাশে ল্যাব ওয়ান হাসপাতাল
                  </p>
                  <LabBtn link="tel:0198685963" text="Call Us" />
                </div>
              </div>
              <div className="md:hidden">
                <Image src={heroImage.src} alt="LabOne" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {banners?.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div
              className="relative w-full h-[700px] bg-cover bg-center"
              style={{ backgroundImage: `url(${banner?.bgImage})` }}
            >
              <div className="w-full max-w-[1250px] mx-auto px-2 py-14 h-full flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[50%] flex flex-col justify-center">
                  <h2 className="text-left text-[#058946] font-bold text-4xl md:text-[65px] leading-[1.1]">
                    {banner?.title.split('"')[0]}
                    <span className="text-[#dc3545] block">
                      {banner?.title.split('"')[1]}
                    </span>
                    {banner?.title.split('"')[2]}
                  </h2>
                  <div>
                    <p className="text-base text-left text-accent mt-3 md:mt-7 mb-[18px] max-w-[550px]">
                      {banner?.shortDesc}
                    </p>
                    <LabBtn link="tel:0198685963" text="Call Us" />
                  </div>
                </div>
                <div className="md:w-[50%]">
                  <Image src={banner?.rightImage} alt="LabOne" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
