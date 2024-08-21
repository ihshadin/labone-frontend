"use client";
import Breadcamp from "@/utils/Breadcamp";
import DoctorContent from "@/components/Doctors/DoctorContent";
import { useSearchParams } from "next/navigation";

const DoctorsPage = () => {
  const searchParams = useSearchParams();
  const departmentId = searchParams.get("departmentId");

  return (
    <>
      <Breadcamp title={"Our Doctors"} subTitle="Doctors" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <DoctorContent departmentId={departmentId} />
      </div>
    </>
  );
};

export default DoctorsPage;
