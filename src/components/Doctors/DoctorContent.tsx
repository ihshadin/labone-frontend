"use client";
import { useEffect, useState } from "react";
import DoctorCard from "@/components/Doctors/DoctorCard";
import { TDoctor } from "@/types/doctors.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import SearchHandler from "@/utils/SearchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";
import DepartmentFilter from "./DepartmentFilter";
import { getNewDoctors } from "@/api/doctors.api";

const DoctorContent = ({ departmentId }: { departmentId: string | null }) => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [meta, setMeta] = useState<TMeta>({} as TMeta);
  const [doctors, setDoctors] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  useEffect(() => {
    if (departmentId) {
      setParams([{ name: "departmentID", value: departmentId }]);
    } else {
      setParams([
        { name: "limit", value: 9 },
        { name: "page", value: 1 },
      ]);
    }
  }, [departmentId]);

  useEffect(() => {
    if (params.length > 0) {
      fetchDoctors(params);
    }
  }, [params]);

  const fetchDoctors = async (params: TQueryParam[]) => {
    const data = await getNewDoctors(params);
    setDoctors(data?.result);
    setMeta(data?.meta);
  };

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
