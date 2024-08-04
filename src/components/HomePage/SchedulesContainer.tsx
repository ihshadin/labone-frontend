"use client";
import LiveTimer from "@/utils/LiveTimer";
import SchedulesList from "@/components/HomePage/SchedulesList";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input, Select, SelectItem } from "@nextui-org/react";

const SchedulesContainer = () => {
  const weekDays = [
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
  ];

  return (
    <>
      <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 my-10 rounded-xl">
        <div className="flex items-center justify-between mb-2 md:mb-2">
          <h2 className="text-primary text-2xl font-semibold">
            Today&apos;s schedule
          </h2>
          <LiveTimer />
        </div>
        <div className="grid md:grid-cols-2 items-center gap-3 md:gap-5">
          <Input
            type="text"
            placeholder="Search Doctor by Name"
            classNames={{
              label:
                "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
              inputWrapper: [
                "border",
                "bg-white",
                "hover:border-primary/50",
                "group-data-[hover=true]:bg-white",
                "group-data-[focus=true]:bg-white",
                "group-data-[focus=true]:border-primary/50",
              ],
            }}
          />
          <Select
            placeholder="Search Doctor by Day"
            classNames={{
              label:
                "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
              trigger:
                "border bg-white hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
            }}
            //   defaultSelectedKeys={[defaultDoctor]}
            //   onChange={(e) => handleDoctorChange(e.target.value)}
          >
            {weekDays?.map((day) => (
              <SelectItem key={day?.key} value={day?.key}>
                {day?.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="mt-4 md:mt-5">
          <SchedulesList />
        </div>
      </div>
    </>
  );
};

export default SchedulesContainer;
