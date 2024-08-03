import DoctorCard from "@/components/Doctors/DoctorCard";
import DoctorPagination from "./DoctorPagination";
import DoctorsSearch from "./DoctorsSearch";
import { getDoctors } from "@/api/doctors";
import { TDoctor } from "@/types/doctors.type";

const ContentArea = async () => {
  const doctors = await getDoctors();
  return (
    <>
      <div className="mb-10 z-50">
        <DoctorsSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {doctors?.map((doctor: TDoctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <DoctorPagination />
      </div>
    </>
  );
};

export default ContentArea;
