"use client";
import SectionHeader from "@/utils/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";
import { baseApi } from "@/utils/baseUrl";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseApi}/reviews`);
        const data = await response.json();
        setTestimonials(data?.data?.result);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
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
            {testimonials?.map((testimonial, index) => (
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
