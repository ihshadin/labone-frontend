"use client";
import { useCallback, useEffect, useState } from "react";
import DoctorCard from "@/components/Doctors/DoctorCard";
import { TDoctor } from "@/types/doctors.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import { baseApi } from "@/api/api";
import SearchHandler from "@/utils/SearchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";

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
      `${baseApi}/doctor?limit=2${queryParams ? `&${queryParams}` : ""}`
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
      <div className="mb-10">
        <SearchHandler setParams={setParams} />
      </div>
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
