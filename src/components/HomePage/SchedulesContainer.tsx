"use client";
import SchedulesList from "@/components/HomePage/SchedulesList";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { getSchedules } from "@/api/schedule.api";

const SchedulesContainer = () => {
  const [schedules, setSchedules] = useState([]);
  const [scheduleDay, setScheduleDay] = useState("");

  const weekDays = [
    { key: "Saturday", label: "Saturday" },
    { key: "Sunday", label: "Sunday" },
    { key: "Monday", label: "Monday" },
    { key: "Tuesday", label: "Tuesday" },
    { key: "Wednesday", label: "Wednesday" },
    { key: "Thursday", label: "Thursday" },
    { key: "Friday", label: "Friday" },
  ];

  const getSchedulesData = async (scheduleDay: string) => {
    const data = await getSchedules(scheduleDay);
    setSchedules(data);
  };

  useEffect(() => {
    getSchedulesData(scheduleDay);
  }, [scheduleDay]);

  // console.log("scheduleDay--=>", scheduleDay);

  return (
    <>
      <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 rounded-xl shadow-md">
        <div className="grid md:grid-cols-2 items-center mb-2 md:mb-2">
          <h2 className="text-primary text-2xl font-semibold">
            Today&apos;s schedule
          </h2>
          <Select
            placeholder="Search Doctor by Day"
            classNames={{
              label:
                "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
              trigger:
                "border bg-white hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
            }}
            //   defaultSelectedKeys={[defaultDoctor]}
            onChange={(e) => setScheduleDay(e.target.value)}
          >
            {weekDays?.map((day) => (
              <SelectItem key={day?.key} value={day?.key}>
                {day?.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="mt-4 md:mt-5">
          <SchedulesList schedules={schedules} />
        </div>
      </div>
    </>
  );
};

export default SchedulesContainer;

{
  /* <div className="grid md:grid-cols-2 items-center gap-3 md:gap-5">
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
        </div> */
}
