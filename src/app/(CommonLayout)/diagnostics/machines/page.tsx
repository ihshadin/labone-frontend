import DgAllMachine from "@/components/Diagnostics/DgAllMachien";
import Breadcamp from "@/utils/Breadcamp";

const DgMachinesPage = () => {
  return (
    <>
      <Breadcamp
        title={"Our Diagnostic Machines"}
        subTitle="Diagnostic Machine"
      />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <DgAllMachine />
      </div>
    </>
  );
};

export default DgMachinesPage;
