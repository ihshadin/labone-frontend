"use client";
import SectionHeader from "@/utils/SectionHeader";
import DoctorCard from "@/components/Doctors/DoctorCard";
import { TDoctor } from "@/types/doctors.type";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DoctorsSection = ({ doctors }: { doctors: TDoctor[] }) => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Our Doctor"
          heading="Docter’s In The Medical Sciences"
        />
        <div className="pt-10 lg:pt-14">
          <Swiper
            navigation={true}
            slidesPerView={2}
            spaceBetween={50}
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
            modules={[Navigation]}
            className="doctors-swiper"
          >
            {doctors?.map((doctor: TDoctor) => (
              <SwiperSlide key={doctor._id}>
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DoctorsSection;
