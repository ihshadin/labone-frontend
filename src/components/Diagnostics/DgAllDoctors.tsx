"use client";
import SearchHandler from "@/utils/SearchHandler";
import React, { useEffect, useState } from "react";
import DepartmentFilter from "../Doctors/DepartmentFilter";
import LabonePagination from "@/utils/Pagination/LabonePagination";
import DoctorCard from "../Doctors/DoctorCard";
import { TDoctor } from "@/types/doctors.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import { getDgDoctors } from "@/api/dg-doctors.api";

const DgAllDoctors = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 9 },
    { name: "page", value: 1 },
  ]);
  const [meta, setMeta] = useState<TMeta>({} as TMeta);
  const [doctors, setDoctors] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const fetchDoctors = async (params: TQueryParam[]) => {
    const data = await getDgDoctors(params);
    setDoctors(data?.result);
    setMeta(data?.meta);
  };

  useEffect(() => {
    fetchDoctors(params);
  }, [params]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between pb-8">
        <div className="md:w-[50%]">
          <SearchHandler setParams={setParams} />
        </div>
        <div className="md:w-[50%]">
          <DepartmentFilter setParams={setParams} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {doctors?.map((doctor: TDoctor) => (
          <DoctorCard
            link="diagnostics/doctors"
            key={doctor._id}
            doctor={doctor}
          />
        ))}
      </div>
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
};

export default DgAllDoctors;
