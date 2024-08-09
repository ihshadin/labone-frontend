"use client";
import { useCallback, useEffect, useState } from "react";
import DoctorCard from "@/components/Doctors/DoctorCard";
import { TDoctor } from "@/types/doctors.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import { baseApi } from "@/api/api";
import SearchHandler from "@/utils/SearchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";
import DepartmentFilter from "./DepartmentFilter";
import { TbFilterPin } from "react-icons/tb";

const DoctorContent = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [meta, setMeta] = useState<TMeta>({} as TMeta);
  const [doctors, setDoctors] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const fetchDoctors = useCallback(async () => {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/doctor?limit=9${queryParams ? `&${queryParams}` : ""}`
    );
    const data = await res.json();
    setDoctors(data?.data?.result);
    setMeta(data?.data?.meta);
  }, [params]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return (
    <>
      <div className=" grid mx-auto gap-10 md:grid-cols-2 ml-auto md:gap-x-80 justify-between items-center mb-10">
        <div className="flex justify-start">
          <SearchHandler setParams={setParams} />
        </div>
        <div className="flex justify-end">
        <DepartmentFilter />
        </div>
       
        {/* <div className="flex gap-2 relative w-[230px] py-3 px-6 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 text-accent  border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all ">
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-full">
            <TbFilterPin />
          </button>
          <p>Filter by Department</p>
        </div> */}
      </div>

      {/* <div className="md:max-w-[1215px] grid mx-auto gap-10 md:grid-cols-2 ml-auto md:gap-x-80 justify-between items-center mb-10">
        <div className="flex justify-start">
          <SearchHandler setParams={setParams} />
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2 relative w-[230px] py-3 px-6 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 text-accent  border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all">
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-full">
              <TbFilterPin />
            </button>
            <p>Filter by Department</p>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {doctors?.map((doctor: TDoctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
};

export default DoctorContent;
