"use client";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { getLocalTimeZone, today, now } from "@internationalized/date";
import { Dispatch, useEffect, useState } from "react";
import LabDatePicker from "@/utils/LabDatePicker";
import { useDateFormatter } from "@react-aria/i18n";
import { useForm } from "react-hook-form";
import { baseApi } from "@/utils/baseUrl";
import { TDoctor } from "@/types/doctors.type";

type TAppointmentForm = {
  onClose?: any;
  defaultDoctor?: string;
};

const AppointmentForm = ({ onClose, defaultDoctor }: TAppointmentForm) => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(today(getLocalTimeZone()));
  const [doctors, setDoctors] = useState([]);
  const [selDocInfo, setSelDocInfo] = useState({});
  const [selectDoc, setSelectDoc] = useState("");

  const onSubmit = async (data) => {
    data.appointmentDate = date.toString();
    data.doctorId = selectDoc;
    console.log(data);
    try {
      const response = await fetch(`${baseApi}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Appointment successfully created");
        reset();
        if (onClose) onClose();
      } else {
        console.error("Failed to create appointment");
      }
    } catch (error) {
      console.error("An error occurred while creating appointment", error);
    }
  };
  console.log(defaultDoctor);
  const handleDoctorChange = (id: string) => {
    const selectedDoctor = doctors.find(({ _id }) => _id === id);
    setSelDocInfo(selectedDoctor ? selectedDoctor : "");
    setSelectDoc(id);
  };

  const getDoctorsData = async () => {
    const res = await fetch(`${baseApi}/doctor`);
    const data = await res.json();
    setDoctors(data?.data?.result);
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Input
            type="text"
            label="Patient Name"
            {...register("patientName", { required: true })}
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
            {...register("patientAge", { required: true })}
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
            {...register("contactNumber", { required: true })}
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
            labelPlacement="outside"
            classNames={{
              label:
                "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
              trigger:
                "border bg-white hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
            }}
            defaultSelectedKeys={[defaultDoctor]}
            onChange={(e) => handleDoctorChange(e.target.value)}
          >
            {doctors?.map((doctor: TDoctor) => (
              <SelectItem key={doctor._id} value={doctor._id}>
                {doctor.firstName + " " + doctor.lastName}
              </SelectItem>
            ))}
          </Select>
        </div>

        {selDocInfo && (
          <div>
            <p>
              {/* Saturday (12:05 AM - 11:55 PM) & Saturday (12:05 AM - 11:55 PM) */}
              {selDocInfo?.schedules
                ?.map(
                  (schedule) =>
                    `${schedule?.scheduleDay}  (${schedule?.startTime} - ${schedule?.endTime})`
                )
                .join(" & ")}
            </p>
            <p className="text-sm font-medium font-tiroBangla text-primary">
              {selDocInfo?.specialization}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <Textarea
            type="text"
            label="Add Notes"
            {...register("addNotes", { required: true })}
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
              className="px-5 py-1.5 rounded-full bg-gradient-to-r from-secondary to-secondary/50 text-white cursor-pointer"
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
