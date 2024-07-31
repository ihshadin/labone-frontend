"use client";
import LabBtn from "@/utils/LabBtn";
import {
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { getLocalTimeZone, today, now } from "@internationalized/date";
import { useState } from "react";
import LabDatePicker from "@/utils/LabDatePicker";
import { useDateFormatter } from "@react-aria/i18n";

const AppointmentForm = ({ onClose }) => {
  let defaultDate = today(getLocalTimeZone());
  const [date, setDate] = useState(defaultDate);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  //   let formatter = useDateFormatter({ dateStyle: "short" });
  //   const formattedDate = formatter.format(date.toDate(getLocalTimeZone()));
  //   console.log("formattedDate---=>", formattedDate);

  const genderList = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "others", label: "Others" },
  ];

  const departmentList = [
    { key: "csc", label: "Csc" },
    { key: "eee", label: "Eee" },
    { key: "extra", label: "Extra" },
  ];

  const doctorList = [
    {
      key: "Dr. Moshiur Rahman",
      label: "Dr. Moshiur Rahman",
      specialization:
        "স্ত্রী রোগ, প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
    },
    {
      key: "Dr. Imam Hossain",
      label: "Dr. Imam Hossain",
      specialization:
        "রোগ, প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
    },
    {
      key: "Dr. Mehedi Hasan",
      label: "Dr. Mehedi Hasan",
      specialization: "প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
    },
    {
      key: "Dr. Faruq Khan",
      label: "Dr. Faruq Khan",
      specialization: "বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
    },
    {
      key: "Dr. Jahid Hasan",
      label: "Dr. Jahid Hasan",
      specialization: "ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
    },
  ];

  const handleDoctorChange = (doctorId) => {
    const selectedDoctor = doctorList.find((doctor) => doctor.key === doctorId);
    setSelectedSpecialization(
      selectedDoctor ? selectedDoctor.specialization : ""
    );
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Input
            type="text"
            label="Patient Name"
            required
            placeholder="Write here..."
            labelPlacement="outside"
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
        </div>

        <div className="flex items-center justify-between gap-3">
          <Input
            type="number"
            label="Patient Age"
            placeholder="Write here..."
            labelPlacement="outside"
            classNames={{
              base: "w-[35%]",
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
          <Input
            type="number"
            label="Contact Number"
            placeholder="Write here..."
            labelPlacement="outside"
            classNames={{
              base: "w-[65%]",
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
        </div>

        <div className="flex items-center justify-between gap-3">
          <LabDatePicker
            label="Appointment Date"
            date={date}
            setDate={setDate}
          />
          <Select
            label="Select Doctor"
            placeholder="Select a Doctor"
            //   defaultSelectedKeys={["Dr. Imam Hossain"]}
            labelPlacement="outside"
            classNames={{
              label:
                "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
              trigger:
                "border bg-white hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
            }}
            onChange={(e) => handleDoctorChange(e.target.value)}
          >
            {doctorList.map((doctor) => (
              <SelectItem key={doctor.key}>{doctor.label}</SelectItem>
            ))}
          </Select>
        </div>

        {selectedSpecialization && (
          <div>
            <p>
              Saturday (12:05 AM - 11:55 PM) & Saturday (12:05 AM - 11:55 PM)
            </p>
            <p className="text-sm font-medium font-tiroBangla text-primary">
              {selectedSpecialization}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <Textarea
            type="text"
            label="Add Notes"
            placeholder="Write in details if possible (Optional)"
            labelPlacement="outside"
            classNames={{
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
        </div>
        <div className="flex justify-end items-center gap-3 md:gap-4 mt-2">
          {onClose && (
            <span
              onClick={onClose}
              className="px-5 py-1.5 rounded-full bg-gradient-to-r from-secondary to-secondary/50 text-white"
            >
              Close
            </span>
          )}
          <button className="px-5 py-1.5 rounded-full bg-gradient-to-r from-primary to-[#07CCEC] text-white">
            Appointment
          </button>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
