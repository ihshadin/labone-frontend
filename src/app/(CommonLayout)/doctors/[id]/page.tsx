import { getDoctor } from "@/api/doctors.api";
import { TSchedule } from "@/types/schedule.type";
import AppointmentModalSection from "@/utils/AppointmentModal/AppointmentModalSection";
import Breadcamp from "@/utils/Breadcamp";
import LabBtn from "@/utils/LabBtn";
import {
  formatEndTimePeriod,
  formatStartTimePeriod,
} from "@/utils/TimeRangeFormate";
import { Image } from "@nextui-org/react";
import React from "react";

const DoctorSinglePage = async ({ params }: { params: { id: string } }) => {
  const doctor = await getDoctor(params?.id);

  console.log("doctor:--", doctor);

  return (
    <>
      <Breadcamp title="Doctor Details" />
      <div className="mx-auto max-w-[1250px] px-2 py-20 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-8 gap-8 md:gap-14">
          <div className="md:col-span-3">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={doctor?.image}
              alt="Services image"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
              {doctor?.firstName + " " + doctor?.lastName}
            </h2>
            <p className="inline-block text-xs md:text-sm text-white uppercase font-medium font-tiroBangla bg-primary px-5 py-1 rounded-full">
              {doctor?.specialization}
            </p>
            <ul className="mt-2 mb-8 space-y-1 md:space-y-3 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:flex-wrap md:*:flex-nowrap *:gap-1">
              <li>
                <span className="font-bold">Degree: </span>
                <span className="font-tiroBangla">{doctor?.degree}</span>
              </li>
              <li>
                <span className="font-bold">Department: </span>
                <span>{doctor?.departmentID?.name}</span>
              </li>
              <li>
                <span className="font-bold">Hospital: </span>
                <span>LabOne Hospital</span>
              </li>
            </ul>
            <ul className=" rounded-xl border white shadow-lg px-3 md:px-6 py-4 md:py-8">
              <div className="grid items-center">
                <h6 className="font-medium uppercase text-base text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all relative bg-primary/15 w-full duration-300">
                  Doctor Availability
                </h6>
              </div>
              {doctor?.schedules?.map((schedule: TSchedule) => (
                <li key={schedule?._id}>
                  <div className="flex gap-3 md:gap-2 p-2">
                    <p className="font-bold capitalize w-[90px]">
                      {schedule?.scheduleDay} {">"}
                    </p>
                    <p>
                      <span className="font-bold"></span>{" "}
                      {formatStartTimePeriod(schedule?.startTime)}
                    </p>
                    <p>-</p>
                    <p>
                      <span className="font-bold"></span>{" "}
                      {formatEndTimePeriod(schedule?.endTime)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 md:flex items-start justify-start">
              <AppointmentModalSection doctorID={doctor?._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSinglePage;
