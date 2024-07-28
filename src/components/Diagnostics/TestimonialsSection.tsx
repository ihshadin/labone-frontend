"use client";
import SectionHeader from "@/utils/SectionHeader";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "John Doe",
    treatment: "Arthroscopic knee surgery",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBrQJZIWlflMXDnp5Ilk_9dHmhFd1MSPjZw&s",
    comment:
      "The hospital provides excellent care with state-of-the-art facilities. I am grateful for the successful surgery and the care I received. The hospital provides excellent care with state-of-the-art facilities. I am grateful for the successful surgery and the care I received. The hospital provides excellent care with state-of-the-art facilities. I am grateful for the successful surgery and the care I received.",
  },
  {
    name: "Jane Smith",
    treatment: "Normal delivery",
    photo:
      "https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg",
    comment:
      "The staff was very supportive during my childbirth. I felt safe and well taken care of throughout my stay. The staff was very supportive during my childbirth. I felt safe and well taken care of throughout my stay. The staff was very supportive during my childbirth. I felt safe and well taken care of throughout my stay. The staff was very supportive during my childbirth. I felt safe and well taken care of throughout my stay.",
  },
  {
    name: "Emily Johnson",
    treatment: "Cardiac catheterization",
    photo: "https://labonehospital.com/img/bg/touch-illustration.png",
    comment:
      "The cardiology department was outstanding. The doctors and nurses were very knowledgeable and caring.",
  },
  {
    name: "Michael Brown",
    treatment: "EEG monitoring",
    photo:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%2010.jpg",
    comment:
      "I received exceptional care for my neurological condition. The treatment plan was well explained and executed.",
  },
  {
    name: "Sarah Davis",
    treatment: "Hip replacement surgery",
    photo:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%207.jpg",
    comment:
      "My experience at the orthopedic department was very positive. The surgery went smoothly and the follow-up care was excellent.",
  },
];

const TestimonialsSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[950px] px-2 py-10 lg:py-24">
        <SectionHeader
          subHeading="TESTIMONIAL"
          heading="What Our Client’s Say’s"
          desc="Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa."
        />
        <div className="pt-10 lg:pt-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="testimonial-swiper vertical-pagination"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
