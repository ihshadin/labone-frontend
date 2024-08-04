"use client";
import { useEffect, useState } from "react";
import MachineCard from "@/components/Machines/MachineCard";
import { TMachine } from "@/types/machine.type";
import { TMeta, TQueryParam } from "@/types/global.type";
import { baseApi } from "@/api/api";
import SearchHandler from "@/utils/searchHandler";
import LabonePagination from "@/utils/Pagination/LabonePagination";

const ContentArea = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [meta, setMeta] = useState<TMeta>({} as TMeta);
  const [machines, setMachines] = useState([]);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const fetchMachines = async () => {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/machine?limit=1${queryParams ? `&${queryParams}` : ""}`
    );
    const data = await res.json();
    setMachines(data?.data?.result);
    setMeta(data?.data?.meta);
  };

  useEffect(() => {
    fetchMachines();
  }, [params]);
  return (
    <>
      <div className="mb-10">
        <SearchHandler setParams={setParams} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {machines?.map((machine: TMachine) => (
          <MachineCard key={machine._id} machine={machine} />
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
