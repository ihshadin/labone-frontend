"use client";
import Image from "next/image";
import React, { useState } from "react";
import AppointmentModal from "../Appointment/AppointmentModal";

const Schedules = () => {
  const [isOpen, setIsOpen] = useState(false);

  const schedulesData = [
    {
      name: "ডাঃ তোহমিনা আক্তার",
      specialty:
        "স্ত্রী রোগ, প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ৩০",
      photo: "/images/doctor1.jpg",
    },
    {
      name: "সহঃ অধ্যাপক ডাঃ মোঃ কামরুজ্জামান",
      specialty: "মেডিসিন, হৃদরোগ, উচ্চ রক্তচাপ, বাতজ্বর ও ডায়াবেটিস বিশেষজ্ঞ।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ০০",
      photo: "/images/doctor2.jpg",
    },
    {
      name: "সহঃ অধ্যাপক ডাঃ মোঃ কামরুজ্জামান",
      specialty: "মেডিসিন, হৃদরোগ, উচ্চ রক্তচাপ, বাতজ্বর ও ডায়াবেটিস বিশেষজ্ঞ।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ০০",
      photo: "/images/doctor2.jpg",
    },
    {
      name: "সহঃ অধ্যাপক ডাঃ মোঃ কামরুজ্জামান",
      specialty: "মেডিসিন, হৃদরোগ, উচ্চ রক্তচাপ, বাতজ্বর ও ডায়াবেটিস বিশেষজ্ঞ।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ০০",
      photo: "/images/doctor2.jpg",
    },
    {
      name: "সহঃ অধ্যাপক ডাঃ মোঃ কামরুজ্জামান",
      specialty: "মেডিসিন, হৃদরোগ, উচ্চ রক্তচাপ, বাতজ্বর ও ডায়াবেটিস বিশেষজ্ঞ।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ০০",
      photo: "/images/doctor2.jpg",
    },
  ];

  const handleOpenModal = () => {
    // setModalContent(content);
    setIsOpen(true);
  };

  return (
    <>
      {/* <div className="widget-title text-center mb-6">
        <h4 className="text-xl font-semibold">Live Schedule</h4>
        <br />
        <h5 className="text-lg">
          Day: <span className="text-green-500">Saturday</span>
        </h5>
        <hr className="my-4" />
      </div> */}
      <ul className="flex flex-col gap-3.5 divide-y [&>*:not(:first-child)]:pt-3.5">
        {schedulesData.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <Image
              height={60}
              width={60}
              src={
                "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%201.jpg"
              }
              alt={item.name}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex-1">
              <a
                href="/#"
                className="block text-base font-semibold font-tiroBangla"
              >
                {item.name}
              </a>
              <p className="text-xs font-medium">{item.specialty}</p>
              <p className="text-sm text-primary font-medium">{item.time}</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-[#0a8849] to-[#07ccec] text-sm font-medium text-white px-3 py-1.5 rounded-full"
            >
              Appointment
            </button>
          </li>
        ))}
      </ul>
      <AppointmentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // content={modalContent}
      />
    </>
  );
};

export default Schedules;
