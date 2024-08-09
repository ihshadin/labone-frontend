"use client";
import { baseApi } from "@/api/api";
import { TDoctor } from "@/types/doctors.type";
import { Image, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LuCalendarCheck2 } from "react-icons/lu";
import { formatCustomTimePeriod } from "./TimeRangeFormate";
import AppointmentModal from "@/components/Appointment/AppointmentModal";

const DoctorsSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDoctor, setSelectDoctor] = useState("");
  const [searchText, setSearchText] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const handleOpenModal = (id: string) => {
    setSelectDoctor(id);
    setIsOpen(true);
  };

  useEffect(() => {
    const getDoctorData = async () => {
      const res = await fetch(
        `${baseApi}/doctor?searchTerm=${searchText}&limit=0`
      );
      const data = await res.json();
      setDoctors(data?.data?.result);
    };

    getDoctorData();
  }, [searchText]);

  return (
    <>
      <div className="w-full lg:w-[250px] relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Search by Doctor Name"
            className="w-full text-base py-1.5 px-4 rounded-full bg-primary/5 text-accent border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all "
            onChange={(e: any) => setSearchText(e?.target?.value)}
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {searchText?.length > 0 && (
          <ul className="z-50 absolute top-12 p-4 text-accent w-[550px] rounded-xl right-0 bg-white/90 flex flex-col gap-3.5 divide-y overflow-y-auto max-h-[400px] customScroll shadow-2xl [&>*:not(:first-child)]:pt-3.5">
            {doctors?.map((doctor: TDoctor) => (
              <>
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
                      href={`/doctors/${doctor?._id}`}
                      className="block text-base font-semibold font-tiroBangla hover:underline"
                    >
                      {doctor?.firstName + " " + doctor?.lastName}
                    </Link>
                    <p className="text-xs opacity-80 font-medium">
                      {doctor?.specialization}
                    </p>
                    <p className="text-sm text-primary font-medium flex flex-col">
                      {/* {formatCustomTimePeriod(
                      doctor?.startTime,
                      schedule?.endTime
                    )} */}
                      {/* {doctor?.schedules?.map((schedule) => (
                      <span key={schedule?._id}>
                        {schedule?.scheduleDay +
                          " ( " +
                          formatCustomTimePeriod(
                            schedule?.startTime,
                            schedule?.endTime
                          ) +
                          " )"}
                      </span>
                    ))} */}
                      {doctor?.schedules?.[0]?.scheduleDay +
                        " ( " +
                        formatCustomTimePeriod(
                          doctor?.schedules?.[0]?.startTime,
                          doctor?.schedules?.[0]?.endTime
                        ) +
                        " )..."}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenModal(doctor?._id)}
                    className="font-medium mr-2 text-primary border border-primary/50 hover:border-primary/80 px-1.5 py-1.5 rounded-full"
                  >
                    <LuCalendarCheck2 size={18} />
                  </button>
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
      <AppointmentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectDoctor={selectDoctor}
      />
    </>
  );
};

export default DoctorsSearch;
