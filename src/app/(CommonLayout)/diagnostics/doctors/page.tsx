import DgAllDoctors from "@/components/Diagnostics/DgAllDoctors";
import Breadcamp from "@/utils/Breadcamp";
import React from "react";

const DiagnosticDoctors = () => {
  return (
    <>
      <Breadcamp
        title={"Our Diagnostic Doctors"}
        subTitle="Diagnostic Doctors"
      />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <DgAllDoctors />
      </div>
    </>
  );
};

export default DiagnosticDoctors;
