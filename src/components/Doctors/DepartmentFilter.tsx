"use client";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import DepartmentList from "./DepartmentList";
import { TbFilterPin } from "react-icons/tb";
import { getDepartment } from "@/api/department.api";
import { RxCross1 } from "react-icons/rx";
import { TSetParams } from "@/types/global.type";

const DepartmentFilter = ({ setParams }: TSetParams) => {
  const [departments, setDepartments] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const getDepartmentData = async () => {
    const data = await getDepartment();
    setDepartments(data);
  };

  useEffect(() => {
    getDepartmentData();
  }, []);

  const departmentList = departments.map(({ _id, name }) => ({
    key: _id,
    label: name,
  }));

  const handleDepartmentChange = (e: any) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "departmentID"),
      { name: "departmentID", value: e.target.value },
    ]);
  };

  return (
    <>
      <div className="flex items-center justify-end gap-4">
        <Select
          onChange={handleDepartmentChange}
          placeholder="Filter by Department"
          classNames={{
            trigger: `border  ${
              !filterOpen && "hidden"
            } md:w-[50%] ml-auto rounded-full bg-primary/10 bg-opacity-85 text-accent hover:border-primary/50 data-[hover=true]:bg-primary/15 `,
          }}
        >
          {departmentList?.map((department) => (
            <SelectItem key={department?.key} value={department?.key}>
              {department?.label}
            </SelectItem>
          ))}
        </Select>

        {filterOpen ? (
          <RxCross1
            onClick={() => {
              setFilterOpen(false);
              setParams([{ name: "page", value: 9 }]);
            }}
            className="p-3 md:mr-3 w-10 h-10 bg-secondary/80  hover:bg-secondary/60 transition-all duration-300 !text-white rounded-full"
          />
        ) : (
          <TbFilterPin
            onClick={() => setFilterOpen(true)}
            className="p-2.5 md:mr-3 w-10 h-10 bg-primary/90  hover:bg-primary/70 transition-all duration-300 !text-white rounded-full"
          />
        )}
      </div>

      <div className="mt-4 md:mt-5">
        <DepartmentList />
      </div>
    </>
  );
};

export default DepartmentFilter;
