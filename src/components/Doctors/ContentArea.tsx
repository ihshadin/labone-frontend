"use client";
import DoctorCard from "@/components/Doctors/DoctorCard";
import DoctorPagination from "./DoctorPagination";
import { getDoctors } from "@/api/doctors";
import { TDoctor } from "@/types/doctors.type";
import { useEffect, useState } from "react";
import SearchHandler from "@/utils/searchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";
import { TQueryParam } from "@/types/global.type";
import { baseApi } from "@/api/api";

const ContentArea = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [meta, setMeta] = useState("");
  const [searchText, setSearchText] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const fetchDoctors = async () => {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");
    const res = await fetch(`${baseApi}/doctor?search=${searchText}`);
    const data = await res.json();
    setDoctors(data?.data?.result);
    setMeta(data?.data?.meta);
  };

  useEffect(() => {
    fetchDoctors();
  }, [searchText]);
  return (
    <>
      <div className="mb-10">
        <SearchHandler setSearchText={setSearchText} />
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

export default ContentArea;
