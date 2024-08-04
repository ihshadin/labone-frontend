"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { TPagination } from "@/types/pagination.type";

const LabonePagination = ({ meta, handlePaginationChange }: TPagination) => {
  return (
    meta?.totalPage > 1 && (
      <div className="flex items-center justify-center gap-1.5 text-base mt-7 md:mt-10 [&_button]:py-2 [&_button]:px-5 [&_button]:rounded-xl [&_button]:text-white [&_button]:bg-gradient-to-t [&_button]:from-[#0a8848] [&_button]:to-[#02a351] [&_button]:shadow-lg [&_button]:flex [&_button]:items-center [&_button]:gap-1 [&_button]:group">
        <button
          onClick={() =>
            handlePaginationChange(meta?.page > 1 ? meta?.page - 1 : meta?.page)
          }
        >
          <TbChevronCompactLeft className=" transition-all duration-300 group-hover:-translate-x-2" />
          Previous
        </button>
        <Pagination
          initialPage={1}
          total={meta?.totalPage}
          page={meta?.page}
          onChange={handlePaginationChange}
          classNames={{
            wrapper: "gap-1.5 overflow-visible h-8 rounded",
            item: "rounded-xl border border-slate-300 hover:text-white bg-transparent hover:bg-gradient-to-tr hover:from-[#0a8848] hover:to-[#02a351] hover:shadow-lg",
            cursor:
              "shadow-lg text-white font-medium bg-gradient-to-b from-[#0a8848] to-[#02a351]",
          }}
        />
        <button
          onClick={() =>
            handlePaginationChange(
              meta?.page < meta?.totalPage ? meta?.page + 1 : meta?.page
            )
          }
        >
          Next
          <TbChevronCompactRight className="transition-all duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    )
  );
};

export default LabonePagination;
