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

type TAppointmentForm = {
  onClose?: any;
  selectDoctor?: string;
};

const AppointmentForm = ({ onClose, selectDoctor }: TAppointmentForm) => {
  const { register, handleSubmit, reset } = useForm<TAppointment>();
  const [date, setDate] = useState(today(getLocalTimeZone()));
  const [doctors, setDoctors] = useState([]);
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
      } else {
      }
    } catch (error) {
      console.error("An error occurred while creating appointment", error);
    }
  };

  const handleDoctorChange = (id: string) => {
    const selectedDoctor = doctors.find(({ _id }) => _id == id) || null;
    setSelDocInfo(selectedDoctor);
    setSelectDoc(id);
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
            {...register("mobileNumber", { required: true })}
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
            defaultSelectedKeys={[selectDoctor || ""]}
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

        <div className="flex items-center justify-between gap-3">
          <Textarea
            type="text"
            label="Add Notes"
            {...register("message", { required: true })}
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
