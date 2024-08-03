"use client";
import { baseApi } from "@/utils/baseUrl";
import { Image, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DoctorCard from "./DoctorCard";

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
    lastName: "Arafat",
    slug: "mri_machine_model_m50s0",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    degree: "হাড়জোড়া,পঙ্গু ,বাত ব্যথা ও ট্রমা বিশেষজ্ঞ ও সার্জন।",
  },
];

const DoctorsSearch = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  console.log("doctor data", activeSearch);

  //   const getDoctorData = async (query:string) => {
  //     const res = await fetch(`${baseApi}/doctor?searchTerm=${query}`);
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     return res.json();
  //   };

  const handleSearch = async (e) => {
    console.log(e)
  //   const query = e.target.value.toLowerCase();
  //   if (query === "") {
  //     setActiveSearch([]);
  //     return;
  //   }
  //   setActiveSearch(
  //     // await getDoctorData(query)
  //     doctorsData
  //       .filter(
  //         (doctor) =>
  //           doctor.firstName.includes(query) ||
  //           doctor.lastName.includes(query) ||
  //           doctor.degree.includes(query)
  //       )
  //       .slice(0, 8)
  //   );
  };

  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full py-4 px-6 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 text-accent  border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all "
          onChange={handleSearch}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-primary text-white rounded-full">
          <AiOutlineSearch />
        </button>
      </div>

      {/* {activeSearch.length > 0 && (
        <div className="z-50 absolute top-20 p-4 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-4 backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 ">
          {activeSearch.map((doctor) => (
            <Link
              href={`http://localhost:3000/doctors/${doctor._id}`}
              key={doctor._id}
              className="flex items-center gap-3"
            >
              <Image
                width={40}
                height={40}
                src={doctor.image}
                alt={doctor.firstName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="text-primary font-semibold">
                  {doctor.firstName} {doctor.lastName}
                </span>
                <p className="text-xs">{doctor.degree}</p>
              </div>
            </Link>
            // <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )} */}
    </form>
  );
};

export default DoctorsSearch;
