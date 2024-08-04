import Breadcamp from "@/utils/Breadcamp";
import DoctorContent from "@/components/Doctors/DoctorContent";

const DoctorsPage = () => {
  return (
    <>
      <Breadcamp title={"Our Doctors"} subTitle="Doctors" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <DoctorContent />
      </div>
    </>
  );
};

export default DoctorsPage;
