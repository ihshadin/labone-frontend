"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppointmentModal from "../Appointment/AppointmentModal";
import Link from "next/link";
import { LuCalendarCheck2, LuCalendarClock } from "react-icons/lu";
import { getDoctors } from "@/api/doctors.api";
import { TDoctor } from "@/types/doctors.type";

const SchedulesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectDoctor, setSelectDoctor] = useState("");

  const handleOpenModal = (id: string) => {
    setSelectDoctor(id);
    setIsOpen(true);
  };

  const getDoctorsData = async () => {
    const data = await getDoctors(0);
    setDoctors(data);
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <>
      <ul className="flex flex-col gap-3.5 divide-y [&>*:not(:first-child)]:pt-3.5">
        {doctors.map((doctor: TDoctor) => (
          <li key={doctor?._id} className="flex items-center gap-3">
            <Image
              height={60}
              width={60}
              src={doctor?.image}
              alt={doctor?.firstName}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex-1">
              <Link
                href="/#"
                className="block text-base font-semibold font-tiroBangla"
              >
                {doctor?.firstName + " " + doctor?.lastName}
              </Link>
              <p className="text-xs font-medium">{doctor?.specialization}</p>
              {/* <p className="text-sm text-primary font-medium">{doctor?.time}</p> */}
            </div>
            <button
              onClick={() => handleOpenModal(doctor?._id)}
              className="font-medium text-primary border hover:border-primary/60 px-1.5 py-1.5 rounded-full"
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
