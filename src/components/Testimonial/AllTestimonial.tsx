import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { Rating, Star } from "@smastrom/react-rating";
import { TTestimonial } from "@/types/testimonial.type";
import { getTestimonials } from "@/api/reviews";
import "../../styles/AllTestimonials.css";

const AllTestimonial = async () => {
  const testimonials = await getTestimonials();

  return (
    <div className="test1 min-h-[70vh] pt-16 mx-auto max-w-[1250px] px-2 pb-10 md:pb-16 lg:pb-20">
      {testimonials?.map((testimonial: TTestimonial) => (
        <div
          key={testimonial?._id}
          className="border border-primary/10 text-accent mb-[20px] py-6 break-inside-avoid rounded-xl transition-all duration-300 shadow-[3px_4px_8px] hover:shadow-[3px_4px_8px_inset] shadow-primary/20 hover:shadow-primary/20"
        >
          <div className="flex px-5">
            {testimonial?.photo ? (
              <Image
                height={45}
                width={45}
                src={testimonial?.photo}
                className="overflow-hidden object-cover rounded-full h-[45px] w-[45px]"
                alt="Photo"
              />
            ) : (
              <FaUserCircle className="text-accent w-12 h-12" />
            )}
            <div className="flex-grow pl-3">
              <div className="flex justify-between">
                <h6 className="font-bold inline text-md">
                  {testimonial?.name}
                </h6>
              </div>
              <div className="text-sm text-slate-400 ">
                <Rating
                  style={{ maxWidth: 100 }}
                  readOnly
                  value={testimonial?.rating}
                  itemStyles={{
                    itemShapes: Star,
                    activeFillColor: [
                      "#da1600",
                      "#db711a",
                      "#dcb000",
                      "#61bb00",
                      "#009664",
                    ],
                    activeBoxBorderColor: [
                      "#da1600",
                      "#db711a",
                      "#dcb000",
                      "#61bb00",
                      "#009664",
                    ],
                    inactiveFillColor: "#9CA3AF",
                    inactiveBoxBorderColor: "#ddd",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex px-5 mt-3">
            <div className="tweet-text text-md">
              <p>{testimonial?.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTestimonial;
