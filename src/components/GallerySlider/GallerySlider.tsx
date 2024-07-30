"use client";
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySlider = ({ photos }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="gallery-slider"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <Image
              removeWrapper
              className="w-full max-w-[380px] object-cover border-2"
              src={photo}
              alt="Services image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GallerySlider;
