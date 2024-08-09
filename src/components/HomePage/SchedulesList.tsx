"use client";
import Image from "next/image";
import React, { useState } from "react";
import AppointmentModal from "../Appointment/AppointmentModal";
import Link from "next/link";
import { LuCalendarCheck2 } from "react-icons/lu";

import { TSchedule } from "@/types/schedule.type";
import { formatCustomTimePeriod } from "@/utils/TimeRangeFormate";

const SchedulesList = ({ schedules }: { schedules: TSchedule[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDoctor, setSelectDoctor] = useState("");

  const handleOpenModal = (id: string) => {
    setSelectDoctor(id);
    setIsOpen(true);
  };

  return (
    <>
      <ul className="flex flex-col gap-3.5 divide-y overflow-y-scroll h-[430px] customScroll [&>*:not(:first-child)]:pt-3.5">
        {schedules.map((schedule: TSchedule) => (
          <li key={schedule?.doctorID?._id} className="flex items-center gap-3">
            <Image
              height={60}
              width={60}
              src={schedule?.doctorID?.image}
              alt={schedule?.doctorID?.firstName}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex-1">
              <Link
                href={`/doctors/${schedule?.doctorID?._id}`}
                className="block text-base font-semibold font-tiroBangla hover:underline"
              >
                {schedule?.doctorID?.firstName +
                  " " +
                  schedule?.doctorID?.lastName}
              </Link>
              <p className="text-xs font-medium">
                {schedule?.doctorID?.specialization}
              </p>
              <p className="text-sm text-primary font-medium">
                {formatCustomTimePeriod(schedule?.startTime, schedule?.endTime)}
              </p>
            </div>
            <button
              onClick={() => handleOpenModal(schedule?.doctorID?._id)}
              className="font-medium mr-2 text-primary border hover:border-primary/60 px-1.5 py-1.5 rounded-full"
            >
              {/* Appointment */}
              <LuCalendarCheck2 size={18} />
            </button>
          </li>
        ))}
      </ul>
      <AppointmentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectDoctor={selectDoctor}
      />
    </>
  );
};

export default SchedulesList;
