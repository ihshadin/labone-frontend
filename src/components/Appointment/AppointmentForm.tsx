"use client";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useEffect, useState } from "react";
import LabDatePicker from "@/utils/LabDatePicker";
import { useForm } from "react-hook-form";
import { baseApi } from "@/api/api";
import { TDoctor } from "@/types/doctors.type";
import { getDoctors } from "@/api/doctors.api";
import { TAppointment } from "@/types/appointment.type";
import { formatCustomTimePeriod } from "@/utils/TimeRangeFormate";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa6";

type TAppointmentForm = {
  onClose?: any;
  selectDoctor?: string;
};

const AppointmentForm = ({ onClose, selectDoctor }: TAppointmentForm) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<TAppointment>();

  const [date, setDate] = useState(today(getLocalTimeZone()));
  const [doctors, setDoctors] = useState<TDoctor[]>([]);
  const [selDocInfo, setSelDocInfo] = useState<TDoctor | null>(null);
  const [selectDoc, setSelectDoc] = useState(selectDoctor || "");

  const onSubmit = async (data: TAppointment) => {
    data.appointmentDate = date.toString();
    data.doctorID = selectDoc;

    try {
      const response = await fetch(`${baseApi}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        if (onClose) onClose();
        toast.success("Appointment Added Successful!");
      } else {
        // Handle the error here
      }
    } catch (error) {
      toast.error("An error occurred while creating appointment");
    }
  };

  const handleDoctorChange = (id: string) => {
    const selectedDoctor = doctors.find(({ _id }) => _id === id) || null;
    setSelDocInfo(selectedDoctor);
    setSelectDoc(id);
    setValue("doctorID", id);

    // Clear the error when a doctor is selected
    if (id) {
      clearErrors("doctorID");
    }
  };

  const getDoctorsData = async () => {
    const data = await getDoctors(0);
    setDoctors(data);
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (selectDoctor) {
      const selectedDoctor =
        doctors.find(({ _id }) => _id === selectDoctor) || null;
      setSelDocInfo(selectedDoctor);
      setSelectDoc(selectDoctor);
    }
  }, [selectDoctor, doctors]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col justify-between">
          <Input
            type="text"
            label={
              errors.patientName ? (
                <p className="text-red-500 text-sm mt-1">
                  {errors.patientName.message}
                </p>
              ) : (
                "Patient Name"
              )
            }
            {...register("patientName", {
              required: "Patient name is required",
            })}
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

        <div className="flex justify-between gap-3">
          <div className="w-[35%]">
            <Input
              type="number"
              label={
                errors.patientAge ? (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.patientAge.message}
                  </p>
                ) : (
                  "Patient Age"
                )
              }
              {...register("patientAge", {
                required: "Patient age is required",
              })}
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

          <div className="w-[65%]">
            <Input
              type="number"
              label={
                errors.mobileNumber ? (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobileNumber.message}
                  </p>
                ) : (
                  "Contact Number"
                )
              }
              {...register("mobileNumber", {
                required: "Contact number is required",
              })}
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
        </div>

        <div className="flex items-center justify-between gap-3">
          <LabDatePicker
            label="Appointment Date"
            date={date}
            setDate={setDate}
          />

          <div className="w-full">
            <Select
              label={
                errors.doctorID ? (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.doctorID.message}
                  </p>
                ) : (
                  "Select Doctor"
                )
              }
              placeholder="Select a Doctor"
              labelPlacement="outside"
              classNames={{
                label:
                  "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
                trigger:
                  "border bg-white hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
              }}
              value={selectDoc}
              defaultSelectedKeys={[selectDoctor || ""]}
              {...register("doctorID", {
                required: "Doctor is required",
              })}
              onChange={(e) => handleDoctorChange(e.target.value)}
            >
              {doctors?.map((doctor: TDoctor) => (
                <SelectItem key={doctor._id} value={doctor._id}>
                  {doctor.firstName + " " + doctor.lastName}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {selDocInfo && (
          <div>
            <p>
              {selDocInfo?.schedules
                ?.map(
                  (schedule) =>
                    `${schedule?.scheduleDay}  (${formatCustomTimePeriod(
                      schedule?.startTime,
                      schedule?.endTime
                    )})`
                )
                .join(" & ")}
            </p>
            <p className="text-sm font-medium font-tiroBangla text-primary">
              {selDocInfo?.specialization}
            </p>
          </div>
        )}

        <div className="flex flex-col justify-between">
          <Textarea
            type="text"
            label={
              errors.message ? (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              ) : (
                "Add Notes"
              )
            }
            {...register("message", { required: "Notes are required" })}
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
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-[#07CCEC] hover:bg-gradient-to-l text-white flex items-center gap-1 duration-300 transition-all group">
            Appointment{" "}
            <FaAngleRight className="group-hover:translate-x-1.5 duration-300" />
          </button>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
