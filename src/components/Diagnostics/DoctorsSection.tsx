"use client";
import SectionHeader from "@/utils/SectionHeader";
import DoctorCard from "@/components/Doctors/DoctorCard";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const doctorsData = [
  {
    _id: "64b4da56b07a982d6c8d5aef1",
    firstName: "ডাঃ মোঃ ইয়াসির আরাফাত",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m500",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    degree: "পরিপাকতন্ত্র, লিভার ও মেডিসিন বিশেষজ্ঞ",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef2",
    firstName: "ডাঃ আরিফা",
    lastName: "আখতার",
    slug: "mri_machine_model_m5002",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%201.jpg",
    degree: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef5",
    firstName: "ডাঃ তোহমিনা",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m5f00",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%204.jpg",
    degree: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef6",
    firstName: "সহযোগী অধ্যাপক ডাঃ এ এ এম",
    lastName: "জহুরুল ইসলাম",
    slug: "mri_machine_model_m5s00",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%2010.jpg",
    degree: "বক্ষব্যাধি, এ্যাজমা ও মেডিসিন রোগ বিশেষজ্ঞ।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef7",
    firstName: "সহযোগী অধ্যাপক লেঃ কর্নেল (ডাঃ) জাহিদ হাসান",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m50s0",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    degree: "হাড়জোড়া,পঙ্গু ,বাত ব্যথা ও ট্রমা বিশেষজ্ঞ ও সার্জন।",
  },
];

const DoctorsSection = () => {
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
            {doctorsData.map((doctor) => (
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
