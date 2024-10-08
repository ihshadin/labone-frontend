"use client";
import { useEffect, useState } from "react";
import SectionHeader from "@/utils/SectionHeader";
import TestimonialCard from "@/components/Testimonial/TestimonialCard";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import LabBtn from "@/utils/LabBtn";
import { getTestimonials } from "@/api/reviews.api";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonialsData = async () => {
      const data = await getTestimonials(5);
      setTestimonials(data);
    };
    getTestimonialsData();
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
              dynamicBullets: true,
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
        <div className="w-[225px] mx-auto pt-5">
          <LabBtn link="/testimonials" text="Leave your review" />
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
