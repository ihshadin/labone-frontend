"use client";
import LabBtn from "@/utils/LabBtn";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import LabDatePicker from "@/utils/LabDatePicker";
import { useDateFormatter } from "@react-aria/i18n";

const Appointment = () => {
  let defaultDate = today(getLocalTimeZone());
  const [date, setDate] = useState(defaultDate);
  let formatter = useDateFormatter({ dateStyle: "short" });
  const formattedDate = formatter.format(date.toDate(getLocalTimeZone()));
  //   console.log("formattedDate---=>", formattedDate);

  const genderList = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "others", label: "Others" },
  ];

  const departmentList = [
    { key: "csc", label: "Csc" },
    { key: "eee", label: "Eee" },
    { key: "extra", label: "Extra" },
  ];

  const doctorList = [
    { key: "Dr. Moshiur Rahman", label: "Dr. Moshiur Rahman" },
    { key: "Dr. Imam Hossain", label: "Dr. Imam Hossain" },
    { key: "Dr. Mehedi Hasan", label: "Dr. Mehedi Hasan" },
    { key: "Dr. Faruq Khan", label: "Dr. Faruq Khan" },
    { key: "Dr. Jahid Hasan", label: "Dr. Jahid Hasan" },
  ];

  return (
    <div className=" bg-white w-[50%] rounded-lg shadow-lg p-2 ">
      <h2 className="text-center my-5 text-3xl font-semibold">
        Make an Appointment, It{`'`}s Free
      </h2>
      <form>
        <div className="p-5">
          {/* Row 0  */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <Input
              type="text"
              label="Patient Name"
              placeholder="Write here..."
              labelPlacement="outside"
            />
            <Input
              type="text"
              label="Address"
              placeholder="Write here..."
              labelPlacement="outside"
            />
          </div>
          {/* Row 1  */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <Input
              type="number"
              label="Patient Age"
              placeholder="Write here..."
              labelPlacement="outside"
            />
            <Select
              //   color={color}
              label="Select Doctor"
              labelPlacement="outside"
              placeholder="Select a Gender"
              defaultSelectedKeys={[""]}
              className="max-w-xs"
            >
              {genderList.map((gender) => (
                <SelectItem key={gender.key}>{gender.label}</SelectItem>
              ))}
            </Select>
          </div>

          {/* Row 2  */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                type="number"
                label="Contact Number"
                placeholder="Write here..."
                labelPlacement="outside"
              />
            </div>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <LabDatePicker
                label="Appointment Date"
                date={date}
                setDate={setDate}
              />
            </div>
          </div>

          {/* Row 3  */}
          <div className="flex items-center justify-between gap-4 mb-5">
            {/* department Select  */}
            <Select
              //   color={color}
              label="Select Department"
              labelPlacement="outside"
              placeholder="Select a Department"
              //   defaultSelectedKeys={["eee"]}
              className="max-w-xs"
            >
              {departmentList.map((department) => (
                <SelectItem key={department.key}>{department.label}</SelectItem>
              ))}
            </Select>

            {/* doctor Select  */}
            <Select
              //   color={color}
              label="Select Doctor"
              labelPlacement="outside"
              placeholder="Select a Doctor"
              //   defaultSelectedKeys={["Dr. Imam Hossain"]}
              className="max-w-xs"
            >
              {doctorList.map((doctor) => (
                <SelectItem key={doctor.key}>{doctor.label}</SelectItem>
              ))}
            </Select>
          </div>
          {/* Row 4  */}
          <div className="flex items-center justify-between gap-4">
            <Textarea
              type="text"
              label="Add Notes"
              placeholder="Write in details if possible (Optional)"
              labelPlacement="outside"
            />
          </div>
          {/* Row 5  */}
          <div className="flex justify-end mt-10">
            <LabBtn link="/" text="Appointment" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
