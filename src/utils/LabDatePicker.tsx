"use client";
import React from "react";
import { DatePicker, ButtonGroup, Button } from "@nextui-org/react";
import {
  startOfWeek,
  startOfMonth,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { useLocale, useDateFormatter } from "@react-aria/i18n";

type DatePickerParams = {
  date: any;
  setDate: (value: any) => void;
  label: string;
};

const LabDatePicker = ({ date, setDate, label }: DatePickerParams) => {
  let { locale } = useLocale();
  let now = today(getLocalTimeZone());
  let nextWeek = startOfWeek(now.add({ weeks: 1 }), locale);
  let nextMonth = startOfMonth(now.add({ months: 1 }));

  return (
    <div>
      <DatePicker
        CalendarTopContent={
          <ButtonGroup
            fullWidth
            className="px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
            radius="full"
            size="sm"
            variant="bordered"
          >
            <Button onPress={() => setDate(now)}>Today</Button>
            <Button onPress={() => setDate(nextWeek)}>Next week</Button>
            <Button onPress={() => setDate(nextMonth)}>Next month</Button>
          </ButtonGroup>
        }
        calendarProps={{
          focusedValue: date,
          onFocusChange: setDate,
          nextButtonProps: {
            variant: "bordered",
          },
          prevButtonProps: {
            variant: "bordered",
          },
        }}
        value={date}
        onChange={setDate}
        label={label}
        labelPlacement="outside"
        dateInputClassNames={{
          label:
            "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
          inputWrapper:
            "border bg-white hover:border-primary/50 hover:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary/50",
        }}
      />
      {/* <p className="text-default-500 text-sm">
        Selected date:{" "}
        {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
      </p> */}
    </div>
  );
};

export default LabDatePicker;
