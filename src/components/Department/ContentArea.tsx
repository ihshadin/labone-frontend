"use client";
import { useEffect, useState } from "react";
import DepartmentCard from "@/components/Department/DepartmentCard";
import { TDepartment } from "@/types/department.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import { baseApi } from "@/api/api";
import SearchHandler from "@/utils/searchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";

const ContentArea = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [meta, setMeta] = useState<TMeta>({} as TMeta);
  const [departments, setDepartments] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const fetchDepartments = async () => {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/department?limit=10${queryParams ? `&${queryParams}` : ""}`
    );
    const data = await res.json();
    setDepartments(data?.data?.result);
    setMeta(data?.data?.meta);
  };

  useEffect(() => {
    fetchDepartments();
  }, [params]);

  return (
    <>
      <div className="mb-10">
        <SearchHandler setParams={setParams} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {departments?.map((department: TDepartment) => (
          <DepartmentCard key={department._id} department={department} />
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
