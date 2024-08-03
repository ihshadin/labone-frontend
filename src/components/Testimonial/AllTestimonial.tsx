"use client";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar, FaUserCircle } from "react-icons/fa";
import "../../styles/AllTestimonials.css";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

const AllTestimonial = () => {
  //   const [feedback, setFeedback] = useState([]);
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

  // useEffect(() => {
  //     axiosNormal.get('/feedback')
  //         .then(data => {
  //             setFeedback(data)
  //         })
  // }, [])

  if (TestimonialData.length > 0) {
    return (
      <div className="test1 min-h-[70vh] pt-16 mx-auto max-w-[1250px] px-2 py-10 lg:py-10">
        {TestimonialData.map((Testimonial) => (
          <div
            key={Testimonial.id}
            className="box exploreCard transition-all duration-300 border border-gray-300 hover:border-[#0fcda156] mb-[15px] shadow-xl break-inside-avoid rounded-xl text-primary py-6 "
          >
            <div className="flex px-5">
              {Testimonial?.photo ? (
                <Image
                  height={45}
                  width={45}
                  src={Testimonial?.photo}
                  className="overflow-hidden object-cover rounded-full h-[45px] w-[45px]"
                  alt="Photo"
                />
              ) : (
                <FaUserCircle className="text-[#0fcda1] w-12 h-12" />
              )}
              <div className="flex-grow pl-3">
                <div className="flex justify-between">
                  <div>
                    <h6 className="font-bold inline text-md">
                      {Testimonial?.name}
                    </h6>
                  </div>
                </div>
                <div className="text-sm text-slate-400 ">
                  <a className="lowercase">
                    @{Testimonial?.name || "username"}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex px-5 mt-2">
              <div className="tweet-text text-md">
                <p>{Testimonial?.message}</p>
                {/* <p style={{ "--link-color": "#5d5dff" }}>{Testimonial?.message}</p> */}
              </div>
            </div>
            <div className="w-full flex justify-between px-5 mt-2">
              <div className="inline-flex items-center text-sm text-gray-600 mt-2">
                <Rating
                  // initialRating={Testimonial?.rating}
                  readOnly
                  value={4.5}
                  className="flex items-center justify-center"
                  // emptySymbol={
                  //   <FaRegStar className="text-lg mr-3 text-amber-500" />
                  // }
                  // fullSymbol={
                  //   <FaStar className="text-lg mr-3 text-amber-500" />
                  // }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return [];
  }
};

export default AllTestimonial;
