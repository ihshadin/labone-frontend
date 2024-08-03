import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { Rating, Star } from "@smastrom/react-rating";
import "../../styles/AllTestimonials.css";

const AllTestimonial = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "John Doe",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 5,
      message: "Excellent service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 4,
      message: "Very good experience, but there's room for improvement.",
    },
    {
      id: 3,
      name: "Samuel Green",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 5,
      message: "Amazing experience! Will definitely come back.",
    },
    {
      id: 4,
      name: "Emily Brown",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 3,
      message: "Average service, could be better.",
    },
    {
      id: 5,
      name: "Michael Johnson",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 4,
      message: "Good overall, but the waiting time was long.",
    },
    {
      id: 6,
      name: "Sarah Lee",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 5,
      message: "Fantastic! I felt very well taken care of.",
    },
    {
      id: 7,
      name: "David Wilson",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 2,
      message: "Not satisfied with the service provided.",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 4,
      message: "Good experience, friendly staff.",
    },
    {
      id: 9,
      name: "Daniel Davis",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 5,
      message: "Exceptional service! Truly outstanding.",
    },
    {
      id: 10,
      name: "Sophia Miller",
      photo:
        "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%202.jpg",
      rating: 3,
      message: "It was okay, but I expected more.",
    },
  ];

  return (
    <div className="test1 min-h-[70vh] pt-16 mx-auto max-w-[1250px] px-2 pb-10 md:pb-16 lg:pb-20">
      {TestimonialData.map((testimonial) => (
        <div
          key={testimonial.id}
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
