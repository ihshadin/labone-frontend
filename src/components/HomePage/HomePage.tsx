"use client";
import React from "react";
import HeroSection from "./HeroSection";
import Appointment from "./Appointment";
import Schedule from "./Schedule";
import { Select, SelectItem } from "@nextui-org/react";
import LabBtn from "@/utils/LabBtn";

const HomePage = () => {
  const days = [
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
    { key: "monday", label: "Monday" },
  ];

  return (
    <div>
      <HeroSection />
      <div className="flex items-center justify-between gap-6 bg-white rounded-lg p-10 max-w-[1250px] mx-auto shadow-lg my-10">
        <Select
          //   color={color}
          //   label="Select Day"
          //   labelPlacement="outside"
          placeholder="Select a Day"
          defaultSelectedKeys={[""]}
          className="w-full rounded-xl"
        >
          {days.map((day) => (
            <SelectItem key={day.key}>{day.label}</SelectItem>
          ))}
        </Select>
        <LabBtn text="Search Now" link="/" />
      </div>
      <div className="flex gap-4 p-4 items-start">
        <Appointment />
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
