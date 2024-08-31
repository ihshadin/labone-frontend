import Breadcamp from "@/utils/Breadcamp";
import MachineContent from "@/components/Machines/MachineContent";

const MachinesPage = () => {
  return (
    <>
      <Breadcamp title={"Our Machines"} subTitle="Machine" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <MachineContent />
      </div>
    </>
  );
};

export default MachinesPage;
