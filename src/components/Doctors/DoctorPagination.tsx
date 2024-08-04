"use client";
import React from "react";
import { Pagination, PaginationItemType } from "@nextui-org/react";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";

const DoctorPagination = () => {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <TbChevronCompactLeft className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onPrevious}
        >
          <TbChevronCompactRight />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive &&
            "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <div className="flex items-center justify-center mt-7 md:mt-10">
      <Pagination
        disableCursorAnimation
        showControls
        total={10}
        initialPage={1}
        className="gap-2"
        radius="full"
        renderItem={renderItem}
        variant="light"
      />
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
  );
};

export default DoctorPagination;
