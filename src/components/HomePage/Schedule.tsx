import Image from "next/image";
import React from "react";

const Schedule = () => {
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
    {
      name: "সহঃ অধ্যাপক ডাঃ মোঃ কামরুজ্জামান",
      specialty: "মেডিসিন, হৃদরোগ, উচ্চ রক্তচাপ, বাতজ্বর ও ডায়াবেটিস বিশেষজ্ঞ।",
      time: "বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ০০",
      photo: "/images/doctor2.jpg",
    },
    // Add the rest of the data in the same format
  ];

  return (
    <div className="mb-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="widget-title text-center mb-6">
        <h4 className="text-xl font-semibold">Live Schedule</h4>
        <br />
        <h5 className="text-lg">
          Day: <span className="text-green-500">Saturday</span>
        </h5>
        <hr className="my-4" />
      </div>
      <ul className="space-y-6">
        {schedulesData.map((item, index) => (
          <li
            key={index}
            className="p-4 border-b border-gray-200 flex items-center space-x-4"
          >
            <Image
              height={64}
              width={64}
              src={item.photo}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <a href="#" className="block text-base font-medium">
                {item.name} <br />
                <span className="text-sm">{item.specialty}</span> <br />
                <span className="text-green-600">{item.time}</span>
              </a>
            </div>
            <button className="bg-gradient-to-r from-[#0a8849] to-[#07ccec] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
