// import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import DepartmentList from "./DepartmentList";
import { TbFilterPin } from "react-icons/tb";

const DepartmentFilter = () => {
  //   const [department, setDepartment] = useState([]);

  const departmentList = [
    { key: "Gynaecology", label: "Gynaecology" },
    { key: "Surgery", label: "Surgery" },
    { key: "Cardiology", label: "Cardiology" },
  ];

  //   const getSchedulesData = async () => {
  //     const data = await getSchedules();
  //     console.log("data--=>", data);
  //     setSchedules(data);
  //   };

  //   useEffect(() => {
  //     getSchedulesData();
  //   }, []);

  //   console.log("schedules--=>", schedules);
  return (
    <>
      <div className=" w-[248px] py-1.5 px-2 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all">
        <Select
          placeholder="Filter by Department"
          disableSelectorIconRotation
          selectorIcon={
            <TbFilterPin className="-translate-y-1/2 p-3 bg-primary !text-white rounded-ful" /> 
          }
          classNames={{
            label:
              "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)] text-accent",
            trigger:
              "border rounded-full bg-primary/10 bg-opacity-85 text-accent hover:border-primary/50 data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
          }}
        >
          {departmentList?.map((department) => (
            <SelectItem key={department?.key} value={department?.key}>
              {department?.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="mt-4 md:mt-5">
        <DepartmentList />
      </div>
    </>
  );
};

export default DepartmentFilter;
