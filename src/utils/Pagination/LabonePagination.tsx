"use client";
import React from "react";
import { Button, Pagination, PaginationItemType } from "@nextui-org/react";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { TPagination } from "@/types/pagination.type";

const LabonePagination = ({ meta, handlePaginationChange }: TPagination) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  // const renderItem = ({
  //   ref,
  //   key,
  //   value,
  //   isActive,
  //   onNext,
  //   onPrevious,
  //   setPage,
  //   className,
  // }) => {
  //   if (value === PaginationItemType.NEXT) {
  //     return (
  //       <button
  //         key={key}
  //         className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
  //         onClick={onNext}
  //       >
  //         <TbChevronCompactLeft className="rotate-180" />
  //       </button>
  //     );
  //   }

  //   if (value === PaginationItemType.PREV) {
  //     return (
  //       <button
  //         key={key}
  //         className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
  //         onClick={onPrevious}
  //       >
  //         <TbChevronCompactRight />
  //       </button>
  //     );
  //   }

  //   if (value === PaginationItemType.DOTS) {
  //     return (
  //       <button key={key} className={className}>
  //         ...
  //       </button>
  //     );
  //   }

  //   // cursor is the default item
  //   return (
  //     <button
  //       key={key}
  //       ref={ref}
  //       className={cn(
  //         className,
  //         isActive &&
  //           "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"
  //       )}
  //       onClick={() => setPage(value)}
  //     >
  //       {value}
  //     </button>
  //   );
  // };
  return (
    meta?.total > 1 && (
      <div className="flex items-center justify-center gap-1.5 text-base mt-7 md:mt-10">
        <button
          onClick={() =>
            handlePaginationChange((prev) => (prev > 1 ? prev - 1 : prev))
          }
          className="py-2 px-5 rounded-xl text-white bg-gradient-to-b from-[#0a8848] to-[#02a351] shadow-lg"
        >
          Previous
        </button>
        <Pagination
          initialPage={1}
          total={meta?.total}
          page={currentPage}
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
            handlePaginationChange((prev) =>
              prev < meta?.total ? prev + 1 : prev
            )
          }
          className="py-2 px-5 rounded-xl text-white bg-gradient-to-t from-[#0a8848] to-[#02a351] shadow-lg"
        >
          Next
        </button>
        {/* <Pagination showControls total={10} initialPage={1} /> */}
        {/* <Pagination
        total={meta?.total}
        pageSize={meta?.limit}
        defaultCurrent={1}
        onChange={handlePaginationChange}
        showLessItems={true}
        showSizeChanger={false}
      /> */}
      </div>
    )
  );
};

export default LabonePagination;
