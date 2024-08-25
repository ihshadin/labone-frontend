"use client";
import { Suspense } from "react";
import Breadcamp from "@/utils/Breadcamp";
import DoctorContent from "@/components/Doctors/DoctorContent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorsPageContent = () => {
  const [departmentId, setDepartmentId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const department = searchParams.get("departmentId");
    setDepartmentId(department);
  }, [searchParams]);

  return <DoctorContent departmentId={departmentId} />;
};

const DoctorsPage = () => {
  return (
    <>
      <Breadcamp title={"Our Doctors"} subTitle="Doctors" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorsPageContent />
        </Suspense>
      </div>
    </>
  );
};

export default DoctorsPage;
