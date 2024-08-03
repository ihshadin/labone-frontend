import { baseApi } from "@/api/api";
import Breadcamp from "@/utils/Breadcamp";
import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";
import React from "react";

// const getDoctorData = async (id) => {
//   const res = await fetch(`${baseApi}/doctor/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };
const DoctorSinglePage = async ({ id }: { id: string }) => {
  // const doctorData = await getDoctorData(id);

  const doctor = {
    _id: "66a7a50a6773a020dfd08f81",
    serialNumber: 8452,
    firstName: "Dr. Mehedi Hasan ",
    lastName: "Foysal",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    address: "Barmi, SreePur, Gazipur",
    email: "mehedihasanfoysal2548@gamil.com",
    specialization: "স্ত্রী রোগ ও প্রসূতি বিদ্যা বিশেষজ্ঞ ও সার্জন।",
    contactNumber: "123456789",
    degree:
      "এমবিবিএস, বিসিএস (স্বাস্থ্য), স্পেশাল ট্রেনিং ইন গাইনি অনকলোজী এমসিপিএস (গাইনি এন্ড অবস্), এফসিপিএস (গাইনি এন্ড অবস্)। ",
    departmentID: {
      name: "Gynaecology",
    },
    hospital: "Lab One Hospital",
    isDeleted: false,
    schedules: [
      {
        _id: "66a896e28f678444d3d57f5f",
        doctorID: "66a7a50a6773a020dfd08f81",
        scheduleDay: "sunday",
        startTime: "09:00",
        startTimePeriod: "sokal",
        endTime: "11:00",
        endTimePeriod: "sokal",
        isDeleted: false,
        v: 0,
      },
      {
        _id: "66a896fb8f678444d3d57f64",
        doctorID: "66a7a50a6773a020dfd08f81",
        scheduleDay: "monday",
        startTime: "09:00",
        startTimePeriod: "sokal",
        endTime: "11:00",
        endTimePeriod: "sokal",
        isDeleted: false,
        v: 0,
      },
    ],
  };

  return (
    <>
      <Breadcamp title="Doctor Details" />
      <div className="mx-auto max-w-[1250px] px-2 py-20 md:py-20 lg:py-28">
        {/* Design -1 */}
        <div className="grid md:grid-cols-8 gap-8 md:gap-14">
          <div className="md:col-span-3">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={doctor.image}
              alt="Services image"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
              {doctor.firstName + " " + doctor.lastName}
            </h2>
            <p className="inline-block text-xs md:text-sm text-white uppercase font-medium font-tiroBangla bg-primary px-5 py-1 rounded-full">
              {doctor.specialization}
            </p>
            <ul className="mt-2 mb-8 space-y-1 md:space-y-3 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:flex-wrap md:*:flex-nowrap *:gap-1">
              <li>
                <span className="font-bold">Degree: </span>
                <span className="font-tiroBangla">{doctor.degree}</span>
              </li>
              <li>
                <span className="font-bold">Department: </span>
                <span>{doctor.departmentID.name}</span>
              </li>
              <li>
                <span className="font-bold">Hospital: </span>
                <span>{doctor.hospital}</span>
              </li>
            </ul>
            <ul className=" rounded-xl border white shadow-lg px-3 md:px-6 py-4 md:py-8">
              <div className="grid items-center">
                <h6 className="font-medium uppercase text-base text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all relative bg-primary/15 w-full duration-300">
                  Doctor Availability
                </h6>
              </div>
              {doctor.schedules.map((schedule) => (
                <li key={schedule._id}>
                  <div className="flex gap-3 md:gap-2 p-2">
                    <p className="font-bold capitalize">
                      {schedule.scheduleDay}
                    </p>
                    <p>
                      <span className="font-bold"></span> {schedule.startTime}{" "}
                      {schedule.startTimePeriod}
                    </p>
                    <p>-</p>
                    <p>
                      <span className="font-bold"></span> {schedule.endTime}{" "}
                      {schedule.endTimePeriod}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 md:flex items-start justify-start">
              <LabBtn text="Appoint Now" link="/about-us" />
            </div>
          </div>
        </div>
        {/* Design -2 */}
        {/* <div className=" border-2 p-8 rounded-lg shadow-lg white grid md:grid-cols-10 gap-14 my-40">
          <div className="md:col-span-2">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={doctor.image}
              alt="Services image"
            />
            
          </div>
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {doctor.firstName} {doctor.lastName}
            </h2>
            <p>{doctor.specialization}</p>
            <ul className="mt-1 md:mt-2 mb-8 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1">
              <li>
                <span className="font-bold">Degree: </span>
                <span>{doctor.degree}</span>
              </li>
              <li>
                <span className="font-bold">Department: </span>
                <span>{doctor.departmentID.name}</span>
              </li>
              <li>
                <span className="font-bold">Hospital: </span>
                <span>{doctor.hospital}</span>
              </li>
            </ul>
            
            
          </div>
          <div className="md:col-span-3">
          
            <ul className=" rounded-3xl border-3 white shadow-lg p-5 py-10">
            <div className="grid items-center">
              <h6 className="font-medium uppercase text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all cursor-w-resize relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
                Doctor Availability
              </h6>
              
            </div>
              {doctor.schedules.map((schedule) => (
                <li key={schedule._id}><div className="flex gap-5 md:gap-3 p-2">
                  <p>
                    <span className="font-bold"></span>{" "}
                    {schedule.scheduleDay}
                  </p>
                  <p>
                    <span className="font-bold"></span>{" "}
                    {schedule.startTime} {schedule.startTimePeriod}
                  </p>
                  <p>
                    <span className="font-bold"></span>{" "}
                    {schedule.endTime} {schedule.endTimePeriod}
                  </p>
                </div>
                </li>
                
              ))}
            </ul>
            <div className="mt-4 md:flex items-center justify-center">
                <LabBtn text="Appoint Now" link="/about-us" />
              </div>
            </div>
        </div> */}
      </div>
    </>
  );
};

export default DoctorSinglePage;
